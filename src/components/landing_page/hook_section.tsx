import React from "react";
import { Link } from "react-router-dom";

export const HookSection: React.FC = () => {
  return (
    <section className="relative bg-[#FCF8F3] py-20 px-8 md:px-16 lg:px-24 flex flex-col items-center justify-center text-center overflow-hidden">

      <img
        src="/images/corner_1.png"
        alt="Decoración superior derecha"
        className="absolute top-0 right-0 w-32 md:w-48 opacity-40 pointer-events-none select-none"
      />
      <img
        src="/images/corner_2.png"
        alt="Decoración inferior izquierda"
        className="absolute bottom-0 left-0 w-32 md:w-48 opacity-40 pointer-events-none select-none"
        style={{
            transform: "translate(-10%, 6%) rotate(-270deg)",
            transformOrigin: "center center",
        }}
        />


      <div className="relative z-10 flex flex-col items-center space-y-8 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-poppins-bold text-[#1B2C47] leading-tight">
          Transformamos la eficiencia en resultados.
        </h2>

        <p className="text-lg md:text-xl text-[#374151] font-roboto max-w-2xl leading-relaxed">
          Potencia tu negocio con soluciones diseñadas para crecer contigo.
          Confía en nuestra experiencia y lleva tu empresa al siguiente nivel.
        </p>

        <Link
          to="/contact"
          className="bg-[#1B2C47] text-white font-poppins-bold px-10 py-4 rounded-md text-lg hover:bg-[#23385F] transition-colors"
        >
          Contáctanos hoy
        </Link>
      </div>
    </section>
  );
};
