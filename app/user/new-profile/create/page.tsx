import { auth } from "@/auth";
import Logo from "@/components/Logo";
import { SignOut } from "@/components/Sign-out";
import CreateNewLink from "@/components/CreateLink";
import { permanentRedirect } from "next/navigation";
import React from "react";

const Users = async () => {
  const session = await auth();
  console.log(session?.user?.name);

  if (!session) permanentRedirect("/auth");

  return (
    <div className="flex min-h-screen min-w-[300px] justify-center p-6 lg:p-24">
      <div className="w-full max-w-md px-2 lg:max-w-2xl  flex gap-2 flex-col items-center">
        <Logo />
        <h2 className="text-black text-3xl md:text-5xl lg:text-7xl text-center font-extrabold  mt-4 lg:mt-8">
          Welcome to <span className="text-[#40FF55]">Linktree!</span>
        </h2>
        <p className="pt-6 text-gray-600 text-lg lg:text-[18px] text-center">
          Choose your Linktree username. You can always change it later.
        </p>
        <CreateNewLink />
        <SignOut />
      </div>
    </div>
  );
};

export default Users;
