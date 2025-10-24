import React from "react";

export const MissionSection: React.FC = () => {
  const missionScale = 1.9;
  const missionOffsetX = "10%";
  const missionOffsetY = "5%";

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-10 min-h-[600px] overflow-visible">
      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <div className="relative inline-block">
          <img
            src="/images/trazo_3.png"
            alt="Decoración"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-45 w-[280px] md:w-[380px] opacity-90 -z-10"
          />
          <h2 className="text-4xl md:text-5xl font-poppins-bold text-[#1B2C47] relative z-10">
            Nuestra Misión
          </h2>
        </div>
        <p className="text-xl md:text-2xl font-roboto text-[#0f172a] max-w-xl leading-relaxed">
          Ser una firma aliada a nuestros clientes dónde estos puedan
          encontrar soluciones integrales, confiables, profesionales y
          actualizadas al mercado empresarial vigente.
        </p>
      </div>

      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end overflow-visible">
        <img
          src="/images/mission.png"
          alt="Nuestra misión"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 object-contain max-w-none"
          style={{
            transform: `translate(${missionOffsetX}, ${missionOffsetY}) scale(${missionScale})`,
            transformOrigin: "center center",
          }}
        />
      </div>
    </section>
  );
};
