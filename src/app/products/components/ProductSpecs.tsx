// components/ProductSpecs.tsx
"use client";

interface Specification {
  name: string;
  value: string;
}

interface ProductSpecsProps {
  specifications: Specification[];
  applications: string[];
}

export default function ProductSpecs({ specifications, applications }: ProductSpecsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-12 mb-16">
      {/* Technical Specifications */}
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

      {/* Common Applications */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Applications</h2>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <ul className="space-y-3">
            {applications.map((application, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{application}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
