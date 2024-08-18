import { auth } from "@/auth";
import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import { permanentRedirect } from "next/navigation";
import { PrismaAdapter } from "@auth/prisma-adapter";

const prisma = new PrismaClient();

/*
 * Function to get user links from the database.
 */

export const getUserLinks = async () => {
  const session = await getSession();

  console.log(session);

  if (session.user) {
    const dbUser = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        links: {
          include: {
            socialLinks: true, // Include the associated social links
          },
        },
      },
    });

    if (dbUser) {
      if (dbUser.links) {
        return {
          name: dbUser.name,
          links: dbUser.links,
        };
      } else {
        return {
          name: dbUser.name,
          links: null,
        };
      }
    } else {
      const newUser = await prisma.user.create({
        data: {
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        },
      });
      return {
        name: newUser.name,
        links: null,
      };
    }
  }
};

/*
 * Function to get the current user session.
 * Redirects to the authentication page if the session is not found.
 */

export const getSession = async () => {
  const session = await auth();
  if (!session) {
    permanentRedirect("/auth");
  } else {
    return session;
  }
};

/*
 * Function to check if a username is available.
 * Returns true if the username is not found in the database, otherwise false.
 */

export const isUserNameAvailable = async (userName) => {
  const name = await prisma.link.findUnique({
    where: { userName: userName },
    select: { userName: true },
  });

  return !name;
};
