import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Plane } from "lucide-react";

const honeymoonDestinations = [
  {
    name: "Santorini",
    image: "/images/honeymoon/santorini.jpg",
    bestTime: "April – October",
    airfare: "From ₹49,999*",
    description:
      "Celebrate your love amidst Santorini's iconic whitewashed villages, breathtaking sunsets, luxury cliffside hotels, and spectacular views over the Aegean Sea.",
  },
  {
    name: "Amalfi Coast",
    image: "/images/honeymoon/amalfi.jpg",
    bestTime: "May – September",
    airfare: "From ₹54,999*",
    description:
      "Experience romantic coastal villages, scenic drives, luxurious seaside resorts, authentic Italian cuisine, and unforgettable Mediterranean sunsets.",
  },
  {
    name: "Seychelles",
    image: "/images/honeymoon/seychelles.jpg",
    bestTime: "April – June & September – November",
    airfare: "From ₹42,999*",
    description:
      "Escape to secluded white-sand beaches, crystal-clear waters, luxury island resorts, and peaceful tropical surroundings designed for romance.",
  },
  {
    name: "Bora Bora",
    image: "/images/honeymoon/bora-bora.jpg",
    bestTime: "May – October",
    airfare: "From ₹89,999*",
    description:
      "Indulge in the ultimate honeymoon with turquoise lagoons, overwater villas, private dining experiences, and breathtaking island scenery.",
  },
];

export default function HoneymoonPage() {
  return (
    <main className="bg-[var(--ivory)]">
      {/* Heading */}
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-20 text-center">
        <h1 className="font-heading text-5xl font-bold text-[var(--primary)] md:text-6xl">
          Honeymoon Escapes
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
          Celebrate the beginning of your new journey together with unforgettable
          romantic destinations, luxurious stays, breathtaking scenery, and
          personalized honeymoon experiences.
        </p>
      </section>

      {/* Destinations */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl space-y-24 px-6">
          {honeymoonDestinations.map((destination, index) => (
            <div
              key={destination.name}
              className={`grid items-center gap-14 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-[420px] overflow-hidden rounded-[30px] shadow-xl">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="font-heading text-5xl font-bold text-[var(--primary)]">
                  {destination.name}
                </h2>

                <p className="mt-8 leading-8 text-gray-600">
                  {destination.description}
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <CalendarDays size={20} />
                    <span>
                      <strong>Best Time:</strong> {destination.bestTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <Plane size={20} />
                    <span>
                      <strong>Airfare:</strong> {destination.airfare}
                    </span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--primary)] px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-[var(--gold)] hover:text-black"
                >
                  Get a Free Quote
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--primary)] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-4xl font-bold text-white">
            Begin Your Forever Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Let NA Horizon Travels create your dream honeymoon with handpicked
            romantic destinations, luxury accommodations, competitive airfares,
            and personalized travel planning.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--gold)] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            Get Your Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}