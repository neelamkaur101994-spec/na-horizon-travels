import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Plane } from "lucide-react";

const beaches = [
  {
    name: "Maldives",
    image: "/images/beach/maldives.jpg",
    bestTime: "November – April",
    airfare: "From ₹32,999*",
    description:
      "Crystal-clear lagoons, luxury overwater villas, white-sand beaches and unforgettable sunsets make the Maldives one of the world's most sought-after tropical escapes.",
  },
  {
    name: "Bali",
    image: "/images/beach/bali.jpg",
    bestTime: "April – October",
    airfare: "From ₹28,999*",
    description:
      "A perfect blend of tropical beaches, ancient temples, lush landscapes and luxurious resorts offering unforgettable island experiences.",
  },
  {
    name: "Phuket",
    image: "/images/beach/phuket.jpg",
    bestTime: "November – March",
    airfare: "From ₹24,999*",
    description:
      "From vibrant beaches to island hopping and spectacular sunsets, Phuket offers relaxation and adventure in equal measure.",
  },
  {
    name: "Mauritius",
    image: "/images/beach/mauritius.jpg",
    bestTime: "May – December",
    airfare: "From ₹39,999*",
    description:
      "A paradise of turquoise lagoons, luxury resorts, coral reefs and breathtaking natural beauty in the heart of the Indian Ocean.",
  },
];

export default function BeachPage() {
  return (
    <main className="bg-[var(--ivory)]">
      {/* Heading */}
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--gold)]">
          Travel Experiences
        </p>

        <h1 className="font-heading mt-5 text-5xl font-bold text-[var(--primary)] md:text-6xl">
          Beach Escapes
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
          Discover crystal-clear waters, luxurious beachfront resorts,
          breathtaking sunsets, and unforgettable coastal destinations
          carefully selected for your next relaxing getaway.
        </p>
      </section>

      {/* Destinations */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl space-y-24 px-6">
          {beaches.map((beach, index) => (
            <div
              key={beach.name}
              className={`grid items-center gap-14 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-[420px] overflow-hidden rounded-[30px] shadow-xl">
                <Image
                  src={beach.image}
                  alt={beach.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--gold)]">
                  Featured Destination
                </p>

                <h2 className="font-heading mt-4 text-5xl font-bold text-[var(--primary)]">
                  {beach.name}
                </h2>

                <p className="mt-8 leading-8 text-gray-600">
                  {beach.description}
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <CalendarDays size={20} />
                    <span>
                      <strong>Best Time:</strong> {beach.bestTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <Plane size={20} />
                    <span>
                      <strong>Airfare:</strong> {beach.airfare}
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
            Ready for Your Dream Beach Holiday?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Let NA Horizon Travels help you plan the perfect beach escape with
            competitive airfares, trusted airlines, and personalized travel
            assistance.
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