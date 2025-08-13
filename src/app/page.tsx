// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Announcement Banner */}
      <div className="bg-blue-800 text-white text-center py-2 px-4">
        <p className="text-sm md:text-base">
          She Composites is a subsidiary of <strong>Shree Hanumant Enterprises</strong>
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-gray-900 text-white flex items-center justify-center overflow-hidden">
        <video
          src="https://res.cloudinary.com/dwaa3gc2w/video/upload/v1723566800/WhatsApp_Video_2025-08-13_at_18.43.58_327f3470_snamqp.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center px-6">
          <div className="mb-4">
            <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              A Shree Hanumant Enterprises Company
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            She Composites
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Pioneers in Fiber Reinforced Polymer (FRP) solutions for construction and industrial applications
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow transition"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="bg-white text-gray-900 font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </section>

      {/* About FRP Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What is FRP?</h2>
          <p className="max-w-4xl mx-auto text-gray-700 text-lg">
            Fiber Reinforced Polymers are composite materials consisting of fibers such as carbon or glass embedded in a polymer matrix. This combination results in a lightweight, high-strength material with excellent corrosion resistance and durability.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "High Strength-to-Weight Ratio", description: "FRP offers exceptional strength while being lightweight" },
            { title: "Corrosion Resistance", description: "Ideal for harsh environments and chemical exposure" },
            { title: "Design Flexibility", description: "Can be molded into complex shapes for diverse applications" },
          ].map((feature, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Applications Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FRP Applications</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755093726/frp/efgcglxhw9epdcjdsawi.webp"
              alt="FRP in Construction"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Construction & Infrastructure</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Reinforcing concrete structures</li>
              <li>Strengthening bridges</li>
              <li>Rehabilitating aging infrastructure</li>
              <li>Toilet units and public utilities</li>
              <li>Planter boxes and landscape elements</li>
            </ul>
          </div>
        </div>
      </section>
          {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Why Choose SheComposites?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Trusted Subsidiary", description: "Part of Shree Hanumant Enterprises, ensuring reliability and legacy.", icon: "🏢" },
              { title: "High-Quality Materials", description: "FRP products designed for maximum strength and durability.", icon: "🛠️" },
              { title: "Tailored Solutions", description: "Custom sizes, colors, and configurations for every project.", icon: "🎯" },
              { title: "Corrosion & Chemical Resistant", description: "Built to withstand harsh environments.", icon: "🌊" },
              { title: "Expert Engineering Support", description: "Technical guidance from FRP specialists.", icon: "📐" },
              { title: "Sustainable & Lightweight", description: "Eco-friendly materials that reduce structural loads.", icon: "♻️" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom FRP Solutions</h2>
          <p className="mb-6 max-w-2xl mx-auto text-lg">
            We manufacture high-quality FRP products tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
            >
              Get a Quote
            </Link>
            <Link
              href="tel:+9471949455"
              className="border-2 border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Call Us: +91 9471949455
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Location</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">About Us</h3>
              <p className="text-gray-700">
                She Composites is a proud subsidiary of <strong>Shree Hanumant Enterprises</strong>, 
                bringing innovative FRP solutions to the construction industry.
              </p>
            </div>
            <h3 className="text-xl font-semibold mb-2">Registered Office</h3>
            <p className="text-gray-700">
              In front of Patna Old Museum,<br />
              C/o Bhojpur Misthan, Budh Marg,<br />
              Patna-1 (Bihar)
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-2">Manufacturing Unit</h3>
            <p className="text-gray-700">
              Village-Chakwath, P.S-Bihiya,<br />
              Dist-Bhojpur-802183 (Bihar)
            </p>
            <p className="mt-4"><strong>Email:</strong> contact@shecomposites.com</p>
          </div>
          <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1798.8944899465512!2d85.13287185629872!3d25.61192741300227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDM2JzQyLjkiTiA4NcKwMDgnMDMuMCJF!5e0!3m2!1sen!2sin!4v1755082196720!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

     
    </main>
  );
}