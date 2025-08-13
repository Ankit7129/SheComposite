// components/RelatedProducts.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

interface Product {
  name: string;
  link: string;
  image: string;
}

const allProducts: Product[] = [
  {
    name: "FRP Manhole Covers",
    link: "/products/manhole-covers",
    image: "/images/frp-manhole-thumb.jpg",
  },
  {
    name: "FRP Gratings",
    link: "/products/gratings",
    image: "/images/frp-grating-thumb.jpg",
  },
  {
    name: "FRP Ladders",
    link: "/products/ladders",
    image: "/images/frp-ladder-thumb.jpg",
  },
  {
    name: "FRP Sheets",
    link: "/products/sheets",
    image: "/images/frp-sheet-thumb.jpg",
  },
];

interface RelatedProductsProps {
  excludeProduct?: string; // Name of the product to hide
}

export default function RelatedProducts({ excludeProduct }: RelatedProductsProps) {
  const productsToShow = excludeProduct
    ? allProducts.filter((p) => p.name !== excludeProduct)
    : allProducts;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {productsToShow.map((product, index) => (
          <Link key={index} href={product.link} className="group">
            <div className="relative h-32 mb-2 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 text-center">
              {product.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
