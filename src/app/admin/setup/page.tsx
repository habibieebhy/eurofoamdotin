import { redirect } from "next/navigation";
import { hasAdminAccount } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function SetupPage({
  searchParams
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (await hasAdminAccount()) redirect("/admin/login");
  const { error } = await searchParams;

  return (
    <main className="min-h-screen bg-ink px-6 py-16 text-white">
      <div className="mx-auto max-w-md rounded-[2rem] border border-white/10 bg-white p-8 text-ink shadow-2xl">
        <img src="/eurofoam-logo.png" alt="Eurofoam" className="mx-auto h-24 w-auto object-contain" />
        <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-gold-dark">
          First-time setup
        </p>
        <h1 className="mt-3 font-display text-4xl">Create the admin account.</h1>
        <p className="mt-4 text-sm leading-6 text-ink/55">
          This runs once. The username and password are stored as a private
          password hash and can later be changed inside Admin → Account.
        </p>

        {error ? (
          <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
            Use a username of at least 3 characters and a password of at least
            10 characters. Both passwords must match.
          </p>
        ) : null}

        <form action="/api/admin/setup" method="post" className="mt-7 space-y-4">
          <input
            name="username"
            required
            minLength={3}
            placeholder="Admin username"
            className="w-full rounded-xl border border-ink/15 px-4 py-3"
          />
          <input
            name="password"
            type="password"
            required
            minLength={10}
            placeholder="Password"
            className="w-full rounded-xl border border-ink/15 px-4 py-3"
          />
          <input
            name="confirm"
            type="password"
            required
            minLength={10}
            placeholder="Confirm password"
            className="w-full rounded-xl border border-ink/15 px-4 py-3"
          />
          <button className="w-full rounded-full bg-gold px-5 py-4 text-sm font-black text-ink">
            CREATE ADMIN
          </button>
        </form>
      </div>
    </main>
  );
}
