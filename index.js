
import {
  PoseLandmarker,
  FilesetResolver
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/vision_bundle.mjs";


/* ======================================================
   ELEMENT
====================================================== */

const menuScreen =
  document.getElementById("menuScreen");

const gameScreen =
  document.getElementById("gameScreen");

const resultScreen =
  document.getElementById("resultScreen");

const materialButtons =
  document.querySelectorAll(".material-btn");

const selectedMaterial =
  document.getElementById("selectedMaterial");

const startGame =
  document.getElementById("startGame");

const materialTitle =
  document.getElementById("materialTitle");

const scoreElement =
  document.getElementById("score");

const questionNumber =
  document.getElementById("questionNumber");

const progressBar =
  document.getElementById("progressBar");

const progressPercent =
  document.getElementById("progressPercent");

const questionElement =
  document.getElementById("question");

const feedback =
  document.getElementById("feedback");

const directionElement =
  document.getElementById("direction");

const playerStatus =
  document.getElementById("playerStatus");

const statusElement =
  document.getElementById("status");

const video =
  document.getElementById("video");

const canvas =
  document.getElementById("canvas");

const switchCamera =
  document.getElementById("switchCamera");

const toggleMirror =
  document.getElementById("toggleMirror");

const countdown =
  document.getElementById("countdown");

const countdownNumber =
  document.getElementById("countdownNumber");

const resultMaterial =
  document.getElementById("resultMaterial");

const finalScore =
  document.getElementById("finalScore");

const correctCount =
  document.getElementById("correctCount");

const wrongCount =
  document.getElementById("wrongCount");

const playAgain =
  document.getElementById("playAgain");

const backMenu =
  document.getElementById("backMenu");


/* ======================================================
   SOAL
====================================================== */

const questionBank = {

  pencernaan: [

    {
      question:
        "Pencernaan bertujuan mengubah makanan menjadi zat yang lebih sederhana agar dapat diserap tubuh.",
      answer: true
    },

    {
      question:
        "Pencernaan mekanik adalah pencernaan yang mengubah makanan menggunakan enzim.",
      answer: false
    },

    {
      question:
        "Gigi berperan dalam proses pencernaan mekanik.",
      answer: true
    },

    {
      question:
        "Air liur mengandung enzim amilase yang membantu mencerna karbohidrat.",
      answer: true
    },

    {
      question:
        "Kerongkongan merupakan tempat utama penyerapan sari-sari makanan.",
      answer: false
    },

    {
      question:
        "Gerakan peristaltik membantu mendorong makanan dari kerongkongan menuju lambung.",
      answer: true
    },

    {
      question:
        "Lambung menghasilkan asam klorida (HCl) yang membantu proses pencernaan.",
      answer: true
    },

    {
      question:
        "Pencernaan protein dimulai di mulut menggunakan enzim pepsin.",
      answer: false
    },

    {
      question:
        "Usus halus merupakan tempat utama penyerapan sari-sari makanan.",
      answer: true
    },

    {
      question:
        "Vili atau jonjot usus memperluas permukaan usus halus sehingga penyerapan zat makanan lebih efektif.",
      answer: true
    },

    {
      question:
        "Usus besar merupakan tempat utama penyerapan glukosa dari makanan.",
      answer: false
    },

    {
      question:
        "Usus besar menyerap sebagian air dan berperan dalam pembentukan feses.",
      answer: true
    },

    {
      question:
        "Hati menghasilkan empedu yang membantu proses pencernaan lemak.",
      answer: true
    },

    {
      question:
        "Empedu merupakan enzim yang secara langsung memecah lemak menjadi asam lemak.",
      answer: false
    },

    {
      question:
        "Pankreas menghasilkan berbagai enzim yang membantu mencerna karbohidrat, protein, dan lemak.",
      answer: true
    },

    {
      question:
        "Semua zat makanan harus mengalami pencernaan kimiawi sebelum dapat diserap tubuh.",
      answer: false
    },

    {
      question:
        "Serat makanan tidak seluruhnya dicerna tubuh, tetapi tetap penting bagi kesehatan pencernaan.",
      answer: true
    },

    {
      question:
        "Diare dapat menyebabkan tubuh kehilangan banyak air dan elektrolit.",
      answer: true
    },

    {
      question:
        "Mengonsumsi cukup serat dan air dapat membantu menjaga kesehatan sistem pencernaan.",
      answer: true
    },

    {
      question:
        "Setelah makanan masuk lambung, semua zat gizi langsung diserap ke dalam darah.",
      answer: false
    }

  ],


  peredaran: [

    {
      question:
        "Sistem peredaran darah berfungsi mengedarkan oksigen, zat makanan, dan zat lain ke seluruh tubuh.",
      answer: true
    },

    {
      question:
        "Jantung manusia memiliki empat ruang.",
      answer: true
    },

    {
      question:
        "Serambi kiri menerima darah yang kaya oksigen dari paru-paru.",
      answer: true
    },

    {
      question:
        "Bilik kanan memompa darah yang kaya oksigen ke seluruh tubuh.",
      answer: false
    },

    {
      question:
        "Bilik kiri memompa darah menuju seluruh tubuh melalui aorta.",
      answer: true
    },

    {
      question:
        "Semua arteri selalu membawa darah yang kaya oksigen.",
      answer: false
    },

    {
      question:
        "Semua vena selalu membawa darah yang miskin oksigen.",
      answer: false
    },

    {
      question:
        "Arteri pulmonalis membawa darah dari jantung menuju paru-paru.",
      answer: true
    },

    {
      question:
        "Vena pulmonalis membawa darah yang kaya oksigen dari paru-paru menuju jantung.",
      answer: true
    },

    {
      question:
        "Kapiler merupakan tempat terjadinya pertukaran oksigen, karbon dioksida, zat makanan, dan zat sisa antara darah dan jaringan.",
      answer: true
    },

    {
      question:
        "Sel darah merah mengandung hemoglobin yang dapat mengikat oksigen.",
      answer: true
    },

    {
      question:
        "Fungsi utama sel darah putih adalah mengangkut oksigen ke seluruh tubuh.",
      answer: false
    },

    {
      question:
        "Keping darah atau trombosit berperan dalam proses pembekuan darah.",
      answer: true
    },

    {
      question:
        "Plasma merupakan bagian cair dari darah.",
      answer: true
    },

    {
      question:
        "Peredaran darah manusia disebut peredaran darah ganda karena dalam satu siklus darah melewati jantung dua kali.",
      answer: true
    },

    {
      question:
        "Peredaran darah kecil adalah peredaran darah dari jantung ke seluruh tubuh lalu kembali ke jantung.",
      answer: false
    },

    {
      question:
        "Peredaran darah besar dimulai dari bilik kiri menuju seluruh tubuh dan kembali ke serambi kanan.",
      answer: true
    },

    {
      question:
        "Tekanan darah dapat dipengaruhi oleh kerja jantung, kondisi pembuluh darah, dan gaya hidup.",
      answer: true
    },

    {
      question:
        "Olahraga secara teratur dapat membantu menjaga kesehatan sistem peredaran darah.",
      answer: true
    },

    {
      question:
        "Semua darah yang berada di sisi kanan jantung selalu kaya oksigen.",
      answer: false
    }

  ]

};


/* ======================================================
   NAMA MATERI
====================================================== */

const materialNames = {

  pencernaan:
    "Sistem Pencernaan",

  peredaran:
    "Sistem Peredaran Darah"

};


/* ======================================================
   GAME STATE
====================================================== */

let selectedMaterialType = null;

let currentQuestions = [];

let currentQuestionIndex = 0;

let score = 0;

let correctAnswers = 0;

let wrongAnswers = 0;

let answerLocked = false;

let waitingForCenter = false;

let gameRunning = false;


/* ======================================================
   CAMERA STATE
====================================================== */

let stream = null;

let poseLandmarker = null;

let cameraReady = false;

let detectionBusy = false;

let lastDetectionTime = 0;

let facingMode = "user";

let mirrorEnabled = true;


/* ======================================================
   POSITION STATE
====================================================== */

/*
  Posisi tubuh tidak lagi menggunakan baseline
  sebagai satu-satunya acuan.

  Sistem menggunakan posisi horizontal tubuh
  pada frame kamera.

  Pembagian:

  0% -------- 36% -------- 57% -------- 100%

      KIRI       TENGAH        KANAN

  KIRI  : 0.00 - 0.36
  TENGAH: 0.36 - 0.57
  KANAN : 0.57 - 1.00
*/

const LEFT_LIMIT = 0.36;

const RIGHT_LIMIT = 0.57;


/*
  Smoothing.

  Semakin besar nilainya,
  semakin cepat mengikuti gerakan.

  0.25 = cukup stabil.
*/

const POSITION_SMOOTHING = 0.25;


/*
  Untuk mencegah perubahan arah
  akibat sedikit getaran.
*/

const DIRECTION_CONFIRM_FRAMES = 2;


/*
  Posisi tubuh yang sudah dihaluskan.
*/

let smoothedX = null;


/*
  Arah yang sedang terdeteksi.
*/

let pendingDirection = "TENGAH";

let pendingDirectionFrames = 0;


/*
  Posisi tengah saat pemain harus
  kembali ke tengah setelah menjawab.
*/

const CENTER_MIN = 0.36;

const CENTER_MAX = 0.57;


/*
  Interval deteksi.
*/

const DETECTION_INTERVAL = 100;


/* ======================================================
   PILIH MATERI
====================================================== */

materialButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      materialButtons.forEach(btn => {

        btn.classList.remove(
          "selected"
        );

      });


      button.classList.add(
        "selected"
      );


      selectedMaterialType =
        button.dataset.material;


      selectedMaterial.textContent =
        "Materi dipilih: " +
        materialNames[
          selectedMaterialType
        ];


      startGame.disabled = false;

    }
  );

});


/* ======================================================
   SHUFFLE
====================================================== */

function shuffle(array) {

  const result =
    [...array];


  for (
    let i = result.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() *
        (i + 1)
      );


    [
      result[i],
      result[j]
    ] = [
      result[j],
      result[i]
    ];

  }


  return result;

}


/* ======================================================
   AMBIL 10 SOAL
====================================================== */

function prepareQuestions() {

  const bank =
    questionBank[
      selectedMaterialType
    ];


  currentQuestions =
    shuffle(bank).slice(0, 10);

}


/* ======================================================
   START CAMERA
====================================================== */

async function startCamera() {

  try {

    statusElement.textContent =
      "📷 Membuka kamera...";


    if (
      !navigator.mediaDevices ||
      !navigator.mediaDevices.getUserMedia
    ) {

      throw new Error(
        "Browser tidak mendukung kamera."
      );

    }


    if (stream) {

      stream
        .getTracks()
        .forEach(track => {
          track.stop();
        });

      stream = null;

    }


    cameraReady = false;


    stream =
      await navigator.mediaDevices
        .getUserMedia({

          video: {

            facingMode: {
              ideal: facingMode
            },

            width: {
              ideal: 640
            },

            height: {
              ideal: 480
            }

          },

          audio: false

        });


    video.srcObject =
      stream;


    await video.play();


    cameraReady = true;


    updateCameraControls();


    statusElement.textContent =
      "🟢 Kamera aktif";


    return true;

  } catch (error) {

    console.error(error);


    statusElement.textContent =
      "❌ Kamera gagal: " +
      error.name;


    alert(
      "Kamera tidak dapat digunakan.\n\n" +
      error.name +
      ": " +
      error.message
    );


    return false;

  }

}


/* ======================================================
   CAMERA CONTROLS
====================================================== */

function updateCameraControls() {

  const isFrontCamera =
    facingMode === "user";


  switchCamera.textContent =
    isFrontCamera
      ? "🔄 Kamera: Depan"
      : "🔄 Kamera: Belakang";


  toggleMirror.textContent =
    mirrorEnabled
      ? "🪞 Mirror: Aktif"
      : "🪞 Mirror: Nonaktif";


  toggleMirror.classList.toggle(
    "active",
    mirrorEnabled
  );


  toggleMirror.setAttribute(
    "aria-pressed",
    String(mirrorEnabled)
  );


  video.classList.toggle(
    "mirrored",
    mirrorEnabled
  );

}


/* ======================================================
   SWITCH CAMERA
====================================================== */

switchCamera.addEventListener(
  "click",
  async () => {

    if (!cameraReady) {
      return;
    }


    facingMode =
      facingMode === "user"
        ? "environment"
        : "user";


    resetPositionTracking();


    switchCamera.disabled =
      true;


    const started =
      await startCamera();


    switchCamera.disabled =
      false;


    if (!started) {

      statusElement.textContent =
        "❌ Gagal mengganti kamera";

    }

  }
);


/* ======================================================
   TOGGLE MIRROR
====================================================== */

toggleMirror.addEventListener(
  "click",
  () => {

    mirrorEnabled =
      !mirrorEnabled;


    updateCameraControls();

  }
);


/* ======================================================
   LOAD MEDIAPIPE
====================================================== */

async function loadPoseLandmarker() {

  try {

    statusElement.textContent =
      "🧠 Memuat sistem deteksi tubuh...";


    const vision =
      await FilesetResolver
        .forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
        );


    poseLandmarker =
      await PoseLandmarker
        .createFromOptions(
          vision,
          {

            baseOptions: {

              modelAssetPath:
                "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task"

            },


            runningMode:
              "VIDEO",


            numPoses:
              1,


            minPoseDetectionConfidence:
              0.5,


            minPosePresenceConfidence:
              0.5,


            minTrackingConfidence:
              0.5

          }
        );


    statusElement.textContent =
      "🟢 Sistem tubuh siap";


    return true;

  } catch (error) {

    console.error(error);


    statusElement.textContent =
      "❌ MediaPipe gagal dimuat";


    alert(
      "Sistem deteksi tubuh gagal dimuat.\n\n" +
      error.message
    );


    return false;

  }

}


/* ======================================================
   COUNTDOWN
====================================================== */

async function startCountdown() {

  countdown.classList.add(
    "show"
  );


  const values = [
    "3",
    "2",
    "1",
    "MULAI!"
  ];


  for (
    const value of values
  ) {

    countdownNumber.textContent =
      value;


    countdownNumber.style.animation =
      "none";


    void countdownNumber.offsetWidth;


    countdownNumber.style.animation =
      "countdownPop 1s ease-in-out";


    await new Promise(
      resolve => {

        setTimeout(
          resolve,
          1000
        );

      }
    );

  }


  countdown.classList.remove(
    "show"
  );

}


/* ======================================================
   RESET POSITION TRACKING
====================================================== */

function resetPositionTracking() {

  smoothedX = null;

  pendingDirection =
    "TENGAH";

  pendingDirectionFrames =
    0;

  directionElement.textContent =
    "TENGAH";

  playerStatus.textContent =
    "🧍 Menentukan posisi tengah";

}


/* ======================================================
   START NEW GAME
====================================================== */

function startNewGame() {

  prepareQuestions();


  currentQuestionIndex =
    0;

  score =
    0;

  correctAnswers =
    0;

  wrongAnswers =
    0;


  answerLocked =
    false;

  waitingForCenter =
    false;

  gameRunning =
    true;


  resetPositionTracking();


  scoreElement.textContent =
    "0";


  materialTitle.textContent =
    materialNames[
      selectedMaterialType
    ];


  feedback.textContent =
    "Bersiap...";


  feedback.className =
    "feedback wait";


  showQuestion();


  statusElement.textContent =
    "🟢 Game dimulai";

}


/* ======================================================
   SHOW QUESTION
====================================================== */

function showQuestion() {

  if (
    currentQuestionIndex >=
    currentQuestions.length
  ) {

    endGame();

    return;

  }


  answerLocked =
    false;

  waitingForCenter =
    false;


  resetPositionTracking();


  const item =
    currentQuestions[
      currentQuestionIndex
    ];


  questionElement.textContent =
    item.question;


  questionNumber.textContent =
    `SOAL ${
      currentQuestionIndex + 1
    } / 10`;


  const percentage =
    (
      currentQuestionIndex /
      10
    ) * 100;


  progressBar.style.width =
    `${percentage}%`;


  progressPercent.textContent =
    `${Math.round(
      percentage
    )}%`;


  feedback.textContent =
    "Gerakkan tubuh untuk menjawab";


  feedback.className =
    "feedback wait";


  directionElement.textContent =
    "TENGAH";


  playerStatus.textContent =
    "🧍 Siap menjawab";

}


/* ======================================================
   HANDLE ANSWER
====================================================== */

function handleAnswer(userAnswer) {

  if (!gameRunning) {
    return;
  }


  if (answerLocked) {
    return;
  }


  if (waitingForCenter) {
    return;
  }


  const item =
    currentQuestions[
      currentQuestionIndex
    ];


  answerLocked =
    true;


  const isCorrect =
    userAnswer ===
    item.answer;


  if (isCorrect) {

    score += 10;

    correctAnswers++;


    scoreElement.textContent =
      score;


    feedback.textContent =
      "✅ BENAR! +10";


    feedback.className =
      "feedback correct";

  } else {

    wrongAnswers++;


    feedback.textContent =
      "❌ SALAH";


    feedback.className =
      "feedback wrong";

  }


  waitingForCenter =
    true;


  playerStatus.textContent =
    "↩️ Kembali ke tengah";


  statusElement.textContent =
    "Jawaban terkunci — kembali ke tengah";

}


/* ======================================================
   NEXT QUESTION
====================================================== */

function nextQuestion() {

  currentQuestionIndex++;


  if (
    currentQuestionIndex >=
    currentQuestions.length
  ) {

    endGame();

    return;

  }


  showQuestion();

}


/* ======================================================
   GET BODY CENTER
====================================================== */

function getBodyCenter(landmarks) {

  /*
    MediaPipe Pose:

    Bahu:
    11 = left shoulder
    12 = right shoulder

    Pinggul:
    23 = left hip
    24 = right hip
  */

  const leftShoulder =
    landmarks[11];

  const rightShoulder =
    landmarks[12];

  const leftHip =
    landmarks[23];

  const rightHip =
    landmarks[24];


  const points = [
    leftShoulder,
    rightShoulder,
    leftHip,
    rightHip
  ];


  /*
    Pastikan landmark
    cukup terlihat.
  */

  const validPoints =
    points.filter(
      point =>
        point &&
        typeof point.x === "number"
    );


  if (
    validPoints.length < 2
  ) {

    return null;

  }


  let totalX = 0;


  validPoints.forEach(
    point => {

      totalX += point.x;

    }
  );


  return (
    totalX /
    validPoints.length
  );

}


/* ======================================================
   SMOOTH POSITION
====================================================== */

function smoothPosition(x) {

  if (smoothedX === null) {

    smoothedX =
      x;

    return smoothedX;

  }


  smoothedX =
    smoothedX +
    (
      x -
      smoothedX
    ) *
    POSITION_SMOOTHING;


  return smoothedX;

}


/* ======================================================
   DETERMINE DIRECTION
====================================================== */

function getDirection(x) {

  /*
    Jika mirror aktif,
    koordinat dibalik agar
    arah layar tetap sesuai.

    Setelah mirror:

    kiri layar  = KIRI
    tengah      = TENGAH
    kanan layar = KANAN
  */

  const screenX =
    mirrorEnabled
      ? 1 - x
      : x;


  /*
    PEMBAGIAN BARU

    0.00 - 0.36
    = KIRI

    0.36 - 0.57
    = TENGAH

    0.57 - 1.00
    = KANAN
  */

  if (
    screenX <
    LEFT_LIMIT
  ) {

    return "KIRI";

  }


  if (
    screenX >
    RIGHT_LIMIT
  ) {

    return "KANAN";

  }


  return "TENGAH";

}


/* ======================================================
   STABILIZE DIRECTION
====================================================== */

function getStableDirection(
  newDirection
) {

  /*
    Jika sama dengan arah
    sebelumnya, tambah counter.
  */

  if (
    newDirection ===
    pendingDirection
  ) {

    pendingDirectionFrames++;

  } else {

    pendingDirection =
      newDirection;

    pendingDirectionFrames =
      1;

  }


  /*
    Tunggu beberapa frame
    sebelum menganggap arah valid.
  */

  if (
    pendingDirectionFrames >=
    DIRECTION_CONFIRM_FRAMES
  ) {

    return pendingDirection;

  }


  return currentDirection;

}


/* ======================================================
   UPDATE DIRECTION
====================================================== */

function updateDirection(
  rawCenterX
) {

  if (
    typeof rawCenterX !==
    "number"
  ) {

    return;

  }


  /*
    Haluskan posisi.
  */

  const smoothX =
    smoothPosition(
      rawCenterX
    );


  /*
    Tentukan arah.
  */

  const detectedDirection =
    getDirection(
      smoothX
    );


  /*
    Stabilkan arah.
  */

  const newDirection =
    getStableDirection(
      detectedDirection
    );


  /*
    Jangan lakukan apa-apa
    kalau arah belum berubah.
  */

  currentDirection =
    newDirection;


  directionElement.textContent =
    newDirection;


  /* =====================================
     TENGAH
  ====================================== */

  if (
    newDirection ===
    "TENGAH"
  ) {

    if (
      waitingForCenter
    ) {

      playerStatus.textContent =
        "🟢 Posisi tengah — siap";


      waitingForCenter =
        false;


      setTimeout(
        () => {

          if (
            gameRunning
          ) {

            nextQuestion();

          }

        },
        350
      );

    } else {

      playerStatus.textContent =
        "🧍 Posisi tengah";

    }


    return;

  }


  /* =====================================
     JAWABAN SUDAH DIKUNCI
  ====================================== */

  if (
    answerLocked
  ) {

    return;

  }


  /* =====================================
     KANAN = BENAR
  ====================================== */

  if (
    newDirection ===
    "KANAN"
  ) {

    playerStatus.textContent =
      "👉 KANAN = BENAR";


    handleAnswer(
      true
    );


    return;

  }


  /* =====================================
     KIRI = SALAH
  ====================================== */

  if (
    newDirection ===
    "KIRI"
  ) {

    playerStatus.textContent =
      "👈 KIRI = SALAH";


    handleAnswer(
      false
    );

  }

}


/* ======================================================
   DETECTION LOOP
====================================================== */

function detectPose(
  timestamp
) {

  if (
    !poseLandmarker ||
    !cameraReady
  ) {

    requestAnimationFrame(
      detectPose
    );

    return;

  }


  /*
    Batasi frekuensi deteksi
    supaya tidak terlalu berat.
  */

  if (
    timestamp -
    lastDetectionTime <
    DETECTION_INTERVAL
  ) {

    requestAnimationFrame(
      detectPose
    );

    return;

  }


  if (
    detectionBusy
  ) {

    requestAnimationFrame(
      detectPose
    );

    return;

  }


  if (
    video.readyState <
    2
  ) {

    requestAnimationFrame(
      detectPose
    );

    return;

  }


  lastDetectionTime =
    timestamp;


  detectionBusy =
    true;


  try {

    const result =
      poseLandmarker
        .detectForVideo(
          video,
          timestamp
        );


    if (
      result &&
      result.landmarks &&
      result.landmarks.length > 0
    ) {

      const landmarks =
        result.landmarks[0];


      const centerX =
        getBodyCenter(
          landmarks
        );


      if (
        centerX !== null
      ) {

        updateDirection(
          centerX
        );

      }

    }

  } catch (error) {

    console.error(
      "Pose detection error:",
      error
    );

  }


  detectionBusy =
    false;


  requestAnimationFrame(
    detectPose
  );

}


/* ======================================================
   END GAME
====================================================== */

function endGame() {

  gameRunning =
    false;

  answerLocked =
    true;

  waitingForCenter =
    false;


  progressBar.style.width =
    "100%";


  progressPercent.textContent =
    "100%";


  finalScore.textContent =
    score;


  correctCount.textContent =
    correctAnswers;


  wrongCount.textContent =
    wrongAnswers;


  resultMaterial.textContent =
    materialNames[
      selectedMaterialType
    ];


  gameScreen.classList.remove(
    "active"
  );


  resultScreen.classList.add(
    "active"
  );


  statusElement.textContent =
    "Game selesai";

}


/* ======================================================
   STOP CAMERA
====================================================== */

function stopCamera() {

  if (stream) {

    stream
      .getTracks()
      .forEach(track => {
        track.stop();
      });


    stream =
      null;

  }


  video.srcObject =
    null;


  cameraReady =
    false;


  switchCamera.disabled =
    false;

}


/* ======================================================
   START GAME
====================================================== */

startGame.addEventListener(
  "click",
  async () => {

    if (
      !selectedMaterialType
    ) {

      return;

    }


    startGame.disabled =
      true;


    menuScreen.classList.remove(
      "active"
    );


    gameScreen.classList.add(
      "active"
    );


    /*
      MediaPipe.
    */

    if (!poseLandmarker) {

      const loaded =
        await loadPoseLandmarker();


      if (!loaded) {

        gameScreen.classList.remove(
          "active"
        );


        menuScreen.classList.add(
          "active"
        );


        startGame.disabled =
          false;


        return;

      }

    }


    /*
      Kamera.
    */

    const cameraStarted =
      await startCamera();


    if (!cameraStarted) {

      gameScreen.classList.remove(
        "active"
      );


      menuScreen.classList.add(
        "active"
      );


      startGame.disabled =
        false;


      return;

    }


    /*
      Detection loop.
    */

    requestAnimationFrame(
      detectPose
    );


    /*
      Countdown.
    */

    await startCountdown();


    /*
      Mulai game.
    */

    startNewGame();


    startGame.disabled =
      false;

  }
);


/* ======================================================
   MAIN LAGI
====================================================== */

playAgain.addEventListener(
  "click",
  async () => {

    resultScreen.classList.remove(
      "active"
    );


    gameScreen.classList.add(
      "active"
    );


    resetPositionTracking();


    answerLocked =
      false;

    waitingForCenter =
      false;


    if (!cameraReady) {

      const started =
        await startCamera();


      if (!started) {

        gameScreen.classList.remove(
          "active"
        );


        resultScreen.classList.add(
          "active"
        );


        return;

      }

    }


    await startCountdown();


    startNewGame();

  }
);


/* ======================================================
   KEMBALI KE MENU
====================================================== */

backMenu.addEventListener(
  "click",
  () => {

    gameRunning =
      false;


    resultScreen.classList.remove(
      "active"
    );


    gameScreen.classList.remove(
      "active"
    );


    menuScreen.classList.add(
      "active"
    );


    selectedMaterialType =
      null;


    selectedMaterial.textContent =
      "Belum memilih materi";


    materialButtons.forEach(
      button => {

        button.classList.remove(
          "selected"
        );

      }
    );


    startGame.disabled =
      true;


    stopCamera();


    resetPositionTracking();

  }
);


/* ======================================================
   INITIAL STATE
====================================================== */

statusElement.textContent =
  "Sistem siap";


directionElement.textContent =
  "TENGAH";


playerStatus.textContent =
  "🧍 Berdiri di tengah";


updateCameraControls();


/* ======================================================
   LOAD MEDIAPIPE
====================================================== */

(async function initialize() {

  try {

    statusElement.textContent =
      "🧠 Menyiapkan sistem...";


    await loadPoseLandmarker();


    statusElement.textContent =
      "🟢 Sistem siap — pilih materi";

  } catch (error) {

    console.error(error);


    statusElement.textContent =
      "❌ Sistem gagal dimuat";

  }

})();
