import React from "react";
import { auth, providerMap } from "@/auth";
import { permanentRedirect } from "next/navigation";
import Logo from "@/components/Logo";
import { SignIn } from "@/components/sigin-in";

const Auth = async () => {
  const session = await auth();

  if (session?.user) permanentRedirect(`user/` + session?.user?.name);

  return (
    <div className="relative flex min-h-screen min-w-[500px]  justify-center p-24">
      <Logo />
      <div className="flex  pt-4 lg:w-[640px] lg:pt-14 flex-col items-center w-full ">
        <h2 className="text-center text-black text-5xl lg:text-5xl font-extrabold ">
          Welcome to Linktree!
        </h2>
        <p className="pt-6 text-gray-600 text-[18px] text-center">
          Choose your Linktree username. You can always change it later.
        </p>
        <p className="pt-12 py-8 text-gray-600 text-[18px] text-center">
          By continuing, you agree to receive offers, news and updates from Linktree
        </p>
        <div className="flex  gap-2 ">
          {Object.values(providerMap).map((provider) => (
            <SignIn key={provider.name} provider={provider} />
          ))}
        </div>
        <p className="pt-6 text-gray-600 text-[18px] text-center">Already have an account? </p>
      </div>
    </div>
  );
};

export default Auth;
