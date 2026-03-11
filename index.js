// styles
const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=DM+Sans:wght@400;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #faf8f4;
    font-family: Georgia, serif;
    color: #111;
  }

  header {
    background: #fff;
    border-bottom: 3px solid #111;
    padding: 14px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .pub-name {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 900;
  }

  .pub-name span { color: #9b1c1c; }

  .header-right {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    color: #888;
    text-align: right;
  }

  .page {
    max-width: 960px;
    margin: 0 auto;
    padding: 30px 24px 60px;
  }

  .tag {
    background: #9b1c1c;
    color: white;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    padding: 3px 9px;
    display: inline-block;
    margin-bottom: 16px;
  }

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 58px;
    font-weight: 900;
    line-height: 1.05;
    border-top: 4px solid #111;
    padding-top: 16px;
    margin-bottom: 12px;
  }

  .deck {
    font-size: 18px;
    font-style: italic;
    color: #555;
    line-height: 1.5;
    margin-bottom: 18px;
    max-width: 650px;
  }

  .byline {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: #777;
    border-bottom: 1px solid #ccc;
    padding-bottom: 14px;
    margin-bottom: 24px;
  }

  .byline strong { color: #111; }

  /* banner */
  .banner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 6px;
    margin-bottom: 8px;
  }

  .banner img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    display: block;
  }

  .banner-captions {
    display: flex;
    gap: 30px;
    background: #111;
    color: #ccc;
    padding: 8px 14px;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    margin-bottom: 32px;
  }

  .banner-captions strong { color: #fff; display: block; }

  /* two column layout */
  .columns {
    display: grid;
    grid-template-columns: 1fr 260px;
    gap: 40px;
  }

  /* article body */
  .body-col p {
    font-size: 16.5px;
    line-height: 1.8;
    margin-bottom: 18px;
    color: #222;
  }

  .body-col p:first-child::first-letter {
    font-family: 'Playfair Display', serif;
    font-size: 72px;
    font-weight: 900;
    float: left;
    line-height: 0.78;
    margin: 4px 7px -2px 0;
    color: #9b1c1c;
  }

  .body-col h2 {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    border-left: 4px solid #1a6335;
    padding-left: 12px;
    margin: 36px 0 16px;
  }

  figure {
    margin: 24px 0;
    clear: both;
  }

  figure img {
    width: 100%;
    max-height: 320px;
    object-fit: cover;
    display: block;
  }

  figcaption {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    color: #888;
    padding-top: 6px;
    border-top: 1px solid #ddd;
    margin-top: 6px;
    line-height: 1.5;
  }

  figcaption strong { color: #333; }

  .divider {
    text-align: center;
    color: #b8933a;
    letter-spacing: 10px;
    margin: 30px 0;
    font-size: 16px;
  }

  /* sidebar */
  .pull-quote {
    border-top: 3px solid #111;
    border-bottom: 1px solid #ccc;
    padding: 18px 0 16px;
    margin-bottom: 28px;
  }

  .pull-quote blockquote {
    font-family: 'Playfair Display', serif;
    font-size: 19px;
    font-style: italic;
    line-height: 1.4;
    color: #111;
  }

  .pull-quote cite {
    display: block;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #b8933a;
    margin-top: 10px;
    font-style: normal;
  }

  .box {
    background: #fff;
    border-left: 4px solid #9b1c1c;
    padding: 16px 14px;
    margin-bottom: 24px;
  }

  .box-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #9b1c1c;
    margin-bottom: 8px;
  }

  .box p {
    font-size: 13px;
    line-height: 1.6;
    color: #444;
    margin: 0;
  }

  .box strong { color: #111; }

  /* citations */
  .citations {
    border-top: 2px double #111;
    margin-top: 48px;
    padding-top: 20px;
  }

  .citations h3 {
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 12px;
    font-weight: 600;
  }

  .citations ul { list-style: none; }

  .citations li {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: #555;
    margin-bottom: 7px;
    line-height: 1.5;
  }

  .citations a { color: #1a6335; }

  footer {
    background: #fff;
    border-top: 1px solid #ccc;
    padding: 16px 30px;
    display: flex;
    justify-content: space-between;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    color: #aaa;
    margin-top: 40px;
  }
`;
document.head.appendChild(style);

// ── HEADER ────────────────────────────────────────────────────────────────────
const header = document.createElement('header');

const pubName = document.createElement('div');
pubName.className = 'pub-name';
pubName.innerHTML = 'ENG<span> 1102</span>';

const headerRight = document.createElement('div');
headerRight.className = 'header-right';
headerRight.innerHTML = 'Artifact 2 — Dr. Winter · Georgia Tech · Spring 2026';

header.appendChild(pubName);
header.appendChild(headerRight);
document.body.appendChild(header);

// ── PAGE WRAP ─────────────────────────────────────────────────────────────────
const page = document.createElement('div');
page.className = 'page';
document.body.appendChild(page);

// tag
const tag = document.createElement('div');
tag.className = 'tag';
tag.textContent = 'Featured · Mexican Independence';
page.appendChild(tag);

// headline
const h1 = document.createElement('h1');
h1.textContent = 'The Fist and the Angel';
page.appendChild(h1);

// deck / subtitle
const deck = document.createElement('p');
deck.className = 'deck';
deck.textContent = 'These two monuments serve as two visions of Mexican independence. One a giant made of concrete, rising above an ancient lake, the other a golden figure above the grandest boulevard in the capital. Each tell us what Mexico chose to remember, and why.';
page.appendChild(deck);

// byline
const byline = document.createElement('div');
byline.className = 'byline';
byline.innerHTML = '<strong>By Francisco Alvarado</strong>';
page.appendChild(byline);

// ── BANNER ────────────────────────────────────────────────────────────────────
const banner = document.createElement('div');
banner.className = 'banner';

const bannerImg1 = document.createElement('img');
bannerImg1.src = 'images/joseMariaMorelosStatue.jpg';
bannerImg1.alt = 'The Morelos statue on Isla Janitzio rising above Lake Patzcuaro';

const bannerImg2 = document.createElement('img');
bannerImg2.src = 'images/angelDeIndependencia.jpg';
bannerImg2.alt = 'The Angel of Independence on Paseo de la Reforma, Mexico City';

banner.appendChild(bannerImg1);
banner.appendChild(bannerImg2);
page.appendChild(banner);

const bannerCaptions = document.createElement('div');
bannerCaptions.className = 'banner-captions';
bannerCaptions.innerHTML = `
  <div><strong>LEFT</strong> Morelos statue on Isla Janitzio, Lake Pátzcuaro, Michoacán. Built 1933.</div>
  <div><strong>RIGHT</strong> Angel of Independence, Paseo de la Reforma, Mexico City. Inaugurated September 16, 1910.</div>
`;
page.appendChild(bannerCaptions);

// ── TWO-COLUMN LAYOUT ─────────────────────────────────────────────────────────
const columns = document.createElement('div');
columns.className = 'columns';
page.appendChild(columns);

// BODY COLUMN
const bodyCol = document.createElement('div');
bodyCol.className = 'body-col';
columns.appendChild(bodyCol);

// intro
const p1 = document.createElement('p');
p1.textContent = 'On the shimmering waters of Lake Pátzcuaro in Michoacán, a 40-meter concrete giant rises above the indigenous fishing village of Janitzio. Its raised fist, clenched skyward, has been visible from the mainland since 1933 — a gesture of permanent defiance. Nearly 300 miles to the northeast, on the grandest boulevard of Mexico City, a golden winged figure stands 6.7 meters tall atop a 36-meter column of marble and stone, her arms outstretched, a laurel wreath in one hand and a broken chain in the other. Together, the statue of José María Morelos y Pavón on Isla Janitzio and the Angel of Independence on Paseo de la Reforma offer a fascinating portrait of how Mexico chose to commemorate its hard-won freedom — one a monument to the people\'s war, the other a monument to the state\'s triumph.';
bodyCol.appendChild(p1);

// section 1
const h2a = document.createElement('h2');
h2a.textContent = 'The Giant of Janitzio: Morelos and the People\'s Revolution';
bodyCol.appendChild(h2a);

const p2 = document.createElement('p');
p2.textContent = 'José María Morelos y Pavón (1765–1815) was not born to lead revolutions. A mestizo Catholic priest from Valladolid — today\'s Morelia — he came from modest origins, far removed from the Creole elite who dominated colonial Mexico. When Father Miguel Hidalgo y Costilla rang the bell of Dolores in September 1810 and called the people to arms, Morelos answered. After Hidalgo\'s capture and execution in 1811, Morelos assumed command of the independence movement and transformed it from a chaotic rural uprising into a disciplined military and political campaign. He organized the Congress of Chilpancingo in 1813, which produced the first formal declaration of Mexican independence, and authored the landmark document Sentimientos de la Nación — which called for the abolition of slavery and the dismantling of racial castes. Morelos was not merely a military commander; he was a constitutional visionary who understood that independence without social equality was simply a change of masters.';
bodyCol.appendChild(p2);

// morelos portrait
const fig1 = document.createElement('figure');
const img1 = document.createElement('img');
img1.src = 'images/morelosPortrait.jpg';
img1.alt = 'Portrait of José María Morelos y Pavón';
const cap1 = document.createElement('figcaption');
cap1.innerHTML = '<strong>José María Morelos y Pavón (1765–1815)</strong> — A mestizo priest who turned Mexico\'s independence struggle into a campaign for racial and social equality. Executed by the Spanish Inquisition in 1815.';
fig1.appendChild(img1);
fig1.appendChild(cap1);
bodyCol.appendChild(fig1);

const p3 = document.createElement('p');
p3.textContent = 'By 1815, Spanish royalist forces had cornered and captured him. Tried by the Inquisition, stripped of his priesthood, and executed by firing squad on December 22, 1815, Morelos died a martyr. His legacy was immediately powerful — celebrated by liberals and populists, but inconvenient to conservatives who preferred the story of independence as an elite-managed transition of power.';
bodyCol.appendChild(p3);

const p4 = document.createElement('p');
p4.textContent = 'The statue on Janitzio was completed in 1933, during the post-revolutionary Mexican government\'s program of nationalist cultural memory. The year is telling: Mexico was on the cusp of the transformative presidency of Lázaro Cárdenas (1934–1940), who would nationalize oil, redistribute land to peasants, and champion the Purépecha and other indigenous communities of Michoacán. Building a towering monument to Morelos — mestizo, priest, anti-slavery revolutionary — on an island at the heart of Purépecha indigenous territory was a deliberate act of nation-building. It tied the post-revolutionary state\'s legitimacy directly to Morelos\'s radical vision of a racially egalitarian Mexico.';
bodyCol.appendChild(p4);

const p5 = document.createElement('p');
p5.textContent = 'The statue\'s design communicates this ambition with unmistakable power. The raised fist is its most legible symbol — a gesture of defiance and resistance that resonates far beyond its historical subject. Yet it is also functional: visitors ascend a spiraling interior staircase of 160 steps past murals by Ramón Alva de la Canal depicting Morelos\'s life, finally emerging in the statue\'s hollow wrist to peer through openings in the fist itself at the panoramic lake below. The viewer literally inhabits the monument\'s most powerful symbol. The monument does not merely represent Morelos — it invites visitors, and especially the Purépecha community who have always surrounded this lake, to see the world through the revolutionary\'s eyes.';
bodyCol.appendChild(p5);

const p6 = document.createElement('p');
p6.textContent = 'Yet the monument\'s placement introduces a quiet tension. The Purépecha people of the lake region had their own complex and ambiguous relationship with the independence movement — not all indigenous groups embraced the insurgency uniformly. The post-revolutionary state\'s habit of deploying indigenous geography and imagery to celebrate mestizo nationalist heroes was itself a subtle form of cultural appropriation. The statue says "this land honors its liberators." It is worth asking whether the communities who have always lived on this land were ever consulted about what liberation meant to them.';
bodyCol.appendChild(p6);

const divider = document.createElement('div');
divider.className = 'divider';
divider.textContent = '✦  ✦  ✦';
bodyCol.appendChild(divider);

// section 2
const h2b = document.createElement('h2');
h2b.textContent = 'The Angel of Independence: Triumph in Marble and Gold';
bodyCol.appendChild(h2b);

const p7 = document.createElement('p');
p7.textContent = 'If the Morelos statue speaks in a clenched fist, the Angel of Independence speaks with outstretched wings. Inaugurated on September 16, 1910 — the centennial of Hidalgo\'s Grito de Independencia — the monument was the centerpiece of President Porfirio Díaz\'s lavish centennial celebrations. Díaz, who had ruled Mexico as a dictator for over thirty years, understood that monuments are not merely historical records but political instruments. The Angel was his gift to history: a declaration that the Mexico of 1910 was the legitimate heir and fulfillment of the independence struggle of 1810.';
bodyCol.appendChild(p7);

const fig2 = document.createElement('figure');
const img2 = document.createElement('img');
img2.src = 'images/angelDeIndependencia.jpg';
img2.alt = 'The Angel of Independence on Paseo de la Reforma, Mexico City';
const cap2 = document.createElement('figcaption');
cap2.innerHTML = '<strong>El Ángel de la Independencia, Paseo de la Reforma, Mexico City</strong> — Inaugurated September 16, 1910 by President Porfirio Díaz. Designed by architect Antonio Rivas Mercado. The winged Victoria holds a laurel wreath and a broken chain symbolizing victory and freedom from colonial rule.';
fig2.appendChild(img2);
fig2.appendChild(cap2);
bodyCol.appendChild(fig2);

const p8 = document.createElement('p');
p8.textContent = 'The monument was designed by architect Antonio Rivas Mercado and sculptor Enrique Alciati. The central figure — a winged Victoria modeled on classical Greco-Roman iconography — stands 6.7 meters tall atop a 36-meter Corinthian column, resting on a broad base whose four corners feature bronze sculptures representing Law, War, Justice, and Peace. The column\'s interior houses an ossuary: the remains of independence heroes including Hidalgo, Allende, Aldama, and Morelos were transferred here with great ceremony. The Angel is not merely a sculpture — it is a reliquary, a shrine that physically contains the founders of the Mexican nation.';
bodyCol.appendChild(p8);

const p9 = document.createElement('p');
p9.textContent = 'The monument\'s location is as deliberate as its design. Paseo de la Reforma was modeled on Baron Haussmann\'s grand Parisian boulevards — and placing the independence monument at one of its most prominent glorietas announced clearly that modern Mexico was a European-aspiring, cosmopolitan republic. The classical European aesthetic of the Angel communicates a specific vision: Mexican independence is not a peasant uprising but a civilizational achievement. It is telling that the monument chose a Greco-Roman winged Victoria rather than an indigenous or mestizo figure. The independence being celebrated here is filtered through a distinctly elite, Eurocentric lens.';
bodyCol.appendChild(p9);

const p10 = document.createElement('p');
p10.textContent = 'The political context of the monument\'s creation is impossible to ignore. Díaz commissioned and inaugurated the Angel in 1910 — and by 1911, his regime had collapsed under the pressure of the Mexican Revolution. The leaders who overthrew Díaz would go on to lift figures like Morelos — the radical, the anti-elite, the mestizo priest — to the center of the national story. The Angel of Independence survived the Revolution and became the most beloved public monument in Mexico City, but its origins in the grandiosity of an authoritarian regime\'s self-celebration are an irreducible part of its meaning.';
bodyCol.appendChild(p10);

const p11 = document.createElement('p');
p11.textContent = 'Today the Angel serves functions its creator could not have imagined. It has become the spontaneous gathering point for national celebrations — football victories, political protests, New Year\'s Eve — and Mexicans have made it their own in ways that far exceed Díaz\'s original vision. The monument has been detached from its authoritarian origins and re-inscribed with popular meaning. This is itself a lesson in how monuments live beyond their makers.';
bodyCol.appendChild(p11);

// section 3
const h2c = document.createElement('h2');
h2c.textContent = 'Two Monuments, One Argument About Memory';
bodyCol.appendChild(h2c);

const p12 = document.createElement('p');
p12.textContent = 'Taken together, the Morelos statue and the Angel of Independence illuminate what historians have long understood: national memory is always selective, always political, and always partial. Every monument is an argument — it says "this person mattered, this value is worth preserving in stone." The Morelos statue argues for a Mexico that honors the poor, the mestizo, the radical priest who demanded that freedom mean something for everyone. The Angel argues for a Mexico that took its place among the civilized nations of the world, a republic with classical roots and European ambitions. These are genuinely different visions — and the tension between them has defined Mexican politics for two centuries.';
bodyCol.appendChild(p12);

const p13 = document.createElement('p');
p13.textContent = 'It is also worth noting what both monuments share: both were built not at the moment of independence itself but decades or a century later, by governments with their own political agendas. The Morelos statue (1933) was a post-revolutionary statement about popular sovereignty. The Angel (1910) was a Porfirian statement about modernity and state power. Neither monument simply "records" history — both actively construct it, selecting which aspects of the independence struggle to amplify and which to quietly minimize. Morelos\'s statue lifts high the radical, egalitarian demands of his Sentimientos de la Nación. The Angel quietly elevates Creole leaders and the European aesthetic register, while the indigenous majority of the fighting forces goes symbolically unrepresented.';
bodyCol.appendChild(p13);

const p14 = document.createElement('p');
p14.textContent = 'In the end, both monuments are honest precisely because they are incomplete. The raised fist of Janitzio and the golden wings of the Reforma do not together tell the whole story of Mexican independence — no two monuments could. But they tell us, with striking clarity, about the different communities and different moments that shaped the way Mexico remembers its founding. Stone does not lie; but stone, like all memory, is strategically selective about what it chooses to say.';
bodyCol.appendChild(p14);

// citations
const citations = document.createElement('div');
citations.className = 'citations';

const citLabel = document.createElement('h3');
citLabel.textContent = 'Works Cited';
citations.appendChild(citLabel);

const citList = document.createElement('ul');
const cites = [
  { text: 'Wikimedia Contributors. "Janitzio." Wikipedia, The Free Encyclopedia. 2025.', url: 'https://en.wikipedia.org/wiki/Janitzio' },
  { text: 'Wikimedia Contributors. "Angel of Independence." Wikipedia, The Free Encyclopedia. 2025.', url: 'https://en.wikipedia.org/wiki/Angel_of_Independence' },
  { text: 'Atlas Obscura. "Statue of José Maria Morelos in Janitzio." 2024.', url: 'https://www.atlasobscura.com/places/isla-de-janitzio' },
  { text: 'Mexico City CDMX. "El Ángel de la Independencia." 2024.', url: 'https://mexicocity.cdmx.gob.mx' },
  { text: 'Beezley, William H. "The Porfirian Smart Set Anticipates Thorstein Veblen in Guadalajara." Rituals of Rule, Rituals of Resistance. 1994.', url: 'https://www.jstor.org' },
];
cites.forEach(c => {
  const li = document.createElement('li');
  li.textContent = c.text + ' ';
  const a = document.createElement('a');
  a.href = c.url;
  a.target = '_blank';
  a.textContent = c.url;
  li.appendChild(a);
  citList.appendChild(li);
});
citations.appendChild(citList);
bodyCol.appendChild(citations);

// SIDEBAR
const sidebar = document.createElement('div');
columns.appendChild(sidebar);

// pull quote 1
const pq1 = document.createElement('div');
pq1.className = 'pull-quote';
pq1.innerHTML = `<blockquote>"The viewer literally inhabits the monument's most powerful symbol — seeing the world through Morelos's raised fist."</blockquote><cite>On the Morelos Statue, Isla Janitzio</cite>`;
sidebar.appendChild(pq1);

// box 1
const box1 = document.createElement('div');
box1.className = 'box';
box1.innerHTML = `<div class="box-label">Who Was Morelos?</div><p><strong>José María Morelos y Pavón (1765–1815)</strong> was a mestizo Catholic priest who took command of Mexico's independence movement after Hidalgo's execution. His 1813 document <em>Sentimientos de la Nación</em> called for the abolition of slavery and racial castes. He was executed by the Spanish Inquisition on December 22, 1815.</p>`;
sidebar.appendChild(box1);

// pull quote 2
const pq2 = document.createElement('div');
pq2.className = 'pull-quote';
pq2.innerHTML = `<blockquote>"The Angel of Independence survived the Revolution — and was remade by the people as their own."</blockquote><cite>On El Ángel, Paseo de la Reforma</cite>`;
sidebar.appendChild(pq2);

// box 2
const box2 = document.createElement('div');
box2.className = 'box';
box2.innerHTML = `<div class="box-label">The Angel's Hidden Crypt</div><p>Beneath the monument's base lies an ossuary containing the remains of independence heroes including <strong>Hidalgo, Allende, Aldama, and Morelos</strong>. When Díaz inaugurated the monument in 1910, transferring these remains was a deliberate act of state sacralization — turning a political monument into a national shrine.</p>`;
sidebar.appendChild(box2);

// pull quote 3
const pq3 = document.createElement('div');
pq3.className = 'pull-quote';
pq3.innerHTML = `<blockquote>"Every monument is an argument. It also tells us what the builders hoped the next generation would forget."</blockquote><cite>Conclusion</cite>`;
sidebar.appendChild(pq3);

// box 3
const box3 = document.createElement('div');
box3.className = 'box';
box3.innerHTML = `<div class="box-label">Díaz's Centennial & His Downfall</div><p>Porfirio Díaz inaugurated the Angel on <strong>September 16, 1910</strong> after ruling Mexico for over 30 years. <strong>Within 8 months, the Mexican Revolution had begun and Díaz had fled into exile.</strong> The monument he built to glorify his regime outlasted him by over a century.</p>`;
sidebar.appendChild(box3);

// pull quote 4
const pq4 = document.createElement('div');
pq4.className = 'pull-quote';
pq4.innerHTML = `<blockquote>"Stone does not lie — but like all memory, it is selective about what it chooses to say."</blockquote><cite>Analysis</cite>`;
sidebar.appendChild(pq4);

// FOOTER
const footer = document.createElement('footer');
const fLeft = document.createElement('span');
fLeft.textContent = '© 2025 Georgia Tech Review';
const fRight = document.createElement('span');
fRight.textContent = 'Monuments & Memory · Spring Edition';
footer.appendChild(fLeft);
footer.appendChild(fRight);
document.body.appendChild(footer);