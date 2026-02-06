import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, User } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import TitleBar from "../TitleBar/TitleBar";

/* =======================
   Types
======================= */

type MenuItem = {
  label: string;
  icon: string;
  path?: string;
  children?: MenuItem[];
};

type OpenSubState = {
  [key: number]: boolean;
};

/* =======================
   Menu Config
======================= */

const menu: MenuItem[] = [
  { label: "DASHBOARD", icon: "dashboard", path: "/tab/" },
  { label: "SIMULATIONS", icon: "play_circle", path: "/tab/simulations" },
  { label: "REPORTS", icon: "bar_chart", path: "/tab/reports" },
  { label: "HOW TO PLAY", icon: "help_outline", path: "/tab/howtoplay" },
  { label: "TAB", icon: "help_outline", path: "/tab/action" },
  { label: "QUIT", icon: "logout", path: "/lab" },
];

/* =======================
   Component
======================= */

const TabMainLayout: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [openSub, setOpenSub] = useState<OpenSubState>({});

  const toggleSub = (index: number) => {
    setOpenSub((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="flex h-screen w-full items-center">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: open ? 240 : 70 }}
        className="fixed left-2 top-2 bottom-2 
        bg-gradient-to-b from-black/90 to-blue-950/90
        rounded-2xl shadow-xl flex flex-col p-3 
        overflow-y-auto duration-300 text-white"
      >
        {/* Header */}
        {open ? (
          <div className="flex w-full items-center gap-2">
            <User className="w-10 h-10 text-white" />
            <span className="font-semibold text-xl uppercase">Player_One</span>
            <button onClick={() => setOpen(!open)} className="p-2 ml-auto">
              <span className="material-icons">menu</span>
            </button>
          </div>
        ) : (
          <>
            <button onClick={() => setOpen(!open)} className="p-2 mb-4">
              <span className="material-icons">menu</span>
            </button>
            <User className="w-10 h-10 text-white" />
          </>
        )}

        {/* Navigation */}
        <nav className="flex flex-col gap-2 mt-4">
          {menu.map((item, index) => (
            <div key={index}>
              {!item.children && item.path && (
                <Link
                  to={item.path}
                  className="flex items-center gap-3 p-2 rounded-xl
                  hover:bg-gray-200 hover:text-black transition"
                >
                  <span className="material-icons text-xl">{item.icon}</span>
                  {open && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                </Link>
              )}

              {item.children && (
                <div>
                  <div
                    onClick={() => toggleSub(index)}
                    className="flex items-center justify-between p-2 rounded-xl
                    hover:bg-gray-200 hover:text-black cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-icons text-xl">
                        {item.icon}
                      </span>
                      {open && (
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                      )}
                    </div>

                    {open && (
                      <motion.div
                        animate={{ rotate: openSub[index] ? 180 : 0 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    )}
                  </div>

                  {/* Submenu */}
                  {open && openSub[index] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="ml-8 mt-1 flex flex-col gap-2"
                    >
                      {item.children.map((sub, idx) => (
                        <Link
                          key={idx}
                          to={sub.path || "#"}
                          className="flex items-center gap-3 p-2 rounded-xl
                          hover:bg-gray-200 hover:text-black text-sm"
                        >
                          <span className="material-icons text-lg">
                            {sub.icon}
                          </span>
                          <span>{sub.label}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </motion.aside>

      {/* Content */}
      <main
        className={`flex-1 p-6 h-screen transition-all duration-500 ${
          open ? "ml-[240px]" : "ml-[60px]"
        }`}
      >
        <TitleBar />
        <Outlet />
      </main>
    </div>
  );
};

export default TabMainLayout;
