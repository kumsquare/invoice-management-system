import { CalendarDays, Mail, User } from "lucide-react";
import type { Invoice } from "../../types/invoice";

interface InvoiceSummaryProps {
  invoice: Invoice;
}

const InvoiceSummary = ({ invoice }: InvoiceSummaryProps) => {
  const formattedIssueDate = new Date(
    invoice.issueDate
  ).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formattedDueDate = new Date(
    invoice.dueDate
  ).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">
              Invoice
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
              #{invoice.id}
            </h2>
          </div>

          <span
            className={`inline-flex w-fit rounded-full px-3 py-1 text-sm font-semibold ${
              invoice.status === "Paid"
                ? "bg-green-50 text-green-700"
                : invoice.status === "Pending"
                ? "bg-yellow-50 text-yellow-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {invoice.status}
          </span>
        </div>
      </div>

      <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <User className="size-4" />
            Customer
          </div>

          <p className="mt-2 font-semibold text-gray-900">
            {invoice.customer}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Mail className="size-4" />
            Email
          </div>

          <p className="mt-2 break-all font-medium text-gray-900">
            {invoice.email}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <CalendarDays className="size-4" />
            Issue Date
          </div>

          <p className="mt-2 font-semibold text-gray-900">
            {formattedIssueDate}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <CalendarDays className="size-4" />
            Due Date
          </div>

          <p className="mt-2 font-semibold text-gray-900">
            {formattedDueDate}
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gray-50 p-6">
        <p className="text-sm font-medium text-gray-500">
          Total Amount
        </p>

        <p className="mt-1 text-3xl font-bold text-gray-900">
          ₹{invoice.amount.toLocaleString("en-IN")}
        </p>
      </div>
    </div>
  );
};

export default InvoiceSummary;