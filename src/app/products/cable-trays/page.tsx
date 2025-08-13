import Image from "next/image";
import Link from "next/link";

export default function CableTrayPage() {
  const features = [
    "Lightweight yet extremely durable",
    "Excellent corrosion resistance",
    "Non-conductive and non-magnetic",
    "Low maintenance requirements",
    "Easy to install and modify",
    "Long service life (25+ years)",
    "Fire-retardant options available",
    "Custom sizes and configurations"
  ];

  const specifications = [
    { name: "Material", value: "Fiber Reinforced Polymer" },
    { name: "Width", value: "50mm - 600mm (customizable)" },
    { name: "Depth", value: "50mm - 150mm (customizable)" },
    { name: "Length", value: "Standard 2m, 3m or custom lengths" },
    { name: "Color", value: "Standard grey, other colors available" },
    { name: "Load Capacity", value: "Up to 500kg/m (depends on configuration)" },
    { name: "Temperature Range", value: "-40°C to +80°C" },
    { name: "Standards", value: "Complies with relevant IS standards" }
  ];

  const applications = [
    "Industrial plants and factories",
    "Telecommunication infrastructure",
    "Power plants and substations",
    "Oil & gas facilities",
    "Chemical processing plants",
    "Water treatment plants",
    "Commercial buildings",
    "Transportation infrastructure"
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-3 h-3 mx-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/products" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">
                  Products
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-3 h-3 mx-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">FRP Cable Trays</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="mb-6 rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755090919/product/cable-tray/xnhugywh0nrw2tp8asss.jpg"
              alt="FRP Cable Tray"
              width={800}
              height={600}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border rounded-lg overflow-hidden cursor-pointer">
                <Image
                  src={`/images/frp-cable-tray-${item}.jpg`}
                  alt={`FRP Cable Tray ${item}`}
                  width={300}
                  height={200}
                  className="w-full h-24 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">FRP Cable Trays</h1>
          <p className="text-xl text-gray-600 mb-6">
            High-performance cable management solutions for demanding environments
          </p>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Request Pricing</h3>
            <p className="text-gray-600 mb-4">
              Contact us for competitive pricing on FRP cable trays in various sizes and configurations.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technical Specifications</h2>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="divide-y divide-gray-200">
                {specifications.map((spec, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {spec.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Typical Applications</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <ul className="space-y-3">
              {applications.map((application, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{application}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Our FRP Cable Trays?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Corrosion Proof",
              description: "Ideal for humid, coastal and chemical environments where metal trays fail",
              icon: "🌊"
            },
            {
              title: "Cost Effective",
              description: "Lower lifecycle costs despite higher initial investment than metal trays",
              icon: "💰"
            },
            {
              title: "Easy Installation",
              description: "Lightweight design reduces labor costs and installation time",
              icon: "⚡"
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need Custom FRP Cable Trays?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We manufacture FRP cable trays in custom sizes, colors and configurations to meet your specific project requirements.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Discuss Your Requirements
        </Link>
      </div>
    </main>
  );
}