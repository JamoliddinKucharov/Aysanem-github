import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy } from "react";

// Pages
const Home = lazy(() => import("./page/home/home")); 
const Footer = lazy(() => import("./components/footer/footer"));

function App() {

  return (
    <div className="project-main">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
