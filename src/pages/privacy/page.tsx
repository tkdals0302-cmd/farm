import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const SECTIONS = [
  {
    title: '1. 개인정보의 처리 목적',
    body: (
      <>
        <p>디테일라인(이하 "회사")은 다음의 목적을 위하여 개인정보를 처리하며, 다음의 목적 이외의 용도로는 이용하지 않습니다.</p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li>견적 상담 및 방문 일정 조율</li>
          <li>시공 서비스 안내, 견적 회신, 후속 응대</li>
          <li>본인 확인 및 부정 이용 방지</li>
        </ul>
      </>
    ),
  },
  {
    title: '2. 수집하는 개인정보 항목',
    body: (
      <>
        <p>회사는 무료 견적 상담 신청 시 다음의 개인정보를 수집합니다.</p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li><strong>필수 항목</strong>: 이름, 연락처(휴대전화), 시공 위치(주소), 희망 시공 일정, 시공 공간(현관/화장실/베란다 등)</li>
          <li><strong>선택 항목</strong>: 이메일, 상세 시공 내역(요청 사항)</li>
          <li><strong>자동 수집</strong>: 접속 일시(상담 신청 시각)</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. 개인정보의 보유 및 이용 기간',
    body: (
      <>
        <p>수집된 개인정보는 상담 완료 후 즉시 폐기하는 것을 원칙으로 합니다.</p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li>상담 완료(견적 회신 또는 거절 의사 확인) 후 지체 없이 파기</li>
          <li>다만, 시공 계약이 체결된 경우에는 「전자상거래 등에서의 소비자보호에 관한 법률」 등 관계 법령에 따라 거래 기록을 5년간 보관할 수 있습니다.</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. 개인정보의 제3자 제공 및 처리 위탁',
    body: (
      <>
        <p>회사는 정보주체의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 견적 신청서 접수 처리를 위해 다음의 클라우드 서비스를 이용합니다.</p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li><strong>Google LLC (Google Workspace · Apps Script)</strong> — 견적 신청 데이터 저장 및 처리. 데이터 처리 위치: 미국</li>
        </ul>
        <p className="mt-3 text-stone-500 text-sm">
          위 위탁업체는 Google이 제공하는 표준 데이터 보호 약관에 따라 운영되며, 회사는 위탁 처리 과정을 정기적으로 점검합니다.
        </p>
      </>
    ),
  },
  {
    title: '5. 개인정보의 파기 절차 및 방법',
    body: (
      <>
        <p>회사는 보유 기간이 경과하거나 처리 목적이 달성된 개인정보를 다음의 절차와 방법에 따라 지체 없이 파기합니다.</p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li><strong>파기 절차</strong>: 상담 완료 시점에 자동/수동으로 식별, 즉시 파기 처리</li>
          <li><strong>전자적 파일</strong>: 복원이 불가능한 방법으로 영구 삭제</li>
          <li><strong>출력물</strong>: 분쇄 또는 소각</li>
        </ul>
      </>
    ),
  },
  {
    title: '6. 정보주체의 권리·의무 및 행사 방법',
    body: (
      <>
        <p>정보주체는 회사에 대해 언제든지 다음의 권리를 행사할 수 있습니다.</p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li>개인정보 열람 요구</li>
          <li>오류 등이 있을 경우 정정 요구</li>
          <li>삭제 요구</li>
          <li>처리 정지 요구</li>
        </ul>
        <p className="mt-3">
          위 권리 행사는 아래 연락처를 통해 요청하실 수 있으며, 회사는 지체 없이 조치합니다.
        </p>
      </>
    ),
  },
  {
    title: '7. 개인정보의 안전성 확보 조치',
    body: (
      <>
        <p>회사는 개인정보 보호를 위해 다음의 조치를 취하고 있습니다.</p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li>관리적 조치: 개인정보 취급자 최소화, 정기 점검</li>
          <li>기술적 조치: 전송 구간 HTTPS 암호화, 접근 권한 통제</li>
          <li>물리적 조치: 자료 보관 장소 출입 통제</li>
        </ul>
      </>
    ),
  },
  {
    title: '8. 개인정보 보호 책임자',
    body: (
      <>
        <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다.</p>
        <div className="mt-3 p-4 bg-stone-50 rounded-xl text-sm space-y-1">
          <p><strong>상호</strong>: 디테일라인</p>
          <p><strong>사업자등록번호</strong>: 609-33-19473</p>
          <p><strong>주소</strong>: 서울 서초구 본마을4길 11 1층 104호</p>
          <p><strong>연락처</strong>: 010-8005-6674</p>
        </div>
      </>
    ),
  },
  {
    title: '9. 권익 침해 구제 방법',
    body: (
      <>
        <p>개인정보 침해로 인한 구제가 필요한 경우 아래 기관에 문의하실 수 있습니다.</p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li>개인정보분쟁조정위원회: 1833-6972 (privacy.go.kr)</li>
          <li>개인정보침해신고센터: 118 (privacy.kisa.or.kr)</li>
          <li>대검찰청 사이버수사과: 1301 (spo.go.kr)</li>
          <li>경찰청 사이버수사국: 182 (ecrm.cyber.go.kr)</li>
        </ul>
      </>
    ),
  },
  {
    title: '10. 개인정보 처리방침의 변경',
    body: (
      <>
        <p>이 개인정보 처리방침은 2026년 4월 29일부터 적용됩니다. 법령·정책 또는 보안 기술의 변경에 따라 내용이 추가, 삭제 및 수정될 경우 시행 7일 전부터 본 페이지를 통해 공지합니다.</p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-widest text-stone-400 uppercase">Privacy Policy</span>
            <h1 className="text-4xl md:text-5xl font-black text-stone-900 mt-2">개인정보 처리방침</h1>
            <p className="text-stone-500 mt-3 text-sm">시행일: 2026년 4월 29일</p>
          </div>

          <p className="text-stone-600 leading-relaxed mb-12">
            디테일라인(이하 "회사")은 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.
          </p>

          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-3">{section.title}</h2>
                <div className="text-stone-600 leading-relaxed text-sm md:text-base">{section.body}</div>
              </section>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-stone-200 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 transition-colors"
            >
              <i className="ri-arrow-left-line"></i>
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
