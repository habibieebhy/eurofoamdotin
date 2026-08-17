import { NextResponse } from "next/server";
import {
  adminCookie,
  createFirstAdmin,
  createSessionToken,
  hasAdminAccount
} from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (await hasAdminAccount()) {
    return NextResponse.redirect(new URL("/admin/login", request.url), 303);
  }

  const form = await request.formData();
  const username = String(form.get("username") || "").trim();
  const password = String(form.get("password") || "");
  const confirm = String(form.get("confirm") || "");

  if (username.length < 3 || password.length < 10 || password !== confirm) {
    return NextResponse.redirect(new URL("/admin/setup?error=1", request.url), 303);
  }

  await createFirstAdmin(username, password);

  const response = NextResponse.redirect(new URL("/admin", request.url), 303);
  response.cookies.set(adminCookie.name, createSessionToken(username), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: adminCookie.maxAge
  });

  return response;
}
