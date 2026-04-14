import { MapPin, Phone, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LocationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="font-body text-sm text-secondary font-semibold uppercase tracking-widest">Encuéntranos</span>
          <h2 className="font-heading text-3xl md:text-5xl text-primary font-bold mt-3">
            Te esperamos en la <span className="italic text-secondary">Playa de Poniente</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            Estamos en primera línea de la Playa de Poniente, con acceso directo desde el paseo marítimo.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.7!2d-0.153!3d38.534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDMyJzAyLjQiTiAwwrAwOSczMC4wIlc!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación L'aroma Benidorm"
            />
          </div>

          <div className="flex flex-col justify-center gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="font-body font-semibold text-primary">Dirección</p>
                <p className="font-body text-muted-foreground text-sm">Paseo de Poniente, Benidorm, Alicante</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="font-body font-semibold text-primary">Teléfono</p>
                <a href="tel:865550557" className="font-body text-secondary text-sm hover:underline">865 55 05 57</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="font-body font-semibold text-primary">Horario</p>
                <p className="font-body text-muted-foreground text-sm">Lunes a domingo: 9:00 – 23:00</p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <a href="tel:865550557" className="inline-flex items-center justify-center gap-2 bg-gold text-primary-foreground font-body font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300">
                <Phone className="w-4 h-4" />
                Llamar
              </a>
              <a
                href="https://maps.google.com/?q=Restaurante+Laroma+Benidorm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
              >
                <MapPin className="w-4 h-4" />
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
