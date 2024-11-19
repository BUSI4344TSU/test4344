import React from 'react';
import { Ruler, Package, Truck, Clock } from 'lucide-react';

export default function CustomSolutions() {
  const features = [
    {
      icon: <Ruler className="w-8 h-8 text-blue-500" />,
      title: "Custom Dimensions",
      description: "Tailored sizes to match your specific requirements and space constraints."
    },
    {
      icon: <Package className="w-8 h-8 text-blue-500" />,
      title: "Load Optimization",
      description: "Engineered for maximum efficiency in storage and transportation."
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-500" />,
      title: "Industry Specific",
      description: "Solutions designed for your industry's unique challenges."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Quick Turnaround",
      description: "Fast production and delivery to meet your deadlines."
    }
  ];

  return (
    <section id="custom" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Custom Solutions for Your Unique Needs
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We understand that one size doesn't fit all. Our custom pallet solutions are designed to meet your specific requirements while maximizing efficiency and reducing costs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586528116493-da5c7a9b1f30?auto=format&fit=crop&q=80"
                alt="Custom pallet manufacturing"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1">100%</div>
                  <div className="text-sm">Custom Built</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}