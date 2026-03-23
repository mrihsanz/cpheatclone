"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <div className="cp-page">
      <header className="top-header">
        <div className="container header-main">
          <div className="logo-cluster">
            <Link href="/">
              <img
                className="cp-logo-image"
                src="https://www.cpheat.com/wp-content/uploads/2024/07/cp-college-place-logo.webp"
                alt="Company College Place Heating and Air Conditioning Logo"
              />
            </Link>
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
              (509) 525-9353
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
            <Link href="/contact-us">Contact Us</Link>
            <button type="button" className="menu-btn" onClick={() => setIsSidebarOpen(true)}>
              Menu <span>☰</span>
            </button>
          </div>
        </nav>
      </header>

      <div className={`sidebar-overlay ${isSidebarOpen ? "open" : ""}`} onClick={() => setIsSidebarOpen(false)} />
      <aside className={`side-menu ${isSidebarOpen ? "open" : ""}`} aria-hidden={!isSidebarOpen}>
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
              <a href="https://www.cpheat.com/hvac/dayton-wa">Dayton</a>
            </div>
          )}
          <a href="https://www.cpheat.com/about-us/reviews">Reviews</a>
          <a href="https://www.cpheat.com/blog">Blog</a>
          <a href="https://www.cpheat.com/contact-us/employment">Employment</a>
          <a href="https://www.cpheat.com/referral-program">Referral Program</a>
          <a href="https://www.cpheat.com/video-gallery">Video Gallery</a>
        </nav>
      </aside>

      <section className="contact-hero">
        <div className="container center">
          <h1>CONTACT COLLEGE PLACE HEATING &amp; COOLING - HVAC &amp; ELECTRICAL SERVICES</h1>
          <p>Home » Contact Us</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container contact-info-wrap">
          <article className="contact-card">
            <h2>
              CONTACT COLLEGE PLACE HEATING &amp; COOLING FOR HVAC &amp; ELECTRICAL SERVICES
            </h2>
            <p>970 NE Rose St, College Place, WA 99324</p>
            <p>P.O. Box 445 College Place, WA 99324</p>
            <a className="contact-phone" href="tel:5095259353">
              (509) 572-9353
            </a>
            <p className="follow-us">Follow Us</p>
            <div className="contact-socials">
              <a href="https://www.facebook.com/cpheat/" target="_blank" aria-label="Facebook">
                f
              </a>
              <a href="https://www.instagram.com/collegeplaceheating/" target="_blank" aria-label="Instagram">
                i
              </a>
              <a
                href="https://www.yelp.com/biz/college-place-heating-and-air-conditioning-college-place-3"
                target="_blank"
                aria-label="Yelp"
              >
                y
              </a>
              <a href="https://www.youtube.com/channel/UCi_I9OXn09Ed2MTyjIfi1MA" target="_blank" aria-label="Youtube">
                ▶
              </a>
            </div>
          </article>
          <div className="contact-photo">
            <img
              src="https://www.cpheat.com/wp-content/uploads/2024/08/CPHEATTEAM-FALL2025-9-scaled.avif"
              alt="College Place Heating Team"
            />
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container center">
          <h3>HAVE A QUESTION? MESSAGE US</h3>
          <a className="contact-phone-inline" href="tel:5095729353">
            (509) 572-9353
          </a>

          <form className="contact-form">
            <p className="form-title">Contact information*</p>
            <label>
              First name*
              <input type="text" placeholder="Jane" />
            </label>
            <label>
              Last name*
              <input type="text" placeholder="Smith" />
            </label>
            <label>
              Phone number*
              <input type="tel" placeholder="(201) 555-0123" />
            </label>
            <label>
              Email
              <input type="email" placeholder="name@example.com" />
            </label>
            <button type="button">OK</button>
          </form>
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
            <p>WORKING HOURS:</p>
            <p>MONDAY-THURSDAY: 8AM - 5 PM</p>
            <p>FRIDAY: 8AM - 3PM</p>
            <a className="footer-call" href="tel:5095729353">
              (509) 572-9353
            </a>
          </div>
          <div>
            <p className="footer-subtitle">REVIEW US ON</p>
            <div className="contact-socials">
              <a href="https://www.facebook.com/cpheat/" target="_blank" aria-label="Facebook">
                f
              </a>
              <a href="https://www.instagram.com/collegeplaceheating/" target="_blank" aria-label="Instagram">
                i
              </a>
              <a
                href="https://www.yelp.com/biz/college-place-heating-and-air-conditioning-college-place-3"
                target="_blank"
                aria-label="Yelp"
              >
                y
              </a>
              <a href="https://www.youtube.com/channel/UCi_I9OXn09Ed2MTyjIfi1MA" target="_blank" aria-label="Youtube">
                ▶
              </a>
            </div>
            <p className="footer-subtitle">PAYMENTS</p>
            <div className="payment-strip">
              <img src="https://www.cpheat.com/wp-content/uploads/2024/07/cards1.webp" alt="Cards accepted" />
              <img src="https://www.cpheat.com/wp-content/uploads/2024/07/cards2.webp" alt="Cards accepted 2" />
            </div>
          </div>
          <div>
            <a className="header-btn cyan footer-cta" href="https://www.cpheat.com/request-service/">
              REQUEST SERVICE
            </a>
            <a className="header-btn dark footer-cta" href="https://www.cpheat.com/maintenance-plan/">
              MAINTENANCE PLAN
            </a>
            <p>Business license: 600-129-164</p>
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
