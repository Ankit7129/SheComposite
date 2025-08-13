import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755076548/production/completed/zro6ixqe91unqsietma1.jpg"
            alt="FRP Manufacturing"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 text-center">
          <div className="mb-4">
            <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              A Shree Hanumant Enterprises Company
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About She Composites</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Pioneering FRP innovation as part of the Shree Hanumant Enterprises family
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              She Composites, established as a subsidiary of <strong>Shree Hanumant Enterprises</strong>, 
              was founded to bring innovative Fiber Reinforced Polymer (FRP) solutions to the 
              construction and industrial sectors in India.
            </p>
            <p className="text-gray-700 mb-4">
              Leveraging our parent company's decades of experience in materials manufacturing, 
              we combine traditional expertise with cutting-edge composite technology to deliver 
              products that redefine durability and performance.
            </p>
            <p className="text-gray-700">
              From our manufacturing facility in Bihar, we serve clients across multiple 
              industries with custom FRP solutions tailored to their specific needs.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755093424/logo/n9cvtqgmfwfqnpqr9hne.png"
              alt="FRP Manufacturing Facility"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                icon: "💡",
                description: "Continually advancing FRP technology to solve complex engineering challenges"
              },
              {
                title: "Quality",
                icon: "🏆",
                description: "Uncompromising standards in materials and manufacturing processes"
              },
              {
                title: "Sustainability",
                icon: "🌱",
                description: "Developing eco-friendly composite solutions for a greener future"
              },
              {
                title: "Customer Focus",
                icon: "🤝",
                description: "Building long-term relationships through tailored solutions"
              },
              {
                title: "Heritage",
                icon: "🏛️",
                description: "Drawing on Shree Hanumant Enterprises' legacy of excellence"
              },
              {
                title: "Growth",
                icon: "📈",
                description: "Expanding the possibilities of FRP applications across industries"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      {/* <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Rahul Kumar",
              role: "Managing Director",
              bio: "20+ years experience in composite materials and manufacturing",
              img: "/images/leadership/rahul-kumar.jpg"
            },
            {
              name: "Priya Sharma",
              role: "Technical Director",
              bio: "FRP specialist with expertise in structural applications",
              img: "/images/leadership/priya-sharma.jpg"
            },
            {
              name: "Vikram Patel",
              role: "Operations Head",
              bio: "Oversees production and quality control processes",
              img: "/images/leadership/vikram-patel.jpg"
            }
          ].map((person, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-64 bg-gray-200 relative">
                <Image
                  src={person.img}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="text-blue-600 mb-2">{person.role}</p>
                <p className="text-gray-700">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Parent Company */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Part of Shree Hanumant Enterprises</h2>
              <p className="mb-4">
                She Composites operates under the umbrella of <strong>Shree Hanumant Enterprises</strong>, 
                a respected name in industrial manufacturing with a legacy spanning three decades.
              </p>
              <p className="mb-6">
                This relationship provides us with the resources, expertise, and market presence 
                to deliver exceptional FRP solutions while maintaining the agility of a specialized unit.
              </p>
              <a 
                href="/about-shree-hanumant" 
                className="inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                Learn About Our Parent Company
              </a>
            </div>
            <div className="bg-white p-1 rounded-lg shadow-xl">
              <Image
                src="https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755093726/frp/efgcglxhw9epdcjdsawi.webp"
                alt="Shree Hanumant Enterprises"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Manufacturing Capabilities</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">State-of-the-Art Facility</h3>
            <p className="text-gray-700 mb-4">
              Our 15,000 sq. ft. manufacturing unit in Bhojpur, Bihar is equipped with:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Automated FRP molding systems</li>
              <li>Precision cutting and finishing equipment</li>
              <li>Quality testing laboratory</li>
              <li>Dedicated R&D center</li>
              <li>Warehousing and logistics infrastructure</li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755093726/frp/efgcglxhw9epdcjdsawi.webp"
              alt="Manufacturing Facility"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center">Quality Assurance</h3>
          <p className="text-gray-700 text-center max-w-4xl mx-auto mb-6">
            All She Composites products undergo rigorous quality checks to meet international standards:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "ISO 9001:2015", desc: "Quality Management" },
              { name: "ASTM Standards", desc: "Material Testing" },
              { name: "IS Codes", desc: "Indian Standards" },
              { name: "In-House Checks", desc: "Multi-stage Inspection" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
                <div className="font-bold text-blue-600 mb-1">{item.name}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}