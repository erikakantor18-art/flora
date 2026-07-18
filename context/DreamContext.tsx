"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import defaultDreams from "@/lib/dreams";
import {
  addDream as storageAddDream,
  deleteDream as storageDeleteDream,
  getDreams,
  saveDreams,
  updateDream as storageUpdateDream,
} from "@/lib/dreamStorage";

import { Dream } from "@/types/dream";

interface DreamContextValue {
  dreams: Dream[];
  addDream: (dream: Dream) => void;
  updateDream: (dream: Dream) => void;
  deleteDream: (id: string) => void;
  getDream: (id: string) => Dream | undefined;
}

const DreamContext =
  createContext<DreamContextValue | null>(
    null
  );

export function DreamProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dreams, setDreams] =
    useState<Dream[]>([]);

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

  function getDream(id: string) {
    return dreams.find(
      (dream) => dream.id === id
    );
  }

  const value = useMemo(
    () => ({
      dreams,
      addDream,
      updateDream,
      deleteDream,
      getDream,
    }),
    [dreams]
  );

  return (
    <DreamContext.Provider value={value}>
      {children}
    </DreamContext.Provider>
  );
}

export function useDream() {
  const context =
    useContext(DreamContext);

  if (!context) {
    throw new Error(
      "useDream must be used inside DreamProvider"
    );
  }

  return context;
}