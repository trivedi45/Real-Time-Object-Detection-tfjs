let model = null;
let video = document.getElementById("video");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let threshold = 0.5;
let detecting = false;
let lastFrameTime = performance.now();

/* ==============================
   LOAD MODEL
================================ */
async function loadModel() {
  try {
    document.getElementById("status").innerText = "Loading COCO-SSD model...";
    model = await cocoSsd.load();
    document.getElementById("status").innerText = "Model loaded successfully";
  } catch (err) {
    console.error(err);
    document.getElementById("status").innerText = "Model load failed";
  }
}

loadModel();

/* ==============================
   START CAMERA
================================ */
async function startCamera() {
  if (!model) {
    alert("Model not loaded yet");
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    });

    video.srcObject = stream;
    await video.play();

    detecting = true;
    detectFrame();
  } catch (err) {
    console.error("Camera error:", err);
    alert("Camera access denied");
  }
}

/* ==============================
   STOP CAMERA
================================ */
function stopCamera() {
  detecting = false;

  if (video.srcObject) {
    video.srcObject.getTracks().forEach(track => track.stop());
    video.srcObject = null;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/* ==============================
   DETECTION LOOP (CAMERA)
================================ */
async function detectFrame() {
  if (!detecting || video.readyState !== 4) {
    requestAnimationFrame(detectFrame);
    return;
  }

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const predictions = await model.detect(video);
  drawResults(predictions);
  updateFPS();

  requestAnimationFrame(detectFrame);
}

/* ==============================
   IMAGE UPLOAD DETECTION
================================ */
function handleImageUpload(event) {
  if (!model) {
    alert("Model not loaded yet");
    return;
  }

  stopCamera(); // stop camera if running

  const file = event.target.files[0];
  if (!file) return;

  const img = new Image();
  img.onload = async () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    const predictions = await model.detect(img);
    drawResults(predictions);

    document.getElementById("fps").innerText = "FPS: N/A (Image)";
  };

  img.src = URL.createObjectURL(file);
}

/* ==============================
   DRAW RESULTS
================================ */
function drawResults(predictions) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let counts = {};

  predictions.forEach(pred => {
    if (pred.score < threshold) return;

    const [x, y, w, h] = pred.bbox;
    counts[pred.class] = (counts[pred.class] || 0) + 1;

    ctx.strokeStyle = "lime";
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, w, h);

    ctx.fillStyle = "lime";
    ctx.font = "14px Arial";
    ctx.fillText(
      `${pred.class} ${(pred.score * 100).toFixed(1)}%`,
      x,
      y > 10 ? y - 5 : 10
    );
  });

  document.getElementById("counts").innerHTML =
    Object.keys(counts).length === 0
      ? "No objects detected"
      : Object.entries(counts)
          .map(([k, v]) => `${k}: ${v}`)
          .join("<br>");
}

/* ==============================
   FPS
================================ */
function updateFPS() {
  const now = performance.now();
  const fps = (1000 / (now - lastFrameTime)).toFixed(1);
  lastFrameTime = now;
  document.getElementById("fps").innerText = `FPS: ${fps}`;
}

/* ==============================
   CONFIDENCE
================================ */
function updateThreshold(value) {
  threshold = parseFloat(value);
}
