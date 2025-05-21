import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      const isOnOldDashboard = nextUrl.pathname.startsWith("/olddashboard");
      if (isOnDashboard || isOnOldDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Always redirect to home page after login
      return baseUrl;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
