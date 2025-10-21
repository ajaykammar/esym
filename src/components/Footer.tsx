import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      {/* Visit Labster */}
      <div>
        <h3 className="text-lg font-bold mb-4">
          Visit Mantrixlab.com Homepage
        </h3>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Product Section */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Product</h4>
          <ul>
            <li className="mb-1 hover:text-blue-400 cursor-pointer">
              <a href="/virtuallabs">Simulations</a>
            </li>
            <li className="mb-1 hover:text-blue-400 cursor-pointer">
              <a href="#">Pricing</a>
            </li>
            {/* <li className="mb-1 hover:text-blue-400 cursor-pointer">
              <a href="#">Users</a>
            </li> */}
            {/* <li className="hover:text-blue-400 cursor-pointer">
              <a href="#">Login</a>
            </li> */}
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Company</h4>
          <ul>
            <li className="mb-1 hover:text-blue-400 cursor-pointer">
              <a href="/about">About Mantrixlab</a>
            </li>
            {/* <li className="mb-1 hover:text-blue-400 cursor-pointer">
              <a href="#">Careers</a>
            </li> */}
            <li className="hover:text-blue-400 cursor-pointer">
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Resources</h4>
          <ul>
            <li className="mb-1 hover:text-blue-400 cursor-pointer">
              <a href="#">Blog</a>
            </li>
            {/* <li className="mb-1 hover:text-blue-400 cursor-pointer">
              <a href="#">Events</a>
            </li> */}
            <li className="mb-1 hover:text-blue-400 cursor-pointer">
              <a href="#">Case Studies</a>
            </li>
            <li className="mb-1 hover:text-blue-400 cursor-pointer">
              <a href="#">Webinars</a>
            </li>
            {/* <li className="mb-1 hover:text-blue-400 cursor-pointer">
              <a href="#">Podcasts</a>
            </li> */}
            {/* <li className="mb-1 hover:text-blue-400 cursor-pointer">
              <a href="#">News</a>
            </li> */}
            {/* <li className="mb-1 hover:text-blue-400 cursor-pointer">
              <a href="#">Guides</a>
            </li> */}
            <li className="hover:text-blue-400 cursor-pointer">
              <a href="#">Research</a>
            </li>
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
            {/* <li className="mb-1 hover:text-blue-400 cursor-pointer">
              <a href="#">Cookie Policy</a>
            </li> */}
            <li className="mb-1 hover:text-blue-400 cursor-pointer">
              <a href="#">Accessibility</a>
            </li>
            <li className="mb-1 hover:text-blue-400 cursor-pointer">
              <a href="#">Security</a>
            </li>
            {/* <li className="hover:text-blue-400 cursor-pointer">
              <a href="#">Trust</a>
            </li> */}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 border-t border-gray-600 pt-6 text-sm text-gray-400">
        <p>© 2025 Mantrixlab, ApS</p>
        <p className="hover:text-blue-400 cursor-pointer mt-2">
          <a href="#">Privacy Settings</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
