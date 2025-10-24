import React, { useState } from "react";

export const PartnersSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const partners = [
    {
      name: "JOSÉ GONZÁLEZ",
      role: "MANAGING PARTNER",
      image: "/images/socio_1.png",
      description:
        "Con más de 30 años en empresas internacionales y Big Four, con amplia experiencia en gestión financiera y organizacional en diversos sectores.",
    },
    {
      name: "MELISSA GOODIN",
      role: "PARTNER",
      image: "/images/socio_2.png",
      description:
        "Con más de 15 años liderando mejora continua y gestión por procesos en varios sectores con enfoque multidisciplinario.",
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-16 px-6 md:px-16 lg:px-24 text-center relative overflow-hidden">
      <div className="container mx-auto flex flex-col items-center relative">

        <div className="relative mb-16">

          <img
            src="/images/trazo_2.png"
            alt="Decorativo trazo"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-70 w-[650px] opacity-90 pointer-events-none select-none"
          />
          <h2 className="relative text-4xl md:text-5xl font-poppins-bold font-bold text-[#0f172a] z-10">
            CONOCE NUESTROS SOCIOS
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-14 md:gap-28">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-xs cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >

              <div className="relative w-[380px] h-[380px] rounded-full overflow-hidden shadow-[6px_6px_12px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover object-center scale-125"
                  style={{ aspectRatio: "1 / 1" }}
                />
              </div>

              <div className="mt-6">
                <h3 className="text-2xl md:text-3xl font-poppins-bold font-bold text-[#0f172a] uppercase tracking-wide">
                  {partner.name}
                </h3>
                <p className="text-lg md:text-xl font-roboto text-[#374151] font-medium mt-1">
                  {partner.role}
                </p>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  hoveredIndex === index
                    ? "max-h-40 opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-lg md:text-xl text-[#374151] font-roboto leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
