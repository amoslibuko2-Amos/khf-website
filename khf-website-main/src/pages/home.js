import { news, fixtures, standings } from '../data.js';

export default function home() {
  const upcoming = fixtures.filter(f => f.status === 'Scheduled').slice(0, 3);
  const results = fixtures.filter(f => f.status === 'Completed').slice(0, 3);
  const top5 = standings['premier-men'];

  return `
  <!-- HERO -->
  <section class="relative min-h-[85vh] flex items-center overflow-hidden">
    <div class="absolute inset-0">
      <div class="hero-slide absolute inset-0 bg-cover bg-center opacity-100 transition-opacity duration-1000" style="background-image:url('https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1600&q=80')"></div>
      <div class="hero-slide absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-1000" style="background-image:url('https://images.unsplash.com/photo-1552667466-07770ae110d0?w=1600&q=80')"></div>
      <div class="hero-slide absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-1000" style="background-image:url('https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600&q=80')"></div>
    </div>
    <div class="absolute inset-0 bg-gradient-to-r from-khf-black/95 via-khf-black/65 to-khf-black/20"></div>
    <div class="relative container-x text-white py-16 max-w-3xl">
      <p class="text-khf-gold font-bold uppercase tracking-[3px] text-xs mb-4">Kenya Handball Federation</p>
      <h1 class="font-head text-5xl md:text-7xl uppercase leading-none mb-5">Passion. Performance. Pride.</h1>
      <p class="text-lg text-slate-300 max-w-xl mb-8">The official digital home of handball in Kenya — competitions, national teams, clubs, players and development.</p>
      <div class="flex flex-wrap gap-3">
        <a href="#/fixtures" class="btn-ghost">📅 Fixtures</a>
        <a href="#/fixtures" class="btn-ghost">🏆 Results</a>
        <a href="#/standings" class="btn-ghost">📊 Standings</a>
      </div>
    </div>
  </section>

  <!-- NEWS -->
  <section class="py-16">
    <div class="container-x">
      <div class="flex justify-between items-center mb-8 flex-wrap gap-3">
        <h2 class="section-title">Latest News</h2>
        <a href="#/news" class="text-khf-red font-bold text-sm">All news →</a>
      </div>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        ${news.map((n, i) => `
          <article class="card ${i === 0 ? 'lg:col-span-2' : ''}">
            <img src="${n.img}" alt="${n.title}" class="w-full aspect-video object-cover"/>
            <div class="p-5 space-y-2">
              <span class="${n.tag}">${n.category}</span>
              <h3 class="text-base font-semibold leading-snug"><a href="#/article?id=${n.id}" class="hover:text-khf-red">${n.title}</a></h3>
              <p class="text-sm text-slate-500">${n.excerpt}</p>
              <time class="text-xs text-slate-400">${n.date}</time>
            </div>
          </article>`).join('')}
      </div>
    </div>
  </section>

  <!-- MATCH CENTRE -->
  <section class="py-16 bg-khf-light">
    <div class="container-x grid gap-6 lg:grid-cols-3">
      <!-- Fixtures -->
      <div class="panel">
        <div class="flex justify-between items-center mb-4">
          <h2 class="font-head text-2xl uppercase">Upcoming Fixtures</h2>
          <a href="#/fixtures" class="text-khf-red text-sm font-bold">All →</a>
        </div>
        <ul class="space-y-3">
          ${upcoming.map(f => `
            <li class="fixture">
              <div class="flex gap-3 text-[11px] text-slate-500 uppercase">
                <span class="font-bold text-khf-red">${f.comp}</span><span>${f.round}</span>
              </div>
              <div class="flex items-center justify-between gap-2">
                <span class="font-semibold text-sm">${f.home}</span>
                <span class="text-xs text-slate-400">vs</span>
                <span class="font-semibold text-sm">${f.away}</span>
              </div>
              <div class="text-xs text-slate-500 flex flex-col gap-0.5">
                <span>📅 ${f.date} · ${f.time}</span><span>📍 ${f.venue}</span>
              </div>
              <span class="status-scheduled">${f.status}</span>
            </li>`).join('')}
        </ul>
      </div>

      <!-- Results -->
      <div class="panel">
        <div class="flex justify-between items-center mb-4">
          <h2 class="font-head text-2xl uppercase">Latest Results</h2>
          <a href="#/fixtures" class="text-khf-red text-sm font-bold">All →</a>
        </div>
        <ul class="space-y-3">
          ${results.map(f => `
            <li class="fixture">
              <div class="text-[11px] font-bold text-khf-red uppercase">${f.comp}</div>
              <div class="flex items-center justify-between gap-2">
                <span class="font-semibold text-sm">${f.home}</span>
                <span class="font-head text-xl font-bold bg-khf-black text-white px-3 py-0.5 rounded">${f.homeScore} – ${f.awayScore}</span>
                <span class="font-semibold text-sm">${f.away}</span>
              </div>
              <span class="status-completed">Full Time</span>
            </li>`).join('')}
        </ul>
      </div>

      <!-- Standings -->
      <div class="panel">
        <div class="flex justify-between items-center mb-4">
          <h2 class="font-head text-2xl uppercase">PL Men — Top 5</h2>
          <a href="#/standings" class="text-khf-red text-sm font-bold">Full →</a>
        </div>
        <table class="w-full table-mini">
          <thead><tr><th>#</th><th>Team</th><th>P</th><th>GD</th><th>PTS</th></tr></thead>
          <tbody>
            ${top5.map(t => `
              <tr>
                <td class="font-bold">${t.pos}</td>
                <td><a href="#/club?id=${t.team}" class="hover:text-khf-red font-medium">${t.team}</a></td>
                <td>${t.p}</td>
                <td>${t.gd > 0 ? '+' : ''}${t.gd}</td>
                <td class="font-bold">${t.pts}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- FEATURED -->
  <section class="py-16">
    <div class="container-x">
      <div class="flex justify-between items-center mb-8 flex-wrap gap-3">
        <h2 class="section-title">Featured Teams & Players</h2>
        <a href="#/statistics" class="text-khf-red font-bold text-sm">Statistics →</a>
      </div>
      <div class="grid gap-6 grid-cols-2 md:grid-cols-4">
        <div class="card p-5 text-center">
          <div class="w-20 h-20 rounded-full bg-cover bg-center mx-auto mb-3" style="background-image:url('https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80')"></div>
          <h3 class="font-semibold">Brian Otieno</h3>
          <p class="text-xs text-slate-500">Left Back · Nairobi United</p>
          <p class="text-sm font-bold text-khf-red mt-1">Top Scorer · 87 goals</p>
        </div>
        <div class="card p-5 text-center">
          <div class="w-20 h-20 rounded-full bg-cover bg-center mx-auto mb-3" style="background-image:url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80')"></div>
          <h3 class="font-semibold">Faith Wanjiku</h3>
          <p class="text-xs text-slate-500">Goalkeeper · Nakuru Stars</p>
          <p class="text-sm font-bold text-khf-red mt-1">Best GK · 42% save rate</p>
        </div>
        <div class="card p-5 text-center">
          <div class="w-20 h-20 rounded-full bg-khf-red text-white font-head text-2xl font-bold grid place-items-center mx-auto mb-3">NU</div>
          <h3 class="font-semibold">Nairobi United</h3>
          <p class="text-xs text-slate-500">Premier League Men</p>
          <p class="text-sm font-bold text-khf-red mt-1">Leaders · 30 pts</p>
        </div>
        <div class="card p-5 text-center">
          <div class="w-20 h-20 rounded-full bg-khf-green text-white font-head text-2xl font-bold grid place-items-center mx-auto mb-3">KQ</div>
          <h3 class="font-semibold">Kisumu Queens</h3>
          <p class="text-xs text-slate-500">Premier League Women</p>
          <p class="text-sm font-bold text-khf-red mt-1">Leaders · 28 pts</p>
        </div>
      </div>
    </div>
  </section>

  <!-- NATIONAL TEAMS -->
  <section class="py-16 bg-khf-black text-white">
    <div class="container-x">
      <div class="flex justify-between items-center mb-8 flex-wrap gap-3">
        <h2 class="section-title text-white">National Teams</h2>
        <a href="#/national-teams" class="text-khf-red font-bold text-sm">Explore →</a>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        ${['Kenya Senior Men', 'Kenya Senior Women', 'Junior & Youth'].map((t, i) => {
          const imgs = [
            'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=800&q=80',
            'https://images.unsplash.com/photo-1552667466-07770ae110d0?w=800&q=80',
            'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
          ];
          const slugs = ['senior-men', 'senior-women', 'junior'];
          return `
          <a href="#/national-team?team=${slugs[i]}" class="relative h-56 rounded-xl overflow-hidden group">
            <div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style="background-image:url('${imgs[i]}')"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-khf-black via-khf-black/50 to-transparent"></div>
            <div class="absolute bottom-0 p-5">
              <h3 class="font-head text-2xl uppercase">${t}</h3>
              <p class="text-xs text-slate-300">Fixtures · Squad · Results</p>
            </div>
          </a>`;
        }).join('')}
      </div>
    </div>
  </section>

  <!-- MEDIA -->
  <section class="py-16">
    <div class="container-x">
      <div class="flex justify-between items-center mb-8 flex-wrap gap-3">
        <h2 class="section-title">Video & Media</h2>
        <a href="#/gallery" class="text-khf-red font-bold text-sm">Gallery →</a>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        ${[
          { img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80', t: 'Match Highlights: Nairobi United vs Mombasa HC' },
          { img: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?w=800&q=80', t: "Interview: Coach on Women's League Growth" },
          { img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', t: 'Grassroots: School Handball Festival' },
        ].map(m => `
          <div class="group cursor-pointer">
            <div class="relative aspect-video rounded-xl overflow-hidden bg-cover bg-center" style="background-image:url('${m.img}')">
              <div class="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition grid place-items-center">
                <span class="w-14 h-14 rounded-full bg-white/90 text-khf-red text-2xl grid place-items-center shadow-lg">▶</span>
              </div>
            </div>
            <h3 class="mt-3 font-semibold text-sm">${m.t}</h3>
          </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- SPONSORS -->
  <section class="py-16 bg-khf-light">
    <div class="container-x">
      <div class="flex justify-between items-center mb-8 flex-wrap gap-3">
        <h2 class="section-title">Partners & Sponsors</h2>
        <a href="#/partners" class="text-khf-red font-bold text-sm">Become a partner →</a>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        ${Array(5).fill(0).map((_, i) => `
          <div class="h-20 bg-white rounded-lg shadow grid place-items-center text-slate-400 font-head text-lg tracking-widest">
            SPONSOR ${i + 1}
          </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- NEWSLETTER -->
  <section class="bg-khf-red text-white py-12">
    <div class="container-x flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h2 class="font-head text-3xl uppercase">Stay in the game</h2>
        <p class="text-white/90 text-sm mt-1">Get fixtures, results and federation news in your inbox.</p>
      </div>
      <form onsubmit="event.preventDefault(); this.reset(); alert('Subscribed! (demo)');" class="flex gap-2 w-full md:w-auto">
        <input type="email" required placeholder="Your email address" class="px-4 py-3 rounded-lg text-khf-black w-full md:w-72 outline-none"/>
        <button class="bg-khf-black text-white font-bold px-5 rounded-lg hover:bg-khf-dark">Subscribe</button>
      </form>
    </div>
  </section>`;
}
