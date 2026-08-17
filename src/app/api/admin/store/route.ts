import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getStoreData, saveStoreData } from "@/lib/store";
import type { StoreData } from "@/lib/catalog";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(await getStoreData());
}

export async function PUT(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = (await request.json()) as StoreData;

  if (!data?.site || !Array.isArray(data.products) || !Array.isArray(data.reviews)) {
    return NextResponse.json({ error: "Invalid store payload" }, { status: 400 });
  }

  await saveStoreData(data);
  return NextResponse.json({ ok: true });
}
