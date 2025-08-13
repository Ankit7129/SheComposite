import ProductDetail from "../components/ProductDetail";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductSpecs from "../components/ProductSpecs";
import AdvantagesSection from "../components/AdvantagesSection";
import CustomSolutionCTA from "../components/CustomSolutionCTA";
import RelatedProducts from "../components/RelatedProducts";
import SubProductGrid from "../components/SubProductGrid";

export default function FRPSheetsPanelsPage() {
  const features = [
    "Lightweight yet high-strength construction",
    "Excellent corrosion and chemical resistance",
    "UV stabilized for long-term outdoor use",
    "Non-conductive and fire-retardant options available",
    "Low maintenance and easy to clean",
    "Custom sizes, thicknesses, and colors available",
    "High impact resistance for durability",
    "Smooth or textured finishes to suit applications"
  ];

  const media: { type: "image" | "video"; src: string; alt?: string }[] = [
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755091675/factory/f6joxvaguk5u6vamqvbg.png", alt: "FRP Sheets & Panels Main" },
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755091592/factory/tdem12omrk2mlyktr5uv.png", alt: "FRP Sheet Close-up" },
    { type: "video", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755092635/factory/opsnj3rrnbnze7rjfxwv.png", alt: "FRP Sheets & Panels Video" },
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755091508/factory/shwrov0pfivbbqog6wld.png", alt: "FRP Sheet Application" }
  ];

  const specifications = [
    { name: "Material", value: "Fiber Reinforced Polymer (FRP)" },
    { name: "Thickness Range", value: "1mm to 50mm (customizable)" },
    { name: "Panel Size", value: "Standard 1.2m x 2.4m or custom sizes" },
    { name: "Color Options", value: "White, grey, green, or custom" },
    { name: "Surface Finish", value: "Smooth, textured, or patterned" },
    { name: "Temperature Resistance", value: "-40°C to +120°C" },
    { name: "Fire Rating", value: "Available with Class 1 or Class 2 fire retardancy" },
    { name: "Life Expectancy", value: "20+ years with minimal maintenance" }
  ];

  const applications = [
    "Wall cladding and partitioning",
    "Chemical storage area lining",
    "Food processing facility walls",
    "Marine and coastal infrastructure",
    "Cold storage and cleanroom panels",
    "Roof and ceiling panels",
    "Industrial flooring underlays",
    "Architectural facades"
  ];

  const subProducts = [
    {
      name: "Flat FRP Panels",
      description: "Smooth, lightweight panels for general applications",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755091592/factory/tdem12omrk2mlyktr5uv.png"
    },
    {
      name: "Corrugated FRP Panels",
      description: "Profiled panels for roofing and siding applications",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755091745/factory/unhpib4axrzb0ja47flj.webp"
    },
    {
      name: "Textured FRP Sheets",
      description: "Anti-slip and decorative finishes for specific environments",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755091675/factory/f6joxvaguk5u6vamqvbg.png"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <Breadcrumbs />

      <ProductDetail
        title="FRP Sheets & Panels"
        description="Versatile cladding, partitioning, and surface protection panels."
        features={features}
        media={media}
      />

      <SubProductGrid heading="Sheet & Panel Type" items={subProducts} />

      <ProductSpecs specifications={specifications} applications={applications} />

      <AdvantagesSection />

      <CustomSolutionCTA
        title="Custom FRP Sheets & Panels"
        description="We manufacture FRP sheets and panels tailored to your requirements for industrial, commercial, and architectural applications."
      />

      <RelatedProducts />
    </main>
  );
}
