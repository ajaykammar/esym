import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Clock, CheckCircle, BookOpen, HelpCircle } from "lucide-react";
import { ReactNode, ElementType } from "react";

/* =======================
   Types
======================= */

type ProgressDataItem = {
  name: string;
  value: number;
};

type FAQItem = {
  q: string;
  a: string;
};

type ReportSectionProps = {
  icon: ElementType;
  title: string;
  children: ReactNode;
};

type ReportsProps = {
  simulationTime?: string;
  completedTime?: string;
  assignments?: string[];
  faqs?: FAQItem[];
};

/* =======================
   Dummy Graph Data
======================= */

const progressData: ProgressDataItem[] = [
  { name: "Start", value: 20 },
  { name: "Mid", value: 55 },
  { name: "End", value: 90 },
];

/* =======================
   Report Card Wrapper
======================= */

function ReportSection({
  icon: Icon,
  title,
  children,
}: ReportSectionProps): JSX.Element {
  return (
    <div className="bg-slate-800 backdrop-blur-xl p-5 rounded-xl border border-slate-700 shadow-lg hover:shadow-purple-500/20 transition duration-300">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-purple-300" />
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>
      {children}
    </div>
  );
}

/* =======================
   Main Reports Component
======================= */

export default function Reports({
  simulationTime = "Jan 2025 - Mar 2025",
  completedTime = "45 Days",
  assignments = [],
  faqs = [],
}: ReportsProps): JSX.Element {
  return (
    <div className="w-full p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 text-white">
      {/* Simulation Time */}
      <ReportSection icon={Clock} title="Simulation Time">
        <p className="text-white/80 text-sm">Duration: {simulationTime}</p>
      </ReportSection>

      {/* Completed Time */}
      <ReportSection icon={CheckCircle} title="Completed In">
        <p className="text-green-300 text-xl font-bold">{completedTime}</p>
      </ReportSection>

      {/* Assignments */}
      <ReportSection icon={BookOpen} title="Assignments Summary">
        <ul className="list-disc ml-4 text-white/80 text-sm space-y-1">
          {assignments.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </ReportSection>

      {/* FAQs */}
      <ReportSection icon={HelpCircle} title="FAQs">
        <ul className="space-y-3">
          {faqs.map((faq, i) => (
            <li key={i}>
              <p className="font-medium text-purple-300">Q: {faq.q}</p>
              <p className="text-white/70 text-sm">A: {faq.a}</p>
            </li>
          ))}
        </ul>
      </ReportSection>

      {/* Progress Graph */}
      <div className="col-span-1 lg:col-span-3 bg-slate-800 backdrop-blur-xl p-6 rounded-xl border border-slate-700 shadow-lg">
        <h2 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
          <BarChart width={20} height={20} /> Performance Graph
        </h2>

        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="name" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip
                wrapperStyle={{
                  background: "#1e293b",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="value" fill="#a78bfa" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
