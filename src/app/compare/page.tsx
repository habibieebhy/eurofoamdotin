import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mattresses, money } from "@/lib/catalog";

export default function ComparePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">
          Side-by-side
        </p>
        <h1 className="mt-4 font-display text-6xl sm:text-8xl">Compare mattresses.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/60">
          The core buying variables in one place: price, feel, construction,
          trial and warranty.
        </p>

        <div className="mt-10 overflow-x-auto rounded-[2rem] border border-ink/10 bg-white">
          <table className="min-w-[900px] w-full text-left text-sm">
            <thead>
              <tr className="border-b border-ink/10 bg-sand">
                <th className="p-5">Model</th>
                {mattresses.map((m) => (
                  <th key={m.slug} className="p-5">
                    <div className="font-display text-2xl">{m.name}</div>
                    <div className="mt-1 text-xs text-coral">{m.category}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Starting price", (m: typeof mattresses[number]) => money(m.basePrice)],
                ["Firmness", (m: typeof mattresses[number]) => m.firmness],
                ["Trial", (m: typeof mattresses[number]) => m.trial],
                ["Warranty", (m: typeof mattresses[number]) => m.warranty],
                ["Best for", (m: typeof mattresses[number]) => m.kicker],
                ["Core feature", (m: typeof mattresses[number]) => m.features[0]]
              ].map(([label, fn]) => {
                const render = fn as (m: typeof mattresses[number]) => string;
                return (
                  <tr key={String(label)} className="border-b border-ink/10 last:border-0">
                    <th className="p-5 font-black">{String(label)}</th>
                    {mattresses.map((m) => (
                      <td key={m.slug} className="p-5 text-ink/65">
                        {render(m)}
                      </td>
                    ))}
                  </tr>
                );
              })}
              <tr>
                <th className="p-5">Shop</th>
                {mattresses.map((m) => (
                  <td key={m.slug} className="p-5">
                    <Link
                      href={`/mattresses/${m.slug}`}
                      className="inline-flex rounded-full bg-ink px-4 py-2 text-xs font-black text-white"
                    >
                      VIEW
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
}
