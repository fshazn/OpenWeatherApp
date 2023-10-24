import "./App.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import protectedRoute from "./components/protectedRoute";
import WeeklyWeather from "./pages/WeeklyWeather";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <protectedRoute>
                  <Dashboard />
                </protectedRoute>
              }
            />
            <Route
              path="/dashboard/weekforecast"
              element={
                <protectedRoute>
                  <WeeklyWeather />
                </protectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
