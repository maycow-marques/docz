import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        client: { type: "text" },
        username: { type: "text" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        console.log("credentials", credentials);

        const exists = credentials?.client === "demo" && credentials.password === "Asd@1234";

        return exists
          ? {
              id: "1",
              name: credentials.username,
              role: "Desenvolvedor",
              username: "admin@sosdocs.com.br",
              permissions: ["teste:teste"],
            }
          : null;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
};
