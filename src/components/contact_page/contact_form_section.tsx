import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export const ContactFormSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isClient, setIsClient] = useState("no");
  const [sending, setSending] = useState(false);
  const [popup, setPopup] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const lastSubmitRef = useRef<number | null>(null);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";
  const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID ?? "";

  const escapeHtml = (str = "") =>
    str
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || sending) return;

    // Throttle: evitar envíos en menos de 8s
    const now = Date.now();
    if (lastSubmitRef.current && now - lastSubmitRef.current < 8000) {
      setPopup({ message: "Por favor espera unos segundos antes de enviar nuevamente.", type: "error" });
      setTimeout(() => setPopup(null), 3000);
      return;
    }

    const hp = (formRef.current.querySelector('input[name="hp_name"]') as HTMLInputElement | null)?.value;
    if (hp) {

      console.warn("Honeypot triggered, probable bot. Value:", hp);
      setPopup({ message: "Detectado envío automatizado. Operación cancelada.", type: "error" });
      setTimeout(() => setPopup(null), 3000);
      return;
    }

    const formData = new FormData(formRef.current);
    const templateParams: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === "string") templateParams[key] = escapeHtml(value);
    });

    if (!templateParams["nombre"] || !templateParams["email"]) {
      setPopup({ message: "Por favor complete al menos nombre y correo.", type: "error" });
      setTimeout(() => setPopup(null), 3000);
      return;
    }

    setSending(true);

    try {
      await emailjs.send(SERVICE_ID || "service_ygv3hdt", TEMPLATE_ID || "template_la4x7x1", templateParams, USER_ID || "9Id8h5EmsTLhqZtpd");

      setPopup({ message: "✅ Mensaje enviado con éxito.", type: "success" });
      formRef.current.reset();
      lastSubmitRef.current = Date.now();
    } catch (err) {
      console.error("Error al enviar:", err);
      setPopup({ message: "❌ Ocurrió un error al enviar el mensaje.", type: "error" });
    } finally {
      setSending(false);
      setTimeout(() => setPopup(null), 3000);
    }
  };

  return (
    <section className="relative flex flex-col md:flex-row justify-between items-start px-8 md:px-16 lg:px-24 py-16">
      {popup && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 transition-opacity duration-300">
          <div
            className={`px-8 py-6 rounded-lg shadow-xl text-center text-lg font-semibold transform transition-all duration-300 scale-105 ${
              popup.type === "success" ? "bg-white text-green-700 border border-green-300" : "bg-white text-red-600 border border-red-300"
            }`}
          >
            {popup.message}
          </div>
        </div>
      )}

      <div className="w-full md:w-1/2 bg-white shadow-sm rounded-md p-8 z-10">
        <h2 className="text-3xl md:text-4xl font-poppins-bold text-[#1B2C47] mb-6">FORMULARIO</h2>
        <p className="text-[#0f172a] text-base md:text-lg mb-8">
          Si desea conocer más sobre nuestros servicios o tiene alguna consulta en general, por favor envíenos un mensaje desde el siguiente formulario de contacto...
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>

          <input type="text" name="hp_name" autoComplete="off" tabIndex={-1} style={{ display: "none" }} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#1B2C47] font-semibold mb-2">Nombres</label>
              <input name="nombre" maxLength={40} type="text" className="w-full border border-gray-300 rounded-md px-4 py-2" required />
            </div>
            <div>
              <label className="block text-[#1B2C47] font-semibold mb-2">Apellidos</label>
              <input name="apellido" maxLength={40} type="text" className="w-full border border-gray-300 rounded-md px-4 py-2" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#1B2C47] font-semibold mb-2">Correo Electrónico</label>
              <input name="email" maxLength={40} type="email" className="w-full border border-gray-300 rounded-md px-4 py-2" required />
            </div>
            <div>
              <label className="block text-[#1B2C47] font-semibold mb-2">Teléfono</label>
              <input name="telefono" maxLength={40} type="tel" className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
          </div>

          <div>
            <label className="block text-[#1B2C47] font-semibold mb-2">Nombre de la empresa</label>
            <input name="empresa" maxLength={40} type="text" className="w-full border border-gray-300 rounded-md px-4 py-2" />
          </div>

          <div>
            <label className="block text-[#1B2C47] font-semibold mb-2">Servicio Requerido</label>
            <select name="servicio" className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white">
              <option value="">Seleccione un servicio</option>
              <option value="consultoria">Consultoría</option>
              <option value="auditoria">Auditoría</option>
              <option value="outsourcing">Outsourcing</option>
              <option value="contaduria">Contaduría</option>
              <option value="negocio">Negocio</option>
            </select>
          </div>

          <div>
            <p className="text-[#1B2C47] font-semibold mb-2">¿Eres cliente de GG Consultores?</p>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="es_cliente" value="si" checked={isClient === "si"} onChange={() => setIsClient("si")} className="w-5 h-5" />
                <span>Si</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="es_cliente" value="no" checked={isClient === "no"} onChange={() => setIsClient("no")} className="w-5 h-5" />
                <span>No</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="submit" disabled={sending} className="bg-[#E8C26E] disabled:opacity-60 hover:bg-[#e0b65c] text-[#1B2C47] font-poppins-bold px-8 py-3 rounded-md text-lg transition-colors">
              {sending ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>

      <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-16">
        <h2 className="text-3xl md:text-4xl font-poppins-bold text-[#1B2C47] mb-10">INFORMACIÓN</h2>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-poppins-bold text-[#1B2C47]">JOSÉ LUIS GONZÁLEZ</h3>
            <div className="flex items-center space-x-4"><Mail className="w-5 h-5 text-[#1B2C47]" /><p>joseluis@gonzalezgoodin.com</p></div>
            <div className="flex items-center space-x-4"><Phone className="w-5 h-5 text-[#1B2C47]" /><p>829-318-8410</p></div>
            <div className="flex items-center space-x-4"><Linkedin className="w-5 h-5 text-[#1B2C47]" /><a href="#" className="text-blue-700 underline">José Luis González Juarez</a></div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-poppins-bold text-[#1B2C47]">MELISSA GOODIN</h3>
            <div className="flex items-center space-x-4"><Mail className="w-5 h-5 text-[#1B2C47]" /><p>melissa@gonzalezgoodin.com</p></div>
            <div className="flex items-center space-x-4"><Phone className="w-5 h-5 text-[#1B2C47]" /><p>849-925-1256</p></div>
            <div className="flex items-center space-x-4"><Linkedin className="w-5 h-5 text-[#1B2C47]" /><a href="#" className="text-blue-700 underline">Melissa Goodin-Mata</a></div>
          </div>

          <div className="flex items-start space-x-4"><MapPin className="w-5 h-5 text-[#1B2C47] mt-1" /><p>Rafael Augusto Sánchez #86, Piantini. Roble Corporate Centre piso 7.</p></div>
        </div>
      </div>
    </section>
  );
};
