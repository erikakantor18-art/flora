"use client";

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import { supabase } from "@/lib/supabase";

import {
  signIn,
  signOut,
  signUp,
  getUser,
} from "@/services/auth.service";

export default function useAuth() {

  const [user, setUser] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  async function loadUser() {

    try {

      const current =
        await getUser();

      setUser(current);

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

    } catch (error: any) {

      console.error(error);

      alert(
        error?.message ??
        JSON.stringify(error)
      );

      toast.error(
        "Login gagal"
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

    } catch (error: any) {

      console.error(error);

      alert(
        error?.message ??
        JSON.stringify(error)
      );

      toast.error(
        "Register gagal"
      );

    }

  }

  async function logout() {

    await signOut();

    setUser(null);

    toast.success(
      "Logout"
    );

  }

  return {

    user,

    loading,

    login,

    register,

    logout,

  };

}