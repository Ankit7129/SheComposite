import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  const categories = [
    {
      name: "FRP Manhole Covers",
      description: "Corrosion-resistant, durable covers for municipal, industrial, and residential applications.",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755092480/factory/mnqyookdu3mtxgtoufyv.png",
      link: "/products/manhole-covers",
    },
    {
      name: "FRP Cable Trays",
      description: "Lightweight, corrosion-resistant cable management systems for industrial and infrastructure projects.",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755090919/product/cable-tray/xnhugywh0nrw2tp8asss.jpg",
      link: "/products/cable-trays",
    },
    {
      name: "FRP Rebar",
      description: "High-strength, non-corrosive reinforcement bars for concrete structures.",
      image: "/images/frp-rebar.jpg",
      link: "/products/rebar",
    },
    {
      name: "FRP Benches",
      description: "Weather-resistant, maintenance-free seating solutions for parks, public areas, and institutions.",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755076548/production/completed/zro6ixqe91unqsietma1.jpg",
      link: "/products/benches",
    },
    {
      name: "FRP Toilets",
      description: "Portable, hygienic, and low-maintenance sanitary solutions.",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755093171/factory/cblluz93owituycgjtnu.webp",
      link: "/products/toilets",
    },
    {
      name: "FRP Gates & Fencing",
      description: "Secure, durable, and corrosion-resistant perimeter solutions.",
      image: "/images/frp-fencing.jpg",
      link: "/products/gates-fencing",
    },
    {
      name: "FRP Sheets & Panels",
      description: "Versatile cladding, partitioning, and surface protection panels.",
      image: "/images/frp-sheet.jpg",
      link: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755092635/factory/opsnj3rrnbnze7rjfxwv.png",
    },
    {
      name: "FRP Ladders",
      description: "Non-conductive, lightweight ladders for safe access in electrical and industrial environments.",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755090396/product/ladders/bksfwlq4w7hozcogtjd5.jpg",
      link: "/products/ladders",
    },
    {
      name: "FRP Discharge Rods",
      description: "High-voltage safety equipment designed for electrical discharge applications.",
      image: "/images/frp-discharge-rod.jpg",
      link: "/products/discharge-rods",
    },
    {
      name: "FRP Gratings",
      description: "Slip-resistant, corrosion-free flooring and walkway solutions.",
      image: "/images/frp-grating.jpg",
      link: "/products/gratings",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Page Intro */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our FRP Products</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          High-quality Fiber Reinforced Polymer (FRP) solutions for industrial, commercial, and infrastructure applications.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.link}
            className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-60">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 bg-white">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h2>
              <p className="text-gray-600">{category.description}</p>
              <div className="mt-4 text-blue-600 font-medium flex items-center group-hover:underline">
                View Products
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Major Products Section */}
      <div className="mt-16 bg-gray-50 rounded-xl p-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Major FRP Applications</h2>
        <p className="text-gray-700 mb-6">
          FRP finds wide applications in construction including reinforcing concrete structures, strengthening bridges,
          and rehabilitating aging infrastructure. Its use leads to extended service life and reduced maintenance costs.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Manhole Covers</li>
          <li>Benches</li>
          <li>Gates & Fencing</li>
          <li>Discharge Rods</li>
          <li>Sheets & Panels</li>
          <li>Gratings</li>
          <li>Ladders</li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Conclusion</h3>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Fiber Reinforced Polymers offer a compelling solution for enhancing structural strength in construction.
          Their remarkable properties, diverse applications, and ongoing advancements position FRP as a key player in
          the future of sustainable infrastructure.
        </p>
      </div>

      {/* Custom Solution CTA */}
      <div className="mt-16 bg-blue-100 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need a Custom FRP Solution?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We specialize in manufacturing FRP products tailored to your specific requirements and applications.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Request Custom Quote
        </Link>
      </div>
    </main>
  );
}
