import React, { useState } from "react";

interface FormData {
  name?: string;
  email: string;
  phone?: string;
  password: string;
  institution?: string;
  position?: string;
  school?: string;
  standard?: string;
  faculty?: string;
  country?: string;
  help?: string;
  hearAbout?: string;
}

export const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login Data:", formData);
      // API call for login
    } else {
      console.log("Register Data:", formData);
      // API call for register
    }
  };

  return (
    <div className="flex w-full h-screen items-center justify-center bg-gray-100/10">
      <div className="relative w-[900px] bg-white shadow-lg rounded-lg overflow-hidden flex">
        {/* Left Panel */}
        <div
          className={`w-1/2 p-8 transition-all duration-500 ${
            isLogin ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6">
            {isLogin ? "Login" : "Register"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                {/* Personal Information */}
                <h3 className="font-semibold mt-4">Personal Information</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                />

                {/* Professional Information */}
                <h3 className="font-semibold mt-4">Professional Information</h3>
                <input
                  type="text"
                  name="institution"
                  placeholder="Institution/Company Name"
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="position"
                  placeholder="Position"
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="school"
                  placeholder="School"
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="standard"
                  placeholder="Standard"
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="faculty"
                  placeholder="Faculty"
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                />

                {/* Additional Information */}
                <h3 className="font-semibold mt-4">Additional Information</h3>
                <textarea
                  name="help"
                  placeholder="How can Educasim help you?"
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                ></textarea>
                <input
                  type="text"
                  name="hearAbout"
                  placeholder="How did you hear about us?"
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                />
              </>
            )}

            {isLogin && (
              <>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                />
              </>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
          </form>
          <p className="mt-4 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              className="text-blue-500"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>

        {/* Right Panel (for animation effect) */}
        <div
          className={`w-1/2 bg-blue-500 text-white flex items-center justify-center text-3xl font-bold transition-all duration-500 ${
            isLogin ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {isLogin ? "Welcome Back!" : "Join Us Today!"}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
