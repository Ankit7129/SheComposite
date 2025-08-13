"use client";

import Image from "next/image";
import Link from "next/link";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
}

interface ProductDetailProps {
  title: string;
  description: string;
  features: string[];
  media: MediaItem[];
  ctaText?: string;
  ctaLink?: string;
}

export default function ProductDetail({
  title,
  description,
  features,
  media,
  ctaText = "Get a Custom Quote",
  ctaLink = "/contact",
}: ProductDetailProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 mb-16">
      {/* Left - Main Media */}
      <div>
        <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
          {media[0].type === "image" ? (
            <Image
              src={media[0].src}
              alt={media[0].alt || title}
              width={800}
              height={600}
              className="w-full object-cover"
            />
          ) : (
            <video
              src={media[0].src}
              controls
              className="w-full rounded-lg"
            />
          )}
        </div>

        {/* Thumbnails / Additional Media */}
        {media.length > 1 && (
          <div className="grid grid-cols-3 gap-4">
            {media.slice(1).map((item, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt || `${title} ${index + 1}`}
                    width={300}
                    height={200}
                    className="w-full h-24 object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-24 object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right - Details */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-xl text-gray-600 mb-6">{description}</p>

        {/* Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Product Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Request Pricing Information</h3>
          <p className="text-gray-600 mb-4">
            We offer competitive pricing for {title.toLowerCase()} in various sizes and configurations.
          </p>
          <Link
            href={ctaLink}
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
}
