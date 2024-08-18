import { auth } from "@/auth";
import DomainInputBox from "@/components/domainInputBox";
import Logo from "@/components/logo";
import { SignOut } from "@/components/sign-out";
import CreateNewLink from "@/components/createLink";
import { permanentRedirect } from "next/navigation";
import React from "react";

const Users = async () => {
  const session = await auth();
  console.log(session?.user?.name);

  if (!session) permanentRedirect("/auth");

  return (
    <div className=" flex min-h-screen  justify-center p-24">
      <Logo />
      <div className="flex text-center  pt-4 lg:w-[640px] lg:pt-14 flex-col items-center w-full ">
        <h2 className="text-black text-5xl lg:text-5xl font-extrabold ">Welcome to Linktree!</h2>
        <p className="pt-6 text-gray-600 text-[18px] text-center">
          Choose your Linktree username. You can always change it later.
        </p>
        <CreateNewLink />
      </div>
      <SignOut />
    </div>
  );
};

export default Users;
