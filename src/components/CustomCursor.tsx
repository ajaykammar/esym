import { useEffect, useRef } from "react";
import { FaFlask } from "react-icons/fa";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Smooth follow
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const move = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      createDrop(e.clientX, e.clientY);
    };

    gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;

      gsap.set(cursor, {
        x: pos.x,
        y: pos.y,
      });
    });

    // Rotate on click (in-place)
    const down = () => {
      gsap.to(cursor, { scale: 0.7, rotation: "+=360", duration: 0.4 });
    };

    const up = () => {
      gsap.to(cursor, { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.4)" });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  // 🧪 Droplet effect
  const createDrop = (x: number, y: number) => {
    const drop = document.createElement("div");
    drop.className = "chemical-drop";
    document.body.appendChild(drop);

    gsap.set(drop, {
      left: x + Math.random() * 10 - 5,
      top: y + Math.random() * 10 - 5,
      scale: Math.random() * 0.6 + 0.4,
    });

    gsap.to(drop, {
      y: "+=30",
      opacity: 0,
      scale: 0,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => drop.remove(),
    });
  };

  return (
    <>
      <style>{`
        body { cursor: none; }

        .chemical-drop {
          position: fixed;
          width: 8px;
          height: 8px;
          background: radial-gradient(circle, #FB910FFF, red);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          filter: blur(0.5px);
        }
      `}</style>

      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: "none",
          transformOrigin: "center center",
        }}
      >
        <FaFlask
          size={30}
          className="text-cyan-700 drop-shadow-[0_0_15px_rgba(34,211,238,0.9)]"
        />
      </div>
    </>
  );
};

export default CustomCursor;
