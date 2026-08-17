import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SleepQuiz from "@/components/SleepQuiz";

export default function SleepQuizPage() {
  return (
    <>
      <Header />
      <main className="bg-mint">
        <section className="mx-auto grid min-h-[75vh] max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[.75fr_1.25fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">
              Mattress matcher
            </p>
            <h1 className="mt-4 font-display text-6xl leading-[0.9] sm:text-7xl">
              Find your starting point.
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-ink/60">
              Four quick questions. We map your answers to the closest product
              profile in this demo catalogue.
            </p>
          </div>
          <SleepQuiz />
        </section>
      </main>
      <Footer />
    </>
  );
}
