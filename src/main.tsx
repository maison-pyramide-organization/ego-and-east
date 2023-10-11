import ReactDOM from "react-dom/client";
import "./assets/index.css";
import Home from "./pages/Home";
import PopupProvider from "./context/PopupContext";

// import Down from "./pages/Down";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <PopupProvider>
        <Home />
    </PopupProvider>
);
