import React from "react";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Brand & Social Links */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 pb-8 border-b border-gray-800 gap-4">
          <div>
            <h3 className="text-2xl font-bold tracking-wide text-white">MantrixLab</h3>
            <p className="text-gray-400 text-sm mt-1">Immersive 3D Virtual Science Simulations</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/mantrixlab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MantrixLab LinkedIn"
              className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-[#0A66C2] rounded-lg transition duration-200 text-white text-sm"
            >
              <Linkedin size={18} />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Product Section */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Product</h4>
            <ul>
              <li className="mb-1 hover:text-blue-400 cursor-pointer">
                <Link to="/virtuallabs">Simulations</Link>
              </li>
              <li className="mb-1 hover:text-blue-400 cursor-pointer">
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Company</h4>
            <ul>
              <li className="mb-1 hover:text-blue-400 cursor-pointer">
                <Link to="/about">About Mantrixlab</Link>
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Resources</h4>
            <ul>
              <li className="mb-1 hover:text-blue-400 cursor-pointer">
                <Link to="/blog">Blog</Link>
              </li>
              {/* Hidden for now
              <li className="mb-1 hover:text-blue-400 cursor-pointer">
                <a href="#">Case Studies</a>
              </li>
              <li className="mb-1 hover:text-blue-400 cursor-pointer">
                <a href="#">Webinars</a>
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                <a href="#">Research</a>
              </li>
              */}
            </ul>
          </div>

          {/* More Section */}
          <div>
            <h4 className="text-lg font-semibold mb-2">More</h4>
            <ul>
              <li className="mb-1 hover:text-blue-400 cursor-pointer">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="mb-1 hover:text-blue-400 cursor-pointer">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="mb-1 hover:text-blue-400 cursor-pointer">
                <a href="#">Accessibility</a>
              </li>
              <li className="mb-1 hover:text-blue-400 cursor-pointer">
                <a href="#">Security</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-10 border-t border-gray-800 pt-6 text-sm text-gray-400 gap-4">
          <p>© 2025 Mantrixlab. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/blog" className="hover:text-blue-400 transition">
              Blog
            </Link>
            <a
              href="https://www.linkedin.com/company/mantrixlab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#0A66C2] transition flex items-center gap-1.5"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
