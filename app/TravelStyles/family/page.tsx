import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Plane } from "lucide-react";

const families = [
  {
    name: "Orlando",
    image: "/images/family/orlando.jpg",
    bestTime: "March – May",
    airfare: "From ₹68,999*",
    description:
      "Home to Walt Disney World, Universal Orlando Resort, SeaWorld, and countless family-friendly attractions, Orlando is the ultimate destination for magical memories with loved ones.",
  },
  {
    name: "Gold Coast",
    image: "/images/family/gold-coast.jpg",
    bestTime: "April – October",
    airfare: "From ₹74,999*",
    description:
      "Enjoy beautiful beaches, exciting theme parks like Movie World and Dreamworld, wildlife encounters, and endless outdoor adventures perfect for the entire family.",
  },
  {
    name: "Tokyo",
    image: "/images/family/tokyo.jpg",
    bestTime: "March – May & October – November",
    airfare: "From ₹42,999*",
    description:
      "From Tokyo Disneyland and DisneySea to interactive museums, parks, and unique cultural experiences, Tokyo offers endless entertainment for visitors of every age.",
  },
  {
    name: "Copenhagen",
    image: "/images/family/copenhagen.jpg",
    bestTime: "May – September",
    airfare: "From ₹49,999*",
    description:
      "Discover the magic of Tivoli Gardens, family-friendly museums, colourful waterfronts, cycling adventures, and one of Europe's safest and happiest cities.",
  },
];

export default function FamilyPage() {
  return (
    <main className="bg-[var(--ivory)]">
      {/* Heading */}
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-20 text-center">
        <h1 className="font-heading text-5xl font-bold text-[var(--primary)] md:text-6xl">
          Family Holidays
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
          Create unforgettable memories with exciting destinations, magical
          attractions, relaxing stays, and experiences designed for every member
          of the family.
        </p>
      </section>

      {/* Destinations */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl space-y-24 px-6">
          {families.map((family, index) => (
            <div
              key={family.name}
              className={`grid items-center gap-14 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-[420px] overflow-hidden rounded-[30px] shadow-xl">
                <Image
                  src={family.image}
                  alt={family.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="font-heading text-5xl font-bold text-[var(--primary)]">
                  {family.name}
                </h2>

                <p className="mt-8 leading-8 text-gray-600">
                  {family.description}
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <CalendarDays size={20} />
                    <span>
                      <strong>Best Time:</strong> {family.bestTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <Plane size={20} />
                    <span>
                      <strong>Airfare:</strong> {family.airfare}
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
            Ready for Your Next Family Holiday?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Let NA Horizon Travels help you plan the perfect family vacation
            with trusted airline partners, comfortable accommodations, and
            personalized travel planning from start to finish.
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