import { Link, useLocation } from "react-router-dom";
import { FileText, LayoutDashboard, ReceiptText } from "lucide-react";
import BlurText from "./design/blur-text";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-indigo-600"
        >
          <div className="flex size-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <FileText className="size-5" />
          </div>
          <BlurText text="InvoHub" />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link
            to="/"
            className={`rounded-md items-center px-4 py-2 text-sm font-medium transition ${
              isActive("/")
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
            }`}
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition ${
              isActive("/dashboard")
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
            }`}
          >
            <LayoutDashboard className="size-4" />
            Dashboard
          </Link>

          <Link
            to="/invoices"
            className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition ${
              location.pathname.startsWith("/invoices")
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
            }`}
          >
            <ReceiptText className="size-4" />
            Invoices
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;