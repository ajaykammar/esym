import { useEffect, useRef, useState } from "react";
import { CircleUser, GraduationCap, Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AuthModal from "./Auth/AuthModal";
import { useMutation } from "@tanstack/react-query";
import {
  Login,
  LoginWithGoogle,
  StudentLogin,
  studentsRegUser,
} from "../services/Auth";
import { toast } from "react-toastify";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [Loginpopup, setLoginpopup] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [LoginState, setLoginState] = useState("");
  const [isResourceOpen, setIsResourceOpen] = useState(false);
  const notify = (msg: string) => toast(msg);
  const popupRef = useRef<HTMLDivElement>(null);

  // ✅ Safe user parsing from localStorage
  let storedUser = localStorage.getItem("user");
  let user: any = {};
  try {
    if (storedUser && storedUser !== "undefined" && storedUser !== "null") {
      user = JSON.parse(storedUser);
    }
  } catch (error) {
    console.error("Invalid user data in localStorage:", error);
    localStorage.removeItem("user");
    user = {};
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setLoginpopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const studentsRegUserMutation = useMutation({
    mutationKey: ["studentsRegUser"],
    mutationFn: studentsRegUser,
    onSuccess: (data) => {
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", data?.token);
      notify("Register successful");
      setLoginpopup(false);
    },

    onError: (error: any) => {
      notify(error?.response?.data?.message || "Login failed");
    },
  });

  const LoginMutation = useMutation({
    mutationKey: ["StudentLogin"],
    mutationFn: StudentLogin,
    onSuccess: (data) => {
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", data?.token);
      notify("login successful");
      setLoginpopup(false);
    },

    onError: (error: any) => {
      notify(error?.response.data.message);
    },
  });

  const GoogleLoginMutation = useMutation({
    mutationKey: ["StudentLogin"],
    mutationFn: LoginWithGoogle,
    onSuccess: (data) => {
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", data?.token);
      notify("login successful");
      setLoginpopup(false);
    },

    onError: (error: any) => {
      notify(error?.response.data.message);
    },
  });
  const handleLogin = (data: any) => {
    console.log("Login data:", data);
    LoginMutation.mutate(data);
    // toast.success("Login submitted!");
    setLoginpopup(false);
  };

  const handleRegister = (data: any) => {
    console.log("Register data:", data);
    studentsRegUserMutation.mutate(data);
    // toast.success("Registration submitted!");
    setLoginpopup(false);
  };

  const handleOtpVerify = (otp: string) => {
    console.log("OTP entered:", otp);
    toast.success("OTP Verified!");
  };

  const handleGoogleLogin = (data: any) => {
    GoogleLoginMutation.mutate(data);
    // Add your Google OAuth logic here
  };

  return (
    <header
      className={`bg-black text-white sticky top-0 z-50 transition-all duration-300 
      ${scroll ? "bg-opacity-50 backdrop-blur-sm shadow-md" : ""}`}
    >
      {/* Popup */}
      <div className="absolute top-[50px] right-0 w-full">
        {Loginpopup && (
          <AuthModal
            onClose={() => setLoginpopup(false)}
            onLogin={handleLogin}
            onRegister={handleRegister}
            onOtpVerify={handleOtpVerify}
            onGoogleLogin={handleGoogleLogin}
          />
        )}
      </div>

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[60px]">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <GraduationCap className="h-10 w-10 text-blue-300" />
            <Link to={"/"}>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-100">
                Mantrixlab
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink to={""} className="nav-link">
              Home
            </NavLink>
            <NavLink to={"/virtuallabs"} className="nav-link">
              Virtual Labs
            </NavLink>

            {/* Resources dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 nav-link">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black rounded-lg shadow-lg py-2 w-44">
                <NavLink
                  to="/blog"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/case-studies"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Case Studies
                </NavLink>
                <NavLink
                  to="/webinars"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Webinars
                </NavLink>
                <NavLink
                  to="/research"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Research
                </NavLink>
              </div>
            </div>

            <NavLink to={"/about"} className="nav-link">
              About
            </NavLink>
            <NavLink to={"/contact"} className="nav-link">
              Contact Us
            </NavLink>
          </nav>

          {/* Desktop Auth / Profile */}
          {user?.name ? (
            <Link to={"/profile"}>
              <p className="text-lg uppercase flex items-center">
                {user.name}
                <span className="px-2">
                  <CircleUser />
                </span>
              </p>
            </Link>
          ) : (
            <div className="hidden lg:flex items-center space-x-4 border-2 p-2  bg-blue-400 rounded-full text-sm hover:bg-blue-900">
              <div
                className="btn-primary"
                onClick={() => {
                  setLoginpopup(true);
                  setLoginState("login");
                }}
              >
                SignIn / SignUp
              </div>
              {/* <div
                onClick={() => {
                  setLoginpopup(true);
                  setLoginState("register");
                }}
                className="btn-primary"
              >
                Join Us
              </div> */}
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu (Slide-in + Scrollable) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-full bg-black/95 backdrop-blur-md z-50 flex flex-col p-6 overflow-y-auto overscroll-contain"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold text-white">Menu</span>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="h-7 w-7 text-white" />
                </button>
              </div>

              <div className="flex flex-col space-y-6 text-lg">
                <NavLink
                  to={""}
                  onClick={() => setIsMenuOpen(false)}
                  className="mobile-link"
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/virtuallabs"}
                  onClick={() => setIsMenuOpen(false)}
                  className="mobile-link"
                >
                  Virtual Labs
                </NavLink>

                {/* Resources dropdown */}
                <div>
                  <button
                    onClick={() => setIsResourceOpen(!isResourceOpen)}
                    className="flex items-center justify-between w-full text-blue-100 hover:text-white"
                  >
                    <span>Resources</span>
                    <ChevronDown
                      className={`h-4 w-4 transform transition-transform ${
                        isResourceOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isResourceOpen && (
                    <div className="ml-4 mt-3 flex flex-col space-y-3">
                      <NavLink
                        to="/blog"
                        onClick={() => setIsMenuOpen(false)}
                        className="mobile-dropdown-link"
                      >
                        Blog
                      </NavLink>
                      <NavLink
                        to="/case-studies"
                        onClick={() => setIsMenuOpen(false)}
                        className="mobile-dropdown-link"
                      >
                        Case Studies
                      </NavLink>
                      <NavLink
                        to="/webinars"
                        onClick={() => setIsMenuOpen(false)}
                        className="mobile-dropdown-link"
                      >
                        Webinars
                      </NavLink>
                      <NavLink
                        to="/research"
                        onClick={() => setIsMenuOpen(false)}
                        className="mobile-dropdown-link"
                      >
                        Research
                      </NavLink>
                    </div>
                  )}
                </div>

                <NavLink
                  to={"/about"}
                  onClick={() => setIsMenuOpen(false)}
                  className="mobile-link"
                >
                  About
                </NavLink>
                <NavLink
                  to={"/contact"}
                  onClick={() => setIsMenuOpen(false)}
                  className="mobile-link"
                >
                  Contact Us
                </NavLink>

                {/* Auth Buttons */}
                <div className="pt-6 space-y-3">
                  {user?.name ? (
                    <Link
                      to={"/profile"}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center text-blue-100 hover:text-white"
                    >
                      <CircleUser className="mr-2" /> {user.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        setLoginpopup(true);
                        setLoginState("login");
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left mobile-link"
                    >
                      Sign In / Sign Up
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

/* Utility classes */
const navLink =
  "text-blue-100 hover:text-white relative transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full";

const btnPrimary =
  "relative flex justify-center items-center rounded-2xl bg-gray-800 font-montserrat shadow-md hover:shadow-lg cursor-pointer overflow-hidden border border-indigo-700 group px-3 py-1 text-white text-md tracking-widest transition-all duration-300 ease-in-out group-hover:text-[#183153]";

const mobileLink =
  "text-blue-100 hover:text-white transition-all text-lg tracking-wide";
const mobileDropdownLink =
  "text-blue-200 hover:text-white transition-all text-md pl-2";
