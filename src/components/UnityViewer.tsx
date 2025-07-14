// src/components/UnityViewer.js

const UnityViewer = () => {
  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <iframe
        title="Unity WebGL Player"
        src="/testwebgl/index.html"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default UnityViewer;
