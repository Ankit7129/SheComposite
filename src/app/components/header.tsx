"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image
              src="https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755093424/logo/n9cvtqgmfwfqnpqr9hne.png" // replace with your logo path
              alt="SheComposites Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="font-bold text-xl text-gray-900">SheComposites</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium">Products</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md px-6 pb-4 flex flex-col space-y-2">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium">Products</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Logo & Info */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <Image
              src="https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755093424/logo/n9cvtqgmfwfqnpqr9hne.png" // replace with your logo
              alt="SheComposites Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="font-bold text-lg">SheComposites</span>
          </div>
          <p className="text-gray-300 text-sm">
            Pioneers in Fiber Reinforced Polymer (FRP) solutions for construction and industrial applications.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold">Quick Links</h3>
          <Link href="/" className="text-gray-300 hover:text-white text-sm">Home</Link>
          <Link href="/products" className="text-gray-300 hover:text-white text-sm">Products</Link>
          <Link href="/about" className="text-gray-300 hover:text-white text-sm">About</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white text-sm">Contact</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold">Contact</h3>
          <p className="text-gray-300 text-sm">Email: contact@shecomposites.com</p>
          <p className="text-gray-300 text-sm">Phone: +91 9471949455</p>
          <p className="text-gray-300 text-sm">Patna, Bihar, India</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 text-gray-400 text-center text-sm py-4">
        &copy; {new Date().getFullYear()} SheComposites. All rights reserved.
      </div>
    </footer>
  );
}
