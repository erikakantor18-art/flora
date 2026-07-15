"use client";

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import { supabase } from "@/lib/supabase";

import {
  getJournals,
  addJournal as createJournal,
  deleteJournal as removeJournal,
} from "@/services/journal.service";

import { Journal } from "@/types";

function getErrorMessage(
  error: unknown
): string {

  if (error instanceof Error) {

    return error.message;

  }

  return "Something went wrong.";

}

export default function useJournal() {

  const [journals, setJournals] =
    useState<Journal[]>([]);

  const [loading, setLoading] =
    useState(false);

  async function loadJournals() {

    try {

      setLoading(true);

      const data =
        await getJournals();

      setJournals(data);

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

    void loadJournals();

    const channel =
      supabase
        .channel("journal")
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "journal",
          },
          () => {

            void loadJournals();

          }
        )
        .subscribe();

    return () => {

      void supabase.removeChannel(
        channel
      );

    };

  }, []);

  async function addJournal(
    journal: Journal
  ) {

    try {

      setLoading(true);

      await createJournal(journal);

      toast.success(
        "Journal saved"
      );

      await loadJournals();

    } catch (error) {

      console.error(error);

      toast.error(
        getErrorMessage(error)
      );

    } finally {

      setLoading(false);

    }

  }

  async function deleteJournal(
    id: string
  ) {

    try {

      setLoading(true);

      await removeJournal(id);

      toast.success(
        "Journal deleted"
      );

      await loadJournals();

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

    journals,

    loading,

    addJournal,

    deleteJournal,

    reload: loadJournals,

  };

}