import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { mattresses } from "@/lib/catalog";

const promises = [
  ["100", "NIGHT TRIAL", "Live with it before you commit."],
  ["10+", "YEAR WARRANTY", "Long-term coverage on core models."],
  ["₹0", "STANDARD SHIPPING", "Direct to your doorstep."],
  ["4", "MATTRESS TYPES", "A short range with clear differences."]
];

const reviews = [
  {
    quote:
      "I wanted support without the rock-hard orthopedic feel. The medium-firm balance is exactly what I was looking for.",
    name: "Aarav · Bengaluru",
    product: "Nova Align"
  },
  {
    quote:
      "The buying process was cleaner than a showroom. Picked size, understood the layers, ordered in ten minutes.",
    name: "Naina · Mumbai",
    product: "Nova Air"
  },
  {
    quote:
      "The hybrid has proper bounce without waking my partner every time I turn. That was the deciding factor for us.",
    name: "Kabir · Gurugram",
    product: "Nova Float"
  }
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="overflow-hidden bg-sand">
          <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-20">
            <div>
              <p className="inline-flex rounded-full bg-mint px-4 py-2 text-xs font-black tracking-[0.15em] text-ink">
                SLEEP BETTER. BUY SMARTER.
              </p>
              <h1 className="mt-7 max-w-3xl font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.87] text-ink">
                Mattress shopping without the mattress-store nonsense.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-ink/65">
                Four clear mattresses. Straightforward comfort choices. Trial it
                at home. Keep what works.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/mattresses"
                  className="rounded-full bg-coral px-7 py-4 text-sm font-black text-white shadow-lg shadow-coral/20 transition hover:bg-coral-dark"
                >
                  SHOP MATTRESSES
                </Link>
                <Link
                  href="/sleep-quiz"
                  className="rounded-full border border-ink/15 bg-white px-7 py-4 text-sm font-black text-ink"
                >
                  FIND MY MATCH →
                </Link>
              </div>
              <p className="mt-5 text-xs font-semibold text-ink/45">
                No medical claims. No impossible promises. Just a clearer way to choose.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-butter blur-2xl" />
              <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-full bg-mint blur-2xl" />
              <div className="relative overflow-hidden rounded-[3rem] bg-ink p-3 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=90"
                  alt="Modern bedroom"
                  className="aspect-[4/5] w-full rounded-[2.4rem] object-cover md:aspect-[5/4] lg:aspect-[4/5]"
                />
                <div className="absolute bottom-7 left-7 right-7 rounded-[1.5rem] bg-white/92 p-5 backdrop-blur">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-coral">
                        Start here
                      </p>
                      <p className="mt-1 font-display text-2xl">Nova Align</p>
                    </div>
                    <Link
                      href="/mattresses/nova-align"
                      className="rounded-full bg-ink px-4 py-3 text-xs font-black text-white"
                    >
                      VIEW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-ink/10 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
            {promises.map(([number, title, text]) => (
              <div
                key={title}
                className="border-ink/10 p-6 even:border-l lg:border-l lg:first:border-l-0"
              >
                <div className="font-display text-4xl text-coral">{number}</div>
                <div className="mt-1 text-xs font-black tracking-[0.12em]">{title}</div>
                <p className="mt-2 text-xs leading-5 text-ink/50">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">
                Pick your sleep feel
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-5xl sm:text-6xl">
                Four mattresses. Actual differences.
              </h2>
            </div>
            <Link href="/compare" className="text-sm font-black underline underline-offset-4">
              COMPARE ALL →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {mattresses.map((mattress) => (
              <ProductCard key={mattress.slug} mattress={mattress} />
            ))}
          </div>
        </section>

        <section className="bg-ink text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-mint">
                The Nova build philosophy
              </p>
              <h2 className="mt-4 font-display text-5xl leading-[0.95] sm:text-6xl">
                Explain the mattress. Don’t hide it behind a trademark.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["01", "Comfort layer", "What your body feels first: contour, responsiveness and surface softness."],
                ["02", "Transition layer", "Controls how quickly you move from comfort into structural support."],
                ["03", "Support core", "Foam or springs that carry load and define the mattress response."],
                ["04", "Cover system", "Breathability, hand-feel, removability and surface temperature."]
              ].map(([n, title, body]) => (
                <div key={n} className="rounded-[1.5rem] border border-white/12 bg-white/5 p-5">
                  <p className="text-xs font-black text-coral">{n}</p>
                  <h3 className="mt-3 font-display text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-mint">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">
                Not sure where to start?
              </p>
              <h2 className="mt-4 font-display text-5xl sm:text-6xl">
                Take the 60-second sleep quiz.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ink/65">
                Sleep position, heat sensitivity, feel preference and budget.
                Four questions, one practical recommendation.
              </p>
              <Link
                href="/sleep-quiz"
                className="mt-7 inline-flex rounded-full bg-ink px-6 py-4 text-sm font-black text-white"
              >
                START THE QUIZ →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["SIDE", "BACK", "HOT", "COUPLE"].map((word, i) => (
                <div
                  key={word}
                  className={`flex aspect-square items-end rounded-[2rem] p-6 ${
                    ["bg-butter", "bg-sky", "bg-lilac", "bg-white"][i]
                  }`}
                >
                  <span className="font-display text-3xl">{word}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">
              Customer proof
            </p>
            <h2 className="mt-4 font-display text-5xl sm:text-6xl">
              Less showroom theatre. More actual sleep.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <blockquote
                key={review.name}
                className="rounded-[2rem] border border-ink/10 bg-white p-7"
              >
                <div className="text-coral">★★★★★</div>
                <p className="mt-5 text-lg leading-8">“{review.quote}”</p>
                <footer className="mt-6 border-t border-ink/10 pt-4 text-sm">
                  <strong>{review.name}</strong>
                  <div className="mt-1 text-ink/45">{review.product}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="px-5 pb-20 lg:px-8 lg:pb-28">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-coral px-6 py-14 text-white sm:px-10 lg:px-16 lg:py-20">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
                  Ready?
                </p>
                <h2 className="mt-3 max-w-4xl font-display text-5xl leading-[0.95] sm:text-7xl">
                  Your mattress should be easier to understand than your phone plan.
                </h2>
              </div>
              <Link
                href="/mattresses"
                className="rounded-full bg-white px-7 py-4 text-sm font-black text-ink"
              >
                SHOP NOW →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
