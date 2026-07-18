"use client";

import { useEffect, useState } from "react";

import {
  addDream as storageAddDream,
  deleteDream as storageDeleteDream,
  getDreams,
  saveDreams,
  updateDream as storageUpdateDream,
} from "@/lib/dreamStorage";

import defaultDreams from "@/lib/dreams";

import { Dream } from "@/types/dream";

export default function useDreams() {
  const [dreams, setDreams] = useState<Dream[]>([]);

  useEffect(() => {
    const local = getDreams();

    if (local.length === 0) {
      saveDreams(defaultDreams);
      setDreams(defaultDreams);
    } else {
      setDreams(local);
    }
  }, []);

  function addDream(dream: Dream) {
    storageAddDream(dream);

    setDreams((prev) => [
      ...prev,
      dream,
    ]);
  }

  function updateDream(
    dream: Dream
  ) {
    storageUpdateDream(dream);

    setDreams((prev) =>
      prev.map((item) =>
        item.id === dream.id
          ? dream
          : item
      )
    );
  }

  function deleteDream(id: string) {
    storageDeleteDream(id);

    setDreams((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  }

  return {
    dreams,

    addDream,

    updateDream,

    deleteDream,
  };
}