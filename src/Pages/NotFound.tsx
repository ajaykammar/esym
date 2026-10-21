import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.95))]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 rounded-[2rem] border border-blue-400/20 bg-slate-900/80 p-8 shadow-[0_25px_80px_rgba(2,6,23,0.45)] backdrop-blur-xl lg:flex-row lg:p-12">
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            404 Error
          </span>
          <h1 className="mt-6 text-5xl font-black leading-tight text-white sm:text-6xl">
            Page not found
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300">
            The page you are looking for seems to have wandered off the lab map.
            Let us guide you back to the interactive science experience.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              to="/"
              className="rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
            >
              Go Home
            </Link>
            <Link
              to="/virtuallabs"
              className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
            >
              Explore Labs
            </Link>
          </div>
        </div>

        <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-950/80 p-6 shadow-inner shadow-blue-950/40">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Lost in space
              </p>
              <p className="mt-2 text-4xl font-black text-white">404</p>
            </div>
            <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4 text-blue-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h8m-4-6V7m0 0a3 3 0 100-6 3 3 0 000 6z"
                />
              </svg>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Physics", color: "text-cyan-300" },
              { label: "Chemistry", color: "text-purple-300" },
              { label: "Biology", color: "text-emerald-300" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-4 text-center"
              >
                <p className={`text-sm font-semibold ${item.color}`}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
