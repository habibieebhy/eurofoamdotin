"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";

const links = [
  { label: "Mattresses", href: "/mattresses" },
  { label: "Why Nova", href: "/why-nova" },
  { label: "Compare", href: "/compare" },
  { label: "Reviews", href: "/reviews" },
  { label: "Sleep Quiz", href: "/sleep-quiz" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <>
      <div className="bg-ink px-4 py-2 text-center text-xs font-semibold tracking-wide text-white">
        FREE SHIPPING · EASY TRIALS · WARRANTY INCLUDED
      </div>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-sand/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="font-display text-2xl tracking-[-0.04em] text-ink">
            NOVA<span className="text-coral">/</span>SLEEP
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-ink/75 transition hover:text-coral"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-bold text-ink"
            >
              Cart{count ? ` (${count})` : ""}
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded-full border border-ink/15 bg-white px-3 py-2 text-sm font-bold lg:hidden"
              aria-label="Toggle navigation"
            >
              Menu
            </button>
          </div>
        </div>

        {open ? (
          <nav className="border-t border-ink/10 bg-white px-5 py-4 lg:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-ink/10 py-3 text-sm font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>
    </>
  );
}
