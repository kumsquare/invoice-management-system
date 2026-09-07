import { CircleAlert } from "lucide-react";

const OverdueInvoices = () => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            Overdue Invoices
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            86
          </h2>
        </div>

        <div className="rounded-lg bg-red-50 p-3">
          <CircleAlert className="size-6 text-red-600" />
        </div>
      </div>
    </div>
  );
};

export default OverdueInvoices;