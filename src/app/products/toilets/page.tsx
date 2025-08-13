import ProductDetail from "../components/ProductDetail";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductSpecs from "../components/ProductSpecs";
import AdvantagesSection from "../components/AdvantagesSection";
import CustomSolutionCTA from "../components/CustomSolutionCTA";
import RelatedProducts from "../components/RelatedProducts";
import SubProductGrid from "../components/SubProductGrid";

export default function FRPToiletsPage() {
  const features = [
    "Lightweight and portable design for easy relocation",
    "Corrosion-proof and weather-resistant for long service life",
    "Easy to clean, non-porous surfaces for improved hygiene",
    "Odor control system for enhanced user comfort",
    "UV stabilized to prevent fading in outdoor conditions",
    "Available with Indian or Western seat configurations",
    "Customizable with water tanks, washbasins, and ventilation",
    "Environmentally friendly, recyclable construction"
  ];

  const media: { type: "image" | "video"; src: string; alt?: string }[] = [
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755093006/factory/bmwneb3vijjcn4x57c0w.webp", alt: "FRP Toilet Main" },
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755093117/factory/ehknp5vpjjlga4n6exvd.png", alt: "FRP Toilet Interior" },
    { type: "video", src: "/videos/frp-toilet-demo.mp4", alt: "FRP Toilet Video" },
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755093171/factory/cblluz93owituycgjtnu.webp", alt: "FRP Toilet Exterior" }
  ];

  const specifications = [
    { name: "Material", value: "Fiber Reinforced Polymer (FRP)" },
    { name: "Dimensions", value: "Standard: 1.2m x 1.2m x 2.3m (customizable)" },
    { name: "Weight", value: "Approx. 60–100 kg depending on model" },
    { name: "Color Options", value: "Blue, green, white, or custom colors" },
    { name: "Type", value: "Indian or Western seat options" },
    { name: "Water Tank Capacity", value: "50–100 liters (optional)" },
    { name: "Ventilation", value: "Integrated air vents" },
    { name: "Maintenance", value: "Minimal maintenance required" }
  ];

  const applications = [
    "Construction sites",
    "Outdoor events and festivals",
    "Parks and public gardens",
    "Highway rest areas",
    "Remote villages and rural areas",
    "Disaster relief camps",
    "Tourist attractions",
    "Mining and industrial areas"
  ];

  const subProducts = [
    {
      name: "Single Unit Toilets",
      description: "Compact and easy to transport, ideal for small spaces",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755093006/factory/bmwneb3vijjcn4x57c0w.webp"
    },
    {
      name: "Twin Unit Toilets",
      description: "Two connected units for higher usage capacity",
      image: "/images/frp-twin-toilet.jpg"
    },
    {
      name: "Luxury Portable Toilets",
      description: "Premium models with enhanced comfort and aesthetics",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755093171/factory/cblluz93owituycgjtnu.webp"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <Breadcrumbs />

      <ProductDetail
        title="FRP Toilets"
        description="Portable, hygienic, and low-maintenance sanitary solutions."
        features={features}
        media={media}
      />

      <SubProductGrid heading="Toilet Type" items={subProducts} />

      <ProductSpecs specifications={specifications} applications={applications} />

      <AdvantagesSection />

      <CustomSolutionCTA
        title="Custom FRP Toilets"
        description="We provide portable FRP toilets designed to meet your sanitation needs for urban, rural, and event-based applications."
      />

      <RelatedProducts />
    </main>
  );
}
