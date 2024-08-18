import NextAuth from "next-auth";
import { Provider } from "next-auth/providers";
import GitHub from "next-auth/providers/github";
import google from "next-auth/providers/google";

const providers: Provider[] = [GitHub, google];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  pages: {
    signIn: "/auth",
  },
});

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});
