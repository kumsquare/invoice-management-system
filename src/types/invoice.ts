export type InvoiceStatus = "Paid" | "Pending" | "Overdue";

export interface Invoice {
  id: string;
  customer: string;
  email: string;
  issueDate: string;
  dueDate: string;
  amount: number;
  status: InvoiceStatus;
}