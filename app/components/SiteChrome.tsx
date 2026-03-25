"use client";

import { useEffect, useState } from "react";

type MainMenuChild = {
  name: string;
  url: string;
};

type MainMenuItem = {
  name: string;
  url: string | null;
  children?: MainMenuChild[];
};

const mainMenu: MainMenuItem[] = [
  {
    name: "AC",
    url: "https://www.cpheat.com/services/ac",
    children: [
      { name: "Air Conditioning", url: "https://www.cpheat.com/services/ac" },
      { name: "AC Repair", url: "https://www.cpheat.com/services/ac-repair" },
      { name: "AC Maintenance", url: "https://www.cpheat.com/hvac/walla-walla-wa/ac-maintenance" },
      { name: "AC Replacement", url: "https://www.cpheat.com/hvac/walla-walla-wa/ac-replacement" },
      { name: "Mini Split AC", url: "https://www.cpheat.com/hvac/walla-walla-wa/mini-split-air-conditioner" },
      { name: "Mini Split Installation", url: "https://www.cpheat.com/hvac/walla-walla-wa/mini-split-installation" },
      { name: "Geothermal Cooling", url: "https://www.cpheat.com/hvac/walla-walla-wa/geothermal-cooling" },
    ],
  },
  {
    name: "Heating",
    url: null,
    children: [
      { name: "Heating Repair", url: "https://www.cpheat.com/hvac/walla-walla-wa/heating-repair" },
      { name: "Heat Pump", url: "https://www.cpheat.com/services/heat-pump" },
      { name: "Furnace Repair", url: "https://www.cpheat.com/hvac/walla-walla-wa/furnace-repair" },
      { name: "Furnace Installation", url: "https://www.cpheat.com/hvac/walla-walla-wa/furnace-installation" },
      { name: "Boiler Repair", url: "https://www.cpheat.com/hvac/walla-walla-wa/boiler-repair" },
      { name: "Boiler Replacement", url: "https://www.cpheat.com/electrical/walla-walla-wa/boiler-replacement" },
      { name: "Boiler Installation", url: "https://www.cpheat.com/hvac/walla-walla-wa/boiler-installation" },
      { name: "Geothermal Heating", url: "https://www.cpheat.com/hvac/walla-walla-wa/geothermal-heating" },
    ],
  },
  {
    name: "Electrical",
    url: null,
    children: [
      { name: "Electrician", url: "https://www.cpheat.com/electrical/walla-walla-wa/electrician" },
      { name: "Electrical Installation", url: "https://www.cpheat.com/electrical/walla-walla-wa/electrical-installation" },
      { name: "Electrical Wiring Repair", url: "https://www.cpheat.com/electrical/walla-walla-wa/electrical-wiring-repair" },
      { name: "Electric Panel Upgrade", url: "https://www.cpheat.com/electrical/walla-walla-wa/electric-panel-upgrade" },
    ],
  },
  { name: "Financing", url: "https://www.cpheat.com/financing" },
  { name: "Contact Us", url: "/contact-us" },
];

type SiteChromeProps = {
  children: React.ReactNode;
};

export default function SiteChrome({ children }: SiteChromeProps) {
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
            <a href="/">
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
            {mainMenu.map((item) => {
              if (item.children) {
                return (
                  <div className="nav-dropdown" key={item.name}>
                    {item.url ? (
                      <a className="nav-dropdown-trigger" href={item.url}>
                        {item.name} <span className="caret">▼</span>
                      </a>
                    ) : (
                      <button type="button" className="nav-dropdown-trigger">
                        {item.name} <span className="caret">▼</span>
                      </button>
                    )}
                    <div className="nav-dropdown-menu">
                      {item.children.map((child) => (
                        <a key={child.name} href={child.url}>
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <a key={item.name} href={item.url ?? "#"}>
                  {item.name}
                </a>
              );
            })}
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

      <main>{children}</main>

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
