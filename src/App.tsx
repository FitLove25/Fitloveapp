import React from 'react';
import HeroSection from './components/HeroSection';
import ProblemSolution from './components/ProblemSolution';
import Difference from './components/Difference';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CoupleStories from './components/CoupleStories';
import Offer from './components/Offer';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <HeroSection />
      <ProblemSolution />
      <Difference />
      <HowItWorks />
      <Testimonials />
      <CoupleStories />
      <Offer />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;