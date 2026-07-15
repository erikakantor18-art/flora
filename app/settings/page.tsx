"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import Card from "@/components/ui/Card";

import useProfile from "@/hooks/useProfile";

export default function Settings() {

  const {

    profile,

    loading,

    save,

    upload,

  } = useProfile();

  const [name, setName] =
    useState("");

  const [income, setIncome] =
    useState("");

  const [budget, setBudget] =
    useState("");

  const [currency, setCurrency] =
    useState("IDR");

  const [image, setImage] =
    useState<File>();

  const [preview, setPreview] =
    useState("");

  useEffect(() => {

    if (!profile) return;

    setName(
      profile.full_name ?? ""
    );

    setIncome(
      String(
        profile.monthly_income ?? 0
      )
    );

    setBudget(
      String(
        profile.monthly_budget ?? 0
      )
    );

    setCurrency(
      profile.currency ?? "IDR"
    );

    setPreview(
      profile.avatar_url ?? ""
    );

  }, [profile]);

  async function handleSave() {

    let avatar =
      profile?.avatar_url ?? null;

    if (image) {

      const url =
        await upload(image);

      if (url) {

        avatar = url;

      }

    }

    await save({

      full_name: name,

      monthly_income:
        Number(income),

      monthly_budget:
        Number(budget),

      currency,

      avatar_url: avatar,

    });

  }

  return (

    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 overflow-y-auto p-8">

        <Topbar />

        <Card>

          <h1 className="mb-2 text-4xl font-black">

            ⚙ Settings

          </h1>

          <p className="mb-8 text-slate-500">

            Manage your personal finance preferences.

          </p>

          <div className="space-y-6">

            <div className="flex flex-col items-center">

              <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-green-500">

                {preview ? (

                  <Image
                    src={preview}
                    alt="Avatar"
                    fill
                    sizes="128px"
                    unoptimized
                    className="object-cover"
                  />

                ) : (

                  <div className="flex h-full w-full items-center justify-center bg-slate-200 text-5xl">

                    👤

                  </div>

                )}

              </div>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {

                  if (
                    !e.target.files?.length
                  ) return;

                  const file =
                    e.target.files[0];

                  setImage(file);

                  setPreview(
                    URL.createObjectURL(file)
                  );

                }}
              />

            </div>

            <div>

              <label className="mb-2 block font-semibold">

                Full Name

              </label>

              <input
                value={name}
                onChange={(e) =>
                  setName(
                    e.target.value
                  )
                }
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-green-500"
              />

            </div>

            <div>

              <label className="mb-2 block font-semibold">

                Monthly Salary

              </label>

              <input
                type="number"
                value={income}
                onChange={(e) =>
                  setIncome(
                    e.target.value
                  )
                }
                placeholder="4700000"
                className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-green-500"
              />

            </div>

            <div>

              <label className="mb-2 block font-semibold">

                Monthly Budget

              </label>

              <input
                type="number"
                value={budget}
                onChange={(e) =>
                  setBudget(
                    e.target.value
                  )
                }
                placeholder="2500000"
                className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-green-500"
              />

            </div>

            <div>

              <label className="mb-2 block font-semibold">

                Currency

              </label>

              <select
                value={currency}
                onChange={(e) =>
                  setCurrency(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-green-500"
              >

                <option>IDR</option>

                <option>USD</option>

                <option>AUD</option>

              </select>

            </div>

            <button
              disabled={loading}
              onClick={handleSave}
              className="rounded-xl bg-green-600 py-3 font-bold text-white transition hover:bg-green-700 disabled:opacity-50"
            >

              {loading
                ? "Saving..."
                : "Save Profile"}

            </button>

          </div>

        </Card>

      </section>

    </main>

  );

}