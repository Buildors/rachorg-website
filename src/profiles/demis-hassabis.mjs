const sources = [
  {
    id: 1,
    title: "The next chapter of our AI momentum",
    publisher: "Google",
    url: "https://blog.google/company-news/inside-google/message-ceo/next-chapter-ai-momentum/",
    note: "Official August 2026 leadership announcement and messages from Sundar Pichai and Demis Hassabis."
  },
  {
    id: 2,
    title: "Demis Hassabis — Facts — Nobel Prize in Chemistry 2024",
    publisher: "NobelPrize.org",
    url: "https://www.nobelprize.org/prizes/chemistry/2024/hassabis/facts/",
    note: "Birth date, prize share, affiliation at the time of the award, and prize motivation."
  },
  {
    id: 3,
    title: "The Future of AI and Scientific Discovery — An Interview with Sir Demis Hassabis",
    publisher: "Queens' College, University of Cambridge",
    url: "https://www.queens.cam.ac.uk/about-us/news-events/the-future-of-ai-and-scientific-discovery-an-interview-with-sir-demis-hassabis-1994-honorary-fellow-fellow-benefactor/",
    note: "First-person account of games, education, entrepreneurship, AI, and scientific discovery."
  },
  {
    id: 4,
    title: "DeepMind: inside Google's groundbreaking Artificial Intelligence startup",
    publisher: "WIRED",
    url: "https://www.wired.com/story/deepmind/",
    note: "Independent reporting on childhood, chess, school, programming, games, and DeepMind's early years."
  },
  {
    id: 5,
    title: "Chase your passions, go deep with them",
    publisher: "The Straits Times",
    url: "https://www.straitstimes.com/singapore/the-singapore-connection-of-demis-hassabis-google-deepmind-ceo-and-nobel-prize-winner",
    note: "Interview-based account of family background, childhood resources, chess, and parental influence."
  },
  {
    id: 6,
    title: "Neural processes underpinning episodic memory",
    publisher: "UCL Discovery",
    url: "https://discovery.ucl.ac.uk/id/eprint/16126/",
    note: "Hassabis's 2009 doctoral thesis and abstract."
  },
  {
    id: 7,
    title: "Human-level control through deep reinforcement learning",
    publisher: "Nature",
    url: "https://www.nature.com/articles/nature14236",
    note: "The 2015 DQN paper, including author contributions and Atari results."
  },
  {
    id: 8,
    title: "Mastering the game of Go with deep neural networks and tree search",
    publisher: "Nature",
    url: "https://www.nature.com/articles/nature16961",
    note: "The 2016 AlphaGo paper and its account of the Fan Hui result."
  },
  {
    id: 9,
    title: "From games to biology and beyond: 10 years of AlphaGo's impact",
    publisher: "Google DeepMind",
    url: "https://deepmind.google/blog/10-years-of-alphago/",
    note: "First-party retrospective on AlphaGo's role in DeepMind's research trajectory."
  },
  {
    id: 10,
    title: "Highly accurate protein structure prediction with AlphaFold",
    publisher: "Nature",
    url: "https://www.nature.com/articles/s41586-021-03819-2",
    note: "Open-access AlphaFold 2 paper, methods, authorship, and CASP14 performance."
  },
  {
    id: 11,
    title: "The Nobel Prize in Chemistry 2024 — Popular information",
    publisher: "NobelPrize.org",
    url: "https://www.nobelprize.org/prizes/chemistry/2024/popular-information/",
    note: "Independent prize committee explanation of the protein-structure challenge and AlphaFold's contribution."
  },
  {
    id: 12,
    title: "Sir Demis Hassabis, PhD",
    publisher: "Isomorphic Labs",
    url: "https://www.isomorphiclabs.com/people/sir-demis-hassabis-phd",
    note: "First-party support for Hassabis's role as Isomorphic Labs founder and CEO and for older career details. Its Google DeepMind CEO label was stale as of August 28, 2026; Google's August 5 announcement controls for his current Google and Alphabet titles."
  },
  {
    id: 13,
    title: "Isomorphic Labs secures $2.1 Billion funding to scale its AI drug design engine",
    publisher: "Isomorphic Labs",
    url: "https://www.isomorphiclabs.com/press/isomorphic-labs-funding",
    note: "Company-reported May 2026 financing, partners, and intended use of funds."
  },
  {
    id: 14,
    title: "Google-backed Isomorphic Labs delays clinical trial timeline",
    publisher: "Reuters",
    url: "https://www.investing.com/news/stock-market-news/googlebacked-ai-drug-discovery-startup-isomorphic-labs-delays-clinical-trial-timeline-4456134",
    note: "Independent January 2026 reporting on the company's revised clinical-trial target."
  },
  {
    id: 15,
    title: "DeepMind's CEO Helped Take AI Mainstream. Now He's Urging Caution",
    publisher: "TIME",
    url: "https://time.com/6246119/demis-hassabis-deepmind-interview/",
    note: "Independent profile covering the career arc, Google acquisition, AlphaGo, and Hassabis's safety position."
  },
  {
    id: 16,
    title: "Google DeepMind and class action lawsuit",
    publisher: "UK Information Commissioner's Office",
    url: "https://ico.org.uk/for-the-public/ico-40/google-deepmind-and-class-action-lawsuit/",
    note: "The ICO's current official account of its 2017 Royal Free investigation and the respective roles of the Trust and DeepMind."
  },
  {
    id: 17,
    title: "Central Chancery of the Orders of Knighthood",
    publisher: "The Gazette",
    url: "https://www.thegazette.co.uk/notice/4603787",
    note: "Official record of Hassabis's knighthood for services to artificial intelligence."
  },
  {
    id: 18,
    title: "Sir Demis Hassabis CBE FREng FRS",
    publisher: "The Royal Society",
    url: "https://royalsociety.org/people/demis-hassabis-13817/",
    note: "Fellowship record, education, career, research, and mind-sports summary."
  },
  {
    id: 19,
    title: "Demis Hassabis in 2025 by Christopher Michel A",
    publisher: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Demis_Hassabis_in_2025_by_Christopher_Michel_A.jpg",
    note: "Portrait source and CC BY-SA 4.0 license record."
  },
  {
    id: 20,
    title: "AlphaFold predictions are valuable hypotheses and accelerate but do not replace experimental structure determination",
    publisher: "Nature Methods",
    url: "https://www.nature.com/articles/s41592-023-02087-4",
    note: "Experimental assessment of AlphaFold predictions, confidence interpretation, structural limitations, and the continuing need for experimental verification."
  },
  {
    id: 21,
    title: "Republic: The Revolution Q&A",
    publisher: "GameSpot",
    url: "https://www.gamespot.com/articles/republic-the-revolution-qanda/1100-2875031/",
    note: "A 2002 first-person interview covering Hassabis's work at Lionhead, the early development of Black & White, and the founding of Elixir Studios."
  },
  {
    id: 22,
    title: "DeepMind's Demis Hassabis",
    publisher: "BBC Radio 4",
    url: "https://podcasts.apple.com/us/podcast/deepminds-demis-hassabis/id1441324155?i=1000423267459",
    note: "A 2018 first-person interview in which Hassabis discusses the pace and strain of running Elixir Studios."
  },
  {
    id: 23,
    title: "The Information Commissioner, the Royal Free, and what we've learned",
    publisher: "Google DeepMind",
    url: "https://deepmind.google/blog/the-information-commissioner-the-royal-free-and-what-weve-learned/",
    note: "DeepMind's July 2017 institutional response, authored by Mustafa Suleyman and Dominic King, acknowledging shortcomings in transparency, public engagement, and its understanding of NHS data rules."
  },
  {
    id: 24,
    title: "Demis Hassabis — Chair, Google DeepMind and Chief Scientist, Alphabet",
    publisher: "Google",
    url: "https://blog.google/authors/demis-hassabis/",
    note: "Current Google author profile used to confirm Hassabis's Google DeepMind and Alphabet titles on August 28, 2026."
  },
  {
    id: 25,
    title: "Our team",
    publisher: "Isomorphic Labs",
    url: "https://www.isomorphiclabs.com/our-team",
    note: "Current Isomorphic Labs leadership page identifying Hassabis as founder and CEO, checked August 28, 2026."
  },
  {
    id: 26,
    title: "ClinicalTrials.gov API search for \"Isomorphic Labs\"",
    publisher: "U.S. National Library of Medicine",
    url: "https://clinicaltrials.gov/api/v2/studies?format=json&pageSize=100&countTotal=true&query.term=%22Isomorphic%20Labs%22",
    note: "The official registry returned zero exact-name studies when checked August 28, 2026. Absence under the company name does not exclude an undisclosed or partner-sponsored program."
  },
  {
    id: 27,
    title: "Search for clinical trials",
    publisher: "European Medicines Agency — Clinical Trials Information System",
    url: "https://euclinicaltrials.eu/search-for-clinical-trials/?lang=en",
    note: "The official EU registry returned zero records for the exact sponsor names Isomorphic Labs and IsoLabs when checked August 28, 2026."
  },
  {
    id: 28,
    title: "Royal Free London NHS Foundation Trust undertaking — archived primary record",
    publisher: "UK Information Commissioner's Office via the Internet Archive",
    url: "https://web.archive.org/web/20170706161322/https://ico.org.uk/media/action-weve-taken/undertakings/2014352/royal-free-undertaking-03072017.pdf",
    note: "Archived copy of the 2017 undertaking directed at the Royal Free London NHS Foundation Trust."
  },
  {
    id: 29,
    title: "Announcements",
    publisher: "Isomorphic Labs",
    url: "https://www.isomorphiclabs.com/announcements",
    note: "Official company announcements index checked August 28, 2026; RACH found no announcement naming a clinical candidate or reporting first-in-human dosing."
  }
];

const sourceLink = (id) => `<sup class="source-ref"><a href="#source-${id}" aria-label="Source ${id}">${id}</a></sup>`;

const articleBody = `<article class="profile-article">
  <header class="profile-intro">
    <figure class="profile-portrait">
      <img src="/assets/profiles/demis-hassabis-christopher-michel.jpg" alt="Demis Hassabis seated against a dark background, wearing blue-framed glasses" width="1920" height="2879">
      <figcaption>Demis Hassabis, 2025. Photograph by <a href="https://commons.wikimedia.org/wiki/File:Demis_Hassabis_in_2025_by_Christopher_Michel_A.jpg" target="_blank" rel="noreferrer">Christopher P. Michel (<span class="creator-handle">Cmichel67</span>)</a>, via Wikimedia Commons, licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="license noreferrer">CC BY-SA 4.0</a>. Wikimedia-resized copy; cropped and slightly desaturated for display by RACH. No endorsement by the photographer or subject is implied.${sourceLink(19)}</figcaption>
    </figure>
    <div class="profile-intro-copy">
      <p class="profile-series-label">RACH Profiles · Artificial Intelligence · Technology · Life Sciences</p>
      <p class="profile-deck">From a chessboard in North London to the protein structures of life, Demis Hassabis has spent four decades treating intelligence as something that can be studied, built, tested, and turned toward science.</p>
      <div class="profile-byline">
        <span>By RACH Editorial Team</span>
        <span>Published August 28, 2026</span>
        <span>Reported through August 28, 2026</span>
        <span>Approx. 20-minute read</span>
      </div>
      <dl class="profile-facts">
        <div><dt>Born</dt><dd>July 27, 1976 · London, United Kingdom${sourceLink(2)}</dd></div>
        <div><dt>Current roles</dt><dd>Chair, Google DeepMind; Chief Scientist, Alphabet; Founder and CEO, Isomorphic Labs${sourceLink(1)}${sourceLink(24)}${sourceLink(25)}</dd></div>
        <div><dt>Known for</dt><dd>Deep reinforcement learning, AlphaGo, AlphaFold, and building research organizations around general-purpose AI</dd></div>
        <div><dt>Selected recognition</dt><dd>2024 Nobel Prize in Chemistry, shared for protein structure prediction; Fellow of the Royal Society; Knight Bachelor${sourceLink(2)}${sourceLink(17)}${sourceLink(18)}</dd></div>
      </dl>
    </div>
  </header>

  <div class="profile-content-grid">
    <nav class="profile-toc" aria-label="On this page">
      <p class="eyebrow">In this profile</p>
      <a href="#opening-position">The opening position</a>
      <a href="#games-before-computers">Games before computers</a>
      <a href="#building-worlds">Learning to build worlds</a>
      <a href="#failure-and-neuroscience">Failure and neuroscience</a>
      <a href="#deepmind">DeepMind's long wager</a>
      <a href="#alphago">The ladder of games</a>
      <a href="#alphafold">From play to proteins</a>
      <a href="#current-chapter">The current chapter</a>
      <a href="#tensions">The tensions in the project</a>
      <a href="#why-rach">Why RACH recognizes him</a>
      <a href="#lessons">Lessons for builders</a>
      <a href="#timeline">Timeline</a>
      <a href="#methodology">Methodology and sources</a>
    </nav>

    <div class="profile-copy">
      <section id="opening-position">
        <p class="lead">In August 2026, Demis Hassabis stepped away from the day-to-day operating role that had defined him publicly for more than a decade. He did not leave the institution he built. He changed his place inside it.</p>
        <p>On August 5, Google announced that Hassabis would hand day-to-day leadership of Google DeepMind to longtime colleague Koray Kavukcuoglu and become chair of the AI lab and chief scientist of Alphabet. He would remain connected to the lab's research and continue leading Isomorphic Labs, where the company identifies him as founder and CEO. In his message to employees, Hassabis framed the transition as a return to the large scientific questions that had occupied him since childhood: the nature of intelligence, the possibility of artificial general intelligence, and the problem of directing powerful technology toward human benefit.${sourceLink(1)}${sourceLink(24)}${sourceLink(25)}</p>
        <p>The title change is the newest turn in a life that can look, from a distance, like a sequence of abrupt reinventions: chess prodigy, teenage game programmer, Cambridge computer scientist, studio founder, cognitive neuroscientist, AI entrepreneur, Nobel laureate. Look more closely, and the changes form a continuous argument. Games taught him to search through possible futures. Programming taught him to make simulated worlds respond. Neuroscience gave him a vocabulary for memory, imagination, and learning. DeepMind became the laboratory in which those strands could be combined. AlphaFold became the proof that methods developed around intelligence and games could help answer a foundational question in biology.</p>
        <p>That coherence is the reason Hassabis matters beyond the familiar list of awards. His biography is a study in how an unusually long horizon can organize an unconventional career—and in how much of that vision depends on teams, institutions, capital, public trust, and experimental validation. It is also unfinished. The claims now attached to advanced AI, from accelerated discovery to general intelligence, are much larger than the evidence available today. Hassabis's next chapter will test whether the same method that conquered closed games and predicted protein structures can survive contact with the messier systems of medicine and society.</p>
      </section>

      <section id="games-before-computers">
        <h2>Games before computers</h2>
        <p>Hassabis was born in London in 1976 to a Greek Cypriot father and a Singapore-born mother. He has described a household rich in curiosity but short on money, and parents who did not have a technical roadmap for the child they were raising. They ran a toy shop for a period; incomplete games and toys came home, where he would invent replacements or new rules for himself and his siblings. The important part of that memory is not a mythology of effortless genius. It is the habit of looking at a system, noticing what is missing, and making a new one.${sourceLink(4)}${sourceLink(5)}</p>
        <p>Chess arrived when he was four, after he watched his father and uncle play. He advanced quickly, competed largely against adults, and became one of the strongest players in the world for his age. By thirteen he had reached master standard. Tournament winnings helped him buy an early computer, making one demanding system of rules the bridge to another. He wrote an opponent for the board game Othello because the machine available to him could not practically search chess at the level he wanted.${sourceLink(4)}${sourceLink(5)}${sourceLink(18)}</p>
        <p>Competitive chess gave him more than a credential. It trained the ability to visualize a position that did not yet exist, compare branching possibilities, recognize patterns, and manage pressure when a decision could not be taken back. Hassabis has repeatedly argued that chess should be taught more widely because those skills transfer beyond the board. His later work would retain the chess player's basic posture: define the environment, understand the objective, model the consequences, and search for moves that human intuition might miss.${sourceLink(3)}</p>
        <p>He also learned a limit. In interviews, Hassabis has said that he began to wonder, while still young, whether devoting an entire life to winning at chess was too narrow. The judgment did not end his love of games; it changed what he wanted games to do. They could become training grounds for understanding intelligence itself.</p>
      </section>

      <section id="building-worlds">
        <h2>Learning to build worlds</h2>
        <p>Hassabis completed his school examinations early and entered the British game industry as a teenager. A programming competition led to work experience at Bullfrog Productions, the studio founded by Peter Molyneux and known for simulation games that gave players control over complex systems. At seventeen, Hassabis helped design and program <em>Theme Park</em>, in which the player builds an amusement park, sets prices, hires staff, and watches an economy respond. It was entertainment, but it was also a working model of agents, incentives, and feedback.${sourceLink(4)}${sourceLink(12)}</p>
        <p>He then studied computer science at Queens' College, Cambridge, graduating with first-class results. Cambridge added theory and an intense culture of supervision to the practical education he had already received in commercial software. Games remained central. They were an arena in which ideas about planning, learning, and adaptation could be made observable rather than merely discussed.${sourceLink(3)}${sourceLink(18)}</p>
        <p>After Cambridge, Hassabis joined the newly formed Lionhead Studios as a senior programmer. He worked for eight months on the early development of <em>Black &amp; White</em> before leaving in 1998 to establish Elixir Studios; Lionhead ultimately released the game in 2001.${sourceLink(21)}</p>
        <p>Elixir's projects were ambitious, particularly <em>Republic: The Revolution</em>, a political simulation that attempted to model the struggle for power across a virtual country. The studio later released <em>Evil Genius</em>. Yet Elixir did not become the durable company Hassabis hoped to build. The scope of its first major project expanded, deadlines moved, and the demands of creating new technology while running a growing studio proved difficult to sustain. Elixir closed in 2005. In a 2018 BBC Radio 4 interview, Hassabis described the pace as unsustainable and said the period was the closest he had come to what people call burnout.${sourceLink(22)}</p>
        <p>It is tempting to treat Elixir as a prelude that can be skipped on the way to DeepMind. That would remove one of the biography's most useful chapters. Hassabis learned that a grand idea does not excuse an organization from sequencing work, narrowing a problem, and surviving long enough to improve. He also learned to lead multidisciplinary creative teams whose outputs could not be specified in advance. DeepMind would eventually pursue a far larger goal, but it would do so through carefully selected benchmarks and staged proof points rather than by attempting to build the whole future at once.</p>
      </section>

      <section id="failure-and-neuroscience">
        <h2>Failure, then a return to first principles</h2>
        <p>When Elixir ended, Hassabis returned to university. At University College London, under the neuroscientist Eleanor Maguire, he studied episodic memory: the capacity to reconstruct personal experience and imagine scenes beyond the present. His 2009 doctoral thesis used neuropsychological testing, virtual-reality environments, and brain imaging to investigate the network of regions involved in memory and imagination. It argued that the same scene-construction machinery may contribute not only to recalling the past but also to navigation and thinking about the future.${sourceLink(6)}</p>
        <p>This was not a detour from artificial intelligence. It was an attempt to understand the thing AI was supposed to reproduce. Hassabis was interested in an intermediate level between individual neurons and abstract behavior: the algorithms and representations that let a mind build models of the world. He continued at UCL's Gatsby Computational Neuroscience Unit before co-founding DeepMind.${sourceLink(18)}</p>
        <p>The neuroscience period reinforced an interdisciplinary instinct that would become one of DeepMind's defining features. Computer science alone might supply algorithms, but psychology could help specify behavior, neuroscience could suggest learning mechanisms, and games could provide measurable environments in which to test them. Hassabis did not claim that artificial neural networks literally recreate a brain. The more durable idea was methodological: biological intelligence is evidence that general learning is possible, and understanding some of its organizing principles may help engineers ask better questions.</p>
      </section>

      <section id="deepmind">
        <h2>DeepMind's long wager</h2>
        <p>In 2010, Hassabis co-founded DeepMind with Shane Legg and Mustafa Suleyman. The company brought together researchers in machine learning, neuroscience, engineering, mathematics, and simulation around an unusually broad mission: build more general learning systems, then use them on consequential problems. That framing was risky. Artificial general intelligence was still treated in much of the field as a distant or poorly specified goal, and the young company needed results that could be evaluated in the present.${sourceLink(15)}</p>
        <p>The team chose games as experimental instruments. Games are simplified worlds: they have rules, objectives, observable states, and unambiguous feedback. Yet the best ones require memory, planning, adaptation, and strategy. A system that could learn many games from raw input without a hand-built strategy would demonstrate something more general than mastery of a single task.</p>
        <p>DeepMind's deep Q-network, or DQN, learned to play dozens of Atari 2600 games from pixels and score alone. The 2015 <em>Nature</em> paper reported that a single architecture reached or exceeded professional human game-tester performance across many of the games. The result joined deep neural networks, which learned useful representations from sensory data, with reinforcement learning, in which an agent improves through reward and experience.${sourceLink(7)}</p>
        <p>The paper also shows why biographies of scientific leaders must resist the lone-genius frame. Volodymyr Mnih, Koray Kavukcuoglu, David Silver, and a long list of researchers designed algorithms, ran experiments, created the platform, managed the project, and wrote the study. Hassabis helped define and lead the program; he did not single-handedly invent every system associated with DeepMind. His distinctive contribution has often been architectural in the organizational sense: selecting problems, assembling disciplines, and maintaining a sequence from foundational research to public proof.</p>
        <p>Google acquired DeepMind in 2014, giving the lab access to far more computing power, capital, and product infrastructure. The acquisition also placed its public-interest mission inside one of the world's most powerful commercial technology companies. That bargain—resources and reach in exchange for dependence on a corporate parent—would amplify both DeepMind's achievements and the questions surrounding its governance.</p>
      </section>

      <section id="alphago">
        <h2>The ladder of games</h2>
        <p>Go was a natural next test. Its rules are simple, but the number of possible positions makes exhaustive search impractical. Strong play depends on evaluating patterns and long-term influence that experts often describe intuitively. DeepMind's AlphaGo combined neural networks with tree search and reinforcement learning. In 2015 it defeated European champion Fan Hui five games to zero, the first time a computer had defeated a professional player at full-sized Go under standard conditions.${sourceLink(8)}</p>
        <p>The <em>Nature</em> paper identifies David Silver and Aja Huang as equal first contributors and credits a broad group with building the search, neural networks, and evaluation framework; its contribution statement says Hassabis helped manage and advise the project and co-wrote the paper.${sourceLink(8)}</p>
        <p>In March 2016, AlphaGo defeated Lee Sedol, one of the world's leading players, four games to one. The cultural force of the match mattered almost as much as the score. A machine had not merely calculated faster within a familiar human strategy; at points it selected moves experts initially found strange and later recognized as effective. The match made a technical research program legible to millions of people.</p>
        <p>For Hassabis, the victory was not the destination. It was a rung on a ladder. Subsequent systems such as AlphaZero learned chess, shogi, and Go through self-play with less reliance on human examples. MuZero learned to plan without being given the environment's rules in advance. Each step removed some specialized knowledge and tested whether the underlying methods could travel. The deeper question was whether AI could discover useful representations and strategies in domains where the answer was not already encoded by people.${sourceLink(9)}</p>
        <p>Games provided clean feedback; science would not. A scientific model can be elegant and still be wrong about nature. Moving from games to biology therefore required a problem with reliable data, a credible blind test, and consequences that researchers outside DeepMind could judge. Protein structure prediction offered exactly that combination.</p>
      </section>

      <section id="alphafold">
        <h2>From play to proteins</h2>
        <p>Proteins are chains of amino acids that fold into three-dimensional structures. Their shapes are closely related to what they do, but determining a structure experimentally can take months or years. For roughly half a century, researchers had tried to predict a protein's structure from its amino-acid sequence. The Critical Assessment of protein Structure Prediction, or CASP, provided a recurring blind evaluation: teams predicted structures that had been solved experimentally but not yet released.</p>
        <p>DeepMind entered CASP13 in 2018 with the first AlphaFold system and won, but the result did not yet solve the problem at the level the team sought. The model was redesigned. John Jumper, who joined the effort and ultimately shared the Nobel Prize with Hassabis, played a central scientific leadership role. The AlphaFold 2 paper lists dozens of contributors across research, engineering, and operations—another reminder that the breakthrough belonged to a team and a wider scientific ecosystem that had built the sequence and structure databases on which it depended.${sourceLink(10)}</p>
        <p>At CASP14 in 2020, AlphaFold 2 achieved accuracy competitive with experimental structures in a majority of evaluated cases and greatly outperformed other methods. Its architecture incorporated evolutionary, geometric, and structural information in a way that allowed the network to reason about relationships among amino acids and positions in three-dimensional space. DeepMind and the European Molecular Biology Laboratory's European Bioinformatics Institute later made a vast database of predicted structures freely accessible.${sourceLink(10)}${sourceLink(11)}</p>
        <p>The accomplishment was profound, but its boundary matters. AlphaFold 2 produces a predicted three-dimensional model, generally representing one structural state, together with confidence estimates. It cannot by itself determine a protein's biological function, capture the full range and timing of molecular motions in a living cell, account for every ligand, ion, modification, or environmental condition, or show that a proposed medicine will be safe and effective in people. A prediction can accelerate structure determination and guide experiments, but even a high-confidence model remains a hypothesis for experimental testing; it does not replace experimental biology or clinical trials.${sourceLink(10)}${sourceLink(20)}</p>
        <p>In 2024, the Royal Swedish Academy of Sciences awarded one half of the Nobel Prize in Chemistry jointly to Hassabis and Jumper for protein structure prediction. David Baker received the other half for computational protein design. Hassabis's individual share was one quarter of the prize.${sourceLink(2)}${sourceLink(11)} The award recognized a rare crossing of disciplines: a computer scientist and neuroscientist, leading an AI team, had helped transform a central problem in chemistry and biology.</p>
      </section>

      <section id="current-chapter">
        <h2>The current chapter: science at institutional scale</h2>
        <p>AlphaFold changed the question from whether AI could contribute to basic science to how broadly that approach could be applied. In 2021, Hassabis founded Isomorphic Labs to build an AI-first drug-design organization. The company uses structure and interaction models as components in a larger engine intended to identify and optimize drug candidates. It has announced collaborations with Eli Lilly, Novartis, and Johnson &amp; Johnson, alongside internal work in oncology and immunology.${sourceLink(12)}${sourceLink(13)}</p>
        <p>The scale is substantial. Isomorphic reported a $600 million external investment round in 2025 and a $2.1 billion Series B round in May 2026. The later financing was described by the company as capital to expand its technology, team, partnerships, and drug pipeline toward clinical testing.${sourceLink(13)} Those are company statements about resources and intent, not evidence that a medicine works.</p>
        <p>That distinction is especially important when discussing longevity. Isomorphic's work is relevant to healthspan because better medicines could prevent or treat diseases that shorten or diminish life. But AlphaFold is not a treatment, an AI-designed molecule is not an approved drug, and progress in a computational benchmark is not evidence of longer human life.</p>
        <p>Reuters reported on January 20, 2026, that Hassabis expected Isomorphic's first clinical trials by the end of the year, later than an earlier end-of-2025 target.${sourceLink(14)} As of August 28, 2026, an exact-name search found no Isomorphic Labs study in ClinicalTrials.gov, and sponsor searches for Isomorphic Labs and IsoLabs returned no records in the European Union's Clinical Trials Information System.${sourceLink(26)}${sourceLink(27)} RACH also found no company announcement naming a clinical candidate or reporting first-in-human dosing.${sourceLink(29)} Because Isomorphic also works through pharmaceutical partnerships involving undisclosed targets, that public-record check cannot rule out an undisclosed or partner-sponsored program. It establishes only that RACH could not confirm a publicly attributable Isomorphic human trial. Until candidates pass staged human testing and regulatory review, the therapeutic promise remains an ambitious program rather than a demonstrated patient outcome.</p>
        <p>His August 2026 transition at Alphabet places this scientific agenda at the center of his official role. As chair of Google DeepMind and chief scientist of Alphabet, Hassabis is expected to focus on the longer horizon of general intelligence and science while remaining connected to the lab's research. The change can be read as continuity rather than retreat: the teenage programmer who wanted games to illuminate intelligence is spending less time on daily product operations and more on the questions that motivated the institution in the first place.${sourceLink(1)}</p>
      </section>

      <section id="tensions">
        <h2>The tensions in the project</h2>
        <p>Hassabis presents advanced AI as a tool that could accelerate discovery and expand human knowledge. He has also warned that systems with increasing capability require serious safety work and institutional preparation. This combination—scientific optimism paired with concern about misuse—has become central to his public position.${sourceLink(15)}</p>
        <p>Yet good intentions do not settle questions of power. DeepMind's most advanced work sits inside Alphabet, a corporation with unmatched data, computing infrastructure, and global reach. Decisions about model access, safety thresholds, military and government work, competition, energy use, and the distribution of scientific benefits cannot be reduced to the character of one leader. They require transparent processes, external scrutiny, and enforceable rules.</p>
        <p>DeepMind's institutional history also includes a significant health-data governance controversy. In 2017, the UK Information Commissioner concluded that the Royal Free London NHS Foundation Trust—the data controller—had not complied with data-protection law when approximately 1.6 million partial patient records were processed by DeepMind for clinical-safety testing of the Streams app. The undertaking was directed at the Trust and treated DeepMind as its data processor; the regulatory record did not make findings of personal wrongdoing by Hassabis. DeepMind nevertheless acknowledged that it had underestimated the complexity of NHS data rules and had not done enough to inform or involve patients and the public. The episode showed how a beneficial clinical objective can still outrun an adequate lawful basis, transparency, patients' reasonable expectations, and proportionate governance.${sourceLink(16)}${sourceLink(23)}${sourceLink(28)}</p>
        <p>There is also a narrative risk in the idea of a single lab “solving” intelligence or disease. AlphaFold was possible because generations of experimental scientists created the Protein Data Bank, sequencing projects produced vast datasets, and a large team designed and tested the model. Medicines, if they follow, will depend on chemists, biologists, clinicians, trial participants, regulators, manufacturing systems, and health-care delivery. The greater Hassabis's ambitions become, the more important it is to describe the network of contributors and the limits of the evidence.</p>
        <p>None of this diminishes the achievement. It makes the achievement more intelligible. Hassabis's career demonstrates that interdisciplinary institutions can convert abstract research into tools used across science. It also demonstrates why institutions with that reach must earn trust repeatedly, through behavior and evidence rather than mission statements alone.</p>
      </section>

      <section id="why-rach">
        <div class="profile-recognition-heading">
          <p class="eyebrow">Recognizing the Achievements and Contributions to Humanity</p>
          <h2>Why RACH recognizes Demis Hassabis</h2>
        </div>
        <p class="recognition-lead"><strong>RACH recognizes Demis Hassabis for helping build the organizations and interdisciplinary teams behind AlphaGo and AlphaFold—and for helping turn advances in artificial intelligence toward scientific discovery and the longstanding problem of predicting protein structure.</strong>${sourceLink(8)}${sourceLink(10)}${sourceLink(11)}</p>
        <div class="recognition-grid">
          <div><span>01</span><h3>Advancing the field</h3><p>His leadership helped move learning systems from bounded demonstrations in games toward research tools capable of addressing questions in science.</p></div>
          <div><span>02</span><h3>Contributing to discovery</h3><p>AlphaFold expanded scientists' access to high-quality protein-structure predictions while remaining grounded in the experimental data and work of a much larger scientific community.</p></div>
          <div><span>03</span><h3>Showing the value of crossing disciplines</h3><p>His path through chess, software, neuroscience, machine learning, and biology demonstrates how ideas can travel when specialists are organized around a durable human problem.</p></div>
        </div>
        <p><strong>Editorial judgment:</strong> RACH selected Hassabis for its first weekly profile because his life connects four communities the series intends to explore: artificial intelligence, technology, organizational building, and the science of healthier lives. The point is not that every wager has been resolved or every institution he leads is beyond criticism. The point is that he has repeatedly crossed boundaries that most careers treat as walls.</p>
        <p>He carried lessons from chess into software, from commercial games into neuroscience, from neuroscience into machine learning, and from game-playing systems into biology. He endured a company failure, returned to formal study, and later built an organization capable of sustaining research for more than a decade. The continuity was not a fixed job title. It was a question: how can intelligence be understood and used to discover what people cannot discover alone?</p>
        <p>That question matters to builders in every field. Construction, medicine, software, and community work all depend on the ability to imagine a future state, coordinate specialists, test assumptions against reality, and revise a plan without losing the purpose behind it. Hassabis's story is therefore not only a story about AI. It is about choosing a problem large enough to organize a life—and learning to divide that problem into proof points that other people can examine.</p>
        <p class="recognition-note"><strong>What recognition means:</strong> RACH stands for <em>Recognizing the Achievements and Contributions to Humanity</em>. This recognition honors specific, documented contributions. It does not imply that RACH endorses every decision, prediction, company, or institution associated with the person profiled.</p>
      </section>

      <section id="lessons">
        <h2>What builders and future leaders can learn</h2>
        <div class="lesson-list">
          <div><span>01</span><h3>Let a durable question outlive any one career chapter.</h3><p>Hassabis changed industries and disciplines without abandoning his central inquiry. A long-term purpose can create coherence even when the route is nonlinear.</p></div>
          <div><span>02</span><h3>Use bounded problems to test unbounded ambition.</h3><p>Atari, Go, and CASP were not the ultimate mission. They were environments with rules, metrics, and outside judges. Ambitious organizations need proof points that can fail clearly.</p></div>
          <div><span>03</span><h3>Treat failure as operating data.</h3><p>Elixir's closure did not prove that large ideas were foolish. It exposed the cost of scope, sequencing, and organizational overload—lessons that could inform a better-structured second attempt.</p></div>
          <div><span>04</span><h3>Build teams that cross vocabularies.</h3><p>DeepMind's work required researchers who could translate among machine learning, neuroscience, mathematics, engineering, games, chemistry, and biology. Interdisciplinary work succeeds through integration, not the ceremonial presence of many disciplines.</p></div>
          <div><span>05</span><h3>Keep the evidence boundary visible.</h3><p>A model prediction is not an experiment; a candidate is not a medicine; a mission is not governance. Credibility grows when leaders say precisely what has been demonstrated and what remains a wager.</p></div>
        </div>
      </section>

      <section id="timeline">
        <h2>Selected timeline</h2>
        <ol class="profile-timeline">
          <li><time datetime="1976">1976</time><p>Born in London on July 27.</p></li>
          <li><time datetime="1980">c. 1980</time><p>Learns chess at four; later competes internationally as a junior.</p></li>
          <li><time datetime="1989">c. 1989</time><p>Reaches chess master standard by thirteen.</p></li>
          <li><time datetime="1994">1994</time><p>Helps design and program <em>Theme Park</em> as a teenager and begins computer science at Queens' College, Cambridge.</p></li>
          <li><time datetime="1997">1997</time><p>Graduates from Cambridge with first-class results.</p></li>
          <li><time datetime="1998">1998</time><p>Founds Elixir Studios.</p></li>
          <li><time datetime="2005">2005</time><p>Elixir closes; Hassabis moves into cognitive-neuroscience research at UCL.</p></li>
          <li><time datetime="2009">2009</time><p>Completes PhD on neural processes underlying episodic memory.</p></li>
          <li><time datetime="2010">2010</time><p>Co-founds DeepMind with Shane Legg and Mustafa Suleyman.</p></li>
          <li><time datetime="2014">2014</time><p>Google acquires DeepMind.</p></li>
          <li><time datetime="2016">2016</time><p>AlphaGo defeats Lee Sedol four games to one.</p></li>
          <li><time datetime="2020">2020</time><p>AlphaFold 2 achieves a breakthrough result at CASP14.</p></li>
          <li><time datetime="2021">2021</time><p>The AlphaFold 2 paper is published; Hassabis founds Isomorphic Labs.</p></li>
          <li><time datetime="2024">2024</time><p>Receives a knighthood for services to AI and shares the Nobel Prize in Chemistry for protein structure prediction.</p></li>
          <li><time datetime="2026-08">August 2026</time><p>Becomes chair of Google DeepMind and chief scientist of Alphabet while continuing to lead Isomorphic Labs.</p></li>
        </ol>
      </section>

      <section id="methodology" class="profile-methodology">
        <h2>Methodology, disclosure, and corrections</h2>
        <p><strong>Reporting basis:</strong> This profile was compiled from primary records, peer-reviewed papers, institutional biographies, first-person interviews published by other organizations, official trial registries, and independent reporting. Information and current roles were checked through August 28, 2026.</p>
        <p><strong>Interview status:</strong> RACH did not interview Demis Hassabis, his representatives, Google DeepMind, Alphabet, or Isomorphic Labs for this profile. This is an independent public-record biography, not an authorized biography, and it does not carry the subject's endorsement.</p>
        <p><strong>Editorial responsibility:</strong> Reporting, writing, editing, and internal fact-checking were completed by the RACH Editorial Team.</p>
        <p><strong>Independence:</strong> No business, financial, advisory, or family relationship between RACH and the subject was identified during preparation of this profile.</p>
        <p><strong>Health claim boundary:</strong> This article describes drug-discovery ambitions and reported pipeline status; it does not offer medical advice or claim that AlphaFold or Isomorphic Labs has extended human lifespan or produced an approved therapy.</p>
        <p><strong>Corrections:</strong> Documented corrections or relevant context can be sent to <a href="mailto:info@rachorg.org?subject=Correction%20request%20—%20Demis%20Hassabis%20profile">info@rachorg.org</a>. Material changes after publication should be dated and described on this page.</p>
      </section>

      <section class="profile-sources" aria-labelledby="sources-heading">
        <h2 id="sources-heading">Sources</h2>
        <ol>
          ${sources.map((source) => `<li id="source-${source.id}"><a href="${source.url}" target="_blank" rel="noreferrer"><cite>${source.title}</cite></a>, ${source.publisher}. ${source.note}</li>`).join("\n")}
        </ol>
      </section>
    </div>
  </div>
</article>`;

const plainText = articleBody.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

export const demisHassabis = {
  path: "/profiles/demis-hassabis",
  slug: "demis-hassabis",
  type: "profile",
  draft: false,
  title: "Demis Hassabis",
  seoTitle: "Demis Hassabis: From Chess Prodigy to AI Scientist | RACH Profiles",
  heading: "Demis Hassabis",
  eyebrow: "RACH Profiles · The People Building What Comes Next",
  description: "The life and work of Demis Hassabis—from chess and videogames to DeepMind, AlphaGo, AlphaFold, the Nobel Prize, and AI-driven drug discovery.",
  image: "/assets/profiles/demis-hassabis-christopher-michel.jpg",
  imageAlt: "Demis Hassabis seated against a dark background, wearing blue-framed glasses",
  imageCredit: "Christopher P. Michel (Cmichel67) / Wikimedia Commons, CC BY-SA 4.0",
  imageCreator: "Christopher P. Michel",
  imageCreatorAccount: "Cmichel67",
  imageSource: "https://commons.wikimedia.org/wiki/File:Demis_Hassabis_in_2025_by_Christopher_Michel_A.jpg",
  imageSourceRevision: "https://commons.wikimedia.org/w/index.php?title=File:Demis_Hassabis_in_2025_by_Christopher_Michel_A.jpg&oldid=1200578532",
  imageLicense: "CC BY-SA 4.0",
  imageLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  imageCreditText: "Photo: Christopher P. Michel (Cmichel67) / Wikimedia Commons — CC BY-SA 4.0; cropped and slightly desaturated for display.",
  imageDisplayNote: "Wikimedia-resized copy; cropped and slightly desaturated for display by RACH.",
  imageCaption: "Demis Hassabis in 2025. Photograph by Christopher P. Michel (Cmichel67), via Wikimedia Commons, licensed under CC BY-SA 4.0. Wikimedia-resized copy; cropped and slightly desaturated for display by RACH. No endorsement by the photographer or subject is implied.",
  category: "Artificial Intelligence",
  secondaryCategories: ["Technology", "Life Sciences"],
  deck: "From a chessboard in North London to the protein structures of life, Hassabis has spent four decades treating intelligence as something that can be studied, built, tested, and turned toward science.",
  recognitionSummary: "For helping build and lead the teams behind AlphaGo and AlphaFold—and for helping turn advances in artificial intelligence toward scientific discovery. The achievement is shared, and its future promises remain subject to evidence.",
  author: "RACH Editorial Team",
  datePublished: "2026-08-28",
  dateModified: "2026-08-28",
  reportingCutoff: "2026-08-28",
  wordCount: plainText.split(/\s+/).length,
  body: articleBody,
  about: {
    name: "Demis Hassabis",
    birthDate: "1976-07-27",
    jobTitle: ["Chair of Google DeepMind", "Chief Scientist of Alphabet", "Founder and CEO of Isomorphic Labs"],
    sameAs: [
      "https://deepmind.google/",
      "https://www.isomorphiclabs.com/people/sir-demis-hassabis-phd",
      "https://www.nobelprize.org/prizes/chemistry/2024/hassabis/facts/",
      "https://royalsociety.org/people/demis-hassabis-13817/"
    ]
  },
  sources
};
