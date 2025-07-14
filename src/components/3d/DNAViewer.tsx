import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds, Html } from "@react-three/drei";

// DNA component accepts props
interface DNAProps {
  modelPath: string;
  labelPosition?: [number, number, number];
}

const DNA: React.FC<DNAProps> = ({ modelPath, labelPosition }) => {
  const { scene, nodes } = useGLTF(modelPath) as any;

  const deltoidMesh = nodes["Deltoid"];

  return (
    <>
      <primitive object={scene} />
      {deltoidMesh && (
        <Html
          position={labelPosition || deltoidMesh.position}
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "4px 8px",
            borderRadius: "4px",
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
            fontSize: "0.8rem",
          }}
          center
        >
          Deltoid
        </Html>
      )}
    </>
  );
};

// Preload hook for GLTF
useGLTF.preload("/deltoids.glb");

// DNAViewer accepts modelPath and labelPosition as props
interface DNAViewerProps {
  modelPath: string;
  labelPosition?: [number, number, number];
}

const DNAViewer: React.FC<DNAViewerProps> = ({ modelPath, labelPosition }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFullScreen = () => {
    const el = containerRef.current;
    if (!el) return;

    if (!document.fullscreenElement) {
      el.requestFullscreen().catch((err) =>
        console.error("Fullscreen failed:", err)
      );
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: "400px",
        height: "400px",
        position: "relative",
        border: "1px solid #ccc",
        overflow: "hidden",
      }}
      className="m-4 rounded-2xl shadow-sm shadow-black"
    >
      <button
        onClick={handleFullScreen}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 10,
          padding: "4px 8px",
          fontSize: "0.9rem",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Fullscreen
      </button>

      <Canvas camera={{ position: [70, 70, 300], fov: 30 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.2}>
            <DNA modelPath={modelPath} labelPosition={labelPosition} />
          </Bounds>
        </Suspense>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
};

export default DNAViewer;
