import "./App.css";
import Sidebar from "./Components/Sidebar/sidebar";
import { useState } from "react";

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
          <Sidebar />
      </div>
  );
}