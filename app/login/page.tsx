"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import useAuth from "@/hooks/useAuth";

export default function LoginPage() {

  const router =
    useRouter();

  const {
    user,
    login,
    register,
  } = useAuth();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  useEffect(() => {

    if (user) {

      router.replace(
        "/dashboard"
      );

    }

  }, [user, router]);

  function handleLogin() {

    if (!email || !password) {

      alert(
        "Email dan Password wajib diisi"
      );

      return;

    }

    login(
      email,
      password
    );

  }

  function handleRegister() {

    if (!email || !password) {

      alert(
        "Email dan Password wajib diisi"
      );

      return;

    }

    register(
      email,
      password
    );

  }

  return (

    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">

      <Card className="w-full max-w-md">

        <h1 className="text-center text-4xl font-black">

          Erika OS

        </h1>

        <p className="mt-2 text-center text-slate-500">

          Login to continue

        </p>

        <div className="mt-8 space-y-4">

          <Input
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <Button
            className="w-full"
            onClick={handleLogin}
          >

            Login

          </Button>

          <Button
            className="w-full bg-slate-700 hover:bg-slate-800"
            onClick={handleRegister}
          >

            Register

          </Button>

        </div>

      </Card>

    </main>

  );

}