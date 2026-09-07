import TotalInvoices from "../components/dashboard/TotalInvoices";
import PaidInvoices from "../components/dashboard/PaidInvoices";
import PendingAmount from "../components/dashboard/PendingAmount";
import OverdueInvoices from "../components/dashboard/OverdueInvoices";

const Dashboard = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">

      {/* Dashboard Header */}
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Here's an overview of your invoice activity.
        </p>

        {/* Statistics */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <TotalInvoices />
          <PaidInvoices />
          <PendingAmount />
          <OverdueInvoices />
        </div>
      </div>

    </main>
  );
};

export default Dashboard;