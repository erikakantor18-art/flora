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

function getErrorMessage(
  error: unknown
): string {

  if (error instanceof Error) {

    return error.message;

  }

  return "Something went wrong.";

}

export default function useStudy() {

  const [studies, setStudies] =
    useState<Study[]>([]);

  const [loading, setLoading] =
    useState(false);

  async function loadStudies() {

    try {

      setLoading(true);

      const data =
        await getStudies();

      setStudies(data);

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

  void loadStudies();

}, []);

  async function addStudy(
    study: Study
  ) {

    try {

      setLoading(true);

      await createStudy(study);

      toast.success(
        "Study added"
      );

      await loadStudies();

    } catch (error) {

      console.error(error);

      toast.error(
        getErrorMessage(error)
      );

    } finally {

      setLoading(false);

    }

  }

  async function updateStudy(
    study: Study
  ) {

    try {

      setLoading(true);

      await editStudy(study);

      toast.success(
        "Study updated"
      );

      await loadStudies();

    } catch (error) {

      console.error(error);

      toast.error(
        getErrorMessage(error)
      );

    } finally {

      setLoading(false);

    }

  }

  async function deleteStudy(
    id: string
  ) {

    try {

      setLoading(true);

      await removeStudy(id);

      toast.success(
        "Study deleted"
      );

      await loadStudies();

    } catch (error) {

      console.error(error);

      toast.error(
        getErrorMessage(error)
      );

    } finally {

      setLoading(false);

    }

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