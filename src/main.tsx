import ReactDOM from "react-dom/client";
import "./assets/index.css";
import Home from "./pages/Home";
import PopupProvider from "./context/PopupContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <PopupProvider>
        <Home />
    </PopupProvider>
);
