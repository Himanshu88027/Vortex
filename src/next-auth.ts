import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import authProvider from "./next-auth.config";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  adapter: PrismaAdapter(db),
  pages: {
    signIn: "/sign-in",
  },
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session, token }) {
      if (token.username) {
        session.user.username = token.username as string;
      }
      if (token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({token}) {
        const id = token.sub;
        if (!id) return token

        const user = await db.user.findUnique({ 
          where: { id },
          select: {
            username: true,
          },
        });
        if (!user) return token

        return {
          ...token,
          username: user.username,
        }
    },
  },
  events: {
    createUser: async ({ user }) => {
      const email = user.email || "";
      const username = email?.split("@")[0];


      await db.user.update({
        where: { email },
        data: {
          username: username,
          stream: {
            create: {
              name: `${username}'s Stream`,
            },
          }
        },
      });
    },
  },
  ...authProvider,
});
