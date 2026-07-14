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

export default function useJournal() {

  const [journals, setJournals] =
    useState<Journal[]>([]);

  const [loading, setLoading] =
    useState(false);

  async function loadJournals() {

    try {

      const data =
        await getJournals();

      setJournals(data);

    } catch (error) {

      console.error(error);

    }

  }

  useEffect(() => {

    loadJournals();

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

            loadJournals();

          }
        )

        .subscribe();

    return () => {

      supabase.removeChannel(channel);

    };

  }, []);

  async function addJournal(
    journal: Journal
  ) {

    await createJournal(journal);

    toast.success("Journal saved");

  }

  async function deleteJournal(
    id: string
  ) {

    await removeJournal(id);

    toast.success("Journal deleted");

  }

  return {

    journals,

    loading,

    addJournal,

    deleteJournal,

  };

}