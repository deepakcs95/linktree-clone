import { signOut } from "@/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        className="absolute  top-6   lg:top-7   right-6 md:right-16 lg:right-52  first-line: bg-black text-white sm:px-2 sm:py-2 px-5 py-4 rounded-md"
        type="submit"
      >
        Sign Out
      </button>
    </form>
  );
}
