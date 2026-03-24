const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: 'https://readdy.ai/api/search-image?query=bathroom%20tile%20grout%20work%20before%20after%20renovation%20white%20clean%20professional%20close%20up%20detail%20shot%20instagram%20style&width=400&height=400&seq=ig1&orientation=squarish',
    likes: 142,
    comments: 18,
  },
  {
    id: 2,
    image: 'https://readdy.ai/api/search-image?query=kitchen%20backsplash%20tile%20grout%20fresh%20renovation%20clean%20lines%20modern%20interior%20instagram%20close%20up%20detail&width=400&height=400&seq=ig2&orientation=squarish',
    likes: 98,
    comments: 12,
  },
  {
    id: 3,
    image: 'https://readdy.ai/api/search-image?query=balcony%20floor%20tiles%20grout%20renovation%20complete%20apartment%20outdoor%20space%20clean%20fresh%20instagram%20photo&width=400&height=400&seq=ig3&orientation=squarish',
    likes: 203,
    comments: 31,
  },
  {
    id: 4,
    image: 'https://readdy.ai/api/search-image?query=shower%20wall%20tiles%20grout%20work%20professional%20detail%20clean%20white%20minimalist%20before%20after%20instagram%20quality&width=400&height=400&seq=ig4&orientation=squarish',
    likes: 176,
    comments: 24,
  },
  {
    id: 5,
    image: 'https://readdy.ai/api/search-image?query=swimming%20pool%20tile%20grout%20blue%20water%20renovation%20complete%20professional%20quality%20instagram%20clean&width=400&height=400&seq=ig5&orientation=squarish',
    likes: 289,
    comments: 42,
  },
  {
    id: 6,
    image: 'https://readdy.ai/api/search-image?query=living%20room%20floor%20tile%20grout%20renovation%20modern%20interior%20clean%20professional%20instagram%20detail%20shot&width=400&height=400&seq=ig6&orientation=squarish',
    likes: 115,
    comments: 9,
  },
  {
    id: 7,
    image: 'https://readdy.ai/api/search-image?query=entrance%20hall%20marble%20tile%20grout%20renovation%20elegant%20clean%20professional%20instagram%20quality%20photo&width=400&height=400&seq=ig7&orientation=squarish',
    likes: 158,
    comments: 22,
  },
  {
    id: 8,
    image: 'https://readdy.ai/api/search-image?query=grout%20application%20tool%20professional%20worker%20hands%20tile%20renovation%20process%20instagram%20behind%20scenes%20workmanship&width=400&height=400&seq=ig8&orientation=squarish',
    likes: 241,
    comments: 37,
  },
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="py-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: '#f5f3ee' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6 sm:mb-10">
          <div>
             <span className="text-xs font-semibold tracking-widest text-stone-400 uppercase">live working</span>
            {/* <span className="inline-flex items-center gap-2 bg-white text-stone-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              <i className="ri-instagram-line"></i>
              Instagram
            </span> */}
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
              실시간 시공 현장
            </h2>
          </div>
          <a
            href="https://www.instagram.com/ssang_men"
            target="_blank"
            rel="nofollow noreferrer"
            className="inline-flex items-center gap-2 px-10 py-3 bg-stone-900 text-white text-sm font-semibold rounded-full hover:bg-stone-700 transition-all cursor-pointer whitespace-nowrap self-start md:self-auto"
          >
            <i className="ri-instagram-line pt-1 sm:pt-0.5"></i>
            팔로우하기
          </a>
        </div>

        {/* Features row */}
        <div className="flex flex-wrap gap-3 sm:gap-8 mb-8">
          {['매일 업데이트', '시공 전/후 비교', '고객 후기 공유', '이벤트 & 프로모션'].map((label) => (
            <span key={label} className="text-stone-500 text-sm flex items-center gap-1.5">
              <i className="ri-check-line w-4 h-4 flex pl-[1px] justify-center items-center bg-green-600 text-white text-[14px] font-black rounded-full"></i>
              {label}
            </span>
          ))}
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-10">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/ssang_men"
              target="_blank"
              rel="nofollow noreferrer"
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-stone-200"
              style={{ aspectRatio: '1/1' }}
            >
              <img
                src={post.image}
                alt={`인스타그램 게시물 ${post.id}`}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <span className="text-white text-sm font-semibold flex items-center gap-1.5">
                  <i className="ri-heart-fill text-red-500"></i>
                  {post.likes}
                </span>
                <span className="text-white text-sm font-semibold flex items-center gap-1.5">
                  <i className="ri-chat-1-fill text-white"></i>
                  {post.comments}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-stone-500 text-sm">
            더 많은 시공 사례를 인스타그램에서 확인하세요 ·{' '}
            <a
              href="https://www.instagram.com/ssang_men"
              target="_blank"
              rel="nofollow noreferrer"
              className="text-stone-900 font-semibold underline underline-offset-2 cursor-pointer hover:text-stone-700"
            >
              @detail Line 방문하기
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
