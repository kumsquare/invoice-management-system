import {
  ArrowLeft,
  Download,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { invoices } from "../data/invoices";
import InvoiceSummary from "../components/invoices/summary";
import InvoiceLineItems from "../components/invoices/line-items";

const InvoiceDetails = () => {
  const { id } = useParams<{ id: string }>();

  const invoice = invoices.find(
    (invoice) => invoice.id === id
  );

  if (!invoice) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-bold text-gray-900">
            Invoice not found
          </h1>

          <Link
            to="/invoices"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeft className="size-4" />
            Back to Invoices
          </Link>
        </div>
      </main>
    );
  }

  const handleDownload = () => {
    const rows = [
      ["Invoice ID", invoice.id],
      ["Customer", invoice.customer],
      ["Email", invoice.email],
      ["Issue Date", invoice.issueDate],
      ["Due Date", invoice.dueDate],
      ["Status", invoice.status],
      [],
      ["Description", "Quantity", "Price", "Total"],
      ...((invoice.item ?? []).map((item) => [
        item.description,
        item.quantity,
        item.price,
        item.total,
      ])),
      [],
      ["Invoice Total", "", "", invoice.amount],
    ];

    const csvContent = rows
      .map((row) =>
        row
          .map((value) => `"${String(value).replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${invoice.id}.csv`;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Top Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <Link
              to="/invoices"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-indigo-600"
            >
              <ArrowLeft className="size-4" />
              Back to Invoices
            </Link>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
              Invoice Details
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              View details for invoice #{invoice.id}
            </p>
          </div>

          {/* Download Button */}
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
          >
            <Download className="size-4" />
            Download Invoice
          </button>
        </div>

        {/* Invoice Summary */}
        <InvoiceSummary invoice={invoice} />

        {/* Line Items */}
        <div className="mt-8">
          <InvoiceLineItems
            items={invoice.item??[]}
            totalAmount={invoice.amount}
          />
        </div>
      </div>
    </main>
  );
};

export default InvoiceDetails;