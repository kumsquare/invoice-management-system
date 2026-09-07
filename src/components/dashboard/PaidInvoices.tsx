import { CircleCheck } from "lucide-react";

const PaidInvoices = () => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            Paid Invoices
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            842
          </h2>
        </div>

        <div className="rounded-lg bg-green-50 p-3">
          <CircleCheck className="size-6 text-green-600" />
        </div>
      </div>
    </div>
  );
};

export default PaidInvoices;