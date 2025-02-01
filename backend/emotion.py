import cv2
import numpy as np
import base64
from flask import Flask, request, jsonify
from flask_cors import CORS
from fer import FER

app = Flask(__name__)
CORS(app)

detector = FER()

@app.route("/detect-emotion", methods=["POST"])
def detect_emotion():
    data = request.json
    image_data = data.get("image")

    if not image_data:
        return jsonify({"error": "No image provided"}), 400

    # Decode Base64 Image
    image_bytes = base64.b64decode(image_data.split(",")[1])
    np_img = np.frombuffer(image_bytes, dtype=np.uint8)
    img = cv2.imdecode(np_img, cv2.IMREAD_COLOR)

    # Detect Emotion
    emotions = detector.detect_emotions(img)
    if not emotions:
        return jsonify({"emotion": "Neutral"})

    emotion = max(emotions[0]["emotions"], key=emotions[0]["emotions"].get)
    return jsonify({"emotion": emotion})

if __name__ == "__main__":
    app.run(port=5000, debug=True)
