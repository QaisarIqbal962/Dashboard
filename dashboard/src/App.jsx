import "./App.css";
import Main from "./sections/Main";
import Sidebar from "./sections/Sidebar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginSignup from "./components/LoginSignup";
import ProtectedRoute from "./components/ProtectedRoute";
import Logout from "./components/Logout";

function DashboardLayout() {
  return (
    <main className="w-full bg-slate-200 h-screen flex justify-between items-start">
      <Sidebar />
      <Main />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<LoginSignup />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
