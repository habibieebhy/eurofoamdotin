import { promises as fs } from "fs";
import path from "path";
import { defaultStoreData, type StoreData } from "@/lib/catalog";

export function dataDir() {
  return process.env.CMS_DATA_DIR || path.join(process.cwd(), "data");
}

export function mediaDir() {
  return path.join(dataDir(), "media");
}

function storePath() {
  return path.join(dataDir(), "store.json");
}

export async function ensureStore() {
  await fs.mkdir(dataDir(), { recursive: true });
  await fs.mkdir(mediaDir(), { recursive: true });

  try {
    await fs.access(storePath());
  } catch {
    await fs.writeFile(
      storePath(),
      JSON.stringify(defaultStoreData, null, 2),
      "utf-8"
    );
  }
}

export async function getStoreData(): Promise<StoreData> {
  await ensureStore();
  try {
    const raw = await fs.readFile(storePath(), "utf-8");
    const parsed = JSON.parse(raw) as StoreData;
    if (!parsed?.site || !Array.isArray(parsed.products) || !Array.isArray(parsed.reviews)) {
      return defaultStoreData;
    }
    return parsed;
  } catch {
    return defaultStoreData;
  }
}

export async function saveStoreData(data: StoreData) {
  await ensureStore();
  const temp = `${storePath()}.tmp`;
  await fs.writeFile(temp, JSON.stringify(data, null, 2), "utf-8");
  await fs.rename(temp, storePath());
}

export async function getProduct(slug: string) {
  const data = await getStoreData();
  return data.products.find((product) => product.slug === slug);
}
