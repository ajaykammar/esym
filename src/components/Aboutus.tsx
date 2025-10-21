import { useState } from "react";
import {
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaChartLine,
  FaDatabase,
  FaBookOpen,
  FaLaptopHouse,
  FaMoneyBillWave,
  FaUsers,
  FaMicrochip,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaQuoteLeft,
} from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import { motion } from "framer-motion";

const Aboutus = () => {
  const team = [
    {
      name: "Sarah Johnson",
      designation: "Lead Developer",
      role: "Full Stack Engineer",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "David Smith",
      designation: "Project Manager",
      role: "Agile & Scrum Specialist",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Emily Carter",
      designation: "UI/UX Designer",
      role: "Design & Branding",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ];

  const features = [
    {
      title: "Visualizing Complex Concepts",
      desc: "Explore molecular reactions, physics experiments, and more in engaging ways.",
      icon: <FaBookOpen className="text-blue-600 text-3xl" />,
    },
    {
      title: "Safe Experimentation",
      desc: "Test hypotheses without risks, perfect for chemistry, robotics, or medical training.",
      icon: <FaUsers className="text-green-600 text-3xl" />,
    },
    {
      title: "Accessibility",
      desc: "Bring high-quality virtual labs to learners from any region.",
      icon: <FaUsers className="text-purple-600 text-3xl" />,
    },
    {
      title: "Skill Development",
      desc: "Promote critical thinking, problem-solving, and decision-making.",
      icon: <FaMicrochip className="text-red-600 text-3xl" />,
    },
  ];

  const challenges = [
    {
      question: "Limited access to lab resources",
      answer: "Provides virtual labs accessible from any device",
    },
    {
      question: "Safety concerns in experiments",
      answer: "Risk-free environments for trial and error",
    },
    {
      question: "High cost of equipment",
      answer: "Minimizes infrastructure needs",
    },
    {
      question: "Student disengagement",
      answer: "Gamified and immersive content boosts interest",
    },
    {
      question: "Inconsistent teaching outcomes",
      answer: "Standardizes learning experiences",
    },
  ];

  const keys = [
    {
      title: "Scalability",
      desc: "A single simulation can be utilized across various classrooms, campuses, or even internationally.",
      icon: <FaChartLine className="text-blue-600 text-2xl" />,
    },
    {
      title: "Data-Driven Insights",
      desc: "Educators can monitor student performance, pinpoint learning gaps, and customize instruction accordingly.",
      icon: <FaDatabase className="text-green-600 text-2xl" />,
    },
    {
      title: "Curriculum Enhancement",
      desc: "Encourages the integration of real-world applications into lesson plans, making STEAM subjects more engaging and relevant.",
      icon: <FaBookOpen className="text-purple-600 text-2xl" />,
    },
    {
      title: "Remote Learning",
      desc: "Ensures the continuity of education during disruptions (such as pandemics or natural disasters) through virtual labs and classrooms.",
      icon: <FaLaptopHouse className="text-orange-500 text-2xl" />,
    },
    {
      title: "Cost Efficiency",
      desc: "Minimizes the need for costly lab equipment, materials, and ongoing maintenance.",
      icon: <FaMoneyBillWave className="text-yellow-500 text-2xl" />,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-6 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-4xl  text-center font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600"
          >
            About <span className="text-blue-600">Mantrixlab</span> Digital
            Simulation
          </motion.h1>

          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <p className="text-lg font-semibold mb-4">
              Mantrixlab — India’s Trailblazer in Educational Digital Simulation
            </p>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Mantrixlab, a division of{" "}
                <span className="font-medium">thewefix.com</span>, stands as
                India’s first dedicated provider of third-generation virtual
                simulation technology tailored specifically for the education
                sector.
              </p>
              <p>
                We empower institutions — from schools and colleges to advanced
                training centers — with immersive, interactive digital
                environments that bring science learning to life.
              </p>
              <p>
                Our modules cover{" "}
                <span className="font-medium">
                  Physics, Chemistry, and Biology
                </span>
                , aligned with national and international curricula to make
                learning both engaging and impactful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-6 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Our <span className="text-blue-600">Core Strengths</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition">
            A proprietary simulation engine specifically designed for STEAM
            education
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition">
            A rich library of interactive 3D simulations covering key STEAM
            concepts and customized development services tailored for
            institutional clients
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition">
            A robust R&D team with expertise in pedagogy, 3D modeling, and
            interactive design
          </div>
        </div>
      </section>

      {/* What Sets Mantrixlab Apart */}
      <section className="py-6 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-blue-600">
            What Sets <span className="text-black">Mantrixlab</span> Apart ?
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-gray-700">
          <div className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:-translate-y-2 transition">
            <h3 className="font-semibold text-lg text-indigo-600 text-center">
              Physics
            </h3>
            <p>
              Mechanics, optics, electromagnetism, and more—modeled with
              precision to replicate real-world lab conditions.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:-translate-y-2 transition">
            <h3 className="font-semibold text-lg text-indigo-600 text-center">
              Chemistry
            </h3>
            <p>
              Virtual experiments covering reactions, titrations, molecular
              structures, and safety protocols.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:-translate-y-2 transition">
            <h3 className="font-semibold text-lg text-indigo-600 text-center">
              Biology
            </h3>
            <p>
              Interactive modules on cell biology, genetics, human anatomy, and
              ecological systems.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-6 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our <span className="text-blue-600">Mission</span>
        </h2>
        <div className="relative max-w-4xl mx-auto bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-lg">
          <FaQuoteLeft className="absolute top-6 left-6 text-indigo-400 text-3xl" />
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to make learning engaging, accessible, and
            future-ready for the digital universe. To redefine science education
            in India by making virtual experimentation and simulation a core
            part of learning—bridging the gap between theory and practice, and
            preparing students and Educators for a future driven by technology
            and inquiry.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-6 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Interactive Learning{" "}
          <span className="text-blue-600">Towards the Goal</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-gray-100 py-6 px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Keys for <span className="text-blue-600">Facilities</span> and{" "}
          <span className="text-blue-600">Educators</span>
        </h2>
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {keys.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section className="py-6 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Challenges in <span className="text-blue-600">STEAM</span>
        </h2>
        <div className="space-y-4">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden "
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full flex items-center justify-between p-5 text-left font-medium hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <FaQuestionCircle className=" text-lg" />
                  <span>{item.question}</span>
                </div>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="p-5 bg-gray-50 text-gray-600"
                >
                  {item.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-6 px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Our <span className="text-blue-600">Team & Expertise</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-indigo-200 group-hover:border-indigo-400 transition"
              />
              <h3 className="font-semibold text-lg text-gray-800">
                {member.name}
              </h3>
              <p className="text-indigo-600 font-medium">
                {member.designation}
              </p>
              <p className="text-gray-500 mb-4">{member.role}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={member.socials.linkedin}
                  className="p-2 bg-indigo-50 rounded-full hover:bg-indigo-200 transition"
                >
                  <FaLinkedin className="text-indigo-600" />
                </a>
                <a
                  href={member.socials.twitter}
                  className="p-2 bg-blue-50 rounded-full hover:bg-blue-200 transition"
                >
                  <FaTwitter className="text-blue-400" />
                </a>
                <a
                  href={member.socials.github}
                  className="p-2 bg-gray-50 rounded-full hover:bg-gray-200 transition"
                >
                  <FaGithub className="text-gray-700" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
