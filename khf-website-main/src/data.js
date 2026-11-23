// KHF data layer

export const competitions = [
  { slug: 'premier-men',   name: 'Premier League Men',   type: 'league', gender: 'men',   tier: 1 },
  { slug: 'premier-women', name: 'Premier League Women', type: 'league', gender: 'women', tier: 1 },
  { slug: 'national-men',  name: 'National League Men',  type: 'league', gender: 'men',   tier: 2 },
];

// ----------------------------------------------------------------------------
// CLUBS — 23 entries (12 men, 11 women)
// ----------------------------------------------------------------------------
export const clubs = [
  // ---------------------------------- Men ----------------------------------
  { id: 1,  slug: 'ncpb-men',         name: 'NCPB Men',             short: 'NCPB',      fullName: 'National Cereals & Produce Board',             location: 'Nairobi',  category: 'Senior Men', league: 'premier-men' },
  { id: 2,  slug: 'equity-men',       name: 'Equity Bank',          short: 'Equity',    fullName: 'Equity Bank Handball Club',                    location: 'Nairobi',  category: 'Senior Men', league: 'premier-men' },
  { id: 3,  slug: 'ulinzi-men',       name: 'Ulinzi',               short: 'Ulinzi',    fullName: 'Ulinzi Handball Club (Kenya Defence Forces)',   location: 'Langata',  category: 'Senior Men', league: 'premier-men' },
  { id: 4,  slug: 'strathmore-men',   name: 'Strathmore Tornadoes', short: 'Tornadoes', fullName: 'Strathmore University Tornadoes',              location: 'Nairobi',  category: 'Senior Men', league: 'premier-men' },
  { id: 5,  slug: 'gsu-men',          name: 'GSU',                  short: 'GSU',       fullName: 'General Service Unit',                         location: 'Nairobi',  category: 'Senior Men', league: 'premier-men' },
  { id: 6,  slug: 'black-mamba-men',  name: 'Black Mamba',          short: 'Mamba',     fullName: 'Black Mamba HC',                               location: 'Nairobi',  category: 'Senior Men', league: 'premier-men' },
  { id: 7,  slug: 'kisiwa-men',       name: 'Kisiwa NP Men',        short: 'Kisiwa',    fullName: 'Kisiwa National Polytechnic Men',              location: 'Bungoma',  category: 'Senior Men', league: 'premier-men' },
  { id: 8,  slug: 'lions-men',        name: 'Lions HC',             short: 'Lions',     fullName: 'Lions Handball Club',                          location: '',         category: 'Senior Men', league: 'premier-men' }, // TODO: location
  { id: 9,  slug: 'ku-men',           name: 'Kenyatta University',  short: 'KU',        fullName: 'Kenyatta University',                          location: 'Nairobi',  category: 'Senior Men', league: 'premier-men' },
  { id: 10, slug: 'daystar-men',      name: 'Daystar Falcons',      short: 'Daystar',   fullName: 'Daystar University',                           location: 'Machakos', category: 'Senior Men', league: 'premier-men' },
  { id: 11, slug: 'rangers-men',      name: 'Rangers HC',           short: 'Rangers',   fullName: 'Rangers Handball Club',                        location: '',         category: 'Senior Men', league: 'premier-men' }, // TODO: location
  { id: 12, slug: 'thika-men',        name: 'Thika Engineers',      short: 'Thika',     fullName: 'Thika Engineers',                              location: 'Thika',    category: 'Senior Men', league: 'premier-men' },

  // --------------------------------- Women ---------------------------------
  { id: 14, slug: 'nairobi-water',    name: 'Nairobi Water Queens',  short: 'Nairobi Water', fullName: 'Nairobi Water',                                        location: 'Nairobi',  category: 'Senior Women', league: 'premier-women' },
  { id: 15, slug: 'ncpb-women',       name: 'NCPB Women',            short: 'NCPB W',        fullName: 'National Cereals & Produce Board',                     location: 'Nairobi',  category: 'Senior Women', league: 'premier-women' },
  { id: 16, slug: 'ku-ladies',        name: 'KU Ladies',             short: 'KU Ladies',     fullName: 'Kenyatta University (KU Ladies)',                     location: 'Nairobi',  category: 'Senior Women', league: 'premier-women' },
  { id: 17, slug: 'daystar-women',    name: 'Daystar Falcons Women', short: 'Daystar W',     fullName: 'Daystar University',                                  location: 'Machakos', category: 'Senior Women', league: 'premier-women' },
  { id: 18, slug: 'kisiwa-women',     name: 'Kisiwa NP Women',       short: 'Kisiwa W',      fullName: 'Kisiwa National Polytechnic Women',                    location: 'Bungoma',  category: 'Senior Women', league: 'premier-women' },
  { id: 19, slug: 'nys-women',        name: 'NYS',                   short: 'NYS',           fullName: 'National Youth Service',                               location: 'Nairobi',  category: 'Senior Women', league: 'premier-women' },
  { id: 20, slug: 'amazon-women',     name: 'Amazon HC',             short: 'Amazon',        fullName: 'Amazon Handball Club',                                 location: 'Nairobi',  category: 'Senior Women', league: 'premier-women' },
  { id: 21, slug: 'desert-scorpions', name: 'Desert Scorpions',      short: 'Scorpions',     fullName: 'Desert Scorpion Women',                                location: 'Thika',    category: 'Senior Women', league: 'premier-women' },
  { id: 22, slug: 'jkuat-women',      name: 'JKUAT',                 short: 'JKUAT',         fullName: 'Jomo Kenyatta University of Agriculture & Technology', location: 'Juja',     category: 'Senior Women', league: 'premier-women' },
  { id: 24, slug: 'ulinzi-sharks',    name: 'Ulinzi Sharks',         short: 'Sharks',        fullName: 'Ulinzi Sharks Handball Club',                          location: 'Langata',  category: 'Senior Women', league: 'premier-women' },
];

// ----------------------------------------------------------------------------
// FIXTURES
// `comp` is a competition slug. `home` / `away` are club slugs ('TBD' = not set).
// ----------------------------------------------------------------------------
export const fixtures = [
  { id: 'KHF-001', comp: 'premier-women', round: 'First leg', home: 'DAYSTAR-women', away: 'JKUAT-women',    date: '2026-11-28', time: '13:30', venue: 'KALOLENI', status: 'Completed', }, // TODO: confirm home team & status
  { id: 'KHF-002', comp: 'premier-men',   round: 'First leg', home: 'DAYSTAR-men',   away: 'ULINZI-men',     date: '2026-11-28', time: '15:00', venue: 'KALOLENI', status: 'Scheduled' }, // TODO: confirm home team
  { id: 'KHF-003', comp: 'premier-men',   round: 'First leg', home: 'GSU-men',       away: 'STRATHMORE', date: '2026-11-28', time: '16:30', venue: 'KALOLENI', status: 'Scheduled' }, // TODO: confirm home team
  { id: 'KHF-004', comp: 'premier-women', round: 'First leg', home: 'JKUAT-women',   away: 'NYS-women',      date: '2026-11-29', time: '09:00', venue: 'KALOLENI', status: 'Scheduled' }, // TODO: confirm home team
  { id: 'KHF-005', comp: 'premier-women', round: 'First leg', home: 'DAYSTAR-women', away: 'KU-ladies',      date: '2026-11-29', time: '13:30', venue: 'KALOLENI', status: 'Scheduled' }, // TODO: confirm home team
  { id: 'KHF-006', comp: 'premier-men',   round: 'First leg', home: 'KU-men',        away: 'DAYSTAR-men',    date: '2026-11-29', time: '15:00', venue: 'KALOLENI', status: 'Scheduled' }, // TODO: confirm home team
  { id: 'KHF-007', comp: 'premier-men',   round: 'First leg', home: 'EQUITY-men',    away: 'STRATHMORE-men', date: '2026-11-29', time: '16:30', venue: 'KALOLENI', status: 'Scheduled' }, // TODO: confirm home team
];

// ----------------------------------------------------------------------------
// NEWS
// ----------------------------------------------------------------------------
export const news = [
  { id: 1, title: 'Matchday 12 round-up: Top of the table tightens', category: 'Premier League Men', tag: 'tag-league', date: '2026-11-14', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5lIM7HVc7FQO8Fr5y1nbLWlDgJY0pJA9mKYGjT76-aw&s=10', excerpt: 'Four teams remain within two points at the summit after a dramatic weekend of handball.' },
  { id: 2, title: "Women's league reaches record participation", category: 'Premier League Women', tag: 'tag-women', date: '2026-11-13', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxCp-iS3fWijEeDwnw7PFUdLbHQfqtzOXdDhAUhJtxg&s=10', excerpt: "New clubs join the fast-growing women's competition across the country." },
  { id: 3, title: 'Kenya names provisional squad for regional qualifiers', category: 'National Teams', tag: 'tag-national', date: '2026-11-12', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJEoGw_XnCC_qZRfwYnQPi9c30g1peakDZbBQDn-KRQ&s=10', excerpt: 'Twenty-four players called up for the upcoming international window.' },
  { id: 4, title: 'School handball programme expands to 12 counties', category: 'Development', tag: 'tag-dev', date: '2026-11-11', img: '', excerpt: 'KHF and partners bring handball to thousands of new students.' },
];

// ----------------------------------------------------------------------------
// PLAYERS
// `club` is a club slug.
// ----------------------------------------------------------------------------
export const players = [
  { id: 1, name: 'Brian',          position: 'Left Back',  club: 'daystar-men', goals: 87,      stat: 'Top Scorer', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpLjSNWWwvWpeZu3I_JH7fGsgPWIywOV4oRoYn15UHggVLTeeP9rCvZSc&s=10' },
  { id: 2, name: 'Collins Barasa', position: 'Goalkeeper', club: 'daystar-men', savePct: 42, stat: 'Best GK',    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80' },
];

// ----------------------------------------------------------------------------
// STANDINGS — keyed by competition slug
// `club` is the club slug; `team` is the label shown in the table.
// Rows below are already in table order (points, goal difference, goals for);
// getStandings() re-applies that order so a stale `pos` can never leak out.
// ----------------------------------------------------------------------------
export const standings = {
  'premier-men': [
    { pos: 1,  club: 'gsu-men',         team: 'GSU',          p: 3, w: 3, d: 0, l: 0, gf: 80, ga: 67,  gd: 13,  pts: 6 },
    { pos: 2,  club: 'ulinzi-men',      team: 'ULINZI',       p: 2, w: 2, d: 0, l: 0, gf: 79, ga: 38,  gd: 41,  pts: 4 },
    { pos: 3,  club: 'equity-men',      team: 'EQUITY',       p: 2, w: 2, d: 0, l: 0, gf: 62, ga: 33,  gd: 29,  pts: 4 },
    { pos: 4,  club: 'black-mamba-men', team: 'BLACK MAMBA',  p: 2, w: 2, d: 0, l: 0, gf: 50, ga: 33,  gd: 17,  pts: 4 },
    { pos: 6,  club: 'ku-men',          team: 'KU',           p: 2, w: 1, d: 0, l: 1, gf: 43, ga: 41,  gd: 2,  pts: 2 },
    { pos: 5,  club: 'ncpb-men',        team: 'NCPB',         p: 1, w: 1, d: 0, l: 0, gf: 32, ga: 21,  gd: 11,  pts: 2 },
    { pos: 7,  club: 'strathmore-men',  team: 'STRATHMORE',   p: 0, w: 0, d: 0, l: 0, gf: 0,  ga: 0,   gd: 0,   pts: 0 },
    { pos: 8,  club: 'daystar-men',     team: 'DAYSTAR',      p: 1, w: 0, d: 0, l: 1, gf: 28, ga: 29,  gd: -1,  pts: 0 },
    { pos: 9, club: 'lions-men',       team: 'LIONS',        p: 2, w: 0, d: 0, l: 2, gf: 37, ga: 48,  gd: -11, pts: 0 },
    { pos: 10,  club: 'thika-men',       team: 'THIKA COMBAT', p: 0, w: 0, d: 0, l: 0, gf: 0,  ga: 0,   gd: -15,   pts: 0 },
    { pos: 11, club: 'kisiwa-men',      team: 'KISIWA N P',   p: 2, w: 0, d: 0, l: 2, gf: 37, ga: 58,  gd: -21, pts: 0 },
    { pos: 12, club: 'ranger-men',     team: 'RANGERS',      p: 4, w: 0, d: 0, l: 4, gf: 37, ga: 109, gd: -72, pts: 0 },
  ],
  'premier-women': [
    { pos: 1,  club: 'kisiwa-women',     team: 'KISIWA',           p: 2, w: 2, d: 0, l: 0, gf: 59, ga: 57, gd: 2 ,  pts: 4 },
    { pos: 2,  club: 'nairobi-water',    team: 'NAIROBI WATER',    p: 1, w: 1, d: 0, l: 0, gf: 45, ga: 17, gd: 28,  pts: 2 },
    { pos: 3,  club: 'daystar-women',    team: 'DAYSTAR',          p: 1, w: 1, d: 0, l: 0, gf: 37, ga: 13, gd: 24,  pts: 2 },
    { pos: 4,  club: 'ncpb-women',       team: 'NCPB',             p: 1, w: 1, d: 0, l: 0, gf: 46,  ga: 24,  gd: 22,   pts: 2 },
    { pos: 5,  club: 'ku-ladies',        team: 'KU LADIES',        p: 0, w: 0, d: 0, l: 0, gf: 0,  ga: 0,  gd: 0,   pts: 0 },
    { pos: 6,  club: 'desert-scorpions', team: 'DESERT SCORPIONS', p: 0, w: 0, d: 0, l: 0, gf: 0,  ga: 0,  gd: 0,   pts: 0 },
    { pos: 7,  club: 'firehawks-women',     team: 'FIREHAWKS',     p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0 ,  pts: 0 },
    { pos: 8,  club: 'kisiii-women',     team: 'KISII',           p: 2, w: 1, d: 0, l: 1, gf: 28, ga: 37, gd: -9 ,  pts: 2 },
    { pos: 9,  club: 'ulinzi-sharks',    team: 'ULINZI SHARKS',    p: 1, w: 0, d: 0, l: 0, gf: 0,  ga: 0,  gd: -15,   pts: 0 },
    { pos: 10,  club: 'think queens',     team: 'THINKA',           p: 1, w: 0, d: 0, l: 1, gf: 0,  ga: 0,  gd: -15,   pts: 0 },
      { pos: 11, club: 'jkuat-women',      team: 'JKUAT',            p: 1, w: 0, d: 0, l: 1, gf: 17, ga: 45, gd: -28, pts: 0 },
     { pos: 12,  club: 'nys-women',        team: 'NYS',              p: 2, w: 0, d: 0, l: 1, gf: 44, ga: 90, gd: -46, pts: 0 },
  ],
    'national-men': [
  { pos: 1, club: '', team: 'Boomerang',        p: 3, w: 3, d: 0, l: 0, gf: 85, ga: 77, gd: 8, pts: 6 },
  { pos: 2, club: '', team: 'Kahawa',           p: 3, w: 2, d: 0, l: 1, gf: 84, ga: 64, gd: 20, pts: 4 },
  { pos: 3, club: '', team: 'Kisii Uni',        p: 2, w: 2, d: 0, l: 0, gf: 57, ga: 45, gd: 12, pts: 4 },
  { pos: 4, club: '', team: 'Construction',     p: 3, w: 2, d: 0, l: 1, gf: 88, ga: 78, gd: 10, pts: 4 },
  { pos: 5, club: '', team: 'Desert Scorpions',  p: 2, w: 1, d: 1, l: 0, gf: 62, ga: 51, gd: 11, pts: 3 },
  { pos: 6, club: '', team: 'KCB',               p: 2, w: 1, d: 1, l: 0, gf: 65, ga: 55, gd: 10, pts: 3 },
  { pos: 7, club: '', team: 'Nanyuki',           p: 3, w: 1, d: 0, l: 2, gf: 78, ga: 74, gd: 4, pts: 2 },
  { pos: 8, club: '', team: 'Kenya Navy',        p: 3, w: 1, d: 0, l: 2, gf: 76, ga: 85, gd: -9, pts: 2 },
  { pos: 9, club: '', team: 'Prisons',           p: 3, w: 1, d: 0, l: 2, gf: 72, ga: 82, gd: -10, pts: 2 },
  { pos: 10, club: '', team: 'Tao',              p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
  { pos: 11, club: '', team: 'NYS',              p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
  { pos: 12, club: '', team: 'Hunters',          p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
  { pos: 13, club: '', team: 'TUK',              p: 1, w: 0, d: 0, l: 1, gf: 17, ga: 30, gd: -13, pts: 0 },
  { pos: 14, club: '', team: 'JKUAT',            p: 2, w: 0, d: 0, l: 2, gf: 33, ga: 53, gd: -20, pts: 0 },
  { pos: 15, club: '', team: 'Young City',       p: 3, w: 0, d: 0, l: 3, gf: 52, ga: 75, gd: -23, pts: 0 },
],

// ----------------------------------------------------------------------------
// NATIONAL TEAMS
// ----------------------------------------------------------------------------
export const nationalTeams = [
  { slug: 'senior-men',   name: 'Kenya Senior Men',   img: '', desc: "The national men's handball team representing Kenya in international competitions." }, // TODO: add image
  { slug: 'senior-women', name: 'Kenya Senior Women', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgeHYcxip_V17GjYB5k_QiJeK8mWOrLtfTTiM4GOkNkw&s=10', desc: "The national women's handball team representing Kenya in international competitions." },
  { slug: 'junior',       name: 'Junior & Youth',     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXEg2iMHFZ6JR-WroGnBaAuAx4DNjit-CbBIC8tUopg&s=10', desc: 'Developing the next generation of Kenyan handball talent.' },
];

export const partners = [
  { name: 'Sponsor A', tier: 'Official Partner' },
  { name: 'Sponsor B', tier: 'Corporate Sponsor' },
  { name: 'Sponsor C', tier: 'Development Partner' },
  { name: 'Sponsor D', tier: 'Media Partner' },
  { name: 'Sponsor E', tier: 'Equipment Partner' },
];

// NOTE: the third gallery entry is a news article page, not an image file.
export const gallery = [
  'https://www.michezoafrika.com/newsimages/GSU-VS-THIKA-.JPG',
  'https://www.michezoafrika.com/newsimages/COACH-MWATHI-2.JPG',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9jpH1W08OMM4ce08BmR3IWlRLd9PeidfsdsPcSgrhaw&s=10',
];

// ============================================================================
// HELPERS — use these in components instead of comparing names
// ============================================================================
export const clubBySlug = Object.fromEntries(clubs.map((c) => [c.slug, c]));
export const competitionBySlug = Object.fromEntries(competitions.map((c) => [c.slug, c]));

export const getClub = (slug) => clubBySlug[slug] ?? null;
export const getCompetition = (slug) => competitionBySlug[slug] ?? null;
export const getClubsByLeague = (slug) => clubs.filter((c) => c.league === slug);

const compareRows = (a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf;

// Always returns rows in table order with a fresh 1..n `pos`.
export const getStandings = (slug) =>
  [...(standings[slug] ?? [])]
    .sort(compareRows)
    .map((row, i) => ({ ...row, pos: i + 1 }));

export const getFixturesByComp = (slug) => fixtures.filter((f) => f.comp === slug);
