import { Sun, Music, Smile, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import vistasImg from "@/assets/vistas.png";

const items = [
  { icon: Sun, label: "Vista al mar" },
  { icon: Music, label: "Música ambiente" },
  { icon: Smile, label: "Trato excelente" },
  { icon: Users, label: "Ambiente familiar" },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      <img src={vistasImg} alt="Vistas desde L'aroma" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1200} height={800} />
      <div className="absolute inset-0 bg-sea-deep/70 backdrop-blur-sm" />

      <div className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <span className="font-body text-sm text-gold font-semibold uppercase tracking-widest">La experiencia</span>
        <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground font-bold mt-3 mb-12">
          Más que un restaurante, <span className="italic">una vivencia</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col items-center gap-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <span className="font-body text-primary-foreground font-medium text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
