import React, { useState } from "react";

const OfferSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FEF9F4] py-16 px-6 md:px-16 lg:px-24 text-center relative overflow-hidden">
      <div className="container mx-auto flex flex-col items-center">

        <div className="relative mb-16">
          <img
            src="/images/trazo_1.png"
            alt="Decorativo trazo"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] opacity-90 pointer-events-none select-none"
          />
          <h2 className="relative text-4xl md:text-5xl font-poppins-bold font-bold text-[#0f172a] z-10">
            ¿QUÉ OFRECEMOS?
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mb-12">

          <div
            className="flex flex-col items-center max-w-[450px] transition-all duration-300"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src="/images/auditoria.png"
              alt="Auditoría y consultoría"
              className="w-[370px] h-[370px] rounded-full object-cover mb-5 shadow-[6px_6px_10px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0f172a] mb-2 "style={{ fontFamily: "Poppings Bold" }}>
              Auditoría y consultoría <br /> Especializada.
            </h3>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                hoveredIndex === 0
                  ? "max-h-40 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-xl md:text-2xl text-[#1e293b] leading-relaxed px-4">
                Analizamos tus procesos y estructuras internas para mejorar la
                eficiencia, cumplimiento y gestión estratégica.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center max-w-[450px] transition-all duration-300"
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src="/images/consultoria.png"
              alt="Consultoría empresarial"
              className="w-[370px] h-[370px] rounded-full object-cover mb-5 shadow-[6px_6px_10px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0f172a] mb-2" style={{ fontFamily: "Poppings Bold" }}>
              Consultoría empresarial.
            </h3>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                hoveredIndex === 1
                  ? "max-h-40 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-xl md:text-2xl text-[#1e293b] leading-relaxed px-4">
                Brindamos soluciones personalizadas para optimizar recursos,
                fortalecer estrategias y alcanzar tus objetivos corporativos.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center max-w-[450px] transition-all duration-300"
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src="/images/outsourcing.png"
              alt="Outsourcing"
              className="w-[370px] h-[370px] rounded-full object-cover mb-5 shadow-[6px_6px_10px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0f172a] mb-2" style={{ fontFamily: "Poppings Bold" }}>
              Outsourcing.
            </h3>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                hoveredIndex === 2
                  ? "max-h-40 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-xl md:text-2xl text-[#1e293b] leading-relaxed px-4">
                Delegamos procesos clave para que enfoques tus esfuerzos en el
                crecimiento y la innovación de tu empresa.
              </p>
            </div>
          </div>
        </div>

        {/* Imagen inferior y texto */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="relative w-full md:w-1/2">
            <img
              src="/images/especialistas.png"
              alt="Especialistas"
              className="object-cover w-full max-h-[380px]"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-3xl md:text-4xl font-roboto font-medium text-[#0f172a] leading-relaxed">
              Contamos con socios especialistas en áreas tales como{" "}
              <span className="font-bold">
                Contabilidad, Ingeniería Industrial, Administración, Tecnología e
                Impuestos.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
