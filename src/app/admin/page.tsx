import { redirect } from "next/navigation";
import AdminEditor from "@/components/AdminEditor";
import {
  currentAdminUsername,
  hasAdminAccount,
  isAdminAuthenticated
} from "@/lib/admin-auth";
import { getStoreData } from "@/lib/store";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await hasAdminAccount())) redirect("/admin/setup");
  if (!(await isAdminAuthenticated())) redirect("/admin/login");

  const data = await getStoreData();
  const username = await currentAdminUsername();

  return <AdminEditor initial={data} username={username} />;
}
