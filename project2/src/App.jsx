import React from "react";
import Layout from "./component/Layout/Layout";
import HeroSection from "./component/HeroSection/HeroSection";
import FounderSection from './component/FounderSection/FounderSection'
import TeamSection from './component/TeamSection/TeamSection.jsx'

function App() {
  return (
    <Layout>
      <HeroSection />
      <FounderSection/>
      <TeamSection/>
    </Layout>
  );
}

export default App;
