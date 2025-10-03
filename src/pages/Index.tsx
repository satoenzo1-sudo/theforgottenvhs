import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CaseHistorySection from '@/components/CaseHistorySection';
import VideoTestimonialSection from '@/components/VideoTestimonialSection';
import CTASection from '@/components/CTASection';
import HowItWorksSection from '@/components/HowItWorksSection';
import IncludedSection from '@/components/IncludedSection';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import EvidenceVisualSection from '@/components/EvidenceVisualSection';
import CasePreviewSection from '@/components/CasePreviewSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import TopNotice from '@/components/TopNotice';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <TopNotice />
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-background via-case-file-bg to-background">
      <HeroSection />
      <CaseHistorySection />
      <VideoTestimonialSection />
      <CTASection />
      <HowItWorksSection />
      <IncludedSection />
      <TargetAudienceSection />
      <EvidenceVisualSection />
      <CasePreviewSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
      </div>
    </>
  );
};

export default Index;
