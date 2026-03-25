import SiteChrome from "../components/SiteChrome";

export default function ContactPage() {
  return (
    <SiteChrome>

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

    </SiteChrome>
  );
}
