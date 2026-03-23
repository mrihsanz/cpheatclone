"use client";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Heat Pumps",
    icon: "https://www.cpheat.com/wp-content/uploads/2024/07/heatpump-icon.svg",
    href: "https://www.cpheat.com/services/heat-pump",
  },
  {
    title: "Air Conditioner",
    icon: "https://www.cpheat.com/wp-content/uploads/2024/07/AC-icom.svg",
    href: "https://www.cpheat.com/services/ac",
  },
  {
    title: "Furnaces",
    icon: "https://www.cpheat.com/wp-content/uploads/2024/07/Furnace-icon.svg",
    href: "https://www.cpheat.com/hvac/college-place-wa/furnace-repair",
  },
  {
    title: "INDOOR AIR QUALITY",
    icon: "https://www.cpheat.com/wp-content/uploads/2024/07/fresh-air-icon.svg",
    href: "https://www.cpheat.com/services/indoor-air-quality",
  },
];

const leaders = [
  {
    name: "Dennis Davis",
    role: "President",
    year: "1975",
    image: "https://www.cpheat.com/wp-content/uploads/2026/02/CPHEATTEAM-FALL2025-33-683x1024.jpg",
  },
  {
    name: "Dan Peterson",
    role: "Sales",
    year: "2002",
    image: "https://www.cpheat.com/wp-content/uploads/2026/02/CPHEATTEAM-FALL2025-27-683x1024.jpg",
  },
  {
    name: "Kraig Davis",
    role: "Sales",
    year: "2019",
    image: "https://www.cpheat.com/wp-content/uploads/2026/02/CPHEATTEAM-FALL2025-22-683x1024.jpg",
  },
  {
    name: "Lance Davis",
    role: "Service",
    year: "2012",
    image: "https://www.cpheat.com/wp-content/uploads/2026/02/CPHEATTEAM-FALL2025-18-683x1024.jpg",
  },
  {
    name: "Angela Schmidtgall",
    role: "Bookkeeper",
    year: "2019",
    image: "https://www.cpheat.com/wp-content/uploads/2026/02/CPHEATTEAM-FALL2025-16-683x1024.jpg",
  },
  {
    name: "Teresa Morrison",
    role: "Receptionist",
    year: "2021",
    image: "https://www.cpheat.com/wp-content/uploads/2026/02/CPHEATTEAM-FALL2025-29-683x1024.jpg",
  },
];

const reviews = [
  "Narelle B.",
  "Schuan C.",
  "Carol S.",
  "Gayle H.",
  "James B.",
  "Cheryl W.",
  "Dan C.",
  "Petra Q.",
  "Michelle S.",
  "Jake C.",
  "Dave D.",
  "Diana S.",
].map((name) => ({
  name,
  text:
    {
      "Narelle B.":
        "New to College Place, big thank you to the technician who serviced our HVAC last week, and to Gary who [...]",
      "Schuan C.":
        "I cannot say enough good things about CP Heating. After buying a home in 2019 they moved and replaced my [...]",
      "Carol S.":
        "Everyone at College Place Heating was compassionate about helping my home have heating once again after several very cold days. [...]",
      "Gayle H.":
        "I appreciate the fast friendly service I receive from CP Heating & Air! From receptionist to service technicians, each one [...]",
      "James B.":
        "I had a great experience with CP Heating and Air. From my first meeting and estimate with Lance, to the [...]",
      "Cheryl W.":
        "Last week Eric serviced our heating/cooling unit. He is a knowledgeable employee who obviously loves his job and presents himself [...]",
      "Dan C.":
        "First of all let me say I hardly ever give maximum rating. That said, this young man was knowledgeable, respectful, [...]",
      "Petra Q.": "We should have 10 stars for this person they are the best of the best. I had 3 months with [...]",
      "Michelle S.":
        "College Place Heating-Cooling came highly recommended. My furnace is old (age unknown) I am not impressed with the new (costly) [...]",
      "Jake C.":
        "We had an excellent experience with CP Heating & Air. When our 25-year-old AC unit finally stopped working, we decided [...]",
      "Dave D.":
        "My first experience with College Place Heating came in the 1960s when my parents replaced their coal-fired furnace with a [...]",
      "Diana S.":
        "We have about a 6 yr old new furnace and air conditioner that CPH&A installed. We get a call to [...]",
    }[name] || "",
}));

const faqs = [
  {
    question: "What is the Daikin Comfort Promise?",
    answer:
      "To provide you with comfort for life which is represented and reinforced in the Daikin Comfort Promise. If, for any reason, our company has not met your expectations within one year of your equipment or system installation, we will return to your house to resolve any issues you have with your installation at no cost to you.",
  },
  {
    question: "What is the Daikin Difference?",
    answer:
      "The Daikin Difference is redefining home comfort with some of the most technologically and aesthetically advanced solutions. Our energy-intelligent systems provide an unprecedented level of individual comfort and control.",
  },
  {
    question: "What is the Daikin Worry Free 12-Year Warranty?",
    answer:
      "Daikin systems are backed by comprehensive warranties, including a 12-year parts warranty on all products. Select Daikin products, such as furnaces, offer even more coverage, with 12-year unit replacement and lifetime heat exchanger warranties.",
  },
  {
    question: "What Rebates does Daikin offer?",
    answer:
      "Daikin frequently offers rebates and incentives on its heating and cooling systems. Specific rebates vary based on location, time of year, and product.",
  },
];

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="cp-page">
      <header className="top-header">
        <div className="container header-main">
          <div className="logo-cluster">
            <a href="https://www.cpheat.com/">
              <img
                className="cp-logo-image"
                src="https://www.cpheat.com/wp-content/uploads/2024/07/cp-college-place-logo.webp"
                alt="Company College Place Heating and Air Conditioning Logo"
              />
            </a>
            <img
              className="daikin-logo-image"
              src="https://www.cpheat.com/wp-content/uploads/2024/07/Daikin-comfot-pro-logo.webp"
              alt="Daikin Comfort Pro"
            />
          </div>

          <div className="header-actions">
            <a className="header-btn cyan" href="https://link.clover.com/urlshortener/Hppp4m" target="_blank">
              PAY ONLINE
            </a>
            <a className="header-btn dark" href="tel:5095258073">
              (509) 525-8073
            </a>
            <a className="header-btn cyan" href="https://www.cpheat.com/request-service/">
              REQUEST SERVICE
            </a>
          </div>
        </div>

        <nav className="main-nav">
          <div className="container nav-wrap">
            <a href="https://www.cpheat.com/services/ac">
              AC <span className="caret">▼</span>
            </a>
            <a href="https://www.cpheat.com/services/heat-pump">
              Heating <span className="caret">▼</span>
            </a>
            <a href="https://www.cpheat.com/electrical/walla-walla-wa/electrician">
              Electrical <span className="caret">▼</span>
            </a>
            <a href="https://www.cpheat.com/financing">Financing</a>
            <a href="https://www.cpheat.com/contact-us">Contact Us</a>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={isSidebarOpen}
              aria-controls="main-sidebar-menu"
              onClick={() => setIsSidebarOpen(true)}
            >
              Menu <span>☰</span>
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`sidebar-overlay ${isSidebarOpen ? "open" : ""}`}
        onClick={() => setIsSidebarOpen(false)}
        aria-hidden={!isSidebarOpen}
      />
      <aside id="main-sidebar-menu" className={`side-menu ${isSidebarOpen ? "open" : ""}`} aria-hidden={!isSidebarOpen}>
        <button type="button" className="side-menu-close" aria-label="Close menu" onClick={() => setIsSidebarOpen(false)}>
          ×
        </button>

        <nav className="side-menu-nav" aria-label="Sidebar Menu">
          <a href="https://www.cpheat.com/about-us">About Us</a>
          <button
            type="button"
            className="side-menu-toggle"
            aria-expanded={isServiceAreasOpen}
            onClick={() => setIsServiceAreasOpen((prev) => !prev)}
          >
            Service Areas <span>{isServiceAreasOpen ? "▾" : "▸"}</span>
          </button>
          {isServiceAreasOpen && (
            <div className="side-submenu">
              <a href="https://www.cpheat.com/service-area/air-conditioning-heating-college-place-wa">College Place</a>
              <a href="https://www.cpheat.com/service-area/air-conditioning-heating-walla-walla-wa">Walla Walla</a>
              <a href="https://www.cpheat.com/service-area/air-conditioning-heating-milton-freewater-or">
                Milton-Freewater
              </a>
            </div>
          )}
          <a href="https://www.cpheat.com/about-us/reviews">Reviews</a>
          <a href="https://www.cpheat.com/blog">Blog</a>
          <a href="https://www.cpheat.com/contact-us/employment">Employment</a>
          <a href="https://www.cpheat.com/referral-program">Referral Program</a>
          <a href="https://www.cpheat.com/video-gallery">Video Gallery</a>
        </nav>
      </aside>

      <section className="hero">
        <div className="hero-overlay">
          <div className="container hero-content">
            <h1>Keeping Your Home Perfect Since 1949</h1>
            <h2>The premier HVAC Expert Serving the walla walla valley</h2>
            <a className="primary-btn hero-cta" href="https://www.cpheat.com/request-service/">
              Request Service
            </a>

            <img
              className="choice-badge"
              src="https://www.cpheat.com/wp-content/uploads/2024/07/Readers-Choice-Winner-logo.png"
              alt="Readers Choice Winner"
            />
          </div>
        </div>
      </section>

      <section className="hero-pill-strip">
        <div className="container hero-pill-grid">
          {[
            "Emergency Service Available",
            "Customizable Comfort Solutions",
            "100% Customer Satisfaction",
            "Family-Owned and Operated",
            "Licensed & Experienced",
          ].map((item) => (
            <span key={item}>
              <img src="https://www.cpheat.com/wp-content/uploads/2024/08/list-icon2-30.webp" alt="" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section light">
        <div className="container center">
          <p className="section-kicker">SERVICE</p>
          <h3>OUR SERVICES</h3>
          <div className="service-grid">
            {services.map((service) => (
              <a key={service.title} href={service.href} className="service-card">
                <img src={service.icon} alt={service.title} className="service-icon-image" />
                <p>{service.title}</p>
              </a>
            ))}
          </div>
          <a className="primary-btn small" href="https://www.cpheat.com/request-service/">
            Request Service
          </a>
        </div>
      </section>

      <section className="section about">
        <div className="container about-wrap">
          <div className="about-media">
            <img
              className="about-main-image"
              src="https://www.cpheat.com/wp-content/uploads/2024/07/about-us-img1.webp"
              alt="About College Place Heating"
            />
            <img
              className="about-badge-image"
              src="https://www.cpheat.com/wp-content/uploads/2024/07/75-years-of-business-logo.webp"
              alt="75 years of business"
            />
          </div>
          <div>
            <p className="section-kicker">ABOUT US</p>
            <h3>About College Place Heating &amp; Air Conditioning</h3>
            <p className="tagline">EXPERIENCED HONESTY</p>
            <p className="about-copy">
              College Place Heating &amp; Air Conditioning, Inc. has been serving customers in Walla Walla, WA, College
              Place, WA, and Milton-Freewater, OR for more than 75 years. We have grown from a small two-person shop
              repairing HVAC systems and installing ductwork to one of the premier providers of HVAC solutions
              throughout our service area.
            </p>
            <p className="about-copy">Our team is ready to serve your needs now and in the future.</p>
            <a className="phone-link cta-phone" href="tel:+15095258073">
              (509) 525-8073
            </a>
          </div>
        </div>

        <div className="container team-wrap">
          <h4 className="leaders-title">our team leaders</h4>
          <div className="leader-grid">
            {leaders.map((leader) => (
              <article key={leader.name} className="leader-card">
                <img src={leader.image} alt={leader.name} />
                <p className="name">{leader.name}</p>
                <p>{leader.role}</p>
                <p className="year">year started {leader.year}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonial">
        <div className="container">
          <p className="section-kicker pill">TESTIMONIAL</p>
          <h3>CUSTOMER REVIEWS</h3>
          <div className="review-list">
            {reviews.map((review) => (
              <article key={review.name} className="review-card">
                <div className="review-head">
                  <img src="https://www.cpheat.com/wp-content/uploads/2024/07/testi-quote-icon.webp" alt="" />
                  <div>
                    <img src="https://www.cpheat.com/wp-content/uploads/2024/07/testi-stars-1.webp" alt="5 stars" />
                    <h4>{review.name}</h4>
                  </div>
                </div>
                <p>{review.text}</p>
              </article>
            ))}
          </div>
          <div className="review-actions">
            <a className="primary-btn small" href="https://www.cpheat.com/about-us/reviews">
              View all reviews
            </a>
            <a
              className="primary-btn small alt"
              href="https://www.google.com/maps/place/College+Place+Heating+%26+Air+Conditioning/@46.056425,-118.3751638,15z/data=!4m8!3m7!1s0x54a26a1d6580b36d:0x4a05ba2b0e7250c7!8m2!3d46.056425!4d-118.3751638!9m1!1b1!16s%2Fg%2F1tglmmbw?entry=ttu"
            >
              leave us a review
            </a>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container two-col">
          <article>
            <img
              className="finance-banner"
              src="https://www.cpheat.com/wp-content/uploads/2025/08/600x350-WFHP-new-banner.png"
              alt="Wells Fargo financing"
            />
            <img
              className="optimus-logo"
              src="https://www.cpheat.com/wp-content/uploads/2024/07/optimus-logo.webp"
              alt="Optimus"
            />
            <p className="section-kicker">FINANCING</p>
            <h3>Financing available</h3>
            <p>
              We offer financing options for the installation of new HVAC equipment or large electrical projects in
              owner occupied homes.
            </p>
            <ul>
              <li>Monthly payments to fit your budget</li>
              <li>Special terms promotions available, ask for details</li>
              <li>Online account management &amp; bill payment options</li>
            </ul>
            <a className="primary-btn small" href="https://www.cpheat.com/financing">
              Apply for financing
            </a>
          </article>
          <article>
            <p className="section-kicker">PLAN</p>
            <h3>Maintenance Plan</h3>
            <p>
              for people in Walla Walla, College Place, and Milton-Freewater, the 1-system, biannual (heating and
              cooling) maintenance Energy Savings Agreement (ESA) pricing is a prepaid plan as follows:
            </p>
            <ul className="list-style1">
              <li>
                3 prepaid Precision Tune-ups (PTUs) $348. Expires one year after purchase, and can be renewed at that
                time for $232 for 2 more PTUs (broken down, this is $116 per PTU)
              </li>
              <li>
                5 prepaid PTUs $510. Expires two years after purchase, and can be renewed at that time for $408 for 4
                more PTUs (broken down, this is $102 per PTU)
              </li>
              <li>
                7 prepaid PTUs $644. Expires three years after purchase, and can be renewed at that time for $552 for
                6 more PTUs (broken down, this is $92 per PTU)
              </li>
            </ul>
            <a className="primary-btn small" href="https://www.cpheat.com/contact-us">
              Contact Us
            </a>
          </article>
        </div>
      </section>

      <section className="section partner">
        <div className="container center">
          <p className="section-kicker">PARTNERS</p>
          <h3>Featured Manufacturer</h3>
          <img
            className="manufacturer-image"
            src="https://www.cpheat.com/wp-content/uploads/2024/07/fm-equipments-1.webp"
            alt="Featured manufacturer"
          />
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <p className="section-kicker">FAQS</p>
          <h3>Frequently asked questions</h3>
          <div className="faq-list">
            {faqs.map((faq) => (
              <article key={faq.question} className="faq-card">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sponsor">
        <div className="container center sponsor-wrap">
          <img
            src="https://www.cpheat.com/wp-content/uploads/2026/03/Stampede-50th-PNG-003.png"
            alt="50th Annual Balloon Stampede"
          />
          <div>
            <h3>Proud Sponsor</h3>
            <p>50th Annual Walla Walla Balloon Stampede</p>
            <p>We are honored to support this long-standing community tradition.</p>
          </div>
        </div>
      </section>

      <section className="section areas">
        <div className="container areas-wrap">
          <div>
            <p className="section-kicker white">SERVICES</p>
            <h3 className="white">Service Areas</h3>
            <ul className="areas-grid">
              <li>Walla Walla</li>
              <li>College Place</li>
              <li>Milton-Freewater</li>
              <li>Dayton</li>
              <li>Waitsburg</li>
              <li>Athena</li>
              <li>Weston</li>
              <li>Touchet</li>
            </ul>
          </div>
          <img
            className="areas-image"
            src="https://www.cpheat.com/wp-content/uploads/2024/08/CPHEATTEAM-FALL2025-9-scaled.avif"
            alt="Service team"
          />
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-top">
          <div>
            <div className="footer-brand">
              <img
                src="https://www.cpheat.com/wp-content/uploads/2024/07/cp-college-place-logo.webp"
                alt="College Place logo"
              />
              <img
                src="https://www.cpheat.com/wp-content/uploads/2024/07/Daikin-comfot-pro-logo.webp"
                alt="Daikin"
              />
            </div>
            <p className="footer-title">970 NE Rose St, College Place, WA 99324</p>
            <p>Working hours:</p>
            <p>Monday-Thursday: 8AM - 5 PM</p>
            <p>Friday: 8AM - 3PM</p>
          </div>
          <div>
            <a href="https://www.cpheat.com/request-service/">Request Service</a>
            <a href="https://www.cpheat.com/maintenance-plan/">Maintenance Plan</a>
            <a href="tel:+15095258073">(509) 525-8073</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 College Place Heating and Air Conditioning. All rights reserved.</p>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Accessibility Statement</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
