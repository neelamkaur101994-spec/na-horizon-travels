import TravelStyles from "../components/TravelStyles";

export default function DestinationsPage() {
  return (
    <main className="bg-[var(--ivory)]">
      {/* Hero */}
      <section
        className="relative h-[90vh] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/destinations/destinations-banner.jpg')",
        }}
      />

      {/* Intro */}
      <section className="bg-[var(--ivory)] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
            Your Journey Begins Here
          </p>

          <h2 className="font-heading mt-5 text-4xl font-bold text-[var(--primary)]">
            Travel Beyond Boundaries
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Whether you're planning a family holiday, honeymoon, business trip,
            or dream vacation, our carefully selected destinations offer unforgettable
            experiences with competitive airfares and exceptional service.
          </p>
        </div>
      </section>

      <TravelStyles />
    </main>
  );
}