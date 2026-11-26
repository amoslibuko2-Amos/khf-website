import { clubs } from '../data.js';

export default function clubsPage() {
  return `
  <section class="page-hero">
    <div class="relative container-x">
      <h1 class="font-head text-4xl md:text-6xl uppercase">Clubs & Teams</h1>
      <p class="text-slate-300 mt-2">Registered clubs across all KHF competitions.</p>
    </div>
  </section>
  <section class="py-16">
    <div class="container-x grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      ${clubs.map(c => `
        <a href="#/club?id=${c.name}" class="card p-5 text-center hover:-translate-y-1">
          <div class="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-sm overflow-hidden grid place-items-center mx-auto mb-3">
            ${c.logo ? `<img src="${c.logo}" alt="${c.name} logo" class="w-full h-full object-contain p-1" />` : `<span class="text-khf-red font-head font-bold text-xl">${c.short}</span>`}
          </div>
          <h3 class="font-semibold">${c.name}</h3>
          <p class="text-xs text-slate-500">${c.location}</p>
          <p class="text-xs text-khf-red font-semibold mt-1">${c.league}</p>
        </a>`).join('')}
    </div>
  </section>`;
}
