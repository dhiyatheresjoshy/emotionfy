import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const CameraCapture = () => {
  const webcamRef = useRef(null);
  const [emotion, setEmotion] = useState("");
  const [songs, setSongs] = useState([]);

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      try {
        const response = await axios.post("http://localhost:5000/detect-emotion", { image: imageSrc });
        setEmotion(response.data.emotion);
        fetchSongs(response.data.emotion);
      } catch (error) {
        console.error("Error detecting emotion:", error);
      }
    }
  };

  const fetchSongs = async (emotion) => {
    try {
      const response = await axios.get(`http://localhost:5001/tracks?emotion=${emotion}`);
      setSongs(response.data);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  return (
    <div>
      <h1>Emotion-Based Music Recommendation</h1>
      <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Capture & Analyze</button>
      {emotion && <h2>Detected Emotion: {emotion}</h2>}
      <h3>Songs:</h3>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>{song.title} - {song.artist}</li>
        ))}
      </ul>
    </div>
  );
};

export default CameraCapture;
