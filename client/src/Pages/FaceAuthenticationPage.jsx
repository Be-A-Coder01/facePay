import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "@vladmandic/face-api";

const FaceAuthenticationPage = () => {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const loadModels = async () => {
      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
        await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
        await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
      } catch (err) {
        console.error("Error loading face-api models:", err);
      }
    };

    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;

          videoRef.current.onloadedmetadata = () => {
            videoRef.current
              .play()
              .catch((err) => console.error("Error playing video:", err));
          };
        }
      } catch (err) {
        console.error("Error accessing webcam:", err);
        alert("Camera access denied or not available");
      }
    };

    loadModels().then(startVideo);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        setStatus(true);
        return 100;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleCapture = async () => {
    if (!videoRef.current) return;

    const detection = await faceapi
      .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptor();

    if (!detection) {
      alert("No face detected. Please try again.");
      return;
    }

    const descriptor = Array.from(detection.descriptor);
    console.log("descriptor: ", descriptor);

    // try {
    //   const response = await fetch(
    //     "http://localhost:5000/api/auth/register-face",
    //     {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({
    //         name: "Adesh", // later use form input
    //         email: "adesh@example.com", // later use form input
    //         faceDescriptor: descriptor,
    //       }),
    //     }
    //   );

    //   const data = await response.json();

    //   if (data.success) {
    //     alert("Face registered successfully!");
    //   } else {
    //     alert("Error: " + data.message);
    //   }
    // } catch (err) {
    //   console.error("Error registering face:", err);
    //   alert("Something went wrong, try again!");
    // }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0a1930] text-white">
      <div className="relative w-[250px] h-[350px] rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        ></video>
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
          <button
            onClick={handleCapture}
            className="mt-8 w-[50vw] mx-11 py-3 bg-cyan-500 hover:bg-cyan-600 active:scale-95 rounded-lg text-lg font-semibold shadow-lg transition-all duration-200"
          >
            Capture
          </button>
        )}
      </div>
    </div>
  );
};

export default FaceAuthenticationPage;
