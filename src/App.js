import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, useContext } from "react";
import { GlobalContext } from "./context/globalState";

// Pages
const Home = lazy(() => import("./page/home/home"));
const Footer = lazy(() => import("./components/footer/footer"));
const PopUp = lazy(() => import("./components/popUp/popup"));

function App() {
  const { popupHandler,
    setPopuphandler } = useContext(GlobalContext);
  return (
    <div className="project-main">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />


      {popupHandler && <>
        <div className={"backgroundPopUp"} onClick={() => setPopuphandler(false)}></div>
        <PopUp />
      </>}
    </div>
  );
}

export default App;
