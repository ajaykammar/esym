import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  FaUser,
  FaCamera,
  FaCheckCircle,
  FaEdit,
  FaCalendarAlt,
  FaClock,
  FaExclamationCircle,
  FaShieldAlt,
  FaSlidersH,
  FaLock,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";
import { Profile } from "../services/Auth";

const UserProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { _id } = JSON.parse(localStorage.getItem("user") || "{}");

  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => Profile(_id),
  });

  const user = data?.data;

  if (isLoading) return <p>Loading...</p>;

  // ✅ Logout function
  const handleLogout = () => {
    // Clear localStorage

    localStorage.clear();

    // Clear cookies
    document.cookie.split(";").forEach((cookie) => {
      const name = cookie.split("=")[0].trim();
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    });

    // Redirect to login
    window.location.href = "/";
  };

  return (
    <div className="dashboard">
      {/* Main */}
      <main className="main-content">
        <div className="profile-container">
          {/* Profile Header */}
          <section className="profile-header">
            <div className="profile-avatar-section">
              <div className="avatar-container">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="Profile"
                  className="profile-avatar"
                />
                <button className="avatar-upload-btn">
                  <FaCamera />
                </button>
                <input type="file" accept="image/*" hidden />
              </div>
              <div
                className="status-indicator verified"
                title="Verified Account"
              >
                <FaCheckCircle />
              </div>
            </div>

            <div className="profile-info">
              <div className="name-section">
                <h1 className="full-name">{user?.name}</h1>
                <button className="edit-btn">
                  <FaEdit />
                </button>
              </div>
              <p className="username">@{user?.email?.split("@")[0]}</p>
              <div className="account-meta">
                <span className="meta-item">
                  <FaCalendarAlt /> Member since{" "}
                  {new Date(user?.createdAt).toLocaleDateString()}
                </span>
                <span className="meta-item">
                  <FaClock /> Last update:{" "}
                  {new Date(user?.updatedAt).toLocaleString()}
                </span>
              </div>
            </div>
          </section>

          {/* Tabs */}
          <section className="profile-content">
            <div className="tab-navigation">
              {[
                { id: "personal", icon: <FaUser />, label: "Personal Info" },
                { id: "security", icon: <FaShieldAlt />, label: "Security" },
                {
                  id: "preferences",
                  icon: <FaSlidersH />,
                  label: "Preferences",
                },
                { id: "privacy", icon: <FaLock />, label: "Privacy" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Personal Info Tab */}
            {activeTab === "personal" && (
              <div className="tab-content active">
                <div className="content-section">
                  <h2>Personal Information</h2>
                  <div className="form-grid">
                    {/* Full Name */}
                    <div className="form-group">
                      <label>Full Name</label>
                      <div className="input-with-action">
                        <input type="text" value={user?.name} readOnly />
                        <button className="action-btn">
                          <FaEdit />
                        </button>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label>Email Address</label>
                      <div className="input-with-action">
                        <input type="email" value={user?.email} readOnly />
                        <button className="action-btn">
                          <FaEdit />
                        </button>
                      </div>
                      <span className="field-status verified">
                        <FaCheckCircle /> Verified
                      </span>
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                      <label>Phone Number</label>
                      <div className="input-with-action">
                        <input type="tel" value={user?.phone} readOnly />
                        <button className="action-btn">
                          <FaEdit />
                        </button>
                      </div>
                      <span className="field-status unverified">
                        <FaExclamationCircle /> Not verified
                      </span>
                    </div>

                    {/* Institution */}
                    <div className="form-group">
                      <label>Institution</label>
                      <div className="input-with-action">
                        <input type="text" value={user?.institution} readOnly />
                        <button className="action-btn">
                          <FaEdit />
                        </button>
                      </div>
                    </div>

                    {/* Standard / Division */}
                    <div className="form-group">
                      <label>Standard / Division</label>
                      <div className="input-with-action">
                        <input
                          type="text"
                          value={user?.StandardDivision}
                          readOnly
                        />
                        <button className="action-btn">
                          <FaEdit />
                        </button>
                      </div>
                    </div>

                    {/* Gender */}
                    <div className="form-group">
                      <label>Gender</label>
                      <div className="input-with-action">
                        <input type="text" value={user?.gender} readOnly />
                        <button className="action-btn">
                          <FaEdit />
                        </button>
                      </div>
                    </div>

                    {/* Faculty */}
                    <div className="form-group">
                      <label>Faculty</label>
                      <div className="input-with-action">
                        <input type="text" value={user?.faculty} readOnly />
                        <button className="action-btn">
                          <FaEdit />
                        </button>
                      </div>
                    </div>

                    {/* Country */}
                    <div className="form-group">
                      <label>Country</label>
                      <div className="input-with-action">
                        <input type="text" value={user?.country} readOnly />
                        <button className="action-btn">
                          <FaEdit />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="tab-content active">
                <h2>Password & Authentication</h2>
              </div>
            )}

            {activeTab === "preferences" && (
              <div className="tab-content active">
                <h2>Preferences</h2>
              </div>
            )}

            {activeTab === "privacy" && (
              <div className="tab-content active">
                <h2>Privacy</h2>
              </div>
            )}
          </section>

          {/* ✅ Logout Button at End */}
          <div className="logout-container text-center mt-8">
            <button
              className="btn-danger flex items-center gap-2 px-6 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
              onClick={handleLogout}
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </main>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Confirm Logout</h3>
              <button
                className="modal-close"
                onClick={() => setShowLogoutModal(false)}
              >
                <FaTimes />
              </button>
            </div>
            <div className="modal-body">
              <p>
                Are you sure you want to logout? You'll need to sign in again.
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="btn-secondary"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>
              <button className="btn-danger my-10" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
