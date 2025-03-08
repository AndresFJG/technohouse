import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export function Layout() {
  return (
    <div className="min-h-screen bg-techno-dark text-white overflow-x-hidden relative">
      {/* Background effects */}
      <div className="fixed inset-0 bg-techno-grid opacity-20 pointer-events-none z-0"></div>
      <div className="fixed top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-techno-glow blur-3xl opacity-20 pointer-events-none z-0"></div>
      <div className="fixed top-3/4 right-1/4 w-1/3 h-1/3 rounded-full bg-techno-glow blur-3xl opacity-10 pointer-events-none z-0"></div>
      
      <Navbar />
      <div className="w-full relative z-10">
        <Outlet />
        <footer className="bg-gray-900/80 backdrop-blur-sm text-white py-8 text-center text-sm border-t border-techno-purple/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center">
              <p className="techno-gradient font-bold text-lg mb-2">TECHSOL</p>
              <p className="text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
              <div className="flex space-x-6 mt-4">
                <a href="#" className="text-gray-400 hover:text-techno-purple transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-techno-purple transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-techno-purple transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Layout; 