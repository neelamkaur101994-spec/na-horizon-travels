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
    <section className="relative z-30 -mt-12 px-4 pb-16">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-white/20 bg-white/95 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.20)] backdrop-blur-xl">

        {/* Trip Type */}
        <div className="mb-8 flex flex-wrap gap-3">
          {[
            { id: "oneway", label: "One Way" },
            { id: "roundtrip", label: "Round Trip" },
            { id: "multicity", label: "Multi City" },
          ].map((trip) => (
            <button
              key={trip.id}
              onClick={() => setTripType(trip.id)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                tripType === trip.id
                  ? "bg-black text-yellow-400"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {trip.label}
            </button>
          ))}
        </div>

        {/* Search Fields */}
        <div className="grid gap-5 lg:grid-cols-6">

          {/* From */}
          <div className="rounded-2xl border p-5 transition hover:border-yellow-500">
            <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
              <PlaneTakeoff size={16} />
              From
            </div>

            <input
              placeholder="Delhi (DEL)"
              className="w-full bg-transparent text-lg font-semibold outline-none"
            />
          </div>

          {/* To */}
          <div className="relative rounded-2xl border p-5 transition hover:border-yellow-500">

            <button
              className="absolute -left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-white shadow lg:flex"
            >
              <ArrowLeftRight size={18} />
            </button>

            <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
              <PlaneLanding size={16} />
              To
            </div>

            <input
              placeholder="London (LHR)"
              className="w-full bg-transparent text-lg font-semibold outline-none"
            />
          </div>

          {/* Departure */}
          <div className="rounded-2xl border p-5 transition hover:border-yellow-500">
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
          <div className="rounded-2xl border p-5 transition hover:border-yellow-500">
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
          <div className="rounded-2xl border p-5 transition hover:border-yellow-500">
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

          {/* Search */}
          <button className="flex items-center justify-center gap-3 rounded-2xl bg-yellow-500 text-lg font-bold text-black transition duration-300 hover:scale-105 hover:bg-yellow-400">
            <Search size={22} />
            Search Flights
          </button>

        </div>

        {/* Popular Routes */}
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="text-sm font-medium text-gray-500">
            Popular:
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
              className="rounded-full bg-gray-100 px-4 py-2 text-sm transition hover:bg-yellow-100"
            >
              {route}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}