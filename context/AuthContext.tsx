"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type {
  User,
} from "@supabase/supabase-js";

import toast from "react-hot-toast";

import { supabase } from "@/lib/supabase";

import {
  signIn,
  signOut,
  signUp,
  getUser,
} from "@/services/auth.service";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<void>;
  register: (
    email: string,
    password: string
  ) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext =
  createContext<AuthContextType | null>(
    null
  );

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function load() {

      const current =
        await getUser();

      setUser(current);

      setLoading(false);

    }

    void load();

    const {
      data: { subscription },
    } =
      supabase.auth.onAuthStateChange(
        (_event, session) => {

          setUser(
            session?.user ?? null
          );

          setLoading(false);

        }
      );

    return () => {

      subscription.unsubscribe();

    };

  }, []);

  async function login(
    email: string,
    password: string
  ) {

    const data =
      await signIn(
        email,
        password
      );

    setUser(data.user);

    toast.success(
      "Login berhasil"
    );

  }

  async function register(
    email: string,
    password: string
  ) {

    await signUp(
      email,
      password
    );

    toast.success(
      "Register berhasil"
    );

  }

  async function logout() {

    await signOut();

    setUser(null);

    toast.success(
      "Logout berhasil"
    );

  }

  return (

    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export function useAuthContext() {

  const context =
    useContext(AuthContext);

  if (!context) {

    throw new Error(
      "useAuthContext harus dipakai di dalam AuthProvider."
    );

  }

  return context;

}