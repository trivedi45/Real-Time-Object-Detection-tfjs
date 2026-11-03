# WebAI Real-Time Object Detection (COCO-SSD)

## 1. Project Title

WebAI: Real-Time Object Detection in the Browser using TensorFlow.js (COCO-SSD)


## 2. Project Description

This project implements a browser-based real-time object detection application using TensorFlow.js and the pre-trained COCO-SSD model. The application runs inference entirely on the client (browser) and is served via a lightweight Node.js and  Express server. Users can detect objects using a webcam or uploaded images, visualize results with bounding boxes, class labels, confidence scores, and observe performance metrics (FPS). The project demonstrates practical WebAI, frontend ML integration, and professional web development practices, aligned with the assignment learning outcomes.


## 3. Learning Outcomes Addressed

### 3.1 Frontend Programming

1. Uses modern browser APIs (MediaDevices, Canvas, File input)
2. Integrates TensorFlow.js for in-browser ML inference
3. Loads and runs a pre-trained ML model (COCO-SSD)
4. Handles media inputs (webcam & image upload)
5. Renders detection results on HTML canvas
6. Applies preprocessing, postprocessing, and performance techniques


### 3.2 Professionalism

1. Structured, readable, and documented codebase
2. Clear user instructions and error handling
3. Suitable for demonstrations and presentations


## 4. Technologies Used

| Technology       | Role                               |
| ---------------- | ---------------------------------- |
| Node.js          | Backend runtime                    |
| Express.js       | Static file server                 |
| TensorFlow.js    | Machine learning in browser        |
| COCO-SSD         | Pre-trained object detection model |
| HTML5            | Page structure                     |
| CSS3             | Layout and styling                 |
| JavaScript (ES6) | Application logic                  |


## 5. Model Information (COCO-SSD)

1. Model name: COCO-SSD (Single Shot Detector)
2. Dataset: COCO (Common Objects in Context)
3. Classes: 80+ object categories
4. Examples: person, car, bicycle, phone, bottle, chair, laptop
5. Inference: Real-time, client-side
6. Model source: TensorFlow.js official models


## 6. Project Folder Structure

Project/
│── node_modules/
│── public/
│   ├── index.html      # UI layout
│   ├── style.css       # Styling
│   └── app.js          # TensorFlow.js logic
│── server.js           # Express server
│── package.json        # Dependencies
│── package-lock.json   # Dependency lock
│── README.md           # Documentation



## 7. System Requirements

### Software

1. Node.js v18+ (recommended)
2. npm v9+
3. Modern browser (Chrome / Edge / Firefox)

### Hardware

1. Webcam (for real-time detection)
2. CPU-only supported (GPU optional via WebGL)


## 8. Installation & Setup

### Step 1: Open Project Folder

cd Project


### Step 2: Install Dependencies (Express JS)

npm install express


### Step 3: Start the Server

node server.js

Output:

Server running at http://localhost:3000

### Step 4: Open Application

Open browser and go to:
"http://localhost:3000"


## 9. How to Use the Application

### 9.1 Webcam Object Detection

1. Click Start Camera
2. Allow camera permission
3. Objects are detected in real-time
4. Bounding boxes, labels, and confidence appear
5. Click **Stop Camera** to end

### 9.2 Image Upload Detection

1. Click **Choose File**
2. Select JPG / PNG image
3. Objects in the image are detected instantly

### 9.3 Confidence Threshold

1. Slider controls detection sensitivity
2. Higher threshold refers fewer detections
3. Lower threshold refers more detections


## 10. Output & Visualization

1. Displayed directly in the browser:
2. Bounding boxes
3. Object class labels
4. Confidence scores (%)
5. FPS (Frames Per Second)
6. Object count summary


## 11. How Detection Works (Technical Flow)

1. Express serves static frontend files
2. Browser loads TensorFlow.js
3. COCO-SSD model is downloaded and cached
4. Video/image frame is captured
5. Frame is passed to `model.detect()`
6. Model returns predictions:
  "class"
  "score" (confidence)
  "bbox" (bounding box)
7. Results are drawn on canvas overlay



## 12. Performance & FPS

1. FPS is calculated using frame timestamps
2. Performance depends on:
3. Device CPU/GPU
4. Browser backend (CPU/WebGL)
5. Image resolution


## 13. Error Handling & Troubleshooting

### Error: "Model failed to load"

1. Internet connection required
2. CDN scripts must be present:


<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd"></script>


### Error: Camera permission denied
1. Allow browser camera access
2. Use localhost or HTTPS only

### No objects detected

1. Improve lighting
2. Lower confidence threshold
3. Use supported object categories


## 14. Mapping to Assignment Criteria

### Minimum Requirements
1. Client-side JS with TensorFlow.js
2. COCO-SSD model integration
3. Webcam & image input
4. Bounding boxes + labels
5. Express static server
6. Error handling

### P1 Essential Features
1. Model loading state
2. Webcam controls
3. Canvas rendering
4. FPS counter
5. Responsive layout

## 15. Future Enhancements
1. Class filter toggles
2. Screenshot capture
3. ROI (Region of Interest)
4. Object tracking across frames
5. Model comparison (YOLO vs SSD)


## 16. One-Line Summary
A fully client-side, real-time object detection web application using TensorFlow.js and COCO-SSD, served via Nod
