import "@s/index.css";
import "@s/utils.css";
import ReactDOM from "react-dom/client";
import Landing from "./pages/landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Talent from "./pages/talents/[slug]";
import Home from "./pages/home";
import About from "./pages/about";
import Header from "./components/header";
import Footer from "./components/footer";
import Contact from "./pages/contact";
import Test from "./pages/test";
import ScrollToTop from "./components/scroll top";
import Services from "./pages/services";

import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

function App() {
  const lenisRef = useRef<any>();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/talents/:slug" element={<Talent />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ReactLenis>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
