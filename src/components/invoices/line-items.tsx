import type { InvoiceItem } from "../../types/invoice";

interface InvoiceLineItemsProps {
  items: InvoiceItem[];
  totalAmount: number;
}

const InvoiceLineItems = ({
  items,
  totalAmount,
}: InvoiceLineItemsProps) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 px-6 py-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Line Items
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Details of the products and services included in this invoice.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Description
              </th>

              <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
                Quantity
              </th>

              <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                Price
              </th>

              <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                Total
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-white">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  {item.description}
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-600">
                  {item.quantity}
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-600">
                  ₹{item.price.toLocaleString("en-IN")}
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-semibold text-gray-900">
                  ₹{item.total.toLocaleString("en-IN")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-gray-200 px-6 py-5">
        <div className="flex justify-end">
          <div className="w-full max-w-xs">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Total
              </span>

              <span className="text-xl font-bold text-gray-900">
                ₹{totalAmount.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceLineItems;