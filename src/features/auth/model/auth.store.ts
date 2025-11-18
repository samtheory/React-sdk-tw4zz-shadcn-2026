// src/features/auth/model/auth.store.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type AuthStatus = "idle" | "authenticated" | "unauthenticated";

interface AuthState {
  token: string | null;
  status: AuthStatus;
  setToken: (token: string | null) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      status: "unauthenticated",

      setToken: (token) =>
        set(() => ({
          token,
          status: token ? "authenticated" : "unauthenticated",
        })),

      clearAuth: () =>
        set(() => ({
          token: null,
          status: "unauthenticated",
        })),
    }),
    {
      name: "auth-storage", // key in localStorage
      storage: createJSONStorage(() => localStorage),
      // optional: only persist some fields
      partialize: (state) => ({
        token: state.token,
        status: state.status,
      }),
    }
  )
);
