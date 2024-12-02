import "./assets/index.css";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import PopupProvider from "./context/PopupContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Talents from "./pages/Talents";
import Popup from "./components/Popup";
import Profile from "./pages/Profile";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PopupProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="talents" element={<Talents />} />
        <Route path="talents/:handle" element={<Profile />} />
      </Routes>
      <Popup />
    </BrowserRouter>
  </PopupProvider>
);
