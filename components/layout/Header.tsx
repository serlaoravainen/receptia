"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background">
            <span className="text-lg font-bold">R</span>
          </div>
          <span className="text-xl font-bold tracking-tight">Receptia</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link
            href="#ominaisuudet"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Ominaisuudet
          </Link>
          <Link
            href="#miten-toimii"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Miten toimii
          </Link>
          <Link
            href="#kayttotapaukset"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Käyttötapaukset
          </Link>
          <Link
            href="#ukk"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            UKK
          </Link>
          <Link
            href="#yhteystiedot"
            className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-br from-primary via-primary to-primary/90 px-6 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Ota yhteyttä
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container space-y-1 px-4 py-4">
            <Link
              href="#ominaisuudet"
              className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ominaisuudet
            </Link>
            <Link
              href="#miten-toimii"
              className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Miten toimii
            </Link>
            <Link
              href="#kayttotapaukset"
              className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Käyttötapaukset
            </Link>
            <Link
              href="#ukk"
              className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              UKK
            </Link>
            <Link
              href="#yhteystiedot"
              className="block rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ota yhteyttä
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
