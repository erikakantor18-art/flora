import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

type Expense = {
  name: string;
  amount: number;
  category: string;
  createdAt?: string;
};

export function exportExpenseToExcel(
  expenses: Expense[]
) {
  const rows = expenses.map((item) => ({
    Name: item.name,
    Category: item.category,
    Amount: item.amount,
    Date: item.createdAt
      ? new Date(item.createdAt).toLocaleDateString("id-ID")
      : "-",
  }));

  const worksheet =
    XLSX.utils.json_to_sheet(rows);

  const workbook =
    XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Expenses"
  );

  const excelBuffer = XLSX.write(
    workbook,
    {
      bookType: "xlsx",
      type: "array",
    }
  );

  const blob = new Blob(
    [excelBuffer],
    {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    }
  );

  saveAs(
    blob,
    `Finance_${new Date().toISOString().slice(0,10)}.xlsx`
  );
}