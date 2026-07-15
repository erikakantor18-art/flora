"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";

export default function Home() {

  const router = useRouter();

  useEffect(() => {

    async function checkSession() {

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {

        router.replace("/dashboard");

      } else {

        router.replace("/login");

      }

    }

    checkSession();

  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      Loading...
    </div>
  );

}