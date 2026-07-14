import { Expense } from "@/types/expense";

const EXPENSE_KEY = "expenses";

export function getExpenses(): Expense[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(EXPENSE_KEY);

  if (!data) return [];

  return JSON.parse(data);
}

export function saveExpenses(
  expenses: Expense[]
) {
  localStorage.setItem(
    EXPENSE_KEY,
    JSON.stringify(expenses)
  );
}

export function addExpense(
  expense: Expense
) {
  const expenses = getExpenses();

  expenses.push(expense);

  saveExpenses(expenses);
}

export function deleteExpense(
  id: string
) {
  const expenses = getExpenses().filter(
    (expense) => expense.id !== id
  );

  saveExpenses(expenses);
}

export function updateExpense(
  updatedExpense: Expense
) {
  const expenses = getExpenses().map(
    (expense) =>
      expense.id === updatedExpense.id
        ? updatedExpense
        : expense
  );

  saveExpenses(expenses);
}

export function getTotalExpense() {
  return getExpenses().reduce(
    (total, item) =>
      total + item.amount,
    0
  );
}