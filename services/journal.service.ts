import { supabase } from "@/lib/supabase";
import { Journal } from "@/types";

export async function getJournals(): Promise<Journal[]> {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("journal")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", {
      ascending: false,
    });

  if (error) throw error;

  return (
    data?.map((item) => ({
      id: item.id,
      mood: item.mood,
      note: item.note,
      date: item.date,
      createdAt: item.created_at,
    })) ?? []
  );

}

export async function addJournal(
  journal: Journal
) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error("User belum login");

  const { error } = await supabase
    .from("journal")
    .insert({
      id: journal.id,
      mood: journal.mood,
      note: journal.note,
      date: journal.date,
      user_id: user.id,
    });

  if (error) throw error;

}

export async function deleteJournal(
  id: string
) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error("User belum login");

  const { error } = await supabase
    .from("journal")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) throw error;

}