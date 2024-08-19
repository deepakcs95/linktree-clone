"use server";

import {
  deleteLink,
  findUserByEmail,
  getSession,
  InputData,
  isUserNameAvailable,
  queryLinkWithSocialLinks,
  saveUserData,
} from "@/lib/db";
import { withErrorHandling } from "@/utils/helper";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE = {
  USER_NAME: "userName",
  PLATFORMS: "platforms",
  SOCIAL_LINKS: "socialLinks",
  PROFILE_NAME: "profileName",
  DESCRIPTION: "description",
  IMAGE_URL: "imageUrl",
} as const;

export async function saveUserNames(username: string) {
  console.log("Saving items:", username);

  // Set a cookie with the items data
  cookies().delete(COOKIE.USER_NAME);
  cookies().set(COOKIE.USER_NAME, JSON.stringify(username), {
    path: "/user",
  });
  redirect("/user/new-profile/create/select-platforms");
}

export async function saveSelectedPlatformItems(items: String[]) {
  // Set a cookie with the items data
  cookies().delete(COOKIE.PLATFORMS);
  cookies().set(COOKIE.PLATFORMS, JSON.stringify(items), {
    path: "/user",
  });

  console.log("Saving items:", cookies().get(COOKIE.PLATFORMS));
  redirect("/user/new-profile/create/add-links");
}

export async function saveSocialLinks(items: Record<string, string>) {
  console.log("Saving items:", items);
  // Set a cookie with the items data
  cookies().delete(COOKIE.SOCIAL_LINKS);
  cookies().set(COOKIE.SOCIAL_LINKS, JSON.stringify(items), { path: "/user" });

  redirect("/user/new-profile/create/select-profile");
}

async function saveUserProfileInternal({ title, bio }: { title: string; bio: string }) {
  console.log("Saving items:", title, bio);

  // Set a cookie with the items data
  cookies().set(COOKIE.DESCRIPTION, JSON.stringify({ title, bio }), { path: "/user" });

  // Retrieve and parse necessary cookies
  const userName = cookies().get(COOKIE.USER_NAME)?.value;
  const socialLinks = cookies().get(COOKIE.SOCIAL_LINKS)?.value;
  const description = cookies().get(COOKIE.DESCRIPTION)?.value;

  if (!userName || !socialLinks || !description) {
    throw new Error("Missing required user data in cookies");
  }

  const inputData: InputData = {
    userName: JSON.parse(userName),
    socialLinks: JSON.parse(socialLinks),
    description: JSON.parse(description),
  };

  // Clear cookies
  cookies().delete(COOKIE.USER_NAME);
  cookies().delete(COOKIE.SOCIAL_LINKS);
  cookies().delete(COOKIE.DESCRIPTION);

  // Save user data to the server or database
  return await saveUserData(inputData);
}

const saveUserProfile = withErrorHandling(saveUserProfileInternal);

export async function handleProfileSave(title: string, bio: string) {
  console.log(title, bio);

  const result = await saveUserProfile({ title, bio });
  if (result.success) {
    redirect("/user/");
  } else {
    redirect("/user/new-profile/create/");
  }
}

export async function checkUserNameAvailable(username: string) {
  const isAvailable = await isUserNameAvailable(username);
  return { isAvailable };
}

/* 
Delete Links using userName 
*/

export async function deleteLinkAndSocialLinks(userName: string) {
  const session = await getSession();

  console.log(session?.user?.email);

  try {
    const user = await findUserByEmail(session?.user?.email || "");

    if (!user) {
      throw new Error("User not found");
    }

    const link = user.links.find((link) => link.userName === userName);

    if (!link) {
      throw new Error("Link not found or does not belong to the user");
    }

    await deleteLink(link.id);
    revalidatePath("/user");
    console.log("Link deleted successfully:", userName);
  } catch (error) {
    console.error("Error creating link:", error);
  }
}

export async function getLinkWithSocialLinks(userName: string) {
  let link;
  try {
    link = await queryLinkWithSocialLinks(userName);
    return link;
  } catch (error) {}
  if (!link) {
    redirect("/user");
  }
}

export async function mockAction() {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds

  // Send response
  return true;
}
