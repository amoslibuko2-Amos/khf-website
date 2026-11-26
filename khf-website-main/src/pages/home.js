// Main navigation.
// The new technical route is registered separately in src/main.js.
const links = [
  { href: '#/', label: 'Home' },
  { href: '#/about', label: 'About KHF' },
  { href: '#/competitions', label: 'Competitions' },
  { href: '#/fixtures', label: 'Fixtures & Results' },
  { href: '#/standings', label: 'Standings' },
  { href: '#/news', label: 'News' },
  { href: '#/national-teams', label: 'National Teams' },
  { href: '#/clubs', label: 'Clubs' },
  { href: '#/technical', label: 'Technical & Referees' },
  { href: '#/statistics', label: 'Statistics' },
  { href: '#/gallery', label: 'Gallery' },
  { href: '#/development', label: 'Development' },
  { href: '#/resources', label: 'Resources' },
  { href: '#/partners', label: 'Partners' },
  { href: '#/contact', label: 'Contact' },
];

export function header(activePath) {
  return `
    <div class="bg-khf-black text-slate-300 text-xs py-1.5">
      <div class="container-x flex justify-between items-center">
        <span>🇰🇪 Official Website of the Kenya Handball Federation</span>

        <div class="flex gap-2">
          <a
            href="#"
            class="border border-slate-700 rounded px-1.5 hover:bg-khf-red hover:border-khf-red hover:text-white"
          >FB</a>

          <a
            href="#"
            class="border border-slate-700 rounded px-1.5 hover:bg-khf-red hover:border-khf-red hover:text-white"
          >IG</a>

          <a
            href="#"
            class="border border-slate-700 rounded px-1.5 hover:bg-khf-red hover:border-khf-red hover:text-white"
          >YT</a>

          <a
            href="#"
            class="border border-slate-700 rounded px-1.5 hover:bg-khf-red hover:border-khf-red hover:text-white"
          >TT</a>
        </div>
      </div>
    </div>

    <header class="sticky top-0 z-40 bg-khf-black/95 backdrop-blur border-b-2 border-khf-red">
      <div class="container-x flex items-center justify-between gap-4 py-2.5 flex-wrap">
        <a href="#/" class="flex items-center gap-2.5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5MMx4mFSH-86-XpVUBpgGr3f7yhkn-wShhgewEe5Tw&s=10"
            alt="Kenya Handball Federation"
            class="w-11 h-11 rounded-full object-contain bg-white p-0.5 border-2 border-white shrink-0"
          />

          <div class="leading-tight">
            <strong class="block text-white font-head text-lg tracking-wide">
              Kenya Handball
            </strong>

            <span class="block text-khf-red text-[10px] font-semibold tracking-[2px] uppercase">
              Federation
            </span>
          </div>
        </a>

        <!-- Keep these IDs: the existing mobile-menu handler uses them. -->
        <button
          id="navToggle"
          type="button"
          aria-label="Toggle menu"
          aria-controls="mainNav"
          aria-expanded="false"
          class="md:hidden flex flex-col gap-1 p-2"
        >
          <span class="w-6 h-0.5 bg-white rounded"></span>
          <span class="w-6 h-0.5 bg-white rounded"></span>
          <span class="w-6 h-0.5 bg-white rounded"></span>
        </button>

        <nav
          id="mainNav"
          aria-label="Main navigation"
          class="hidden md:flex md:items-center md:flex-wrap gap-0.5 w-full md:w-auto order-3 md:order-2"
        >
          ${links.map((link) => {
            const clean = link.href.replace('#/', '').replace('#', '');
            const active = (activePath || '') === clean;

            return `
              <a
                href="${link.href}"
                ${active ? 'aria-current="page"' : ''}
                class="block text-[12.5px] font-medium px-2.5 py-2 rounded ${
                  active
                    ? 'text-white bg-white/10'
                    : 'text-slate-200 hover:bg-white/10 hover:text-white'
                }"
              >
                ${link.label}
              </a>
            `;
          }).join('')}
        </nav>
      </div>
    </header>
  `;
}
// src/pages/home.js
// The router imports this default export to display the homepage.
// The shared layout already adds the header and footer,
// so this page returns only homepage content.

export default function home() {
  return `
    <!-- Homepage introduction -->
    <section class="bg-khf-black text-white border-b-4 border-khf-red">
      <div class="container-x py-16 md:py-24">
        <p class="text-khf-gold text-xs font-bold uppercase tracking-widest mb-4">
          Kenya Handball Federation
        </p>

        <h1 class="font-head text-4xl md:text-6xl font-bold leading-tight mb-6">
          Passion. Performance. Pride.
        </h1>

        <p class="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
          Explore Kenyan handball: competitions, clubs, national teams,
          fixtures and opportunities to develop the game.
        </p>

        <div class="flex flex-wrap gap-4 mt-8">
          <a
            href="#/fixtures"
            class="inline-block bg-khf-red hover:bg-khf-dark text-white font-semibold rounded-lg px-6 py-3"
          >
            Fixtures & Results
          </a>

          <a
            href="#/about"
            class="inline-block border border-slate-500 hover:bg-white/10 text-white font-semibold rounded-lg px-6 py-3"
          >
            About KHF
          </a>
        </div>
      </div>
    </section>

    <!-- Main destinations -->
    <section class="bg-khf-light">
      <div class="container-x py-12 md:py-16">
        <div class="mb-8">
          <p class="text-khf-red text-xs font-bold uppercase tracking-widest mb-2">
            Discover the game
          </p>

          <h2 class="font-head text-3xl md:text-4xl font-bold text-khf-black">
            Explore Kenyan handball
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <article class="bg-white border border-slate-200 rounded-xl p-6">
            <h3 class="font-head text-2xl font-bold text-khf-black mb-3">
              Competitions
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-5">
              Browse competitions and follow the action throughout the season.
            </p>
            <a href="#/competitions" class="text-khf-red font-semibold hover:underline">
              View competitions →
            </a>
          </article>

          <article class="bg-white border border-slate-200 rounded-xl p-6">
            <h3 class="font-head text-2xl font-bold text-khf-black mb-3">
              Fixtures & Results
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-5">
              Find scheduled matches and published results.
            </p>
            <a href="#/fixtures" class="text-khf-red font-semibold hover:underline">
              View fixtures →
            </a>
          </article>

          <article class="bg-white border border-slate-200 rounded-xl p-6">
            <h3 class="font-head text-2xl font-bold text-khf-black mb-3">
              Standings
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-5">
              Follow league tables and your club’s position.
            </p>
            <a href="#/standings" class="text-khf-red font-semibold hover:underline">
              View standings →
            </a>
          </article>

          <article class="bg-white border border-slate-200 rounded-xl p-6">
            <h3 class="font-head text-2xl font-bold text-khf-black mb-3">
              National Teams
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-5">
              Explore the teams representing Kenya.
            </p>
            <a href="#/national-teams" class="text-khf-red font-semibold hover:underline">
              Explore national teams →
            </a>
          </article>

          <article class="bg-white border border-slate-200 rounded-xl p-6">
            <h3 class="font-head text-2xl font-bold text-khf-black mb-3">
              Clubs
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-5">
              Discover clubs and their published team information.
            </p>
            <a href="#/clubs" class="text-khf-red font-semibold hover:underline">
              Explore clubs →
            </a>
          </article>

          <article class="bg-white border border-slate-200 border-t-4 border-t-khf-red rounded-xl p-6">
            <h3 class="font-head text-2xl font-bold text-khf-black mb-3">
              Technical & Referees
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-5">
              Find officiating guidance and information about referee development.
            </p>
            <a href="#/technical" class="text-khf-red font-semibold hover:underline">
              Visit the technical section →
            </a>
          </article>
        </div>
      </div>
    </section>

    <!-- News and development links -->
    <section class="bg-white">
      <div class="container-x py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <article class="border border-slate-200 rounded-xl p-6 md:p-8">
          <h2 class="font-head text-3xl font-bold text-khf-black mb-4">
            News & Updates
          </h2>
          <p class="text-slate-600 leading-relaxed mb-6">
            Browse published stories and federation updates.
          </p>
          <a href="#/news" class="text-khf-red font-semibold hover:underline">
            Read the news →
          </a>
        </article>

        <article class="bg-khf-black rounded-xl p-6 md:p-8">
          <h2 class="font-head text-3xl font-bold text-white mb-4">
            Grow the Game
          </h2>
          <p class="text-slate-300 leading-relaxed mb-6">
            Explore handball development and ways to get involved.
          </p>
          <a href="#/development" class="text-khf-gold font-semibold hover:underline">
            Explore development →
          </a>
        </article>
      </div>
    </section>
  `;
}
