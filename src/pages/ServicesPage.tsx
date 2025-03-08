import React from 'react';
import { Services } from '../components/Services';

export function ServicesPage() {
  return (
    <main className="pt-16 bg-techno-dark">
      <div className="fixed inset-0 bg-techno-grid opacity-20 pointer-events-none z-0"></div>
      <div className="fixed top-1/4 right-1/4 w-1/2 h-1/2 rounded-full bg-techno-glow blur-3xl opacity-20 pointer-events-none z-0"></div>
      <div className="relative z-10">
        <Services />
      </div>
    </main>
  );
}

export default ServicesPage; 