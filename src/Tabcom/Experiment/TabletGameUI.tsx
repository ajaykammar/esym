import React, { useState, type ReactNode } from "react";
import {
  Play,
  BookOpen,
  Info,
  BatteryCharging,
  Zap,
  ArrowLeft,
} from "lucide-react";

// Dummy assets (replace with your own images/videos)
const BG_HOME =
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1920";
const BG_THEORY =
  "https://images.unsplash.com/photo-1581091870627-3a1c8c3a6c28?q=80&w=1920";
const BG_INSTRUCTIONS =
  "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1920";

const DEMO_VIDEO = "https://www.w3schools.com/html/mov_bbb.mp4"; // replace with your experiment video

// Screens
// home | play | theory | how

type Screen = "home" | "play" | "theory" | "how";

export default function TabletGameUI() {
  const [screen, setScreen] = useState<Screen>("home");

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      {/* Tablet Frame */}
      <div className="relative w-full max-w-5xl aspect-[16/10] rounded-[2rem] border-4 border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
        {/* Background */}
        <Background screen={screen} />

        {/* Overlay */}
        <div className="relative z-10 w-full h-full p-6 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-white text-xl font-semibold">
              ⚗️ Virtual Chemistry Lab
            </h1>

            {screen !== "home" && (
              <button
                onClick={() => setScreen("home")}
                className="flex items-center gap-2 text-white/80 hover:text-white bg-black/40 px-3 py-1 rounded-lg"
              >
                <ArrowLeft size={18} /> Back
              </button>
            )}
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-black/50 backdrop-blur-md rounded-2xl p-6 text-white overflow-y-auto">
            {screen === "home" && <HomeScreen onNavigate={setScreen} />}
            {screen === "play" && <PlayScreen />}
            {screen === "theory" && <TheoryScreen />}
            {screen === "how" && <HowToPlayScreen />}
          </div>
        </div>
      </div>
    </div>
  );
}

function Background({ screen }: { screen: Screen }) {
  const bg =
    screen === "home"
      ? BG_HOME
      : screen === "theory"
      ? BG_THEORY
      : screen === "how"
      ? BG_INSTRUCTIONS
      : BG_HOME;

  return (
    <div
      className="absolute inset-0 bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}

function HomeScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Battery Experiment Simulator
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
        <MenuButton
          icon={<Play />}
          label="Play Experiment"
          onClick={() => onNavigate("play")}
        />
        <MenuButton
          icon={<BookOpen />}
          label="Learn Theory"
          onClick={() => onNavigate("theory")}
        />
        <MenuButton
          icon={<Info />}
          label="How To Play"
          onClick={() => onNavigate("how")}
        />
        <MenuButton
          icon={<Zap />}
          label="Quit"
          onClick={() => alert("You can integrate real exit / route here")}
          danger
        />
      </div>
    </div>
  );
}

function PlayScreen() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <BatteryCharging /> Battery Series & Parallel Experiment
      </h2>

      <p className="text-white/80">
        Watch the experiment demonstration video below. Later, this can be
        replaced with a real interactive simulator.
      </p>

      <video controls className="w-full rounded-xl border border-white/10">
        <source src={DEMO_VIDEO} type="video/mp4" />
        Your browser does not support video.
      </video>
    </div>
  );
}

function TheoryScreen() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">
        Theory: Battery in Series & Parallel
      </h2>

      <div className="space-y-3 text-white/85 leading-relaxed">
        <p>
          <strong>Battery in Series:</strong> When batteries are connected in
          series, the total voltage increases while the capacity (Ah) remains
          the same.
        </p>

        <p>Example: Two 1.5V batteries in series = 3V total output.</p>

        <p>
          <strong>Battery in Parallel:</strong> When batteries are connected in
          parallel, the voltage remains the same, but the capacity increases.
        </p>

        <p>
          Example: Two 1.5V batteries in parallel = 1.5V output but double
          battery life.
        </p>

        <p>
          This concept is widely used in power banks, UPS systems, and electric
          vehicles.
        </p>
      </div>
    </div>
  );
}

function HowToPlayScreen() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">How To Play</h2>

      <ul className="list-disc pl-6 space-y-2 text-white/85">
        <li>
          Click on <strong>Play Experiment</strong> to watch or interact with
          the simulation.
        </li>
        <li>
          Observe how voltage changes in series and parallel battery setups.
        </li>
        <li>
          Go to <strong>Learn Theory</strong> to understand the concepts before
          playing.
        </li>
        <li>
          Use the <strong>Back</strong> button to return to the main menu.
        </li>
        <li>In future, this section can include tasks, quizzes, and levels.</li>
      </ul>
    </div>
  );
}

function MenuButton({
  icon,
  label,
  onClick,
  danger,
}: {
  icon: ReactNode;
  label: string;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-6 py-5 rounded-xl text-lg font-medium transition-all backdrop-blur border
        ${
          danger
            ? "bg-red-500/10 border-red-500/20 hover:bg-red-500/20 text-red-400"
            : "bg-cyan-500/10 border-cyan-500/20 hover:bg-cyan-500/20 text-cyan-300"
        }
        hover:scale-[1.03] hover:shadow-xl`}
    >
      {icon}
      {label}
    </button>
  );
}
