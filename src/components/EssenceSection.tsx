import { Waves, Leaf, ChefHat, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import terrazaImg from "@/assets/terraza.png";

const features = [
  { icon: Leaf, title: "Producto fresco", desc: "Ingredientes seleccionados a diario" },
  { icon: Waves, title: "Frente al mar", desc: "Primera línea de Playa de Poniente" },
  { icon: ChefHat, title: "Cocina tradicional", desc: "Recetas mediterráneas auténticas" },
  { icon: Heart, title: "Ambiente familiar", desc: "Trato cercano y acogedor" },
];

const EssenceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src={terrazaImg} alt="Terraza de L'aroma" className="w-full h-[500px] object-cover" loading="lazy" width={600} height={500} />
            <div className="absolute inset-0 bg-gradient-to-t from-sea-deep/30 to-transparent" />
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
          <span className="font-body text-sm text-secondary font-semibold uppercase tracking-widest">Nuestra esencia</span>
          <h2 className="font-heading text-3xl md:text-5xl text-primary font-bold mt-3 mb-6">
            Sabor mediterráneo <span className="italic text-secondary">auténtico</span>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-10">
            En L'aroma unimos la tradición culinaria mediterránea con los mejores ingredientes frescos del Mediterráneo. Cada plato cuenta una historia de sabor, elaborada con cariño y servida frente al mar.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="group flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <f.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-body font-semibold text-primary text-sm">{f.title}</p>
                  <p className="font-body text-muted-foreground text-xs mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EssenceSection;
