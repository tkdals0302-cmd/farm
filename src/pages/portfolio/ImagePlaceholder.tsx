// design_guide §05 ".imgph" 패턴의 React 컴포넌트화.
// 자체 촬영 사진이 없거나 이미지가 onError로 실패한 경우 fallback으로 사용.
// AI/도용 사진 금지 원칙(design_guide §00 #6, §10)에 따라 빈 자리는 이 placeholder로 채움.

export default function ImagePlaceholder({
  corner,
  label,
  dark = false,
  className = '',
}: {
  corner?: string;
  label?: string;
  dark?: boolean;
  className?: string;
}) {
  const bg = dark
    ? 'bg-[#1f1a14] border-[var(--dark-line)]'
    : 'bg-[var(--bg-2)] border-[var(--line)]';
  const labelColor = dark ? 'text-[var(--dark-muted)]' : 'text-[var(--muted-2)]';
  const stripe = dark
    ? 'repeating-linear-gradient(135deg,transparent 0 14px,rgba(255,255,255,.022) 14px 28px)'
    : 'repeating-linear-gradient(135deg,transparent 0 14px,rgba(28,25,22,.022) 14px 28px)';
  const radial = dark
    ? 'radial-gradient(120% 80% at 50% 100%, rgba(0,0,0,.5), transparent 60%)'
    : 'radial-gradient(120% 80% at 50% 100%, rgba(28,25,22,.07), transparent 60%)';

  return (
    <div className={`absolute inset-0 overflow-hidden border ${bg} ${className}`}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: stripe }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: radial }} />
      {corner && (
        <span className={`absolute right-3.5 top-3 text-[9.5px] tracking-[0.12em] uppercase opacity-75 ${labelColor}`}>
          {corner}
        </span>
      )}
      {label && (
        <span className={`absolute left-4 bottom-3.5 z-[1] flex items-center gap-2.5 text-[10.5px] tracking-[0.14em] uppercase ${labelColor}`}>
          <span className="inline-block w-1.5 h-1.5 bg-[var(--accent)]" />
          <span>{label}</span>
        </span>
      )}
    </div>
  );
}
