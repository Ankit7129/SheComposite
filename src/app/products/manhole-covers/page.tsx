import Image from "next/image";
import Link from "next/link";
import ProductDetail from "../components/ProductDetail";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductSpecs from "../components/ProductSpecs";
import AdvantagesSection from "../components/AdvantagesSection";
import CustomSolutionCTA from "../components/CustomSolutionCTA";
import RelatedProducts from "../components/RelatedProducts";
import SubProductGrid from "../components/SubProductGrid";

export default function ManholeCoversPage() {
  const features = [
    "Lightweight design for easy handling and installation",
    "High load-bearing capacity compliant with industry standards",
    "Corrosion and chemical resistance for long service life",
    "Non-conductive and spark-free for safety",
    "UV stabilized for outdoor durability",
    "Custom sizes, shapes, and colors available",
    "Slip-resistant surface finish",
    "100% recyclable and eco-friendly"
  ];

  const media: { type: "image" | "video"; src: string; alt?: string }[] = [
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755092480/factory/mnqyookdu3mtxgtoufyv.png", alt: "FRP Manhole Cover Main" },
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755090036/product/manhole-covers/bxy7q3comls3oqtxqf8z.jpg", alt: "FRP Manhole Design 1" },
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755090220/product/manhole-covers/bz7605h4ffrstyxv5xjf.jpg", alt: "FRP Manhole Video" },
    { type: "image", src: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755107951/frp/lqjic7plbp9utgcdouzh.webp", alt: "FRP Manhole Design 2" }
  ];

  const specifications = [
    { name: "Material", value: "Fiber Reinforced Polymer (FRP)" },
    { name: "Load Rating", value: "A15, B125, C250, D400, E600 (EN124 standard)" },
    { name: "Shape Options", value: "Round, square, or custom shapes" },
    { name: "Color Options", value: "Black, grey, green, or custom colors" },
    { name: "Locking Mechanism", value: "Available for security applications" },
    { name: "Surface Finish", value: "Anti-slip pattern" },
    { name: "Life Expectancy", value: "25+ years with minimal maintenance" },
    { name: "Compliance", value: "Meets or exceeds EN124 / IS standards" }
  ];

  const applications = [
    "Municipal water supply networks",
    "Sewage treatment plants",
    "Telecommunication cable chambers",
    "Gas pipelines",
    "Stormwater drainage systems",
    "Industrial utility covers",
    "Residential complexes",
    "Road and highway infrastructure"
  ];

  const subProducts = [
    {
      name: "Round Manhole Covers",
      description: "Standard round design for sewer and drainage access",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755107866/frp/kut2wyrabgwieunqnqak.webp"
    },
    {
      name: "Square Manhole Covers",
      description: "Square profile for telecommunication and utility chambers",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755107643/frp/z8qxjx5snjx5cgdtrvoc.webp"
    },
    {
      name: "Recessed Manhole Covers",
      description: "Designed to blend with pavement or tiles for aesthetic purposes",
      image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755107951/frp/lqjic7plbp9utgcdouzh.webp"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <Breadcrumbs />

      <ProductDetail
        title="FRP Manhole Covers"
        description="Strong, durable, and lightweight manhole solutions for modern infrastructure."
        features={features}
        media={media}
      />

      <SubProductGrid heading="Manhole Cover" items={subProducts} />

      <ProductSpecs specifications={specifications} applications={applications} />

      <AdvantagesSection />

      <CustomSolutionCTA
         title="Custom FRP Manhole Covers"
        description="We design and manufacture corrosion-resistant FRP covers suitable for municipal, industrial, and residential projects."
        // phone="+918709756008"
      />

      <RelatedProducts />
    </main>
  );
}
