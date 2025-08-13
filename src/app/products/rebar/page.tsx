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
    { type: "image", src: "/images/frp-rebar.jpg", alt: "FRP Rebar Main" },
    { type: "image", src: "/images/frp-rebar-1.jpg", alt: "FRP Rebar Close-up" },
    { type: "video", src: "/videos/frp-rebar-demo.mp4", alt: "FRP Rebar Installation Video" },
    { type: "image", src: "/images/frp-rebar-2.jpg", alt: "FRP Rebar in Concrete" }
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
      image: "/images/frp-rebar-straight.jpg"
    },
    {
      name: "Bent Rebar",
      description: "Pre-bent FRP rebar for structural corners and joints",
      image: "/images/frp-rebar-bent.jpg"
    },
    {
      name: "Spiral Rebar",
      description: "Helical FRP reinforcement for columns and round structures",
      image: "/images/frp-rebar-spiral.jpg"
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
