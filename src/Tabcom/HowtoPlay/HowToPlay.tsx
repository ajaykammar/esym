import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PlayCircle,
  Play,
  Layers,
  BookOpen,
  CheckCircle,
  Info,
  Rocket,
  Clock,
  ClipboardList,
  HelpCircle,
  User,
  LucideIcon,
} from "lucide-react";

/* ----------------------------
   Types
---------------------------- */

type TabId = "overview" | "steps" | "usecases" | "faq";

interface Tab {
  id: TabId;
  label: string;
  icon: LucideIcon;
}

interface Step {
  id: number;
  title: string;
  desc: string;
  time: string;
  icon: LucideIcon;
}

interface UseCase {
  title: string;
  desc: string;
  icon: LucideIcon;
  badge: string;
}

interface FAQ {
  q: string;
  a: string;
}

/* ----------------------------
   Tab definitions
---------------------------- */

const TABS: Tab[] = [
  { id: "overview", label: "Overview", icon: Info },
  { id: "steps", label: "Steps to Play", icon: PlayCircle },
  { id: "usecases", label: "Use Cases", icon: Layers },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

/* ----------------------------
   Step data
---------------------------- */

const STEPS: Step[] = [
  {
    id: 1,
    title: "Choose a Simulation",
    desc: "Browse available simulations, read the short description and choose one that fits your goal.",
    time: "10–20 min",
    icon: Play,
  },
  {
    id: 2,
    title: "Read Objectives & Rules",
    desc: "Open the simulation brief. Note objectives, constraints, scoring rules and success metrics.",
    time: "5 min",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Set Parameters & Start",
    desc: "Configure parameters (difficulty, timeframe, initial capital). Use presets for quick starts.",
    time: "3–7 min",
    icon: Rocket,
  },
  {
    id: 4,
    title: "Execute Actions & Monitor",
    desc: "Make decisions, apply strategies and watch effects in the timeline.",
    time: "Varies",
    icon: Clock,
  },
  {
    id: 5,
    title: "Review Report & Repeat",
    desc: "Check the post-sim report, compare metrics, read insights and retry.",
    time: "5–15 min",
    icon: ClipboardList,
  },
];

/* ----------------------------
   Use cases
---------------------------- */

const USE_CASES: UseCase[] = [
  {
    title: "Training for Analysts",
    desc: "Run market simulations to train junior analysts.",
    icon: User,
    badge: "Team",
  },
  {
    title: "Strategy Validation",
    desc: "Test new business strategies before deployment.",
    icon: Rocket,
    badge: "Pro",
  },
  {
    title: "Education & Courses",
    desc: "Integrate simulations into coursework.",
    icon: BookOpen,
    badge: "Academic",
  },
];

/* ----------------------------
   FAQ data
---------------------------- */

const FAQS: FAQ[] = [
  {
    q: "How is scoring calculated?",
    a: "Scoring combines objective KPIs and soft KPIs.",
  },
  {
    q: "Can I repeat a simulation?",
    a: "Yes — every simulation can be replayed.",
  },
  {
    q: "Are results saved?",
    a: "Yes — reports are saved in your profile.",
  },
];

/* ----------------------------
   UI Components
---------------------------- */

interface TabButtonProps {
  tab: Tab;
  active: boolean;
  onClick: (id: TabId) => void;
}

function TabButton({ tab, active, onClick }: TabButtonProps) {
  const Icon = tab.icon;
  return (
    <button
      onClick={() => onClick(tab.id)}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${
        active
          ? "bg-gradient-to-r from-teal-500 to-indigo-500 text-white"
          : "text-slate-300 hover:bg-slate-800/60"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{tab.label}</span>
    </button>
  );
}

interface StepCardProps {
  step: Step;
  activeStep: number;
  onClick: (id: number) => void;
}

function StepCard({ step, activeStep, onClick }: StepCardProps) {
  const Icon = step.icon;
  const isActive = activeStep === step.id;

  return (
    <motion.div
      layout
      whileHover={{ y: -6 }}
      className={`rounded-xl p-4 border cursor-pointer ${
        isActive
          ? "border-teal-400 bg-slate-800/60"
          : "border-slate-700 bg-slate-800/30"
      }`}
      onClick={() => onClick(step.id)}
    >
      <div className="flex gap-3">
        <div className="p-2 rounded-md bg-slate-700/40">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold">{step.title}</h3>
          <p className="text-sm text-slate-300 mt-1">{step.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ----------------------------
   Main Component
---------------------------- */

export default function HowToPlay(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [activeStep, setActiveStep] = useState<number>(STEPS[0].id);
  const [openFaq, setOpenFaq] = useState<Record<number, boolean>>({});

  return (
    <div className="min-h-screen p-6 bg-slate-900 text-white">
      {/* Tabs */}
      <nav className="flex gap-3 mb-6">
        {TABS.map((tab) => (
          <TabButton
            key={tab.id}
            tab={tab}
            active={activeTab === tab.id}
            onClick={setActiveTab}
          />
        ))}
      </nav>

      <AnimatePresence mode="wait">
        {activeTab === "steps" && (
          <motion.section
            key="steps"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {STEPS.map((step) => (
              <StepCard
                key={step.id}
                step={step}
                activeStep={activeStep}
                onClick={setActiveStep}
              />
            ))}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
