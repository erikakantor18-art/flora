"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { supabase } from "@/lib/supabase";

import {
  getStudies,
  addStudy as createStudy,
  updateStudy as editStudy,
  deleteStudy as removeStudy,
} from "@/services/study.service";

import { Study } from "@/types";

export default function useStudy() {

  const [studies, setStudies] =
    useState<Study[]>([]);

  const [loading, setLoading] =
    useState(false);

  async function loadStudies() {

    try {

      const data =
        await getStudies();

      setStudies(data);

    } catch (error) {

      console.error(error);

    }

  }

  useEffect(() => {

    loadStudies();

    const channel =
      supabase

        .channel("study")

        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "study",
          },
          () => {

            loadStudies();

          }
        )

        .subscribe();

    return () => {

      supabase.removeChannel(channel);

    };

  }, []);

  async function addStudy(
    study: Study
  ) {

    await createStudy(study);

    toast.success("Study added");

  }

  async function updateStudy(
    study: Study
  ) {

    await editStudy(study);

    toast.success("Study updated");

  }

  async function deleteStudy(
    id: string
  ) {

    await removeStudy(id);

    toast.success("Study deleted");

  }

  return {

    studies,

    loading,

    addStudy,

    updateStudy,

    deleteStudy,

    reload: loadStudies,

  };

}