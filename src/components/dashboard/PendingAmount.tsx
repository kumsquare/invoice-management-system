import { Clock3 } from "lucide-react";

const PendingAmount = () => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            Pending Amount
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            ₹4,52,000
          </h2>
        </div>

        <div className="rounded-lg bg-yellow-50 p-3">
          <Clock3 className="size-6 text-yellow-600" />
        </div>
      </div>
    </div>
  );
};

export default PendingAmount;