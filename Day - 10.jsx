// App.jsx
import React from "react";

// ✅ Sample product list with working images
const products = [
  { id: 1, name: "Wireless Headphones", price: "$59", image: "https://picsum.photos/200?random=1" },
  { id: 2, name: "Smart Watch", price: "$99", image: "https://picsum.photos/200?random=2" },
  { id: 3, name: "Gaming Mouse", price: "$39", image: "https://picsum.photos/200?random=3" },
];

// ✅ Product Card Component
function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 hover:scale-105 transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.price}</p>
      <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
        Buy Now
      </button>
    </div>
  );
}

// ✅ Main App
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Product Card List</h1>

      {/* Grid layout for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
