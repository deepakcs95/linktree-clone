import { auth } from "@/auth";
import Logo from "@/components/logo";
import { SignOut } from "@/components/sign-out";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  console.log(session?.user?.name);

  if (!session) redirect("/auth");

  return (
    <main className="flex  min-h-screen  items-center justify-between p-24">
      <Logo />
      <SignOut />
    </main>
  );
}
