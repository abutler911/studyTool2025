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

// Memory techniques and mnemonics
const memoryTechniques = {
  "Structural Limitations": {
    mnemonics: {
      "Maximum Takeoff Weight": {
        "85,098 lbs":
          "🚀 Think: '85 = Einstein's age when he died, 098 = almost 100!'",
        "85,517 lbs":
          "🚀 Think: '85 area code + 517 Michigan area code = takeoff!'",
      },
      "Maximum Landing Weight": {
        "74,957 lbs":
          "🛬 Think: '74 = Independence year + 957 = almost 1000 - emergency landing!'",
      },
      "Maximum Zero Fuel Weight": {
        "69,467 lbs":
          "⛽ Think: '69 = summer of love + 467 = Boeing 747 backwards!'",
      },
      "Maximum Ramp Weight": {
        "85,450 lbs":
          "🛤️ Think: '85 again + 450 = 45 degrees x 10 (perfect ramp angle)!'",
      },
    },
    visualizations: {
      "Maximum Takeoff Weight":
        "🚀 Imagine a rocket with '85' painted on the side and '098' passengers aboard",
      "Maximum Landing Weight":
        "🛬 Picture landing gear with '74' on left wheel, '957' on right wheel",
      "Maximum Zero Fuel Weight":
        "⛽ Visualize empty fuel tanks with '69' and '467' written in big numbers",
      "Maximum Ramp Weight":
        "🛤️ See a ramp with '85' steps and '450' written at the top",
    },
    stories: {
      sequence:
        "📖 Story: In 1985 (85), a pilot took off with 98 passengers (85,098). After burning fuel, he could land with 74,957 pounds. With zero fuel, the plane weighs 69,467. On the ramp, it's 85,450 - just 352 pounds more than takeoff weight difference!",
    },
  },
};

// Weight memorization patterns
const weightPatterns = {
  "85,098": {
    pattern: "85 + 098",
    memory: "80s decade + almost 100",
    breakdown: "85,000 + 98",
    similar: "85,517 (just +419)",
  },
  "85,517": {
    pattern: "85 + 517",
    memory: "Same 85, plus area code 517",
    breakdown: "85,000 + 517",
    similar: "85,098 (just -419)",
  },
  "74,957": {
    pattern: "74 + 957",
    memory: "1974 + almost 1000",
    breakdown: "74,000 + 957",
    difference: "10,141 less than takeoff",
  },
  "69,467": {
    pattern: "69 + 467",
    memory: "69 summer + 467",
    breakdown: "69,000 + 467",
    difference: "5,490 less than landing",
  },
  "85,450": {
    pattern: "85 + 450",
    memory: "Same 85 + 450 degrees",
    breakdown: "85,000 + 450",
    difference: "352 more than takeoff",
  },
};

// Add memorization mode
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

  // Clean up memory aids
  const memoryAids = document.getElementById("memory-aids");
  if (memoryAids) memoryAids.remove();

  // Populate table or show memory aids
  if (mode === "fill") {
    createFillModeControls();
  } else if (mode === "memory") {
    createMemoryAids();
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
    showFeedback("correct", "✅ Nice!");
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

    // Update stats and show feedback
    if (selectedValue === correctAnswer) {
      appState.correctCount++;
      appState.streakCount++;
      showFeedback("correct", "✅ Correct!");
    } else {
      appState.incorrectCount++;
      appState.streakCount = 0;
      showFeedback(
        "incorrect",
        `❌ Incorrect! The answer is: ${correctAnswer}`
      );
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
    showFeedback("correct", "✅ Got it!");
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
    showFeedback("correct", "✅ Perfect!");
  } else if (selectedValue !== "") {
    cell.innerHTML = `<s>${selectedValue}</s><br><strong>${correctAnswer}</strong>`;
    cell.classList.add("incorrect");
    appState.incorrectCount++;
    appState.streakCount = 0;
    showFeedback("incorrect", `❌ Try again! The answer is: ${correctAnswer}`);
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
    showFeedback("correct", "✅ Excellent!");
  } else {
    cell.innerHTML = `<s>${input.value}</s><br><strong>${input.dataset.answer}</strong>`;
    cell.classList.add("incorrect");
    appState.incorrectCount++;
    appState.streakCount = 0;
    showFeedback(
      "incorrect",
      `❌ Close! The answer is: ${input.dataset.answer}`
    );
  }

  updateStats();
  updateProgress();
  saveProgress();
}

// Show user feedback
function showFeedback(type, message) {
  // Remove existing feedback
  const existingFeedback = document.querySelector(".feedback-toast");
  if (existingFeedback) {
    existingFeedback.remove();
  }

  // Create feedback toast
  const feedback = document.createElement("div");
  feedback.className = `feedback-toast feedback-${type}`;
  feedback.textContent = message;

  // Add to page
  document.body.appendChild(feedback);

  // Show with animation
  setTimeout(() => feedback.classList.add("show"), 10);

  // Auto-hide after 2 seconds
  setTimeout(() => {
    feedback.classList.remove("show");
    setTimeout(() => feedback.remove(), 300);
  }, 2000);

  // Add haptic feedback on mobile
  if (navigator.vibrate) {
    if (type === "correct") {
      navigator.vibrate(50); // Short vibration for correct
    } else {
      navigator.vibrate([100, 50, 100]); // Pattern for incorrect
    }
  }
}

// Create memory aids for weight memorization
function createMemoryAids() {
  const aids = document.createElement("div");
  aids.id = "memory-aids";
  aids.className = "memory-aids-container";

  const categoryData = limitationsCategories[appState.currentCategory];
  const techniques = memoryTechniques[appState.currentCategory];

  if (!techniques) {
    aids.innerHTML = `
      <div class="memory-aid-card">
        <h3>💡 Memory Tips</h3>
        <p>Break down numbers into chunks, find patterns, and create mental stories!</p>
      </div>
    `;
  } else {
    let aidsHTML = `
      <div class="memory-techniques-grid">
        <div class="memory-aid-card">
          <h3>🧠 Mnemonics</h3>
          <div class="technique-list">
    `;

    if (techniques.mnemonics) {
      categoryData.data.forEach((item) => {
        Object.keys(item).forEach((key) => {
          if (
            key !== "structure" &&
            key !== "choices" &&
            techniques.mnemonics[item.structure] &&
            techniques.mnemonics[item.structure][item[key]]
          ) {
            aidsHTML += `
              <div class="technique-item">
                <strong>${item.structure} (${key.toUpperCase()}):</strong><br>
                <span class="weight-highlight">${item[key]}</span><br>
                <span class="mnemonic">${
                  techniques.mnemonics[item.structure][item[key]]
                }</span>
              </div>
            `;
          }
        });
      });
    }

    aidsHTML += `
          </div>
        </div>
        
        <div class="memory-aid-card">
          <h3>🎨 Visualizations</h3>
          <div class="technique-list">
    `;

    if (techniques.visualizations) {
      Object.keys(techniques.visualizations).forEach((limitation) => {
        aidsHTML += `
          <div class="technique-item">
            <strong>${limitation}:</strong><br>
            <span class="visualization">${techniques.visualizations[limitation]}</span>
          </div>
        `;
      });
    }

    aidsHTML += `
          </div>
        </div>
        
        <div class="memory-aid-card weight-patterns-card">
          <h3>🔢 Weight Patterns</h3>
          <div class="patterns-grid">
    `;

    categoryData.data.forEach((item) => {
      Object.keys(item).forEach((key) => {
        if (
          key !== "structure" &&
          key !== "choices" &&
          weightPatterns[item[key]]
        ) {
          const pattern = weightPatterns[item[key]];
          aidsHTML += `
            <div class="pattern-item">
              <div class="weight-large">${item[key]}</div>
              <div class="pattern-breakdown">
                <div>📐 Pattern: ${pattern.pattern}</div>
                <div>🧠 Memory: ${pattern.memory}</div>
                <div>➗ Breakdown: ${pattern.breakdown}</div>
                ${
                  pattern.similar
                    ? `<div>🔗 Similar: ${pattern.similar}</div>`
                    : ""
                }
                ${
                  pattern.difference
                    ? `<div>📊 Difference: ${pattern.difference}</div>`
                    : ""
                }
              </div>
            </div>
          `;
        }
      });
    });

    aidsHTML += `
          </div>
        </div>
        
        <div class="memory-aid-card story-card">
          <h3>📚 Memory Story</h3>
          <div class="story-content">
            ${
              techniques.stories
                ? techniques.stories.sequence
                : "Create your own story connecting all the weights!"
            }
          </div>
        </div>
        
        <div class="memory-aid-card practice-card">
          <h3>🎯 Practice Techniques</h3>
          <div class="practice-buttons">
            <button class="btn memory-practice-btn" onclick="startFlashcards()">🔄 Flashcards</button>
            <button class="btn memory-practice-btn" onclick="startSpeedDrill()">⚡ Speed Drill</button>
            <button class="btn memory-practice-btn" onclick="startProgressive()">📈 Progressive</button>
          </div>
        </div>
      </div>
    `;
  }

  const statsContainer = document.querySelector(".stats-container");
  statsContainer.insertAdjacentElement("afterend", aids);
}

// Flashcard practice mode
function startFlashcards() {
  showFeedback("correct", "🔄 Flashcard mode starting!");
  // Switch to quiz mode but with single questions
  setMode("quiz");
  // Could add flashcard-specific logic here
}

// Speed drill practice
function startSpeedDrill() {
  showFeedback("correct", "⚡ Speed drill activated!");
  setMode("timer");
  // Reduce timer to 3 minutes for intensive practice
  appState.timeRemaining = 180;
}

// Progressive difficulty
function startProgressive() {
  showFeedback("correct", "📈 Progressive mode - start with easiest!");
  setMode("fill");
  // Could implement progressive difficulty logic
}

// Show streak celebrations
function showStreakCelebration(streak) {
  if (streak === 5) {
    showFeedback("streak", "🔥 5 in a row! You're on fire!");
  } else if (streak === 10) {
    showFeedback("streak", "⚡ 10 streak! Incredible!");
  } else if (streak === 20) {
    showFeedback("streak", "🎯 20 streak! You're a legend!");
  } else if (streak % 25 === 0 && streak > 0) {
    showFeedback("streak", `🏆 ${streak} streak! Absolutely amazing!`);
  }
}

// Show category completion
function showCategoryCompletion() {
  const totalCells = elements.tableContainer.querySelectorAll(
    ".limitation-cell, .input-cell, .memory-hidden, .multiple-choice-options, .choice-dropdown"
  ).length;
  const completedCells = elements.tableContainer.querySelectorAll(
    ".correct, .incorrect, .memory-correct, .multiple-choice-options:has(input[type='radio']:disabled)"
  ).length;

  if (totalCells > 0 && completedCells === totalCells) {
    const accuracy = Math.round(
      (appState.correctCount /
        (appState.correctCount + appState.incorrectCount)) *
        100
    );
    let message = "🎉 Category Complete!";

    if (accuracy >= 95) {
      message = "🏆 Perfect! Category mastered!";
    } else if (accuracy >= 80) {
      message = "⭐ Great job! Category completed!";
    } else if (accuracy >= 60) {
      message = "👍 Good work! Category completed!";
    }

    showFeedback("completion", `${message} (${accuracy}% accuracy)`);
  }
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

  // Show streak celebrations
  showStreakCelebration(appState.streakCount);
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

  // Check for category completion
  showCategoryCompletion();
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
