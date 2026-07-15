"use client";

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import {
  getProfile,
  saveProfile,
  Profile,
} from "@/services/profile.service";

import {
  uploadAvatar,
} from "@/services/storage.service";

export default function useProfile() {

  const [profile, setProfile] =
    useState<Profile | null>(null);

  const [loading, setLoading] =
    useState(false);

  async function loadProfile() {

    try {

      const data =
        await getProfile();

      setProfile(data);

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to load profile"
      );

    }

  }

  useEffect(() => {

    loadProfile();

  }, []);

  async function save(
    data: Omit<Profile, "id">
  ) {

    try {

      setLoading(true);

      await saveProfile(data);

      toast.success(
        "Profile saved"
      );

      await loadProfile();

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to save profile"
      );

    } finally {

      setLoading(false);

    }

  }

  async function upload(
    file: File
  ) {

    try {

      setLoading(true);

      const avatar =
        await uploadAvatar(file);

      const updated = {

        full_name:
          profile?.full_name ?? "",

        monthly_income:
          profile?.monthly_income ?? 0,

        monthly_budget:
          profile?.monthly_budget ?? 0,

        currency:
          profile?.currency ?? "IDR",

        avatar_url: avatar,

      };

      await saveProfile(updated);

      toast.success(
        "Avatar updated"
      );

      await loadProfile();

      return avatar;

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to upload avatar"
      );

      return null;

    } finally {

      setLoading(false);

    }

  }

  return {

    profile,

    loading,

    save,

    upload,

    reload: loadProfile,

  };

}