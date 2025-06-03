/**
 * =================================================================================
 * AIRCRAFT LIMITATIONS STUDY TOOL v3.0 - REFACTORED SCRIPT
 *
 * This script has been rewritten for clarity, performance, and modern best practices.
 * Key changes include:
 * - Use of addEventListener instead of inline onclick handlers.
 * - Event delegation for dynamic elements to improve efficiency.
 * - A structured, modular approach without polluting the global namespace.
 * - Completed and integrated all functional components.
 * - Enhanced error checking and device capability detection.
 * =================================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // ============================================
  // APP STATE & CONFIGURATION
  // ============================================

  const appState = {
    currentCategory: "Structural Limitations",
    currentMode: "study",
    correctCount: 0,
    incorrectCount: 0,
    streakCount: 0,
    bestStreak: 0,
    timerInterval: null,
    timeRemaining: 300,
    mobileMenuOpen: false,
    hasShownFillModeHelp: false,
    achievements: new Set(),
    getAccuracy() {
      const total = this.correctCount + this.incorrectCount;
      return total > 0 ? Math.round((this.correctCount / total) * 100) : 0;
    },
    resetCategoryStats() {
      this.correctCount = 0;
      this.incorrectCount = 0;
      this.streakCount = 0;
    },
  };

  const fillModeConfig = {
    difficulty: "medium",
    randomSelection: true,
    showHints: true,
    instantFeedback: true,
  };

  const deviceCapabilities = {
    isMobile: window.innerWidth <= 768,
    isLandscape: window.innerWidth > window.innerHeight,
    hasTouch: "ontouchstart" in window || navigator.maxTouchPoints > 0,
    update() {
      this.isMobile = window.innerWidth <= 768;
      this.isLandscape = window.innerWidth > window.innerHeight;
    },
  };

  // ============================================
  // AIRCRAFT LIMITATIONS DATA
  // ============================================

  const limitationsCategories = {
    "Structural Limitations": {
      columns: ["Structure", "ERJ175LL", "ERJ175LR"],
      data: [
        {
          structure: "Maximum Takeoff Weight",
          erj175ll: "85,098 lbs",
          erj175lr: "85,517 lbs",
          id: "mtow",
        },
        {
          structure: "Maximum Landing Weight",
          erj175ll: "74,957 lbs",
          erj175lr: "74,957 lbs",
          id: "mlw",
        },
        {
          structure: "Maximum Zero Fuel Weight",
          erj175ll: "69,467 lbs",
          erj175lr: "69,886 lbs",
          id: "mzfw",
        },
        {
          structure: "Maximum Ramp Weight",
          erj175ll: "85,450 lbs",
          erj175lr: "85,870 lbs",
          id: "mrw",
        },
      ],
    },
    "Structural Dimensions": {
      columns: ["Structure", "Dimension"],
      data: [
        {
          structure: "Overall Length",
          dimension: "103 ft 11 in",
          id: "length",
        },
        { structure: "Wing Span", dimension: "93 ft 11 in", id: "wingspan" },
        { structure: "Tail Height", dimension: "32 ft 4 in", id: "height" },
      ],
    },
    "Max Altitude and Temp Limits": {
      columns: ["Limitation", "Value"],
      data: [
        {
          limitation: "Maximum Operating Altitude",
          value: "41,000 ft",
          id: "max_alt",
        },
        {
          limitation: "Maximum Takeoff Altitude",
          value: "10,000 ft",
          id: "to_alt",
        },
        {
          limitation: "Maximum Landing Altitude",
          value: "10,000 ft",
          id: "land_alt",
        },
        {
          limitation: "Maximum Temp, T/O & Lnd",
          value: "ISA +35°C",
          id: "max_temp",
        },
        {
          limitation: "Minimum Temp, T/O & Lnd",
          value: "-40°C",
          id: "min_temp",
        },
      ],
    },
    "Airspeed and Mach Limits": {
      columns: ["Speed", "Limit"],
      data: [
        { speed: "VMO SL-8000'", limit: "300", id: "vmo_low" },
        { speed: "VMO 10,000 to Mach Trans", limit: "320", id: "vmo_high" },
        { speed: "MMO", limit: "0.82", id: "mmo" },
        { speed: "VA", limit: "240", id: "va" },
        { speed: "VLO Ext", limit: "250", id: "vlo_ext" },
        { speed: "VLE", limit: "250", id: "vle" },
        { speed: "VTIRE", limit: "195", id: "vtire" },
      ],
    },
    "Max Flap Operating Speed": {
      columns: ["Flap", "Speed"],
      data: [
        { flap: "Flaps 1", speed: "230 KIAS", id: "flap1" },
        { flap: "Flaps 2", speed: "215 KIAS", id: "flap2" },
        { flap: "Flaps 3", speed: "200 KIAS", id: "flap3" },
        { flap: "Flaps 4", speed: "180 KIAS", id: "flap4" },
        { flap: "Flaps 5", speed: "180 KIAS", id: "flap5" },
        { flap: "Flaps Full", speed: "165 KIAS", id: "flap_full" },
      ],
    },
    "Starter Cranking Limits on Ground": {
      columns: ["Start Attempts", "Time ON", "Time OFF"],
      data: [
        {
          start_attempts: "1 & 2",
          time_on: "90 seconds",
          time_off: "10 seconds",
          id: "ground_start_12",
        },
        {
          start_attempts: "3 - 5",
          time_on: "90 seconds",
          time_off: "5 minutes",
          id: "ground_start_35",
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
          id: "flight_start_12",
        },
        {
          start_attempts: "3 - 5",
          time_on: "120 seconds",
          time_off: "5 minutes",
          id: "flight_start_35",
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
          id: "motor_1st",
        },
        {
          motoring_attempts: "2 - 5 Cycles",
          time_on: "30 seconds",
          time_off: "5 minutes",
          id: "motor_25",
        },
      ],
    },
    "APU Starter Duty Cycle": {
      columns: ["Attempt", "Time OFF"],
      data: [
        { attempt: "1st Attempt", time_off: "60 seconds", id: "apu_1st" },
        { attempt: "2nd Attempt", time_off: "60 seconds", id: "apu_2nd" },
        { attempt: "3rd Attempt", time_off: "5 minutes", id: "apu_3rd" },
      ],
    },
    "APU Operational Limits to Start": {
      columns: ["Condition", "Min", "Max"],
      data: [
        {
          condition: "Altitude",
          min: "0 ft",
          max: "30,000 ft",
          id: "apu_start_alt",
        },
        {
          condition: "Temperature",
          min: "-54°C",
          max: "ISA +35°C",
          id: "apu_start_temp",
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
          id: "apu_cont_alt",
        },
        { condition: "Gen Use", min: "0 ft", max: "33,000 ft", id: "apu_gen" },
        {
          condition: "Engine Start",
          min: "0 ft",
          max: "21,000 ft",
          id: "apu_eng_start",
        },
      ],
    },
    Fuel: {
      columns: ["Condition", "Value"],
      data: [
        { condition: "Max Imbalance", value: "794 lbs", id: "fuel_imbal" },
        { condition: "Min Fuel Tank Temp", value: "-37°C", id: "fuel_temp" },
      ],
    },
    Pressurization: {
      columns: ["Condition", "Limits"],
      data: [
        {
          condition: "Max Differential Pressure",
          limits: "8.4 PSI",
          id: "press_max",
        },
        {
          condition: "Max Differential Overpressure",
          limits: "8.8 PSI",
          id: "press_over",
        },
        {
          condition: "Max Differential Negative Pressure",
          limits: "-0.5 PSI",
          id: "press_neg",
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

  // ============================================
  // DOM ELEMENT SELECTORS
  // ============================================

  const DOMElements = {
    loadingScreen: document.getElementById("loading-screen"),
    categorySelect: document.getElementById("category-select"),
    tableContainer: document.querySelector(".table-container"),
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
    desktopControls: document.querySelector(".desktop-controls"),
    mobileModeSelect: document.getElementById("mobile-mode-select"),
    mobileFab: document.getElementById("mobile-fab"),
    mobileMenu: document.getElementById("mobile-menu"),
    mobileMenuOverlay: document.getElementById("mobile-menu-overlay"),
    container: document.querySelector(".container"),
    statsContainer: document.querySelector(".stats-container"),
  };

  // ============================================
  // UI UPDATE FUNCTIONS
  // ============================================

  const showLoadingScreen = (show) => {
    DOMElements.loadingScreen?.classList.toggle("active", show);
  };

  const updateStats = () => {
    if (DOMElements.correctCount)
      DOMElements.correctCount.textContent = appState.correctCount;
    if (DOMElements.incorrectCount)
      DOMElements.incorrectCount.textContent = appState.incorrectCount;
    if (DOMElements.streakCount)
      DOMElements.streakCount.textContent = appState.streakCount;
    if (DOMElements.accuracyRate)
      DOMElements.accuracyRate.textContent = `${appState.getAccuracy()}%`;

    const streakElement = DOMElements.streakCount?.parentElement;
    if (streakElement) {
      if (appState.streakCount >= 5) {
        streakElement.style.animation = "streak-glow 1.5s infinite";
      } else {
        streakElement.style.animation = "";
      }
    }
  };

  const updateProgress = () => {
    const isMemoryItems = appState.currentCategory === "Memory Items";
    const totalQuery = isMemoryItems
      ? ".memory-item"
      : ".limitation-cell, .fill-mode-cell";
    const completedQuery = isMemoryItems
      ? ".memory-correct, .memory-incorrect"
      : ".correct, .incorrect, .skipped";

    const totalCells =
      DOMElements.tableContainer.querySelectorAll(totalQuery).length;
    const completedCells =
      DOMElements.tableContainer.querySelectorAll(completedQuery).length;

    const progress = totalCells > 0 ? (completedCells / totalCells) * 100 : 0;

    if (DOMElements.progressFill)
      DOMElements.progressFill.style.width = `${progress}%`;
    if (DOMElements.progressText)
      DOMElements.progressText.textContent = `${Math.round(progress)}%`;

    if (progress === 100) {
      // You can add a completion celebration here
      console.log("Category complete!");
    }
  };

  const setMode = (mode) => {
    appState.currentMode = mode;
    console.log(`Mode changed to: ${mode}`);

    // Update desktop buttons
    DOMElements.desktopControls
      ?.querySelectorAll(".btn[data-mode]")
      .forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.mode === mode);
      });

    // Update mobile selector
    if (DOMElements.mobileModeSelect) DOMElements.mobileModeSelect.value = mode;

    // Handle timer visibility
    if (DOMElements.timer)
      DOMElements.timer.style.display = mode === "timer" ? "flex" : "none";
    if (mode === "timer") startTimer();
    else if (appState.timerInterval) clearInterval(appState.timerInterval);

    // Clean up old mode's UI elements
    const fillControls = document.getElementById("fill-mode-controls");
    if (fillControls) fillControls.remove();

    // Render the new mode
    if (mode === "fill") {
      FillModeManager.createFillMode();
    } else {
      populateTable();
    }
  };

  // ============================================
  // TABLE & CONTENT POPULATION
  // ============================================

  const populateTable = () => {
    if (!DOMElements.tableContainer) return;
    showLoadingScreen(true);

    const categoryData = limitationsCategories[appState.currentCategory];
    if (!categoryData) {
      console.error(`Category data not found for: ${appState.currentCategory}`);
      showLoadingScreen(false);
      return;
    }

    DOMElements.tableContainer.innerHTML = `
      <div class="table-scroll-wrapper">
        <table id="limitations-table">
          <thead id="table-head"></thead>
          <tbody id="table-body"></tbody>
        </table>
      </div>
      <div class="mobile-table-hint">
        <span>↔️ Swipe to scroll table horizontally</span>
      </div>
    `;

    // Re-query thead and tbody as they were just created
    const thead = document.getElementById("table-head");
    const tbody = document.getElementById("table-body");

    if (appState.currentCategory === "Memory Items") {
      MemoryItemsManager.createCards();
      showLoadingScreen(false);
      return;
    }

    // Populate headers
    const headerRow = document.createElement("tr");
    categoryData.columns.forEach((col) => {
      const th = document.createElement("th");
      th.textContent = col;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Populate rows
    categoryData.data.forEach((item, rowIndex) => {
      const row = document.createElement("tr");
      const keys = Object.keys(item).filter((key) => key !== "id");

      keys.forEach((key, colIndex) => {
        const cell = document.createElement("td");
        const isInteractiveCell = colIndex === keys.length - 1; // Last column is interactive

        if (isInteractiveCell && appState.currentMode !== "study") {
          cell.className = "limitation-cell hidden";
          cell.dataset.index = rowIndex;
          cell.dataset.field = key;
        } else {
          cell.textContent = item[key];
          if (isInteractiveCell) {
            cell.className = "limitation-cell";
            cell.dataset.index = rowIndex;
            cell.dataset.field = key;
          }
        }
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });

    showLoadingScreen(false);
  };

  const MemoryItemsManager = {
    createCards() {
      const categoryData = limitationsCategories["Memory Items"];
      if (!DOMElements.tableContainer || !categoryData) return;

      DOMElements.tableContainer.innerHTML =
        '<div class="memory-cards-grid"></div>';
      const grid =
        DOMElements.tableContainer.querySelector(".memory-cards-grid");

      categoryData.data.forEach((cardData, cardIndex) => {
        const card = document.createElement("div");
        card.className = "memory-card";

        let itemsHtml = "";
        cardData.items.forEach((item, itemIndex) => {
          const isHidden =
            appState.currentMode !== "study" && Math.random() > 0.5;
          if (isHidden) {
            itemsHtml += `
                        <div class="memory-item">
                            <span class="memory-item-left">${item.left}</span>
                            <span class="memory-item-dots"></span>
                            <span class="memory-item-right memory-hidden" data-card="${cardIndex}" data-item="${itemIndex}">🔒 Tap to Reveal</span>
                        </div>`;
          } else {
            itemsHtml += `
                        <div class="memory-item">
                            <span class="memory-item-left">${item.left}</span>
                            <span class="memory-item-dots"></span>
                            <span class="memory-item-right">${item.right}</span>
                        </div>`;
          }
        });

        card.innerHTML = `
                <div class="memory-condition">${cardData.condition}</div>
                <div class="memory-items">${itemsHtml}</div>`;

        grid.appendChild(card);
      });
    },

    handleMemoryClick(element) {
      if (
        appState.currentMode === "study" ||
        !element.classList.contains("memory-hidden")
      )
        return;

      const cardIndex = element.dataset.card;
      const itemIndex = element.dataset.item;
      const answer =
        limitationsCategories["Memory Items"].data[cardIndex].items[itemIndex]
          .right;

      element.textContent = answer;
      element.classList.remove("memory-hidden");
      element.classList.add("memory-correct");

      appState.correctCount++;
      appState.streakCount++;
      updateStats();
      updateProgress();
      saveProgress();
    },
  };

  const FillModeManager = {
    createFillMode() {
      if (!DOMElements.tableContainer) return;
      this.addControls();
      populateTable(); // Start with a fresh table

      const categoryData = limitationsCategories[appState.currentCategory];
      const tbody = DOMElements.tableContainer.querySelector("tbody");
      if (!categoryData || !tbody) return;

      const allCells = tbody.querySelectorAll("td");
      const fillPercentage = {
        easy: 0.25,
        medium: 0.4,
        hard: 0.6,
        expert: 0.8,
      };
      const numToFill = Math.floor(
        allCells.length * (fillPercentage[fillModeConfig.difficulty] || 0.4)
      );

      let cellsToFill = [];
      if (fillModeConfig.randomSelection) {
        cellsToFill = Array.from(allCells)
          .sort(() => 0.5 - Math.random())
          .slice(0, numToFill);
      } else {
        cellsToFill = Array.from(allCells).slice(0, numToFill);
      }

      cellsToFill.forEach((cell) => {
        const correctValue = cell.textContent;
        cell.textContent = "";
        cell.classList.add("fill-mode-cell");
        cell.innerHTML = this.createInputCell(correctValue);
      });
    },

    addControls() {
      this.removeControls(); // Clear old ones first
      const controlsPanel = document.createElement("div");
      controlsPanel.id = "fill-mode-controls";
      controlsPanel.className = "fill-mode-controls";

      controlsPanel.innerHTML = `
          <div class="difficulty-container">
            <label for="difficulty-select">Difficulty:</label>
            <div class="select-wrapper">
              <select id="difficulty-select">
                <option value="easy">Easy</option>
                <option value="medium" selected>Medium</option>
                <option value="hard">Hard</option>
                <option value="expert">Expert</option>
              </select>
              <div class="select-arrow">▼</div>
            </div>
          </div>
          <div class="fill-controls-row">
            <label><input type="checkbox" id="random-selection" ${
              fillModeConfig.randomSelection ? "checked" : ""
            }> Random</label>
            <label><input type="checkbox" id="show-hints" ${
              fillModeConfig.showHints ? "checked" : ""
            }> Hints</label>
            <label><input type="checkbox" id="instant-feedback" ${
              fillModeConfig.instantFeedback ? "checked" : ""
            }> Auto-Check</label>
            <button class="btn regenerate-btn">🎲 Regenerate</button>
          </div>
        `;
      DOMElements.statsContainer.insertAdjacentElement(
        "afterend",
        controlsPanel
      );
      document.getElementById("difficulty-select").value =
        fillModeConfig.difficulty;
    },

    removeControls() {
      const existing = document.getElementById("fill-mode-controls");
      if (existing) existing.remove();
    },

    createInputCell(correctValue) {
      return `
          <div class="input-container">
            <input type="text" class="input-cell" placeholder="Enter value..." data-correct="${correctValue}">
            <div class="action-buttons">
                ${
                  fillModeConfig.showHints
                    ? '<button class="hint-btn">💡</button>'
                    : ""
                }
                <button class="skip-btn">⏭️</button>
            </div>
          </div>
        `;
    },

    checkAnswer(input) {
      if (!input || !input.dataset.correct) return;
      const userAnswer = input.value.trim().toLowerCase();
      const correctAnswer = input.dataset.correct.trim().toLowerCase();
      const parentCell = input.closest("td");

      if (userAnswer === correctAnswer) {
        parentCell.innerHTML = input.dataset.correct;
        parentCell.classList.add("correct");
        appState.correctCount++;
        appState.streakCount++;
      } else {
        parentCell.innerHTML = `<span style="text-decoration: line-through;">${input.value}</span><br><strong>${input.dataset.correct}</strong>`;
        parentCell.classList.add("incorrect");
        appState.incorrectCount++;
        appState.streakCount = 0;
      }
      updateStats();
      updateProgress();
      saveProgress();
    },

    skipQuestion(skipBtn) {
      const input = skipBtn
        .closest(".input-container")
        .querySelector(".input-cell");
      if (!input) return;
      const parentCell = input.closest("td");
      parentCell.innerHTML = input.dataset.correct;
      parentCell.classList.add("skipped", "incorrect");

      appState.incorrectCount++; // Skipped counts as incorrect
      appState.streakCount = 0;
      updateStats();
      updateProgress();
      saveProgress();
    },
  };

  // ============================================
  // EVENT HANDLERS
  // ============================================

  const handleModeChange = (e) => {
    const mode = e.target.value || e.target.dataset.mode;
    if (mode) {
      setMode(mode);
      if (appState.mobileMenuOpen) toggleMobileMenu();
    }
  };

  const handleReset = () => {
    if (
      confirm("Are you sure you want to reset your progress for this category?")
    ) {
      appState.resetCategoryStats();
      setMode(appState.currentMode); // Re-render the current mode
      updateStats();
      updateProgress();
      saveProgress();
    }
  };

  const handleChangeCategory = () => {
    appState.currentCategory = DOMElements.categorySelect.value;
    appState.resetCategoryStats();
    setMode(appState.currentMode);
    updateStats();
    updateProgress();
    saveProgress();
  };

  const handleTableClick = (e) => {
    const target = e.target;

    // Handle limitation cell clicks in quiz mode
    if (target.matches(".limitation-cell.hidden")) {
      const categoryData = limitationsCategories[appState.currentCategory];
      const item = categoryData.data[target.dataset.index];
      target.textContent = item[target.dataset.field];
      target.classList.remove("hidden");
      target.classList.add("correct");
      appState.correctCount++;
      appState.streakCount++;
      updateStats();
      updateProgress();
      saveProgress();
    }

    // Handle memory item clicks
    if (target.matches(".memory-hidden")) {
      MemoryItemsManager.handleMemoryClick(target);
    }

    // Handle fill mode buttons
    if (target.matches(".regenerate-btn")) {
      FillModeManager.createFillMode();
    }
    if (target.matches(".skip-btn")) {
      FillModeManager.skipQuestion(target);
    }
  };

  const handleTableInput = (e) => {
    if (e.key === "Enter") {
      FillModeManager.checkAnswer(e.target);
    }
  };

  const handleTableBlur = (e) => {
    if (e.target.matches(".input-cell") && fillModeConfig.instantFeedback) {
      FillModeManager.checkAnswer(e.target);
    }
  };

  const handleFillConfigChange = (e) => {
    const target = e.target;
    if (target.id === "difficulty-select")
      fillModeConfig.difficulty = target.value;
    if (target.id === "random-selection")
      fillModeConfig.randomSelection = target.checked;
    if (target.id === "show-hints") fillModeConfig.showHints = target.checked;
    if (target.id === "instant-feedback")
      fillModeConfig.instantFeedback = target.checked;

    if (appState.currentMode === "fill") {
      FillModeManager.createFillMode();
    }
    saveProgress();
  };

  const toggleMobileMenu = () => {
    appState.mobileMenuOpen = !appState.mobileMenuOpen;
    DOMElements.mobileMenu.classList.toggle("active", appState.mobileMenuOpen);
    DOMElements.mobileMenuOverlay.classList.toggle(
      "active",
      appState.mobileMenuOpen
    );
  };

  const startTimer = () => {
    clearInterval(appState.timerInterval);
    appState.timeRemaining = 300; // 5 minutes

    appState.timerInterval = setInterval(() => {
      appState.timeRemaining--;
      const minutes = Math.floor(appState.timeRemaining / 60);
      const seconds = appState.timeRemaining % 60;
      DOMElements.timerText.textContent = `Time: ${String(minutes).padStart(
        2,
        "0"
      )}:${String(seconds).padStart(2, "0")}`;

      if (appState.timeRemaining <= 0) {
        clearInterval(appState.timerInterval);
        alert("Time's up!");
      }
    }, 1000);
  };

  // ============================================
  // LOCAL STORAGE
  // ============================================

  const saveProgress = () => {
    const dataToSave = {
      appState: {
        currentCategory: appState.currentCategory,
        currentMode: appState.currentMode,
        correctCount: appState.correctCount,
        incorrectCount: appState.incorrectCount,
        bestStreak: appState.bestStreak,
      },
      fillModeConfig,
    };
    localStorage.setItem("aircraftLimitsProgress", JSON.stringify(dataToSave));
  };

  const loadProgress = () => {
    const savedData = localStorage.getItem("aircraftLimitsProgress");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      if (parsedData.appState) {
        appState.currentCategory =
          parsedData.appState.currentCategory || "Structural Limitations";
        appState.currentMode = parsedData.appState.currentMode || "study";
        appState.correctCount = parsedData.appState.correctCount || 0;
        appState.incorrectCount = parsedData.appState.incorrectCount || 0;
        appState.bestStreak = parsedData.appState.bestStreak || 0;
      }
      if (parsedData.fillModeConfig) {
        Object.assign(fillModeConfig, parsedData.fillModeConfig);
      }
    }
  };

  // ============================================
  // INITIALIZATION
  // ============================================

  const initializeApp = () => {
    loadProgress();

    // Set initial UI states from loaded progress
    if (DOMElements.categorySelect)
      DOMElements.categorySelect.value = appState.currentCategory;

    // Set up all event listeners
    DOMElements.categorySelect?.addEventListener(
      "change",
      handleChangeCategory
    );
    DOMElements.desktopControls?.addEventListener("click", (e) => {
      if (e.target.dataset.mode) handleModeChange(e);
      if (e.target.matches(".btn-reset")) handleReset();
    });
    DOMElements.mobileModeSelect?.addEventListener("change", handleModeChange);
    document
      .getElementById("mobile-reset-main")
      ?.addEventListener("click", handleReset);
    DOMElements.mobileFab?.addEventListener("click", toggleMobileMenu);
    DOMElements.mobileMenuOverlay?.addEventListener("click", toggleMobileMenu);
    document
      .getElementById("close-menu-btn")
      ?.addEventListener("click", toggleMobileMenu);
    DOMElements.mobileMenu?.addEventListener("click", (e) => {
      if (e.target.dataset.mode) handleModeChange(e);
      if (e.target.matches(".reset-btn")) handleReset();
    });

    DOMElements.tableContainer?.addEventListener("click", handleTableClick);
    DOMElements.tableContainer?.addEventListener("keyup", handleTableInput);
    DOMElements.tableContainer?.addEventListener("focusout", handleTableBlur);
    DOMElements.container?.addEventListener("change", (e) => {
      if (e.target.closest("#fill-mode-controls")) {
        handleFillConfigChange(e);
      }
    });
    DOMElements.container?.addEventListener("click", (e) => {
      if (e.target.closest(".regenerate-btn")) {
        FillModeManager.createFillMode();
      }
    });

    // Initial render
    setMode(appState.currentMode);
    updateStats();

    console.log("Aircraft Limitations Study Tool Initialized.");
  };

  initializeApp();
});
