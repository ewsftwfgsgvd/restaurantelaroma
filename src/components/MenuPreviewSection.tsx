import { Coffee, Soup, Flame, Fish, Beef, IceCreamCone, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  { icon: Coffee, name: "Desayunos", desc: "Tostadas, zumos y café" },
  { icon: Soup, name: "Entrantes", desc: "Ensaladas, croquetas, patatas bravas" },
  { icon: Flame, name: "Arroces y paellas", desc: "Nuestra especialidad estrella" },
  { icon: Fish, name: "Pescados", desc: "Frescos del día, a la plancha o al horno" },
  { icon: Beef, name: "Carnes", desc: "Solomillo, entrecot y secreto ibérico" },
  { icon: IceCreamCone, name: "Postres", desc: "Caseros y de temporada" },
];

const MenuPreviewSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="carta" className="py-24 px-4 bg-sand">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="font-body text-sm text-secondary font-semibold uppercase tracking-widest">Nuestra carta</span>
          <h2 className="font-heading text-3xl md:text-5xl text-primary font-bold mt-3">
            Descubre todo lo que <span className="italic text-secondary">ofrecemos</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className={`bg-card rounded-2xl p-6 hover:shadow-lg transition-all duration-500 group cursor-default ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <cat.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-heading text-lg text-primary font-semibold">{cat.name}</h3>
              <p className="font-body text-muted-foreground text-sm mt-1">{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-10 py-4 rounded-full hover:scale-105 transition-transform duration-300"
          >
            <ExternalLink className="w-5 h-5" />
            Ver carta completa
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuPreviewSection;
