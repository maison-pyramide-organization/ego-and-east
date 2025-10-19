import "./assets/index.css";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import PopupProvider from "./context/PopupContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PopupProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </PopupProvider>
);
