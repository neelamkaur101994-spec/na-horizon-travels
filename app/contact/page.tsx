export default function ContactPage() {
  return (
    <main className="bg-[#FAF9F6]">
      {/* Hero Section */}
      <section className="bg-[#FAF9F6] py-16 md:py-24 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <p className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-yellow-600 text-xs md:text-sm mb-4 md:mb-5">
            LET'S PLAN YOUR JOURNEY
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#111111] leading-tight mb-6 md:mb-8">
            Tell Us About Your
            <span className="text-yellow-600"> Next Trip</span>
          </h1>

          <p className="text-gray-600 text-base md:text-xl leading-7 md:leading-9 max-w-3xl mx-auto">
            Whether you're travelling for business, visiting family,
            or planning your dream vacation, we're here to help.
            Share your travel plans and we'll prepare the best travel
            options for your journey.
          </p>
        </div>
      </section>

      {/* Contact + Enquiry Section */}
      <section className="bg-[#FAF9F6] pb-16 md:pb-24 lg:pb-28">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="bg-white rounded-[24px] md:rounded-[36px] shadow-2xl border border-yellow-500/10 overflow-hidden">
            <div className="p-6 md:p-8 lg:p-12">
              <p className="uppercase tracking-[0.3em] md:tracking-[0.35em] text-yellow-600 text-xs md:text-sm mb-4">
                TRAVEL ENQUIRY
              </p>

              <h2 className="text-3xl md:text-4xl font-light text-[#111111] mb-6 md:mb-8">
                Tell Us About Your Trip
              </h2>

              <form className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-gray-200 px-4 md:px-5 py-3 md:py-4 outline-none focus:border-yellow-500"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-gray-200 px-4 md:px-5 py-3 md:py-4 outline-none focus:border-yellow-500"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-gray-200 px-4 md:px-5 py-3 md:py-4 outline-none focus:border-yellow-500"
                  />

                  <input
                    type="text"
                    placeholder="Departure City"
                    className="w-full rounded-xl border border-gray-200 px-4 md:px-5 py-3 md:py-4 outline-none focus:border-yellow-500"
                  />

                  <input
                    type="text"
                    placeholder="Destination"
                    className="w-full rounded-xl border border-gray-200 px-4 md:px-5 py-3 md:py-4 outline-none focus:border-yellow-500"
                  />

                  <input
                    type="date"
                    className="w-full rounded-xl border border-gray-200 px-4 md:px-5 py-3 md:py-4 outline-none focus:border-yellow-500"
                  />

                  <input
                    type="date"
                    className="w-full rounded-xl border border-gray-200 px-4 md:px-5 py-3 md:py-4 outline-none focus:border-yellow-500"
                  />

                  <input
                    type="number"
                    min="1"
                    placeholder="Number of Travelers"
                    className="w-full rounded-xl border border-gray-200 px-4 md:px-5 py-3 md:py-4 outline-none focus:border-yellow-500"
                  />
                </div>

                <select
                  className="w-full rounded-xl border border-gray-200 px-4 md:px-5 py-3 md:py-4 outline-none focus:border-yellow-500 text-gray-600"
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
                  className="w-full rounded-xl border border-gray-200 px-4 md:px-5 py-3 md:py-4 outline-none resize-none focus:border-yellow-500"
                />

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 md:px-10 py-3 md:py-4 rounded-full transition duration-300"
                >
                  Get My Travel Quote
                </button>

                <p className="text-sm text-gray-500 leading-6 md:leading-7">
                  We'll review your enquiry and get back to you with suitable
                  travel options as soon as possible.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}