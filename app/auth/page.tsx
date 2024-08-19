import React from "react";
import { auth, providerMap } from "@/auth";
import { permanentRedirect } from "next/navigation";
import Logo from "@/components/Logo";
import { SignIn } from "@/components/Sigin-in";

const Auth = async () => {
  const session = await auth();

  if (session?.user) permanentRedirect(`user/` + session?.user?.name);

  return (
    <div className="relative flex flex-col min-h-screen min-w-[300px] justify-center items-center px-7 ">
      <div className="w-full max-w-md lg:max-w-2xl flex flex-col items-center">
        <Logo />
        <h2 className="text-center text-black text-4xl lg:text-5xl font-extrabold mt-4 lg:mt-8">
          Welcome to Linktree!
        </h2>
        <p className="pt-4 lg:pt-6 text-gray-600 text-lg text-center">
          Choose your Linktree username. You can always change it later.
        </p>
        <p className="pt-8 lg:pt-12 pb-8 lg:pb-12 text-gray-600 text-lg text-center">
          By continuing, you agree to receive offers, news, and updates from Linktree.
        </p>
        <div className="flex flex-wrap justify-center gap-2 w-full">
          {Object.values(providerMap).map((provider) => (
            <SignIn key={provider.name} provider={provider} />
          ))}
        </div>
        <p className="pt-6 text-gray-600 text-lg text-center">Already have an account?</p>
      </div>
    </div>
  );
};

export default Auth;
