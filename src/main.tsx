import "@s/index.css";
import "@s/utils.css";
import ReactDOM from "react-dom/client";
import Landing from "./pages/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Talent from "./pages/talents/[slug]";
import Home from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/landing" element={<Landing />} />
      <Route path="/talents/:slug" element={<Talent />} />
    </Routes>
  </BrowserRouter>,
);
