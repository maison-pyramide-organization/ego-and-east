import "@s/index.css";
import "@s/utils.css";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Talent from "./pages/talents/[slug]";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/talents/:slug" element={<Talent />} />
    </Routes>
  </BrowserRouter>,
);
