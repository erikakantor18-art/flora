import { Dream } from "@/types/dream";

const KEY = "flora-dreams";

export function getDreams(): Dream[] {
  if (typeof window === "undefined")
    return [];

  const data =
    localStorage.getItem(KEY);

  if (!data) return [];

  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function saveDreams(
  dreams: Dream[]
) {
  localStorage.setItem(
    KEY,
    JSON.stringify(dreams)
  );
}

export function addDream(
  dream: Dream
) {
  const dreams = getDreams();

  dreams.push(dream);

  saveDreams(dreams);
}

export function deleteDream(
  id: string
) {
  const dreams = getDreams().filter(
    (d) => d.id !== id
  );

  saveDreams(dreams);
}

export function updateDream(
  dream: Dream
) {
  const dreams = getDreams();

  const index = dreams.findIndex(
    (d) => d.id === dream.id
  );

  if (index >= 0) {
    dreams[index] = dream;

    saveDreams(dreams);
  }
}