import { User, Layers, CheckCircle, FileText, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode, ElementType } from "react";

/* =======================
   Types
======================= */

type StatCardProps = {
  icon: ElementType;
  title: string;
  children: ReactNode;
  href?: string;
};

type UserDetails = {
  email: string;
  level: number;
  rank: string;
};

type DashboardProps = {
  userName?: string;
  totalSimulations?: number;
  completedSimulations?: number;
  lastSimulationDate?: string;
  reportsLink?: string;
  userDetails?: UserDetails;
};

/* =======================
   Reusable Card
======================= */

function StatCard({
  icon: Icon,
  title,
  children,
  href,
}: StatCardProps): JSX.Element {
  const Wrapper: ElementType = href ? "a" : "div";

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 230, damping: 18 }}
      className="relative group cursor-pointer"
    >
      {/* Glow border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-300" />

      <Wrapper
        {...(href ? { href } : {})}
        className="relative bg-slate-800 backdrop-blur-xl p-5 rounded-xl border border-slate-700 shadow-xl hover:shadow-2xl hover:shadow-teal-500/20 transition duration-300 flex flex-col gap-3 h-44 w-full"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-slate-700/40 group-hover:bg-slate-600/40 transition">
            <Icon className="w-6 h-6 text-teal-300 group-hover:text-teal-200 transition" />
          </div>
          <h2 className="text-lg font-semibold text-white group-hover:text-teal-100 transition">
            {title}
          </h2>
        </div>

        <div className="text-white/90 text-sm font-medium">{children}</div>
      </Wrapper>
    </motion.div>
  );
}

/* =======================
   Dashboard
======================= */

export default function Dashboard({
  userName = "Player One",
  totalSimulations = 12,
  completedSimulations = 9,
  lastSimulationDate = "2025-02-20",
  reportsLink = "/reports",
  userDetails = {
    email: "player@example.com",
    level: 5,
    rank: "Elite",
  },
}: DashboardProps): JSX.Element {
  return (
    <div className="w-full text-white p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* User Details */}
      <StatCard icon={User} title="User Details">
        <p>Name: {userName}</p>
        <p>Email: {userDetails.email}</p>
        <p>Level: {userDetails.level}</p>
        <p>Rank: {userDetails.rank}</p>
      </StatCard>

      {/* Total Sims */}
      <StatCard icon={Layers} title="Total Simulations">
        <p className="text-2xl font-bold text-teal-300">{totalSimulations}</p>
      </StatCard>

      {/* Completed Sims */}
      <StatCard icon={CheckCircle} title="Completed Simulations">
        <p className="text-2xl font-bold text-green-300">
          {completedSimulations}
        </p>
      </StatCard>

      {/* Reports */}
      <StatCard icon={FileText} title="Reports" href={reportsLink}>
        <p className="underline underline-offset-4 text-teal-200">
          View all simulation reports
        </p>
      </StatCard>

      {/* Last Simulation */}
      <StatCard icon={Calendar} title="Last Simulation">
        <p className="text-xl text-purple-300 font-medium">
          {lastSimulationDate}
        </p>
      </StatCard>
    </div>
  );
}
