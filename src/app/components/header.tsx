"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755093424/logo/n9cvtqgmfwfqnpqr9hne.png"
            alt="SheComposites Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-900">She Composites</span>
            <span className="text-xs text-blue-600 font-medium">
              A Shree Hanumant Enterprises Company
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium transition">Products</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</Link>
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition font-medium"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
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
        <div className="md:hidden bg-white shadow-lg">
          <nav className="px-6 pt-2 pb-4 flex flex-col space-y-3">
            <Link href="/" className="py-2 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100">Home</Link>
            <Link href="/products" className="py-2 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100">Products</Link>
            <Link href="/about" className="py-2 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100">About</Link>
            <Link href="/contact" className="py-2 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100">Contact</Link>
            <Link 
              href="/contact" 
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition font-medium text-center"
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755093424/logo/n9cvtqgmfwfqnpqr9hne.png"
              alt="SheComposites Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <div>
              <span className="font-bold text-lg">She Composites</span>
              <p className="text-xs text-blue-400">A Shree Hanumant Enterprises Company</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm">
            Pioneering Fiber Reinforced Polymer (FRP) solutions for construction and industrial applications across India.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <div className="flex flex-col space-y-3">
            <Link href="/" className="text-gray-300 hover:text-white text-sm transition">Home</Link>
            <Link href="/products" className="text-gray-300 hover:text-white text-sm transition">Products</Link>
            <Link href="/about" className="text-gray-300 hover:text-white text-sm transition">About Us</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white text-sm transition">Contact</Link>
          </div>
        </div>

        {/* Products */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Our Products</h3>
          <div className="flex flex-col space-y-3">
            <Link href="/products/cable-trays" className="text-gray-300 hover:text-white text-sm transition">FRP Cable Trays</Link>
            <Link href="/products/rebar" className="text-gray-300 hover:text-white text-sm transition">FRP Rebar</Link>
            <Link href="/products/manhole-covers" className="text-gray-300 hover:text-white text-sm transition">FRP Manhole Covers</Link>
            <Link href="/products/sheets" className="text-gray-300 hover:text-white text-sm transition">FRP Sheets & Panels</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-300">+91 9471949455</span>
            </div>
            <div className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-300">contact@shecomposites.com</span>
            </div>
            <div className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-gray-300">Registered Office:</p>
                <p className="text-gray-300 text-xs">In front of Patna Old Museum, Patna-1 (Bihar)</p>
                <p className="text-gray-300 mt-1">Manufacturing Unit:</p>
                <p className="text-gray-300 text-xs">Village-Chakwath, Dist-Bhojpur-802183 (Bihar)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} She Composites (A Shree Hanumant Enterprises Company). All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}