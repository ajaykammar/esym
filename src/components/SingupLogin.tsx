import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BG_2 from "../Images/bg2.jpeg";
import BG_4 from "../Images/bg4.jpeg";
import { toast } from "react-toastify";
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
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { Login, RegUser } from "../services/Auth";
import { GoogleLogin } from "@react-oauth/google";
import * as jwt_decode from "jwt-decode";

interface GoogleUser {
  iss: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
  email_verified: boolean;
  sub: string;
}

function SingupLogin({ type, setLoginState, setLoginpopup }) {
  const [isSignup, setIsSignup] = useState(true);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    institution: "",
    StandardDivision: "",
    faculty: "Other",
    country: "",
    helpText: "",
    referral: "",
    gender: "",
  });
  const notify = (msg: string) => toast(msg);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.type === "text" ? "username" : "password"]: e.target.value,
    });
  };

  const LoginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: Login,
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    LoginMutation.mutate({
      email: formData.username,
      password: formData.password,
    });
  };

  const toggleForm = () => setIsSignup(!isSignup);

  useEffect(() => {
    if (type === "register") setIsSignup(true);
    if (type === "login") setIsSignup(false);
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

  const genders = ["Male", "Female", "Other"];

  const handleInputChange = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const RegisterMutation = useMutation({
    mutationKey: ["Register"],
    mutationFn: RegUser,
    onSuccess: () => {
      notify("register successful");
      setLoginState("login");
    },
    onError: (error: any) => {
      notify(error.response.data.message);
    },
  });

  const SubmitRegistration = (e: any) => {
    e.preventDefault();
    RegisterMutation.mutate(formValues);
  };

  return (
    <div className="flex flex-col md:flex-row font-roboto overflow-y-auto md:overflow-hidden min-h-screen">
      {/* Left Section - SignUp */}
      <div
        className={`w-full md:w-1/2 bg-gray-800 text-white relative ${
          !isSignup && "hidden md:block"
        }`}
      >
        <div className="flex justify-center py-10 md:py-0">
          <AnimatePresence>
            {isSignup ? (
              <motion.div
                key="signup"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl p-6 md:p-8 "
              >
                <div className="flex justify-center items-center gap-2  ">
                  <UserPlus className="w-8 h-8 text-blue-400" />
                  <h2 className="text-3xl font-light">Sign Up</h2>
                </div>
                <p className="text-base text-gray-400 mb-4 text-center ">
                  Join us and explore new features!
                </p>

                <form
                  className="space-y-6 mx-4 md:mx-10 px-2 overflow-y-auto h-[60vh]"
                  onSubmit={SubmitRegistration}
                >
                  {/* Personal Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-blue-400">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          required
                          type="text"
                          name="name"
                          value={formValues.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-3 py-2 bg-gray-700 border rounded-md focus:ring-2 focus:ring-blue-500"
                          placeholder="Full name"
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          required
                          type="email"
                          name="email"
                          value={formValues.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-3 py-2 bg-gray-700 border rounded-md focus:ring-2 focus:ring-blue-500"
                          placeholder="Email address"
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={formValues.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-3 py-2 bg-gray-700 border rounded-md focus:ring-2 focus:ring-blue-500"
                          placeholder="Phone number"
                        />
                      </div>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          required
                          name="gender"
                          value={formValues.gender}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-3 py-2 bg-gray-700 border rounded-md focus:ring-2 focus:ring-blue-500 appearance-none"
                        >
                          <option value="">Select Gender</option>
                          {genders.map((g) => (
                            <option key={g} value={g}>
                              {g}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          required
                          type="password"
                          name="password"
                          value={formValues.password}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-3 py-2 bg-gray-700 border rounded-md focus:ring-2 focus:ring-blue-500"
                          placeholder="Create a password"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-blue-400">
                      Professional Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          required
                          type="text"
                          name="institution"
                          value={formValues.institution}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-3 py-2 bg-gray-700 border rounded-md focus:ring-2 focus:ring-blue-500"
                          placeholder="Institution name"
                        />
                      </div>
                      <div className="relative">
                        <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          required
                          type="text"
                          name="StandardDivision"
                          value={formValues.StandardDivision}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-3 py-2 bg-gray-700 border rounded-md focus:ring-2 focus:ring-blue-500"
                          placeholder="Standard/Division"
                        />
                      </div>
                      <div className="relative">
                        <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          required
                          name="faculty"
                          value={formValues.faculty}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-3 py-2 bg-gray-700 border rounded-md focus:ring-2 focus:ring-blue-500 appearance-none"
                        >
                          <option value="">Select faculty</option>
                          {faculties.map((f) => (
                            <option key={f} value={f}>
                              {f}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="relative">
                        <Globe2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          required
                          type="text"
                          name="country"
                          value={formValues.country}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-3 py-2 bg-gray-700 border rounded-md focus:ring-2 focus:ring-blue-500"
                          placeholder="Country"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="relative w-full flex justify-center items-center rounded-lg bg-blue-700 shadow-md cursor-pointer border border-blue-700 group mt-4"
                  >
                    <span className="text-center w-full text-white text-sm p-2 tracking-widest z-20 group-hover:text-[#183153]">
                      Create Account
                    </span>
                    <div className="absolute top-0 right-0 h-full w-0 bg-[#ffd402] transition-all group-hover:w-full group-hover:left-0"></div>
                  </button>

                  <button
                    type="button"
                    className="text-sm text-blue-400 hover:text-blue-300 flex items-center justify-center gap-2 w-full mt-2"
                    onClick={toggleForm}
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Already have an account? Login</span>
                  </button>
                </form>
              </motion.div>
            ) : (
              <div className="flex items-center justify-center h-full w-full">
                <div className="">
                  <h2>Welcome</h2>
                  <p>Please log in to access your account.</p>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Section - Login */}
      <div className="w-full md:w-1/2 flex flex-col items-center bg-white relative">
        <AnimatePresence>
          {!isSignup && (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md px-6 py-8"
            >
              <div className="flex items-center justify-center pb-4">
                <LogIn className="w-8 h-8 text-blue-500" />
                <h2 className="text-3xl font-light text-blue-500 ml-2">
                  Login
                </h2>
              </div>

              <p className="text-base text-gray-500 text-center mb-4">
                Please login to continue.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Username or Email"
                  />
                </div>
                <div className="relative mt-3">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Password"
                  />
                </div>
                <div className="flex space-x-2">
                  <button
                    type="submit"
                    className="relative  flex justify-center items-center rounded-lg bg-blue-700 shadow-md cursor-pointer border border-blue-700 group mt-4"
                  >
                    <span className="text-center   text-white text-xs tracking-widest z-20 group-hover:text-[#183153]">
                      Login
                    </span>
                    <div className="absolute top-0 right-0 h-full w-0 bg-[#ffd402] rounded-lg transition-all group-hover:w-full group-hover:left-0"></div>
                  </button>
                  <button className="relative  flex justify-center items-center rounded-lg bg-blue-700 shadow-md cursor-pointer border border-blue-700 group mt-4">
                    <span className="text-center   text-white text-xs tracking-widest z-20 group-hover:text-[#183153]">
                      Log with OTP
                    </span>
                    <div className="absolute top-0 right-0 h-full w-0 bg-[#ffd402] rounded-lg transition-all group-hover:w-full group-hover:left-0"></div>
                  </button>
                </div>
              </form>

              <div>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                    const user = (jwt_decode as any)(
                      credentialResponse.credential
                    );
                    console.log(user);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
                ;
              </div>
              <button
                type="button"
                className="mt-6 text-sm text-blue-500 hover:text-blue-600 flex items-center justify-center gap-2 w-full"
                onClick={toggleForm}
              >
                <UserPlus className="w-4 h-4" />
                <span>Don't have an account? Sign Up</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop signup banner */}
        <AnimatePresence>
          {isSignup && (
            <motion.div
              key="banner-signup"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex text-center w-full h-full items-center justify-center"
              style={{
                backgroundImage: `url(${BG_4})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div>
                <h2 className="text-4xl font-bold mb-4 text-white">
                  Hello, Friend!
                </h2>
                <p className="text-white">
                  Sign up now to get started with us.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default SingupLogin;
