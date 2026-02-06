import { Trophy, User, Target } from "lucide-react";

export default function TitleBar({
  userName = "Player One",
  score = 1200,
  completion = 65, // percentage
  levelTitle = "Level 3 — Shadow Arena",
}) {
  return (
    <div className="w-full bg-black rounded-xl shadow-md px-4 p-2 mb-4 flex flex-col gap-[1px] ">
      {/* Top Row */}
      <div className="flex justify-between items-center">
        {/* User */}
        {/* <div className="flex w-[20%] items-center gap-2">
          <User className="w-5 h-5 text-white" />
          <span className="text-white font-semibold text-lg">{userName}</span>
        </div> */}

        {/* Progress / Completion */}
        <div className="w-full">
          <div className="flex items-center gap-2 mb-1">
            <Target className="w-4 h-4 text-white" />
            <span className="text-white text-sm">{completion}% completed</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-white/30 rounded-full">
            <div
              className="h-full bg-green-400 rounded-full"
              style={{ width: `${completion}%` }}
            ></div>
          </div>
        </div>
        {/* Score */}
        <div className=" w-[20%] flex items-center justify-end gap-2">
          <Trophy className="w-5 h-5 text-yellow-300" />
          <span className="text-white font-medium text-lg">{score}</span>
        </div>
      </div>

      {/* Level Title */}
      <div>
        <p className="text-white font-semibold text-base">{levelTitle}</p>
      </div>
    </div>
  );
}
