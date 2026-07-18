"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Badge from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

import {
  User,
  Camera,
  Palette,
  Globe,
  Bell,
  Shield,
  Moon,
  ChevronRight,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <DashboardLayout>

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>

          <Badge color="blue">
            Settings
          </Badge>

          <h1 className="mt-4 text-5xl font-black">
            Personal Settings ⚙️
          </h1>

          <p className="mt-3 max-w-xl text-slate-500">
            Customize Flora to match your lifestyle and preferences.
          </p>

        </div>

        <Button>
          Save Changes
        </Button>

      </div>

      {/* PROFILE */}

      <Card className="mt-8">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-6">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-4xl text-white font-bold">
              E
            </div>

            <div>

              <h2 className="text-3xl font-bold">
                Erika Garcia
              </h2>

              <p className="mt-2 text-slate-500">
                Building dreams one step at a time.
              </p>

              <div className="mt-5 flex gap-3">

                <Badge color="emerald">
                  Premium
                </Badge>

                <Badge color="blue">
                  Active
                </Badge>

              </div>

            </div>

          </div>

          <Button leftIcon={<Camera size={18} />}>
            Change Photo
          </Button>

        </div>

      </Card>

      {/* SETTINGS */}

      <div className="mt-8 grid grid-cols-3 gap-6">

        <div className="col-span-2 space-y-6">
                    {[
            {
              icon: User,
              title: "Account",
              description: "Manage your personal information and account details.",
            },
            {
              icon: Palette,
              title: "Appearance",
              description: "Customize colors, theme and overall application look.",
            },
            {
              icon: Globe,
              title: "Language",
              description: "Choose your preferred language and regional settings.",
            },
            {
              icon: Moon,
              title: "Theme",
              description: "Switch between Light, Dark or System mode.",
            },
            {
              icon: Bell,
              title: "Notifications",
              description: "Configure reminders and notification preferences.",
            },
            {
              icon: Shield,
              title: "Privacy & Security",
              description: "Keep your data secure and protected.",
            },
          ].map((item) => {

            const Icon = item.icon;

            return (

              <Card
                key={item.title}
                className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-5">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 transition group-hover:bg-blue-100">

                      <Icon
                        size={26}
                        className="text-slate-700 group-hover:text-blue-600"
                      />

                    </div>

                    <div>

                      <h3 className="text-xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-slate-500">
                        {item.description}
                      </p>

                    </div>

                  </div>

                  <ChevronRight
                    size={22}
                    className="text-slate-400 transition group-hover:translate-x-1"
                  />

                </div>

              </Card>

            );

          })}

        </div>

        {/* SIDEBAR */}

        <div className="space-y-6">

          <Card>

            <h2 className="text-xl font-bold">
              Theme
            </h2>

            <div className="mt-6 space-y-3">

              <Button className="w-full">
                🌞 Light
              </Button>

              <Button
                variant="secondary"
                className="w-full"
              >
                🌙 Dark
              </Button>

              <Button
                variant="ghost"
                className="w-full"
              >
                💻 System
              </Button>

            </div>

          </Card>

          <Card>

            <h2 className="text-xl font-bold">
              Language
            </h2>

            <div className="mt-6 space-y-3">

              <Button
                variant="secondary"
                className="w-full"
              >
                🇮🇩 Bahasa Indonesia
              </Button>

              <Button
                variant="ghost"
                className="w-full"
              >
                🇺🇸 English
              </Button>

            </div>

          </Card>

          <Card>

            <h2 className="text-xl font-bold">
              Storage
            </h2>

            <div className="mt-6">

              <div className="flex justify-between text-sm">

                <span className="text-slate-500">
                  Used
                </span>

                <strong>
                  2.4 GB / 10 GB
                </strong>

              </div>

              <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">

                <div className="h-full w-1/4 rounded-full bg-blue-600" />

              </div>

            </div>

          </Card>

        </div>

      </div>

      {/* QUICK PREFERENCES */}

      <div className="mt-8">
                <Card>

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold">
                Quick Preferences
              </h2>

              <p className="mt-2 text-slate-500">
                Frequently used settings for your daily workflow.
              </p>

            </div>

            <Badge color="emerald">
              Recommended
            </Badge>

          </div>

          <div className="mt-8 divide-y divide-slate-100">

            {[
              {
                title: "Enable Notifications",
                desc: "Receive reminders and important updates.",
                enabled: true,
              },
              {
                title: "Dark Mode",
                desc: "Reduce eye strain in low-light environments.",
                enabled: false,
              },
              {
                title: "Auto Backup",
                desc: "Automatically save your data to the cloud.",
                enabled: true,
              },
              {
                title: "Biometric Lock",
                desc: "Secure Flora using fingerprint or Face ID.",
                enabled: false,
              },
            ].map((item) => (

              <div
                key={item.title}
                className="flex items-center justify-between py-6"
              >

                <div>

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.desc}
                  </p>

                </div>

                <button
                  className={`relative h-8 w-14 rounded-full transition ${
                    item.enabled
                      ? "bg-emerald-500"
                      : "bg-slate-300"
                  }`}
                >
                  <div
                    className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition ${
                      item.enabled
                        ? "left-7"
                        : "left-1"
                    }`}
                  />
                </button>

              </div>

            ))}

          </div>

        </Card>

      </div>

      {/* BACKUP & DEVICES */}

      <div className="mt-8 grid grid-cols-3 gap-6">

        <Card>

          <div className="flex items-center justify-between">

            <h2 className="text-xl font-bold">
              Backup
            </h2>

            <Badge color="emerald">
              Synced
            </Badge>

          </div>

          <div className="mt-8 space-y-4">

            <div className="flex justify-between">

              <span className="text-slate-500">
                Last Backup
              </span>

              <strong>
                Today
              </strong>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-500">
                Cloud Status
              </span>

              <strong className="text-emerald-600">
                Connected
              </strong>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-500">
                Backup Size
              </span>

              <strong>
                1.8 GB
              </strong>

            </div>

          </div>

          <div className="mt-8">

            <Button className="w-full">
              Backup Now
            </Button>

          </div>

        </Card>

        <Card>

          <div className="flex items-center justify-between">

            <h2 className="text-xl font-bold">
              Connected Devices
            </h2>

            <Badge color="blue">
              3 Devices
            </Badge>

          </div>

          <div className="mt-8 space-y-5">

            {[
              "💻 Windows PC",
              "📱 Android Phone",
              "📲 Tablet",
            ].map((device) => (

              <div
                key={device}
                className="rounded-xl border border-slate-200 p-4"
              >

                {device}

              </div>

            ))}

          </div>

        </Card>

        <Card>

          <div className="flex items-center justify-between">

            <h2 className="text-xl font-bold">
              Security Status
            </h2>

            <Badge color="emerald">
              Safe
            </Badge>

          </div>

          <div className="mt-8 space-y-5">

            <div className="flex justify-between">

              <span className="text-slate-500">
                Password
              </span>

              <strong className="text-emerald-600">
                Strong
              </strong>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-500">
                2FA
              </span>

              <strong>
                Enabled
              </strong>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-500">
                Recent Login
              </span>

              <strong>
                Today
              </strong>

            </div>

          </div>

        </Card>

      </div>

      {/* ABOUT FLORA */}

      <div className="mt-8">
                <Card className="overflow-hidden">

          <div className="flex items-center justify-between">

            <div>

              <Badge color="emerald">
                Flora OS
              </Badge>

              <h2 className="mt-5 text-4xl font-black">
                Built for Your Better Life 🌿
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-slate-500">
                Flora is your personal life operating system. From managing
                finances, planning goals, tracking habits, writing journals,
                organizing studies, to chasing your biggest dreams—everything
                is designed to help you grow a little every single day.
              </p>

            </div>

            <div className="hidden lg:flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-blue-100">

              <span className="text-7xl">
                🌿
              </span>

            </div>

          </div>

          <div className="mt-10 grid grid-cols-4 gap-6">

            <div className="rounded-2xl bg-slate-50 p-6">

              <p className="text-sm text-slate-500">
                Version
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                v1.0.0
              </h3>

            </div>

            <div className="rounded-2xl bg-slate-50 p-6">

              <p className="text-sm text-slate-500">
                Build
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                2026.07
              </h3>

            </div>

            <div className="rounded-2xl bg-slate-50 p-6">

              <p className="text-sm text-slate-500">
                License
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Personal
              </h3>

            </div>

            <div className="rounded-2xl bg-slate-50 p-6">

              <p className="text-sm text-slate-500">
                Status
              </p>

              <h3 className="mt-2 text-2xl font-bold text-emerald-600">
                Stable
              </h3>

            </div>

          </div>

        </Card>

      </div>

      {/* FOOTER */}

      <div className="mt-10 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-10 py-12 text-white">

        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

          <div>

            <h2 className="text-4xl font-black">
              Thank you for using Flora 💚
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              Your goals, dreams, finances, studies, and memories all live
              in one beautiful place. Keep growing, keep learning,
              and never stop believing in yourself.
            </p>

          </div>

          <div className="text-center">

            <div className="text-7xl">
              🚀
            </div>

            <p className="mt-4 text-slate-300">
              Build your future,
              <br />
              one day at a time.
            </p>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}
