import * as XLSX from "xlsx";
import { Transaction } from "@/types/finance";

export function exportExcel(
  transactions: Transaction[]
) {
  const data = transactions.map((item) => ({
    Date: item.transaction_date,
    Title: item.title,
    Category: item.category,
    Type: item.type,
    Amount: item.amount,
    Notes: item.notes ?? "",
  }));

  const worksheet =
    XLSX.utils.json_to_sheet(data);

  const workbook =
    XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Transactions"
  );

  XLSX.writeFile(
    workbook,
    "transactions.xlsx"
  );
}