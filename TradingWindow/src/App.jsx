import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProtectedRoute from "./Routes/ProtectedRoute";
import AuthLayout from "../Auth/AuthLayout";
import Signup from "../Auth/signup";
import Login from "../Auth/login";
import TopBar from "./Components/TopBar";
import Dashboard from "./Components/DashBoard";
import FullScreenLoader from "./Components/FullScreenLoader";

export default function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <FullScreenLoader show={loading} />
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <TopBar />
              <Dashboard setLoading={setLoading} />
            </ProtectedRoute>
          }
        />
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<Signup setLoading={setLoading} />} />
          <Route path="/login" element={<Login setLoading={setLoading} />} />
        </Route>
      </Routes>
    </>
  );
}
