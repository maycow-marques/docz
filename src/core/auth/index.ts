import { faker } from "@faker-js/faker";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/",
  },
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

        if (!credentials) return null;

        const exists =
          credentials?.client.toLocaleLowerCase() === "demo" && credentials.password === "Asd@1234";

        return exists
          ? {
              id: "1",
              name: faker.person.fullName(),
              role: "Desenvolvedor",
              email: faker.internet.email(),
              permissions: ["teste:teste"],
            }
          : null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Add relevant information to the token
        token.name = user.name;
        token.role = user.role;
        token.email = user.email;
        token.permissions = user.permissions;
      }

      return token;
    },

    async session({ token, session }) {
      session.user.name = token.name;
      session.user.role = token.role;
      session.user.email = token.email;
      session.user.permissions = token.permissions;

      return session;
    },
  },
};
