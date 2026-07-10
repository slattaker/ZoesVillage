import promiseImage from "../assets/promise-baby-hands.png";

function VillagePromise() {
  return (
    <section className="section village-promise" id="contact">
      <div className="container promise-wrap">
        <div className="promise-art">
          <img
            src={promiseImage}
            alt="A newborn gently holding a caregiver's finger"
            className="promise-image"
          />
        </div>

        <div className="promise-content">
          <p className="eyebrow">The Village Promise</p>

          <h2>
            No family was meant to do this alone.
          </h2>

          <p>
            The early weeks with a newborn can be beautiful, exhausting, tender, and
            overwhelming all at once. Zoë’s Village is here to offer practical help,
            gentle guidance, and a calm presence while your family rests, recovers, and
            finds its new rhythm.
          </p>

          <div className="promise-actions">
          <a
            className="primary-btn"
            href="https://calendar.app.google/nXVsKwuQUBeXJyis8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a Free Consultation
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VillagePromise;