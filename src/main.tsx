import "./assets/index.css";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import PopupProvider from "./context/PopupContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Popup from "./components/Popup";
import Profile from "./pages/Profile";
import Talents from "./pages/Talents";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PopupProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="talents" element={<Talents />} />
        <Route path="talents/:slug" element={<Profile />} />
        {/* <Route path="test" element={<Test />} /> */}
        
      </Routes>
      <Popup />
    </BrowserRouter>
  </PopupProvider>
);
