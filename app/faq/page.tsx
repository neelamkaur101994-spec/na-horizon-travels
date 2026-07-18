import FAQ from "../components/FAQ";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[var(--ivory)]">
      <section className="mx-auto max-w-4xl px-6 pt-24 md:pt-32 pb-12 md:pb-16 text-center">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] md:tracking-[0.35em] text-[var(--gold)]">
          Support
        </p>

        <h1 className="font-heading mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--primary)]">
          Frequently Asked Questions
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-7 md:leading-8 text-gray-600">
          Find answers to the questions we receive most often about flight
          bookings, payments, cancellations, baggage, and our travel services.
        </p>
      </section>

      <FAQ />
    </main>
  );
}