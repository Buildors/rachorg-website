const defaultDescription = "RACH is a nonprofit foundation in the DC area which serves its community through community outreach projects and events.";

export const pages = [
  {
    path: "/",
    title: "Nonprofit Foundation",
    description: defaultDescription
  },
  {
    path: "/about-us",
    title: "About Us",
    description: defaultDescription,
    eyebrow: "Our Foundation",
    heading: "We see the value in everyone.",
    background: "/assets/about.webp",
    body: `<section class="content-section narrow">
      <p class="lead"><span class="gold">RACH</span> stands for <strong>Recognizing the Achievements and Contributions to Humanity.</strong></p>
      <p>We are driven by the desire to recognize and support those who dedicate their lives to seeing beyond themselves, those who impact others in their communities or the world at large.</p>
      <p>Our success isn’t measured in terms of wealth or profit margin, but by the appreciation shown to those we support.</p>
      <p>Learn more about RACH's mission and vision by subscribing to our mailing list.</p>
    </section>`
  },
  {
    path: "/experiences",
    title: "Experiences",
    description: defaultDescription,
    eyebrow: "Gather. Create. Contribute.",
    heading: "RACH Experiences",
    background: "/assets/experiences.webp",
    body: `<section class="content-section narrow center">
      <p class="lead">To help fund its mission, RACH will be hosting events throughout the year.</p>
      <p>Stay tuned to our social media pages, as well as this event page, for updates!</p>
      <p class="notice">***Masks required for entry***</p>
      <div class="button-row">
        <a class="button" href="/events">Upcoming Events</a>
        <a class="button button-outline" href="/past-events">Past Events</a>
      </div>
    </section>
    <section class="content-section alt">
      <div class="section-heading">
        <p class="eyebrow">Participant Information</p>
        <h2>Be part of a future event</h2>
        <p>If you are interested in volunteering or participating in any of our future events, choose the corresponding area below for more information.</p>
      </div>
      <div class="card-grid three-up">
        <a class="link-card" href="/performers"><span>01</span><h3>Performers</h3><p>Share your music and performance with the RACH community.</p></a>
        <a class="link-card" href="/artists"><span>02</span><h3>Artists</h3><p>Submit visual or mixed-media work for consideration.</p></a>
        <a class="link-card" href="/volunteers"><span>03</span><h3>Volunteers</h3><p>Help bring RACH events and operations to life.</p></a>
      </div>
    </section>`
  },
  {
    path: "/events",
    title: "Upcoming Events",
    description: defaultDescription,
    eyebrow: "Experiences",
    heading: "Upcoming Events",
    background: "/assets/events.webp",
    body: `<section class="content-section split align-start">
      <div>
        <p class="lead">To help fund its mission, RACH will be hosting events throughout the year.</p>
        <p>Stay tuned to our social media pages, as well as this event page, for updates.</p>
        <p>While tickets for this event are no longer being sold, please consider donating to our fundraiser! All funds raised will be forwarded to Doctors Without Borders, as they are the feet on the ground in Syria and Turkey. Every donation, no matter how large or small, goes straight to their work to help those affected!</p>
        <p><a class="button" href="/donate">Donate + Sponsor</a></p>
      </div>
      <figure class="event-poster">
        <img src="/assets/earthquake-benefit.png" alt="Earthquake Benefit Invitation" width="1429" height="2000" loading="lazy">
      </figure>
    </section>`
  },
  {
    path: "/past-events",
    title: "Past Events",
    description: defaultDescription,
    eyebrow: "Experiences",
    heading: "Past Events",
    background: "/assets/experiences.webp",
    body: `<section class="content-section narrow">
      <p class="lead">To help fund its mission, RACH will be hosting events throughout the year.</p>
      <p>Stay tuned to our social media pages, as well as this event page, for updates.</p>
      <hr>
      <p class="eyebrow">November 22, 2020</p>
      <h2>Art on the Mall</h2>
      <p class="notice">***Please make sure you have a confirmation email!***<br>***Masks required for entry***</p>
      <p>Join RACH at the DC World War I Memorial on the National Mall for Art on the Mall! Come see the art, listen to beautiful music, and have a taste of Chef Eric Foxx's delicious creations.</p>
      <p>Art reception 2–5pm, followed by an LED DJ glow party hosted by <a href="https://www.coolbae.com/" target="_blank" rel="noreferrer">CoolBae</a>!</p>
      <ul class="feature-list">
        <li>Custom catered canapé platters created especially for the event by <a href="https://www.facebook.com/thepolishedfoxx/" target="_blank" rel="noreferrer">The Polished Foxx</a> + Entry for $30.00</li>
        <li>Musicians rotating every hour, offering changing ambiance from classical music to salsa and jazz</li>
        <li>Mixed media art display, available for auction at a later date</li>
        <li>Reserve your LED Mask for pickup at the event, provided by <a href="https://www.coolbae.com/" target="_blank" rel="noreferrer">CoolBae</a>, for $20.00 + Entry</li>
        <li>Or enjoy Food + Mask + Entrance for $50.00</li>
      </ul>
      <dl class="event-details">
        <div><dt>Date</dt><dd>November 22, 2020</dd></div>
        <div><dt>Art Exhibit &amp; Reception</dt><dd>2pm–5pm</dd></div>
        <div><dt>LED DJ Glow Party hosted by CoolBae</dt><dd>5pm–8pm</dd></div>
        <div><dt>Location</dt><dd><a href="https://goo.gl/maps/jDEuoqM5bnGRE5dG7" target="_blank" rel="noreferrer">DC War Memorial, National Mall, Washington, DC</a></dd></div>
      </dl>
      <div class="button-row align-left">
        <a class="button" href="/assets/art-on-the-mall.pdf" target="_blank">View and download the event flyer</a>
        <a class="button button-outline" href="/performers">Performers</a>
      </div>
      <div class="social-callout">
        <p>Past event collaborators:</p>
        <a href="https://www.facebook.com/coolbaeshop" target="_blank" rel="noreferrer">CoolBae on Facebook</a>
        <a href="https://www.instagram.com/coolbaeshop" target="_blank" rel="noreferrer">CoolBae on Instagram</a>
      </div>
    </section>`
  },
  {
    path: "/performers",
    title: "Performers",
    description: defaultDescription,
    eyebrow: "Participant Information",
    heading: "Performers",
    background: "/assets/performers.webp",
    body: `<section class="content-section narrow">
      <p class="event-kicker">Date/Location: November 22, 2020 — DC War Memorial, National Mall, Washington, DC</p>
      <p>As we get closer to our event date, we are looking for artists to provide musical entertainment during the art exhibit/reception, as well as during the post-event festivities. Below is a breakdown of the event info, including time slots and what we are looking for. Artists may perform for more than one timeslot.</p>
      <h2>Set Time Slots</h2>
      <div class="timeline">
        <div><time>2pm</time><p>During the art exhibit/reception — acoustic music</p></div>
        <div><time>3pm</time><p>During the art exhibit/reception — acoustic music</p></div>
        <div><time>4pm</time><p>During the art exhibit/reception — acoustic music</p></div>
        <div><time>5pm</time><p>Post-event — DJ/more upbeat</p></div>
        <div><time>6pm</time><p>Post-event — DJ/more upbeat</p></div>
        <div><time>7pm</time><p>Post-event — DJ/more upbeat</p></div>
      </div>
      <p>The event concludes at 10pm. The act is non-paid, but the artist will be promoted via our marketing channels and social media pages. The ability to collect tips via contactless methods (Venmo, CashApp, PayPal) will be promoted on site.</p>
      <h2>To submit your act for consideration</h2>
      <p>Please fill out the form. Once chosen, we will need your social media links and logo, if you have one. We will include your information on our social media pages, on our website, in our email blasts, and on our blog.</p>
      <p><strong>Day of:</strong> Arrive thirty (30) minutes prior to your set time and check in with staff on site.</p>
      <p><a class="button" href="/schedule-consult">Submit for Consideration</a></p>
    </section>`
  },
  {
    path: "/artists",
    title: "Artists",
    description: defaultDescription,
    eyebrow: "Participant Information",
    heading: "Artists",
    background: "/assets/artists.webp",
    body: `<section class="content-section narrow">
      <p class="event-kicker">Date/Location: November 22, 2020 — DC War Memorial, National Mall, Washington, DC</p>
      <p>As we get closer to our event date, we are looking for artists to provide art for the art exhibit/reception on the National Mall. We are not just looking for paintings, but for mixed media art as well. Although we are trying to stay away from things that are fragile due to the event being outdoors. Art will be carefully taken care of, but RACH is not responsible for breakage or damage due to weather or acts outside of its control. A release of liability will need to be signed.</p>
      <p>While we are looking for art to be donated to our foundation and will be auctioning off the art to raise funds, we are also open to setting a reserve price and selling the art directly. Either way, a tax receipt will be provided for write-off purposes. Storage of the item will be at RACH’s parent company climate-controlled warehouse. All art will be cataloged and photographed, then packaged.</p>
      <p>The online auction will run November 15 through December 15, with the exhibit being on November 22. All deliveries of art will be completed in time for the end-of-December holidays.</p>
      <h2>Time Breakdown</h2>
      <div class="timeline">
        <div><time>8am–12pm</time><p>All art will be on site and set up</p></div>
        <div><time>2pm</time><p>Exhibition opens and reception begins</p></div>
        <div><time>5pm</time><p>Reception ends; post-event celebrations begin</p></div>
        <div><time>8pm</time><p>Event concludes</p></div>
      </div>
      <p>You may choose to submit one item or many! We are not looking to have more than 30 pieces.</p>
      <h2>To submit your art for consideration</h2>
      <p>Please click the button below and fill out the form. Once chosen, we will need your social media links and logo, if you have one. We will include your information on our social media pages, on our website, in our email blasts, and on our blog.</p>
      <p><a class="button" href="/schedule-consult">Submit for Consideration</a></p>
    </section>`
  },
  {
    path: "/volunteers",
    title: "Volunteers",
    description: defaultDescription,
    eyebrow: "Participant Information",
    heading: "Volunteers",
    background: "/assets/volunteers.webp",
    body: `<section class="content-section narrow center">
      <p class="lead">RACH is always looking for volunteers.</p>
      <p>If you are interested in volunteering at one of our events, or with the operations at RACH, click the button below and fill out the form. We look forward to meeting you!</p>
      <p><a class="button" href="/schedule-consult">Submit for Consideration</a></p>
    </section>`
  },
  {
    path: "/schedule-consult",
    title: "Schedule Consult",
    description: defaultDescription,
    eyebrow: "Participant Information",
    heading: "Submit for Consideration",
    background: "/assets/volunteers.webp",
    body: `<section class="content-section form-section">
      <div class="form-intro">
        <p class="eyebrow">Performers · Artists · Volunteers</p>
        <h2>Tell us how you would like to participate.</h2>
        <p>Submitting this form opens a prepared email to RACH so you can review and send your information directly.</p>
      </div>
      <form class="contact-form" data-mailto-form data-subject="RACH participant submission">
        <label>Name<input name="Name" type="text" autocomplete="name" required></label>
        <label>Email<input name="Email" type="email" autocomplete="email" required></label>
        <label>Phone<input name="Phone" type="tel" autocomplete="tel"></label>
        <label>Area of Interest
          <select name="Area of Interest" required>
            <option value="">Select an area</option>
            <option>Performer</option>
            <option>Artist</option>
            <option>Volunteer</option>
            <option>Other</option>
          </select>
        </label>
        <label class="full">Links and details<textarea name="Links and details" rows="7" placeholder="Please include links to your work (social media, website, video, etc)"></textarea></label>
        <button class="button full" type="submit">Submit</button>
      </form>
    </section>`
  },
  {
    path: "/honorees",
    title: "Honorees",
    description: defaultDescription,
    eyebrow: "In Recognition",
    heading: "Count Vladimir Tolstoy",
    background: "/assets/honorees.webp",
    body: `<article class="content-section article-layout">
      <aside class="article-aside">
        <p class="eyebrow">Count Vladimir Tolstoy</p>
        <p>Grandnephew of the author Leo Tolstoy and long-time resident of Washington, D.C.</p>
        <div class="honoree-gallery">
          <img src="/assets/honoree-1.webp" alt="Count Vladimir Tolstoy portrait" width="1200" height="1587" loading="lazy">
          <img src="/assets/honoree-2.webp" alt="Count Vladimir Tolstoy photograph" width="1200" height="2100" loading="lazy">
          <img src="/assets/honoree-3.webp" alt="Count Vladimir Tolstoy photograph" width="1200" height="1998" loading="lazy">
          <img src="/assets/honoree-4.webp" alt="Count Vladimir Tolstoy photograph" width="1200" height="941" loading="lazy">
        </div>
      </aside>
      <div class="article-copy">
        <p class="lead">Vladimir’s mother, Princess Helene Wolkonsky, was a lady in waiting to the last Empress of Russia.</p>
        <p>She was able to flee Russia in 1922, after spending several years imprisoned by the Soviets, to Czechoslovakia, where she met and subsequently married her husband, an officer in the White Army, Sergei Tolstoy-Miloslavsky. They spent time in Germany before finally settling as displaced persons in Nice, France. Vladimir was their second son and was born in 1927.</p>
        <p>During World War II, Vladimir and his mother were living in Dresden, Germany and narrowly escaped the firebombing by the British RAF in which, ironically, his elder brother Michael served. In the late 40s, Vladimir’s mother was recruited by Alexandra, Leo’s daughter, to help manage the Tolstoy Foundation in Nyack, NY. Vladimir followed after completing his degree at the St. Sergius Theological Institute, a recognized arm of the Sorbonne. While in Paris he was a regular at the home of future French President Valery Giscard-D’Estaing and his brother Olivier, with whom he traveled to Russia in the mid 50s.</p>
        <p>Once in the United States, Vladimir attended and graduated from Hobart College with a degree in Philosophy and received a Master’s Degree in Theology from Columbia University. A serendipitous encounter with the Russian wife of Admiral Elmo Zumwalt led to his appointment as a professor in Russian and French language, culture, and history at the US Naval Academy in Annapolis, MD.</p>
        <p>He taught there for 29 years and launched the Academy’s International Ball to teach midshipmen how to behave socially as officers and gentlemen and to expose them to foreign cultures. He often hosted midshipmen at his home in DC and even gave them personal waltzing lessons in Bancroft Hall.</p>
        <p>Professor Tolstoy also studied and taught linguistics at Georgetown University, History and Russian at American University, and was instrumental in establishing the Russian Department at Howard University. He hosted the first Russian Language instructional TV show on WTOP for which he received an Emmy Award. Vladimir also did interpreting and in 1959 he was one of the interpreters at the so-called “Kitchen Debate” between then Vice President Richard Nixon and Soviet First Secretary Nikita Khrushchev in Moscow at the American National Exhibition.</p>
        <p>During the early 60s his summers were spent teaching at the Institute for Russian Studies in Munich, Germany. It was there he met his future wife, Suzanne Bolasco. They were married in 1975 at St. Vladimir’s Seminary in Tuckahoe, NY.</p>
        <p>Perhaps in his eyes, his most significant accomplishment was the care and nurturing of St. Nicholas Russian Orthodox Cathedral on Massachusetts Avenue where he served as Sub-Deacon. Although it started out as merely an underground bunker and some dreams, Vladimir worked tirelessly to collect funds for the cathedral’s construction and aided in the selection of the architect and making design decisions.</p>
        <p>Many decades after the construction, he helped spearhead the effort to bring several iconographers from Russia to hand paint the frescoes which make the interior so striking. These icons, he would often explain, are windows into the soul—a fact he would repeat when he taught at the church’s Sunday School which he and his mother founded.</p>
        <p>While very proud to have become an American citizen, Vladimir’s core beliefs were firmly entrenched in all things Russian. He was a great supporter of the Russian community in both Washington and abroad. Whether it was the idea of holding Maslenitsa—Russian Mardi Gras—at the Russian Embassy for 22 years to collect funds for the needy, or being a founder and Governor of the Russian Cultural Center, he used his social position as well as his vocation as a teacher and mentor to cultivate and expand the awareness of all things Russian. He even partook in the clandestine dissemination back into Russia of Pasternak’s manuscript for <em>Dr. Zhivago</em> by means of hot air balloon.</p>
        <p>His joie de vivre made it easy for him to befriend people of all walks of life—including the likes of Mstislav Rostropovich, Aleksandr Solzhenitsyn and Vladimir Ashkenazy—and his home became a center of Russian culture, history and art.</p>
        <p>For his efforts he was officially recognized by the Russian Foreign Ministry under the then Ambassador to the US Yuri Ushakov.</p>
        <p>He died on March 6, 2020 at the age of 93 of pneumonia, aggravated by congestive heart failure. Professor Tolstoy, as he preferred to be called, is survived by his wife Suzanne, and sons Nikolai and Alexandr.</p>
      </div>
    </article>`
  },
  {
    path: "/contact-details",
    title: "Contact",
    description: defaultDescription,
    eyebrow: "Connect with RACH",
    heading: "Contact",
    body: `<section class="content-section form-section">
      <div class="form-intro">
        <p class="eyebrow">Info</p>
        <h2>Recognizing those who make an impact.</h2>
        <p>As a 501(c)3 Non-Profit Organization, based in Washington, DC, our mission is to Recognize the Achievements of those who have made an impact in the lives of others.</p>
        <p>We accept nominations, as we do honor a new person every year, and pick one project that was close to that person's heart to bring to fruition; a fulfillment of a lifelong dream.</p>
        <p>Feel free to contact us to nominate someone, or to make a completely tax deductible donation. Without donors, our work cannot continue.</p>
        <div class="contact-details">
          <p><span>Email</span><a href="mailto:info@rachorg.org?subject=RACH%20Inquiry">info@rachorg.org</a></p>
          <p><span>Phone</span><a href="tel:+12026952527">202-695-2527</a></p>
          <p><span>Social</span><a href="https://www.facebook.com/rachorgdc" target="_blank" rel="noreferrer">Facebook</a> · <a href="https://www.instagram.com/rachorgdc" target="_blank" rel="noreferrer">Instagram</a></p>
        </div>
      </div>
      <form class="contact-form" data-mailto-form data-subject="RACH inquiry">
        <label>Name<input name="Name" type="text" autocomplete="name" required></label>
        <label>Email<input name="Email" type="email" autocomplete="email" required></label>
        <label class="full">Message<textarea name="Message" rows="8" placeholder="Type your message here..." required></textarea></label>
        <button class="button full" type="submit">Submit</button>
      </form>
    </section>`
  },
  {
    path: "/donate",
    title: "Donate + Sponsor",
    description: defaultDescription,
    eyebrow: "Support Our Mission",
    heading: "Turn dreams into reality.",
    background: "/assets/donate.webp",
    body: `<section class="content-section narrow center">
      <h2>Support Our Mission</h2>
      <div class="mission-points">
        <p>A contribution to RACH helps bring our mission to life.</p>
        <p>A contribution to RACH recognizes those individuals whose life work makes an impact on the lives of others.</p>
        <p>A contribution to RACH turns dreams into reality.</p>
      </div>
      <p class="lead">Please consider supporting RACH at whatever level you can.</p>
      <p>We Thank You for your partnership, as that is what makes our work possible!</p>
    </section>`
  }
];
