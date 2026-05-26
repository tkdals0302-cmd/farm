import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import FloatingCTA from '../../components/feature/FloatingCTA';
import HeroSection from './components/HeroSection';
import PortfolioAndReviews from './components/PortfolioAndReviews';
import WhyUs from './components/WhyUs';
import Scope from './components/Scope';
import Reviews from './components/Reviews';
import SpacePriceCalculator from './components/SpacePriceCalculator';
import AboutDetailline from './components/AboutDetailline';
import FAQSection from './components/FAQSection';
import QuoteFormSection from './components/QuoteFormSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutDetailline />
        <PortfolioAndReviews />
        <WhyUs />
        <Scope />
        <Reviews />
        <SpacePriceCalculator />
        <FAQSection />
        <QuoteFormSection />
      </main>
      <FloatingCTA />
      <Footer />
    </div>
  );
}
