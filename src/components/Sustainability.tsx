import React from 'react';
import { Leaf, Recycle, TreePine, Factory } from 'lucide-react';

export default function Sustainability() {
  const initiatives = [
    {
      icon: <TreePine className="w-12 h-12 text-green-600" />,
      title: "Sustainable Sourcing",
      description: "All our wood comes from certified sustainable forests with responsible harvesting practices.",
      stat: "100%",
      statLabel: "Certified Wood"
    },
    {
      icon: <Recycle className="w-12 h-12 text-green-600" />,
      title: "Recycling Program",
      description: "We recycle and repurpose used pallets, reducing waste and environmental impact.",
      stat: "50K+",
      statLabel: "Pallets Recycled Monthly"
    },
    {
      icon: <Factory className="w-12 h-12 text-green-600" />,
      title: "Green Manufacturing",
      description: "Our facilities use renewable energy and optimize processes to minimize waste.",
      stat: "-40%",
      statLabel: "Carbon Footprint"
    },
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      title: "Zero Waste Initiative",
      description: "Wood scraps are converted into mulch or biofuel, ensuring nothing goes to waste.",
      stat: "0%",
      statLabel: "Landfill Waste"
    }
  ];

  return (
    <section id="sustainability" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Environmental Commitment</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Sustainable Practices for a Better Future
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our commitment to sustainability goes beyond just manufacturing. We're dedicated to creating a positive environmental impact through every aspect of our operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="mt-auto">
                  <div className="text-3xl font-bold text-green-600">{item.stat}</div>
                  <div className="text-sm text-gray-500">{item.statLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="lg:grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Environmental Impact</h3>
              <p className="text-gray-600 mb-6">
                Through our sustainable practices and commitment to environmental stewardship, we've achieved significant milestones in reducing our ecological footprint while maintaining the highest quality standards in pallet manufacturing.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  FSC and PEFC certified wood suppliers
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Solar-powered manufacturing facilities
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Water recycling and conservation programs
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Electric vehicle delivery fleet
                </li>
              </ul>
            </div>
            <div className="relative h-96 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
                alt="Sustainable forest"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}