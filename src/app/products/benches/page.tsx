import ProductDetail from "../components/ProductDetail";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductSpecs from "../components/ProductSpecs";
import AdvantagesSection from "../components/AdvantagesSection";
import CustomSolutionCTA from "../components/CustomSolutionCTA";
import RelatedProducts from "../components/RelatedProducts";
import SubProductGrid from "../components/SubProductGrid";

export default function FRPBenchesPage() {
  const features = [
    "Weather-resistant and suitable for all outdoor conditions",
    "Corrosion-proof and maintenance-free design",
    "High strength-to-weight ratio for durability and easy handling",
    "UV stabilized for long-lasting color and finish",
    "Non-conductive, safe for public spaces",
    "Available in multiple colors and styles",
    "Eco-friendly and recyclable materials",
    "Custom designs for parks, schools, and public areas"
  ];

  const media: { type: "image" | "video"; src: string; alt?: string }[] = [
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755076548/production/completed/zro6ixqe91unqsietma1.jpg", alt: "FRP Bench Main" },
    { type: "image", src: "/images/frp-bench-1.jpg", alt: "FRP Bench Design 1" },
    { type: "video", src: "/videos/frp-bench-demo.mp4", alt: "FRP Bench Video" },
    { type: "image", src: "/images/frp-bench-2.jpg", alt: "FRP Bench Design 2" }
  ];

  const specifications = [
    { name: "Material", value: "Fiber Reinforced Polymer (FRP)" },
    { name: "Length Options", value: "1.2m, 1.5m, 1.8m, or custom sizes" },
    { name: "Seating Capacity", value: "2–5 persons" },
    { name: "Color Options", value: "Standard brown, green, blue, or custom colors" },
    { name: "Weight Capacity", value: "Up to 500 kg" },
    { name: "Surface Finish", value: "Smooth or textured" },
    { name: "Installation", value: "Freestanding or anchored" },
    { name: "Maintenance", value: "No painting or polishing required" }
  ];

  const applications = [
    "Public parks and gardens",
    "School and college campuses",
    "Hospital and healthcare facilities",
    "Shopping centers and malls",
    "Residential communities",
    "Industrial complexes",
    "Seaside promenades",
    "Sports complexes and stadiums"
  ];

  const subProducts = [
    {
      name: "Park Benches",
      description: "Classic park bench design with ergonomic seating",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755076548/production/completed/zro6ixqe91unqsietma1.jpg"
    },
    {
      name: "Backless Benches",
      description: "Space-saving design for public and commercial areas",
      image: "/images/frp-backless-bench.jpg"
    },
    {
      name: "Designer Benches",
      description: "Custom shapes and colors to enhance aesthetics",
      image: "/images/frp-designer-bench.jpg"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <Breadcrumbs />

      <ProductDetail
        title="FRP Benches"
        description="Weather-resistant, maintenance-free seating solutions for parks, public areas, and institutions."
        features={features}
        media={media}
      />

      <SubProductGrid heading="Bench Type" items={subProducts} />

      <ProductSpecs specifications={specifications} applications={applications} />

      <AdvantagesSection />

      <CustomSolutionCTA
        title="Custom FRP Benches"
        description="We manufacture FRP benches tailored to your design, color, and size requirements for any public or private setting."
      />

      <RelatedProducts />
    </main>
  );
}
