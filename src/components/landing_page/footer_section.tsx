import React from "react";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const FooterSection: React.FC = () => {
  const leftPercent = 50;
  const bottomPx = 8;

  return (
    <footer className="bg-[#0f172a] text-white py-8 px-6 md:px-16 lg:px-24">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

        <div className="flex flex-col items-center md:items-start text-center md:text-left -mt-9">
          <div className="relative w-60 mb-0">
            <img
              src="/images/iso_ggc.png"
              alt="Gonzalez Goodin Consultores Gerenciales"
              className="w-60 h-auto object-contain"
            />

            <p
              className="absolute text-sm font-semibold text-white"
              style={{
                left: `${leftPercent}%`,
                bottom: `${bottomPx}px`,
                transform: "translateX(-50%)",
              }}
            >
              COPYRIGHT 2025
            </p>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-sm md:text-base font-bold mb-2">JOSÉ LUIS GONZÁLEZ</h3>
          <div className="flex flex-col items-center md:items-start space-y-1">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#c59a6b]" />
              <a
                href="mailto:joseluis@gonzalezgoodin.com"
                className="hover:underline text-sm"
              >
                joseluis@gonzalezgoodin.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#c59a6b]" />
              <a href="tel:+18293188410" className="text-sm">
                829-318-8410
              </a>
            </div>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-sm md:text-base font-bold mb-2">MELISSA GOODIN</h3>
          <div className="flex flex-col items-center md:items-start space-y-1">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#c59a6b]" />
              <a
                href="mailto:melissa@gonzalezgoodin.com"
                className="hover:underline text-sm"
              >
                melissa@gonzalezgoodin.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#c59a6b]" />
              <a href="tel:+18499251256" className="text-sm">
                849-925-1256
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <Link
            to="/contact"
            className="bg-[#fcd68d] hover:bg-[#e9b86e] text-[#0f172a] font-bold px-6 py-3 rounded-lg transition"
          >
            ¡Contáctanos!
          </Link>
        </div>
      </div>
    </footer>
  );
};
