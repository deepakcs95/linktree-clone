import { auth } from "@/auth";
import DomainInputBox from "@/components/domainInputBox";
import Logo from "@/components/logo";
import { SignOut } from "@/components/sign-out";
import { getUserLinks } from "@/lib/db";
import Link from "next/link";
import { permanentRedirect } from "next/navigation";
import React from "react";

const Users = async () => {
  const { name, links } = await getUserLinks();

  const item = JSON.stringify(links);

  return (
    <div className=" flex min-h-screen flex-col justify-center p-24">
      <Logo />
      <div className="flex  gap-8 pt-4 lg:w-[640px] lg:pt-14 flex-col items-center w-full ">
        <h2 className="text-black text-5xl text-center lg:text-5xl font-extrabold ">
          Welcome to Linktree! {name}
        </h2>
        <div>Here are your Links {item} </div>
        <Link
          className="w-full text-center bg-blue-600 hover:bg-blue-500 p-6 text-xl text-white rounded-3xl"
          href="/user/new-profile/create/"
        >
          Cereate New Link
        </Link>
      </div>
      <SignOut />
    </div>
  );
};

export default Users;
