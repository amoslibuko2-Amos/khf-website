import './style.css';
import { layout } from './components/layout.js';
import { SITE_URL } from './config.js';

import home from './pages/home.js';
import about from './pages/about.js';
import competitions from './pages/competitions.js';
import competition from './pages/competition.js';
import fixtures from './pages/fixtures.js';
import standings from './pages/standings.js';
import news from './pages/news.js';
import article from './pages/article.js';
import nationalTeams from './pages/national-teams.js';
import nationalTeam from './pages/national-team.js';
import clubs from './pages/clubs.js';
import club from './pages/club.js';
import statistics from './pages/statistics.js';
import gallery from './pages/gallery.js';
import development from './pages/development.js';
import resources from './pages/resources.js';
import partners from './pages/partners.js';
import contact from './pages/contact.js';
import adminLogin from './pages/admin-login.js';
import technicalPage from './pages/technical.js';

const routes = {
  '': home, about, competitions, competition, fixtures, standings, news, article,
  'national-teams': nationalTeams, 'national-team': nationalTeam, clubs, club,
  statistics, gallery, development, resources, partners, contact,
  'admin-login': adminLogin,
};

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, '');
  const [pathPart, queryPart] = raw.split('?');
  return {
    path: pathPart.split('/')[0] || '',
    params: new URLSearchParams(queryPart || ''),
  };
}

function loadingState() {
  return `
    <div class="min-h-[60vh] grid place-items-center">
      <div class="text-center">
        <div class="w-12 h-12 border-4 border-khf-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p class="text-slate-500 text-sm">Loading…</p>
      </div>
    </div>`;
}

function errorState(message) {
  return `
    <section class="py-24 text-center">
      <h1 class="font-head text-3xl uppercase mb-2">Something went wrong</h1>
      <p class="text-slate-500">${message}</p>
      <a href="#/" class="btn-primary mt-6">Back to home</a>
    </section>`;
}

async function render() {
  const { path, params } = parseHash();
  const page = routes[path] || home;
  const app = document.getElementById('app');

  // Show loading immediately
  app.innerHTML = loadingState();

  let content;
  try {
    // Pages can return string OR Promise<string>
    content = await page({ params });
  } catch (err) {
    console.error('[KHF] Page render failed:', err);
    content = errorState('Unable to load this page. Please try again.');
  }

  if (path === 'admin-login') {
    app.innerHTML = content;
    return;
  }

  app.innerHTML = layout(content, path);
  window.scrollTo(0, 0);

  // Set document title from env-based site URL (SEO)
  document.title = document.title || 'Kenya Handball Federation';

  // Mobile nav
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.onclick = () => {
      nav.classList.toggle('hidden');
      nav.classList.toggle('flex');
      toggle.setAttribute('aria-expanded', nav.classList.contains('flex'));
    };
  }

  // Hero slider
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 1) {
    let i = 0;
    setInterval(() => {
      slides[i].classList.remove('opacity-100');
      slides[i].classList.add('opacity-0');
      i = (i + 1) % slides.length;
      slides[i].classList.add('opacity-100');
      slides[i].classList.remove('opacity-0');
    }, 6000);
  }
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);
