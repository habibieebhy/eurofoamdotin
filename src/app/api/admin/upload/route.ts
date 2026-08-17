import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { ensureStore, mediaDir } from "@/lib/store";

export const runtime = "nodejs";

const MAX_UPLOAD = 12 * 1024 * 1024;
const ALLOWED = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/avif"
]);

function filenameFor(name: string) {
  const ext = path.extname(name).toLowerCase();
  const stem = path
    .basename(name, ext)
    .replace(/[^a-zA-Z0-9-_]/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);

  return `${Date.now()}-${stem || "image"}${ext}`;
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const form = await request.formData();
  const file = form.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file supplied" }, { status: 400 });
  }

  if (!ALLOWED.has(file.type)) {
    return NextResponse.json({ error: "Unsupported image type" }, { status: 400 });
  }

  if (file.size > MAX_UPLOAD) {
    return NextResponse.json({ error: "Image exceeds 12 MB" }, { status: 400 });
  }

  await ensureStore();

  const safe = filenameFor(file.name);
  await fs.writeFile(
    path.join(mediaDir(), safe),
    Buffer.from(await file.arrayBuffer())
  );

  return NextResponse.json({ url: `/media/${safe}` });
}
