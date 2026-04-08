import React from "react";
import HeroSection from "../HeroSection/HeroSection.jsx";
import FounderSection from "../FounderSection/FounderSection.jsx";
import TeamSection from "../TeamSection/TeamSection.jsx";
import WinnerSection from "../WinnerSection/WinnerSection.jsx";
import ContactSection from "../ContactSection/ContactSection.jsx";

const winnersData = [
  {
    name: "Pallavi jaiswal",
    year: "Mrs Lucknow 2025",
    description:
      "A vision of grace and poise, Sophia captivated the judges with her eloquence and stellar stage presence during the Grand Finale.",
    image: "/images/model1.jpeg",
  },
  {
    name: "Pallavi jaiswal",
    year: "Mrs Lucknow 2025",
    description:
      "Defining modern charisma and sharp style, Marcus stood out as the epitome of the Filmiagi spirit, winning hearts and the title.",
    image: "/images/model1.jpeg",
  },
  {
    name: "Pallavi jaiswal",
    year: "Mrs Lucknow 2025",
    description:
      "Defining modern charisma and sharp style, Marcus stood out as the epitome of the Filmiagi spirit, winning hearts and the title.",
    image: "/images/model1.jpeg",
  },
  {
    name: "Pallavi jaiswal",
    year: "Mrs Lucknow 2025",
    description:
      "Defining modern charisma and sharp style, Marcus stood out as the epitome of the Filmiagi spirit, winning hearts and the title.",
    image: "/images/model1.jpeg",
  },
  {
    name: "Pallavi jaiswal",
    year: "Mrs Lucknow 2025",
    description:
      "Defining modern charisma and sharp style, Marcus stood out as the epitome of the Filmiagi spirit, winning hearts and the title.",
    image: "/images/model1.jpeg",
  },
  {
    name: "Pallavi jaiswal",
    year: "Mrs Lucknow 2025",
    description:
      "Defining modern charisma and sharp style, Marcus stood out as the epitome of the Filmiagi spirit, winning hearts and the title.",
    image: "/images/model1.jpeg",
  },
];

function Home() {
  return (
    <>
      <HeroSection />
      <FounderSection />
      <TeamSection />
      <WinnerSection
        title="MEET OUR CHAMPIONS"
        winners={winnersData}
        subtitle={"The Hall of Frame"}
      />
      <ContactSection />
    </>
  );
}

export default Home;
