import React from "react";

const Herobanners = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-white to-purple-light">
      {/* Navigation */}
      <header className="container z-10 flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <div className="absolute h-8 w-8 rounded bg-blue-light opacity-70 blur-sm"></div>
            <div className="absolute left-1 top-1 h-8 w-8 rounded bg-purple-light opacity-70 blur-sm"></div>
            <div className="absolute left-2 top-2 h-8 w-8 rounded bg-blue opacity-70 blur-sm"></div>
          </div>
          <span className="text-lg font-bold text-gray-800">Your Logos</span>
        </div>

        <button className="rounded-full bg-gradient-to-r from-blue to-blue-light px-6 text-white hover:opacity-90">
          SIGN IN
        </button>
      </header>

      {/* Hero Content */}
      <main className="container relative z-10 grid min-h-[calc(100vh-80px)] grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col space-y-6 pt-10 lg:pt-0">
          <h1 className="text-5xl font-bold leading-tight text-gray-900 sm:text-6xl">
            Advanced
            <br />
            data analysis
          </h1>

          <div className="flex">
            <div className="mr-4 h-full w-1 bg-purple"></div>
            <p className="max-w-md text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>

          <div className="pt-4">
            <button className="rounded-full bg-gradient-to-r from-blue to-blue-light px-8 py-6 text-white hover:opacity-90">
              LEARN MORE
            </button>
          </div>
        </div>

        <div className="relative h-[500px] w-full flex items-center justify-center">
          <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-purple opacity-80"></div>

          <div className="relative h-[400px] w-[400px] animate-float flex items-center justify-center">
            {/* Dashboard screens */}
            <div className="absolute left-10 top-10 h-64 w-48 rounded-xl bg-blue p-4 shadow-lg">
              <div className="h-4 w-full rounded-full bg-white/40"></div>
              <div className="mt-4 h-20 w-full rounded-lg bg-white/30"></div>
              <div className="mt-2 h-8 w-8 rounded-full bg-white/80"></div>
              <div className="mt-2 h-4 w-20 rounded-full bg-white/40"></div>
              <div className="mt-4 h-16 w-full rounded-lg bg-white/20">
                <div className="h-full w-1/2 rounded-lg bg-blue-light/50"></div>
              </div>
            </div>

            <div className="absolute right-10 top-20 h-56 w-44 rounded-xl bg-blue-light p-4 shadow-lg">
              <div className="h-4 w-full rounded-full bg-white/40"></div>
              <div className="mt-4 flex h-20 w-full items-end justify-around rounded-lg">
                <div className="h-10 w-3 rounded-t-lg bg-white/50"></div>
                <div className="h-16 w-3 rounded-t-lg bg-white/50"></div>
                <div className="h-8 w-3 rounded-t-lg bg-white/50"></div>
                <div className="h-12 w-3 rounded-t-lg bg-white/50"></div>
                <div className="h-14 w-3 rounded-t-lg bg-white/50"></div>
              </div>
              <div className="mt-4 h-4 w-20 rounded-full bg-white/40"></div>
              <div className="mt-2 h-4 w-16 rounded-full bg-white/40"></div>
              <div className="mt-2 h-8 w-8 rounded-full bg-purple/80"></div>
            </div>

            <div className="absolute bottom-10 left-20 h-48 w-40 rounded-xl bg-white p-4 shadow-lg">
              <div className="h-4 w-full rounded-full bg-blue/30"></div>
              <div className="mt-2 h-16 w-full rounded-lg">
                <svg viewBox="0 0 100 30" className="h-full w-full">
                  <path
                    d="M0,15 Q20,5 40,20 Q60,35 80,10 Q100,-5 100,15"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="mt-2 h-4 w-20 rounded-full bg-blue/30"></div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="h-6 w-full rounded-md bg-blue/20"></div>
                <div className="h-6 w-full rounded-md bg-blue/20"></div>
                <div className="h-6 w-full rounded-md bg-blue/20"></div>
                <div className="h-6 w-full rounded-md bg-blue/20"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Herobanners;
