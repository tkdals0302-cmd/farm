import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import PortfolioAndReviews from './components/PortfolioAndReviews';
import WorkScopeSection from './components/WorkScopeSection';
import InstagramSection from './components/InstagramSection';
import FAQSection from './components/FAQSection';
import QuoteFormSection from './components/QuoteFormSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <PortfolioAndReviews />
        <WorkScopeSection />
        <InstagramSection />
        <FAQSection />
        <QuoteFormSection />
      </main>
      <Footer />
    </div>
  );
}
