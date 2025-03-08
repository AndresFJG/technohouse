import React from 'react';
import { Zap, Code, Server, Cpu, Database, Globe } from 'lucide-react';

export function About() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-techno-dark to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center relative z-10">
          <div className="inline-block">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white sm:text-4xl techno-border pb-2">
              About Us
            </h2>
            <div className="h-0.5 w-1/3 bg-techno-purple mx-auto"></div>
          </div>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
            We are a team of experienced professionals who are dedicated to providing the best solutions for your business.
          </p>
        </div>
      </div>
    </section>
  );
}