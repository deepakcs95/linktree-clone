import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import { permanentRedirect } from "next/navigation";

const globalForPrisma = global;

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;

export const getUserLinks = async (userId) => {
  const session = await getSession();

  console.log(session);

  if (session.user) {
    const dbUser = await prisma.user.findUnique({
      where: { id: session.user.id },
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
    }
  }
};

export const getSession = async (userId) => {
  const session = await auth();
  if (!session) {
    permanentRedirect("/auth");
  } else {
    return session;
  }
};
