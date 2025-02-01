import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const App = () => {
  const [emotion, setEmotion] = useState(null);
  const [songs, setSongs] = useState([]);
  const webcamRef = useRef(null);

  // Function to capture selfie & detect emotion
  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      try {
        // Send Image to Flask for Emotion Detection
        const response = await axios.post("http://localhost:5000/detect-emotion", {
          image: imageSrc,
        });

        setEmotion(response.data.emotion); // Store detected emotion
        fetchSongs(response.data.emotion); // Fetch songs based on emotion
      } catch (error) {
        console.error("Error detecting emotion:", error);
        console.log(response.data)
      }
    }
  };

  // Function to get songs from Last.fm (via Node.js)
  const fetchSongs = async (emotion) => {
    try {
      const response = await axios.get(`http://localhost:5001/tracks?emotion=${emotion}`);
      
      console.log("API Response:", response.data); // Debugging: Check API structure
  
      const formattedSongs = response.data.map((song) => ({
        title: song.title || "Unknown Title", // Ensure name is fetched correctly
        artist: song.artist || "Unknown Artist",
        image: song.albumArt || "https://via.placeholder.com/150", // Check album art
      }));
  
      setSongs(formattedSongs);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Emotionfy</h1>

      {/* Webcam for Capturing Selfie */}
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" width={300} height={300} style={styles.webcam} />
      <br />

      {/* Button to Capture Image */}
      <button onClick={capture} style={styles.captureButton}>
        Capture & Detect Emotion
      </button>

      {/* Display Emotion */}
      {emotion && <h2 style={styles.emotionText}>Detected Emotion: {emotion}</h2>}

      {/* Display Songs in Cards */}
      <div style={styles.songGrid}>
        {songs.map((song, index) => (
          <div key={index} style={styles.songCard}>
            {/* <img src={song.image || "https://via.placeholder.com/150"} alt="Album Art" style={styles.albumArt} /> */}
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  container: { textAlign: "center", padding: "20px" },
  webcam: { borderRadius: "10px", marginBottom: "10px" },
  captureButton: { padding: "10px", fontSize: "16px", cursor: "pointer", margin: "10px" },
  emotionText: { fontSize: "20px", fontWeight: "bold", marginTop: "10px" },
  songGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", padding: "20px" },
  songCard: {
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#f9f9f9",
  },
  albumArt: { width: "100%", borderRadius: "10px" },
};

export default App;

