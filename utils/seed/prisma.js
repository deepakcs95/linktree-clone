const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const userId = "clzzekz9x0000kse8x6dqawj0"; // Replace with the actual user ID

  const link = await prisma.link.create({
    data: {
      userName: "deepakcs95",
      profileName: "Deepak's Profile",
      imageUrl: "https://example.com/profile-image.jpg",
      description: "Welcome to Deepak's profile. Follow my social links below.",
      userId: userId,
      socialLinks: {
        create: [
          { platform: "GitHub", url: "https://github.com/deepakcs95" },
          { platform: "LinkedIn", url: "https://linkedin.com/in/deepakcs95" },
          { platform: "Twitter", url: "https://twitter.com/deepakcs95" },
        ],
      },
    },
  });

  console.log({ link });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
