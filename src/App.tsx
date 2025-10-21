import React, { useState } from "react";
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
import UserProfile from "./components/UserProfile";
import Aboutus from "./components/Aboutus";
import ContactUs from "./components/ContactUs";
import ProtectedRoute from "./Layouts/ProtectedRoute";
import { useScrollToTop } from "./Layouts/ScrollToTop";
import { ResearchersList } from "./components/ResearchersList";
import { ResearcherDetail } from "./components/ResearcherDetail";
import Mantrixlab from "./components/Auth/Mantrixlab";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  useScrollToTop();
  return (
    <div className="max-w-[1920px] mx-auto ">
      <Header />
      {/* <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Open Student Login
        </button>

        {open && (
          <Mantrixlab
            onClose={() => setOpen(false)}
            onLogin={(data) => console.log("Login Data:", data)}
            onRegister={(data) => console.log("Register Data:", data)}
            onOtpVerify={(otp) => console.log("OTP Verified:", otp)}
            onGoogleLogin={() => console.log("Google Login")}
          />
        )}
      </div> */}

      <Routes>
        {/* <Route path="/auth/:type" element={<SingupLogin />} /> */}
        <Route index path="" element={<Home />} />
        <Route path="/virtuallabs" element={<VirtualLabs />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/game" element={<UnityGame />} /> */}
        <Route path="/physics" element={<Physics />} />
        <Route path="/chemistry" element={<Chemistry />} />
        <Route path="/biology" element={<Biology />} />
        {/* <Route path="/test" element={<UnityViewer />} /> */}
        <Route path="/research" element={<ResearchersList />} />
        <Route path="/researcher/:id" element={<ResearcherDetail />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<UserProfile />} />
          <Route
            path="/simulation/:mainCategry/:topic/:id"
            element={<TopicComponent />}
          />
          <Route path="/simulation/:id" element={<SimComponent />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
// rejaxRoute
