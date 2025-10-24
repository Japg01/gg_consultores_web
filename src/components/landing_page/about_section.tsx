import React, { useRef, useState, useEffect } from "react";

export const AboutSection: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="relative bg-white py-2 md:py-5 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="container mx-auto">

        <div className="flex flex-col md:flex-row items-center md:items-center gap-12 md:gap-10 mb-16">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
            <img
              src="/images/iso_ggc.png"
              alt="Logo"
              className="w-50 md:w-50 lg:w-135 mb-1 object-contain"
            />

            <h3 className="text-4xl md:text-6xl font-poppins-bold font-bold text-[#0f172a] leading-tight mb-2">
              ¿QUIÉNES SOMOS?
            </h3>

            <p className="text-2lg md:text-3xl font-roboto text-[#374151] max-w-full md:max-w-lg leading-relaxed">
              Grupo de profesionales apasionados por la mejora continua, por lo que
              ofrecemos soluciones personalizadas, orientadas a mejorar la eficiencia
              y rentabilidad de tu negocio.
            </p>
          </div>

          <div
            ref={imageRef}
            className={`relative w-full md:w-1/2 flex justify-center md:justify-end transition-opacity duration-1000 ease-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src="/images/somos_sized.png"
              alt="Equipo trabajando"
              className="w-[100%] md:w-[150%] max-w-none h-auto object-cover translate-x-4 md:translate-x-60"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center mt-[0px] pb-12">
          {[
            {
              title: "Misión",
              text: "Ser aliados de confianza que brindan soluciones integrales y actualizadas, impulsando el crecimiento sostenible de nuestros clientes.",
            },
            {
              title: "Visión",
              text: "Convertirnos en una firma referente en la región, reconocida por su innovación, profesionalismo y compromiso con la excelencia.",
            },
            {
              title: "Valores",
              text: "Honestidad, compromiso, profesionalismo y experiencia guían nuestras acciones para ofrecer siempre un servicio de calidad.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center group transition-transform duration-300 ease-out hover:scale-[1.03]"
            >
              {/* Línea decorativa */}
              <div className="w-16 h-[3px] bg-[#C59A6B] mb-4 rounded-full transition-all duration-300 group-hover:w-20" />

              {/* Título */}
              <h4 className="text-2xl md:text-3xl font-poppins-bold text-[#1B2C47] mb-4 transition-colors duration-300 group-hover:text-[#C59A6B]">
                {item.title}
              </h4>

              {/* Texto */}
              <p className="text-base md:text-lg text-[#374151] leading-relaxed max-w-xs">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
