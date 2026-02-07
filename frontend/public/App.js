import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import PresentationSection from "./components/PresentationSection";
import MissionSection from "./components/MissionSection";
import ActionsSection from "./components/ActionsSection";
import GovernanceSection from "./components/GovernanceSection";
import MethodologySection from "./components/MethodologySection";
import ImpactSection from "./components/ImpactSection";
import MembershipSection from "./components/MembershipSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import MentionsLegales from "./components/MentionsLegales";
import PolitiqueConfidentialite from "./components/PolitiqueConfidentialite";
import ProfilMethodologique from "./components/ProfilMethodologique";
import MotPresident from "./components/MotPresident";
import MembresPage from "./components/MembresPage";
import CharteEthique from "./components/CharteEthique";
import ConseilsAccompagnement from "./components/ConseilsAccompagnement";
import EspaceUbuntoo from "./components/EspaceUbuntoo";
import VisionMethode from "./components/VisionMethode";
import { Toaster } from "./components/ui/sonner";

function HomePage() {
  return (
    <React.Fragment>
      <Navigation />
      <HeroSection />
      <PresentationSection />
      <MissionSection />
      <ActionsSection />
      <GovernanceSection />
      <MethodologySection />
      <ImpactSection />
      <MembershipSection />
      <ContactSection />
      <Footer />
    </React.Fragment>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/profil-methodologique" element={<ProfilMethodologique />} />
          <Route path="/mot-president" element={<MotPresident />} />
          <Route path="/membres" element={<MembresPage />} />
          <Route path="/charte-ethique" element={<CharteEthique />} />
          <Route path="/conseils-accompagnement" element={<ConseilsAccompagnement />} />
          <Route path="/espace-ubuntoo" element={<EspaceUbuntoo />} />
          <Route path="/vision-methode" element={<VisionMethode />} />
        </Routes>
        <Toaster />
      </div>
    </HashRouter>
  );
}

export default App;
