import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about.jsx";
import Launches from "./pages/launches.jsx";
import RocketDetail from "./pages/rocket-details.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/rockets/:id" element={<RocketDetail />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
