import { competitions, fixtures, standings } from '../data.js';

export default function competition({ params }) {
  const slug = params.get('league') || 'premier-men';
  const comp = competitions.find(c => c.slug === slug) || competitions[0];
  const table = standings[slug] || [];
  const compFixtures = fixtures.filter(f => f.comp === comp.name);

  return `
  <section class="page-hero">
    <div class="relative container-x">
      <p class="text-khf-gold text-xs uppercase tracking-[3px] font-bold mb-2">Competition</p>
      <h1 class="font-head text-4xl md:text-6xl uppercase">${comp.name}</h1>
      <div class="flex gap-3 mt-4 flex-wrap">
        <a href="#/fixtures" class="btn-ghost">Fixtures</a>
        <a href="#/fixtures" class="btn-ghost">Results</a>
        <a href="#/standings" class="btn-ghost">Standings</a>
        <a href="#/statistics" class="btn-ghost">Statistics</a>
      </div>
    </div>
  </section>

  <section class="py-16">
    <div class="container-x space-y-10">
      <div>
        <h2 class="section-title mb-6">Fixtures & Results</h2>
        <div class="grid gap-3 md:grid-cols-2">
          ${compFixtures.map(f => `
            <div class="fixture">
              <div class="flex justify-between text-[11px] text-slate-500 uppercase">
                <span class="font-bold text-khf-red">${f.round}</span>
                <span>${f.date}</span>
              </div>
              <div class="flex items-center justify-between gap-2 py-1">
                <span class="font-semibold">${f.home}</span>
                <span class="font-head text-lg font-bold ${f.status === 'Completed' ? 'bg-khf-black text-white px-3 py-0.5 rounded' : 'text-slate-400'}">
                  ${f.status === 'Completed' ? `${f.homeScore} – ${f.awayScore}` : 'vs'}
                </span>
                <span class="font-semibold">${f.away}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-xs text-slate-500">📍 ${f.venue}</span>
                <span class="${f.status === 'Completed' ? 'status-completed' : 'status-scheduled'}">${f.status}</span>
              </div>
            </div>`).join('') || '<p class="text-slate-500">No fixtures yet.</p>'}
        </div>
      </div>

      <div>
        <h2 class="section-title mb-6">Standings</h2>
        <div class="panel overflow-x-auto">
          <table class="w-full text-sm">
            <thead><tr class="text-left text-xs uppercase text-slate-500 border-b">
              <th class="py-2">Pos</th><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th>PTS</th>
            </tr></thead>
            <tbody>
              ${table.map(t => `
                <tr class="border-b border-slate-100 hover:bg-slate-50">
                  <td class="py-2.5 font-bold">${t.pos}</td>
                  <td><a href="#/club?id=${t.team}" class="font-medium hover:text-khf-red">${t.team}</a></td>
                  <td>${t.p}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td>
                  <td>${t.gf}</td><td>${t.ga}</td>
                  <td>${t.gd > 0 ? '+' : ''}${t.gd}</td>
                  <td class="font-bold">${t.pts}</td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>`;
}
