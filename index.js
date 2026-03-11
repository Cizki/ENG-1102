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
tag.textContent = "Featured · Mexican Independence";
page.appendChild(tag);

// headline
const h1 = document.createElement('h1');
h1.textContent = "The Fist and the Angel";
page.appendChild(h1);

// deck / subtitle
const deck = document.createElement('p');
deck.className = 'deck';
deck.textContent = "These monuments represent two drastically different visions of Mexican independence. One is a concrete colossus towering over an ancient lake; the other, a gilded angel soaring above the capital's most famous boulevard. Together, they reveal exactly what Mexico chose to memorialize—and why.";
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
bannerImg1.alt = "The Morelos statue on Isla Janitzio rising above Lake Patzcuaro";

const bannerImg2 = document.createElement('img');
bannerImg2.src = 'images/angelDeIndependencia.jpg';
bannerImg2.alt = "The Angel of Independence on Paseo de la Reforma, Mexico City";

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
p1.textContent = "Out on the sunlit waters of Michoacán’s Lake Pátzcuaro, a 40-meter concrete giant stands watch over the indigenous fishing village of Janitzio. With a fist thrust defiantly into the sky, it's a bold gesture that’s been visible from the mainland since 1933. Contrast that with a scene nearly 300 miles away in Mexico City: a gleaming, 6.7-meter golden winged victory perches on a marble column above Paseo de la Reforma, holding a laurel wreath and a broken chain. Side by side, the José María Morelos y Pavón statue and the Angel of Independence give us a striking look at how Mexico decided to frame its hard-fought freedom. One honors a gritty, grassroots revolution; the other celebrates the polished triumph of the state.";
bodyCol.appendChild(p1);

// section 1
const h2a = document.createElement('h2');
h2a.textContent = "The Giant of Janitzio: Morelos and the People's Revolution";
bodyCol.appendChild(h2a);

const p2 = document.createElement('p');
p2.textContent = "José María Morelos y Pavón (1765–1815) wasn't your typical revolutionary. A mestizo Catholic priest from Valladolid (now Morelia), he came from humble roots, miles away from the elite Creoles who ran colonial Mexico. But when Father Miguel Hidalgo y Costilla rang the bell of Dolores in 1810 and sparked the uprising, Morelos stepped up. After Hidalgo was captured and killed in 1811, Morelos took the reins, turning a scattered peasant rebellion into a sharply organized military and political force. He put together the Congress of Chilpancingo in 1813, which drafted Mexico's first real declaration of independence. He also wrote the Sentimientos de la Nación, a groundbreaking document demanding the end of slavery and the racial caste system. Morelos wasn't just a general; he was a visionary who knew that independence meant nothing if it didn't bring social equality.";
bodyCol.appendChild(p2);

// morelos portrait
const fig1 = document.createElement('figure');
const img1 = document.createElement('img');
img1.src = 'images/morelosPortrait.jpg';
img1.alt = "Portrait of José María Morelos y Pavón";
const cap1 = document.createElement('figcaption');
cap1.innerHTML = "<strong>José María Morelos y Pavón (1765–1815)</strong> — A mestizo priest who turned Mexico's independence struggle into a campaign for racial and social equality. Executed by the Spanish Inquisition in 1815.";
fig1.appendChild(img1);
fig1.appendChild(cap1);
bodyCol.appendChild(fig1);

const p3 = document.createElement('p');
p3.textContent = "But his run didn't last. By 1815, Spanish royalists had backed him into a corner. He was captured, tried by the Inquisition, stripped of his priesthood, and executed by firing squad on December 22, 1815. He died a martyr. Liberals and the working class idolized him, but his legacy was a thorn in the side of conservatives who wanted independence to look like a clean, elite handover of power.";
bodyCol.appendChild(p3);

const p4 = document.createElement('p');
p4.textContent = "The Janitzio statue was finished in 1933, right when Mexico’s post-revolutionary government was trying to shape the country's cultural memory. The timing is huge: Mexico was just about to enter the presidency of Lázaro Cárdenas, who would soon nationalize oil, give land back to farmers, and fiercely advocate for the Purépecha people of Michoacán. Dropping a massive monument of Morelos—a mestizo priest and anti-slavery crusader—right in the middle of indigenous Purépecha territory was a deeply intentional move. It hitched the new government's credibility straight to Morelos’s dream of an equal, racism-free Mexico.";
bodyCol.appendChild(p4);

const p5 = document.createElement('p');
p5.textContent = "The design of the statue hits you right over the head with this message. That raised fist is impossible to miss—a universal sign of fighting back. But it’s also physically interactive.  You can climb a spiraling 160-step staircase inside the statue, walking past Ramón Alva de la Canal's murals of Morelos’s life, until you reach the hollow space inside the wrist. From there, you literally look out over the lake through the gaps in the fist. The monument doesn't just show you Morelos; it puts you inside his perspective, asking you to see the world the way he did.";
bodyCol.appendChild(p5);

const p6 = document.createElement('p');
p6.textContent = "Still, putting the statue there creates a bit of quiet friction. The Purépecha people living around the lake had a pretty complicated history with the independence movement—not all indigenous groups were totally on board with the insurgency. The post-revolutionary government had a habit of using indigenous lands and symbols to prop up mestizo heroes, which was arguably a sneaky kind of cultural appropriation. The statue proudly declares, 'This land honors its liberators.' But it really makes you wonder if the locals were ever asked what liberation actually looked like to them.";
bodyCol.appendChild(p6);

const divider = document.createElement('div');
divider.className = 'divider';
divider.textContent = '✦  ✦  ✦';
bodyCol.appendChild(divider);

// section 2
const h2b = document.createElement('h2');
h2b.textContent = "The Angel of Independence: Triumph in Marble and Gold";
bodyCol.appendChild(h2b);

const p7 = document.createElement('p');
p7.textContent = "If the Morelos statue is a clenched fist, the Angel of Independence is an open embrace. Unveiled on September 16, 1910—exactly 100 years after Hidalgo’s call to arms—the monument was the crown jewel of President Porfirio Díaz’s over-the-top centennial bash. Díaz, who had been running Mexico as a dictator for over three decades, knew perfectly well that monuments are just politics set in stone. The Angel was his way of telling the world that his 1910 regime was the true, ultimate realization of the 1810 revolution.";
bodyCol.appendChild(p7);

const fig2 = document.createElement('figure');
const img2 = document.createElement('img');
img2.src = 'images/angelDeIndependencia.jpg';
img2.alt = "The Angel of Independence on Paseo de la Reforma, Mexico City";
const cap2 = document.createElement('figcaption');
cap2.innerHTML = "<strong>El Ángel de la Independencia, Paseo de la Reforma, Mexico City</strong> — Inaugurated September 16, 1910 by President Porfirio Díaz. Designed by architect Antonio Rivas Mercado. The winged Victoria holds a laurel wreath and a broken chain symbolizing victory and freedom from colonial rule.";
fig2.appendChild(img2);
fig2.appendChild(cap2);
bodyCol.appendChild(fig2);

const p8 = document.createElement('p');
p8.textContent = "Architect Antonio Rivas Mercado and sculptor Enrique Alciati designed the piece. The main attraction—a winged Victoria inspired by classic Greco-Roman art—stands tall on a 36-meter Corinthian column. The base is guarded by bronze figures representing Law, War, Justice, and Peace. But the column isn't solid; it holds an ossuary.  The bones of independence heroes like Hidalgo, Allende, Aldama, and Morelos himself were moved there in a massive ceremony. So the Angel isn't just a pretty landmark; it's literally a tomb holding the founding fathers of Mexico.";
bodyCol.appendChild(p8);

const p9 = document.createElement('p');
p9.textContent = "Where they put it matters, too. Paseo de la Reforma was designed to mimic the grand boulevards of Paris. Dropping the independence monument in one of its biggest traffic circles was a loud announcement that modern Mexico was a cosmopolitan, European-style republic. The classical look of the Angel sends a very specific message: Mexican independence wasn't some messy peasant revolt; it was a high-class, civilized triumph. It’s pretty telling that they went with a Greco-Roman angel instead of an indigenous or mestizo figure. The version of independence they're selling here is strictly through an elite, Eurocentric lens.";
bodyCol.appendChild(p9);

const p10 = document.createElement('p');
p10.textContent = "You can't ignore the political irony of it all. Díaz threw this massive party to unveil the Angel in 1910, and less than a year later, the Mexican Revolution blew his regime to pieces. The leaders who kicked him out ended up glorifying guys like Morelos—the anti-elite, mestizo underdog. Amazingly, the Angel survived the revolution and became Mexico City’s favorite landmark. But its roots in a dictator’s ego trip will always be part of its DNA.";
bodyCol.appendChild(p10);

const p11 = document.createElement('p');
p11.textContent = "Today, the Angel takes on a life its creators never could have guessed. It’s the go-to spot for basically everything: soccer wins, massive protests, New Year’s parties. Everyday Mexicans have claimed it as their own, completely rewriting Díaz's original intent. It just goes to show that monuments eventually belong to the people, not the politicians who built them.";
bodyCol.appendChild(p11);

// section 3
const h2c = document.createElement('h2');
h2c.textContent = "Two Monuments, One Argument About Memory";
bodyCol.appendChild(h2c);

const p12 = document.createElement('p');
p12.textContent = "Looking at them side by side, the Morelos statue and the Angel of Independence prove what historians always say: national memory is picky, political, and never tells the whole truth. Every monument is essentially an argument frozen in time. The Morelos statue argues for a Mexico that remembers the poor and the marginalized, led by a radical priest who wanted real freedom for everyone. The Angel argues for a slick, modernized Mexico that belongs among the 'civilized' powers of Europe. These are totally clashing visions, and the tug-of-war between them has basically defined Mexican politics for the last two hundred years.";
bodyCol.appendChild(p12);

const p13 = document.createElement('p');
p13.textContent = "It’s also funny what they have in common. Neither was built during the actual war. Both went up decades or a century later, built by governments trying to push their own agendas. Morelos (1933) was all about post-revolutionary grassroots power. The Angel (1910) was about dictator-era modernization. Neither tells it like it was. They both selectively highlight some things and sweep others under the rug. The Janitzio statue amplifies the radical equality of the Sentimientos de la Nación. The Angel spotlights the Creole elites and a European vibe, while completely ignoring the indigenous masses who actually fought and died in the dirt.";
bodyCol.appendChild(p13);

const p14 = document.createElement('p');
p14.textContent = "Ultimately, these monuments are honest because they're flawed. A giant concrete fist and a golden European angel can't possibly capture the whole messy truth of Mexican independence—no two statues ever could. But they do show us, crystal clear, how different generations and politicians manipulated history to tell the story they wanted. Stone might not lie, but just like human memory, it’s incredibly strategic about what it decides to leave out.";
bodyCol.appendChild(p14);

// citations
const citations = document.createElement('div');
citations.className = 'citations';

const citLabel = document.createElement('h3');
citLabel.textContent = "Works Cited";
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
pq1.innerHTML = `<blockquote>"The monument doesn't just show you Morelos; it physically puts you inside his perspective, asking you to see the world the way he did."</blockquote><cite>On the Morelos Statue, Isla Janitzio</cite>`;
sidebar.appendChild(pq1);

// box 1
const box1 = document.createElement('div');
box1.className = 'box';
box1.innerHTML = `<div class="box-label">Who Was Morelos?</div><p><strong>José María Morelos y Pavón (1765–1815)</strong> was a mestizo Catholic priest who took command of Mexico's independence movement after Hidalgo's execution. His 1813 document <em>Sentimientos de la Nación</em> called for the abolition of slavery and racial castes. He was executed by the Spanish Inquisition on December 22, 1815.</p>`;
sidebar.appendChild(box1);

// pull quote 2
const pq2 = document.createElement('div');
pq2.className = 'pull-quote';
pq2.innerHTML = `<blockquote>"Everyday Mexicans have claimed it as their own, completely rewriting Díaz's original intent."</blockquote><cite>On El Ángel, Paseo de la Reforma</cite>`;
sidebar.appendChild(pq2);

// box 2
const box2 = document.createElement('div');
box2.className = 'box';
box2.innerHTML = `<div class="box-label">The Angel's Hidden Crypt</div><p>Beneath the monument's base lies an ossuary containing the remains of independence heroes including <strong>Hidalgo, Allende, Aldama, and Morelos</strong>. When Díaz inaugurated the monument in 1910, transferring these remains was a deliberate act of state sacralization—turning a political monument into a national shrine.</p>`;
sidebar.appendChild(box2);

// pull quote 3
const pq3 = document.createElement('div');
pq3.className = 'pull-quote';
pq3.innerHTML = `<blockquote>"Every monument is essentially an argument frozen in time. It also tells us what the builders hoped the next generation would forget."</blockquote><cite>Conclusion</cite>`;
sidebar.appendChild(pq3);

// box 3
const box3 = document.createElement('div');
box3.className = 'box';
box3.innerHTML = `<div class="box-label">Díaz's Centennial & His Downfall</div><p>Porfirio Díaz inaugurated the Angel on <strong>September 16, 1910</strong> after ruling Mexico for over 30 years. <strong>Within 8 months, the Mexican Revolution had begun and Díaz had fled into exile.</strong> The monument he built to glorify his regime outlasted him by over a century.</p>`;
sidebar.appendChild(box3);

// pull quote 4
const pq4 = document.createElement('div');
pq4.className = 'pull-quote';
pq4.innerHTML = `<blockquote>"Stone might not lie, but just like human memory, it’s incredibly strategic about what it decides to leave out."</blockquote><cite>Analysis</cite>`;
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