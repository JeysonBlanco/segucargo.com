import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/home/Banner';
import ValueProposition from '../components/home/ValueProposition';
import Services from '../components/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Banner />
        <ValueProposition />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;