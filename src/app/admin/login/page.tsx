import { redirect } from "next/navigation";
import { hasAdminAccount, isAdminAuthenticated } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function LoginPage({
  searchParams
}: {
  searchParams: Promise<{ error?: string; locked?: string }>;
}) {
  if (!(await hasAdminAccount())) redirect("/admin/setup");
  if (await isAdminAuthenticated()) redirect("/admin");

  const { error, locked } = await searchParams;

  return (
    <main className="min-h-screen bg-ink px-6 py-16 text-white">
      <div className="mx-auto max-w-md rounded-[2rem] border border-white/10 bg-white p-8 text-ink shadow-2xl">
        <img src="/eurofoam-logo.png" alt="Eurofoam" className="mx-auto h-24 w-auto object-contain" />
        <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-gold-dark">
          Content & catalogue
        </p>
        <h1 className="mt-3 font-display text-4xl">Admin login.</h1>

        {error ? (
          <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
            Incorrect username or password.
          </p>
        ) : null}

        {locked ? (
          <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
            Too many failed attempts. Try again later.
          </p>
        ) : null}

        <form action="/api/admin/login" method="post" className="mt-7 space-y-4">
          <input
            name="username"
            autoComplete="username"
            required
            placeholder="Username"
            className="w-full rounded-xl border border-ink/15 px-4 py-3"
          />
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Password"
            className="w-full rounded-xl border border-ink/15 px-4 py-3"
          />
          <button className="w-full rounded-full bg-gold px-5 py-4 text-sm font-black text-ink">
            SIGN IN
          </button>
        </form>
      </div>
    </main>
  );
}
