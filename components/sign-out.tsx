import { signOut } from "@/auth"
 
export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button className="absolute top-6 right-5 lg:top-7 lg:right-15 bg-black text-white px-5 py-4 rounded-md" type="submit">Sign Out</button>
    </form>
  )
}