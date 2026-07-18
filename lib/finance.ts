import { supabase } from "@/lib/supabase";
import {
  FinanceSummary,
  Transaction,
} from "@/types/finance";

/**
 * GET ALL TRANSACTIONS
 */
export async function getTransactions(
  userId: string
): Promise<Transaction[]> {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", userId)
    .order("transaction_date", {
      ascending: false,
    });

  if (error) throw error;

  return (data ?? []) as Transaction[];
}

/**
 * ADD TRANSACTION
 */
export async function addTransaction(
  transaction: Omit<
    Transaction,
    "id" | "created_at" | "updated_at"
  >
) {
  const { data, error } = await supabase
    .from("transactions")
    .insert(transaction)
    .select()
    .single();

  if (error) throw error;

  return data as Transaction;
}

/**
 * UPDATE TRANSACTION
 */
export async function updateTransaction(
  id: string,
  payload: Partial<Transaction>
) {
  const { data, error } = await supabase
    .from("transactions")
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data as Transaction;
}

/**
 * DELETE TRANSACTION
 */
export async function deleteTransaction(
  id: string
) {
  const { error } = await supabase
    .from("transactions")
    .delete()
    .eq("id", id);

  if (error) throw error;
}

/**
 * FINANCE SUMMARY
 */
export function calculateSummary(
  transactions: Transaction[]
): FinanceSummary {
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return {
    totalIncome,
    totalExpense,
    balance: totalIncome - totalExpense,
    transactionCount: transactions.length,
  };
}