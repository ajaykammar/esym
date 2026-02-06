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
import AuthModal from "./components/Auth/AuthModal";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Tab from "./Pages/Tab";
import MainLayout from "./Layouts/MainLayout";
import TabMainLayout from "./Tabcom/layouts/TabMainLayout";
import Dashboard from "./Tabcom/DashBoard/DashBoard";
import Simulations from "./Tabcom/Simulations/simulations";
import Reports from "./Tabcom/Report/Reports";
import HowToPlay from "./Tabcom/HowtoPlay/HowToPlay";
import GameControls from "./Tabcom/Action/GameControls";
import TabletGameUI from "./Tabcom/Experiment/TabletGameUI";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  useScrollToTop();
  return (
    <HelmetProvider>
      <Helmet>
        {/* META TITLE & DESCRIPTION */}
        <title>
          MantrixLab – 3D Virtual Labs & Interactive Science Simulations
        </title>
        <meta
          name="description"
          content="MantrixLab offers interactive 3D virtual labs and science simulations for schools, colleges, and medical students."
        />

        {/* OG TAGS */}
        <meta property="og:title" content="MantrixLab – 3D Virtual Labs" />
        <meta
          property="og:description"
          content="Explore science with 3D simulations and virtual labs for school, college, and medical students."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MantrixLab" />

        {/* SCHEMA.ORG JSON-LD */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "MantrixLab",
              "url": "https://mantrixlab.com",
              "logo": "https://mantrixlab.com/logo.png",
              "description": "MantrixLab offers interactive 3D virtual labs and science simulations for schools, colleges, and medical students.",
       
              "department": {
                "@type": "EducationEvent",
                "name": "3D Virtual Labs & Science Simulation Platform",
                "description": "Interactive simulations for physics, chemistry, biology, and medical education."
              }
            }
          `}
        </script>
      </Helmet>
      <div className="max-w-[1920px] mx-auto ">
        {/* <Header /> */}
        {/* <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Open Student Login
        </button>

        {open && (
          <AuthModal
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
          <Route element={<MainLayout />}>
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
          </Route>

          <Route path="/tab/" element={<TabMainLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="simulations" element={<Simulations />} />
            <Route path="reports" element={<Reports />} />
            <Route path="howtoplay" element={<HowToPlay />} />
            <Route path="action" element={<GameControls />} />
            <Route path="game" element={<TabletGameUI />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </div>
    </HelmetProvider>
  );
};

export default App;
// rejaxRoute
