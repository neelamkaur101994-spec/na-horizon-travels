import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-[#0d1117] text-white">
      {/* Top Border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold">
              NA Horizon <span className="text-yellow-500">Travels</span>
            </h2>

            <p className="mt-6 leading-7 text-gray-400">
              Your trusted partner for domestic and international flight
              bookings. We make every journey smooth, reliable and memorable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-gray-400">
              <li>
                <Link href="/" className="hover:text-yellow-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/faq" className="hover:text-yellow-500 transition">
                  FAQ
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-yellow-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold">
              Services
            </h3>

            <ul className="mt-6 space-y-4 text-gray-400">
              <li>Domestic Flights</li>
              <li>International Flights</li>
              <li>Group Bookings</li>
              <li>Travel Assistance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-6 space-y-5 text-gray-400">

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-500" />
                <span>+91 76961 78807</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-500" />
                <span>info@nahorizontravels.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-yellow-500" />
                <span>Punjab, India</span>
              </div>

            </div>

            {/* Socials */}

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-yellow-500 hover:text-black"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-yellow-500 hover:text-black"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-yellow-500 hover:text-black"
              >
                <FaWhatsapp size={18} />
              </a>

            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-gray-500">
          © 2026 NA Horizon Travels. All rights reserved.
        </div>
      </div>
    </footer>
  );
}