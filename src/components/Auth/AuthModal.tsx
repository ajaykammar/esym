import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";

const bg1 = "../../images/bg1.jpeg";

interface AuthModalProps {
  onClose: () => void;
  onLogin?: (data: any) => void;
  onRegister?: (data: any) => void;
  onOtpVerify?: (otp: string) => void;
  onGoogleLogin?: (data: any) => void;
}

const bannerContent = {
  login: {
    title: "Welcome Back!",
    message:
      "Login to access your courses, track progress, and explore new learning paths.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  register: {
    title: "Join the Mantrixlab Community",
    message:
      "Create your student profile and get connected with your institute instantly.",
    image:
      "https://images.unsplash.com/photo-1606761568499-6fcb3c0e4e2d?auto=format&fit=crop&w=800&q=80",
  },
  mobile: {
    title: "Quick Mobile Login",
    message:
      "Enter your mobile number to receive a one-time OTP for secure login.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  otp: {
    title: "Verify Your OTP",
    message:
      "Enter the 6-digit code sent to your phone to continue your login process.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80",
  },
};

const AuthModal: React.FC<AuthModalProps> = ({
  onClose,
  onLogin,
  onRegister,
  onOtpVerify,
  onGoogleLogin,
}) => {
  const [mode, setMode] = useState<"login" | "register" | "mobile" | "otp">(
    "login",
  );
  const [formData, setFormData] = useState<any>({});
  const [otp, setOtp] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (mode === "login") {
      // Login validation
      if (!formData.email || !formData.password) {
        toast.error("Please enter both email and password!");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast.error("Please enter a valid email address!");
        return;
      }

      onLogin?.(formData);
    } else if (mode === "register") {
      // --------------------------
      // NAME VALIDATION
      // --------------------------
      const nameRegex = /^[A-Za-z ]+$/;
      if (!nameRegex.test(formData.name)) {
        toast.error("Name should contain only alphabets!");
        return;
      }

      // --------------------------
      // EMAIL VALIDATION
      // --------------------------
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const allowedDomains = [
        "gmail.com",
        "outlook.com",
        "yahoo.com",
        "zoho.com",
      ];

      if (!emailRegex.test(formData.email)) {
        toast.error("Please enter a valid email!");
        return;
      }

      const emailDomain = formData.email.split("@")[1];
      if (!allowedDomains.includes(emailDomain.toLowerCase())) {
        toast.error("Only Gmail, Outlook, Yahoo, or Zoho emails are allowed!");
        return;
      }

      // --------------------------
      // PHONE VALIDATION
      // --------------------------
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(formData.phone)) {
        toast.error("Phone number must be exactly 10 digits!");
        return;
      }

      const badPhones = ["1234567890", "0987654321"];
      if (badPhones.includes(formData.phone)) {
        toast.error("This phone number is not allowed!");
        return;
      }

      if (/^(12345)/.test(formData.phone)) {
        toast.error("Phone number cannot start with 12345!");
        return;
      }

      // --------------------------
      // PASSWORD VALIDATION
      // --------------------------
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

      if (!passwordRegex.test(formData.password)) {
        toast.error(
          "Password must contain 1 uppercase, 1 number, 1 symbol & be at least 6 characters!",
        );
        return;
      }

      // --------------------------
      // CREATE PAYLOAD
      // --------------------------
      const payload = {
        name: formData.name || "",
        email: formData.email || "",
        phone: formData.phone || "",
        password: formData.password || "",
        gender: formData.gender || "",
        institutionId: formData.institutionId || "",
        institution: formData.institution || "",
        StandardDivision: formData.StandardDivision || "",
        faculty: formData.faculty || "Other",

        country: formData.country || "India",
        helpText: formData.helpText || "",
        referral: formData.referral || "",

        role: "student",
        isActive: true,
        createdBy: formData.createdBy || "",
      };

      onRegister?.(payload);
    } else if (mode === "otp") {
      if (!otp || otp.length < 6) {
        toast.error("Please enter a valid 6-digit OTP!");
        return;
      }
      onOtpVerify?.(otp);
    }
  };

  const banner = bannerContent[mode];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 h-[100vh] w-[100vw] flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // close when clicking outside
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-[90%] md:w-[900px] h-[500px] overflow-hidden"
          onClick={(e) => e.stopPropagation()} // prevent close when clicking inside modal
        >
          {/* LEFT SIDE FORM */}
          <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {mode === "login"
                  ? "Student Login"
                  : mode === "register"
                    ? "Register Student"
                    : mode === "mobile"
                      ? "Login with Mobile"
                      : "Verify OTP"}
              </h2>
              <button onClick={onClose}>
                <X className="text-gray-500 hover:text-red-500" />
              </button>
            </div>

            {/* LOGIN */}
            {mode === "login" && (
              <div className="space-y-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 text-black border rounded-lg"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-3 text-black border rounded-lg"
                  onChange={handleChange}
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Login
                </button>

                <div className="text-center text-sm text-gray-500">
                  New user?{" "}
                  <button
                    onClick={() => setMode("register")}
                    className="text-blue-600 hover:underline"
                  >
                    Register here
                  </button>
                </div>

                {/* <div className="text-center text-sm text-gray-500">
                  or{" "}
                  <button
                    onClick={() => setMode("mobile")}
                    className="text-green-600 hover:underline"
                  >
                    Login with Mobile
                  </button>
                </div> */}

                <div className="flex items-center justify-center mt-3">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      onGoogleLogin?.(credentialResponse);
                    }}
                    onError={() => {
                      toast.error("Google login failed!");
                    }}
                    useOneTap
                    theme="outline"
                    size="medium"
                    shape="circle"
                    logo_alignment="center"
                  />
                </div>
              </div>
            )}

            {/* REGISTER */}

            {mode === "register" && (
              <motion.div
                key="register"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <h2 className="text-2xl font-semibold text-center text-white mb-4">
                  Create an Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Name */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 text-black border rounded-lg"
                    required
                  />

                  {/* Email */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 text-black border rounded-lg"
                    required
                  />

                  {/* Phone */}
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 text-black border rounded-lg"
                    required
                  />

                  {/* Password */}
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-3 text-black border rounded-lg"
                    required
                  />

                  {/* Institution */}
                  <input
                    type="text"
                    name="institution"
                    placeholder="Institution / School / College"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full p-3 text-black border rounded-lg"
                  />
                  {/* NEW FIELD ADDED */}

                  <input
                    type="text"
                    name="institutionId"
                    placeholder="School / College / Institution ID"
                    value={formData.institutionId}
                    onChange={handleChange}
                    className="w-full p-3 text-black border rounded-lg"
                  />
                  {/* Standard / Division */}
                  <input
                    type="text"
                    name="StandardDivision"
                    placeholder="Standard / Division"
                    value={formData.StandardDivision}
                    onChange={handleChange}
                    className="w-full p-3 text-black border rounded-lg"
                  />

                  {/* Faculty */}
                  <select
                    name="faculty"
                    value={formData.faculty}
                    onChange={handleChange}
                    className="w-full p-3 text-black border rounded-lg"
                  >
                    <option value="">Select Faculty</option>
                    <option value="School">School</option>
                    <option value="College">College</option>
                    <option value="Science">Science</option>
                    <option value="Medical">Medical</option>
                    <option value="Engineering">Engineering</option>
                  </select>

                  {/* Country */}
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full p-3 text-black border rounded-lg"
                  />

                  {/* Gender */}
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-3 text-black border rounded-lg"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>

                  {/* Help Text */}
                  {/* <textarea
                    name="helpText"
                    placeholder="How can we help you?"
                    value={formData.helpText}
                    onChange={handleChange}
                    className="w-full p-3 text-black border rounded-lg"
                    rows={2}
                  /> */}

                  {/* Referral */}
                  {/* <input
                    type="text"
                    name="referral"
                    placeholder="Referral Code (optional)"
                    value={formData.referral}
                    onChange={handleChange}
                    className="w-full p-3 text-black border rounded-lg"
                  /> */}

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg mt-3"
                  >
                    Register
                  </button>
                </form>
              </motion.div>
            )}

            {/* MOBILE LOGIN */}
            {mode === "mobile" && (
              <div className="space-y-4 flex flex-col justify-center h-[430px]">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Mobile Number"
                  className="w-full p-3 text-black border rounded-lg"
                  onChange={handleChange}
                />
                <button
                  onClick={() => {
                    if (!formData.phone) {
                      toast.error("Enter mobile number!");
                      return;
                    }
                    setMode("otp");
                  }}
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                >
                  Send OTP
                </button>

                <div className="text-center text-sm text-gray-500">
                  or{" "}
                  <button
                    onClick={() => setMode("login")}
                    className="text-blue-600 hover:underline"
                  >
                    Back to Login
                  </button>
                </div>
              </div>
            )}

            {/* OTP VERIFY */}
            {mode === "otp" && (
              <div className="space-y-4 flex flex-col justify-center h-[430px]">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="w-full p-3 border rounded-lg text-center tracking-widest"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Verify OTP
                </button>
                <button
                  onClick={() => setMode("mobile")}
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Resend OTP
                </button>
              </div>
            )}
          </div>

          {/* RIGHT SIDE BANNER */}
          <motion.div
            key={mode}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex w-1/2 items-center justify-center relative"
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="relative z-10 text-white text-center px-6">
              <h2 className="text-3xl font-semibold mb-2">{banner.title}</h2>
              <p className="text-sm text-white/90">{banner.message}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AuthModal;
