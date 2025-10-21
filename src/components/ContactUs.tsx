import { useState } from "react";
import {
  Mail,
  Lock,
  User,
  LogIn,
  Phone,
  Building2,
  GraduationCap,
  Globe2,
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { ConctactUS } from "../services/Auth";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [formValues, setFormValues] = useState({
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
    gender: "", // new field
  });
  const notify = (msg: string) => toast(msg);
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
      console.log("Register Sucress");
      notify("register successful");
    },

    onError: (error: any) => {
      notify(error.response.data.message);
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
    console.log("Form submitted:", formValues);
    RegisterMutation.mutate(formValues);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <h1 className="mx-20 my-5 text-xl  font-bold">Contact Us</h1>
      <div className="w-[60%] mx-20 mb-20 rounded-lg   bg-gray-800 text-white relative  ">
        <div className="py-10 ">
          <form className="space-y-1  mx-10" onSubmit={SubmitRegistration}>
            {/* Personal Information Section */}
            <div className="space-y-1">
              <h3 className="text-lg font-medium text-blue-400">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  {/* <label className="block text-sm font-medium opacity-60 mb-1">
                                  Name *
                                </label> */}
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
                  {/* <label className="block text-sm font-medium opacity-60 mb-1">
                                  Email *
                                </label> */}
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
                  {/* <label className="block text-sm font-medium opacity-60 mb-1">
                                  Phone Number *
                                </label> */}
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
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    required
                    name="gender"
                    value={formValues.gender}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                  >
                    <option value="">Select Gender</option>
                    {genders.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
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
                  {/* <label className="block text-sm font-medium opacity-60 mb-1">
                                  Institution / Company Name *
                                </label> */}
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
                  {/* <label className="block text-sm font-medium opacity-60 mb-1">
                                  Position *
                                </label> */}
                  {/* Position with Standard/Division */}
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      required
                      type="text"
                      name="StandardDivision"
                      value={formValues.StandardDivision}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter Standard/Division"
                    />
                  </div>
                </div>

                <div className="relative">
                  {/* <label className="block text-sm font-medium opacity-60 mb-1">
                                  Faculty *
                                </label> */}
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
                  {/* <label className="block text-sm font-medium opacity-60 mb-1">
                                  Country *
                                </label> */}
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
                <div className="relative">
                  {/* <label className="block text-sm font-medium opacity-60 mb-1">
                                  Country *
                                </label> */}
                  <div className="relative">
                    <Globe2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <textarea
                      required
                      type="text"
                      name="query"
                      rows={4}
                      value={formValues.query}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your Query"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Create Account Button */}
            <div className="flex justify-center gap-4 ">
              <button
                type="submit"
                className="relative w-content flex justify-center items-center rounded-lg bg-blue-700 font-montserrat shadow-md hover:shadow-lg cursor-pointer overflow-hidden border border-blue-700 group"
              >
                <span className="text-center w-full  text-white text-sm  tracking-widest z-20 transition-all duration-300 ease-in-out group-hover:text-[#183153]">
                  Submit
                </span>
                <div className="absolute top-0 right-0 h-full w-0 bg-[#ffd402] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
