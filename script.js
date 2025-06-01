const limitationsCategories = {
  "Structural Limitations": {
    columns: ["Structure", "ERJ175LL", "ERJ175LR"],
    data: [
      {
        structure: "Maximum Takeoff Weight",
        erj175ll: "38,800 lbs",
        erj175lr: "40,500 lbs",
      },
      {
        structure: "Maximum Landing Weight",
        erj175ll: "35,000 lbs",
        erj175lr: "35,000 lbs",
      },
      {
        structure: "Maximum Zero Fuel Weight",
        erj175ll: "33,000 lbs",
        erj175lr: "33,000 lbs",
      },
      {
        structure: "Maximum Ramp Weight",
        erj175ll: "39,000 lbs",
        erj175lr: "40,700 lbs",
      },
      {
        structure: "Maximum Fuel Capacity",
        erj175ll: "2,590 gal",
        erj175lr: "2,590 gal",
      },
    ],
  },
  "Structural Dimensions": {
    columns: ["Structure", "Dimension"],
    data: [
      { structure: "Overall Length", dimension: "103 ft 11 in" },
      { structure: "Wing Span", dimension: "85 ft 2 in" },
      { structure: "Overall Height", dimension: "31 ft 1 in" },
      { structure: "Cabin Length", dimension: "68 ft 4 in" },
      { structure: "Cabin Width", dimension: "8 ft 2 in" },
    ],
  },
  "Max Altitude and Temp Limits": {
    columns: ["Limitation", "Value"],
    data: [
      { limitation: "Maximum Operating Altitude", value: "41,000 ft" },
      { limitation: "Maximum Takeoff Altitude", value: "8,000 ft" },
      { limitation: "Maximum Landing Altitude", value: "8,000 ft" },
      { limitation: "Maximum Operating Temperature", value: "ISA +35°C" },
      { limitation: "Minimum Operating Temperature", value: "-54°C" },
    ],
  },
  "Airspeed and Mach Limits": {
    columns: ["Speed", "Limit"],
    data: [
      { speed: "VMO (Maximum Operating Speed)", limit: "320 KIAS" },
      { speed: "MMO (Maximum Operating Mach)", limit: "0.78 Mach" },
      { speed: "VNE (Never Exceed Speed)", limit: "350 KIAS" },
      { speed: "VA (Design Maneuvering Speed)", limit: "250 KIAS" },
      { speed: "VFE (Flaps Extended Speed)", limit: "200 KIAS" },
    ],
  },
  "Max Flap Operating Speed": {
    columns: ["Flap", "Speed"],
    data: [
      { flap: "Flaps 1", speed: "230 KIAS" },
      { flap: "Flaps 2", speed: "215 KIAS" },
      { flap: "Flaps 3", speed: "200 KIAS" },
      { flap: "Flaps 4", speed: "180 KIAS" },
      { flap: "Flaps 5 (Full)", speed: "160 KIAS" },
    ],
  },
  "Starter Cranking Limits on Ground": {
    columns: ["Start Attempts", "Time ON", "Time OFF"],
    data: [
      {
        start_attempts: "1st Attempt",
        time_on: "90 seconds",
        time_off: "10 seconds",
      },
      {
        start_attempts: "2nd Attempt",
        time_on: "90 seconds",
        time_off: "10 seconds",
      },
      {
        start_attempts: "3rd Attempt",
        time_on: "90 seconds",
        time_off: "30 minutes",
      },
      {
        start_attempts: "4th Attempt",
        time_on: "90 seconds",
        time_off: "30 minutes",
      },
    ],
  },
  "Starter Cranking Limits in Flight": {
    columns: ["Start Attempts", "Time ON", "Time OFF"],
    data: [
      {
        start_attempts: "1st Attempt",
        time_on: "30 seconds",
        time_off: "10 seconds",
      },
      {
        start_attempts: "2nd Attempt",
        time_on: "30 seconds",
        time_off: "10 seconds",
      },
      {
        start_attempts: "3rd Attempt",
        time_on: "30 seconds",
        time_off: "30 minutes",
      },
    ],
  },
  "Dry Motoring Cycle Limits": {
    columns: ["Motoring Attempts", "Time ON", "Time OFF"],
    data: [
      {
        motoring_attempts: "1st Cycle",
        time_on: "90 seconds",
        time_off: "5 minutes",
      },
      {
        motoring_attempts: "2nd Cycle",
        time_on: "90 seconds",
        time_off: "5 minutes",
      },
      {
        motoring_attempts: "3rd Cycle",
        time_on: "90 seconds",
        time_off: "30 minutes",
      },
    ],
  },
  "APU Starter Duty Cycle": {
    columns: ["Attempt", "Time OFF"],
    data: [
      { attempt: "1st Attempt", time_off: "60 seconds" },
      { attempt: "2nd Attempt", time_off: "60 seconds" },
      { attempt: "3rd Attempt", time_off: "60 seconds" },
      { attempt: "After 3 Attempts", time_off: "15 minutes" },
    ],
  },
  "APU Operational Limits to Start": {
    columns: ["Condition", "Min", "Max"],
    data: [
      { condition: "Altitude", min: "0 ft", max: "20,000 ft" },
      { condition: "Temperature", min: "-54°C", max: "ISA +35°C" },
      { condition: "Wind Speed", min: "0 kts", max: "40 kts" },
      { condition: "Battery Voltage", min: "22V", max: "30V" },
    ],
  },
  "APU Operational Limits for Cont Operation": {
    columns: ["Condition", "Min", "Max"],
    data: [
      { condition: "Altitude", min: "0 ft", max: "41,000 ft" },
      { condition: "EGT", min: "0°C", max: "677°C" },
      { condition: "Oil Temperature", min: "-40°C", max: "163°C" },
      { condition: "Oil Pressure", min: "13 PSI", max: "58 PSI" },
    ],
  },
  Pressurization: {
    columns: ["Condition", "Limits"],
    data: [
      { condition: "Maximum Cabin Altitude", limits: "8,000 ft" },
      { condition: "Maximum Differential Pressure", limits: "8.6 PSI" },
      { condition: "Maximum Rate of Climb", limits: "500 fpm" },
      { condition: "Maximum Rate of Descent", limits: "300 fpm" },
      { condition: "Safety Relief Valve", limits: "8.8 PSI" },
    ],
  },
};

let currentCategory = "Structural Limitations";
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
  category: "Structural Limitations",
};

function init() {
  populateTable();
  updateStats();
  loadProgress();
}

function changeCategory() {
  currentCategory = document.getElementById("category-select").value;
  populateTable();
  resetProgress();
}

function populateTable() {
  const category = limitationsCategories[currentCategory];
  const thead = document.getElementById("table-head");
  const tbody = document.getElementById("table-body");

  thead.innerHTML = "";
  tbody.innerHTML = "";

  const headerRow = document.createElement("tr");
  category.columns.forEach((column) => {
    const th = document.createElement("th");
    th.textContent = column;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  category.data.forEach((item, index) => {
    const row = document.createElement("tr");
    const keys = Object.keys(item);

    keys.forEach((key, colIndex) => {
      const cell = document.createElement("td");

      if (
        colIndex === keys.length - 1 ||
        (keys.length === 2 && colIndex === 1)
      ) {
        cell.className = "limitation-cell";
        cell.setAttribute("data-index", index);
        cell.setAttribute("data-field", key);
        cell.onclick = () => handleCellClick(cell);
        cell.textContent = currentMode === "study" ? item[key] : "";
      } else {
        cell.textContent = item[key];
      }

      row.appendChild(cell);
    });
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
  const category = limitationsCategories[currentCategory];
  const correctValue = category.data[index][field];

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
  cells.forEach((cell, cellIndex) => {
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
  const category = limitationsCategories[currentCategory];
  const correctValue = category.data[dataIndex][field].toLowerCase();
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
    category: currentCategory,
  };
}

function loadProgress() {
  if (savedProgress) {
    correctCount = savedProgress.correctCount || 0;
    incorrectCount = savedProgress.incorrectCount || 0;
    streakCount = savedProgress.streakCount || 0;
    currentCategory = savedProgress.category || "Structural Limitations";
    document.getElementById("category-select").value = currentCategory;
    updateStats();
  }
}

document.addEventListener("DOMContentLoaded", init);
