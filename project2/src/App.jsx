
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Layout from "./component/Layout/Layout";
import HeroSection from "./component/HeroSection/HeroSection";
import FounderSection from './component/FounderSection/FounderSection'
import TeamSection from './component/TeamSection/TeamSection.jsx'
import WinnerSection from './component/WinnerSection/WinnerSection.jsx'
import WhatsNextSection from './component/WhatsNextSection/WhatsNextSection.jsx'
import ContactSection from './component/ContactSection/ContactSection.jsx'
import Footer from './component/Footer/Footer.jsx'

function App() {

  useGSAP(()=>{
    
  })

  return (
    <Layout>
      <HeroSection />
      <FounderSection />
      {/* <WinnerSection />
      <TeamSection />
      <WhatsNextSection />
      <ContactSection /> */}
    </Layout>
  );
}

export default App;
