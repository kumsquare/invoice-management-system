import InvoiceTable from "../components/invoices/table";
import { invoices } from "../data/invoices";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import InvoiceFilters from "../components/invoices/filters";
import TextType from "../components/design/text-type";
import Pagination from "../components/invoices/pagination";

const InvoiceList = () => {

  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(searchParams.get("status") || "All");
  const [dateRange, setDateRange] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const processedInvoices = useMemo(() => {
  let result = [...invoices];

  // Search
  if (search.trim() !== "") {
    const searchValue = search.toLowerCase();

    result = result.filter(
      (invoice) =>
        invoice.id.toLowerCase().includes(searchValue) ||
        invoice.customer.toLowerCase().includes(searchValue) ||
        invoice.email.toLowerCase().includes(searchValue)
    );
  }

  // Status
  if (status !== "All") {
    result = result.filter(
      (invoice) => invoice.status === status
    );
  }

  // Date
  if (dateRange !== "All") {
    const today = new Date();

    const days =
      dateRange === "7"
        ? 7
        : dateRange === "30"
        ? 30
        : 90;

    const startDate = new Date();

    startDate.setDate(today.getDate() - days);

    result = result.filter((invoice) => {
      const invoiceDate = new Date(invoice.issueDate);

      return invoiceDate >= startDate;
    });
  }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === "newest") {
        return (
          new Date(b.issueDate).getTime() -
          new Date(a.issueDate).getTime()
        );
      }

      if (sortBy === "oldest") {
        return (
          new Date(a.issueDate).getTime() -
          new Date(b.issueDate).getTime()
        );
      }

      if (sortBy === "amountHigh") {
        return b.amount - a.amount;
      }

      if (sortBy === "amountLow") {
        return a.amount - b.amount;
      }

      return 0;
    });

    return result;
  }, [search, status, dateRange, sortBy]);

  const ITEMS_PER_PAGE = 5;

  const totalPages = Math.ceil(
    processedInvoices.length / ITEMS_PER_PAGE
  );

  const paginatedInvoices = processedInvoices.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
      setCurrentPage(1);
  }, [search, status, dateRange, sortBy]);

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

      <div className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <div>
          <h1 className="text-3xl mt-100 !text-indigo-600 font-bold tracking-tight text-gray-900">
            <TextType
              text={["Invoices"]}
            />
          </h1>

          <p className="mt-2 text-gray-500">
            Manage and track all your invoices.
          </p>
        </div>

        <InvoiceFilters
          search={search}
          status={status}
          dateRange={dateRange}
          sortBy={sortBy}
          onSearchChange={setSearch}
          onStatusChange={setStatus}
          onDateRangeChange={setDateRange}
          onSortChange={setSortBy}
        />

        {/* Invoice count */}
        <div className="mt-6">
          <p className="text-sm text-gray-500">
            {processedInvoices.length} invoices found
          </p>
        </div>

        <InvoiceTable invoices={paginatedInvoices} />

        <p className="mt-4 text-red-600">
          Debug: {processedInvoices.length} invoices | {totalPages} pages | Page {currentPage}
        </p>
        <p className="text-red-600">
          Search: {search} | Status: {status} | Date: {dateRange} | Sort: {sortBy}
        </p>
        
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={processedInvoices.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={setCurrentPage}
        />

      </div>

    </main>
  );
};

export default InvoiceList;