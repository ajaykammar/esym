import { useState } from "react";
import axios from "axios";

const API_BASE = "https://mantrixlab.com/api/game";

// ---- Types ----
type GameActionType =
  | "play"
  | "pause"
  | "stop"
  | "minimize"
  | "maximize";

interface GameAction {
  _id: string;
  actions: GameActionType[];
  userId: number;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function Tab(): JSX.Element {
  const [latestAction, setLatestAction] = useState<GameAction | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const triggerAction = async (action: GameActionType): Promise<void> => {
    try {
      setLoading(true);

      // Create new action
      const createRes = await axios.post<{ action: GameAction }>(
        `${API_BASE}/action`,
        {
          actions: [action],
        }
      );

      const newActionId = createRes.data.action._id;
      console.log("Created action:", newActionId);

      // Fetch latest user action
      const updated = await axios.get<GameAction[]>(
        `${API_BASE}/user/1`
      );

      setLatestAction(updated.data[0]);
    } catch (err) {
      console.error(err);
      alert("Failed to make request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Game Controls</h2>

      <div style={styles.buttonRow}>
        <button
          style={styles.btn}
          onClick={() => triggerAction("play")}
          disabled={loading}
        >
          ▶️ Play
        </button>

        <button
          style={styles.btn}
          onClick={() => triggerAction("pause")}
          disabled={loading}
        >
          ⏸️ Pause
        </button>

        <button
          style={styles.btn}
          onClick={() => triggerAction("stop")}
          disabled={loading}
        >
          ⏹️ Stop
        </button>

        <button
          style={styles.btn}
          onClick={() => triggerAction("minimize")}
          disabled={loading}
        >
          🗕 Minimize
        </button>

        <button
          style={styles.btn}
          onClick={() => triggerAction("maximize")}
          disabled={loading}
        >
          🗖 Maximize
        </button>
      </div>

      {latestAction && (
        <div style={styles.statusBox}>
          <h3>Latest State:</h3>
          <pre>{JSON.stringify(latestAction, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

// ---- Styles ----
const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
  },
  title: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  buttonRow: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  btn: {
    padding: "10px 15px",
    background: "#1e88e5",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  statusBox: {
    marginTop: "20px",
    background: "#f5f5f5",
    padding: "15px",
    borderRadius: "8px",
  },
};

