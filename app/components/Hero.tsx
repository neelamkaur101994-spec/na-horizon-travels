"use client";

import Image from "next/image";
import { ArrowRight, PlaneTakeoff } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[850px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-v2.jpg"
        alt="Luxury travel destination"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gold Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-white/10 px-5 py-2 text-sm text-yellow-400 backdrop-blur-md">
            <PlaneTakeoff size={16} />
            Premium International Flight Booking
          </div>

          {/* Heading */}
          <h1 className="font-poppins text-5xl font-bold leading-tight text-white md:text-7xl">
            Explore the World
            <br />
            <span className="text-yellow-400">
              with Confidence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
            Book domestic and international flights with
            trusted travel experts. Experience seamless
            bookings, competitive fares, and exceptional
            customer service with NA Horizon Travels.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <button className="rounded-full bg-yellow-500 px-8 py-4 text-lg font-semibold text-black transition duration-300 hover:scale-105 hover:bg-yellow-400">
              Search Flights
            </button>

            <button className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg text-white backdrop-blur-md transition hover:bg-white/20">
              Learn More
              <ArrowRight size={20} />
            </button>

          </div>

                   {/* Service Highlights */}
          <div className="mt-16 flex flex-wrap gap-4">
            <span className="rounded-full border border-yellow-500/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">
              ✈️ Domestic Flights
            </span>

            <span className="rounded-full border border-yellow-500/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">
              🌍 International Flights
            </span>

            <span className="rounded-full border border-yellow-500/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">
              💼 Personalized Booking Assistance
            </span>
          </div>

        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}