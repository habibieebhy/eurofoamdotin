import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="font-display text-3xl">NOVA/SLEEP</div>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
            An original D2C mattress storefront starter. Replace placeholder
            claims, pricing, policies and photography with verified brand data
            before launch.
          </p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-mint">
            Shop
          </h3>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <Link className="block hover:text-white" href="/mattresses">Mattresses</Link>
            <Link className="block hover:text-white" href="/compare">Compare</Link>
            <Link className="block hover:text-white" href="/sleep-quiz">Sleep Quiz</Link>
          </div>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-mint">
            Brand
          </h3>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <Link className="block hover:text-white" href="/why-nova">Why Nova</Link>
            <Link className="block hover:text-white" href="/reviews">Reviews</Link>
            <span className="block">hello@novasleep.example</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-white/45">
        © {new Date().getFullYear()} Nova Sleep. Demo storefront.
      </div>
    </footer>
  );
}
