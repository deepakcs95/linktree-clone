import { auth } from "@/auth";
import Logo from "@/components/logo";
import { SignOut } from "@/components/sign-out";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  return (
    <div className="bg-pink-200 min-h-screen   pt-5 ">
      <header className="flex justify-between items-center p-4 lg:mx-11 bg-white rounded-full  ">
        <div className="text-2xl font-bold">Linktree*</div>
        <div className="flex space-x-4">
          <Link href={"/auth"}>
            <button className="px-4 py-2 bg-gray-900 text-white rounded-full">Login</button>
          </Link>
        </div>
      </header>
      <main>
        <div className="mx-5 lg:mx-20  pt-20   flex flex-col gap-7 items-center justify-center">
          <h1 className="max-w-[12ch] text-6xl text-center font-bold text-purple-800 mb-6">
            Create and customize your Linktree in minutes
          </h1>
          <p className="max-w-[40ch] text-xl mb-8 text-center">
            Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events
            and more. It all comes together in a link in bio landing page designed to convert.
          </p>
          <Link
            href="/auth"
            className="px-8 py-4 bg-purple-700 text-white text-xl rounded-full inline-block"
          >
            Get started for free
          </Link>
        </div>
      </main>
    </div>
  );
}
