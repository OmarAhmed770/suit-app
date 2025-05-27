import React from "react";
import { FaHeart, FaUser, FaShoppingBag, FaSearch } from "react-icons/fa";

const brands = [
  { name: "Brioni", img: "/brand-brioni.png" },
  { name: "DIOR", img: "/brand-dior.png" },
  { name: "Giorgio Armani", img: "/brand-armani.png" },
  { name: "Canali", img: "/brand-canali.png" },
];

const products = [
  {
    title: "Dark gray men Suit",
    price: 230.0,
    img: "/product-darkgray-men.png",
  },
  {
    title: "Beige Women Suit",
    price: 270.0,
    img: "/product-beige-women.png",
  },
  {
    title: "Gray kid Suit",
    price: 130.0,
    img: "/product-gray-kid.png",
  },
  {
    title: "Navy man Suit",
    price: 299.0,
    img: "/product-navy-men.png",
  },
];

export default function Home() {
  return (
    <div className="font-sans text-black bg-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-5 border-b shadow-sm">
        <h1 className="text-2xl font-bold">EVOO</h1>
        <nav className="flex space-x-8 text-lg">
          <a href="#">Women</a>
          <a href="#">Men</a>
          <a href="#">Kids</a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for product, categories or styles"
              className="border rounded pl-10 pr-4 py-2 w-72 focus:outline-none"
            />
            <FaSearch className="absolute top-3 left-3 text-gray-500" />
          </div>
          <FaHeart />
          <FaUser />
          <FaShoppingBag />
        </div>
      </header>

      {/* Main Layout */}
      <main className="max-w-screen-xl mx-auto px-8 py-12">
        {/* Promo Section */}
        <section className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-200 p-6 rounded shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-extrabold">SPECIAL OFFER</h2>
              <p className="mt-2 text-gray-700">You automatically lose the chances you don't take.</p>
              <h3 className="text-5xl text-red-600 font-black mt-4">50% OFF</h3>
            </div>
            <button className="mt-6 bg-black text-white px-4 py-2 rounded">ORDER NOW</button>
          </div>
          <div>
            <img src="/promo-man-suit.png" alt="Promo Man" className="rounded shadow-md w-full h-full object-cover" />
          </div>
          <div className="bg-black text-white p-6 rounded shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold">WINTER COLLECTION SALE</h2>
              <p className="mt-2 text-sm">Discover our exclusive collection. Tailored for elegance and style.</p>
            </div>
            <button className="mt-6 bg-white text-black px-4 py-2 rounded">BUY NOW</button>
          </div>
        </section>

        {/* Brand Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Brand</h2>
          <div className="grid grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white shadow rounded flex justify-center items-center h-24 border"
              >
                <img src={brand.img} alt={brand.name} className="max-h-full" />
              </div>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Popular Product</h2>
            <button className="bg-black text-white px-4 py-2 rounded">Shop All</button>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="border p-4 rounded shadow">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-60 object-cover rounded mb-4"
                />
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-2">blazer, pants, tie, shoes</p>
                <div className="flex justify-between items-center">
                  <button className="bg-black text-white px-4 py-1 rounded text-sm">Add to bag</button>
                  <span className="font-bold text-lg">${product.price.toFixed(1)}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
