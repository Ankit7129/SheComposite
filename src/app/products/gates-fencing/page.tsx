import Image from "next/image";
import Link from "next/link";
import ProductDetail from "../components/ProductDetail";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductSpecs from "../components/ProductSpecs";
import AdvantagesSection from "../components/AdvantagesSection";
import CustomSolutionCTA from "../components/CustomSolutionCTA";
import RelatedProducts from "../components/RelatedProducts";
import SubProductGrid from "../components/SubProductGrid";

export default function GatesFencingPage() {
  const features = [
    "Superior corrosion resistance for long-lasting durability",
    "High strength-to-weight ratio for easy installation",
    "Low maintenance requirements compared to metal alternatives",
    "UV stabilized for outdoor applications",
    "Non-conductive and non-magnetic properties",
    "Custom designs and dimensions available",
    "Fire-retardant options upon request",
    "Environmentally friendly and recyclable"
  ];
   const media: { type: "image" | "video"; src: string; alt?: string }[] = [
    { type: "image", src: "/images/frp-gate-fencing-large.jpg", alt: "FRP Gates Main" },
    { type: "image", src: "/images/frp-gate-fencing-1.jpg", alt: "FRP Gate Design 1" },
    { type: "video", src: "/videos/frp-gate-demo.mp4", alt: "FRP Gate Video" },
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755089917/product/fancing/jh4gvifqfbo2uet37b3b.png", alt: "FRP Gate Design 2" }
  ];
  
  const specifications = [
    { name: "Material", value: "Fiber Reinforced Polymer (FRP)" },
    { name: "Height Options", value: "1m - 3m (customizable)" },
    { name: "Panel Width", value: "Standard 2.5m or custom sizes" },
    { name: "Color Options", value: "Standard green, grey, or custom colors" },
    { name: "Load Capacity", value: "High wind load resistance" },
    { name: "Temperature Range", value: "-40°C to +120°C" },
    { name: "Surface Finish", value: "Smooth or textured options" },
    { name: "Life Expectancy", value: "25+ years with minimal maintenance" }
  ];

  const applications = [
    "Industrial perimeter security",
    "Chemical plant boundaries",
    "Coastal area fencing",
    "Swimming pool enclosures",
    "Utility substations",
    "Highway median barriers",
    "Park and recreational areas",
    "Military and defense installations"
  ];

  const subProducts  = [
    {
      name: "Swing Gates",
      description: "Traditional hinged gates for standard access points",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755089735/product/gates/w3la4xlluarrz5ehwmz3.png"
    },
    {
      name: "Sliding Gates",
      description: "Space-saving solution for wider openings",
      image: "/images/frp-sliding-gate.jpg"
    },
    {
      name: "Security Gates",
      description: "Reinforced designs for high-security areas",
      image: "/images/frp-security-gate.jpg"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <Breadcrumbs/>

      <ProductDetail
        title="FRP Gates & Fencing Systems"
        description="Durable, corrosion-resistant perimeter solutions for demanding environments."
        features={features}
        media={media}
      />

      <SubProductGrid heading="Gate" items={subProducts} />

       <ProductSpecs specifications={specifications} applications={applications} />

      <AdvantagesSection/>

      <CustomSolutionCTA
        // title="Custom FRP Bridge Railings"
        // description="We design and manufacture durable, corrosion-resistant FRP railings for pedestrian and vehicle bridges."
        // phone="+918709756008"
      />

     <RelatedProducts
     //excludeProduct="FRP Gratings"
      />
    </main>
  );
}