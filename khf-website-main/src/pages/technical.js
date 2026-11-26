// Public technical and refereeing information page.
// This is an information page, not a referee administration system.
// Publish approved documents and appointment data before adding downloads
// or displaying names, qualifications and match assignments.

export default function technicalPage() {
  return `
    <section class="bg-khf-black text-white border-b-4 border-khf-red">
      <div class="container-x py-12 md:py-16">
        <p class="text-khf-gold text-xs font-semibold uppercase tracking-widest mb-3">
          Kenya Handball Federation
        </p>

        <h1 class="font-head text-4xl md:text-6xl font-bold mb-4">
          Technical & Referees
        </h1>

        <p class="text-slate-300 max-w-2xl leading-relaxed">
          Information for referees, table officials and technical delegates:
          officiating guidance, development opportunities and match-day procedures.
        </p>

        <div class="flex flex-wrap gap-3 mt-7">
          <a
            href="#/resources"
            class="bg-khf-red hover:bg-khf-dark text-white font-semibold rounded-lg px-5 py-3"
          >
            Browse resources
          </a>

          <a
            href="#/contact"
            class="border border-slate-600 hover:bg-white/10 text-white font-semibold rounded-lg px-5 py-3"
          >
            Make a technical enquiry
          </a>
        </div>
      </div>
    </section>

    <section class="bg-khf-light">
      <div class="container-x py-10 md:py-14">
        <div class="max-w-2xl mb-8">
          <p class="text-khf-red text-xs font-bold uppercase tracking-widest mb-2">
            Officiating support
          </p>

          <h2 class="font-head text-3xl font-bold text-khf-black mb-3">
            Technical information centre
          </h2>

          <p class="text-slate-600">
            Use the sections below to find guidance or enquire about
            officiating requirements.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <article class="bg-white border border-slate-200 border-t-4 border-t-khf-red rounded-xl p-6">
            <span class="text-khf-red text-xs font-bold uppercase tracking-widest">
              01 / Rules
            </span>

            <h3 class="font-head text-2xl font-bold text-khf-black mt-3 mb-3">
              Rules & interpretations
            </h3>

            <p class="text-slate-600 text-sm leading-relaxed mb-5">
              Consult current approved rules, competition regulations and
              officiating guidance. Check each document’s edition and effective date.
            </p>

            <a href="#/resources" class="text-khf-red font-semibold text-sm hover:underline">
              View available resources →
            </a>
          </article>

          <article class="bg-white border border-slate-200 border-t-4 border-t-khf-green rounded-xl p-6">
            <span class="text-khf-green text-xs font-bold uppercase tracking-widest">
              02 / Development
            </span>

            <h3 class="font-head text-2xl font-bold text-khf-black mt-3 mb-3">
              Referee education
            </h3>

            <p class="text-slate-600 text-sm leading-relaxed mb-5">
              Enquire about introductory courses, refresher sessions,
              assessments and the requirements for progressing as an official.
            </p>

            <a href="#/contact" class="text-khf-red font-semibold text-sm hover:underline">
              Enquire about training →
            </a>
          </article>

          <article class="bg-white border border-slate-200 border-t-4 border-t-khf-gold rounded-xl p-6">
            <span class="text-slate-600 text-xs font-bold uppercase tracking-widest">
              03 / Appointments
            </span>

            <h3 class="font-head text-2xl font-bold text-khf-black mt-3 mb-3">
              Match appointments
            </h3>

            <p class="text-slate-600 text-sm leading-relaxed mb-5">
              Referee and technical-official assignments are not published on
              this page yet. Contact KHF to confirm an appointment or report availability.
            </p>

            <a href="#/contact" class="text-khf-red font-semibold text-sm hover:underline">
              Appointment enquiries →
            </a>
          </article>

          <article class="bg-white border border-slate-200 rounded-xl p-6">
            <span class="text-slate-500 text-xs font-bold uppercase tracking-widest">
              04 / Match administration
            </span>

            <h3 class="font-head text-2xl font-bold text-khf-black mt-3 mb-3">
              Match sheets & reports
            </h3>

            <p class="text-slate-600 text-sm leading-relaxed mb-5">
              Confirm which match sheet, incident report and submission procedure
              apply to your competition. Digital report submission is not enabled here.
            </p>

            <a href="#/contact" class="text-khf-red font-semibold text-sm hover:underline">
              Request reporting guidance →
            </a>
          </article>

          <article class="bg-white border border-slate-200 rounded-xl p-6">
            <span class="text-slate-500 text-xs font-bold uppercase tracking-widest">
              05 / Table officials
            </span>

            <h3 class="font-head text-2xl font-bold text-khf-black mt-3 mb-3">
              Timekeepers & scorekeepers
            </h3>

            <p class="text-slate-600 text-sm leading-relaxed mb-5">
              Enquire about training and approved match-day procedures
              for timekeeping, scorekeeping and technical table duties.
            </p>

            <a href="#/contact" class="text-khf-red font-semibold text-sm hover:underline">
              Ask about table-official duties →
            </a>
          </article>

          <article class="bg-white border border-slate-200 rounded-xl p-6">
            <span class="text-slate-500 text-xs font-bold uppercase tracking-widest">
              06 / Professional standards
            </span>

            <h3 class="font-head text-2xl font-bold text-khf-black mt-3 mb-3">
              Conduct & safeguarding
            </h3>

            <p class="text-slate-600 text-sm leading-relaxed mb-5">
              Request current guidance on impartiality, conflicts of interest,
              professional conduct and approved safeguarding reporting channels.
            </p>

            <a href="#/contact" class="text-khf-red font-semibold text-sm hover:underline">
              Request official guidance →
            </a>
          </article>
        </div>

        <!-- Explicit empty state: do not replace with invented schedules. -->
        <div class="bg-white border border-slate-200 rounded-xl p-6 md:p-8 mt-8">
          <h2 class="font-head text-2xl font-bold text-khf-black mb-3">
            Technical notices
          </h2>

          <p class="text-slate-600 text-sm leading-relaxed">
            No approved technical notices, course dates or appointment lists
            have been added to this page yet.
          </p>
        </div>

        <div class="bg-khf-black rounded-xl p-6 md:p-8 mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 class="font-head text-2xl font-bold text-white mb-2">
              Interested in becoming a referee?
            </h2>

            <p class="text-slate-300 text-sm max-w-xl">
              Contact KHF to ask about eligibility, training opportunities
              and the current registration process.
            </p>
          </div>

          <a
            href="#/contact"
            class="inline-block text-center bg-khf-red hover:bg-khf-dark text-white font-semibold rounded-lg px-5 py-3 shrink-0"
          >
            Contact KHF →
          </a>
        </div>
      </div>
    </section>
  `;
}
