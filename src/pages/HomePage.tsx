import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Portfolio } from '../components/Portfolio';

export function HomePage() {
  return (
    <main className="bg-techno-dark">
      <Hero />
      <div className="relative z-10">
        <Services />
        <Portfolio />
        <About />
      </div>
    </main>
  );
}

export default HomePage; 