"use client";

import { useState } from "react";
import {
  PlaneTakeoff,
  PlaneLanding,
  Calendar,
  Users,
  Search,
  ArrowLeftRight,
} from "lucide-react";

export default function FlightSearch() {
  const [tripType, setTripType] = useState("oneway");

  return (
    <section
  id="flight-search"
  className="relative z-30 -mt-24 md:-mt-32 px-4 pb-16"
>
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/20 bg-white/95 p-5 shadow-[0_35px_90px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-8">

        {/* Trip Type */}
        <div className="mb-6 flex flex-wrap gap-3">
          {[
            { id: "oneway", label: "One Way" },
            { id: "roundtrip", label: "Round Trip" },
            { id: "multicity", label: "Multi City" },
          ].map((trip) => (
            <button
              key={trip.id}
              onClick={() => setTripType(trip.id)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                tripType === trip.id
                  ? "bg-black text-yellow-400"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {trip.label}
            </button>
          ))}
        </div>

        {/* Search Grid */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">

          {/* From */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-yellow-500 hover:shadow-md">
            <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
              <PlaneTakeoff size={16} />
              From
            </div>

            <input
              type="text"
              placeholder="Delhi (DEL)"
              className="w-full bg-transparent text-base font-semibold outline-none md:text-lg"
            />
          </div>

          {/* To */}
          <div className="relative rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-yellow-500 hover:shadow-md">

            <button
              className="absolute -left-5 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow lg:flex"
            >
              <ArrowLeftRight size={18} />
            </button>

            <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
              <PlaneLanding size={16} />
              To
            </div>

            <input
              type="text"
              placeholder="Toronto (YYZ)"
              className="w-full bg-transparent text-base font-semibold outline-none md:text-lg"
            />
          </div>

          {/* Departure */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-yellow-500 hover:shadow-md">
            <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
              <Calendar size={16} />
              Departure
            </div>

            <input
              type="date"
              className="w-full bg-transparent font-semibold outline-none"
            />
          </div>

          {/* Return */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-yellow-500 hover:shadow-md">
            <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
              <Calendar size={16} />
              Return
            </div>

            <input
              type="date"
              disabled={tripType === "oneway"}
              className="w-full bg-transparent font-semibold outline-none disabled:opacity-40"
            />
          </div>

          {/* Travellers */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-yellow-500 hover:shadow-md">
            <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
              <Users size={16} />
              Travellers
            </div>

            <select className="w-full bg-transparent font-semibold outline-none">
              <option>1 Adult • Economy</option>
              <option>2 Adults • Economy</option>
              <option>Business Class</option>
              <option>First Class</option>
            </select>
          </div>

          {/* Search Button */}
          <button className="flex min-h-[74px] items-center justify-center gap-3 rounded-2xl bg-yellow-500 text-base font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-400 md:text-lg">
            <Search size={22} />
            Search Flights
          </button>

        </div>

        {/* Popular Routes */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-gray-500">
            Popular Routes
          </span>

          {[
            "Delhi → Toronto",
            "Delhi → Vancouver",
            "Delhi → London",
            "Delhi → Moscow",
            "Mumbai → Dubai",
          ].map((route) => (
            <button
              key={route}
              className="rounded-full bg-gray-100 px-4 py-2 text-sm transition hover:bg-yellow-100 hover:text-black"
            >
              {route}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}