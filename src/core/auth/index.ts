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
      authorize(credentials) {
        const exists =
          credentials?.client === "demo" &&
          credentials?.username === "admin" &&
          credentials.password === "admin";

        return exists
          ? {
              id: "1",
              name: "admin",
              role: "Admin",
              username: "admin@sosdocs.com.br",
              permissions: ["teste:teste"],
            }
          : null;
      },
    }),
  ],
};
