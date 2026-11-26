import { competitions } from '../data.js';

export default function competitionsPage() {
  return `
  <section class="page-hero">
    <div class="relative container-x">
      <h1 class="font-head text-4xl md:text-6xl uppercase">Competitions</h1>
      <p class="text-slate-300 mt-2">All KHF-sanctioned leagues and tournaments.</p>
    </div>
  </section>
  <section class="py-16">
    <div class="container-x grid gap-6 md:grid-cols-3">
      ${competitions.map(c => `
        <a href="#/competition?league=${c.slug}" class="card p-6 hover:border-khf-red border-2 border-transparent">
          <div class="text-3xl mb-3">🏆</div>
          <h3 class="font-head text-2xl uppercase">${c.name}</h3>
          <p class="text-sm text-slate-500 mt-1">Fixtures · Results · Standings · Stats</p>
          <span class="text-khf-red font-bold text-sm mt-4 inline-block">View competition →</span>
        </a>`).join('')}
    </div>
  </section>`;
}
export default competitions;
