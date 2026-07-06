function Contact() {
  return (
    <main
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "60px 30px",
      }}
    >
      <h1>Let's Build Your Village</h1>

      <p>
        I'd love to hear your story and learn how I can
        support your family.
      </p>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "30px",
        }}
      >
        <input placeholder="Name" />

        <input placeholder="Email" />

        <input placeholder="Phone Number" />

        <input placeholder="Estimated Due Date" />

        <textarea
          rows="6"
          placeholder="Tell me about your journey..."
        />

        <button>
          Send Message
        </button>
      </form>
    </main>
  );
}

export default Contact;