import React from "react";
import { BannerSection } from "../components/landing_page/banner_section";
import { AboutSection } from "../components/landing_page/about_section";
import OfferSection from "../components/landing_page/offer_section";
import { PartnersSection } from "../components/landing_page/partners_section";
import { FooterSection } from "../components/landing_page/footer_section";
import { HookSection } from "../components/landing_page/hook_section";

export const LandingPage = () => {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <OfferSection /> 
      <PartnersSection />
      <HookSection />
      <FooterSection />
    </>
  );
};
