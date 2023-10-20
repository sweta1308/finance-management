import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Income } from "./pages/Income";
import { Expense } from "./pages/Expense";
import { Savings } from "./pages/Saving";
import { IncomeExpenseForm } from "./pages/IncomeExpenseForm";
import { FinanceReport } from "./pages/FinanceReport";

export default function App() {
  return (
    <div className="App">
      <h1>Finance Tracker</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<IncomeExpenseForm />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/report" element={<FinanceReport />} />
      </Routes>
      <Footer />
    </div>
  );
}
