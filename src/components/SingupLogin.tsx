import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Bg1 from "../Images/banners/DIGI SIMU 12.jpg";
import {
  Mail,
  Lock,
  User,
  UserPlus,
  LogIn,
  Phone,
  Building2,
  GraduationCap,
  Globe2,
  HelpCircle,
  MessageSquare,
} from "lucide-react";
import { useParams } from "react-router-dom";

function SingupLogin() {
  const { type } = useParams();
  const [isSignup, setIsSignup] = useState(true);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    institution: "",
    position: "",
    faculty: "",
    country: "",
    helpText: "",
    referral: "",
  });

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  useEffect(() => {
    if (type === "register") {
      setIsSignup(true);
    }
    if (type === "login") {
      setIsSignup(false);
    }
  }, [type]);

  const faculties = [
    "Science",
    "Engineering",
    "Medicine",
    "Arts",
    "Business",
    "Education",
    "Other",
  ];

  const referralSources = [
    "Search Engine",
    "Social Media",
    "Friend/Colleague",
    "Conference/Event",
    "Educational Institution",
    "Advertisement",
    "Other",
  ];

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const SubmitRegistration = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formValues);
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-gray-100 font-roboto">
      {/* Left Section */}
      <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen bg-gray-800 text-white relative overflow-y-auto ">
        <div className="absolute inset-x-0 inset-y-auto flex items-center justify-center ">
          {/* Registration Form */}
          <AnimatePresence>
            {isSignup && (
              <motion.div
                key="signup"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl p-6 md:p-8 my-8"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <UserPlus className="w-8 h-8 text-blue-400" />
                  <h2 className="text-3xl font-light">Sign Up</h2>
                </div>
                <p className="text-base text-gray-400 mb-8 text-center">
                  Join us and explore new features!
                </p>
                <form className="space-y-6" onSubmit={SubmitRegistration}>
                  {/* Personal Information Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-blue-400">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <label className="block text-sm font-medium opacity-60 mb-1">
                          Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            required
                            type="text"
                            name="name"
                            value={formValues.name}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-medium opacity-60 mb-1">
                          Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            required
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-medium opacity-60 mb-1">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            required
                            type="tel"
                            name="phone"
                            value={formValues.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-medium opacity-60 mb-1">
                          Password *
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            required
                            type="password"
                            name="password"
                            value={formValues.password}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Create a password"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Information Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-blue-400">
                      Professional Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <label className="block text-sm font-medium opacity-60 mb-1">
                          Institution / Company Name *
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            required
                            type="text"
                            name="institution"
                            value={formValues.institution}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter institution name"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-medium opacity-60 mb-1">
                          Position *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            required
                            type="text"
                            name="position"
                            value={formValues.position}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your position"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <label className="block text-sm font-medium opacity-60 mb-1">
                          Faculty *
                        </label>
                        <div className="relative">
                          <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <select
                            required
                            className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent SingupLoginearance-none"
                          >
                            <option value="">Select faculty</option>
                            {faculties.map((faculty) => (
                              <option key={faculty} value={faculty}>
                                {faculty}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-medium opacity-60 mb-1">
                          Country *
                        </label>
                        <div className="relative">
                          <Globe2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            required
                            type="text"
                            name="country"
                            value={formValues.country}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your country"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-blue-400">
                      Additional Information
                    </h3>
                    <div className="space-y-4">
                      <div className="relative">
                        <label className="block text-sm font-medium opacity-60 mb-1">
                          How can EDUSIM help you? *
                        </label>
                        <div className="relative">
                          <HelpCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <textarea
                            required
                            type="text"
                            name="helpText"
                            value={formValues.helpText}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Tell us how we can help you"
                          ></textarea>
                        </div>
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-medium opacity-60 mb-1">
                          How did you hear about us? *
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <select
                            required
                            name="referral"
                            value={formValues.referral}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent SingupLoginearance-none"
                          >
                            <option value="">Select source</option>
                            {referralSources.map((source) => (
                              <option key={source} value={source}>
                                {source}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Create Account Button */}
                  <div className="flex justify-center gap-4 ">
                    <button
                      type="submit"
                      className="relative w-full flex justify-center items-center rounded-lg bg-blue-700 font-montserrat shadow-md hover:shadow-lg cursor-pointer overflow-hidden border border-blue-700 group"
                    >
                      <span className="text-center w-full px-8 py-2 text-white text-lg  tracking-widest z-20 transition-all duration-300 ease-in-out group-hover:text-[#183153]">
                        Create Account
                      </span>
                      <div className="absolute top-0 right-0 h-full w-0 bg-[#ffd402] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></div>
                    </button>
                  </div>
                </form>
                <button
                  className="mt-6 text-sm text-blue-400 hover:text-blue-300 flex items-center justify-center gap-2 w-full transition-colors"
                  onClick={toggleForm}
                >
                  <LogIn className="w-4 h-4" />
                  <span>Already have an account? Login</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Welcome Back Section */}
          <AnimatePresence>
            {!isSignup && (
              <motion.div
                key="banner-login"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
                style={{ backgroundImage: `url(${Bg1})` }}
              >
                <div>
                  <h2 className="text-4xl font-bold mb-4">Welcome</h2>
                  <p className="text-gray-400">
                    Please log in to access your account.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex flex-col justify-center items-center bg-white relative overflow-hidden p-6">
        {/* Login Form */}
        <AnimatePresence>
          {!isSignup && (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md px-6"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <LogIn className="w-8 h-8 text-blue-500" />
                <h2 className="text-3xl font-light text-blue-500">Login</h2>
              </div>
              <p className="text-base text-gray-500 mb-8 text-center">
                Welcome back! Please login to continue.
              </p>
              <form className="space-y-6">
                <div className="relative">
                  <label className="block text-sm font-medium opacity-60 mb-1">
                    Username
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your username"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium opacity-60 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
                {/* <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Login</span>
                  <ArrowRight className="w-4 h-4" />
                </button> */}

                <div className="flex justify-center gap-4 ">
                  <button className="relative w-full flex justify-center items-center rounded-lg bg-blue-700 font-montserrat shadow-md hover:shadow-lg cursor-pointer overflow-hidden border border-blue-700 group">
                    <span className="text-center w-full px-8 py-2 text-white text-lg  tracking-widest z-20 transition-all duration-300 ease-in-out group-hover:text-[#183153]">
                      Login
                    </span>
                    <div className="absolute top-0 right-0 h-full w-0 bg-[#ffd402] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></div>
                  </button>
                </div>
              </form>
              <button
                className="mt-6 text-sm text-blue-500 hover:text-blue-600 flex items-center justify-center gap-2 w-full transition-colors"
                onClick={toggleForm}
              >
                <UserPlus className="w-4 h-4" />
                <span>Don't have an account? Sign Up</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hello Friend Section */}
        <AnimatePresence>
          {isSignup && (
            <motion.div
              key="banner-signup"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-4">Hello, Friend!</h2>
              <p className="text-gray-500">
                Sign up now to get started with us.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        {/* )} */}
      </div>
    </div>
  );
}

export default SingupLogin;
