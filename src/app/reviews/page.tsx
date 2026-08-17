import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getStoreData } from "@/lib/store";

export const dynamic = "force-dynamic";

export default async function ReviewsPage() {
  const { reviews } = await getStoreData();

  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-gold-dark">
            Reviews
          </p>
          <h1 className="mt-4 font-display text-6xl sm:text-8xl">What sleepers say.</h1>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.id} className="rounded-[2rem] border border-ink/10 bg-white p-7">
                <div className="text-gold-dark">
                  {"★".repeat(Math.max(1, Math.min(5, review.stars)))}
                </div>
                <p className="mt-5 text-lg leading-8">“{review.quote}”</p>
                <div className="mt-7 border-t border-ink/10 pt-4 text-sm">
                  <strong>{review.name}</strong>
                  <div className="mt-1 text-ink/45">{review.product}</div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
