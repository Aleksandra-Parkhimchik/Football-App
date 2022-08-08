import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

import ErrorBoundary from "./components/ErrorBoundary";

import "./App.css";

const Home = React.lazy(() => import("./routes/Home"));
const Teams = React.lazy(() => import("./routes/Teams"));
const Team = React.lazy(() => import("./routes/Team"));

export default function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<CircularProgress />}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="teams" element={<Teams />} />
            <Route path="teams/:teamId" element={<Team />} />
            {/* Catch all for everything else to redirect to home page */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ErrorBoundary>
      </React.Suspense>
    </div>
  );
}
