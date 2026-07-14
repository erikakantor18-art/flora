import { supabase } from "@/lib/supabase";
import { Study } from "@/types";

export async function getStudies(): Promise<Study[]> {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("study")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", {
      ascending: false,
    });

  if (error) throw error;

  return (
    data?.map((item) => ({
      id: item.id,
      title: item.title,
      hours: item.hours,
      targetHours: item.target_hours,
      progress: Math.round(
        (item.hours / item.target_hours) * 100
      ),
      createdAt: item.created_at,
    })) ?? []
  );

}

export async function addStudy(
  study: Study
) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error("User belum login");

  const { error } = await supabase
    .from("study")
    .insert({
      id: study.id,
      title: study.title,
      hours: study.hours,
      target_hours: study.targetHours,
      user_id: user.id,
    });

  if (error) throw error;

}

export async function updateStudy(
  study: Study
) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error("User belum login");

  const { error } = await supabase
    .from("study")
    .update({
      title: study.title,
      hours: study.hours,
      target_hours: study.targetHours,
    })
    .eq("id", study.id)
    .eq("user_id", user.id);

  if (error) throw error;

}

export async function deleteStudy(
  id: string
) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error("User belum login");

  const { error } = await supabase
    .from("study")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) throw error;

}