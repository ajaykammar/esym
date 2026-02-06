import { Clock, CheckCircle, CalendarDays } from "lucide-react";

/* =======================
   Types
======================= */

type SimulationStatus = "Active" | "Completed" | "Upcoming";

type SimulationCardProps = {
  image: string;
  title: string;
  timeline: string;
  completedTimeline: string;
  publishedDate: string;
  status?: SimulationStatus;
};

/* =======================
   Simulation Card
======================= */

export function SimulationCard({
  image,
  title,
  timeline,
  completedTimeline,
  publishedDate,
  status = "Active",
}: SimulationCardProps): JSX.Element {
  return (
    <div
      className="
        relative group cursor-pointer 
        rounded-xl overflow-hidden 
        bg-slate-900 backdrop-blur-xl 
        border border-slate-700 
        transition-transform duration-300 
        hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/30
      "
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Neon Glow Border */}
      <div
        className="
          absolute inset-0 rounded-xl 
          bg-gradient-to-br from-teal-500/30 via-purple-500/20 to-blue-500/30 
          opacity-0 group-hover:opacity-100 
          blur-xl transition
        "
      />

      {/* Image Section */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-full w-full object-cover 
            transition-transform duration-500 
            group-hover:scale-110
          "
        />

        {/* Shiny Hover Effect */}
        <div
          className="
            absolute inset-0 bg-gradient-to-r 
            from-transparent via-white/10 to-transparent 
            translate-x-[-100%] group-hover:translate-x-[200%] 
            duration-700
          "
        />

        {/* Status Badge */}
        <span
          className="
            absolute top-3 right-3 
            text-xs px-3 py-1 
            bg-teal-500/70 text-white 
            rounded-full backdrop-blur 
            shadow-md
          "
        >
          {status}
        </span>
      </div>

      {/* Content Section */}
      <div className="relative z-10 p-4 flex flex-col gap-4">
        <h2
          className="
            text-xl font-bold 
            bg-gradient-to-r from-teal-300 to-purple-300 
            bg-clip-text text-transparent
          "
        >
          {title}
        </h2>

        {/* Timeline */}
        <div className="flex items-center gap-2 text-white/80 text-sm">
          <Clock className="w-4 h-4 text-teal-300" />
          <span>{timeline}</span>
        </div>

        {/* Completed */}
        <div className="flex items-center gap-2 text-white/80 text-sm">
          <CheckCircle className="w-4 h-4 text-green-300" />
          <span>{completedTimeline}</span>
        </div>

        {/* Published Date */}
        <div className="flex items-center gap-2 text-white/80 text-sm">
          <CalendarDays className="w-4 h-4 text-yellow-300" />
          <span>{publishedDate}</span>
        </div>
      </div>
    </div>
  );
}

/* =======================
   Dummy Data
======================= */

export const demoSimulations: SimulationCardProps[] = [
  {
    image: "https://picsum.photos/400/250?random=1",
    title: "Financial Market Simulator",
    timeline: "Jan 2025 - Mar 2025",
    completedTimeline: "45% Completed",
    publishedDate: "2025-01-10",
    status: "Active",
  },
  {
    image: "https://picsum.photos/400/250?random=2",
    title: "Business Strategy Simulation",
    timeline: "Feb 2025 - Apr 2025",
    completedTimeline: "78% Completed",
    publishedDate: "2025-02-05",
    status: "Completed",
  },
  {
    image: "https://picsum.photos/400/250?random=3",
    title: "Marketing Campaign Simulator",
    timeline: "Mar 2025 - May 2025",
    completedTimeline: "20% Completed",
    publishedDate: "2025-03-01",
    status: "Upcoming",
  },
];

/* =======================
   Simulation List
======================= */

export default function Simulations(): JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-8">
      {demoSimulations.map((sim, i) => (
        <SimulationCard key={i} {...sim} />
      ))}
    </div>
  );
}
