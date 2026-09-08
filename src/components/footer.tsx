import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import BlurText from "./design/blur-text";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-10">
        
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

        {/* Links */}
        <nav className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>

          <Link to="/dashboard" className="hover:text-indigo-600">
            Dashboard
          </Link>

          <Link to="/invoices" className="hover:text-indigo-600">
            Invoices
          </Link>
          
        </nav>

        {/* Copyright */}
        <p className="mt-12 m-20 text-sm text-gray-400">
          © 2026 InvoiceHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;