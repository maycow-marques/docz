import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      name: string;
      username: string;
      permissions: string[];
    } & DefaultSession;
  }

  interface User extends DefaultUser {
    id: string;
    role: string;
    name: string;
    username: string;
    permissions: string[];
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    role: string;
    name: string;
    username: string;
    permissions: string[];
  }
}
