// Aircraft Limitations Data with Multiple Choice Options
const limitationsCategories = {
  "Structural Limitations": {
    columns: ["Structure", "ERJ175LL", "ERJ175LR"],
    data: [
      {
        structure: "Maximum Takeoff Weight",
        erj175ll: "85,098 lbs",
        erj175lr: "85,517 lbs",
        choices: {
          erj175ll: ["80,098 lbs", "85,098 lbs", "90,098 lbs", "87,098 lbs"],
          erj175lr: ["80,517 lbs", "85,517 lbs", "90,517 lbs", "87,517 lbs"],
        },
      },
      {
        structure: "Maximum Landing Weight",
        erj175ll: "74,957 lbs",
        erj175lr: "74,957 lbs",
        choices: {
          erj175ll: ["69,957 lbs", "74,957 lbs", "79,957 lbs", "77,957 lbs"],
          erj175lr: ["69,957 lbs", "74,957 lbs", "79,957 lbs", "77,957 lbs"],
        },
      },
      {
        structure: "Maximum Zero Fuel Weight",
        erj175ll: "69,467 lbs",
        erj175lr: "69,886 lbs",
        choices: {
          erj175ll: ["64,467 lbs", "69,467 lbs", "74,467 lbs", "71,467 lbs"],
          erj175lr: ["64,886 lbs", "69,886 lbs", "74,886 lbs", "71,886 lbs"],
        },
      },
      {
        structure: "Maximum Ramp Weight",
        erj175ll: "85,450 lbs",
        erj175lr: "85,870 lbs",
        choices: {
          erj175ll: ["80,450 lbs", "85,450 lbs", "90,450 lbs", "87,450 lbs"],
          erj175lr: ["80,870 lbs", "85,870 lbs", "90,870 lbs", "87,870 lbs"],
        },
      },
    ],
  },
  "Structural Dimensions": {
    columns: ["Structure", "Dimension"],
    data: [
      {
        structure: "Overall Length",
        dimension: "103 ft 11 in",
        choices: {
          dimension: [
            "98 ft 11 in",
            "103 ft 11 in",
            "108 ft 11 in",
            "105 ft 11 in",
          ],
        },
      },
      {
        structure: "Wing Span",
        dimension: "93 ft 11 in",
        choices: {
          dimension: [
            "88 ft 11 in",
            "93 ft 11 in",
            "98 ft 11 in",
            "95 ft 11 in",
          ],
        },
      },
      {
        structure: "Tail Height",
        dimension: "32 ft 4 in",
        choices: {
          dimension: ["27 ft 4 in", "32 ft 4 in", "37 ft 4 in", "34 ft 4 in"],
        },
      },
    ],
  },
  "Max Altitude and Temp Limits": {
    columns: ["Limitation", "Value"],
    data: [
      {
        limitation: "Maximum Operating Altitude",
        value: "41,000 ft",
        choices: {
          value: ["35,000 ft", "41,000 ft", "45,000 ft", "43,000 ft"],
        },
      },
      {
        limitation: "Maximum Takeoff Altitude",
        value: "10,000 ft",
        choices: {
          value: ["8,000 ft", "10,000 ft", "12,000 ft", "15,000 ft"],
        },
      },
      {
        limitation: "Maximum Landing Altitude",
        value: "10,000 ft",
        choices: {
          value: ["8,000 ft", "10,000 ft", "12,000 ft", "15,000 ft"],
        },
      },
      {
        limitation: "Maximum Temp, T/O & Lnd",
        value: "ISA +35°C",
        choices: {
          value: ["ISA +25°C", "ISA +35°C", "ISA +45°C", "ISA +40°C"],
        },
      },
      {
        limitation: "Minimum Temp, T/O & Lnd",
        value: "-40°C",
        choices: {
          value: ["-30°C", "-40°C", "-50°C", "-45°C"],
        },
      },
    ],
  },
  "Airspeed and Mach Limits": {
    columns: ["Speed", "Limit"],
    data: [
      {
        speed: "VMO SL-8000'",
        limit: "300",
        choices: {
          limit: ["280", "300", "320", "310"],
        },
      },
      {
        speed: "VMO 10,000 to Mach Trans",
        limit: "320",
        choices: {
          limit: ["300", "320", "340", "330"],
        },
      },
      {
        speed: "MMO",
        limit: "0.82",
        choices: {
          limit: ["0.78", "0.82", "0.86", "0.84"],
        },
      },
      {
        speed: "VA",
        limit: "240",
        choices: {
          limit: ["220", "240", "260", "250"],
        },
      },
      {
        speed: "VLO Ext",
        limit: "250",
        choices: {
          limit: ["230", "250", "270", "260"],
        },
      },
      {
        speed: "VLE",
        limit: "250",
        choices: {
          limit: ["230", "250", "270", "260"],
        },
      },
      {
        speed: "VTIRE",
        limit: "195",
        choices: {
          limit: ["175", "195", "215", "205"],
        },
      },
    ],
  },
  "Max Flap Operating Speed": {
    columns: ["Flap", "Speed"],
    data: [
      {
        flap: "Flaps 1",
        speed: "230 KIAS",
        choices: {
          speed: ["210 KIAS", "230 KIAS", "250 KIAS", "240 KIAS"],
        },
      },
      {
        flap: "Flaps 2",
        speed: "215 KIAS",
        choices: {
          speed: ["195 KIAS", "215 KIAS", "235 KIAS", "225 KIAS"],
        },
      },
      {
        flap: "Flaps 3",
        speed: "200 KIAS",
        choices: {
          speed: ["180 KIAS", "200 KIAS", "220 KIAS", "210 KIAS"],
        },
      },
      {
        flap: "Flaps 4",
        speed: "180 KIAS",
        choices: {
          speed: ["160 KIAS", "180 KIAS", "200 KIAS", "190 KIAS"],
        },
      },
      {
        flap: "Flaps 5",
        speed: "180 KIAS",
        choices: {
          speed: ["160 KIAS", "180 KIAS", "200 KIAS", "190 KIAS"],
        },
      },
      {
        flap: "Flaps Full",
        speed: "165 KIAS",
        choices: {
          speed: ["145 KIAS", "165 KIAS", "185 KIAS", "175 KIAS"],
        },
      },
    ],
  },
  "Starter Cranking Limits on Ground": {
    columns: ["Start Attempts", "Time ON", "Time OFF"],
    data: [
      {
        start_attempts: "1 & 2",
        time_on: "90 seconds",
        time_off: "10 seconds",
        choices: {
          time_on: ["60 seconds", "90 seconds", "120 seconds", "105 seconds"],
          time_off: ["5 seconds", "10 seconds", "15 seconds", "30 seconds"],
        },
      },
      {
        start_attempts: "3 - 5",
        time_on: "90 seconds",
        time_off: "5 minutes",
        choices: {
          time_on: ["60 seconds", "90 seconds", "120 seconds", "105 seconds"],
          time_off: ["2 minutes", "5 minutes", "10 minutes", "7 minutes"],
        },
      },
    ],
  },
  "Starter Cranking Limits in Flight": {
    columns: ["Start Attempts", "Time ON", "Time OFF"],
    data: [
      {
        start_attempts: "1 & 2",
        time_on: "120 seconds",
        time_off: "10 seconds",
        choices: {
          time_on: ["90 seconds", "120 seconds", "150 seconds", "135 seconds"],
          time_off: ["5 seconds", "10 seconds", "15 seconds", "30 seconds"],
        },
      },
      {
        start_attempts: "3 - 5",
        time_on: "120 seconds",
        time_off: "5 minutes",
        choices: {
          time_on: ["90 seconds", "120 seconds", "150 seconds", "135 seconds"],
          time_off: ["2 minutes", "5 minutes", "10 minutes", "7 minutes"],
        },
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
        choices: {
          time_on: ["60 seconds", "90 seconds", "120 seconds", "105 seconds"],
          time_off: ["2 minutes", "5 minutes", "10 minutes", "7 minutes"],
        },
      },
      {
        motoring_attempts: "2 - 5 Cycles",
        time_on: "30 seconds",
        time_off: "5 minutes",
        choices: {
          time_on: ["15 seconds", "30 seconds", "45 seconds", "60 seconds"],
          time_off: ["2 minutes", "5 minutes", "10 minutes", "7 minutes"],
        },
      },
    ],
  },
  "APU Starter Duty Cycle": {
    columns: ["Attempt", "Time OFF"],
    data: [
      {
        attempt: "1st Attempt",
        time_off: "60 seconds",
        choices: {
          time_off: ["30 seconds", "60 seconds", "90 seconds", "120 seconds"],
        },
      },
      {
        attempt: "2nd Attempt",
        time_off: "60 seconds",
        choices: {
          time_off: ["30 seconds", "60 seconds", "90 seconds", "120 seconds"],
        },
      },
      {
        attempt: "3rd Attempt",
        time_off: "5 minutes",
        choices: {
          time_off: ["2 minutes", "5 minutes", "10 minutes", "7 minutes"],
        },
      },
    ],
  },
  "APU Operational Limits to Start": {
    columns: ["Condition", "Min", "Max"],
    data: [
      {
        condition: "Altitude",
        min: "0 ft",
        max: "30,000 ft",
        choices: {
          min: ["0 ft", "0 ft", "0 ft", "0 ft"],
          max: ["25,000 ft", "30,000 ft", "35,000 ft", "33,000 ft"],
        },
      },
      {
        condition: "Temperature",
        min: "-54°C",
        max: "ISA +35°C",
        choices: {
          min: ["-44°C", "-54°C", "-64°C", "-59°C"],
          max: ["ISA +25°C", "ISA +35°C", "ISA +45°C", "ISA +40°C"],
        },
      },
    ],
  },
  "APU Operational Limits for Cont Operation": {
    columns: ["Condition", "Min", "Max"],
    data: [
      {
        condition: "Altitude",
        min: "0 ft",
        max: "33,000 ft",
        choices: {
          min: ["0 ft", "0 ft", "0 ft", "0 ft"],
          max: ["28,000 ft", "33,000 ft", "38,000 ft", "35,000 ft"],
        },
      },
      {
        condition: "Gen Use",
        min: "0 ft",
        max: "33,000 ft",
        choices: {
          min: ["0 ft", "0 ft", "0 ft", "0 ft"],
          max: ["28,000 ft", "33,000 ft", "38,000 ft", "35,000 ft"],
        },
      },
      {
        condition: "Engine Start",
        min: "0 ft",
        max: "21,000 ft",
        choices: {
          min: ["0 ft", "0 ft", "0 ft", "0 ft"],
          max: ["16,000 ft", "21,000 ft", "26,000 ft", "23,000 ft"],
        },
      },
    ],
  },
  Fuel: {
    columns: ["Condition", "Value"],
    data: [
      {
        condition: "Max Imbalance",
        value: "794 lbs",
        choices: {
          value: ["694 lbs", "794 lbs", "894 lbs", "844 lbs"],
        },
      },
      {
        condition: "Min Fuel Tank Temp",
        value: "-37°C",
        choices: {
          value: ["-27°C", "-37°C", "-47°C", "-42°C"],
        },
      },
    ],
  },
  Pressurization: {
    columns: ["Condition", "Limits"],
    data: [
      {
        condition: "Max Differential Pressure",
        limits: "8.4 PSI",
        choices: {
          limits: ["7.4 PSI", "8.4 PSI", "9.4 PSI", "8.9 PSI"],
        },
      },
      {
        condition: "Max Differential Overpressure",
        limits: "8.8 PSI",
        choices: {
          limits: ["7.8 PSI", "8.8 PSI", "9.8 PSI", "9.3 PSI"],
        },
      },
      {
        condition: "Max Differential Negative Pressure",
        limits: "-0.5 PSI",
        choices: {
          limits: ["-0.3 PSI", "-0.5 PSI", "-0.7 PSI", "-0.6 PSI"],
        },
      },
    ],
  },
  "Memory Items": {
    columns: ["cards"],
    data: [
      {
        condition: "Smoke Evacuation",
        items: [
          { left: "Oxygen Masks", right: "Don, Emer" },
          { left: "Crew Communication", right: "Establish" },
          { left: "Pressurization Dump", right: "Push In" },
        ],
      },
      {
        condition: "Smoke/Fire/Fumes",
        items: [
          { left: "Oxygen Masks", right: "Don, 100%" },
          { left: "Crew Communication", right: "Establish" },
        ],
      },
      {
        condition: "Jammed Control Column - Pitch",
        items: [{ left: "Elevator Disconnect Handle", right: "Pull" }],
      },
      {
        condition: "Pitch Trim Runaway",
        items: [
          { left: "AP / Trim Disc Button", right: "Press and Hold" },
          { left: "Pitch Trim Sys 1 & 2 Cutout Buttons", right: "Push In" },
        ],
      },
    ],
  },
};

// App State
const appState = {
  currentCategory: "Structural Limitations",
  currentMode: "study",
  correctCount: 0,
  incorrectCount: 0,
  streakCount: 0,
  timerInterval: null,
  timeRemaining: 300,
  mobileMenuOpen: false,
};

// DOM Elements
const elements = {
  loadingScreen: document.getElementById("loading-screen"),
  categorySelect: document.getElementById("category-select"),
  tableContainer: document.getElementById("table-container"),
  tableHead: document.getElementById("table-head"),
  tableBody: document.getElementById("table-body"),
  correctCount: document.getElementById("correct-count"),
  incorrectCount: document.getElementById("incorrect-count"),
  streakCount: document.getElementById("streak-count"),
  accuracyRate: document.getElementById("accuracy-rate"),
  progressFill: document.getElementById("progress-fill"),
  progressText: document.getElementById("progress-text"),
  timer: document.getElementById("timer"),
  timerText: document.querySelector(".timer-text"),
  controls: document.querySelector(".controls"),
  mobileFab: document.getElementById("mobile-fab"),
  mobileMenu: document.getElementById("mobile-menu"),
  mobileMenuOverlay: document.getElementById("mobile-menu-overlay"),
};

// Initialize
function init() {
  loadProgress();
  setupEventListeners();
  setMode(appState.currentMode);
  updateStats();
}

// Event Listeners
function setupEventListeners() {
  // Category change
  elements.categorySelect.addEventListener("change", handleCategoryChange);

  // Desktop controls
  elements.controls.addEventListener("click", handleControlClick);
  document.getElementById("reset-btn").addEventListener("click", handleReset);

  // Mobile controls
  elements.mobileFab.addEventListener("click", toggleMobileMenu);
  elements.mobileMenuOverlay.addEventListener("click", toggleMobileMenu);
  document.querySelectorAll(".mobile-menu-btn[data-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setMode(btn.dataset.mode);
      toggleMobileMenu();
    });
  });
  document.getElementById("mobile-reset").addEventListener("click", () => {
    handleReset();
    toggleMobileMenu();
  });

  // Table interactions
  elements.tableContainer.addEventListener("click", handleTableClick);
  elements.tableContainer.addEventListener("keyup", handleTableKeyup);
  elements.tableContainer.addEventListener("change", handleDropdownChange);
}

// Handle control clicks
function handleControlClick(e) {
  if (e.target.matches(".btn[data-mode]")) {
    setMode(e.target.dataset.mode);
  }
}

// Toggle mobile menu
function toggleMobileMenu() {
  appState.mobileMenuOpen = !appState.mobileMenuOpen;
  elements.mobileMenu.classList.toggle("active", appState.mobileMenuOpen);
  elements.mobileMenuOverlay.classList.toggle(
    "active",
    appState.mobileMenuOpen
  );
}

// Set mode
function setMode(mode) {
  appState.currentMode = mode;

  // Update active button
  document.querySelectorAll(".btn[data-mode]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });

  // Handle timer
  if (mode === "timer") {
    elements.timer.style.display = "inline-flex";
    startTimer();
  } else {
    elements.timer.style.display = "none";
    if (appState.timerInterval) {
      clearInterval(appState.timerInterval);
    }
  }

  // Clean up fill mode controls
  const fillControls = document.getElementById("fill-mode-controls");
  if (fillControls) fillControls.remove();

  // Populate table
  if (mode === "fill") {
    createFillModeControls();
  }
  populateTable();
}

// Handle category change
function handleCategoryChange() {
  appState.currentCategory = elements.categorySelect.value;
  appState.correctCount = 0;
  appState.incorrectCount = 0;
  appState.streakCount = 0;
  setMode(appState.currentMode);
  updateStats();
  saveProgress();
}

// Populate table
function populateTable() {
  showLoading(true);

  const categoryData = limitationsCategories[appState.currentCategory];
  if (!categoryData) {
    showLoading(false);
    return;
  }

  // Clear table
  elements.tableHead.innerHTML = "";
  elements.tableBody.innerHTML = "";

  // Handle Memory Items differently
  if (appState.currentCategory === "Memory Items") {
    createMemoryCards();
    showLoading(false);
    return;
  }

  // Create headers
  const headerRow = document.createElement("tr");
  categoryData.columns.forEach((col) => {
    const th = document.createElement("th");
    th.textContent = col;
    headerRow.appendChild(th);
  });
  elements.tableHead.appendChild(headerRow);

  // Create rows
  categoryData.data.forEach((item, index) => {
    const row = document.createElement("tr");
    const keys = Object.keys(item).filter((key) => key !== "choices");

    keys.forEach((key, colIndex) => {
      const cell = document.createElement("td");
      const isLastColumn = colIndex === keys.length - 1;
      const hasChoices = item.choices && item.choices[key];

      if ((isLastColumn || hasChoices) && appState.currentMode !== "study") {
        if (appState.currentMode === "fill") {
          // Fill mode - create dropdown with choices
          if (hasChoices) {
            cell.innerHTML = createDropdownHTML(
              item.choices[key],
              item[key],
              index,
              key
            );
          } else {
            cell.innerHTML = `<input type="text" class="input-cell" data-answer="${item[key]}" data-index="${index}" placeholder="Enter value...">`;
          }
        } else {
          // Quiz/Timer mode - create multiple choice
          if (hasChoices) {
            cell.innerHTML = createMultipleChoiceHTML(
              item.choices[key],
              item[key],
              index,
              key
            );
            cell.className = "multiple-choice-cell";
          } else {
            cell.className = "limitation-cell hidden";
            cell.dataset.answer = item[key];
            cell.dataset.index = index;
          }
        }
      } else {
        cell.textContent = item[key];
      }

      row.appendChild(cell);
    });

    elements.tableBody.appendChild(row);
  });

  showLoading(false);
  updateProgress();
}

// Create dropdown HTML for fill mode
function createDropdownHTML(choices, correctAnswer, index, key) {
  const shuffledChoices = shuffleArray([...choices]);
  let html = `<select class="choice-dropdown" data-answer="${correctAnswer}" data-index="${index}" data-key="${key}">`;
  html += `<option value="">Select...</option>`;

  shuffledChoices.forEach((choice) => {
    html += `<option value="${choice}">${choice}</option>`;
  });

  html += `</select>`;
  return html;
}

// Create multiple choice HTML for quiz/timer mode
function createMultipleChoiceHTML(choices, correctAnswer, index, key) {
  const shuffledChoices = shuffleArray([...choices]);
  let html = `<div class="multiple-choice-options" data-answer="${correctAnswer}" data-index="${index}" data-key="${key}">`;

  shuffledChoices.forEach((choice, i) => {
    html += `
      <label class="choice-option">
        <input type="radio" name="choice_${index}_${key}" value="${choice}">
        <span class="choice-text">${choice}</span>
      </label>
    `;
  });

  html += `</div>`;
  return html;
}

// Shuffle array utility
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Create memory cards
function createMemoryCards() {
  const categoryData = limitationsCategories["Memory Items"];
  elements.tableContainer.innerHTML = '<div class="memory-cards-grid"></div>';
  const grid = elements.tableContainer.querySelector(".memory-cards-grid");

  categoryData.data.forEach((card, cardIndex) => {
    const cardEl = document.createElement("div");
    cardEl.className = "memory-card";

    let itemsHtml = "";
    card.items.forEach((item, itemIndex) => {
      const isHidden = appState.currentMode !== "study" && Math.random() > 0.5;
      if (isHidden) {
        itemsHtml += `
                            <div class="memory-item">
                                <span class="memory-item-left">${item.left}</span>
                                <span class="memory-item-right memory-hidden" data-card="${cardIndex}" data-item="${itemIndex}">
                                    Tap to reveal
                                </span>
                            </div>`;
      } else {
        itemsHtml += `
                            <div class="memory-item">
                                <span class="memory-item-left">${item.left}</span>
                                <span class="memory-item-right">${item.right}</span>
                            </div>`;
      }
    });

    cardEl.innerHTML = `
                    <div class="memory-condition">${card.condition}</div>
                    <div class="memory-items">${itemsHtml}</div>
                `;

    grid.appendChild(cardEl);
  });
}

// Create fill mode controls
function createFillModeControls() {
  const controls = document.createElement("div");
  controls.id = "fill-mode-controls";
  controls.className = "fill-mode-controls";
  controls.innerHTML = `
                <label>
                    <input type="checkbox" id="instant-feedback" checked>
                    Auto-check answers
                </label>
                <button class="btn" onclick="regenerateFillMode()">🎲 Regenerate</button>
            `;

  const statsContainer = document.querySelector(".stats-container");
  statsContainer.insertAdjacentElement("afterend", controls);
}

// Handle table clicks
function handleTableClick(e) {
  const target = e.target;

  // Quiz/Timer mode - reveal answer (for old style cells)
  if (target.matches(".limitation-cell.hidden")) {
    target.textContent = target.dataset.answer;
    target.classList.remove("hidden");
    target.classList.add("correct");
    appState.correctCount++;
    appState.streakCount++;
    updateStats();
    updateProgress();
    saveProgress();
  }

  // Multiple choice selection
  if (target.matches('input[type="radio"]')) {
    const container = target.closest(".multiple-choice-options");
    const correctAnswer = container.dataset.answer;
    const selectedValue = target.value;

    // Disable all radio buttons in this group
    const allRadios = container.querySelectorAll('input[type="radio"]');
    allRadios.forEach((radio) => (radio.disabled = true));

    // Show results
    const allOptions = container.querySelectorAll(".choice-option");
    allOptions.forEach((option) => {
      const radio = option.querySelector('input[type="radio"]');
      const text = option.querySelector(".choice-text");

      if (radio.value === correctAnswer) {
        option.classList.add("correct-choice");
      } else if (radio === target && radio.value !== correctAnswer) {
        option.classList.add("incorrect-choice");
      } else if (radio.value !== correctAnswer) {
        option.classList.add("disabled-choice");
      }
    });

    // Update stats
    if (selectedValue === correctAnswer) {
      appState.correctCount++;
      appState.streakCount++;
    } else {
      appState.incorrectCount++;
      appState.streakCount = 0;
    }

    updateStats();
    updateProgress();
    saveProgress();
  }

  // Memory items - reveal answer
  if (target.matches(".memory-hidden")) {
    const card =
      limitationsCategories["Memory Items"].data[target.dataset.card];
    const item = card.items[target.dataset.item];
    target.textContent = item.right;
    target.classList.remove("memory-hidden");
    target.classList.add("memory-correct");
    appState.correctCount++;
    appState.streakCount++;
    updateStats();
    updateProgress();
    saveProgress();
  }
}

// Handle table keyup (for fill mode)
function handleTableKeyup(e) {
  if (e.target.matches(".input-cell") && e.key === "Enter") {
    checkAnswer(e.target);
  }
}

// Handle dropdown changes (for fill mode)
function handleDropdownChange(e) {
  if (e.target.matches(".choice-dropdown")) {
    checkDropdownAnswer(e.target);
  }
}

// Check dropdown answer in fill mode
function checkDropdownAnswer(dropdown) {
  const selectedValue = dropdown.value;
  const correctAnswer = dropdown.dataset.answer;
  const cell = dropdown.parentElement;

  if (selectedValue === correctAnswer) {
    cell.textContent = correctAnswer;
    cell.classList.add("correct");
    appState.correctCount++;
    appState.streakCount++;
  } else if (selectedValue !== "") {
    cell.innerHTML = `<s>${selectedValue}</s><br><strong>${correctAnswer}</strong>`;
    cell.classList.add("incorrect");
    appState.incorrectCount++;
    appState.streakCount = 0;
  }

  updateStats();
  updateProgress();
  saveProgress();
}

// Check answer in fill mode
function checkAnswer(input) {
  const userAnswer = input.value.trim().toLowerCase();
  const correctAnswer = input.dataset.answer.trim().toLowerCase();
  const cell = input.parentElement;

  if (userAnswer === correctAnswer) {
    cell.textContent = input.dataset.answer;
    cell.classList.add("correct");
    appState.correctCount++;
    appState.streakCount++;
  } else {
    cell.innerHTML = `<s>${input.value}</s><br><strong>${input.dataset.answer}</strong>`;
    cell.classList.add("incorrect");
    appState.incorrectCount++;
    appState.streakCount = 0;
  }

  updateStats();
  updateProgress();
  saveProgress();
}

// Regenerate fill mode
function regenerateFillMode() {
  populateTable();
}

// Update stats
function updateStats() {
  elements.correctCount.textContent = appState.correctCount;
  elements.incorrectCount.textContent = appState.incorrectCount;
  elements.streakCount.textContent = appState.streakCount;

  const total = appState.correctCount + appState.incorrectCount;
  const accuracy =
    total > 0 ? Math.round((appState.correctCount / total) * 100) : 0;
  elements.accuracyRate.textContent = `${accuracy}%`;
}

// Update progress
function updateProgress() {
  const totalCells = elements.tableContainer.querySelectorAll(
    ".limitation-cell, .input-cell, .memory-hidden, .multiple-choice-options, .choice-dropdown"
  ).length;
  const completedCells = elements.tableContainer.querySelectorAll(
    ".correct, .incorrect, .memory-correct, .multiple-choice-options:has(input[type='radio']:disabled)"
  ).length;

  const progress = totalCells > 0 ? (completedCells / totalCells) * 100 : 0;
  elements.progressFill.style.width = `${progress}%`;
  elements.progressText.textContent = `${Math.round(progress)}%`;
}

// Start timer
function startTimer() {
  clearInterval(appState.timerInterval);
  appState.timeRemaining = 300; // 5 minutes

  appState.timerInterval = setInterval(() => {
    appState.timeRemaining--;
    const minutes = Math.floor(appState.timeRemaining / 60);
    const seconds = appState.timeRemaining % 60;
    elements.timerText.textContent = `${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;

    if (appState.timeRemaining <= 0) {
      clearInterval(appState.timerInterval);
      alert("Time's up!");
    }
  }, 1000);
}

// Reset progress
function handleReset() {
  if (confirm("Reset progress for this category?")) {
    appState.correctCount = 0;
    appState.incorrectCount = 0;
    appState.streakCount = 0;
    setMode(appState.currentMode);
    updateStats();
    saveProgress();
  }
}

// Show/hide loading
function showLoading(show) {
  elements.loadingScreen.classList.toggle("active", show);
}

// Save progress
function saveProgress() {
  const data = {
    category: appState.currentCategory,
    mode: appState.currentMode,
    stats: {
      correct: appState.correctCount,
      incorrect: appState.incorrectCount,
      streak: appState.streakCount,
    },
  };
  localStorage.setItem("aircraftLimitsProgress", JSON.stringify(data));
}

// Load progress
function loadProgress() {
  const saved = localStorage.getItem("aircraftLimitsProgress");
  if (saved) {
    const data = JSON.parse(saved);
    appState.currentCategory = data.category || "Structural Limitations";
    appState.currentMode = data.mode || "study";
    if (data.stats) {
      appState.correctCount = data.stats.correct || 0;
      appState.incorrectCount = data.stats.incorrect || 0;
      appState.streakCount = data.stats.streak || 0;
    }
    elements.categorySelect.value = appState.currentCategory;
  }
}

// Initialize app
init();
