const limitationsCategories = {
  "Structural Limitations": {
    columns: ["Structure", "ERJ175LL", "ERJ175LR"],
    data: [
      {
        structure: "Maximum Takeoff Weight",
        erj175ll: "85,098 lbs",
        erj175lr: "85,517 lbs",
      },
      {
        structure: "Maximum Landing Weight",
        erj175ll: "74,957 lbs",
        erj175lr: "74,957 lbs",
      },
      {
        structure: "Maximum Zero Fuel Weight",
        erj175ll: "69,467 lbs",
        erj175lr: "69,886 lbs",
      },
      {
        structure: "Maximum Ramp Weight",
        erj175ll: "85,450 lbs",
        erj175lr: "85,870 lbs",
      },
      {
        structure: "Maximum Fuel Capacity",
        erj175ll: "20,935 gal",
        erj175lr: "20,935 gal",
      },
    ],
  },
  "Structural Dimensions": {
    columns: ["Structure", "Dimension"],
    data: [
      { structure: "Overall Length", dimension: "103 ft 11 in" },
      { structure: "Wing Span", dimension: "93 ft 11 in" },
      { structure: "Tail Height", dimension: "32 ft 4 in" },
      { structure: "Tail Width", dimension: "32 ft 10 in" },
      { structure: "Ground to Winglet", dimension: "15 ft 12 in" },
    ],
  },
  "Max Altitude and Temp Limits": {
    columns: ["Limitation", "Value"],
    data: [
      { limitation: "Maximum Operating Altitude", value: "41,000 ft" },
      { limitation: "Maximum Takeoff Altitude", value: "10,000 ft" },
      { limitation: "Maximum Landing Altitude", value: "10,000 ft" },
      { limitation: "Maximum Temp, T/O & Lnd", value: "ISA +35°C" },
      { limitation: "Minimum Temp, T/O & Lnd", value: "-40°C" },
      { limitation: "Rwy Slope", value: "+/- 2%" },
      { limitation: "Max. Tailwind", value: "15kts" },
      { limitation: "Max. Single Pack Ops", value: "31,000ft" },
    ],
  },
  "Airspeed and Mach Limits": {
    columns: ["Speed", "Limit"],
    data: [
      { speed: "VMO SL-8000'", limit: "300" },
      { speed: "VMO 10,000 to Mach Trans", limit: "320" },
      { speed: "MMO", limit: "0.82" },
      { speed: "VA", limit: "240" },
      { speed: "VLO Ext", limit: "250" },
      { speed: "VLE Ret", limit: "250" },
      { speed: "VLE", limit: "250" },
      { speed: "VTIRE", limit: "195" },
      { speed: "VRat Deploy Max", limit: "Vmo/Mmo" },
      { speed: "Vmin (elec power)", limit: "130" },
      { speed: "VB <10,000", limit: "250" },
      { speed: "VB >10,000", limit: "270/0.76 (lower)" },
      { speed: "VWIPER ops max (SW)", limit: "250" },
      { speed: "VWINDOW", limit: "160" },
    ],
  },
  "Max Flap Operating Speed": {
    columns: ["Flap", "Speed"],
    data: [
      { flap: "Flaps 1", speed: "230 KIAS" },
      { flap: "Flaps 2", speed: "215 KIAS" },
      { flap: "Flaps 3", speed: "200 KIAS" },
      { flap: "Flaps 4", speed: "180 KIAS" },
      { flap: "Flaps 5", speed: "180 KIAS" },
      { flap: "Flaps Full", speed: "165 KIAS" },
      { flap: "Max Alt Flaps Ext", speed: "20,000ft" },
    ],
  },
  "Starter Cranking Limits on Ground": {
    columns: ["Start Attempts", "Time ON", "Time OFF"],
    data: [
      {
        start_attempts: "1 & 2",
        time_on: "90 seconds",
        time_off: "10 seconds",
      },
      {
        start_attempts: "3 - 5",
        time_on: "90 seconds",
        time_off: "5 minutes",
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
      },
      {
        start_attempts: "3 - 5",
        time_on: "120 seconds",
        time_off: "5 minutes",
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
        motoring_attempts: "2 - 5 Cycles",
        time_on: "30 seconds",
        time_off: "5 minutes",
      },
    ],
  },
  "APU Starter Duty Cycle": {
    columns: ["Attempt", "Time OFF"],
    data: [
      { attempt: "1st Attempt", time_off: "60 seconds" },
      { attempt: "2nd Attempt", time_off: "60 seconds" },
      { attempt: "3rd Attempt", time_off: "5 minutes" },
    ],
  },
  "APU Operational Limits to Start": {
    columns: ["Condition", "Min", "Max"],
    data: [
      { condition: "Altitude", min: "0 ft", max: "30,000 ft" },
      { condition: "Temperature", min: "-54°C", max: "ISA +35°C" },
    ],
  },
  "APU Operational Limits for Cont Operation": {
    columns: ["Condition", "Min", "Max"],
    data: [
      { condition: "Altitude", min: "0 ft", max: "33,000 ft" },
      { condition: "Temperature", min: "-54°C", max: "ISA +35°C" },
      { condition: "Gen Use", min: "0 ft", max: "33,000 ft" },
      { condition: "Engine Start", min: "0 ft", max: "21,000 ft" },
      { condition: "Bleed Use", min: "0 ft", max: "15,000 ft" },
    ],
  },
  Fuel: {
    columns: ["Condition", "Value"],
    data: [
      { condition: "Max. Fuel Capacity", value: "20,935 lbs" },
      { condition: "Max Imbalance", value: "794 lbs" },
      { condition: "Min Fuel Tank Temp", value: "-37°C" },
    ],
  },
  Pressurization: {
    columns: ["Condition", "Limits"],
    data: [
      { condition: "Max Differential Pressure", limits: "8.4 PSI" },
      { condition: "Max Differential Overpressure", limits: "8.8 PSI" },
      { condition: "Max Differential Negative Pressure", limits: "-0.5 PSI" },
      {
        condition: "Max Differential Pressure for T/O & Ldg",
        limits: "0.2 PSI",
      },
    ],
  },
  "Memory Items": {
    columns: ["cards"],
    data: [
      {
        condition: "Smoke Evacuation",
        items: [
          "Oxygen Masks ....... Don, Emer",
          "Crew Communication ....... Establish",
          "Pressurization Dump ....... Push In",
        ],
      },
      {
        condition: "Smoke/Fire/Fumes",
        items: [
          "Oxygen Masks ....... Don, 100%",
          "Crew Communication ....... Establish",
        ],
      },
      {
        condition: "Cabin Altitude Hi",
        items: [
          "Oxygen Masks ....... Don, 100%",
          "Crew Communication ....... Establish",
        ],
      },
      {
        condition: "Jammed Control Column - Pitch",
        items: ["Elevator Disconnect Handle ....... Pull"],
      },
      {
        condition: "Jammed Control Column - Roll",
        items: ["Aileron Disconnect Handle ....... Pull"],
      },
      {
        condition: "Pitch Trim Runaway",
        items: [
          "AP / Trim Disc Button ....... Press and Hold",
          "Pitch Trim Sys 1 & 2 Cutout Buttons ....... Push In",
        ],
      },
      {
        condition: "Roll or Yaw Trim Runaway",
        items: ["AP / Trim Disc Button ....... Press and Hold"],
      },
      {
        condition: "Sterring Runaway",
        items: [
          "Steer Disc Switch ....... Press",
          "Steer the airplane using differential braking and rudder",
        ],
      },
      {
        condition: "Batt 1 (2) Overtemp",
        items: ["Associated Battery ....... Off"],
      },
      {
        condition: "Engine Abnormal Start",
        items: ["Affected Engine Start/Stop Selector ....... Stop"],
      },
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

// Enhanced answer checking with smart matching
function smartAnswerCheck(userAnswer, correctAnswer) {
  const normalizeAnswer = (answer) => {
    return answer
      .toLowerCase()
      .trim()
      .replace(/[^\w\s\.\-]/g, "") // Remove special chars except dots and dashes
      .replace(/\s+/g, " ") // Normalize whitespace
      .replace(/\bfeet\b|\bft\b/g, "ft") // Normalize feet
      .replace(/\binches\b|\bin\b/g, "in") // Normalize inches
      .replace(/\bpounds\b|\blbs\b|\bpound\b/g, "lbs") // Normalize weight
      .replace(/\bgallons\b|\bgal\b/g, "gal") // Normalize gallons
      .replace(/\bknots\b|\bkts\b|\bkt\b/g, "kts") // Normalize knots
      .replace(/\bdegrees\b|\bdeg\b|°/g, "°") // Normalize degrees
      .replace(/\bcelsius\b/g, "c") // Normalize celsius
      .replace(/\bmaximum\b|\bmax\b/g, "max") // Normalize maximum
      .replace(/\bminimum\b|\bmin\b/g, "min") // Normalize minimum
      .replace(/\boperating\b|\bops\b/g, "operating"); // Normalize operating
  };

  const userNorm = normalizeAnswer(userAnswer);
  const correctNorm = normalizeAnswer(correctAnswer);

  // Exact match
  if (userNorm === correctNorm) return { isCorrect: true, score: 100 };

  // Extract numeric values and units for comparison
  const extractNumbers = (str) => {
    const matches = str.match(/(\d+(?:,\d{3})*(?:\.\d+)?)/g);
    return matches ? matches.map((m) => parseFloat(m.replace(/,/g, ""))) : [];
  };

  const userNumbers = extractNumbers(userAnswer);
  const correctNumbers = extractNumbers(correctAnswer);

  // Check if numbers match (allowing for different formatting)
  if (userNumbers.length === correctNumbers.length && userNumbers.length > 0) {
    const numbersMatch = userNumbers.every(
      (num, i) => Math.abs(num - correctNumbers[i]) < 0.001
    );
    if (numbersMatch) {
      // Check if units are similar
      const userUnits = userNorm.replace(/[\d\s,\.]/g, "");
      const correctUnits = correctNorm.replace(/[\d\s,\.]/g, "");
      if (
        userUnits === correctUnits ||
        userUnits.includes(correctUnits) ||
        correctUnits.includes(userUnits)
      ) {
        return { isCorrect: true, score: 95 };
      }
    }
  }

  // Partial credit for close matches
  if (userNorm.includes(correctNorm) || correctNorm.includes(userNorm)) {
    return { isCorrect: true, score: 80 };
  }

  // Check for common abbreviations or alternative formats
  const commonAlternatives = {
    "isa +35°c": ["isa+35°c", "isa+35", "isa + 35", "isa plus 35"],
    "-40°c": ["-40c", "-40 c", "minus 40", "negative 40"],
    "+/- 2%": ["±2%", "± 2%", "plus minus 2%", "+- 2%", "plus or minus 2%"],
    "15kts": ["15 kts", "15 knots", "fifteen knots"],
    "31,000ft": [
      "31000ft",
      "31,000 ft",
      "31000 ft",
      "thirty one thousand feet",
    ],
  };

  for (const [standard, alternatives] of Object.entries(commonAlternatives)) {
    if (normalizeAnswer(standard) === correctNorm) {
      if (alternatives.some((alt) => normalizeAnswer(alt) === userNorm)) {
        return { isCorrect: true, score: 90 };
      }
    }
  }

  return { isCorrect: false, score: 0 };
}

// Generate helpful placeholder text
function generatePlaceholder(correctValue) {
  const value = correctValue.toLowerCase();

  if (value.includes("kias") || value.includes("knots")) {
    return "Enter speed (e.g., 250 KIAS)";
  }
  if (value.includes("°c")) {
    return "Enter temperature (e.g., -40°C)";
  }
  if (value.includes("lbs")) {
    return "Enter weight (e.g., 85,098 lbs)";
  }
  if (value.includes("ft")) {
    return "Enter altitude/distance (e.g., 41,000 ft)";
  }
  if (value.includes("%")) {
    return "Enter percentage (e.g., +/- 2%)";
  }
  if (value.includes("gal")) {
    return "Enter volume (e.g., 20,935 gal)";
  }
  if (value.includes("psi")) {
    return "Enter pressure (e.g., 8.4 PSI)";
  }

  return "Enter value...";
}

// Generate autocomplete suggestions
function generateSuggestions(correctValue) {
  const suggestions = [];
  const value = correctValue.toLowerCase();

  // Extract numbers from correct value
  const numbers = correctValue.match(/\d+/g);
  if (numbers) {
    const mainNumber = numbers[0];

    // Generate variations
    if (value.includes("ft")) {
      suggestions.push(
        `${mainNumber} ft`,
        `${mainNumber} feet`,
        `${mainNumber}ft`
      );
    }
    if (value.includes("lbs")) {
      suggestions.push(
        `${mainNumber} lbs`,
        `${mainNumber} pounds`,
        `${mainNumber}lbs`
      );
    }
    if (value.includes("kias")) {
      suggestions.push(
        `${mainNumber} KIAS`,
        `${mainNumber} knots`,
        `${mainNumber}kts`
      );
    }
    if (value.includes("°c")) {
      suggestions.push(
        `${mainNumber}°C`,
        `${mainNumber} degrees`,
        `${mainNumber}°`
      );
    }
  }

  return suggestions;
}

// Calculate string similarity
function calculateSimilarity(str1, str2) {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;

  if (longer.length === 0) return 1.0;

  const distance = levenshteinDistance(longer, shorter);
  return (longer.length - distance) / longer.length;
}

// Levenshtein distance calculation
function levenshteinDistance(str1, str2) {
  const matrix = [];

  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[str2.length][str1.length];
}

// Handle real-time input changes
function handleInputChange(input) {
  const userAnswer = input.value;
  const correctAnswer = input.getAttribute("data-correct");
  const indicator = input.parentElement.querySelector(".validation-indicator");

  if (!indicator) return; // Safety check

  if (userAnswer.length === 0) {
    indicator.className = "validation-indicator";
    indicator.innerHTML = "";
    return;
  }

  const result = smartAnswerCheck(userAnswer, correctAnswer);

  if (result.isCorrect) {
    if (result.score === 100) {
      indicator.className = "validation-indicator perfect";
      indicator.innerHTML = "✓";
    } else if (result.score >= 90) {
      indicator.className = "validation-indicator good";
      indicator.innerHTML = "✓";
    } else {
      indicator.className = "validation-indicator close";
      indicator.innerHTML = "~";
    }
  } else {
    // Show partial feedback
    if (userAnswer.length > 2) {
      const similarity = calculateSimilarity(userAnswer, correctAnswer);
      if (similarity > 0.5) {
        indicator.className = "validation-indicator partial";
        indicator.innerHTML = "?";
      } else {
        indicator.className = "validation-indicator wrong";
        indicator.innerHTML = "✗";
      }
    } else {
      indicator.className = "validation-indicator";
      indicator.innerHTML = "";
    }
  }
}

// Handle input submission
function handleInputSubmit(input) {
  const userAnswer = input.value.trim();
  const correctAnswer = input.getAttribute("data-correct");
  const cell = input.closest("td");

  if (!cell || userAnswer === "") return;

  const result = smartAnswerCheck(userAnswer, correctAnswer);

  // Remove any existing feedback
  const existingFeedback = cell.querySelector(".answer-feedback");
  if (existingFeedback) {
    existingFeedback.remove();
  }

  if (result.isCorrect) {
    cell.classList.add("correct");
    cell.classList.remove("incorrect", "partial");

    // Show the correct answer and score
    const feedback = document.createElement("div");
    feedback.className = "answer-feedback";
    feedback.innerHTML = `
      <div class="user-answer">${userAnswer}</div>
      <div class="score">Score: ${result.score}%</div>
    `;

    input.style.display = "none";
    input.parentElement.appendChild(feedback);

    correctCount++;
    streakCount++;

    // Bonus points for perfect answers
    if (result.score === 100) {
      showBonusAnimation(cell);
    }
  } else {
    cell.classList.add("incorrect");
    cell.classList.remove("correct", "partial");

    // Show what they entered vs correct answer
    const feedback = document.createElement("div");
    feedback.className = "answer-feedback incorrect";
    feedback.innerHTML = `
      <div class="user-answer wrong">Your answer: ${userAnswer}</div>
      <div class="correct-answer">Correct: ${correctAnswer}</div>
    `;

    input.style.display = "none";
    input.parentElement.appendChild(feedback);

    incorrectCount++;
    streakCount = 0;
  }

  updateStats();
  updateProgress();
  saveProgress();
}

// Generate progressive hints
function generateHints(correctValue) {
  const hints = [];
  const value = correctValue.toLowerCase();

  // First hint: general category
  if (value.includes("ft") || value.includes("feet")) {
    hints.push("This is a measurement of distance or altitude.");
  } else if (value.includes("lbs") || value.includes("pounds")) {
    hints.push("This is a weight measurement.");
  } else if (value.includes("°c") || value.includes("temperature")) {
    hints.push("This is a temperature measurement.");
  } else if (value.includes("kias") || value.includes("knots")) {
    hints.push("This is a speed measurement.");
  } else if (value.includes("%")) {
    hints.push("This is a percentage value.");
  } else {
    hints.push("Think about the units this measurement would use.");
  }

  // Second hint: number range
  const numbers = correctValue.match(/\d+/g);
  if (numbers && numbers.length > 0) {
    const mainNumber = parseInt(numbers[0]);
    if (mainNumber < 100) {
      hints.push("The number is less than 100.");
    } else if (mainNumber < 1000) {
      hints.push("The number is between 100 and 1,000.");
    } else if (mainNumber < 10000) {
      hints.push("The number is between 1,000 and 10,000.");
    } else {
      hints.push("The number is greater than 10,000.");
    }
  }

  // Third hint: partial reveal
  if (correctValue.length > 3) {
    const masked =
      correctValue.substring(0, 2) +
      "..." +
      correctValue.substring(correctValue.length - 2);
    hints.push(`The answer starts and ends like this: ${masked}`);
  }

  return hints;
}

// Show hint for difficult questions
function showHint(input, correctValue) {
  const hints = generateHints(correctValue);
  const hintLevel = parseInt(input.getAttribute("data-hint-level") || "0");
  const hintIndex = Math.min(hintLevel, hints.length - 1);

  // Create hint popup
  const hintPopup = document.createElement("div");
  hintPopup.className = "hint-popup";
  hintPopup.innerHTML = `
    <div class="hint-content">
      <div class="hint-title">Hint ${hintIndex + 1}:</div>
      <div class="hint-text">${hints[hintIndex]}</div>
      <button class="hint-close" onclick="this.parentElement.parentElement.remove()">Got it!</button>
    </div>
  `;

  document.body.appendChild(hintPopup);

  // Position hint near input
  const rect = input.getBoundingClientRect();
  hintPopup.style.position = "fixed";
  hintPopup.style.top = rect.bottom + 5 + "px";
  hintPopup.style.left = rect.left + "px";
  hintPopup.style.zIndex = "1000";

  // Increment hint level
  input.setAttribute("data-hint-level", (hintLevel + 1).toString());

  // Auto-close after 5 seconds
  setTimeout(() => {
    if (hintPopup.parentElement) {
      hintPopup.remove();
    }
  }, 5000);
}

// Show bonus animation for perfect answers
function showBonusAnimation(cell) {
  const bonus = document.createElement("div");
  bonus.className = "bonus-animation";
  bonus.textContent = "+PERFECT!";
  cell.appendChild(bonus);

  setTimeout(() => {
    bonus.remove();
  }, 2000);
}

// Enhanced fill-in mode with multiple input types
function createEnhancedFillInMode() {
  console.log("Starting enhanced fill-in mode...");

  // Get the current category data
  const category = limitationsCategories[currentCategory];
  if (!category) {
    console.error("No category found:", currentCategory);
    return;
  }

  console.log("Category data:", category);

  // Clear existing table and rebuild for fill mode
  const tbody = document.getElementById("table-body");
  tbody.innerHTML = "";

  // Rebuild table with input fields
  category.data.forEach((item, rowIndex) => {
    const row = document.createElement("tr");
    const keys = Object.keys(item);

    keys.forEach((key, colIndex) => {
      const cell = document.createElement("td");

      // First column(s) show the question/label, last column(s) get input fields
      if (
        colIndex === keys.length - 1 ||
        (keys.length === 2 && colIndex === 1)
      ) {
        // This is the answer cell - create input
        const correctValue = item[key];

        // Create input container
        const inputContainer = document.createElement("div");
        inputContainer.className = "input-container";

        // Create enhanced text input
        const input = document.createElement("input");
        input.type = "text";
        input.className = "enhanced-input-cell";
        input.setAttribute("data-correct", correctValue);
        input.setAttribute("data-index", rowIndex.toString());
        input.setAttribute("data-field", key);

        // Set placeholder with hints
        input.placeholder = generatePlaceholder(correctValue);

        // Add autocomplete suggestions
        input.setAttribute("list", `suggestions-${rowIndex}-${key}`);
        const datalist = document.createElement("datalist");
        datalist.id = `suggestions-${rowIndex}-${key}`;

        const suggestions = generateSuggestions(correctValue);
        suggestions.forEach((suggestion) => {
          const option = document.createElement("option");
          option.value = suggestion;
          datalist.appendChild(option);
        });

        document.body.appendChild(datalist);

        // Enhanced event handlers
        input.addEventListener("input", (e) => {
          handleInputChange(e.target);
        });

        input.addEventListener("blur", (e) => {
          handleInputSubmit(e.target);
        });

        input.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            handleInputSubmit(e.target);
          }
        });

        // Add hint button
        const hintBtn = document.createElement("button");
        hintBtn.className = "hint-btn";
        hintBtn.innerHTML = "💡";
        hintBtn.title = "Get a hint";
        hintBtn.onclick = (e) => {
          e.stopPropagation();
          showHint(input, correctValue);
        };

        // Add validation indicator
        const indicator = document.createElement("div");
        indicator.className = "validation-indicator";

        inputContainer.appendChild(input);
        inputContainer.appendChild(hintBtn);
        inputContainer.appendChild(indicator);

        cell.appendChild(inputContainer);
        cell.classList.add("fill-mode-cell");
      } else {
        // This is a label cell - show the question/prompt
        cell.textContent = item[key];
        cell.classList.add("fill-mode-label");
      }

      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });

  console.log("Enhanced fill-in mode setup complete!");
}

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

  if (currentCategory === "Memory Items") {
    populateMemoryItems();
    return;
  }

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
  }
}

function populateMemoryItems() {
  const category = limitationsCategories[currentCategory];
  const container = document.querySelector(".table-container");

  container.innerHTML = "";

  const cardsGrid = document.createElement("div");
  cardsGrid.className = "memory-cards-grid";

  category.data.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "memory-card";

    const condition = document.createElement("div");
    condition.className = "memory-condition";
    condition.textContent = item.condition;

    const itemsList = document.createElement("div");
    itemsList.className = "memory-items";

    item.items.forEach((memoryItem, itemIndex) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "memory-item";

      if (currentMode === "study") {
        const parts = memoryItem.split(" ....... ");
        const leftSpan = document.createElement("span");
        leftSpan.className = "memory-item-left";
        leftSpan.textContent = parts[0];

        const dotsSpan = document.createElement("span");
        dotsSpan.className = "memory-item-dots";

        const rightSpan = document.createElement("span");
        rightSpan.className = "memory-item-right";
        rightSpan.textContent = parts[1] || "";

        itemDiv.appendChild(leftSpan);
        itemDiv.appendChild(dotsSpan);
        itemDiv.appendChild(rightSpan);
      } else if (currentMode === "quiz") {
        if (Math.random() < 0.6) {
          const parts = memoryItem.split(" ....... ");
          const leftSpan = document.createElement("span");
          leftSpan.className = "memory-item-left";
          leftSpan.textContent = parts[0];

          const dotsSpan = document.createElement("span");
          dotsSpan.className = "memory-item-dots";

          const rightSpan = document.createElement("span");
          rightSpan.className = "memory-item-right";
          rightSpan.textContent = parts[1] || "";

          itemDiv.appendChild(leftSpan);
          itemDiv.appendChild(dotsSpan);
          itemDiv.appendChild(rightSpan);
        } else {
          itemDiv.className += " memory-hidden";
          itemDiv.setAttribute("data-card", index);
          itemDiv.setAttribute("data-item", itemIndex);
          itemDiv.setAttribute("data-answer", memoryItem);
          itemDiv.textContent = "[CLASSIFIED]";
          itemDiv.onclick = () => handleMemoryClick(itemDiv);
        }
      } else if (currentMode === "fill") {
        const parts = memoryItem.split(" ....... ");
        const leftSpan = document.createElement("span");
        leftSpan.className = "memory-item-left";
        leftSpan.textContent = parts[0];

        const dotsSpan = document.createElement("span");
        dotsSpan.className = "memory-item-dots";

        const input = document.createElement("input");
        input.type = "text";
        input.className = "memory-input";
        input.placeholder = "Enter action...";
        input.setAttribute("data-answer", parts[1] || "");
        input.addEventListener("blur", () => checkMemoryAnswer(input));
        input.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            checkMemoryAnswer(input);
          }
        });

        itemDiv.appendChild(leftSpan);
        itemDiv.appendChild(dotsSpan);
        itemDiv.appendChild(input);
      }

      itemsList.appendChild(itemDiv);
    });

    card.appendChild(condition);
    card.appendChild(itemsList);
    cardsGrid.appendChild(card);
  });

  container.appendChild(cardsGrid);
}

function handleMemoryClick(element) {
  if (currentMode !== "quiz") return;

  if (element.classList.contains("memory-hidden")) {
    const answer = element.getAttribute("data-answer");
    element.textContent = answer;
    element.classList.remove("memory-hidden");
    element.classList.add("memory-correct");
    correctCount++;
    streakCount++;
    updateStats();
    updateProgress();
  }
}

function checkMemoryAnswer(input) {
  const correctAnswer = input.getAttribute("data-answer").toLowerCase();
  const userAnswer = input.value.toLowerCase().trim();

  if (userAnswer === correctAnswer || correctAnswer.includes(userAnswer)) {
    input.parentElement.classList.add("memory-correct");
    correctCount++;
    streakCount++;
  } else if (userAnswer !== "") {
    input.parentElement.classList.add("memory-incorrect");
    incorrectCount++;
    streakCount = 0;
  }
  updateStats();
  updateProgress();
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

function setMode(mode) {
  currentMode = mode;

  // Clear any existing timers
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  // Update active button
  document
    .querySelectorAll(".btn")
    .forEach((btn) => btn.classList.remove("active"));
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((btn) => {
    if (btn.onclick && btn.onclick.toString().includes(`'${mode}'`)) {
      btn.classList.add("active");
    }
  });

  // Handle timer mode
  if (mode === "timer") {
    startTimer();
    document.getElementById("timer").style.display = "block";
  } else {
    document.getElementById("timer").style.display = "none";
  }

  // Call the appropriate mode function
  if (mode === "fill") {
    console.log("Setting fill mode...");
    createEnhancedFillInMode();
  } else {
    // For other modes, use the regular table population
    populateTable();
  }

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
  let totalCells, completedCells;

  if (currentCategory === "Memory Items") {
    totalCells = document.querySelectorAll(".memory-item").length;
    completedCells = document.querySelectorAll(
      ".memory-correct, .memory-incorrect"
    ).length;
  } else {
    totalCells = document.querySelectorAll(
      ".limitation-cell, .fill-mode-cell"
    ).length;
    completedCells = document.querySelectorAll(
      ".limitation-cell.correct, .limitation-cell.incorrect, .fill-mode-cell.correct, .fill-mode-cell.incorrect"
    ).length;
  }

  const progress = totalCells > 0 ? (completedCells / totalCells) * 100 : 0;
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
