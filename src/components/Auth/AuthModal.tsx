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
  onGoogleLogin?: () => void;
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
    "login"
  );
  const [formData, setFormData] = useState<any>({});
  const [otp, setOtp] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (mode === "register") {
      // Transform flat formData into nested payload
      const payload = {
        studentId: formData.studentId || "",
        firstName: formData.firstName || formData.name?.split(" ")[0] || "",
        lastName: formData.lastName || formData.name?.split(" ")[1] || "",
        gender: formData.gender || "",
        dob: formData.dob || "",
        email: formData.email || "",
        phone: formData.phone || "",
        address: {
          street: formData.address || "",
          city: formData.city || "",
          state: formData.state || "",
          pinCode: formData.pincode || "",
          country: "India",
        },
        profileImage: formData.profileImage || "",

        institute: {
          name: formData.instituteName || "",
          code: formData.instituteCode || "",
          department: formData.department || "",
          course: formData.course || "",
          specialization: formData.specialization || "",
          yearOfStudy: Number(formData.yearOfStudy) || 1,
          admissionYear:
            Number(formData.admissionYear) || new Date().getFullYear(),
          rollNumber: formData.rollNumber || "",
          registrationNumber: formData.registrationNumber || "",
          classTeacher: formData.classTeacher || "",
        },

        academics: {
          cgpa: Number(formData.cgpa) || 0,
          attendancePercentage: Number(formData.attendancePercentage) || 0,
          subjects: formData.subjects || [],
        },

        guardian: {
          name: formData.guardianName || "",
          relation: formData.guardianRelation || "",
          phone: formData.guardianPhone || "",
          email: formData.guardianEmail || "",
          address: formData.guardianAddress || "",
          occupation: formData.guardianOccupation || "",
        },

        password: formData.password || "",
        role: "student",
        isActive: true,
        createdBy: formData.createdBy || "", // Admin ObjectId
      };

      onRegister?.(payload); // send structured payload
    } else if (mode === "login") {
      onLogin?.(formData);
    } else if (mode === "otp") {
      onOtpVerify?.(otp);
    }
  };

  const banner = bannerContent[mode];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-[90%] md:w-[900px] h-[500px] overflow-hidden"
        >
          {/* LEFT SIDE FORM */}
          <div className="w-full  md:w-1/2 p-6 md:p-10 overflow-y-auto">
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
              <div className="space-y-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full  p-3 text-black border rounded-lg"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full  p-3 text-black border rounded-lg"
                  onChange={handleChange}
                />

                <button
                  onClick={handleSubmit}
                  className="w-full  bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Login
                </button>

                <div className="text-center text-sm text-gray-500 mt-3">
                  New user?{" "}
                  <button
                    onClick={() => setMode("register")}
                    className="text-blue-600 hover:underline"
                  >
                    Register here
                  </button>
                </div>

                <div className="text-center text-sm text-gray-500">
                  or{" "}
                  <button
                    onClick={() => setMode("mobile")}
                    className="text-green-600 hover:underline"
                  >
                    Login with Mobile
                  </button>
                </div>

                <div className="flex items-center justify-center">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      onGoogleLogin(credentialResponse);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                    useOneTap
                    // 🔹 Hide default button styling
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
              <div className="space-y-3 overflow-y-auto max-h-[430px] pr-2">
                <input
                  name="studentId"
                  placeholder="Student ID"
                  className="w-full  p-3 text-black border rounded-lg"
                  onChange={handleChange}
                />
                <input
                  name="name"
                  placeholder="Full Name"
                  className="w-full  p-3 text-black border rounded-lg"
                  onChange={handleChange}
                />
                <input
                  name="email"
                  placeholder="Email"
                  className="w-full  p-3 text-black border rounded-lg"
                  onChange={handleChange}
                />
                <input
                  name="phone"
                  placeholder="Mobile Number"
                  className="w-full  p-3 text-black border rounded-lg"
                  onChange={handleChange}
                />
                <select
                  name="gender"
                  className="w-full p-3 text-black border rounded-lg"
                  value={formData.gender || ""}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="date"
                  name="dob"
                  className="w-full  p-3 text-black border rounded-lg"
                  onChange={handleChange}
                />
                <input
                  name="address"
                  placeholder="Address"
                  className="w-full  p-3 text-black border rounded-lg"
                  onChange={handleChange}
                />
                <input
                  name="city"
                  placeholder="City"
                  className="w-full  p-3 text-black border rounded-lg"
                  onChange={handleChange}
                />
                <input
                  name="state"
                  placeholder="State"
                  className="w-full  p-3 text-black border rounded-lg"
                  onChange={handleChange}
                />
                <input
                  name="pincode"
                  placeholder="Pincode"
                  className="w-full  p-3 text-black border rounded-lg"
                  onChange={handleChange}
                />
                <hr className="my-2" />
                <h3 className="text-lg font-medium text-gray-700">
                  Institute Details
                </h3>
                <input
                  name="instituteName"
                  placeholder="Institute Name"
                  className="w-full  p-3 text-black border rounded-lg"
                  onChange={handleChange}
                />
                <input
                  name="instituteCode"
                  placeholder="Institute Code"
                  className="w-full  p-3 text-black border rounded-lg"
                  onChange={handleChange}
                />
                <input
                  name="department"
                  placeholder="Department"
                  className="w-full  p-3 text-black border rounded-lg"
                  onChange={handleChange}
                />
                <input
                  name="course"
                  placeholder="Course"
                  className="w-full  p-3 text-black border rounded-lg"
                  onChange={handleChange}
                />
                <input
                  name="yearOfStudy"
                  placeholder="Year of Study"
                  className="w-full  p-3 text-black border rounded-lg"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full  p-3 text-black border rounded-lg"
                  onChange={handleChange}
                />

                <button
                  onClick={handleSubmit}
                  className="w-full  bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                >
                  Register
                </button>

                <div className="text-center text-sm text-gray-500 mt-3">
                  Already have an account?{" "}
                  <button
                    onClick={() => setMode("login")}
                    className="text-blue-600 hover:underline"
                  >
                    Login
                  </button>
                </div>
              </div>
            )}

            {/* MOBILE LOGIN */}
            {mode === "mobile" && (
              <div className="space-y-4 flex flex-col justify-center h-[430px]">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Mobile Number"
                  className="w-full  p-3 text-black border rounded-lg"
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
                  className="w-full  bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
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
                  className="w-full  p-3 border rounded-lg text-center tracking-widest"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                />
                <button
                  onClick={handleSubmit}
                  className="w-full  bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
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
