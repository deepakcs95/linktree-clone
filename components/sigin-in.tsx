import { signIn } from "@/auth"
import { useSession } from "next-auth/react"
 
export default function SignIn() {


  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button type="submit">Signin</button>
    </form>
  )
}