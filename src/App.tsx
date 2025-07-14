import React from "react";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import SimComponent from "./components/SimComponent";
import VirtualLabs from "./components/VirtualLabs";
import SingupLogin from "./components/SingupLogin";
import UnityGame from "./components/UnityGame";
import Physics from "./components/Physics";
import Chemistry from "./components/Chemistry";
import Biology from "./components/Biology";
import UnityViewer from "./components/UnityViewer";
import TopicComponent from "./components/TopicComponent";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/auth/:type" element={<SingupLogin />} />
        <Route index path="" element={<Home />} />
        <Route path="/virtuallabs" element={<VirtualLabs />} />
        <Route path="/simulation/:id" element={<SimComponent />} />
        <Route
          path="/simulation/:mainCategry/:topic/:id"
          element={<TopicComponent />}
        />
        <Route path="/game" element={<UnityGame />} />
        <Route path="/physics" element={<Physics />} />
        <Route path="/chemistry" element={<Chemistry />} />
        <Route path="/biology" element={<Biology />} />
        <Route path="/test" element={<UnityViewer />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
// rejaxRoute
