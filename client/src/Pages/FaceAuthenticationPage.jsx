import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "@vladmandic/face-api";

const FaceAuthenticationPage = () => {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Start webcam on page load
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
        setError("Camera access denied or not available.");
      }
    };

    startVideo();
  }, []);

  const handleCapture = async () => {
    if (!videoRef.current) return;

    setProgress(0);
    setStatus(false);
    setLoading(true);
    setError("");

    try {
      // Load models only when capture starts
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      ]);
    } catch (err) {
      console.error("Error loading models:", err);
      setError("Failed to load face detection models.");
      setLoading(false);
      return;
    }

    let intervalId;
    let timeoutId;

    const stopDetection = (message = "") => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      setLoading(false);
      if (message) setError(message);
    };

    intervalId = setInterval(async () => {
      const detection = await faceapi
        .detectSingleFace(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions({
            inputSize: 320,
            scoreThreshold: 0.5,
          })
        )
        .withFaceLandmarks()
        .withFaceDescriptor();

      if (detection) {
        const newProgress = Math.min(
          100,
          Math.round(detection.detection.score * 100)
        );
        setProgress(newProgress);

        if (newProgress >= 90) {
          stopDetection();
          setStatus(true);

          const descriptor = Array.from(detection.descriptor);
          console.log("Face descriptor:", descriptor);

          alert("✅ Face captured successfully!");
        }
      } else {
        setProgress((prev) => (prev < 20 ? prev + 5 : prev));
      }
    }, 500);

    // ⏳ 30-second timeout
    timeoutId = setTimeout(() => {
      stopDetection("❌ No face detected Please try again.");
    }, 10000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0a1930] text-white">
      <div className="relative w-[250px] h-[350px] rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        ></video>
      </div>

      <div className="mt-6 w-[70%]">
        {loading && (
          <>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-cyan-400 h-2 rounded-full transition-all duration-200"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-center mt-2">{progress}%</p>
            <p className="text-center text-sm mt-1">
              {progress < 100 ? "Detecting face..." : "Face Captured"}
            </p>
          </>
        )}

        {error && (
          <p className="text-center mt-4 text-red-500 font-semibold">{error}</p>
        )}

        {!loading && (
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
