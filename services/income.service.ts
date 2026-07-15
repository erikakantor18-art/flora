import { supabase } from "@/lib/supabase";
import { Income } from "@/types";

export async function getIncome(): Promise<Income[]> {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("income")
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
      amount: item.amount,
      category: item.category,
      date: item.date,
      createdAt: item.created_at,
    })) ?? []
  );

}

export async function addIncome(
  income: Income
) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error("User belum login");

  const { error } = await supabase
    .from("income")
    .insert({
      id: income.id,
      title: income.title,
      amount: income.amount,
      category: income.category,
      date: income.date,
      user_id: user.id,
    });

  if (error) throw error;

}

export async function updateIncome(
  income: Income
) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error("User belum login");

  const { error } = await supabase
    .from("income")
    .update({
      title: income.title,
      amount: income.amount,
      category: income.category,
      date: income.date,
    })
    .eq("id", income.id)
    .eq("user_id", user.id);

  if (error) throw error;

}

export async function deleteIncome(
  id: string
) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error("User belum login");

  const { error } = await supabase
    .from("income")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) throw error;

}