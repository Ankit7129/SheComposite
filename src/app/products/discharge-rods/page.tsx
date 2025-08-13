import ProductDetail from "../components/ProductDetail";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductSpecs from "../components/ProductSpecs";
import AdvantagesSection from "../components/AdvantagesSection";
import CustomSolutionCTA from "../components/CustomSolutionCTA";
import RelatedProducts from "../components/RelatedProducts";
import SubProductGrid from "../components/SubProductGrid";

export default function FRPDischargeRodsPage() {
  const features = [
    "High dielectric strength for maximum electrical insulation",
    "Lightweight for easy handling during emergency use",
    "Corrosion and moisture resistant",
    "Non-conductive for operator safety",
    "Durable FRP construction for long service life",
    "Available in multiple lengths and configurations",
    "Easy grip handles for secure usage",
    "Low maintenance and weatherproof design"
  ];

  const media: { type: "image" | "video"; src: string; alt?: string }[] = [
    { type: "image", src: "/images/frp-discharge-rod.jpg", alt: "FRP Discharge Rod Main" },
    { type: "image", src: "/images/frp-discharge-rod-1.jpg", alt: "FRP Discharge Rod Close-up" },
    { type: "video", src: "/videos/frp-discharge-rod-demo.mp4", alt: "FRP Discharge Rod Video" },
    { type: "image", src: "/images/frp-discharge-rod-2.jpg", alt: "FRP Discharge Rod in Use" }
  ];

  const specifications = [
    { name: "Material", value: "Fiber Reinforced Polymer (FRP)" },
    { name: "Dielectric Strength", value: "≥ 220 kV" },
    { name: "Length Options", value: "1.5m to 6m (customizable)" },
    { name: "Grip Type", value: "Rubberized non-slip handle" },
    { name: "Rod Diameter", value: "20mm - 40mm" },
    { name: "Surface Finish", value: "Smooth, moisture-resistant coating" },
    { name: "Compliance", value: "IEC and IS standards" },
    { name: "Life Expectancy", value: "15+ years under normal usage" }
  ];

  const applications = [
    "Electrical substations",
    "High-voltage power lines",
    "Switchgear operations",
    "Transformer maintenance",
    "Emergency electrical discharge",
    "Industrial electrical safety",
    "Railway power systems",
    "Utility maintenance"
  ];

  const subProducts = [
    {
      name: "Standard Discharge Rods",
      description: "For general high-voltage discharge operations",
      image: "/images/frp-standard-discharge-rod.jpg"
    },
    {
      name: "Telescopic Discharge Rods",
      description: "Adjustable length for flexible operation",
      image: "/images/frp-telescopic-discharge-rod.jpg"
    },
    {
      name: "Compact Discharge Rods",
      description: "Short length for confined spaces",
      image: "/images/frp-compact-discharge-rod.jpg"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <Breadcrumbs />

      <ProductDetail
        title="FRP Discharge Rods"
        description="High-voltage safety equipment designed for electrical discharge applications."
        features={features}
        media={media}
      />

      <SubProductGrid heading="Discharge Rod Type" items={subProducts} />

      <ProductSpecs specifications={specifications} applications={applications} />

      <AdvantagesSection />

      <CustomSolutionCTA
        title="Custom FRP Discharge Rods"
        description="We manufacture FRP discharge rods designed for high-voltage safety and durability."
      />

      <RelatedProducts />
    </main>
  );
}
