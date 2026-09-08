import TotalInvoices from "../components/dashboard/TotalInvoices";
import PaidInvoices from "../components/dashboard/PaidInvoices";
import PendingAmount from "../components/dashboard/PendingAmount";
import OverdueInvoices from "../components/dashboard/OverdueInvoices";
import { useNavigate } from "react-router-dom";
import TextType from "../components/design/text-type";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <main className="relative isolate min-h-screen bg-white px-6 py-10">

      {/* Background Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>

      {/* Dashboard Content */}
      <div className="mx-auto max-w-7xl">

        <h1 className="text-3xl font-bold tracking-tight !text-indigo-600">
          <TextType
            text={[
              "Dashboard Overview",
              "Your Invoice Summary",
              "Manage Your Finances",
            ]}
          />
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

        {/* Back Button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={() => navigate(-1)}
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Back
          </button>
        </div>

      </div>
    </main>
  );
};

export default Dashboard;