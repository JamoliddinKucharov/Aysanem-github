import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, useContext } from "react";
import { GlobalContext } from "./context/globalState";

// Pages
const Home = lazy(() => import("./page/home/home"));
const Video = lazy(() => import("./components/video/video"));
const Footer = lazy(() => import("./components/footer/footer"));

function App() {
  const { videoHandler } = useContext(GlobalContext);

  return (
    <div className="project-main">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      {videoHandler && <Video />}
    </div>
  );
}

export default App;
