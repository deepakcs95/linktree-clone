"use server";

import { getSession, getUserLinks, isUserNameAvailable } from "@/lib/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function saveUserNames() {
  // console.log("Saving items:", items);
  // Set a cookie with the items data
  // cookies().set("select-platforms", JSON.stringify(items), { path: "/user" });

  redirect("/user/new-profile/create/select-platforms");
}

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

export async function checkUserNameAvailable(username: string) {
  // await getSession();
  console.log(username);

  try {
    const isAvailable = await getUserLinks();
  } catch (error) {
    console.error(error);
  }

  // console.log(username);

  return { isAvailable: getUserLinks };
}
