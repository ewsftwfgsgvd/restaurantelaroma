import HeroSection from "@/components/HeroSection";
import EssenceSection from "@/components/EssenceSection";
import StarDishesSection from "@/components/StarDishesSection";
import ExperienceSection from "@/components/ExperienceSection";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import MenuPreviewSection from "@/components/MenuPreviewSection";
import LocationSection from "@/components/LocationSection";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EssenceSection />
      <StarDishesSection />
      <ExperienceSection />
      <ReviewsSection />
      <CTASection />
      <MenuPreviewSection />
      <LocationSection />
      <FooterSection />
      <FloatingButtons />
    </div>
  );
};

export default Index;
