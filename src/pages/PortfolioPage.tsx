import React from 'react';
import { Portfolio } from '../components/Portfolio';

export function PortfolioPage() {
  return (
    <main className="pt-16 bg-techno-dark">
      <div className="fixed inset-0 bg-techno-grid opacity-20 pointer-events-none z-0"></div>
      <div className="fixed bottom-1/4 left-1/4 w-1/3 h-1/3 rounded-full bg-techno-glow blur-3xl opacity-20 pointer-events-none z-0"></div>
      <div className="relative z-10">
        <Portfolio />
      </div>
    </main>
  );
}

export default PortfolioPage; 