import { useState } from 'react';

interface DatePickerProps {
  name?: string;
  onChange?: (date: string) => void;
}

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatDate(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function formatDateKo(d: Date) {
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 (${DAYS[d.getDay()]})`;
}

export default function DatePicker({ name = 'date', onChange }: DatePickerProps) {
  const today = new Date();
  const [isOpen, setIsOpen] = useState(false);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const changeMonth = (dir: number) => {
    const d = new Date(viewYear, viewMonth + dir, 1);
    setViewYear(d.getFullYear());
    setViewMonth(d.getMonth());
  };

  const selectDate = (date: Date) => {
    setSelectedDate(date);
    onChange?.(formatDate(date));
    setIsOpen(false);
  };

  const clearDate = () => {
    setSelectedDate(null);
    onChange?.('');
  };

  const goToday = () => {
    setViewYear(today.getFullYear());
    setViewMonth(today.getMonth());
    selectDate(today);
  };

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const cells = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(viewYear, viewMonth, i + 1)),
  ];

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-stone-200 bg-white hover:border-stone-400 transition-all duration-150"
      >
        <span className={`text-sm ${selectedDate ? 'text-stone-800' : 'text-stone-400'}`}>
          {selectedDate ? formatDateKo(selectedDate) : '날짜를 선택해 주세요'}
        </span>
        <i className="ri-calendar-line text-stone-400 text-base"></i>
      </button>

      <input type="hidden" name={name} value={selectedDate ? formatDate(selectedDate) : ''} />

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full bg-white border border-stone-100 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 pt-5 pb-3">
            <button
              type="button"
              onClick={() => changeMonth(-1)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors"
            >
              <i className="ri-arrow-left-s-line text-stone-500"></i>
            </button>
            <span className="text-sm font-medium text-stone-800 tracking-tight">
              {viewYear}년 {viewMonth + 1}월
            </span>
            <button
              type="button"
              onClick={() => changeMonth(1)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors"
            >
              <i className="ri-arrow-right-s-line text-stone-500"></i>
            </button>
          </div>

          <div className="grid grid-cols-7 px-3 pb-1">
            {DAYS.map((day, i) => (
              <div
                key={day}
                className={`text-center text-xs font-medium py-1 ${
                  i === 0 ? 'text-red-400' : i === 6 ? 'text-blue-400' : 'text-stone-400'
                }`}
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 px-3 pb-4 gap-y-1">
            {cells.map((date, idx) => {
              if (!date) return <div key={`empty-${idx}`} />;

              const isPast = date < todayMidnight;
              const isToday = isSameDay(date, today);
              const isSelected = selectedDate ? isSameDay(date, selectedDate) : false;
              const isSun = date.getDay() === 0;
              const isSat = date.getDay() === 6;

              let cls =
                'w-9 h-9 mx-auto flex items-center justify-center rounded-full text-sm transition-all duration-100 ';

              if (isSelected) {
                cls += 'bg-stone-900 text-white font-medium';
              } else if (isPast) {
                cls += 'text-stone-200 cursor-not-allowed';
              } else if (isToday) {
                cls += 'border border-[#967353] text-[#967353] font-medium hover:bg-[#967353]/10';
              } else if (isSun) {
                cls += 'text-red-400 hover:bg-red-50';
              } else if (isSat) {
                cls += 'text-blue-400 hover:bg-blue-50';
              } else {
                cls += 'text-stone-700 hover:bg-stone-100';
              }

              return (
                <button
                  key={date.toISOString()}
                  type="button"
                  disabled={isPast}
                  onClick={() => selectDate(date)}
                  className={cls}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          <div className="border-t border-stone-100 px-4 py-3 flex justify-between items-center">
            <button
              type="button"
              onClick={clearDate}
              className="text-xs text-stone-400 hover:text-stone-600 transition-colors"
            >
              초기화
            </button>
            <button
              type="button"
              onClick={goToday}
              className="text-xs font-medium text-[#967353] hover:text-[#7f5f45] transition-colors"
            >
              오늘
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
