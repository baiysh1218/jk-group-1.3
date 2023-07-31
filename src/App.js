import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
// import "./adaptive.css";
import "./App.css";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

import Navbar from "./components/navbar/Navbar";
import { pageContext } from "./contexts/PageContext/PageContext";
import MainRoutes from "./routes/Routes";

function ScrollRestoration() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const { main } = useContext(pageContext);

  useEffect(() => {
    setIsLoading(false);
  }, [main]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <ScrollRestoration />
          <MainRoutes />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
