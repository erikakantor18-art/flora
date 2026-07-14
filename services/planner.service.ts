import { supabase } from "@/lib/supabase";
import { Planner } from "@/types";

export async function getTasks(): Promise<Planner[]> {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("planner")
    .select("*")
    .eq("user_id", user.id)
    .order("time", {
      ascending: true,
    });

  if (error) throw error;

  return (
    data?.map((item) => ({
      id: item.id,
      time: item.time,
      activity: item.activity,
      completed: item.completed,
      createdAt: item.created_at,
    })) ?? []
  );

}

export async function addTask(
  task: Planner
) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error("User belum login");

  const { error } = await supabase
    .from("planner")
    .insert({
      id: task.id,
      time: task.time,
      activity: task.activity,
      completed: task.completed,
      user_id: user.id,
    });

  if (error) throw error;

}

export async function updateTask(
  task: Planner
) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error("User belum login");

  const { error } = await supabase
    .from("planner")
    .update({
      time: task.time,
      activity: task.activity,
      completed: task.completed,
    })
    .eq("id", task.id)
    .eq("user_id", user.id);

  if (error) throw error;

}

export async function deleteTask(
  id: string
) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error("User belum login");

  const { error } = await supabase
    .from("planner")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) throw error;

}