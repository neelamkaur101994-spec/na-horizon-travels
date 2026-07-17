import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Plane } from "lucide-react";

const cities = [
  {
    name: "Paris",
    image: "/images/city/paris.jpg",
    bestTime: "April – June & September –October",
    airfare: "From ₹41,999*",
    description:
      "Discover the timeless beauty of Paris with the Eiffel Tower, charming cafés, world-renowned museums, luxury shopping, and unforgettable evenings along the Seine.",
  },
  {
    name: "London",
    image: "/images/city/london.jpg",
    bestTime: "May – September",
    airfare: "From ₹46,999*",
    description:
      "Experience London's royal heritage, iconic landmarks, West End theatres, fascinating museums, and vibrant shopping districts in one unforgettable city.",
  },
  {
    name: "Dubai",
    image: "/images/city/dubai.jpg",
    bestTime: "November – March",
    airfare: "From ₹24,999*",
    description:
      "From the Burj Khalifa to luxury shopping, desert safaris, pristine beaches, and world-class dining, Dubai offers the perfect blend of adventure and luxury.",
  },
  {
    name: "Singapore",
    image: "/images/city/singapore.jpg",
    bestTime: "February – April",
    airfare: "From ₹28,999*",
    description:
      "Explore Marina Bay Sands, Gardens by the Bay, Sentosa Island, Orchard Road, and experience one of Asia's cleanest and most modern cities.",
  },
];

export default function CityPage() {
  return (
    <main className="bg-[var(--ivory)]">
      {/* Heading */}
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-20 text-center">
        <h1 className="font-heading text-5xl font-bold text-[var(--primary)] md:text-6xl">
          City Breaks
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
          Explore iconic skylines, historic landmarks, vibrant cultures,
          world-class shopping, and unforgettable experiences in some of the
          world's most exciting cities.
        </p>
      </section>

      {/* Destinations */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl space-y-24 px-6">
          {cities.map((city, index) => (
            <div
              key={city.name}
              className={`grid items-center gap-14 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-[420px] overflow-hidden rounded-[30px] shadow-xl">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="font-heading text-5xl font-bold text-[var(--primary)]">
                  {city.name}
                </h2>

                <p className="mt-8 leading-8 text-gray-600">
                  {city.description}
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <CalendarDays size={20} />
                    <span>
                      <strong>Best Time:</strong> {city.bestTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <Plane size={20} />
                    <span>
                      <strong>Airfare:</strong> {city.airfare}
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
            Ready for Your Next City Escape?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Let NA Horizon Travels help you plan your perfect city getaway with
            competitive airfares, trusted airline partners, and personalized
            travel assistance from start to finish.
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