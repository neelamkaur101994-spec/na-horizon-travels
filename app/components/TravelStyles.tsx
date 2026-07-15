import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const travelStyles = [
  {
    title: "Beach Escapes",
    description:
      "Relax on pristine beaches, crystal-clear waters, and luxurious seaside resorts.",
    image: "/images/travel-styles/beach.jpg",
    href: "/travel-styles/beach",
  },
  {
    title: "City Breaks",
    description:
      "Explore iconic skylines, culture, shopping, and unforgettable city experiences.",
    image: "/images/travel-styles/city.jpg",
    href: "/travel-styles/city",
  },
  {
    title: "Honeymoon Escapes",
    description:
      "Celebrate your love with romantic destinations and unforgettable sunsets.",
    image: "/images/travel-styles/honeymoon.jpg",
    href: "/travel-styles/honeymoon",
  },
  {
    title: "Adventure Tours",
    description:
      "Discover mountains, hiking trails, breathtaking landscapes, and thrilling adventures.",
    image: "/images/travel-styles/adventure.jpg",
    href: "/travel-styles/adventure",
  },
  {
    title: "Family Holidays",
    description:
      "Create lasting memories with destinations perfect for travelers of every age.",
    image: "/images/travel-styles/family.jpg",
    href: "/travel-styles/family",
  },
  {
    title: "Business Travel",
    description:
      "Professional travel solutions with flexibility, comfort, and convenience.",
    image: "/images/travel-styles/business.jpg",
    href: "/travel-styles/business",
  },
];

export default function TravelStyles() {
  return (
    <section className="bg-[var(--ivory)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--gold)]">
            Explore by Travel Style
          </p>

          <h2 className="font-heading mt-4 text-5xl font-bold text-[var(--primary)]">
            Choose Your Travel Experience
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're dreaming of relaxing beaches, exciting adventures,
            romantic getaways, or business travel, discover experiences tailored
            to your journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {travelStyles.map((style) => (
            <Link
              key={style.title}
              href={style.href}
              className="group relative block h-[420px] overflow-hidden rounded-[32px] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                src={style.image}
                alt={style.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[rgba(15,45,82,0.45)] to-transparent transition-all duration-500 group-hover:from-[rgba(15,45,82,0.9)]" />

              <div className="absolute left-8 top-8 h-1 w-16 rounded-full bg-[var(--gold)]" />

              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="font-heading text-3xl font-bold">
                  {style.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-200">
                  {style.description}
                </p>

                <div className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white px-5 py-3 font-medium text-white transition-all duration-300 group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-black">
                  Explore
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}