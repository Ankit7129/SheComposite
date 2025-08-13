import ProductDetail from "../components/ProductDetail";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductSpecs from "../components/ProductSpecs";
import AdvantagesSection from "../components/AdvantagesSection";
import CustomSolutionCTA from "../components/CustomSolutionCTA";
import RelatedProducts from "../components/RelatedProducts";
import SubProductGrid from "../components/SubProductGrid";

export default function FRPGratingsPage() {
  const features = [
    "Excellent corrosion resistance in harsh environments",
    "High strength-to-weight ratio for safe load bearing",
    "Slip-resistant surface for improved safety",
    "Lightweight for easy installation and handling",
    "Non-conductive and fire-retardant properties",
    "Low maintenance and long service life",
    "Available in various colors and sizes",
    "UV stabilized for outdoor applications"
  ];

  const media: { type: "image" | "video"; src: string; alt?: string }[] = [
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755107059/frp/el4jr972pjsyalwdq4uh.jpg", alt: "FRP Grating Main" },
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755106829/frp/neuny5n1klo5ubhastze.webp", alt: "FRP Grating Close-up" },
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755091943/factory/enbxs2nl1bil1sw7fctx.png", alt: "FRP Grating Video" },
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755107182/frp/jaowqhhf5sbsfwlbbh3n.jpg", alt: "FRP Grating in Industrial Use" }
  ];

  const specifications = [
    { name: "Material", value: "Fiber Reinforced Polymer (FRP)" },
    { name: "Load Capacity", value: "Up to 5,000 kg/m² (varies by type)" },
    { name: "Panel Sizes", value: "Customizable (standard: 1.22m x 3.66m)" },
    { name: "Thickness Options", value: "25mm, 38mm, 50mm" },
    { name: "Surface Type", value: "Concave, grit top, or smooth" },
    { name: "Color Options", value: "Green, yellow, grey, or custom" },
    { name: "Compliance", value: "Meets OSHA and ANSI safety standards" },
    { name: "Life Expectancy", value: "25+ years with minimal maintenance" }
  ];

  const applications = [
    "Industrial walkways and platforms",
    "Chemical plant flooring",
    "Marine docks and decks",
    "Cooling tower walkways",
    "Oil and gas facilities",
    "Food and beverage plants",
    "Public infrastructure flooring",
    "Offshore platforms"
  ];

  const subProducts = [
    {
      name: "Molded FRP Gratings",
      description: "Corrosion-resistant, durable molded gratings for various industries",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755107059/frp/el4jr972pjsyalwdq4uh.jpg"
    },
    {
      name: "Pultruded FRP Gratings",
      description: "High-strength pultruded gratings for heavy-duty applications",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755107469/frp/j6jdfd30djy3efxhiyiu.jpg"
    },
    {
      name: "Custom FRP Gratings",
      description: "Gratings designed and manufactured to client specifications",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755107182/frp/jaowqhhf5sbsfwlbbh3n.jpg"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <Breadcrumbs />

      <ProductDetail
        title="FRP Gratings"
        description="Slip-resistant, corrosion-free flooring and walkway solutions for industrial and commercial use."
        features={features}
        media={media}
      />

      <SubProductGrid heading="Grating Type" items={subProducts} />

      <ProductSpecs specifications={specifications} applications={applications} />

      <AdvantagesSection />

      <CustomSolutionCTA
        title="Custom FRP Gratings"
        description="We design and manufacture FRP gratings to suit your specific safety, durability, and performance requirements."
      />

      <RelatedProducts />
    </main>
  );
}
