"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function saveSelectedPlatformItems(items: String[]) {
  console.log("Saving items:", items);
  // Set a cookie with the items data
  cookies().set("selectedItems", JSON.stringify(items), { path: "/" });

  redirect("/user/new-profile/create/add-links");
}
