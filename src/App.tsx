import Hero from "./pages/hero";
import Dashboard from "./pages/dashboard";
import InvoiceList from "./pages/invoice-list";
import InvoiceDetails from "./pages/invoice-details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/invoices" element={<InvoiceList/>} />
        <Route path="/invoices/:id" element={<InvoiceDetails />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;