import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense, useContext, useEffect, useState } from "react";
import { GlobalContext } from "./context/globalState";
import FontFaceObserver from "fontfaceobserver";
import Loading from "./components/loading/Loading";
// Pages
const Home = lazy(() => import("./page/home/home"));
const Footer = lazy(() => import("./components/footer/footer"));
const PopUp = lazy(() => import("./components/popUp/popup"));

function App() {
  const { popupHandler,
    setPopuphandler } = useContext(GlobalContext);
  const [isAppLoaded, setIsAppLoaded] = useState(false);





  const getAll = () => {
    const Inter = new FontFaceObserver("Evolventa");

    const images = Array.from(document.images);
    const imagePromises = images.map((img) => {
      return new Promise((resolve) => {
        if (img.complete) {
          resolve();
        } else {
          img.onload = img.onerror = resolve;
        }
      });
    });

    const fontPromises = Promise.all([Inter.load()]);
    const allResourcesLoaded = Promise.all([fontPromises, ...imagePromises]);

    allResourcesLoaded
      .then(() => {
        setIsAppLoaded(true);
      })
      .catch((err) => {
        setIsAppLoaded(true);
      });
  };

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = '/public/assets/images/popup-background.png';
  }, []);


  return (
    <div className="project-main">
      {isAppLoaded ? <><Suspense
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

        <Suspense fallback={<div className="backgroundPopUp loading">
          <Loading />
        </div>}>
          {popupHandler && (
            <>
              <div
                className={"backgroundPopUp"}
                onClick={() => setPopuphandler(false)}
              ></div>
              <PopUp />
            </>
          )}
        </Suspense>
      </ > : <div className="Loading-page">
        <Loading />
      </div>}
    </div>
  );
}

export default App;
