import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Recipes from "./pages/Recipes";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const storedSettings = JSON.parse(localStorage.getItem("settings"));

  const initialSettings = {
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--primary-color": "rgb(255, 0, 86)",
    "--shadow-color": "rgba(0,0,0,0.2)",
    "--text-color": "#0A0A0A",
    "--text-light": "#575757",
    "--font-size": "16px",
    "--animation-speed": 1,
  };

  const [settings, setSettings] = useState(storedSettings || initialSettings);

  useEffect(() => {
    const root = document.documentElement;

    for (let key in settings) {
      root.style.setProperty(key, settings[key]);
    }
  }, [settings]);

  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route
            path="/settings"
            element={<Settings settings={settings} setSettings={setSettings} />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
