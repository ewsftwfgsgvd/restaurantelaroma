import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import paellaMarisco from "@/assets/paella-marisco.jpg";
import arroz from "@/assets/arroz.png";
import croquetas from "@/assets/croquetas.jpg";
import pescado from "@/assets/pescado.jpg";

const dishes = [
  { img: paellaMarisco, name: "Paella de marisco", desc: "Arroz con gambas, mejillones y calamares al azafrán" },
  { img: arroz, name: "Arroz del senyoret", desc: "Todo pelado, listo para disfrutar sin mancharte las manos" },
  { img: croquetas, name: "Croquetas caseras", desc: "Crujientes por fuera, cremosas por dentro. Receta de la casa" },
  { img: pescado, name: "Pescado fresco del día", desc: "Traído directamente de la lonja cada mañana" },
];

const StarDishesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-4 bg-sand">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="font-body text-sm text-secondary font-semibold uppercase tracking-widest">Lo más pedido</span>
          <h2 className="font-heading text-3xl md:text-5xl text-primary font-bold mt-3">
            Nuestros platos <span className="italic text-secondary">estrella</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, i) => (
            <div
              key={dish.name}
              className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={400}
                  height={533}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-sea-deep/90 via-sea-deep/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-heading text-xl text-primary-foreground font-semibold">{dish.name}</h3>
                <p className="font-body text-primary-foreground/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {dish.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StarDishesSection;
