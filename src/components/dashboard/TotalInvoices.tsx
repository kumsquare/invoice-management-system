import { FileText } from "lucide-react";

const TotalInvoices = () => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            Total Invoices
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            1,248
          </h2>
        </div>

        <div className="rounded-lg bg-gray-100 p-3">
          <FileText className="size-6 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default TotalInvoices;