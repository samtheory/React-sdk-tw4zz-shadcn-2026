// src/features/auth/model/auth-guard.ts
import { redirect } from "@tanstack/react-router";
import { useAuthStore } from "./auth.store";

interface AuthGuardArgs {
  location: { href: string };
}

export function requireAuth({ location }: AuthGuardArgs) {
  const { token } = useAuthStore.getState();

  if (!token) {
    throw redirect({
      to: "/login",
      search: { redirect: location.href },
    });
  }
}


// NEW: inverse guard for login page
interface RedirectIfAuthedArgs {
  redirectTo?: string;
}

export function redirectIfAuthenticated({ redirectTo }: RedirectIfAuthedArgs = {}) {
  const { token } = useAuthStore.getState();

  if (token) {
    throw redirect({
      to: redirectTo ?? "/", // default go home
    });
  }
}
