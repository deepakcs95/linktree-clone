import Logo from "@/components/Logo";
import { SignOut } from "@/components/Sign-out";
import UserLinkItem from "@/components/UserLinkItem";
import { getUserLinks } from "@/lib/db";
import Link from "next/link";
import React from "react";

const Users = async () => {
  const userLinks = await getUserLinks();

  return (
    <div className="  flex min-h-screen  flex-col items-center justify-center p-24">
      <Logo />
      <div className="flex  gap-8 pt-4 lg:w-[640px] lg:pt-14 flex-col items-center w-full animate-slideUp transition-all">
        <h2 className="text-black text-5xl text-center lg:text-5xl font-extrabold ">
          Welcome to Linktree! {userLinks?.name}
        </h2>
        <div className="w-full flex flex-col items-center text-center gap-3">
          <p className="text-xl font-bold">Here are your Links</p>
          <ul className="w-full space-y-2 ">
            {userLinks?.links &&
              userLinks.links.map((link) => (
                <UserLinkItem key={link.id} userName={link.userName} />
              ))}
          </ul>
        </div>
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
