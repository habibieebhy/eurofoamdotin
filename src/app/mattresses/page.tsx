import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { mattresses } from "@/lib/catalog";

export default function MattressesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-ink text-white">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-mint">
              Shop mattresses
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-6xl leading-[0.9] sm:text-8xl">
              Choose by feel, not by marketing vocabulary.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              Start with support, temperature and response. Then choose your size
              and height on the product page.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="mb-8 flex flex-wrap gap-2">
            {["All", "Ortho", "Cooling", "Hybrid", "Essential"].map((label) => (
              <span
                key={label}
                className={`rounded-full px-4 py-2 text-xs font-black ${
                  label === "All" ? "bg-ink text-white" : "border border-ink/15 bg-white"
                }`}
              >
                {label}
              </span>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {mattresses.map((mattress) => (
              <ProductCard key={mattress.slug} mattress={mattress} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
