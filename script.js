const limitationsData = [
  {
    system: "Engine",
    type: "Maximum RPM",
    value: "2700",
    unit: "RPM",
    notes: "Continuous operation",
  },
  {
    system: "Engine",
    type: "Oil Temperature",
    value: "245",
    unit: "°F",
    notes: "Maximum",
  },
  {
    system: "Engine",
    type: "Oil Pressure",
    value: "25-65",
    unit: "PSI",
    notes: "Normal operating range",
  },
  {
    system: "Electrical",
    type: "Battery Voltage",
    value: "24",
    unit: "V",
    notes: "Nominal",
  },
  {
    system: "Electrical",
    type: "Alternator Output",
    value: "60",
    unit: "A",
    notes: "Maximum",
  },
  {
    system: "Flight Controls",
    type: "Never Exceed Speed",
    value: "200",
    unit: "KIAS",
    notes: "VNE - Red line",
  },
  {
    system: "Flight Controls",
    type: "Maneuvering Speed",
    value: "135",
    unit: "KIAS",
    notes: "VA at max weight",
  },
  {
    system: "Landing Gear",
    type: "Extension Speed",
    value: "140",
    unit: "KIAS",
    notes: "VLE - Maximum",
  },
  {
    system: "Flaps",
    type: "Operating Speed",
    value: "110",
    unit: "KIAS",
    notes: "VFE - Full flaps",
  },
  {
    system: "Weight & Balance",
    type: "Maximum Weight",
    value: "3400",
    unit: "lbs",
    notes: "MTOW",
  },
];

let currentMode = "study";
let correctCount = 0;
let incorrectCount = 0;
let streakCount = 0;
let timerInterval = null;
let timeRemaining = 300;

let savedProgress = {
  correctCount: 0,
  incorrectCount: 0,
  streakCount: 0,
  mode: "study",
};

function init() {
  populateTable();
  updateStats();
  loadProgress();
}

function populateTable() {
  const tbody = document.getElementById("table-body");
  tbody.innerHTML = "";

  limitationsData.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.system}</td>
            <td>${item.type}</td>
            <td class="limitation-cell" data-index="${index}" data-field="value" onclick="handleCellClick(this)">
                ${currentMode === "study" ? item.value : ""}
            </td>
            <td class="limitation-cell" data-index="${index}" data-field="unit" onclick="handleCellClick(this)">
                ${currentMode === "study" ? item.unit : ""}
            </td>
            <td>${item.notes}</td>
        `;
    tbody.appendChild(row);
  });

  if (currentMode === "quiz") {
    hideRandomCells();
  } else if (currentMode === "fill") {
    createFillInMode();
  }
}

function handleCellClick(cell) {
  if (currentMode !== "quiz") return;

  const index = parseInt(cell.getAttribute("data-index"));
  const field = cell.getAttribute("data-field");
  const correctValue = limitationsData[index][field];

  if (cell.classList.contains("hidden")) {
    cell.textContent = correctValue;
    cell.classList.remove("hidden");
    cell.classList.add("correct");
    correctCount++;
    streakCount++;
    updateStats();
    updateProgress();
  }
}

function hideRandomCells() {
  const cells = document.querySelectorAll(".limitation-cell");
  cells.forEach((cell) => {
    if (Math.random() < 0.7) {
      cell.classList.add("hidden");
      cell.textContent = "";
    }
  });
}

function createFillInMode() {
  const cells = document.querySelectorAll(".limitation-cell");
  cells.forEach((cell, index) => {
    const dataIndex = cell.getAttribute("data-index");
    const field = cell.getAttribute("data-field");
    const input = document.createElement("input");
    input.type = "text";
    input.className = "input-cell";
    input.placeholder = "Enter value...";
    input.addEventListener("blur", () =>
      checkFillInAnswer(input, dataIndex, field)
    );
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        checkFillInAnswer(input, dataIndex, field);
      }
    });
    cell.innerHTML = "";
    cell.appendChild(input);
  });
}

function checkFillInAnswer(input, dataIndex, field) {
  const correctValue = limitationsData[dataIndex][field].toLowerCase();
  const userValue = input.value.toLowerCase().trim();

  if (userValue === correctValue) {
    input.parentElement.classList.add("correct");
    correctCount++;
    streakCount++;
  } else if (userValue !== "") {
    input.parentElement.classList.add("incorrect");
    incorrectCount++;
    streakCount = 0;
  }
  updateStats();
  updateProgress();
}

function setMode(mode) {
  currentMode = mode;

  document
    .querySelectorAll(".btn")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  if (mode === "timer") {
    startTimer();
    document.getElementById("timer").style.display = "block";
  } else {
    document.getElementById("timer").style.display = "none";
  }

  populateTable();
  saveProgress();
}

function startTimer() {
  timeRemaining = 300;
  const timerElement = document.getElementById("timer");

  timerInterval = setInterval(() => {
    timeRemaining--;
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerElement.textContent = `Time: ${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      alert("Time's up! How did you do?");
    }
  }, 1000);
}

function updateStats() {
  document.getElementById("correct-count").textContent = correctCount;
  document.getElementById("incorrect-count").textContent = incorrectCount;
  document.getElementById("streak-count").textContent = streakCount;
}

function updateProgress() {
  const totalCells = document.querySelectorAll(".limitation-cell").length;
  const completedCells = document.querySelectorAll(
    ".limitation-cell.correct, .limitation-cell.incorrect"
  ).length;
  const progress = (completedCells / totalCells) * 100;
  document.getElementById("progress-fill").style.width = progress + "%";
}

function resetProgress() {
  correctCount = 0;
  incorrectCount = 0;
  streakCount = 0;
  updateStats();
  populateTable();
  document.getElementById("progress-fill").style.width = "0%";
  saveProgress();
}

function saveProgress() {
  savedProgress = {
    correctCount,
    incorrectCount,
    streakCount,
    mode: currentMode,
  };
}

function loadProgress() {
  if (savedProgress) {
    correctCount = savedProgress.correctCount || 0;
    incorrectCount = savedProgress.incorrectCount || 0;
    streakCount = savedProgress.streakCount || 0;
    updateStats();
  }
}

document.addEventListener("DOMContentLoaded", init);
