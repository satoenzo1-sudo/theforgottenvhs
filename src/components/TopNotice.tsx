import { Button } from "@/components/ui/button";

const TopNotice = () => {
  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-section');
    if (faqSection) {
      faqSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="w-full pt-4 pb-4 flex justify-center fixed top-16 left-0 right-0 z-50 bg-transparent pointer-events-none">
      <div className="case-file px-6 py-3 rounded-lg shadow-xl border-2 border-evidence-gold/50 bg-carbon-black/80 backdrop-blur-md pointer-events-auto">
        <Button
          onClick={scrollToFAQ}
          className="bg-vhs-red hover:bg-vhs-red/80 text-aged-paper font-typewriter text-sm font-bold tracking-wider transition-all duration-300 hover:scale-105 border-2 border-evidence-gold/50 px-6 py-2"
        >
          🔍 Dúvidas? FAQ no final da página
        </Button>
      </div>
    </div>
  );
};

export default TopNotice;