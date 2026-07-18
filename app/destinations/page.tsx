import Image from "next/image";
import TravelStyles from "../components/TravelStyles";

export default function DestinationsPage() {
  return (
    <main className="bg-[var(--ivory)]">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] md:h-[90vh] w-full overflow-hidden">
        <Image
          src="/images/destinations/destinations-banner.jpg"
          alt="Destinations Banner"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-24 md:h-40 bg-gradient-to-t from-[var(--ivory)] to-transparent" />
      </section>

      {/* Intro */}
      <section className="relative -mt-6 md:-mt-10 rounded-t-[30px] md:rounded-t-[40px] bg-[var(--ivory)] pt-16 pb-16 md:pt-24 md:pb-24 z-10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-[var(--gold)] text-xs md:text-sm">
            Your Journey Begins Here
          </p>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[var(--primary)]">
            Travel Beyond Boundaries
          </h2>

          <p className="mt-6 md:mt-8 text-base md:text-lg leading-7 md:leading-8 text-gray-600">
            Whether you're planning a family holiday, honeymoon, business trip,
            or your dream vacation, our carefully selected destinations offer
            unforgettable experiences with competitive airfares and exceptional
            service.
          </p>
        </div>
      </section>

      <TravelStyles />
    </main>
  );
}