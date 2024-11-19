import React from 'react';
import ProductCard from './ProductCard';

export default function Products() {
  const products = [
    {
      title: "Standard Pallets",
      description: "Industry-standard pallets perfect for general warehousing and shipping needs.",
      image: "https://res.cloudinary.com/dkl2aj0wd/image/upload/v1732041256/wooden-pallet-manufacturing-1536x1024_c0tsvc.jpg",
      specs: ["48\" x 40\" Standard Size", "4-Way Entry", "2,500 lbs Capacity", "Heat Treated"]
    },
    {
      title: "Heavy Duty Pallets",
      description: "Reinforced pallets designed for maximum durability and heavy loads.",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80",
      specs: ["Custom Sizes Available", "6,000 lbs Capacity", "Reinforced Construction", "Weather Resistant"]
    },
    {
      title: "Export Pallets",
      description: "ISPM-15 compliant pallets for international shipping requirements.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
      specs: ["ISPM-15 Certified", "International Compliant", "Multiple Size Options", "Heat Treated"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of pallet solutions designed to meet any industrial need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}