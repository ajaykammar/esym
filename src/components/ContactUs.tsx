import { useState } from "react";
import {
  Mail,
  User,
  Phone,
  Building2,
  GraduationCap,
  Globe2,
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { ConctactUS } from "../services/Auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  phone: "",
  password: "",
  institution: "",
  StandardDivision: "",
  query: "",
  faculty: "Other",
  country: "",
  helpText: "",
  referral: "",
  gender: "",
};

const ContactUs = () => {
  const [formValues, setFormValues] = useState(initialState);
  const navigate = useNavigate();

  const genders = ["Male", "Female", "Other"];
  const faculties = [
    "Science",
    "Engineering",
    "Medicine",
    "Arts",
    "Business",
    "Education",
    "Other",
  ];

  const RegisterMutation = useMutation({
    mutationKey: ["Register"],
    mutationFn: ConctactUS,
    onSuccess: () => {
      toast.success("Form submitted successfully 🎉");

      // Clear all fields
      setFormValues(initialState);

      // Redirect to home
      setTimeout(() => {
        navigate("/");
      }, 1500);
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Something went wrong");
    },
  });

  const handleInputChange = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const SubmitRegistration = (e: any) => {
    e.preventDefault();
    RegisterMutation.mutate(formValues);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="mx-20 my-5 text-xl font-bold">Contact Us</h1>

      <div className="w-[90%] sm:w-[60%] mb-20 rounded-lg bg-gray-800 text-white">
        <div className="py-10">
          <form className="space-y-4 mx-10" onSubmit={SubmitRegistration}>
            {/* Personal Info */}
            <div>
              <h3 className="text-lg font-medium text-blue-400 mb-2">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    required
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full pl-10 py-2 bg-gray-700 border border-gray-600 rounded-md"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    required
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full pl-10 py-2 bg-gray-700 border border-gray-600 rounded-md"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    required
                    name="phone"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    className="w-full pl-10 py-2 bg-gray-700 border border-gray-600 rounded-md"
                  />
                </div>

                {/* Gender */}
                <select
                  required
                  name="gender"
                  value={formValues.gender}
                  onChange={handleInputChange}
                  className="bg-gray-700 border border-gray-600 rounded-md px-3 py-2"
                >
                  <option value="">Select Gender</option>
                  {genders.map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Professional Info */}
            <div>
              <h3 className="text-lg font-medium text-blue-400 mb-2">
                Professional Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Building2 className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    required
                    name="institution"
                    value={formValues.institution}
                    onChange={handleInputChange}
                    placeholder="Institution"
                    className="w-full pl-10 py-2 bg-gray-700 border border-gray-600 rounded-md"
                  />
                </div>

                <input
                  required
                  name="StandardDivision"
                  value={formValues.StandardDivision}
                  onChange={handleInputChange}
                  placeholder="Standard / Division"
                  className="bg-gray-700 border border-gray-600 rounded-md px-3 py-2"
                />

                {/* Faculty */}
                <select
                  name="faculty"
                  value={formValues.faculty}
                  onChange={handleInputChange}
                  className="bg-gray-700 border border-gray-600 rounded-md px-3 py-2"
                >
                  {faculties.map((f) => (
                    <option key={f}>{f}</option>
                  ))}
                </select>

                <input
                  required
                  name="country"
                  value={formValues.country}
                  onChange={handleInputChange}
                  placeholder="Country"
                  className="bg-gray-700 border border-gray-600 rounded-md px-3 py-2"
                />

                <textarea
                  required
                  name="query"
                  value={formValues.query}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Your Query"
                  className="bg-gray-700 border border-gray-600 rounded-md px-3 py-2 col-span-full"
                />
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <button
                disabled={RegisterMutation.isLoading}
                className="px-8 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                {RegisterMutation.isLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
