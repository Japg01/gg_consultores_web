import React from "react";

export const ValuesSection: React.FC = () => {
  const valoresScale = 2.1;
  const valoresOffsetX = "25%";
  const valoresOffsetY = "10%";
  const valoresColumna2OffsetY = "50px";

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 pt-4 pb-24 min-h-[800px] overflow-visible">
      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-10">
        <div className="relative w-full md:w-fit">
          <h2 className="relative text-4xl md:text-5xl font-poppins-bold text-[#1B2C47] md:-translate-x-[-160%] z-10">
            Nuestros Valores
          </h2>
          <img
            src="/images/trazo_3.png"
            alt="Decoración"
            className="absolute top-1/2 left-220 -translate-x-1/2 -translate-y-45 w-[280px] md:w-[380px] opacity-90 -z-10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          <div>
            <h3 className="text-2xl font-poppins-bold text-[#1B2C47] mb-2">
              Honestidad
            </h3>
            <p className="text-lg md:text-xl font-roboto text-[#0f172a] leading-relaxed">
              Actuamos con transparencia y honradez, guiándonos siempre por la ética profesional, lo que garantiza relaciones de confianza duraderas con nuestros clientes y socios.
            </p>
          </div>

          <div style={{ transform: `translateY(${valoresColumna2OffsetY})` }}>
            <h3 className="text-2xl font-poppins-bold text-[#1B2C47] mb-2">
              Compromiso
            </h3>
            <p className="text-lg md:text-xl font-roboto text-[#0f172a] leading-relaxed">
              Asumimos cada proyecto con responsabilidad y dedicación, enfocándonos en ofrecer soluciones de calidad que aporten verdadero valor y utilidad al cliente.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-poppins-bold text-[#1B2C47] mb-2">
              Profesionalismo
            </h3>
            <p className="text-lg md:text-xl font-roboto text-[#0f172a] leading-relaxed">
              Contar con una base humana de expertos altamente cualificados, junto con una apuesta por la innovación y las nuevas tecnologías, nos permite abordar cualquier necesidad de manera ágil y eficaz.
            </p>
          </div>

          <div style={{ transform: `translateY(${valoresColumna2OffsetY})` }}>
            <h3 className="text-2xl font-poppins-bold text-[#1B2C47] mb-2">
              Experiencia
            </h3>
            <p className="text-lg md:text-xl font-roboto text-[#0f172a] leading-relaxed">
              Nuestras experiencias multidisciplinarias como profesionales diferencian nuestro trabajo, proporcionando un conocimiento y habilidades valiosas en distintas áreas, procedimientos y sectores.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end overflow-visible">
        <img
          src="/images/valores.png"
          alt="Nuestros valores"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 object-contain max-w-none"
          style={{
            transform: `translate(${valoresOffsetX}, ${valoresOffsetY}) scale(${valoresScale})`,
            transformOrigin: "center center",
          }}
        />
      </div>
    </section>
  );
};
