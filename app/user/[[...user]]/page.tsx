import Logo from "@/components/Logo";
import { SignOut } from "@/components/Sign-out";
import UserLinkItem from "@/components/UserLinkItem";
import { getUserLinks } from "@/lib/db";
import Link from "next/link";
import React from "react";

const Users = async () => {
  const userLinks = await getUserLinks();

  return (
    <div className="flex min-h-screen min-w-[300px] flex-col items-center justify-center p-4 lg:p-12">
      <Logo />
      <div className="flex flex-col items-center w-full gap-4 lg:gap-6 pt-4 lg:pt-10 animate-slideUp transition-all max-w-sm lg:max-w-lg">
        <h2 className="text-black text-4xl lg:text-5xl text-center font-extrabold">
          Welcome to Linktree!
          <span className="block text-[#40FF55] text-4xl lg:text-5xl mt-2">{userLinks?.name}</span>
        </h2>

        <div className="w-full flex flex-col items-center text-center gap-2 lg:gap-3">
          <p className="text-base lg:text-lg font-bold">Here are your Links</p>
          <ul className="w-full space-y-2">
            {userLinks?.links &&
              userLinks.links.map((link) => (
                <UserLinkItem key={link.id} userName={link.userName} />
              ))}
          </ul>
        </div>
        <Link
          className="w-full text-center bg-blue-600 hover:bg-blue-500 p-3 lg:p-4 text-base lg:text-lg text-white rounded-3xl"
          href="/user/new-profile/create/"
        >
          Create New Link
        </Link>
      </div>
      <SignOut />
    </div>
  );
};

export default Users;
