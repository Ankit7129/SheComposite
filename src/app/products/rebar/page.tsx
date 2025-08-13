import ProductDetail from "../components/ProductDetail";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductSpecs from "../components/ProductSpecs";
import AdvantagesSection from "../components/AdvantagesSection";
import CustomSolutionCTA from "../components/CustomSolutionCTA";
import RelatedProducts from "../components/RelatedProducts";
import SubProductGrid from "../components/SubProductGrid";

export default function FRPRebarPage() {
  const features = [
    "High tensile strength for superior concrete reinforcement",
    "Corrosion-resistant – ideal for marine and chemical environments",
    "Lightweight for easier handling and reduced transportation costs",
    "Non-conductive – safe for electrical applications",
    "Thermal and electrical insulation properties",
    "Magnetically inert – does not interfere with sensitive equipment",
    "Long service life with no rusting or degradation",
    "Available in custom diameters and lengths"
  ];

  const media: { type: "image" | "video"; src: string; alt?: string }[] = [
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755105612/frp/cqwszqnffz7bu1oo3dwm.webp", alt: "FRP Rebar Main" },
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755103224/frp/scbe0isrwfv79l9pcrff.png", alt: "FRP Rebar Close-up" },
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755105447/frp/h0dxfinwqxxzvdjr77sr.webp", alt: "FRP Rebar Installation Video" },
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755103400/frp/impebfvmh4fp9eryhcpz.png", alt: "FRP Rebar in Concrete" }
  ];

  const specifications = [
    { name: "Material", value: "Glass Fiber Reinforced Polymer (GFRP)" },
    { name: "Tensile Strength", value: "≥ 1000 MPa" },
    { name: "Elastic Modulus", value: "45–55 GPa" },
    { name: "Diameter Range", value: "6mm – 40mm" },
    { name: "Density", value: "1.9 – 2.1 g/cm³" },
    { name: "Thermal Expansion", value: "Similar to concrete" },
    { name: "Surface Type", value: "Sand-coated or ribbed for bonding" },
    { name: "Service Life", value: "50+ years" }
  ];

  const applications = [
    "Bridge decks and marine structures",
    "Waterfront and coastal construction",
    "Tunnels and underground structures",
    "Parking structures and garages",
    "Chemical and wastewater plants",
    "Magnetic-sensitive areas (MRI rooms)",
    "Roadways and pavements",
    "Precast concrete products"
  ];

  const subProducts = [
    {
      name: "Straight Rebar",
      description: "Standard straight FRP rebar for general concrete reinforcement",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755105612/frp/cqwszqnffz7bu1oo3dwm.webp"
    },
    {
      name: "Bent Rebar",
      description: "Pre-bent FRP rebar for structural corners and joints",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755109009/frp/vbesm6ww3xk0lhnjca2z.webp"
    },
    {
      name: "Spiral Rebar",
      description: "Helical FRP reinforcement for columns and round structures",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755106037/frp/mb4elhki3adceehc3lzd.webp"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <Breadcrumbs />

      <ProductDetail
        title="FRP Rebar"
        description="High-strength, non-corrosive reinforcement bars for concrete structures."
        features={features}
        media={media}
      />

      <SubProductGrid heading="Rebar Type" items={subProducts} />

      <ProductSpecs specifications={specifications} applications={applications} />

      <AdvantagesSection />

      <CustomSolutionCTA
        title="Custom FRP Rebar Solutions"
        description="We supply FRP rebars tailored to your structural requirements, ensuring durability and performance in demanding environments."
      />

      <RelatedProducts />
    </main>
  );
}
