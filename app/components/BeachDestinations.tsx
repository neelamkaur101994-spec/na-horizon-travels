import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Plane, ArrowRight } from "lucide-react";

const beaches = [
  {
    name: "Maldives",
    image: "/images/beach/maldives.jpg",
    bestTime: "November – April",
    airfare: "From ₹32,999*",
    description:
      "Experience crystal-clear lagoons, luxury overwater villas, vibrant coral reefs, and breathtaking sunsets in one of the world's most exclusive island destinations.",
  },
  {
    name: "Bali",
    image: "/images/beach/bali.jpg",
    bestTime: "April – October",
    airfare: "From ₹28,999*",
    description:
      "Discover tropical beaches, stunning temples, lush rice terraces, luxury resorts, and unforgettable Balinese hospitality.",
  },
  {
    name: "Phuket",
    image: "/images/beach/phuket.jpg",
    bestTime: "November – March",
    airfare: "From ₹24,999*",
    description:
      "Relax on white-sand beaches, enjoy crystal-clear waters, island hopping, vibrant nightlife, and authentic Thai cuisine.",
  },
  {
    name: "Mauritius",
    image: "/images/beach/mauritius.jpg",
    bestTime: "May – December",
    airfare: "From ₹39,999*",
    description:
      "Escape to turquoise lagoons, luxury beachfront resorts, volcanic mountains, and some of the most beautiful beaches in the Indian Ocean.",
  },
];

export default function BeachDestinations() {
  return (
    <section className="bg-[var(--ivory)] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">
          <p className="uppercase tracking-[0.3em] text-[var(--gold)] font-semibold">
            Featured Destinations
          </p>

          <h2 className="font-heading mt-5 text-5xl font-bold text-[var(--primary)]">
            Paradise Awaits
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Explore handpicked beach destinations offering luxury resorts,
            turquoise waters, unforgettable sunsets, and world-class hospitality.
          </p>
        </div>

        <div className="space-y-24">
          {beaches.map((beach, index) => (
            <div
              key={beach.name}
              className={`grid items-center gap-14 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative h-[450px] overflow-hidden rounded-[32px] shadow-2xl">
                <Image
                  src={beach.image}
                  alt={beach.name}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div>
                <p className="uppercase tracking-[0.3em] text-[var(--gold)] font-semibold">
                  Beach Destination
                </p>

                <h3 className="font-heading mt-4 text-5xl font-bold text-[var(--primary)]">
                  {beach.name}
                </h3>

                <p className="mt-8 leading-8 text-gray-600">
                  {beach.description}
                </p>

                <div className="mt-10 space-y-5">
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
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--primary)] px-7 py-4 font-semibold text-white transition hover:bg-[var(--gold)] hover:text-black"
                >
                  Get a Free Quote
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}