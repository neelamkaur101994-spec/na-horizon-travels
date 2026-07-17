import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Plane } from "lucide-react";

const adventureDestinations = [
  {
    name: "Swiss Alps",
    image: "/images/adventure/swiss-alps.jpg",
    bestTime: "December – March",
    airfare: "From ₹56,999*",
    description:
      "Experience breathtaking alpine scenery, world-class skiing, scenic train journeys, and charming mountain villages. The Swiss Alps offer the perfect blend of adventure and luxury.",
  },
  {
    name: "Queenstown",
    image: "/images/adventure/queenstown.jpg",
    bestTime: "November – April",
    airfare: "From ₹82,999*",
    description:
      "Known as the adventure capital of the world, Queenstown is home to bungee jumping, skydiving, jet boating, hiking, and spectacular lake and mountain views.",
  },
  {
    name: "Interlaken",
    image: "/images/adventure/interlaken.jpg",
    bestTime: "May – September",
    airfare: "From ₹58,999*",
    description:
      "Surrounded by crystal-clear lakes and snow-capped mountains, Interlaken is perfect for paragliding, canyoning, hiking, and unforgettable outdoor experiences.",
  },
  {
    name: "Patagonia",
    image: "/images/adventure/patagonia1.jpg",
    bestTime: "October – April",
    airfare: "From ₹92,999*",
    description:
      "Explore dramatic glaciers, rugged mountain peaks, turquoise lakes, and some of the world's most spectacular hiking trails across Chile and Argentina.",
  },
];

export default function AdventurePage() {
  return (
    <main className="bg-[var(--ivory)]">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-20 text-center">
        <h1 className="font-heading text-5xl font-bold text-[var(--primary)] md:text-6xl">
          Adventure Tours
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
          Chase unforgettable adventures across breathtaking landscapes. From
          snow-covered mountains and alpine lakes to thrilling outdoor
          experiences, discover journeys that awaken your adventurous spirit.
        </p>
      </section>

      {/* Destinations */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl space-y-24 px-6">
          {adventureDestinations.map((destination, index) => (
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
            Your Next Adventure Starts Here
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Whether you're seeking mountain peaks, thrilling outdoor activities,
            or once-in-a-lifetime expeditions, NA Horizon Travels will help you
            create an unforgettable adventure tailored to your interests.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--gold)] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            Plan My Adventure
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}