import { supabase } from "@/lib/supabase";
import { Goal } from "@/types";

export async function getGoals(): Promise<Goal[]> {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("goals")
    .select("*")
    .eq("user_id", user.id)
    .order("deadline", {
      ascending: true,
    });

  if (error) throw error;

  return (
    data?.map((goal) => ({
      id: goal.id,
      title: goal.title,
      current: goal.current,
      target: goal.target,
      deadline: goal.deadline,
    })) ?? []
  );

}

export async function addGoal(
  goal: Goal
) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error("User belum login");

  const { error } = await supabase
    .from("goals")
    .insert({
      id: goal.id,
      title: goal.title,
      current: goal.current,
      target: goal.target,
      deadline: goal.deadline,
      user_id: user.id,
    });

  if (error) throw error;

}

export async function updateGoal(
  goal: Goal
) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error("User belum login");

  const { error } = await supabase
    .from("goals")
    .update({
      title: goal.title,
      current: goal.current,
      target: goal.target,
      deadline: goal.deadline,
    })
    .eq("id", goal.id)
    .eq("user_id", user.id);

  if (error) throw error;

}

export async function deleteGoal(
  id: string
) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error("User belum login");

  const { error } = await supabase
    .from("goals")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) throw error;

}