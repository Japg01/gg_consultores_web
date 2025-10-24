import React, { useRef, useState, useEffect } from "react";

export const AlliesSection = () => {
  const MAP_WIDTH = "42%";
  const MAP_OFFSET_X = "10%";

  // Estado para animar logos
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Función para generar animación con retraso según índice
  const getAnimationClass = (index: number) =>
    `transform transition-all duration-700 ease-out ${
      visible
        ? "translate-y-0 scale-100 opacity-100"
        : "translate-y-10 scale-75 opacity-0"
    } delay-[${index * 150}ms]`;

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FEF9F4] py-16 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      <div
        className="absolute top-0 bottom-0 right-0 flex justify-end items-center pointer-events-none"
        style={{
          width: MAP_WIDTH,
          transform: `translateX(${MAP_OFFSET_X})`,
        }}
      >
        <img
          src="/images/map_sized.png"
          alt="Mapa de aliados"
          className="w-full h-full object-contain md:object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col md:flex-col lg:flex-row items-start justify-between gap-10">
        <div className="w-full lg:w-[55%] flex flex-col md:pl-2">

          <h2 className="text-3xl md:text-4xl font-poppins-bold font-bold text-[#0f172a] mb-8">
            <span className="relative inline-block">
              <span className="relative z-10">NUESTROS ALIADOS</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-[#c59a6b] -z-10"></span>
            </span>
          </h2>

          <div className="mb-12 relative z-20">
            <h3
              className="text-xl md:text-2xl font-semibold text-[#0f172a] mb-10 text-center md:text-center w-full"
              style={{ fontFamily: "Poppings Bold" }}
            >
              REPÚBLICA DOMINICANA
            </h3>
            <div className="flex flex-row justify-center items-center gap-10 md:gap-14 flex-nowrap">
              {[
                "/images/logo_quasar.png",
                "/images/logo_agro.png",
                "/images/logo_evamsgroup.png",
                "/images/logo_cxo.png",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Logo"
                  className={`${getAnimationClass(i)} w-44 h-44 md:w-48 md:h-48 aspect-square rounded-full object-contain bg-white p-4 shadow-md`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-row justify-center items-start gap-[8.5rem] relative z-20">
            {[
              { src: "/images/logo_bronx.png", name: "ESTADOS UNIDOS" },
              { src: "/images/logo_rra.png", name: "PANAMÁ", pl: "pl-[3rem]" },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-center ${item.pl || ""}`}
              >
                <h3
                  className="text-xl md:text-2xl font-bold text-[#0f172a] mb-6"
                  style={{ fontFamily: "Poppings Bold" }}
                >
                  {item.name}
                </h3>
                <img
                  src={item.src}
                  alt={item.name}
                  className={`${getAnimationClass(i + 4)} w-44 h-44 md:w-48 md:h-48 aspect-square rounded-full object-contain bg-white p-4 shadow-md`}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
