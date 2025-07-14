import React, { useEffect, useState } from 'react';
import { GraduationCap, Menu, X, ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
    <header className={`bg-black text-white sticky top-0 z-50 transition-all duration-300 
    ${scroll ? "bg-opacity-50 backdrop-blur-sm shadow-md" : ""}
    `}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <GraduationCap className="h-10 w-10 text-blue-300" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-100">
              EduSim
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink
              to={""}
              className="text-blue-100 hover:text-white relative transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </NavLink>

            <NavLink
              to={"/virtuallabs"}
              className="text-blue-100 hover:text-white relative transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              Virtual Labs
            </NavLink>

            <NavLink
              to={"/progress"}
              className="text-blue-100 hover:text-white relative transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              Progress
            </NavLink>

            <NavLink
              to={"/about"}
              className="text-blue-100 hover:text-white relative transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              About Us
            </NavLink>

            <NavLink
              to={"/contact"}
              className="text-blue-100 hover:text-white relative transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </NavLink>
          </nav>


          <div className="hidden lg:flex items-center space-x-4">
            <NavLink
              to={"/auth/login"}
              className="px-4 py-2 text-blue-100 hover:text-white transition-colors">
              Login
            </NavLink>
            {/* <NavLink
              to={"/register"}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
              Get Started
            </NavLink> */}

            <div className="flex justify-center gap-4">
              <NavLink
                to={"/auth/register"}
                className="relative flex justify-center items-center rounded-2xl bg-gray-800 font-montserrat shadow-md hover:shadow-lg cursor-pointer overflow-hidden border border-indigo-700 group">
                <span className="text-center w-full px-3 py-1 text-white text-md  tracking-widest z-20 transition-all duration-300 ease-in-out group-hover:text-[#183153]">
                  Join Us
                </span>
                <div className="absolute top-0 right-0 h-full w-0 bg-[#ffd402] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></div>
              </NavLink>
            </div>
          </div>

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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavLink
                to={""}
                className="text-blue-100 hover:text-white transition-colors"
              >
                Home
              </NavLink>

              <NavLink
                to={"/virtuallabs"}
                className="text-blue-100 hover:text-white transition-colors"
              >
                Virtual Labs
              </NavLink>

              <NavLink
                to={"/progress"}
                className="text-blue-100 hover:text-white transition-colors"
              >
                Progress
              </NavLink>
              <NavLink
                to={"/about"}
                className="text-blue-100 hover:text-white transition-colors"
              >
                About
              </NavLink>
              <NavLink
                to={"/contact"}
                className="text-blue-100 hover:text-white transition-colors"
              >
                contact
              </NavLink>
              <div className="pt-4 space-y-2">
                <NavLink
                  to={"/auth/login"}
                  className="w-full px-4 py-2 text-blue-100 hover:text-white transition-colors">
                  Sign In
                </NavLink>
                <NavLink
                  to={"/auth/register"}
                  className="w-full px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                  Join us
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}