// components/AdvantagesSection.tsx
"use client";

interface Advantage {
  title: string;
  description: string;
  icon: string;
}

const advantages: Advantage[] = [
  {
    title: "No Rust or Corrosion",
    description: "Unlike metal fencing, FRP won't rust even in coastal or chemical environments",
    icon: "🛡️",
  },
  {
    title: "Lower Lifetime Cost",
    description: "Eliminates painting and maintenance costs associated with metal fencing",
    icon: "💰",
  },
  {
    title: "Quick Installation",
    description: "Lightweight components reduce labor time and equipment needs",
    icon: "⚡",
  },
  {
    title: "Design Flexibility",
    description: "Can be molded into various profiles and customized colors",
    icon: "🎨",
  },
  {
    title: "Electrical Safety",
    description: "Non-conductive properties make it ideal for electrical facilities",
    icon: "⚠️",
  },
  {
    title: "Long Warranty",
    description: "Backed by our 10-year warranty against material defects",
    icon: "📜",
  },
];

export default function AdvantagesSection() {
  return (
    <div className="bg-gray-50 rounded-xl p-8 mb-16">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Advantages Over Traditional Materials
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {advantages.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-3xl mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
