export default function about() {
  return `
  <section class="page-hero">
    <div class="relative container-x">
      <h1 class="font-head text-4xl md:text-6xl uppercase">About KHF</h1>
      <p class="text-slate-300 mt-2 max-w-xl">Governing body for handball in Kenya — history, vision, mission and governance.</p>
    </div>
  </section>

  <section class="py-16">
    <div class="container-x grid gap-10 md:grid-cols-2">
      <div>
        <h2 class="section-title mb-4">Our History</h2>
        <p class="text-slate-600 mb-4">The Kenya Handball Federation (KHF) is the national governing body for handball in Kenya, affiliated with the International Handball Federation (IHF) and the Confederation of African Handball (CAHB).</p>
        <p class="text-slate-600 mb-4">For decades, KHF has organized national competitions, developed grassroots programmes and represented Kenya in international handball events.</p>

        <h2 class="section-title mb-4 mt-8">Vision</h2>
        <p class="text-slate-600 mb-4">To be the leading handball nation in East Africa and a competitive force across the African continent.</p>

        <h2 class="section-title mb-4 mt-8">Mission</h2>
        <p class="text-slate-600">To develop, promote and govern handball at all levels in Kenya through competitions, development programmes and good governance.</p>
      </div>
      <div class="space-y-4">
        <div class="panel">
          <h3 class="font-head text-xl uppercase mb-3">Leadership</h3>
          <ul class="space-y-2 text-sm">
            <li><strong>President:</strong> — </li>
            <li><strong>Secretary General:</strong> — </li>
            <li><strong>Treasurer:</strong> — </li>
            <li><strong>Technical Director:</strong> — </li>
          </ul>
        </div>
        <div class="panel">
          <h3 class="font-head text-xl uppercase mb-3">Committees</h3>
          <ul class="space-y-1.5 text-sm text-slate-600">
            <li>Competitions Committee</li>
            <li>Technical & Development Committee</li>
            <li>Referees Committee</li>
            <li>Disciplinary Committee</li>
            <li>Finance & Audit Committee</li>
          </ul>
        </div>
        <div class="panel">
          <h3 class="font-head text-xl uppercase mb-3">Documents</h3>
          <ul class="space-y-1.5 text-sm">
            <li><a href="#" class="text-khf-red hover:underline">📄 KHF Constitution (PDF)</a></li>
            <li><a href="#" class="text-khf-red hover:underline">📄 Competition Regulations (PDF)</a></li>
            <li><a href="#" class="text-khf-red hover:underline">📄 Disciplinary Regulations (PDF)</a></li>
            <li><a href="#" class="text-khf-red hover:underline">📄 Annual Report 2025 (PDF)</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  `;
}
