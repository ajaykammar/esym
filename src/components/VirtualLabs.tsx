import React from "react";
import { Physics_Data, Chemistry_Data, Biology_Data } from "../Data/Data";
import ThreeJSTitle from "./ThreeJSTitle";
import { useNavigate } from "react-router-dom";
import useToggleStore from "../features/useToggleStore";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const VirtualLabs = () => {
  const { open } = useToggleStore();
  const notify = (msg: string) => toast(msg);
  const user = localStorage.getItem("user") || "{}";
  const Navigate = useNavigate();

  // 🔹 Format experiment title → URL friendly
  const formatExperiment = (title: string) => {
    return title
      .trim()
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s+/g, "-");
  };

  // 🔹 Navigation Logic
  const UserNavigate = (simulation: any, category: string) => {
    if (Object.keys(JSON.parse(user)).length > 0) {
      const experiment = formatExperiment(simulation.title);
      const id = simulation.id;
      Navigate(`/simulation/${category}/${experiment}/${id}`);
    } else {
      open();
      notify("Please log in to access the simulations.");
    }
  };

  // 🔹 Category Section Renderer
  const renderCategorySection = (
    title: string,
    data: any[],
    categry: string
  ) => (
    <section className="mb-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((simulation: any) => {
          const Icon = simulation.icon;

          return (
            <div
              key={simulation.id}
              className="group relative bg-black bg-opacity-80 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={simulation.image}
                  alt={simulation.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs rounded-full bg-white/20 text-white">
                    {simulation.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-200">
                    {simulation.difficulty}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    {Icon && <Icon className="h-6 w-6 text-blue-300" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 h-14">
                      {simulation.title}
                    </h3>
                    <p className="text-gray-300 text-sm h-20">
                      {simulation.description}
                    </p>
                  </div>
                </div>

                {/* Start Button */}
                <div className="flex justify-center">
                  <button
                    onClick={() => UserNavigate(simulation, categry)}
                    className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
                  >
                    Start Simulation →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );

  return (
    <>
      {/* ================= SEO + SCHEMA ================= */}
      <Helmet>
        <title>Virtual Labs | Mantrixlab</title>
        <meta
          name="description"
          content="Mantrixlab Virtual Labs provide interactive 3D science simulations for Physics, Chemistry, and Biology."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Virtual Labs",
            url: "https://mantrixlab.com/virtuallabs",
            description:
              "Mantrixlab's Virtual Labs offer interactive science simulations for students and educators, enhancing STEM learning.",
            publisher: {
              "@type": "Organization",
              name: "Mantrixlab",
              url: "https://mantrixlab.com",
            },
            mainEntity: {
              "@type": "EducationalAudience",
              educationalRole: "student",
              audienceType: "secondary school, college",
            },
          })}
        </script>
      </Helmet>

      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        <section className="relative overflow-hidden">
          <ThreeJSTitle />
          <div className="mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200">
                Interactive 3D Science Simulations
              </h1>
              <p className="text-xl text-blue-100 mb-12">
                Learn Physics, Chemistry, and Biology through immersive 3D
                virtual labs.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ================= CATEGORIES ================= */}
      <div className="mx-auto p-12 pb-20 bg-white">
        {renderCategorySection("Physics Simulations", Physics_Data, "physics")}
        {renderCategorySection(
          "Chemistry Simulations",
          Chemistry_Data,
          "chemistry"
        )}
        {renderCategorySection("Biology Simulations", Biology_Data, "biology")}
      </div>
    </>
  );
};

export default VirtualLabs;
