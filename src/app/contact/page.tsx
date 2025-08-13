import Image from "next/image";

export default function Contact() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="relative bg-blue-600 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755076548/production/completed/zro6ixqe91unqsietma1.jpg"
            alt="FRP Contact Background"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contact She Composites</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            We’re here to discuss your FRP requirements and offer tailored solutions.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Left - Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <p className="mb-6 text-gray-700">
            She Composites, a subsidiary of Shree Hanumant Enterprises, delivers
            high-performance FRP products for industrial and commercial applications.
          </p>
          <div className="space-y-4">
            <p><strong>Address:</strong> [Your Full Address Here]</p>
            <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
            <p><strong>Email:</strong> contact@shecomposites.com</p>
          </div>
          <div className="mt-6">
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1798.8944899465512!2d85.13287185629872!3d25.61192741300227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDM2JzQyLjkiTiA4NcKwMDgnMDMuMCJF!5e0!3m2!1sen!2sin!4v1755082196720!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

          </div>
        </div>

        {/* Right - Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Phone</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+91-XXXXXXXXXX"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
