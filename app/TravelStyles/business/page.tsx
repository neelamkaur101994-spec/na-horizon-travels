import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Plane } from "lucide-react";

const businesses = [
  {
    name: "New York",
    image: "/images/business/new-york.jpg",
    bestTime: "April – June & September – November",
    airfare: "From ₹56,999*",
    description:
      "The financial capital of the world, New York offers exceptional business opportunities, international conferences, premium hotels, and excellent connectivity for corporate travellers.",
  },
  {
    name: "London",
    image: "/images/business/london.jpg",
    bestTime: "May – September",
    airfare: "From ₹46,999*",
    description:
      "A global business hub with world-class financial institutions, corporate headquarters, convention centres, and outstanding public transport for efficient business travel.",
  },
  {
    name: "Hong Kong",
    image: "/images/business/hong-kong.jpg",
    bestTime: "October – December",
    airfare: "From ₹33,999*",
    description:
      "One of Asia's leading financial centres, Hong Kong combines modern infrastructure, international trade exhibitions, premium hotels, and seamless business connectivity.",
  },
  {
    name: "Frankfurt",
    image: "/images/business/frankfurt.jpg",
    bestTime: "May – September",
    airfare: "From ₹48,999*",
    description:
      "Germany's financial capital is home to major multinational companies, international trade fairs, excellent transport links, and one of Europe's busiest airports.",
  },
];

export default function BusinessPage() {
  return (
    <main className="bg-[var(--ivory)]">
      {/* Heading */}
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-20 text-center">
        <h1 className="font-heading text-5xl font-bold text-[var(--primary)] md:text-6xl">
          Business Travel
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
          Stay productive while travelling with carefully planned business trips,
          premium airline options, convenient schedules, and seamless travel
          experiences to the world's leading commercial destinations.
        </p>
      </section>

      {/* Destinations */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl space-y-24 px-6">
          {businesses.map((business, index) => (
            <div
              key={business.name}
              className={`grid items-center gap-14 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-[420px] overflow-hidden rounded-[30px] shadow-xl">
                <Image
                  src={business.image}
                  alt={business.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="font-heading text-5xl font-bold text-[var(--primary)]">
                  {business.name}
                </h2>

                <p className="mt-8 leading-8 text-gray-600">
                  {business.description}
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <CalendarDays size={20} />
                    <span>
                      <strong>Best Time:</strong> {business.bestTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <Plane size={20} />
                    <span>
                      <strong>Airfare:</strong> {business.airfare}
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
            Simplify Your Business Travel
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            NA Horizon Travels provides reliable corporate travel solutions with
            competitive airfares, flexible itineraries, and personalized support
            to keep your business trips smooth and efficient.
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