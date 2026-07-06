const towns = [
  "Charlotte",
  "Fort Mill",
  "Rock Hill",
  "Tega Cay",
  "Waxhaw",
  "Matthews",
  "Belmont",
  "Huntersville",
  "Indian Trail",
];

function TestimonialArea() {
  return (
    <section className="section testimonial-area">
      <div className="container testimonial-grid">
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>

          <blockquote>
            “From the very first conversation, Zoë made us feel calm, heard, and
            supported. It felt like having someone in our corner who truly cared.”
          </blockquote>

          <p className="testimonial-name">— A Zoë’s Village family</p>
        </div>

        <div className="service-area-card">
          <p className="eyebrow">Serving Local Families</p>

          <h2>
            Birth and postpartum doula care across the Charlotte area.
          </h2>

          <p>
            Zoë’s Village supports growing families throughout Charlotte and the
            surrounding communities with warm, personal care before, during, and
            after birth.
          </p>

          <div className="town-grid">
            {towns.map((town) => (
              <span key={town}>{town}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialArea;