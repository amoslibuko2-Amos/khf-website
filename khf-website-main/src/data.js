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
  { id: 10, slug: 'daystar-men',      name: 'Daystar Falcons',      short: 'Daystar',  logo: 'data:image/jpeg;base64,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',
   fullName: 'Daystar University',                           location: 'Machakos', category: 'Senior Men', league: 'premier-men' },
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
  { id: 22, slug: 'jkuat-women',      name: 'JKUAT',                 short: 'JKUAT',         fullName: 'Jomo Kenyatta University of Agriculture & Technology', location: 'Juja',     category: 'Senior Women', league: 'premier-women' },
  { id: 24, slug: 'ulinzi-sharks',    name: 'Ulinzi Sharks',         short: 'Sharks',        fullName: 'Ulinzi Sharks Handball Club',                          location: 'Langata',  category: 'Senior Women', league: 'premier-women' },
    { id: 24, slug: 'firehawks',    name: 'firehawks',         short: 'firehawks',        fullName: 'firehawks Handball Club',                          location: 'Langata',  category: 'Senior Women', league: 'premier-women' },

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
    { pos: 5,  club: 'ku-men',          team: 'KU',           p: 2, w: 1, d: 0, l: 1, gf: 43, ga: 41,  gd: 2,  pts: 2 },
    { pos: 6,  club: 'ncpb-men',        team: 'NCPB',         p: 1, w: 1, d: 0, l: 0, gf: 32, ga: 21,  gd: 11,  pts: 2 },
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
    { pos: 8,  club: 'kisii-women',     team: 'KISII',           p: 2, w: 1, d: 0, l: 1, gf: 28, ga: 37, gd: -9 ,  pts: 2 },
    { pos: 5,  club: 'ku-ladies',        team: 'KU LADIES',        p: 0, w: 0, d: 0, l: 0, gf: 0,  ga: 0,  gd: 0,   pts: 0 },
    { pos: 7,  club: 'firehawks-women',     team: 'FIREHAWKS',     p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0 ,  pts: 0 },
    { pos: 9,  club: 'ulinzi-sharks',    team: 'ULINZI SHARKS',    p: 1, w: 0, d: 0, l: 0, gf: 0,  ga: 0,  gd: -15,   pts: 0 },
    { pos: 10,  club: 'think queens',     team: 'THIKA',           p: 1, w: 0, d: 0, l: 1, gf: 0,  ga: 0,  gd: -15,   pts: 0 },
      { pos: 11, club: 'jkuat-women',      team: 'JKUAT',            p: 1, w: 0, d: 0, l: 1, gf: 17, ga: 45, gd: -28, pts: 0 },
     { pos: 12,  club: 'nys-women',        team: 'NYS',              p: 2, w: 0, d: 0, l: 1, gf: 44, ga: 90, gd: -46, pts: 0 },
  ],
  'national-men': [
    { pos: 1, club: '', team: 'CONSTRACTION',   p: 6, w: 4, d: 1, l: 1, gf: 189, ga: 157, gd: 32, pts: 9 },
    { pos: 2, club: '', team: 'KCB',  p: 5, w: 3, d: 2, l: 2, gf: 128, ga: 102, gd: 26, pts: 8 },
    { pos: 3, club: '', team: 'KAHAWA', p: 5, w: 3, d: 0, l: 2, gf: 143, ga: 120, gd: 23, pts: 6 },
    { pos: 4, club: '', team: 'TAO',   p: 4, w: 3, d: 0, l: 1, gf: 86, ga: 65, gd: 21, pts: 6 },
    { pos: 5, club: '', team: 'BOOMARANG',  p: 3, w: 3, d: 0, l: 0, gf: 85, ga: 77, gd: 8, pts: 6 },
    { pos: 6, club: '', team: 'DESERT SCORPIONS', p: 4, w: 2, d: 1, l: 1, gf: 100, ga: 76, gd: 24, pts: 5 },
    { pos: 7, club: '', team: 'NAYUKI',   p: 5, w: 2, d: 0, l: 3, gf: 133, ga: 122, gd: 11, pts: 4 },
    { pos: 8, club: '', team: 'KISII',  p: 5, w: 2, d: 0, l: 3, gf: 57, ga: 90, gd: -33, pts: 4 },
    { pos: 9, club: '', team: 'NYS', p: 2, w: 1, d: 0, l: 1, gf: 47, ga: 48, gd: -1, pts: 2 },
    { pos: 10, club: '', team: 'TUK',   p: 2, w: 1, d: 0, l: 1, gf: 52, ga: 62, gd: -10, pts: 2 },
    { pos: 11, club: '', team: 'KENYA NAVY',   p: 4, w: 1, d: 0, l: 3, gf: 102, ga: 114, gd: -12, pts: 2 },
    { pos: 12, club: '', team: 'PRISONS',  p: 5, w: 1, d: 0, l: 4, gf: 127, ga: 162, gd: -35, pts: 2 },
    { pos: 13, club: '', team: 'HANTERS', p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { pos: 14, club: '', team: 'YOUNG CITY',   p: 3, w: 0, d: 0, l: 3, gf: 52, ga: 75, gd: -23, pts: 0 },
    { pos: 15, club: '', team: 'JKUAT',  p: 3, w: 0, d: 0, l: 0, gf: 54, ga: 85, gd: -31, pts: 0 },
  ],
};
    
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
