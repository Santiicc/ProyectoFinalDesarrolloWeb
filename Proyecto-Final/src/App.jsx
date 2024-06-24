import "./App.css";
import Sidebar from "./Components/Sidebar/sidebar";
import Home from "./Pages/Home";
import Reviews from "./Pages/Reviews";
import NewReleases from "./Pages/NewReleases";
import Popular from "./Pages/Popular";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [themeSettings, setThemeSettings] = useState({
    mode: "light",
    switchMode: () => {
      setThemeSettings((prevState) => ({
        ...prevState,
        mode: prevState.mode === "light" ? "dark" : "light",
      }));
    },
  });

  return (
      <div className={"App-" + themeSettings.mode}>
        <Router>
          <Sidebar />
          <main>
            <Routes>
              <Route pathname="/" element={<Home />} />
              <Route pathname="/reviews" element={<Reviews />} />
              <Route pathname="/newreleases" element={<NewReleases />} />
              <Route pathname="/popular" element={<Popular />} />
            </Routes>
          </main>
        </Router>
      </div>
  );
}
