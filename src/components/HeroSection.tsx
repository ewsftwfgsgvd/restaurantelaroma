import { Phone, MapPin, UtensilsCrossed, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Terraza del restaurante L'aroma con vistas al mar en Benidorm"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sea-deep/70 via-sea-deep/50 to-sea-deep/80" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-md rounded-full px-5 py-2 mb-8 animate-fade-in border border-primary-foreground/20">
          <Star className="w-4 h-4 text-gold fill-gold" />
          <span className="font-body text-sm text-primary-foreground font-medium">4,2/5 · +1.000 reseñas</span>
        </div>

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground font-bold leading-tight mb-6 animate-fade-in">
          Arroces y cocina mediterránea{" "}
          <span className="italic text-gold">frente al mar</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 animate-fade-in-delay-1 font-light">
          Disfruta de paellas, pescados frescos y mariscos en primera línea de la Playa de Poniente
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <a href="#carta" className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary font-body font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300">
            <UtensilsCrossed className="w-5 h-5" />
            Ver carta
          </a>
          <a href="tel:865550557" className="inline-flex items-center justify-center gap-2 bg-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300">
            <Phone className="w-5 h-5" />
            Llamar ahora
          </a>
          <a
            href="https://maps.google.com/?q=Restaurante+Laroma+Benidorm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:bg-primary-foreground/10 transition-colors duration-300"
          >
            <MapPin className="w-5 h-5" />
            Cómo llegar
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
