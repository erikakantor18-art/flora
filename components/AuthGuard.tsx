"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import useAuth from "@/hooks/useAuth";

type Props = {
  children: React.ReactNode;
};

export default function AuthGuard({
  children,
}: Props) {

  const router = useRouter();

  const {
    user,
    loading,
  } = useAuth();

  useEffect(() => {

    if (!loading && !user) {

      router.replace("/login");

    }

  }, [
    user,
    loading,
    router,
  ]);

  if (loading) {

    return (

      <main className="flex min-h-screen items-center justify-center bg-slate-100">

        <h2 className="text-2xl font-bold">

          Loading...

        </h2>

      </main>

    );

  }

  if (!user) {

    return null;

  }

  return children;

}