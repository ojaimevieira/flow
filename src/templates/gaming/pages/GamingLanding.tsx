import Hero from "../components/Hero";
import Problems from "../components/Problems";
import Features from "../components/Features";
import Categories from "../components/Categories";
import CourseContent from "../components/CourseContent";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "@/shared/Footer";

const GamingLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Problems />
      <Features />
      <Categories />
      <CourseContent />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default GamingLanding;
