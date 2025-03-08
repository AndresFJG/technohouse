import React from 'react';
import { ArrowRight, Play, Music } from 'lucide-react';
import { Button } from './Button';

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-techno-dark z-0"></div>
      <div className="absolute top-20 -right-52 w-96 h-96 bg-techno-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-techno-purple/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-0 xl:mt-28">
            <div className="sm:text-center lg:text-left lg:max-w-lg xl:max-w-xl lg:ml-0 lg:pl-0">
              <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-techno-purple/20 border border-techno-purple/40">
                <Music className="w-4 h-4 text-techno-purple-light mr-2 animate-pulse" />
                <span className="text-sm text-techno-purple-light">Techno Vibes for Digital Solutions</span>
              </div>


              <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="block">Transform Your</span>
                <span className="block">Business</span>
                <span className="block techno-gradient">With Modern</span>
                <span className="block techno-gradient leading-tight">Technology</span>
              </h1>


              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                We help businesses leverage cutting-edge technology to drive growth,
                improve efficiency, and stay ahead of the competition.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 sm:gap-6">
                <Button variant="techno" size="lg" className="flex items-center justify-center space-x-2" glow>
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center justify-center"
                >
                  <Play className="mr-2 w-5 h-5" />
                  <span>Watch Demo</span>
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700/30">
                <p className="text-sm text-gray-400">Trusted by innovative companies</p>
                <div className="mt-4 flex flex-wrap gap-8 opacity-70">
                  <span className="text-white font-mono text-sm">SONY</span>
                  <span className="text-white font-mono text-sm">MICROSOFT</span>
                  <span className="text-white font-mono text-sm">GOOGLE</span>
                  <span className="text-white font-mono text-sm">AMAZON</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Hero image/graphic */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mt-10 lg:mt-0 pr-4 lg:pr-0">
        <div className="relative h-64 sm:h-72 md:h-96 lg:h-full bg-techno-light rounded-l-2xl overflow-hidden shadow-techno transform rotate-1 lg:rotate-2">
          <div className="absolute inset-0 bg-techno-grid opacity-40"></div>
          <img
            className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-70"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Team working on technology solutions"
            loading="lazy"
          />
          {/* Overlay elements */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-techno-purple to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent to-techno-purple"></div>
          <div className="absolute top-4 right-4 w-20 h-20 border-2 border-techno-purple/40 rounded-lg"></div>
          <div className="absolute bottom-10 left-10 w-32 h-1 bg-techno-purple/60"></div>
        </div>
      </div>
    </div>
  );
}