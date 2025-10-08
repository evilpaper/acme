import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnProfile = nextUrl.pathname.startsWith("/profile");

      // Protect logged in pages
      if (isOnProfile) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }

      // Allow access to all other pages (landing pages, etc.)
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Always redirect to home page after login
      return baseUrl;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
