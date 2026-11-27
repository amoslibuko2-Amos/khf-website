const links = [
  { href: '#/', label: 'Home' },
  { href: '#/about', label: 'About KHF' },
  { href: '#/competitions', label: 'Competitions' },
  { href: '#/fixtures', label: 'Fixtures & Results' },
  { href: '#/standings', label: 'Standings' },
  { href: '#/news', label: 'News' },
  { href: '#/national-teams', label: 'National Teams' },
  { href: '#/clubs', label: 'Clubs' },
  { href: '#/statistics', label: 'Statistics' },
  { href: '#/gallery', label: 'Gallery' },
  { href: '#/development', label: 'Development' },
  { href: '#/resources', label: 'Resources' },
  { href: '#/partners', label: 'Partners' },
  { href: '#/contact', label: 'Contact' },
  {href:'#/technical,label:'technical'},
];

export function header(activePath) {
  return `
  <div class="bg-khf-black text-slate-300 text-xs py-1.5">
    <div class="container-x flex justify-between items-center">
      <span>🇰🇪 Official Website of the Kenya Handball Federation</span>
      <div class="flex gap-2">
        <a href="#" class="border border-slate-700 rounded px-1.5 hover:bg-khf-red hover:border-khf-red hover:text-white">FB</a>
        <a href="#" class="border border-slate-700 rounded px-1.5 hover:bg-khf-red hover:border-khf-red hover:text-white">IG</a>
        <a href="#" class="border border-slate-700 rounded px-1.5 hover:bg-khf-red hover:border-khf-red hover:text-white">YT</a>
        <a href="#" class="border border-slate-700 rounded px-1.5 hover:bg-khf-red hover:border-khf-red hover:text-white">TT</a>
      </div>
    </div>
  </div>
  <header class="sticky top-0 z-40 bg-khf-black/95 backdrop-blur border-b-2 border-khf-red">
    <div class="container-x flex items-center justify-between gap-4 py-2.5 flex-wrap">
      <a href="#/" class="flex items-center gap-2.5">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5MMx4mFSH-86-XpVUBpgGr3f7yhkn-wShhgewEe5Tw&s=10" alt="KHF" class="w-11 h-11 rounded-full object-contain bg-white p-0.5 border-2 border-white shrink-0" />
        <div class="leading-tight">
          <strong class="block text-white font-head text-lg tracking-wide">Kenya Handball</strong>
          <span class="block text-khf-red text-[10px] font-semibold tracking-[2px] uppercase">Federation</span>
        </div>
      </a>
      <button id="navToggle" aria-label="Toggle menu" aria-expanded="false" class="md:hidden flex flex-col gap-1 p-2">
        <span class="w-6 h-0.5 bg-white rounded"></span>
        <span class="w-6 h-0.5 bg-white rounded"></span>
        <span class="w-6 h-0.5 bg-white rounded"></span>
      </button>
      <nav id="mainNav" class="hidden md:flex md:items-center md:flex-wrap gap-0.5 w-full md:w-auto order-3 md:order-2">
        ${links.map(l => {
          const clean = l.href.replace('#/', '').replace('#', '');
          const active = (activePath || '') === clean;
          return `<a href="${l.href}" class="block text-[12.5px] font-medium px-2.5 py-2 rounded ${active ? 'text-white bg-white/10' : 'text-slate-200 hover:bg-white/10 hover:text-white'}">${l.label}</a>`;
        }).join('')}
      </nav>
    </div>
  </header>`;
}
