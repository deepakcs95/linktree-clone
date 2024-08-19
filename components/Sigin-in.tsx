import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import Icon from "./Icons";

interface Provider {
  id: string;
  name: string;
}

interface SignInProps {
  provider: Provider;
}

export const SignIn: React.FC<SignInProps> = ({ provider }) => {
  return (
    <form
      action={async () => {
        "use server";
        try {
          await signIn(provider.id);
        } catch (error) {
          if (error instanceof AuthError) {
            return redirect(`/auth`);
          }

          throw error;
        }
      }}
    >
      <button className="bg-gray-100 shadow-lg hover:bg-gray-200 p-6" type="submit">
        <Icon provider={provider.name} />{" "}
      </button>
    </form>
  );
};
