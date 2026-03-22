import { useState, FormEvent } from 'react';
import DatePicker from './DatePicker';

const AREAS = ['현관', '화장실', '베란다', '거실', '주방', '수영장', '목욕탕', '기타'];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function formatPhoneNumber(value: string) {
  if (value.length <= 3) return value;
  if (value.length <= 7) return `${value.slice(0, 3)}-${value.slice(3)}`;
  return `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7, 11)}`;
}

export default function QuoteFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const MAX_CHARS = 500;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[0-9]/g, '').slice(0, 9);
    setName(value);
    setErrors((prev) => ({ ...prev, name: '' }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 11);
    setPhone(value);
    setErrors((prev) => ({ ...prev, phone: '' }));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value.slice(0, 39));
    setErrors((prev) => ({ ...prev, location: '' }));
  };

  const handleDateChange = (nextDate: string) => {
    setDate(nextDate);
    setErrors((prev) => ({ ...prev, date: '' }));
  };

  const toggleArea = (area: string) => {
    setSelectedAreas((prev) => {
      const exists = prev.includes(area);
      const next = exists ? prev.filter((a) => a !== area) : [...prev, area];
      return next;
    });
    setErrors((prev) => ({ ...prev, areas: '' }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrors((prev) => ({ ...prev, email: '' }));
  };

  const handlePrivacyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrivacyAgreed(e.target.checked);
    setErrors((prev) => ({ ...prev, privacy: '' }));
  };

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};

    if (!name.trim()) nextErrors.name = '이름을 입력해주세요.';
    if (!phone.length) nextErrors.phone = '연락처를 입력해주세요.';
    else if (phone.length < 10) nextErrors.phone = '올바른 연락처를 입력해주세요.';
    if (!location.trim()) nextErrors.location = '시공위치를 입력해주세요.';
    if (!date) nextErrors.date = '희망날짜를 선택해주세요.';
    if (selectedAreas.length === 0) nextErrors.areas = '시공공간을 1개 이상 선택해주세요.';
    if (email && !EMAIL_REGEX.test(email)) {
      nextErrors.email = '올바른 이메일 형식으로 입력해주세요. (예: example@domain.com)';
    }
    if (!privacyAgreed) nextErrors.privacy = '개인정보처리방침에 동의해주세요.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const isFormValid =
    name.trim().length > 0 &&
    phone.length >= 10 &&
    location.trim().length > 0 &&
    date.length > 0 &&
    selectedAreas.length > 0 &&
    privacyAgreed &&
    (!email || EMAIL_REGEX.test(email));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    const form = e.currentTarget;
    const textareaVal = (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value || '';
    if (textareaVal.length > MAX_CHARS) return;

    const data = new FormData(form);
    const params = new URLSearchParams();
    data.forEach((value, key) => {
      if (key !== 'phone') {
        params.append(key, value.toString());
      }
    });
    params.append('phone', phone);

    setLoading(true);
    try {
      await fetch('https://script.google.com/macros/s/AKfycbyQBvfjjtCFSY4WZUL2Qv_vIwz4xbXyLF5pygpV5d_jpICW_hhXnDnr1r6jZHhS_kEayA/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      setSubmitted(true);
      setName('');
      setPhone('');
      setLocation('');
      setDate('');
      setSelectedAreas([]);
      setEmail('');
      setPrivacyAgreed(false);
      setCharCount(0);
      setErrors({});
    } catch {
      alert('제출 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote" className="py-20 px-6 md:px-12 lg:px-20 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-widest text-stone-400 uppercase">Free Estimate</span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 mt-2">무료 견적 상담 신청</h2>
          <p className="text-stone-500 mt-3">양식을 작성하시면 24시간 내 연락드립니다</p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 flex items-center justify-center bg-stone-900 rounded-full mx-auto mb-4">
                <i className="ri-check-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">신청이 완료되었습니다!</h3>
              <p className="text-stone-500 text-sm">24시간 내에 담당자가 연락드릴 예정입니다.<br />감사합니다.</p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setPhone('');
                  setLocation('');
                  setDate('');
                  setSelectedAreas([]);
                  setEmail('');
                  setPrivacyAgreed(false);
                  setCharCount(0);
                  setErrors({});
                }}
                className="mt-6 text-sm text-stone-400 underline cursor-pointer"
              >
                다시 신청하기
              </button>
            </div>
          ) : (
            <form
              data-readdy-form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">
                    이름 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={handleNameChange}
                    maxLength={9}
                    placeholder="홍길동"
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">
                    연락처 <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formatPhoneNumber(phone)}
                      onChange={handlePhoneChange}
                      inputMode="numeric"
                      maxLength={13}
                      placeholder="010-1234-5678"
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm text-stone-700 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"
                    />
                    <span className={`absolute right-4 top-3 text-xs font-medium ${phone.length >= 10 ? 'text-green-600' : 'text-stone-400'}`}>
                      {phone.length}/11
                    </span>
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">
                    시공 위치 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={location}
                    onChange={handleLocationChange}
                    maxLength={39}
                    placeholder="예: 서울 강남구 역삼동"
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"
                  />
                  {errors.location && <p className="mt-1 text-xs text-red-500">{errors.location}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">
                    희망 날짜 <span className="text-red-400">*</span>
                  </label>
                  <DatePicker name="date" onChange={handleDateChange} />
                  {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
                </div>
              </div>

              {/* Area Selector */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  시공 공간 (중복 선택 가능) <span className="text-red-400">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {AREAS.map((area) => (
                    <label key={area} className="cursor-pointer">
                      <input
                        type="checkbox"
                        name="areas"
                        value={area}
                        checked={selectedAreas.includes(area)}
                        onChange={() => toggleArea(area)}
                        className="sr-only peer"
                      />
                      <span className="inline-block px-4 py-2 rounded-full border border-stone-200 text-sm text-stone-600 peer-checked:bg-[#967353] peer-checked:text-white peer-checked:border-[#967353] transition-all cursor-pointer whitespace-nowrap">
                        {area}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.areas && <p className="mt-1 text-xs text-red-500">{errors.areas}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  상세 내용
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    rows={4}
                    maxLength={MAX_CHARS}
                    onChange={(e) => setCharCount(e.target.value.length)}
                    placeholder="시공 면적, 현재 상태, 요청 사항 등을 자유롭게 작성해 주세요."
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors resize-none"
                  />
                  <span className="absolute bottom-3 right-4 text-xs text-stone-400">
                    {charCount} / {MAX_CHARS}
                  </span>
                </div>
              </div>
                  <div className="border-t text-sm text-center text-stone-500 px-4 py-3 border-stone-200">
                    희망 날짜에 시공이 어려울 수 있는 점 양해 부탁드립니다. <br />
                    <span className= "font-bold text-red-400">정확한 시공 가능 일정은 상담 후 안내드리며,</span> 최대한 희망에 맞춰 드릴 수 있도록 노력하겠습니다.
                  </div>
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  이메일
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* Privacy */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  checked={privacyAgreed}
                  onChange={handlePrivacyChange}
                  className="w-5 h-5 mt-0.5 cursor-pointer accent-[#967353]"
                />
                <label htmlFor="privacy" className="text-sm text-stone-400 leading-relaxed cursor-pointer">
                  수집된 개인정보(이름, 연락처, 이메일)는 견적 상담 목적으로만 사용되며,
                  상담 완료 후 즉시 폐기됩니다. <strong className="text-[#967353]">개인정보 처리방침</strong>에 동의합니다.
                </label>
              </div>
              {errors.privacy && <p className="-mt-3 text-xs text-red-500">{errors.privacy}</p>}

              <button
                type="submit"
                disabled={loading || !isFormValid}
                className="w-full py-4 bg-stone-900 text-white font-semibold text-base rounded-full hover:bg-[#967353] transition-all cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? '제출 중...' : '견적 신청하기'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
