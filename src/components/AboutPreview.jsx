import zoeHeadshot from "../assets/zoe-headshot.png";

function AboutPreview() {
  return (
<section className="section about-preview" id="about">
  <div className="container about-grid">

    <div
      className="about-image-wrap"
      data-reveal="fade-left"
    >
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

    <div
      className="about-content"
      data-reveal="fade-right"
    >
      <p className="eyebrow">Meet Your Doula</p>

      <h2 className="section-title">
        A calm presence when everything feels new.
      </h2>

      <p className="section-copy">
         Hi! I’m Zoë. I believe the postpartum season was never meant to be walked
        through alone. My heart is to help families feel rested, reassured, and
        supported as they recover, bond with their baby, and settle into life at home.
      </p>

      <p className="section-copy">
         Whether you need an extra set of hands, newborn guidance, emotional support,
          or time to rest, Zoë’s Village offers steady care with warmth, patience, and
          respect for your family’s needs.
      </p>

      <div className="about-signature">
        <span>Zoë</span>
        <p>Postpartum Doula & Newborn Care Provider</p>
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