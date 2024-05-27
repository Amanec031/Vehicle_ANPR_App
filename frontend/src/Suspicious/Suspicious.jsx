import React, { useEffect, useRef } from "react";
import suspiciousAudio from "./audio.wav";
import "./Suspicious.css";

const Suspicious = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Audio playback started successfully
          })
          .catch((error) => {
            // Handle error if playback couldn't start
            console.error("Error starting audio playback:", error);
          });
      }
    }
    return () => {
      if (audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="suspicious">
      <div className="container">
        <h1>Suspicious Vehicle Detected</h1>
        <div>
          <h2>Vehicle Details:</h2>
          <p>
            <strong>Registration Number:</strong> XYZ456
          </p>
        </div>
        <div>
          <h2>Crimes:</h2>
          <ul>
            <li>
              <strong>Type:</strong> Hit and run
            </li>
            <li>
              <strong>Description:</strong> Vehicle involved in a hit and run incident.
            </li>
          </ul>
        </div>
      </div>
      <audio ref={audioRef} src={suspiciousAudio} />
    </div>
  );
};

export default Suspicious;
