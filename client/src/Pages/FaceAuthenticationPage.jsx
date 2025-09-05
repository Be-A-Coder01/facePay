import React, { useEffect, useRef, useState } from "react";
import "../FontStyle.css";

const FaceAuthenticationPage = () => {
  const [status, setStatus] = useState(false);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing webcam: ", err);
      }
    };
    startVideo();

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setStatus(true);
          return 100;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0a1930] text-white">
      <div className="relative w-[250px] h-[350px] rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        ></video>

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-1 bg-cyan-400 opacity-70 animate-scan"></div>
        </div>
      </div>

      <div className="mt-6 w-[70%]">
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-cyan-400 h-2 rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-center mt-2">{progress}%</p>
        <p className="text-center text-sm mt-1">
          {progress < 100 ? "Scanning..." : "Scan Complete"}
        </p>

        {status && (
          <button className="mt-8 w-[50vw] mx-11 py-3 bg-cyan-500 hover:bg-cyan-600 active:scale-95 rounded-lg text-lg font-semibold shadow-lg transition-all duration-200">
            Capture
          </button>
        )}
      </div>
    </div>
  );
};

export default FaceAuthenticationPage;
