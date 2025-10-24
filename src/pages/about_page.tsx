import React from "react";
import { Header } from "../components/landing_page/header";
import { FooterSection } from "../components/landing_page/footer_section";
import { AboutSection, MissionSection, VisionSection, ValuesSection } from "../components/about_page";

export const AboutPage: React.FC = () => {
  return (
    <main className="w-full bg-[#FCF8F3] min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Header />
      <div className="flex-grow">
        <AboutSection />
        <MissionSection />
        <VisionSection />
        <ValuesSection />
      </div>
      <FooterSection />
    </main>
  );
};

export default AboutPage;
