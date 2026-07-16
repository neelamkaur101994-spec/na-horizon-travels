import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#FAF9F6]">

      {/* ================= HERO ================= */}

      <section className="relative h-[90vh] overflow-hidden">

        <Image
          src="/images/about/storyhero.jpg"
          alt="Our Story"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 flex items-center">

          <div className="max-w-7xl mx-auto px-8 w-full">

            <p className="uppercase tracking-[0.4em] text-yellow-500 text-sm mb-6">
              OUR STORY
            </p>

            <h1 className="text-6xl md:text-7xl font-light text-white leading-tight max-w-4xl">
              Every Great Journey
              <br />
              Begins With a
              <span className="text-yellow-500"> Story</span>
            </h1>

            <div className="w-24 h-[2px] bg-yellow-500 mt-8 mb-8" />

            <p className="text-xl text-gray-200 max-w-2xl leading-9">
              Discover how a passion for travel became
              NA Horizon Travels — where every journey
              is planned with care, trust and attention
              to every detail.
            </p>

          </div>

        </div>

      </section>

      {/* ================= OUR BEGINNING ================= */}

      <section className="py-36">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-24 items-center">

            {/* Image */}

            <div>

              <div className="overflow-hidden rounded-[32px] shadow-2xl">

                <Image
                  src="/images/about/image1.jpg"
                  alt="Airport Traveler"
                  width={700}
                  height={850}
                  className="object-cover rounded-[32px] transition duration-700 hover:scale-105"
                />

              </div>

            </div>

            {/* Content */}

            <div>

              <p className="uppercase tracking-[0.35em] text-yellow-600 text-sm mb-6">
                OUR BEGINNING
              </p>

              <h2 className="text-4xl md:text-5xl text-[#111111] font-light leading-tight mb-8">
                Every Journey
                <br />
                Begins With a Dream
              </h2>

              <p className="text-gray-700 text-lg leading-9 mb-8">
                NA Horizon Travels was born from a genuine passion
                for exploring the world. What began as helping
                ourselves, family and close friends book flights
                gradually evolved into creating memorable travel
                experiences for others.
              </p>

              <p className="text-gray-600 text-lg leading-9 mb-8">
                Along the way we realised that travel isn't only
                about finding a ticket. It's about trust,
                guidance and making every step of the journey
                effortless—from planning to arrival.
              </p>

              <p className="text-gray-600 text-lg leading-9">
                Today, our commitment remains the same:
                provide honest advice, personalised service
                and carefully planned journeys that our
                travellers can enjoy with confidence.
              </p>

              <div className="mt-12 border-l-2 border-yellow-500 pl-6">

                <p className="italic text-yellow-700 text-xl leading-9">
                  "Every booking is more than a reservation —
                  it's the beginning of someone's next adventure."
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= TRAVEL, SIMPLIFIED ================= */}

      <section className="py-36 bg-white">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-24 items-center">

            {/* Content */}

            <div>

              <p className="uppercase tracking-[0.35em] text-yellow-600 text-sm mb-6">
                TRAVEL, SIMPLIFIED
              </p>

              <h2 className="text-4xl md:text-5xl text-[#111111] font-light leading-tight mb-8">
                Every Detail
                <br />
                Matters
              </h2>

              <p className="text-gray-700 text-lg leading-9 mb-8">
                Great journeys don't happen by chance—they begin
                with thoughtful planning. Whether you're travelling
                for business, visiting loved ones or heading on
                your dream holiday, every detail deserves attention.
              </p>

              <p className="text-gray-600 text-lg leading-9 mb-8">
                At NA Horizon Travels, we carefully compare flight
                options, plan itineraries and guide you through the
                booking process so you can enjoy a smooth and
                stress-free experience.
              </p>

              <p className="text-gray-600 text-lg leading-9">
                From your first enquiry until you arrive at your
                destination, our goal is simple — to make travel
                easier, more comfortable and more enjoyable.
              </p>

            </div>

            {/* Image */}

            <div>

              <div className="overflow-hidden rounded-[32px] shadow-2xl">

                <Image
                  src="/images/about/image2.jpg"
                  alt="Travel Planning"
                  width={700}
                  height={700}
                  className="rounded-[32px] object-cover transition duration-700 hover:scale-105"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= MISSION & VALUES ================= */}

      <section className="py-36 bg-[#FAF9F6]">

        <div className="max-w-6xl mx-auto px-8 text-center">

          <p className="uppercase tracking-[0.35em] text-yellow-600 text-sm mb-6">
            OUR VALUES
          </p>

          <h2 className="text-4xl md:text-5xl font-light text-[#111111] mb-8">
            More Than Booking Flights.
            <br />
            We Create Journeys.
          </h2>

          <p className="text-gray-600 text-lg leading-9 max-w-3xl mx-auto mb-20">
            We believe travel is about creating unforgettable
            memories. Every journey we plan is guided by trust,
            transparency and genuine care for every traveller.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Card */}

            <div className="bg-white rounded-[32px] shadow-lg border border-yellow-500/10 p-10">

              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-8">
                🛡️
              </div>

              <h3 className="text-2xl font-semibold text-[#111111] mb-5">
                Trust
              </h3>

              <p className="text-gray-600 leading-8">
                Honest advice, transparent pricing and dependable
                service form the foundation of every journey we plan.
              </p>

            </div>

            {/* Card */}

            <div className="bg-white rounded-[32px] shadow-lg border border-yellow-500/10 p-10">

              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-8">
                ✨
              </div>

              <h3 className="text-2xl font-semibold text-[#111111] mb-5">
                Excellence
              </h3>

              <p className="text-gray-600 leading-8">
                We focus on thoughtful planning and attention to
                detail to create smooth and memorable travel
                experiences.
              </p>

            </div>

            {/* Card */}

            <div className="bg-white rounded-[32px] shadow-lg border border-yellow-500/10 p-10">

              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-8">
                ❤️
              </div>

              <h3 className="text-2xl font-semibold text-[#111111] mb-5">
                Care
              </h3>

              <p className="text-gray-600 leading-8">
                Every traveller is unique. We take the time to
                understand your plans and provide personalised
                assistance from start to finish.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ================= CALL TO ACTION ================= */}

      <section className="py-32 bg-[#FAF9F6] border-t border-yellow-500/10">

        <div className="max-w-4xl mx-auto px-8 text-center">

          <p className="uppercase tracking-[0.35em] text-yellow-600 text-sm mb-5">
            START YOUR NEXT JOURNEY
          </p>

          <h2 className="text-4xl md:text-5xl font-light text-[#111111] leading-tight mb-8">
            Ready to Explore the
            <span className="text-yellow-600"> World?</span>
          </h2>

          <p className="text-gray-600 text-lg leading-9 max-w-2xl mx-auto mb-12">
            Whether you're planning a business trip, a family vacation,
            or your dream getaway, we're here to help you find the best
            travel options with personalized service every step of the way.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full
            bg-yellow-500
            hover:bg-yellow-400
            text-black
            font-semibold
            px-10
            py-4
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl"
          >
            Get My Travel Quote
          </a>

        </div>

      </section>

    </main>
  );
}