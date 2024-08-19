import Link from "next/link";

export default async function Home() {
  return (
    <div className="bg-pink-200 min-w-[300px] min-h-screen pt-5">
      <header className="flex justify-between items-center p-4 mx-2 md:mx-11 lg:mx-52 bg-white rounded-full">
        <div className="text-xl lg:text-2xl font-bold">Linktree*</div>
        <div className="flex space-x-4">
          <Link href="/auth">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-full">Login</button>
          </Link>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center pt-10 lg:pt-20 mx-5 lg:mx-20 gap-6 lg:gap-7">
        <h1 className="max-w-[15ch] text-4xl lg:text-6xl text-center font-bold text-purple-800">
          Create and customize your Linktree in minutes
        </h1>
        <p className="max-w-[50ch] text-lg lg:text-xl text-center">
          Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events
          and more. It all comes together in a link in bio landing page designed to convert.
        </p>
        <Link
          href="/user"
          className="px-6 lg:px-8 py-3 lg:py-4 bg-purple-700 text-white text-lg lg:text-xl rounded-full"
        >
          Get started for free
        </Link>
      </main>
    </div>
  );
}
