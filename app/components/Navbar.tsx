"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Icon.png"
            alt="NA Horizon Travels"
            width={90}
            height={90}
            priority
            className="w-16 md:w-24 h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-white font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/destinations">Destinations</Link>
            </li>

            <li>
              <Link href="/About">Our Story</Link>
            </li>

            <li>
              <Link href="/faq">FAQ</Link>
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          <Link
            href="/contact"
            className="rounded-full border border-yellow-500 px-6 py-3 font-semibold text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-xl overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-white font-medium">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/destinations" onClick={() => setIsOpen(false)}>
              Destinations
            </Link>
          </li>

          <li>
            <Link href="/About" onClick={() => setIsOpen(false)}>
              Our Story
            </Link>
          </li>

          <li>
            <Link href="/faq" onClick={() => setIsOpen(false)}>
              FAQ
            </Link>
          </li>

          <li>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>

          <li className="pt-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-yellow-500 px-6 py-3 font-semibold text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              Get a Free Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}