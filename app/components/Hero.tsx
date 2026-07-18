"use client";

import Image from "next/image";
import { ArrowRight, PlaneTakeoff } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[700px] md:h-screen md:min-h-[850px] w-full overflow-hidden">
      {/* Background */}
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
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[120px] md:h-[500px] md:w-[500px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pb-32 md:pb-40">

        <div className="max-w-3xl">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-white/10 px-4 py-2 text-xs text-yellow-400 backdrop-blur-md md:px-5 md:text-sm">
            <PlaneTakeoff size={16} />
            Premium International Flight Booking
          </div>

          {/* Heading */}
          <h1 className="font-poppins text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Explore the World
            <br />
            <span className="text-yellow-400">
              with Confidence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 md:text-xl md:leading-8">
            Book domestic and international flights with trusted travel experts.
            Experience seamless bookings, competitive fares, and exceptional
            customer service with NA Horizon Travels.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <button className="rounded-full bg-yellow-500 px-8 py-4 text-base font-semibold text-black transition hover:bg-yellow-400 md:text-lg">
              Search Flights
            </button>

            <button className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base text-white backdrop-blur-md transition hover:bg-white/20 md:text-lg">
              Learn More
              <ArrowRight size={20} />
            </button>

          </div>

          {/* Service Highlights */}
          <div className="mt-10 flex flex-wrap gap-3">

            <span className="rounded-full border border-yellow-500/30 bg-white/10 px-4 py-2 text-xs text-white backdrop-blur-md md:px-5 md:text-sm">
              ✈ Domestic Flights
            </span>

            <span className="rounded-full border border-yellow-500/30 bg-white/10 px-4 py-2 text-xs text-white backdrop-blur-md md:px-5 md:text-sm">
              🌍 International Flights
            </span>

            <span className="rounded-full border border-yellow-500/30 bg-white/10 px-4 py-2 text-xs text-white backdrop-blur-md md:px-5 md:text-sm">
              💼 Personalized Booking Assistance
            </span>

          </div>

        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-[#FAF9F6] to-transparent" />
    </section>
  );
}