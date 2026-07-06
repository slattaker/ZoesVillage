function Services() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 30px",
      }}
    >
      <h1>Services</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        <div className="service-card">
          <h2>Birth Support</h2>
          <p>
            Personalized support before and during labor.
          </p>
        </div>

        <div className="service-card">
          <h2>Postpartum Care</h2>
          <p>
            Gentle guidance through recovery and newborn life.
          </p>
        </div>

        <div className="service-card">
          <h2>Virtual Support</h2>
          <p>
            Ongoing encouragement wherever you are.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Services;