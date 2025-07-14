// src/components/UnityGame.tsx
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityGame: React.FC = () => {
  const { unityProvider, loadingProgression } = useUnityContext({
    loaderUrl: "/testwebgl/Build/MyGame.loader.js",
    dataUrl: "/testwebgl/Build/MyGame.data",
    frameworkUrl: "/testwebgl/Build/MyGame.framework.js",
    codeUrl: "/testwebgl/Build/MyGame.wasm",
  });

  return (
    <div>
      {loadingProgression < 1 && (
        <p>Loading... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{ width: "960px", height: "600px" }}
      />
    </div>
  );
};

export default UnityGame;
