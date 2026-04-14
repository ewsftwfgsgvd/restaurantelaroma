import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const reviews = [
  { text: "Pedimos arroz del senyoret y fue espectacular. De las mejores paellas que hemos probado en Benidorm.", author: "María G." },
  { text: "Raciones abundantes, precios razonables y vistas increíbles al mar. Repetiremos sin duda.", author: "Carlos R." },
  { text: "Servicio de 10, camareros muy atentos y comida de gran calidad. Un lugar para volver.", author: "Laura T." },
  { text: "Las croquetas caseras están de escándalo. El sitio perfecto para comer frente al mar.", author: "Javier M." },
  { text: "Vinimos en familia y todos encantados. El arroz de marisco, brutal.", author: "Ana P." },
];

const ReviewsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <section ref={ref} className="py-24 px-4 bg-card">
      <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <span className="font-body text-sm text-secondary font-semibold uppercase tracking-widest">Opiniones</span>
        <h2 className="font-heading text-3xl md:text-5xl text-primary font-bold mt-3 mb-4">
          Lo que dicen nuestros <span className="italic text-secondary">clientes</span>
        </h2>

        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-5 h-5 ${i < 4 ? "text-gold fill-gold" : "text-gold/50 fill-gold/50"}`} />
          ))}
        </div>
        <p className="font-body text-muted-foreground text-sm mb-12">4,2/5 · Más de 1.000 reseñas</p>

        <div className="relative">
          <div className="bg-sand rounded-2xl px-8 py-12 md:px-16 min-h-[200px] flex flex-col justify-center">
            <p className="font-heading text-xl md:text-2xl text-primary italic leading-relaxed mb-6">
              "{reviews[current].text}"
            </p>
            <p className="font-body text-secondary font-semibold">{reviews[current].author}</p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-secondary/10 hover:bg-secondary/20 flex items-center justify-center transition-colors" aria-label="Anterior">
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-secondary w-6" : "bg-secondary/30"}`} aria-label={`Reseña ${i + 1}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full bg-secondary/10 hover:bg-secondary/20 flex items-center justify-center transition-colors" aria-label="Siguiente">
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
