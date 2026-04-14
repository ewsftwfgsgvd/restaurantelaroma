import { Phone, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 px-4 bg-gradient-to-br from-sea-deep to-secondary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className={`relative z-10 max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
        <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground font-bold mb-6">
          Reserva tu mesa <span className="italic">frente al mar</span>
        </h2>
        <p className="font-body text-primary-foreground/80 mb-10 text-lg">
          Llámanos y te reservamos la mejor mesa con vistas a la Playa de Poniente
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:865550557" className="inline-flex items-center justify-center gap-2 bg-gold text-primary-foreground font-body font-semibold px-10 py-4 rounded-full hover:scale-105 transition-transform duration-300 text-lg">
            <Phone className="w-5 h-5" />
            865 55 05 57
          </a>
          <a
            href="https://maps.google.com/?q=Restaurante+Laroma+Benidorm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground font-body font-semibold px-10 py-4 rounded-full hover:bg-primary-foreground/10 transition-colors duration-300 text-lg"
          >
            <MapPin className="w-5 h-5" />
            Cómo llegar
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
