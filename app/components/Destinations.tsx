import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Plane,
} from "lucide-react";

const destinations = [
  {
    city: "Toronto",
    country: "Canada",
    image: "/images/destinations/Toronto.jpg",
    fare: "₹58,999*",
    bestFor: "Business • Family • Study",
    bestTime: "May – October",
    flightTime: "18–22 hrs",
    description:
      "Discover Canada's largest city, known for its iconic skyline, multicultural atmosphere, world-class shopping, and unforgettable experiences.",
  },
  {
    city: "London",
    country: "United Kingdom",
    image: "/images/destinations/London.jpg",
    fare: "₹46,999*",
    bestFor: "History • Shopping • Business",
    bestTime: "April – September",
    flightTime: "9–11 hrs",
    description:
      "Explore royal palaces, historic landmarks, charming streets, museums, and one of the world's most vibrant capital cities.",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    image: "/images/destinations/Dubai.jpg",
    fare: "₹22,999*",
    bestFor: "Luxury • Family • Shopping",
    bestTime: "November – March",
    flightTime: "3–4 hrs",
    description:
      "Experience luxury shopping, spectacular architecture, desert adventures, pristine beaches, and unforgettable entertainment.",
  },
  {
    city: "Paris",
    country: "France",
    image: "/images/destinations/Paris.jpg",
    fare: "₹49,999*",
    bestFor: "Romance • Culture • Food",
    bestTime: "April – June",
    flightTime: "10–12 hrs",
    description:
      "Discover timeless elegance, iconic landmarks, charming cafés, artistic heritage, and the romance of the City of Light.",
  },
  {
    city: "Singapore",
    country: "Singapore",
    image: "/images/destinations/Singapore.jpg",
    fare: "₹19,999*",
    bestFor: "Family • Food • City Life",
    bestTime: "February – April",
    flightTime: "5–6 hrs",
    description:
      "A perfect blend of futuristic architecture, lush gardens, vibrant culture, luxury shopping, and incredible cuisine.",
  },
  {
    city: "Moscow",
    country: "Russia",
    image: "/images/destinations/Moscow.jpg",
    fare: "₹43,999*",
    bestFor: "History • Architecture • Culture",
    bestTime: "May – September",
    flightTime: "8–10 hrs",
    description:
      "Experience magnificent architecture, rich history, grand squares, museums, and unforgettable cultural attractions.",
  },
];

export default function Destinations() {
  return (
    <section className="bg-[var(--ivory)] pb-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-10 lg:grid-cols-2">

          {destinations.map((item) => (

            <div
              key={item.city}
              className="group overflow-hidden rounded-[32px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}

              <div className="relative h-80 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.city}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-black/10 to-transparent" />

                <div className="absolute bottom-8 left-8">

                  <h3 className="font-heading text-4xl font-bold text-white">
                    {item.city}
                  </h3>

                  <span className="mt-3 inline-flex rounded-full bg-[var(--gold)] px-4 py-2 text-sm font-semibold text-black">
                    {item.country}
                  </span>

                </div>

              </div>

              {/* Content */}

              <div className="space-y-8 p-8">

                <div className="grid gap-6 md:grid-cols-2">

                  <div>

                    <div className="flex items-center gap-2 text-[var(--navy)]">

                      <MapPin size={18} />

                      <span className="font-semibold">
                        Best For
                      </span>

                    </div>

                    <p className="mt-2 leading-7 text-gray-600">
                      {item.bestFor}
                    </p>

                  </div>

                  <div>

                    <div className="flex items-center gap-2 text-[var(--navy)]">

                      <CalendarDays size={18} />

                      <span className="font-semibold">
                        Best Time
                      </span>

                    </div>

                    <p className="mt-2 text-gray-600">
                      {item.bestTime}
                    </p>

                  </div>

                  <div>

                    <div className="flex items-center gap-2 text-[var(--navy)]">

                      <Plane size={18} />

                      <span className="font-semibold">
                        Flight Time
                      </span>

                    </div>

                    <p className="mt-2 text-gray-600">
                      {item.flightTime}
                    </p>

                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                      Starting From
                    </p>

                    <p className="mt-2 text-3xl font-bold text-[var(--primary)]">
                      {item.fare}
                    </p>

                  </div>

                </div>

                <div className="h-px bg-gray-200" />

                <p className="leading-8 text-gray-600">
                  {item.description}
                </p>

                <button className="inline-flex items-center gap-3 rounded-full border border-[var(--primary)] px-6 py-3 font-semibold text-[var(--primary)] transition-all duration-300 hover:border-[var(--gold)] hover:bg-[var(--gold)]">
                  Explore Destination

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}