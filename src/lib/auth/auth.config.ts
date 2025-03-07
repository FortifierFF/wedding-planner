import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

// Temporary mock user for development
const MOCK_USER = {
  id: "mock-user-id",
  name: "Test User",
  email: "test@example.com",
  image: null,
  role: "user",
};

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/error",
    verifyRequest: "/verify-request",
    newUser: "/register",
  },
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    authorized({ auth, request: { nextUrl } }) {
      // During development, consider everything authorized
      return true;

      // When ready to implement auth again, use this:
      /*
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      const isOnAdmin = nextUrl.pathname.startsWith("/admin");
      const isOnVendor = nextUrl.pathname.startsWith("/vendor");
      
      // Public routes - accessible to everyone
      if (!isOnDashboard && !isOnAdmin && !isOnVendor) {
        return true;
      }

      // Protected routes - check if logged in
      if (!isLoggedIn) {
        return false;
      }

      // Role-based access control
      if (isOnAdmin && auth?.user?.role !== "admin") {
        return false;
      }

      if (isOnVendor && auth?.user?.role !== "vendor") {
        return false;
      }

      return true;
      */
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role as string;
      }
      return token;
    },
    session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async authorize(credentials) {
        // For development, just return a mock user
        console.log("Bypassing authentication during development");
        return MOCK_USER;

        // When ready to implement auth again, use this:
        /*
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { email, password } = parsedCredentials.data;

        // Find user by email
        const [user] = await db
          .select()
          .from(users)
          .where(eq(users.email, email.toLowerCase()));

        if (!user || !user.password) {
          return null;
        }

        // Verify password
        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (!passwordsMatch) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role,
        };
        */
      },
    }),
    // Add more providers here as needed (Google, Facebook, etc.)
  ],
}; 