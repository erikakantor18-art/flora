"use client";

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import {
  getProfile,
  saveProfile,
} from "@/services/profile.service";

import {
  uploadAvatar,
} from "@/services/storage.service";

export default function useProfile() {

  const [profile, setProfile] =
    useState<any>(null);

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
    data: any
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

        ...profile,

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