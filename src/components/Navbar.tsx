import React from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-900">PalletPro</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-700 hover:text-blue-900">Products</a>
            <a href="#custom" className="text-gray-700 hover:text-blue-900">Custom Solutions</a>
            <a href="#sustainability" className="text-gray-700 hover:text-blue-900">Sustainability</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900">Contact</a>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors flex items-center gap-2">
              <Phone size={18} />
              Get Quote
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#products" className="block px-3 py-2 text-gray-700">Products</a>
            <a href="#custom" className="block px-3 py-2 text-gray-700">Custom Solutions</a>
            <a href="#sustainability" className="block px-3 py-2 text-gray-700">Sustainability</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700">Contact</a>
            <button className="w-full bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
              <Phone size={18} />
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}