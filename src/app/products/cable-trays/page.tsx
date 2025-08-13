import Breadcrumbs from "../components/Breadcrumbs";
import ProductDetail from "../components/ProductDetail";
import ProductSpecs from "../components/ProductSpecs";
import AdvantagesSection from "../components/AdvantagesSection";
import CustomSolutionCTA from "../components/CustomSolutionCTA";
import RelatedProducts from "../components/RelatedProducts";
import SubProductGrid from "../components/SubProductGrid";

export default function FRPCableTrayPage() {
  const features = [
    "Lightweight yet extremely durable",
    "Excellent corrosion resistance",
    "Non-conductive and non-magnetic",
    "Low maintenance requirements",
    "Easy to install and modify",
    "Long service life (25+ years)",
    "Fire-retardant options available",
    "Custom sizes and configurations"
  ];

  const media: { type: "image" | "video"; src: string; alt?: string }[] = [
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755108060/frp/mum97jvntkfz12beoito.webp", alt: "FRP Cable Tray Main" },
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755090919/product/cable-tray/xnhugywh0nrw2tp8asss.jpg", alt: "FRP Cable Tray 1" },
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755108507/frp/tblsquwcsdxlyig4splk.png", alt: "FRP Cable Tray 2" },
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755108373/frp/agqmnnmme9jsnykmdlpl.jpg", alt: "FRP Cable Tray 3" }
  ];

  const specifications = [
    { name: "Material", value: "Fiber Reinforced Polymer" },
    { name: "Width", value: "50mm - 600mm (customizable)" },
    { name: "Depth", value: "50mm - 150mm (customizable)" },
    { name: "Length", value: "Standard 2m, 3m or custom lengths" },
    { name: "Color", value: "Standard grey, other colors available" },
    { name: "Load Capacity", value: "Up to 500kg/m (depends on configuration)" },
    { name: "Temperature Range", value: "-40°C to +80°C" },
    { name: "Standards", value: "Complies with relevant IS standards" }
  ];

  const applications = [
    "Industrial plants and factories",
    "Telecommunication infrastructure",
    "Power plants and substations",
    "Oil & gas facilities",
    "Chemical processing plants",
    "Water treatment plants",
    "Commercial buildings",
    "Transportation infrastructure"
  ];

  const subProducts = [
    {
      name: "Perforated Cable Tray",
      description: "FRP tray with perforations for improved ventilation and cable management.",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755108373/frp/agqmnnmme9jsnykmdlpl.jpg"
    },
    {
      name: "Ladder Cable Tray",
      description: "Robust ladder-type FRP trays for heavy cable loads.",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755108507/frp/tblsquwcsdxlyig4splk.png"
    },
    {
      name: "Solid Bottom Tray",
      description: "Fully enclosed FRP tray for extra protection against dust and water.",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755108060/frp/mum97jvntkfz12beoito.webp"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <Breadcrumbs />

      <ProductDetail
        title="FRP Cable Trays"
        description="High-performance cable management solutions for demanding environments."
        features={features}
        media={media}
      />

      <SubProductGrid heading="Cable Tray Types" items={subProducts} />

      <ProductSpecs specifications={specifications} applications={applications} />

      <AdvantagesSection  />

      <CustomSolutionCTA
        title="Custom FRP Cable Tray Solutions"
        description="We manufacture FRP cable trays in custom sizes, colors and configurations to meet your specific project requirements."
      />

      <RelatedProducts />
    </main>
  );
}
