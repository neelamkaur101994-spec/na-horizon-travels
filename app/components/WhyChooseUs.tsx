import {
  Plane,
  BadgeDollarSign,
  Globe2,
  Headphones,
  ShieldCheck,
  Handshake,
} from "lucide-react";

const features = [
  {
    icon: Plane,
    title: "Domestic & International Flights",
    description:
      "Book flights across India and worldwide with a smooth booking experience.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Airfares",
    description:
      "Access competitive pricing to help you find great value for your trip.",
  },
  {
    icon: Globe2,
    title: "Worldwide Destinations",
    description:
      "Travel to popular cities and destinations across the globe.",
  },
  {
    icon: Headphones,
    title: "Dedicated Customer Support",
    description:
      "Receive assistance before, during, and after your booking whenever you need it.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Booking Experience",
    description:
      "Book with confidence through a reliable and secure booking process.",
  },
  {
    icon: Handshake,
    title: "Personalized Travel Assistance",
    description:
      "Friendly guidance tailored to your travel plans and preferences.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Why Choose Us
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            We combine personalized service, competitive fares, and dependable
            support to help make every journey smooth from start to finish.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-transparent bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/30 hover:shadow-2xl hover:shadow-yellow-500/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600 transition-colors duration-300 group-hover:bg-yellow-500 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}