import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pillars = [
  ["01", "Fewer SKUs", "A compact range makes product differences easier to communicate and inventory easier to manage."],
  ["02", "Transparent construction", "Show the layers, materials and intended job of each component rather than hiding behind vague naming."],
  ["03", "At-home evaluation", "A trial policy reduces the pressure to decide comfort from five minutes in a showroom."],
  ["04", "Direct feedback loop", "D2C product reviews, returns and support conversations can feed directly into product iteration."]
];

export default function WhyNova() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-ink text-white">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-mint">
              Why Nova
            </p>
            <h1 className="mt-4 max-w-5xl font-display text-6xl leading-[0.9] sm:text-8xl">
              A mattress brand designed around clarity.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
              This is the brand-story page: material transparency, testing,
              manufacturing, trial policy, founders and your actual technical moat.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-5 md:grid-cols-2">
            {pillars.map(([n, title, body], index) => (
              <div
                key={n}
                className={`rounded-[2rem] p-7 ${
                  ["bg-mint", "bg-sky", "bg-lilac", "bg-butter"][index]
                }`}
              >
                <div className="font-display text-5xl text-ink/25">{n}</div>
                <h2 className="mt-8 font-display text-4xl">{title}</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-ink/60">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">
                Founders / manufacturing
              </p>
              <h2 className="mt-4 font-display text-5xl">Put the real origin story here.</h2>
            </div>
            <div className="text-base leading-8 text-ink/60">
              This section is intentionally placeholder copy. For launch, replace
              it with the actual founder story, factory photographs, quality
              controls, foam and spring specifications, certifications and
              verified test data.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
