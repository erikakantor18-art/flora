"use client";

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import type { User } from "@supabase/supabase-js";

import { supabase } from "@/lib/supabase";

import {
  signIn,
  signOut,
  signUp,
  getUser,
} from "@/services/auth.service";

function getErrorMessage(
  error: unknown
): string {

  if (error instanceof Error) {

    return error.message;

  }

  return "Something went wrong.";

}

export default function useAuth() {

  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  async function loadUser() {

    try {

      const current =
        await getUser();

      setUser(current);

    } catch (error) {

      console.error(error);

      toast.error(
        getErrorMessage(error)
      );

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {

        setUser(session?.user ?? null);

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

    try {

      const data =
        await signIn(
          email,
          password
        );

      setUser(data.user);

      toast.success(
        "Login berhasil"
      );

    } catch (error) {

      console.error(error);

      toast.error(
        getErrorMessage(error)
      );

    }

  }

  async function register(
    email: string,
    password: string
  ) {

    try {

      const data =
        await signUp(
          email,
          password
        );

      console.log(data);

      toast.success(
        "Register berhasil"
      );

    } catch (error) {

      console.error(error);

      toast.error(
        getErrorMessage(error)
      );

    }

  }

  async function logout() {

    try {

      await signOut();

      setUser(null);

      toast.success(
        "Logout berhasil"
      );

    } catch (error) {

      console.error(error);

      toast.error(
        getErrorMessage(error)
      );

    }

  }

  return {

    user,

    loading,

    login,

    register,

    logout,

  };

}