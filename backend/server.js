const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const LASTFM_API_KEY = process.env.LASTFM_API_KEY; // Store in .env file
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;


app.get("/tracks", async (req, res) => {
  const { emotion } = req.query; // Example: ?emotion=happy

  try {
    const response = await axios.get(
      `http://ws.audioscrobbler.com/2.0/`,
      {
        params: {
          method: "tag.gettoptracks",
          tag: emotion, // e.g., "happy", "sad"
          api_key: LASTFM_API_KEY,
          format: "json"
        }
      }
    );

    const tracks = response.data.tracks.track.map(track => ({
      title: track.name,
      artist: track.artist.name,
      url: track.url
    }));

    res.json(tracks);
  } catch (error) {
    console.error("Last.fm API Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch tracks" });
  }
});


// 🎥 Fetch YouTube Video ID based on song name
async function getYouTubeVideo(song, artist) {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        song + " " + artist
      )}&type=video&key=${YOUTUBE_API_KEY}`
    );

    return response.data.items[0]?.id.videoId || null;
  } catch (error) {
    console.error("Error fetching YouTube video:", error);
    return null;
  }
}

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

