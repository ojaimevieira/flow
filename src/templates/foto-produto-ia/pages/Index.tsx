import {
  Hero,
  Problems,
  Solution,
  Testimonials,
  Authority,
  Benefits,
  Urgency,
  Pricing,
  Guarantee,
  FAQ,
  FinalCTA,
  Footer
} from '../components';

export default function FotoProdutoIA() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Identification of Problem */}
      <Problems />
      
      {/* 3. Solution Presentation */}
      <Solution />
      
      {/* 4. Social Proof */}
      <Testimonials />
      
      {/* 5. Authority Presentation */}
      <Authority />
      
      {/* 6. Detailed Benefits */}
      <Benefits />
      
      {/* 7. Urgency/Scarcity */}
      <Urgency />
      
      {/* 8. Irresistible Offer */}
      <Pricing />
      
      {/* 9. Guarantee */}
      <Guarantee />
      
      {/* 10. FAQ */}
      <FAQ />
      
      {/* 11. Final Appeal */}
      <FinalCTA />
      
      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
