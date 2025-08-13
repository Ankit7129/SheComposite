import Image from "next/image";

export default function Contact() {
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
               <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact She Composites</h1>
               <p className="text-lg md:text-xl max-w-2xl mx-auto">
                 Pioneering FRP innovation as part of the Shree Hanumant Enterprises family
               </p>
             </div>
           </section>

      {/* Contact Info & Form */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Left - Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-blue-800">
              <strong>She Composites</strong> is a proud subsidiary of <strong>Shree Hanumant Enterprises</strong>, 
              delivering high-performance FRP products for industrial and commercial applications.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Registered Office</h3>
                <p className="text-gray-700">
                  In front of Patna Old Museum,<br />
                  C/o Bhojpur Misthan, Budh Marg,<br />
                  Patna-1 (Bihar)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-700">
                  +91 9471949455<br />
                  (Monday - Saturday, 10AM - 5PM)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-700">
                  contact@shecomposites.com<br />
                  (Typically respond within 24 hours)
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-2">Manufacturing Unit</h3>
            <p className="text-gray-700">
              Village-Chakwath, P.S-Bihiya,<br />
              Dist-Bhojpur-802183 (Bihar)
            </p>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    required
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
              </div>
              <div>
                <label className="block font-medium mb-1">Subject</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Product Inquiry</option>
                  <option>Technical Support</option>
                  <option>Partnership Opportunity</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">Message <span className="text-red-500">*</span></label>
                <textarea
                  rows={4}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Business Hours</h3>
            <p className="text-gray-700 mb-2">Monday - Saturday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-700">Sunday: Closed</p>
          </div>
        </div>
      </section>

      {/* Full-width Map */}
      <section className="w-full h-[400px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1798.8944899465512!2d85.13287185629872!3d25.61192741300227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDM2JzQyLjkiTiA4NcKwMDgnMDMuMCJF!5e0!3m2!1sen!2sin!4v1755082196720!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}