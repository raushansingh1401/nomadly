"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-wide text-white"
          onClick={() => setIsOpen(false)}
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

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="mx-4 rounded-2xl bg-black/80 p-6 backdrop-blur-md md:hidden">

          <div className="flex flex-col gap-5 text-sm text-white">

            <Link
              href="/destinations"
              onClick={() => setIsOpen(false)}
              className="transition-opacity hover:opacity-70"
            >
              Destinations
            </Link>

            <Link
              href="/packages"
              onClick={() => setIsOpen(false)}
              className="transition-opacity hover:opacity-70"
            >
              Packages
            </Link>

            <Link
              href="/experiences"
              onClick={() => setIsOpen(false)}
              className="transition-opacity hover:opacity-70"
            >
              Experiences
            </Link>

            <Link
              href="/packages"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-white px-5 py-3 text-center text-black"
            >
              Plan a Trip
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}