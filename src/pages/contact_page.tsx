import React from "react";
import { FooterSection } from "../components/landing_page/footer_section";
import { ContactFormSection } from "../components/contact_page/contact_form_section";
import { AlliesSection } from "../components/contact_page/allies_section";

export const ContactPage: React.FC = () => {
  return (
    <main className="w-full bg-[#FCF8F3] min-h-screen flex flex-col justify-between overflow-x-hidden">
      <div className="flex-grow mt-[100px]">
        <ContactFormSection />
        <AlliesSection />
      </div>
      <FooterSection />
    </main>
  );
};

export default ContactPage;
