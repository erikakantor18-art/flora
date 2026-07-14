import { supabase } from "@/lib/supabase";
import { Expense } from "@/types";

export async function getExpenses(): Promise<Expense[]> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("expenses")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", {
      ascending: false,
    });

  if (error) throw error;

  return (
    data?.map((item) => ({
      id: item.id,
      name: item.name,
      amount: item.amount,
      category: item.category,
      createdAt: item.created_at,
    })) ?? []
  );
}

export async function addExpense(
  expense: Expense
) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error("User belum login");

  const { error } = await supabase
    .from("expenses")
    .insert({
      id: expense.id,
      name: expense.name,
      amount: expense.amount,
      category: expense.category,
      user_id: user.id,
    });

  if (error) throw error;
}

export async function updateExpense(
  expense: Expense
) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error("User belum login");

  const { error } = await supabase
    .from("expenses")
    .update({
      name: expense.name,
      amount: expense.amount,
      category: expense.category,
    })
    .eq("id", expense.id)
    .eq("user_id", user.id);

  if (error) throw error;
}

export async function deleteExpense(
  id: string
) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error("User belum login");

  const { error } = await supabase
    .from("expenses")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) throw error;
}