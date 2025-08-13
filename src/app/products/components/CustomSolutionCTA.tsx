// components/CustomSolutionCTA.tsx
"use client";

import Link from "next/link";

interface CustomSolutionCTAProps {
  title?: string;
  description?: string;
  contactLink?: string;
  phone?: string;
}

export default function CustomSolutionCTA({
  title = "Custom FRP Gates & Fencing Solutions",
  description = "Our engineering team can design and manufacture FRP gates and fencing systems tailored to your specific requirements, including security features, dimensions, and aesthetic preferences.",
  contactLink = "/contact",
  phone = "+919471949455",
}: CustomSolutionCTAProps) {
  return (
    <div className="bg-blue-50 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{description}</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href={contactLink}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Discuss Your Project
        </Link>
        <Link
          href={`tel:${phone}`}
          className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
        >
          Call: {phone}
        </Link>
      </div>
    </div>
  );
}
