import { auth } from "@/auth";
import { PrismaClient, User, Link, SocialLink } from "@prisma/client";
import { permanentRedirect } from "next/navigation";
import { Session } from "next-auth";
import { PlatformBaseUrls } from "@/utils/platformTypes";
import { unstable_cache as cache } from "next/cache";

const prisma = new PrismaClient();

interface UserLinks {
  name: string | null;
  links: Array<Link & { socialLinks: SocialLink[] }>;
}

interface Description {
  title: string;
  bio: string;
}

export interface InputData {
  userName: string;
  imageUrl?: string;
  socialLinks: Record<string, string>;
  description: Description;
}

export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: { email },
    include: {
      links: {
        include: {
          socialLinks: true,
        },
      },
    },
  });
};

/*
 * Function to get user links from the database.
 */
export const getUserLinks = async (): Promise<UserLinks | null> => {
  const session = await getSession();

  console.log(session?.user?.email);

  if (!session?.user?.name || !session?.user?.email) return null;

  if (session?.user?.email) {
    const dbUser = await findUserByEmail(session.user.email);

    if (dbUser) {
      return {
        name: dbUser.name,
        links: dbUser.links || [],
      };
    } else {
      const newUser = await prisma.user.create({
        data: {
          name: session.user.name,
          email: session.user.email,
          image: session.user.image,
        },
      });
      return {
        name: newUser.name,
        links: [],
      };
    }
  }
  return null;
};

/*
 * Function to get the current user session.
 * Redirects to the authentication page if the session is not found.
 */
export const getSession = async (): Promise<Session> => {
  const session = await auth();
  if (!session) {
    permanentRedirect("/auth");
    // This line is technically unreachable, but TypeScript doesn't know that
    throw new Error("Redirect failed");
  }
  return session;
};

/*
 * Function to check if a username is available.
 * Returns true if the username is not found in the database, otherwise false.
 */
export const isUserNameAvailable = async (userName: string): Promise<boolean> => {
  // await getSession();

  const name = await prisma.link.findUnique({
    where: { userName: userName },
    select: { userName: true },
  });

  return !name;
};

export const saveUserData = async (data: InputData) => {
  const session = await getSession();

  console.log(session?.user?.email);

  try {
    const user = await findUserByEmail(session?.user?.email || "");

    if (!user) {
      throw new Error("User not found");
    }

    const newLink = await prisma.link.create({
      data: {
        userName: data.userName,
        profileName: data.description.title,
        description: data.description.bio,
        userId: user.id,
        imageUrl: session?.user?.image,
        socialLinks: {
          create: Object.entries(data.socialLinks).map(([platform, url]) => ({
            platform,
            url,
          })),
        },
      },
    });

    console.log("Link created successfully:", newLink);
  } catch (error) {
    console.error("Error creating link:", error);
  }
};

export async function deleteLink(id: string) {
  await prisma.link.delete({
    where: { id },
  });
}

export const queryLinkWithSocialLinks = async (userName: string) => {
  try {
    const linkWithSocialLinks = await prisma.link.findUnique({
      where: { userName: userName[0] },
      include: {
        socialLinks: true,
      },
    });

    if (!linkWithSocialLinks) {
      throw new Error(`No link found for userName: ${userName}`);
    }

    return linkWithSocialLinks;
  } catch (error) {
    console.error("Error fetching link with social links:", error);
    throw error;
  }
};
