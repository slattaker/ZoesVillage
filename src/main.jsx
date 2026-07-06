import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/animations.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/about-preview.css";
import "./styles/services-preview.css";
import "./styles/village-landscape.css";
import "./styles/why-choose.css";
import "./styles/journey-timeline.css";
import "./styles/testimonial-area.css";
import "./styles/village-promise.css";
import "./styles/footer.css";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);