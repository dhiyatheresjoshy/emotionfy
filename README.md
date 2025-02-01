# [Project Name] 🎯


## Basic Details
### Team Name: DASAN & VIJAYAN


### Team Members
- Member 1: [Dhiya Theres Joshy] - [CET]


### Hosted Project Link
[mention your project hosted project link here]

### Project Description
Emotion-Based Music Recommendation System:
This project aims to create an interactive music recommendation system that uses facial expression recognition (FER) to detect a user's emotion and suggest songs accordingly. A camera captures the user's face, a backend processes the image using emotion detection algorithms, and the system recommends music based on the detected mood.

### The Problem statement
Music plays a crucial role in influencing and reflecting human emotions. However, selecting songs manually based on mood can be time-consuming. Many existing music recommendation systems rely on past listening history rather than real-time emotions. This project aims to solve this by offering personalized song recommendations based on a user’s facial expressions, making music selection seamless and engaging.

### The Solution
The user accesses the web application and activates the camera. The system captures the user's facial expression in real time. The image is sent to a Python-based backend that uses FER (Facial Expression Recognition) to detect the emotion (e.g., happy, sad, angry, neutral, etc.).
Based on the detected emotion, the system interacts with the Last.fm API to fetch a list of recommended songs.
The user receives a dynamically generated playlist matching their mood.


## Technical Details
### Technologies/Components Used
For Software:
Languages used:
- JavaScript
- Python
Libraries Used:
- react (for UI)
- react-webcam (to capture a selfie)
- axios (to send requests to backend)
- flask (to run the server)
- flask-cors (to allow frontend communication)
- fer (Facial Expression Recognition)
- opencv-python (for image processing)
- numpy (to process image data)
- pillow (for image handling)
- requests (to make API calls)
- express (to run the server)
- axios (to call external APIs)
- cors (to allow frontend communication)
- dotenv (to store API keys securely)


 
This project consists of three main parts:

Frontend (React - JavaScript)
Backend (Flask - Python)
Music API (Express.js - Node.js)

### Implementation
For Software:
# Installation
Frontend: 
npx create-react-app emotion-music-app
cd emotion-music-app
npm install axios react-webcam

Backend: 
pip install flask flask-cors pillow numpy opencv-python fer requests

Music API (Node.js - Express):
mkdir backend
cd backend
npm init -y
npm install express axios cors dotenv


# Run
python emotion.py
node server.js
npm run dev

### Project Documentation
For Software:

# Screenshots (Add at least 3)
![Screenshot1](Add screenshot 1 here with proper name)
*Add caption explaining what this shows*

![Screenshot2](Add screenshot 2 here with proper name)
*Add caption explaining what this shows*

![Screenshot3](Add screenshot 3 here with proper name)
*Add caption explaining what this shows*

# Diagrams
![Workflow](Add your workflow/architecture diagram here)
*Add caption explaining your workflow*

For Hardware:

# Schematic & Circuit
![Circuit](Add your circuit diagram here)
*Add caption explaining connections*

![Schematic](Add your schematic diagram here)
*Add caption explaining the schematic*

# Build Photos
![Team](Add photo of your team here)


![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

### Project Demo
# Video
[Add your demo video link here]
*Explain what the video demonstrates*

# Additional Demos
[Add any extra demo materials/links]

## Team Contributions
- [Name 1]: [Specific contributions]
- [Name 2]: [Specific contributions]
- [Name 3]: [Specific contributions]

---
Made with ❤️ at TinkerHub
