import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-wide text-white"
        >
          Nomadly
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 text-sm text-white md:flex">
          <Link
            href="/destinations"
            className="transition-opacity hover:opacity-70"
          >
            Destinations
          </Link>

          <Link
            href="/packages"
            className="transition-opacity hover:opacity-70"
          >
            Packages
          </Link>

          <Link
            href="/experiences"
            className="transition-opacity hover:opacity-70"
          >
            Experiences
          </Link>

          

          <Link
            href="/packages"
            className="rounded-full bg-white px-5 py-2.5 text-black transition-opacity hover:opacity-90"
          >
            Plan a Trip
          </Link>
        </div>

        {/* Mobile menu */}
        <button
          className="text-white md:hidden"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

      </div>
    </nav>
  );
}