"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I book a flight with NA Horizon Travels?",
    answer:
      "You can contact us by phone, email, or through our Contact page. We'll help you find the best flight options based on your travel plans and budget.",
  },
  {
    question: "Do you book both domestic and international flights?",
    answer:
      "Yes. We assist with domestic and international flight bookings to destinations around the world.",
  },
  {
    question: "Can I change or cancel my booking?",
    answer:
      "Yes. Changes and cancellations are subject to the airline's fare rules and any applicable airline charges.",
  },
  {
    question: "Do you offer group bookings?",
    answer:
      "Absolutely. We assist with family vacations, corporate travel, student groups, and other group bookings.",
  },
  {
    question: "How will I receive my flight ticket?",
    answer:
      "Once your booking is confirmed, your e-ticket and itinerary will be sent directly to your registered email address.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept commonly used payment methods. Please contact us to learn about the payment options available for your booking.",
  },
  {
    question: "Can you help me find the best airfare?",
    answer:
      "Yes. We compare available flight options to help you find competitive fares based on your preferred dates and destination.",
  },
  {
    question: "Do you provide baggage information?",
    answer:
      "Yes. We'll inform you about your airline's baggage allowance and important travel information before your journey.",
  },
  {
    question: "Can you help with special travel requests?",
    answer:
      "Yes. We can assist with seat preferences, meal requests, and other special travel requirements whenever the airline allows.",
  },
  {
    question: "How can I contact NA Horizon Travels?",
    answer:
      "You can reach us through our Contact page, by phone, or by email during our business hours.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[var(--ivory)] pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 ${
                open === index
                  ? "border border-[var(--gold)] shadow-xl"
                  : "border border-transparent hover:border-gray-200 hover:shadow-lg"
              }`}
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <span className="text-lg font-semibold text-[var(--primary)]">
                  {faq.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`transition-all duration-300 ${
                    open === index
                      ? "rotate-180 text-[var(--gold)]"
                      : "text-gray-500"
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="border-t border-gray-100 px-8 py-6">
                  <p className="leading-8 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}