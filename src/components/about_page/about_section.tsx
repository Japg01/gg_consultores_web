import React, { useRef, useState, useEffect } from "react";

interface AboutSectionProps {
  reverse?: boolean; 
  imageOffsetX?: string; 
  imageOffsetY?: string; 
  imageScale?: number;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  reverse = true,
  imageOffsetX = "-25%",
  imageOffsetY = "10%",
  imageScale = 1,
}) => {
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
    <section className="relative bg-[#FCF8F3] py-6 md:py-12 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div
        className={`container mx-auto flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center gap-12 md:gap-10`}
      >
        {/* Texto */}
        <div
          className={`w-full md:w-1/2 flex flex-col items-center ${
            reverse ? "md:items-end text-center md:text-right" : "md:items-start text-center md:text-left"
          } z-10`}
        >
          <img
            src="/images/iso_ggc.png"
            alt="Logo"
            className="w-50 md:w-50 lg:w-135 mb-1 object-contain"
          />

          <h3 className="text-4xl md:text-6xl font-poppins-bold text-[#0f172a] leading-tight mb-2">
            ¿QUIÉNES SOMOS?
          </h3>

          <p className="text-2lg md:text-3xl font-roboto text-[#374151] max-w-full md:max-w-lg leading-relaxed">
            Grupo de profesionales apasionados por la mejora continua, por lo
            que ofrecemos soluciones personalizadas, orientadas a mejorar la
            eficiencia y rentabilidad de tu negocio.
          </p>
        </div>

        {/* Imagen */}
        <div
          ref={imageRef}
          className={`relative w-full md:w-1/2 flex justify-center ${
            reverse ? "md:justify-start" : "md:justify-end"
          } transition-opacity duration-1000 ease-out ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src="/images/somos_sized.png"
            alt="Equipo trabajando"
            className="max-w-none h-auto object-cover"
            style={{
              transform: `translate(${imageOffsetX}, ${imageOffsetY}) scale(${imageScale})`,
              transition: "transform 0.5s ease",
            }}
          />
        </div>
      </div>
    </section>
  );
};
