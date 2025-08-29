import HeroSection from "../components/HeroSection";
import ResultsSection from "../components/ResultsSection";
import MethodSection from "../components/MethodSection";
import BenefitsSection from "../components/BenefitsSection";
import CurriculumSection from "../components/CurriculumSection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import ToolsSection from "../components/ToolsSection";
import PricingSection from "../components/PricingSection";
import Footer from "@/shared/Footer";

const Template1Landing = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Results/Transformations Preview */}
      <ResultsSection />
      
      {/* Method/Process */}
      <MethodSection />
      
      {/* Benefits */}
      <BenefitsSection />
      
      {/* Curriculum */}
      <CurriculumSection />
      
      {/* Gallery/Success Stories */}
      <GallerySection />
      
      {/* Testimonials/Social Proof */}
      <TestimonialsSection />
      
      {/* Tools/Platforms */}
      <ToolsSection />
      
      {/* Pricing */}
      <PricingSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Template1Landing;
