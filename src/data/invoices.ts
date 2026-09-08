import type { Invoice } from "../types/invoice";

export const invoices: Invoice[] = [
  {
    id: "INV-1001",
    customer: "Acme Corporation",
    email: "billing@acme.com",
    issueDate: "2026-08-01",
    dueDate: "2026-08-15",
    amount: 45000,
    status: "Overdue",
  },
  {
    id: "INV-1002",
    customer: "TechNova Solutions",
    email: "finance@technova.com",
    issueDate: "2026-08-05",
    dueDate: "2026-09-05",
    amount: 28500,
    status: "Pending",
  },
  {
    id: "INV-1003",
    customer: "Global Solutions",
    email: "accounts@global.com",
    issueDate: "2026-08-10",
    dueDate: "2026-08-20",
    amount: 62000,
    status: "Paid",
  },
  {
    id: "INV-1004",
    customer: "Bright Technologies",
    email: "accounts@brighttech.com",
    issueDate: "2026-08-12",
    dueDate: "2026-08-25",
    amount: 37500,
    status: "Overdue",
  },
  {
    id: "INV-1005",
    customer: "Vertex Industries",
    email: "billing@vertex.com",
    issueDate: "2026-08-15",
    dueDate: "2026-09-15",
    amount: 51000,
    status: "Pending",
  },
];