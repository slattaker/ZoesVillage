import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import AboutPreview from "../components/AboutPreview.jsx";
import ServicesPreview from "../components/ServicesPreview.jsx";
import VillageLandscape from "../components/VillageLandscape.jsx";
import WhyChoose from "../components/WhyChoose.jsx";
import TestimonialArea from "../components/TestimonialArea.jsx";
import JourneyTimeline from "../components/JourneyTimeline.jsx";
import VillagePromise from "../components/VillagePromise.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <VillageLandscape />
      <Navbar />
      <main>
        <Hero />
        <AboutPreview />
        <ServicesPreview />
        <WhyChoose />
        <JourneyTimeline />
        <TestimonialArea />
        <VillagePromise />
        <Footer />
      </main>
    </>
  );
}

export default Home;