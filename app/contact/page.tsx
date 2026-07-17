

export default function ContactPage() {
  return (
    <main className="bg-[#FAF9F6]">

      {/* Hero Section */}

<section className="bg-[#FAF9F6] py-28">

  <div className="max-w-5xl mx-auto px-8 text-center">

    <p className="uppercase tracking-[0.4em] text-yellow-600 text-sm mb-5">
      LET'S PLAN YOUR JOURNEY
    </p>

    <h1 className="text-5xl md:text-6xl font-light text-[#111111] leading-tight mb-8">
      Tell Us About Your
      <span className="text-yellow-600"> Next Trip</span>
    </h1>

    <p className="text-gray-600 text-xl leading-9 max-w-3xl mx-auto">
      Whether you're travelling for business, visiting family,
      or planning your dream vacation, we're here to help.
      Share your travel plans and we'll prepare the best travel
      options for your journey.
    </p>

  </div>

</section>
{/* Contact + Enquiry Section */}

<section className="bg-[#FAF9F6] pb-28">

  <div className="max-w-7xl mx-auto px-8">

    <div className="bg-white rounded-[36px] shadow-2xl border border-yellow-500/10 overflow-hidden">

      <div className="grid lg:grid-cols-5">

        {/* LEFT SIDE */}

        <div className="lg:col-span-2 bg-[#111111] text-white p-12">

          <p className="uppercase tracking-[0.35em] text-yellow-500 text-sm mb-5">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl font-light mb-8">
            We'd Love To
            <br />
            Hear From You
          </h2>

          <p className="text-gray-300 leading-8 mb-12">
            Whether you're planning a business trip,
            visiting family, or your dream vacation,
            we're here to help you find the best travel
            options with personalized service.
          </p>

          {/* Phone */}

          <div className="mb-10">

            <h3 className="text-yellow-500 uppercase text-sm tracking-widest mb-2">
              Business Phone
            </h3>

            <p className="text-gray-300">
              62841 29265
            </p>

          </div>

          {/* Email */}

          <div className="mb-10">

            <h3 className="text-yellow-500 uppercase text-sm tracking-widest mb-2">
              Professional Email
            </h3>

            <p className="text-gray-300">
              Info@nahorizontravels.com
            </p>

          </div>

          {/* Location */}

          <div className="mb-10">

            <h3 className="text-yellow-500 uppercase text-sm tracking-widest mb-2">
              Location
            </h3>

            <p className="text-gray-300">
              Punjab, India
              <br />
              Serving Travelers Worldwide
            </p>

          </div>

          {/* Hours */}

          <div>

            <h3 className="text-yellow-500 uppercase text-sm tracking-widest mb-2">
              Business Hours
            </h3>

            <p className="text-gray-300">
              Monday – Saturday
              <br />
              9:00 AM – 6:00 PM
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="lg:col-span-3 p-12">

          <p className="uppercase tracking-[0.35em] text-yellow-600 text-sm mb-4">
            TRAVEL ENQUIRY
          </p>

          <h2 className="text-4xl font-light text-[#111111] mb-8">
            Tell Us About Your Trip
          </h2>

          <form className="space-y-8">

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Full Name"
                className="rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-yellow-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-yellow-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-yellow-500"
              />

              <input
                type="text"
                placeholder="Departure City"
                className="rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-yellow-500"
              />

              <input
                type="text"
                placeholder="Destination"
                className="rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-yellow-500"
              />

              <input
                type="date"
                className="rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-yellow-500"
              />

              <input
                type="date"
                className="rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-yellow-500"
              />

              <input
                type="number"
                min="1"
                placeholder="Number of Travelers"
                className="rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-yellow-500"
              />

            </div>

            <select
              className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-yellow-500 text-gray-600"
              defaultValue=""
            >
              <option value="" disabled>
                Preferred Cabin Class
              </option>

              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First Class</option>

            </select>

            <textarea
              rows={6}
              placeholder="Tell us about your travel plans, preferred airline, flexible dates or any special requests..."
              className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none resize-none focus:border-yellow-500"
            />

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-10 py-4 rounded-full transition duration-300"
            >
              Get My Travel Quote
            </button>

            <p className="text-sm text-gray-500 leading-7">
              We'll review your enquiry and get back to you with suitable
              travel options as soon as possible.
            </p>

          </form>

        </div>

      </div>

    </div>

  </div>


      </section>

    </main>
  );
}