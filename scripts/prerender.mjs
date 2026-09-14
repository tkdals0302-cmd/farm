/**
 * 프리렌더링: 빌드된 SPA(out/)를 헤드리스 크로미움으로 열어
 * 모든 라우트의 완성 HTML을 스냅샷으로 저장한다. (네이버 등 JS 미실행 봇 대응)
 *
 * 설계 원칙: 어떤 단계가 실패해도 배포는 살린다 (exit 0, SPA 그대로 서빙).
 * 실행: vite build 이후 `node scripts/prerender.mjs`
 * 로컬 테스트: PRERENDER_CHROMIUM=/path/to/chrome node scripts/prerender.mjs
 */
import { createServer } from 'node:http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'out');
const PORT = 4173;

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.svg': 'image/svg+xml', '.json': 'application/json', '.xml': 'application/xml',
  '.txt': 'text/plain', '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2',
};

function collectRoutes() {
  const routes = [
    '/', '/portfolio', '/privacy',
    '/info/kerafoxy', '/info/kerafoxy-price', '/info/kerafoxy-product',
    '/info/comparison', '/info/why-grout', '/info/polyurea',
  ];
  const dataTs = readFileSync(join(ROOT, 'src/data/portfolio.ts'), 'utf8');
  for (const m of dataTs.matchAll(/slug:\s*["']([a-z0-9-]+)["']/g)) {
    routes.push(`/portfolio/${m[1]}`);
  }
  return [...new Set(routes)];
}

function startServer(template) {
  const server = createServer((req, res) => {
    try {
      const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
      const safe = normalize(urlPath).replace(/^(\.\.[/\\])+/, '');
      const filePath = join(OUT, safe);
      if (safe !== '/' && existsSync(filePath) && extname(filePath)) {
        res.writeHead(200, { 'content-type': MIME[extname(filePath).toLowerCase()] || 'application/octet-stream' });
        res.end(readFileSync(filePath));
        return;
      }
    } catch { /* fallthrough to SPA */ }
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    res.end(template); // SPA 폴백은 항상 원본 템플릿 (스냅샷 덮어쓰기와 무관)
  });
  return new Promise((resolve) => server.listen(PORT, '127.0.0.1', () => resolve(server)));
}

async function launchBrowser() {
  const { chromium } = await import('playwright-core');
  if (process.env.PRERENDER_CHROMIUM) {
    return chromium.launch({ executablePath: process.env.PRERENDER_CHROMIUM });
  }
  // Vercel(Amazon Linux) 빌드 환경: 서버리스용 크로미움 사용 (시스템 라이브러리 내장)
  const sparticuz = (await import('@sparticuz/chromium')).default;
  return chromium.launch({
    executablePath: await sparticuz.executablePath(),
    args: sparticuz.args,
    headless: true,
  });
}

async function main() {
  const templatePath = join(OUT, 'index.html');
  if (!existsSync(templatePath)) throw new Error('out/index.html 없음 — vite build 먼저');
  const template = readFileSync(templatePath, 'utf8');

  const routes = collectRoutes();
  console.log(`[prerender] 라우트 ${routes.length}개`);

  const server = await startServer(template);
  const browser = await launchBrowser();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  let ok = 0;
  for (const route of routes) {
    try {
      await page.goto(`http://127.0.0.1:${PORT}${route}`, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(700); // 늦게 붙는 JSON-LD·메타 대기
      const rootHasContent = await page.evaluate(
        () => (document.getElementById('root')?.innerText || '').trim().length > 50);
      if (!rootHasContent) {
        console.warn(`[prerender] 건너뜀(본문 없음): ${route}`);
        continue;
      }
      let html = await page.content();
      if (!html.toLowerCase().startsWith('<!doctype')) html = '<!DOCTYPE html>\n' + html;
      html = html.replace('<html', '<!-- prerendered --><html');
      const dest = route === '/' ? templatePath : join(OUT, route.slice(1), 'index.html');
      mkdirSync(dirname(dest), { recursive: true });
      writeFileSync(dest, html);
      ok += 1;
      console.log(`[prerender] OK ${route}`);
    } catch (e) {
      console.warn(`[prerender] 실패(계속 진행): ${route} — ${e.message}`);
    }
  }

  await browser.close();
  server.close();
  console.log(`[prerender] 완료: ${ok}/${routes.length}`);
  if (ok === 0) throw new Error('스냅샷 0개 — 프리렌더 미적용 상태로 배포');
}

main().catch((e) => {
  console.warn(`[prerender] 전체 실패 — SPA 그대로 배포함: ${e.message}`);
  process.exit(0); // 배포는 살린다
});
