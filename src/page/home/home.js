import React, { lazy } from "react";

// Components
const Header = lazy(() => import("../../components/header/header"));
const Main = lazy(() => import("../../components/main/main"));
const VideoBlock = lazy(() => import("../../components/videoBlock/videoBlock"));
const Gifts = lazy(() => import("../../components/gifts/gifts"));
const Teachers = lazy(() => import("../../components/teachers/teachers"));
const Lessons = lazy(() => import("../../components/lessons/lessons"));
const Calculator = lazy(() => import("../../components/calculator/calculator"));
const ToStart = lazy(() => import("../../components/toStart/toStart"));

const Home = React.memo(({ setVideoHandler }) => {
  return (
    <div className="home">
      <Header />
      <Main />
      <VideoBlock setVideoHandler={setVideoHandler} />
      <Gifts />
      <Teachers />
      <Lessons />
      <Calculator />
      <ToStart />
    </div>
  );
});

export default Home;
