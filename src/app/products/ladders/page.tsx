import ProductDetail from "../components/ProductDetail";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductSpecs from "../components/ProductSpecs";
import AdvantagesSection from "../components/AdvantagesSection";
import CustomSolutionCTA from "../components/CustomSolutionCTA";
import RelatedProducts from "../components/RelatedProducts";
import SubProductGrid from "../components/SubProductGrid";

export default function FRPLaddersPage() {
  const features = [
    "Non-conductive for electrical safety",
    "Lightweight for easy portability",
    "High strength-to-weight ratio",
    "Corrosion and chemical resistant",
    "Slip-resistant rungs for safety",
    "Available in various configurations",
    "UV stabilized for outdoor applications",
    "Low maintenance and long service life"
  ];

  const media: { type: "image" | "video"; src: string; alt?: string }[] = [
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755090342/product/ladders/ad7xpu0wrnngowda0wfp.jpg", alt: "FRP Ladder Main" },
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755090396/product/ladders/bksfwlq4w7hozcogtjd5.jpg", alt: "FRP Ladder Close-up" },
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755090711/product/ladders/t5o2zm568qxwe48n8jpj.png", alt: "FRP Ladder Video" },
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755090479/product/ladders/dzqbok43wdwt9exodn8x.webp", alt: "FRP Ladder Application" }
  ];

  const specifications = [
    { name: "Material", value: "Fiber Reinforced Polymer (FRP)" },
    { name: "Ladder Types", value: "Step ladder, extension ladder, platform ladder" },
    { name: "Load Capacity", value: "Up to 150 kg (customizable)" },
    { name: "Height Options", value: "1m to 10m (customizable)" },
    { name: "Color Options", value: "Yellow, orange, or custom colors" },
    { name: "Surface Finish", value: "Non-slip rungs and side rails" },
    { name: "Temperature Resistance", value: "-40°C to +120°C" },
    { name: "Life Expectancy", value: "20+ years with minimal maintenance" }
  ];

  const applications = [
    "Electrical maintenance work",
    "Industrial access solutions",
    "Telecommunication tower climbing",
    "Chemical plant operations",
    "Marine and offshore platforms",
    "Warehouse and storage access",
    "Construction site safety",
    "Emergency rescue operations"
  ];

  const subProducts = [
    {
      name: "Step Ladders",
      description: "Portable ladders with self-supporting frames",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755090342/product/ladders/ad7xpu0wrnngowda0wfp.jpg"
    },
    {
      name: "Extension Ladders",
      description: "Adjustable height ladders for extended reach",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755090396/product/ladders/bksfwlq4w7hozcogtjd5.jpg"
    },
    {
      name: "Platform Ladders",
      description: "Stable ladders with a platform for long-duration work",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755108840/frp/bp6qjzvkkwmxtm0w7smd.jpg"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <Breadcrumbs />

      <ProductDetail
        title="FRP Ladders"
        description="Non-conductive, lightweight ladders for safe access in electrical and industrial environments."
        features={features}
        media={media}
      />

      <SubProductGrid heading="Ladder Type" items={subProducts} />

      <ProductSpecs specifications={specifications} applications={applications} />

      <AdvantagesSection />

      <CustomSolutionCTA
        title="Custom FRP Ladders"
        description="We design and manufacture FRP ladders tailored for industrial, electrical, and safety applications."
      />

      <RelatedProducts />
    </main>
  );
}
