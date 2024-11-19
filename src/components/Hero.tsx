import React from 'react';
import { ArrowRight, Truck, Recycle, Settings } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 min-h-screen">
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Custom Pallet Solutions for Your Business
            </h1>
            <p className="mt-6 text-xl text-gray-200 max-w-2xl">
              Industry-leading pallet manufacturing with sustainable practices and custom solutions for any shipping need.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 text-lg font-semibold">
                Request Quote
                <ArrowRight size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-white/20 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1635348729202-063d5a049d30?auto=format&fit=crop&q=80"
                alt="Pallets in warehouse"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="flex gap-4 items-center">
                  <div className="text-4xl font-bold text-blue-900">25K+</div>
                  <div className="text-gray-600">Pallets Delivered Monthly</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <Truck className="text-orange-400 mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
            <p className="text-gray-200">Same-day shipping available for stock items</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <Settings className="text-orange-400 mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-2">Custom Solutions</h3>
            <p className="text-gray-200">Tailored to your specific requirements</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <Recycle className="text-orange-400 mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-2">Eco-Friendly</h3>
            <p className="text-gray-200">Sustainable materials and practices</p>
          </div>
        </div>
      </div>
    </div>
  );
}