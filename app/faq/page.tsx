import FAQ from "../components/FAQ";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[var(--ivory)]">
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--gold)]">
          Support
        </p>

        <h1 className="font-heading mt-4 text-5xl font-bold text-[var(--primary)] md:text-6xl">
          Frequently Asked Questions
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Find answers to the questions we receive most often about flight
          bookings, payments, cancellations, baggage, and our travel services.
        </p>
      </section>

      <FAQ />
    </main>
  );
}