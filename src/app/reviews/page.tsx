import Header from "@/components/Header";
import Footer from "@/components/Footer";

const reviews = [
  ["★★★★★", "The selection was small enough that I could actually compare it.", "Meera · Pune", "Nova Align"],
  ["★★★★★", "I wanted cooling first, not fifty confusing mattress names. Air made the choice obvious.", "Rohan · Chennai", "Nova Air"],
  ["★★★★★", "The spring feel is responsive but not noisy or bouncy in a cheap way.", "Ananya · Delhi", "Nova Float"],
  ["★★★★☆", "Good guest-room mattress and the price made sense.", "Ishaan · Jaipur", "Nova Easy"],
  ["★★★★★", "The at-home trial removed most of the anxiety from ordering a mattress online.", "Sara · Hyderabad", "Nova Align"],
  ["★★★★★", "The layer explanation is what sold me. I knew what I was paying for.", "Vikram · Kolkata", "Nova Float"]
];

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">
            Reviews
          </p>
          <h1 className="mt-4 font-display text-6xl sm:text-8xl">What sleepers say.</h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-ink/55">
            Demo testimonials only. Replace with verified customer reviews and
            publish a clear review-verification policy before production.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map(([stars, quote, name, product]) => (
              <article key={quote} className="rounded-[2rem] border border-ink/10 bg-white p-7">
                <div className="text-coral">{stars}</div>
                <p className="mt-5 text-lg leading-8">“{quote}”</p>
                <div className="mt-7 border-t border-ink/10 pt-4 text-sm">
                  <strong>{name}</strong>
                  <div className="mt-1 text-ink/45">{product}</div>
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
