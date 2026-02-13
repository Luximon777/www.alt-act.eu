import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";

// Main Components
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import PresentationSection from "./components/PresentationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// Mission Pages
import NotreMission from "./components/NotreMission";
import NotreAmbition from "./components/NotreAmbition";
import NotreAction from "./components/NotreAction";

// Other Pages
import VisionMethode from "./components/VisionMethode";
import MotPresident from "./components/MotPresident";
import MembresPage from "./components/MembresPage";
import CharteEthique from "./components/CharteEthique";
import GouvernanceConsultative from "./components/GouvernanceConsultative";
import ConseilsAccompagnement from "./components/ConseilsAccompagnement";
import EspacePersonnel from "./components/EspacePersonnel";
import EspaceUbuntoo from "./components/EspaceUbuntoo";
import MentionsLegales from "./components/MentionsLegales";
import PolitiqueConfidentialite from "./components/PolitiqueConfidentialite";
import ContactPage from "./components/ContactPage";
import DevenirMembrePage from "./components/DevenirMembrePage";

// Homepage Component
function HomePage() {
  return (
    <div data-testid="home-page">
      <Navigation />
      <HeroSection />
      <PresentationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />
          
          {/* Mission Pages */}
          <Route path="/notre-mission" element={<NotreMission />} />
          <Route path="/notre-ambition" element={<NotreAmbition />} />
          <Route path="/notre-action" element={<NotreAction />} />
          
          {/* Presentation Pages */}
          <Route path="/vision-methode" element={<VisionMethode />} />
          <Route path="/mot-president" element={<MotPresident />} />
          <Route path="/membres" element={<MembresPage />} />
          
          {/* Charte éthique Pages */}
          <Route path="/charte-ethique" element={<CharteEthique />} />
          <Route path="/gouvernance-consultative" element={<GouvernanceConsultative />} />
          
          {/* Espaces */}
          <Route path="/conseils-accompagnement" element={<ConseilsAccompagnement />} />
          <Route path="/espace-personnel" element={<EspacePersonnel />} />
          <Route path="/espace-ubuntoo" element={<EspaceUbuntoo />} />
          
          {/* Legal Pages */}
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/confidentialite" element={<PolitiqueConfidentialite />} />
          
          {/* Contact Pages */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/devenir-membre" element={<DevenirMembrePage />} />
        </Routes>
        <Toaster />
      </div>
    </HashRouter>
  );
}

export default App;
