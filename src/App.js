import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense, useContext, useEffect, useState } from "react";
import { GlobalContext } from "./context/globalState"; 
import Loading from "./components/loading/Loading";
// Pages
const Home = lazy(() => import("./page/home/home"));
const Footer = lazy(() => import("./components/footer/footer"));
const PopUp = lazy(() => import("./components/popUp/popup"));

function App() {
  const { popupHandler,
    setPopuphandler } = useContext(GlobalContext);

  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);


  return (
    <div className="project-main">

      {isLoading ? (
        <div className="Loading-page">
          <Loading />
        </div>
      ) : (
        <>
          <Suspense
            fallback={
              <div className="Loading-page">
                <Loading />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>

          <Footer />

          {popupHandler && <>
            <div className={"backgroundPopUp"} onClick={() => setPopuphandler(false)}></div>
            <PopUp />
          </>}
        </>

      )}
    </div>
  );
}

export default App;
