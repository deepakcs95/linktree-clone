"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function saveSelectedPlatformItems(items: String[]) {
  console.log("Saving items:", items);
  // Set a cookie with the items data
  cookies().set("selectedItems", JSON.stringify(items), { path: "/user" });

  redirect("/user/new-profile/create/add-links");
}

export async function saveSelectedUserNames(items: Record<string, string>) {
  console.log("Saving items:", items);
  // Set a cookie with the items data
  cookies().set("selectedUsernames", JSON.stringify(items), { path: "/user" });

  redirect("/user/new-profile/create/select-profile");
}

export async function saveUserProfile(title: string, text: string) {
  console.log("Saving items:", title, text);
  // Set a cookie with the items data
  cookies().set("saveUserProfile", JSON.stringify({ title, text }), { path: "/user" });

  redirect("/user/new-profile/create/complete");
}
