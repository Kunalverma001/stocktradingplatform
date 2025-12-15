import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Routes/ProtectedRoute";
import AuthLayout from "../Auth/AuthLayout";
import Signup from "../Auth/signup";
import Login from "../Auth/login";
import TopBar from "./Components/TopBar";
import Dashboard from "./Components/DashBoard";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <TopBar />
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}
