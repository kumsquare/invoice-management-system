import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import type { Invoice } from "../../types/invoice";
import { memo, useState } from "react";
interface InvoiceTableProps {
  invoices: Invoice[];
}

const InvoiceTable = ({ invoices }: InvoiceTableProps) => {
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);

  const handleSelectAll = () => {
    if (selectedInvoices.length === invoices.length) {
      setSelectedInvoices([]);
    } else {
      setSelectedInvoices(invoices.map((invoice) => invoice.id));
    }
  };

  const handleSelectInvoice = (invoiceId: string) => {
    setSelectedInvoices((prevSelected) => 
      prevSelected.includes(invoiceId) 
        ? prevSelected.filter((id) => id !== invoiceId) 
        : [...prevSelected, invoiceId]
    );
  };

  const isAllSelected = invoices.length > 0 && selectedInvoices.length === invoices.length;

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">

          {/* Table Header */}
          <thead className="bg-gray-50">
            <tr>

              {/* Checkbox */}
              <th className="px-6 py-4 text-left">
                <input
                  type="checkbox"
                  className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  checked={isAllSelected}
                  onChange={handleSelectAll}  
                />
              </th>

              {/* Invoice */}
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Invoice
              </th>

              {/* Customer */}
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Customer
              </th>

              {/* Issue Date */}
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Issue Date
              </th>

              {/* Due Date */}
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Due Date
              </th>

              {/* Amount */}
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Amount
              </th>

              {/* Status */}
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Status
              </th>

              {/* Action */}
              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                Action
              </th>

            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200 bg-white">

            {invoices.map((invoice) => (

              <tr
                key={invoice.id}
                className="transition-colors hover:bg-gray-50"
              >

                {/* Checkbox */}
                <td className="whitespace-nowrap px-6 py-5">
                  <input
                    type="checkbox"
                    className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    checked={selectedInvoices.includes(invoice.id)}
                    onChange={() => handleSelectInvoice(invoice.id)}
                  />
                </td>

                {/* Invoice ID */}
                <td className="whitespace-nowrap px-6 py-5">
                  <span className="text-sm font-semibold text-gray-900">
                    {invoice.id}
                  </span>
                </td>

                {/* Customer */}
                <td className="px-6 py-5">
                  <div className="text-sm font-medium text-gray-900">
                    {invoice.customer}
                  </div>

                  <div className="mt-1 text-sm text-gray-500">
                    {invoice.email}
                  </div>
                </td>

                {/* Issue Date */}
                <td className="whitespace-nowrap px-6 py-5 text-sm text-gray-600">
                  {invoice.issueDate}
                </td>

                {/* Due Date */}
                <td className="whitespace-nowrap px-6 py-5 text-sm text-gray-600">
                  {invoice.dueDate}
                </td>

                {/* Amount */}
                <td className="whitespace-nowrap px-6 py-5">
                  <span className="text-sm font-semibold text-gray-900">
                    ₹{invoice.amount.toLocaleString("en-IN")}
                  </span>
                </td>

                {/* Status */}
                <td className="whitespace-nowrap px-6 py-5">

                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                      invoice.status === "Paid"
                        ? "bg-green-50 text-green-700 ring-1 ring-green-600/20"
                        : invoice.status === "Pending"
                        ? "bg-yellow-50 text-yellow-700 ring-1 ring-yellow-600/20"
                        : "bg-red-50 text-red-700 ring-1 ring-red-600/20"
                    }`}
                  >
                    {invoice.status}
                  </span>

                </td>

                {/* Action */}
                <td className="whitespace-nowrap px-6 py-5 text-right">

                  <Link
                    to={`/invoices/${invoice.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-500"
                  >
                    <Eye className="size-4" />
                    View
                  </Link>

                </td>

              </tr>

            ))}

          </tbody>

        </table>
      </div>

    </div>
  );
};

export default memo(InvoiceTable);