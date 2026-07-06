import zoeHeadshot from "../assets/zoe-headshot.png";

function AboutPreview() {
  return (
    <section className="section about-preview" id="about">
      <div className="container about-grid">
        <div className="about-image-wrap">
          <div className="about-orbit"></div>

          <img
            src={zoeHeadshot}
            alt="Zoë, birth and postpartum doula"
            className="about-image"
          />

          <div className="about-note">
            <span>✦</span>
            <p>Gentle, personal care for your growing family.</p>
          </div>
        </div>

        <div className="about-content">
          <p className="eyebrow">Meet Your Doula</p>

          <h2 className="section-title">
            A calm presence when everything feels new.
          </h2>

          <p className="section-copy">
            Hi, I’m Zoë. I believe birth and postpartum were never meant to be
            walked through alone. My heart is to help families feel seen,
            informed, encouraged, and supported through one of the most tender
            seasons of life.
          </p>

          <p className="section-copy">
            Whether you are preparing for birth, recovering after delivery, or
            simply trying to find your rhythm as a new family, Zoë’s Village
            offers steady support with warmth, patience, and care.
          </p>

          <div className="about-signature">
            <span>Zoë</span>
            <p>Birth & Postpartum Doula</p>
          </div>

          <a className="secondary-btn" href="#services">
            Learn about care options
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;