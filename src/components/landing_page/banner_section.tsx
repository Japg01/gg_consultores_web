import React from "react";
import { Link } from "react-router-dom";

export const BannerSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center bg-[#FCF8F3] px-8 md:px-16 lg:px-24 py-15 min-h-[600px] overflow-hidden">

      <img
        src="/images/corner_1.png"
        alt="Decoración superior derecha"
        className="absolute top-23 right-0 w-32 md:w-48 lg:w-85 h-auto object-contain pointer-events-none select-none"
      />

      <img
        src="/images/corner_2.png"
        alt="Decoración inferior derecha"
        className="absolute bottom-0 right-0 w-32 md:w-48 lg:w-85 h-auto object-contain pointer-events-none select-none"
      />

      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end mb-12 md:mb-0">
        <img
          src="/images/banner_logo_sized.png"
          alt="Equipo de trabajo"
          className="w-[100%] md:w-[133%] max-w-none h-auto object-contain md:translate-x-[3%]"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-8 z-10">
        <h2 className="text-4xl md:text-5xl font-poppins-bold font-semibold text-[#1B2C47] leading-tight max-w-xl">
          Modelos innovadores <br /> de optimización empresarial.
        </h2>

        <Link
          to="/contact"
          className="bg-[#1B2C47] text-white font-poppins-bold px-8 py-4 rounded-md text-lg hover:bg-[#23385F] transition-colors"
        >
          ¡Conoce más!
        </Link>
      </div>
    </section>
  );
};
