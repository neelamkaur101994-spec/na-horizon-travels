import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
  <nav className="fixed top-0 left-0 z-50 w-full bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2">

        {/* Left Side */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/Icon.png"
            alt="NA Horizon Travels"
            width={115}
            height={115}
            priority
          />
          
        </Link>


        {/* Right Side */}
        <div className="flex items-center gap-10">

          <ul className="hidden md:flex items-center gap-8 text-white font-medium">
           

            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/destinations">Destinations</Link>
            </li>

            <li>
              <Link href="/About">Our Story</Link>
            </li>

            <li>
              <Link href="/faq">FAQ</Link>
            </li>

            <li>
             <Link href="/contact">contact</Link>
            

            </li>
          </ul>

          <Link
            href="/contact"
            className="hidden md:inline-flex rounded-full border border-yellow-500 px-6 py-3 font-semibold text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            Get a Free Quote
          </Link>

        </div>

      </div>
    </nav>
  );
}