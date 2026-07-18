export type TransactionType = "income" | "expense";

export type TransactionCategory =
  | "Salary"
  | "Bonus"
  | "Investment"
  | "Food"
  | "Transportation"
  | "Shopping"
  | "Entertainment"
  | "Health"
  | "Education"
  | "Bills"
  | "Travel"
  | "Other";

export interface Transaction {
  id: string;

  user_id: string;

  title: string;

  amount: number;

  type: TransactionType;

  category: TransactionCategory;

  notes?: string;

  transaction_date: string;

  created_at: string;

  updated_at: string;
}

/**
 * Digunakan saat INSERT ke Supabase.
 * Tidak perlu mengirim id, created_at, updated_at.
 */
export interface CreateTransaction {
  user_id: string;

  title: string;

  amount: number;

  type: TransactionType;

  category: TransactionCategory;

  notes?: string;

  transaction_date: string;
}

/**
 * Digunakan saat UPDATE.
 */
export type UpdateTransaction = Partial<CreateTransaction>;

export interface FinanceSummary {
  totalIncome: number;

  totalExpense: number;

  balance: number;

  transactionCount: number;
}

export interface SavingGoal {
  id: string;

  title: string;

  current: number;

  target: number;
}