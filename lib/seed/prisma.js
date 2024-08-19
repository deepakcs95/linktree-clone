import prisma from "./../db";

async function main() {
  const userId = "clzzr2bby00006avazozah985"; // Replace with the actual user ID

  const link = await prisma.link.create({
    data: {
      userName: "Deepa ",
      profileName: "Dee 's Profile",
      imageUrl: "https://example.com/profile-image.jpg",
      description: "Welcome to De 's profile. Follow my social links below.",
      userId: userId,
      socialLinks: {
        create: [
          { platform: "GitHub", url: "https://github.com/deepak " },
          { platform: "LinkedIn", url: "https://linkedin.com/in/deep " },
          { platform: "Twitter", url: "https://twitter.com/deepak " },
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
