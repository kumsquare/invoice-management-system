export type InvoiceStatus = "Paid" | "Pending" | "Overdue";

export interface Invoice {
  id: string;
  customer: string;
  email: string;
  issueDate: string;
  dueDate: string;
  amount: number;
  status: InvoiceStatus;
  item?: InvoiceItem[];
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  price: number;
  total: number;
}
