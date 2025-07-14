import React from "react";

const StepsInfographic = () => {
  const steps = [
    {
      title: "INFOGRAPHIC",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "bg-yellow-400",
      icon: "🏢", // Replace with your icon
    },
    {
      title: "INFOGRAPHIC",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "bg-red-400",
      icon: "📊", // Replace with your icon
    },
    {
      title: "INFOGRAPHIC",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "bg-blue-400",
      icon: "⚙️", // Replace with your icon
    },
    {
      title: "INFOGRAPHIC",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "bg-green-400",
      icon: "🌱", // Replace with your icon
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-200 shadow-lg">
          <span className="text-3xl">💡</span>
        </div>
        <h2 className="mt-4 text-2xl font-semibold">5 STEPS</h2>
        <p className="text-gray-600">INFOGRAPHIC</p>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-6 text-center rounded-lg shadow-lg ${step.color} text-white`}
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white mb-4">
              <span className="text-2xl">{step.icon}</span>
            </div>
            <h3 className="text-lg font-bold">{step.title}</h3>
            <p className="text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsInfographic;
