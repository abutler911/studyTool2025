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

// Enhanced fill-in-the-blank configuration
let fillModeConfig = {
  difficulty: "medium",
  randomSelection: true,
  fillPercentage: 50,
  showHints: true,
  instantFeedback: true,
  adaptiveDifficulty: false,
};

// Performance tracking
let performanceTracker = {
  totalAttempts: 0,
  correctAnswers: 0,
  averageHintsUsed: 0,
  averageTimePerQuestion: 0,
};

let hasShownFillModeHelp = false;

// Enhanced answer checking with smart matching
function smartAnswerCheck(userAnswer, correctAnswer) {
  const normalizeAnswer = (answer) => {
    return answer
      .toLowerCase()
      .trim()
      .replace(/[^\w\s\.\-]/g, "")
      .replace(/\s+/g, " ")
      .replace(/\bfeet\b|\bft\b/g, "ft")
      .replace(/\binches\b|\bin\b/g, "in")
      .replace(/\bpounds\b|\blbs\b|\bpound\b/g, "lbs")
      .replace(/\bgallons\b|\bgal\b/g, "gal")
      .replace(/\bknots\b|\bkts\b|\bkt\b/g, "kts")
      .replace(/\bdegrees\b|\bdeg\b|°/g, "°")
      .replace(/\bcelsius\b/g, "c")
      .replace(/\bmaximum\b|\bmax\b/g, "max")
      .replace(/\bminimum\b|\bmin\b/g, "min")
      .replace(/\boperating\b|\bops\b/g, "operating");
  };

  const userNorm = normalizeAnswer(userAnswer);
  const correctNorm = normalizeAnswer(correctAnswer);

  if (userNorm === correctNorm) return { isCorrect: true, score: 100 };

  const extractNumbers = (str) => {
    const matches = str.match(/(\d+(?:,\d{3})*(?:\.\d+)?)/g);
    return matches ? matches.map((m) => parseFloat(m.replace(/,/g, ""))) : [];
  };

  const userNumbers = extractNumbers(userAnswer);
  const correctNumbers = extractNumbers(correctAnswer);

  if (userNumbers.length === correctNumbers.length && userNumbers.length > 0) {
    const numbersMatch = userNumbers.every(
      (num, i) => Math.abs(num - correctNumbers[i]) < 0.001
    );
    if (numbersMatch) {
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

  if (userNorm.includes(correctNorm) || correctNorm.includes(userNorm)) {
    return { isCorrect: true, score: 80 };
  }

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

// Enhanced fill-in mode with random selection and difficulty levels
function createEnhancedFillInMode() {
  console.log("Starting enhanced fill-in mode with random selection...");

  const category = limitationsCategories[currentCategory];
  if (!category) {
    console.error("No category found:", currentCategory);
    return;
  }

  addDifficultySelector();

  const tbody = document.getElementById("table-body");
  tbody.innerHTML = "";

  const fillItems = selectRandomFillItems(category.data);

  category.data.forEach((item, rowIndex) => {
    const row = document.createElement("tr");
    const keys = Object.keys(item);

    keys.forEach((key, colIndex) => {
      const cell = document.createElement("td");

      const shouldBeFillIn =
        fillItems.includes(rowIndex) &&
        (colIndex === keys.length - 1 || (keys.length === 2 && colIndex === 1));

      if (shouldBeFillIn) {
        const correctValue = item[key];
        createAdvancedInputCell(cell, correctValue, rowIndex, key);
        cell.classList.add("fill-mode-cell");
      } else {
        cell.textContent = item[key];
        cell.classList.add("fill-mode-label");
      }

      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });

  addFillModeControls();

  console.log(
    `Enhanced fill-in mode setup complete! ${fillItems.length} items selected for fill-in.`
  );
}

// Select random items for fill-in-the-blank based on difficulty
function selectRandomFillItems(data) {
  const totalItems = data.length;
  let numberOfFills;

  switch (fillModeConfig.difficulty) {
    case "easy":
      numberOfFills = Math.ceil(totalItems * 0.3);
      break;
    case "medium":
      numberOfFills = Math.ceil(totalItems * 0.5);
      break;
    case "hard":
      numberOfFills = Math.ceil(totalItems * 0.7);
      break;
    case "expert":
      numberOfFills = Math.ceil(totalItems * 0.9);
      break;
    default:
      numberOfFills = Math.ceil(
        totalItems * (fillModeConfig.fillPercentage / 100)
      );
  }

  if (!fillModeConfig.randomSelection) {
    return Array.from({ length: numberOfFills }, (_, i) => i);
  }

  const weights = calculateItemWeights(data);
  const selectedItems = weightedRandomSelection(
    totalItems,
    numberOfFills,
    weights
  );

  return selectedItems.sort((a, b) => a - b);
}

// Calculate weights for items based on difficulty
function calculateItemWeights(data) {
  return data.map((item, index) => {
    const values = Object.values(item);
    let difficulty = 1;

    values.forEach((value) => {
      const str = value.toString();

      if (str.includes("°C") || str.includes("°F")) difficulty += 1;
      if (str.includes("±") || str.includes("+/-")) difficulty += 1;
      if (str.includes(",")) difficulty += 0.5;
      if (str.match(/\d+\.\d+/)) difficulty += 0.5;
      if (str.length > 10) difficulty += 0.5;
      if (str.includes("ISA")) difficulty += 1;
    });

    return difficulty;
  });
}

// Weighted random selection algorithm
function weightedRandomSelection(totalItems, numberOfFills, weights) {
  const selected = new Set();
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);

  while (selected.size < numberOfFills && selected.size < totalItems) {
    let random = Math.random() * totalWeight;
    let weightSum = 0;

    for (let i = 0; i < weights.length; i++) {
      weightSum += weights[i];
      if (random <= weightSum && !selected.has(i)) {
        selected.add(i);
        break;
      }
    }

    if (selected.size < numberOfFills) {
      const unselected = Array.from({ length: totalItems }, (_, i) => i).filter(
        (i) => !selected.has(i)
      );
      if (unselected.length > 0) {
        const randomIndex = Math.floor(Math.random() * unselected.length);
        selected.add(unselected[randomIndex]);
      }
    }
  }

  return Array.from(selected);
}

// Create advanced input cell with enhanced features
function createAdvancedInputCell(cell, correctValue, rowIndex, key) {
  const inputContainer = document.createElement("div");
  inputContainer.className = "input-container advanced";

  const input = document.createElement("input");
  input.type = "text";
  input.className = "enhanced-input-cell";
  input.setAttribute("data-correct", correctValue);
  input.setAttribute("data-index", rowIndex.toString());
  input.setAttribute("data-field", key);
  input.setAttribute("data-difficulty", calculateValueDifficulty(correctValue));

  input.placeholder = generateAdvancedPlaceholder(correctValue);

  const datalistId = `suggestions-${rowIndex}-${key}`;
  input.setAttribute("list", datalistId);
  const datalist = createSmartDatalist(datalistId, correctValue);
  document.body.appendChild(datalist);

  let hintLevel = 0;
  const maxHints = 3;

  input.addEventListener("input", (e) => {
    handleAdvancedInputChange(e.target);

    if (e.target.value.length <= 1) {
      hintLevel = 0;
      e.target.setAttribute("data-hint-level", "0");
    }
  });

  input.addEventListener("blur", (e) => {
    if (fillModeConfig.instantFeedback) {
      handleInputSubmit(e.target);
    }
  });

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleInputSubmit(e.target);
    }
  });

  input.addEventListener("dblclick", (e) => {
    if (fillModeConfig.showHints && hintLevel < maxHints) {
      showProgressiveHint(input, correctValue, hintLevel);
      hintLevel++;
      input.setAttribute("data-hint-level", hintLevel.toString());
    }
  });

  const actionButtons = document.createElement("div");
  actionButtons.className = "action-buttons";

  if (fillModeConfig.showHints) {
    const hintBtn = document.createElement("button");
    hintBtn.className = "hint-btn advanced";
    hintBtn.innerHTML = "💡";
    hintBtn.title = `Hint (${hintLevel}/${maxHints})`;
    hintBtn.onclick = (e) => {
      e.stopPropagation();
      if (hintLevel < maxHints) {
        showProgressiveHint(input, correctValue, hintLevel);
        hintLevel++;
        input.setAttribute("data-hint-level", hintLevel.toString());
        hintBtn.title = `Hint (${hintLevel}/${maxHints})`;

        if (hintLevel >= maxHints) {
          hintBtn.style.opacity = "0.3";
          hintBtn.disabled = true;
        }
      }
    };
    actionButtons.appendChild(hintBtn);
  }

  const skipBtn = document.createElement("button");
  skipBtn.className = "skip-btn";
  skipBtn.innerHTML = "⏭️";
  skipBtn.title = "Skip this question";
  skipBtn.onclick = (e) => {
    e.stopPropagation();
    skipQuestion(input, correctValue);
  };
  actionButtons.appendChild(skipBtn);

  const indicator = document.createElement("div");
  indicator.className = "validation-indicator advanced";

  const progressBar = document.createElement("div");
  progressBar.className = "answer-progress";
  progressBar.innerHTML = '<div class="progress-fill"></div>';

  inputContainer.appendChild(input);
  inputContainer.appendChild(actionButtons);
  inputContainer.appendChild(indicator);
  inputContainer.appendChild(progressBar);

  cell.appendChild(inputContainer);
}

// Calculate difficulty of a specific value
function calculateValueDifficulty(value) {
  const str = value.toString().toLowerCase();
  let difficulty = 1;

  if (str.includes("°c") || str.includes("°f")) difficulty += 1;
  if (str.includes("±") || str.includes("+/-")) difficulty += 1;
  if (str.includes(",")) difficulty += 0.5;
  if (str.match(/\d+\.\d+/)) difficulty += 0.5;
  if (str.length > 10) difficulty += 0.5;
  if (str.includes("isa")) difficulty += 1;

  return Math.min(difficulty, 3);
}

// Generate advanced placeholder with contextual information
function generateAdvancedPlaceholder(correctValue) {
  const value = correctValue.toLowerCase();
  const difficulty = calculateValueDifficulty(correctValue);

  let basePlaceholder = "";

  if (value.includes("kias") || value.includes("knots")) {
    basePlaceholder = "Enter speed";
  } else if (value.includes("°c")) {
    basePlaceholder = "Enter temperature";
  } else if (value.includes("lbs")) {
    basePlaceholder = "Enter weight";
  } else if (value.includes("ft")) {
    basePlaceholder = "Enter altitude/distance";
  } else if (value.includes("%")) {
    basePlaceholder = "Enter percentage";
  } else if (value.includes("gal")) {
    basePlaceholder = "Enter volume";
  } else if (value.includes("psi")) {
    basePlaceholder = "Enter pressure";
  } else {
    basePlaceholder = "Enter value";
  }

  const difficultyStars = "★".repeat(Math.floor(difficulty));
  return `${basePlaceholder} ${difficultyStars}`;
}

// Create smart datalist with intelligent suggestions
function createSmartDatalist(datalistId, correctValue) {
  const datalist = document.createElement("datalist");
  datalist.id = datalistId;

  const suggestions = generateSuggestions(correctValue);
  const additionalSuggestions = generateContextualSuggestions(correctValue);

  [...suggestions, ...additionalSuggestions].forEach((suggestion) => {
    const option = document.createElement("option");
    option.value = suggestion;
    datalist.appendChild(option);
  });

  return datalist;
}

// Generate helpful placeholder text
function generateSuggestions(correctValue) {
  const suggestions = [];
  const value = correctValue.toLowerCase();

  const numbers = correctValue.match(/\d+/g);
  if (numbers) {
    const mainNumber = numbers[0];

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

// Generate contextual suggestions based on other values in the dataset
function generateContextualSuggestions(correctValue) {
  const suggestions = [];
  const category = limitationsCategories[currentCategory];

  category.data.forEach((item) => {
    Object.values(item).forEach((value) => {
      const str = value.toString();

      if (str !== correctValue && str.length > 2) {
        if (correctValue.includes("ft") && str.includes("ft")) {
          const number = str.match(/\d+/)?.[0];
          if (number) suggestions.push(`${number} ft`);
        }
        if (correctValue.includes("°C") && str.includes("°C")) {
          const number = str.match(/-?\d+/)?.[0];
          if (number) suggestions.push(`${number}°C`);
        }
      }
    });
  });

  return [...new Set(suggestions)].slice(0, 5);
}

// Advanced input change handler with progressive feedback
function handleAdvancedInputChange(input) {
  const userAnswer = input.value;
  const correctAnswer = input.getAttribute("data-correct");
  const indicator = input.parentElement.querySelector(".validation-indicator");
  const progressBar = input.parentElement.querySelector(
    ".answer-progress .progress-fill"
  );

  if (!indicator || !progressBar) return;

  if (userAnswer.length === 0) {
    indicator.className = "validation-indicator advanced";
    indicator.innerHTML = "";
    progressBar.style.width = "0%";
    return;
  }

  const similarity = calculateSimilarity(
    userAnswer.toLowerCase(),
    correctAnswer.toLowerCase()
  );
  const result = smartAnswerCheck(userAnswer, correctAnswer);

  progressBar.style.width = similarity * 100 + "%";

  if (result.isCorrect) {
    if (result.score === 100) {
      indicator.className = "validation-indicator advanced perfect";
      indicator.innerHTML = "✓";
      progressBar.style.backgroundColor = "#00ff41";
    } else if (result.score >= 90) {
      indicator.className = "validation-indicator advanced good";
      indicator.innerHTML = "✓";
      progressBar.style.backgroundColor = "#66ff66";
    } else {
      indicator.className = "validation-indicator advanced close";
      indicator.innerHTML = "~";
      progressBar.style.backgroundColor = "#ffaa00";
    }
  } else {
    if (similarity > 0.7) {
      indicator.className = "validation-indicator advanced close";
      indicator.innerHTML = "~";
      progressBar.style.backgroundColor = "#ffaa00";
    } else if (similarity > 0.4) {
      indicator.className = "validation-indicator advanced partial";
      indicator.innerHTML = "?";
      progressBar.style.backgroundColor = "#ffff00";
    } else if (userAnswer.length > 2) {
      indicator.className = "validation-indicator advanced wrong";
      indicator.innerHTML = "✗";
      progressBar.style.backgroundColor = "#ff0000";
    } else {
      indicator.className = "validation-indicator advanced";
      indicator.innerHTML = "";
      progressBar.style.backgroundColor = "rgba(0, 255, 65, 0.3)";
    }
  }
}

// Progressive hint system with increasing levels of help
function showProgressiveHint(input, correctValue, hintLevel) {
  const hints = generateProgressiveHints(correctValue, hintLevel);

  if (hints.length === 0) return;

  const hintPopup = document.createElement("div");
  hintPopup.className = "hint-popup advanced";

  const hintContent = `
    <div class="hint-content">
      <div class="hint-title">Hint ${hintLevel + 1}/3</div>
      <div class="hint-text">${hints[0]}</div>
      <div class="hint-progress">
        <div class="hint-dots">
          ${"●".repeat(hintLevel + 1)}${"○".repeat(2 - hintLevel)}
        </div>
      </div>
      <button class="hint-close" onclick="this.parentElement.parentElement.remove()">Got it!</button>
    </div>
  `;

  hintPopup.innerHTML = hintContent;
  document.body.appendChild(hintPopup);

  const rect = input.getBoundingClientRect();
  hintPopup.style.position = "fixed";
  hintPopup.style.top = rect.bottom + 5 + "px";
  hintPopup.style.left = rect.left + "px";
  hintPopup.style.zIndex = "1000";

  setTimeout(() => {
    if (hintPopup.parentElement) {
      hintPopup.remove();
    }
  }, 8000);
}

// Generate progressive hints that get more specific
function generateProgressiveHints(correctValue, hintLevel) {
  const hints = [];
  const value = correctValue.toLowerCase();

  if (hintLevel === 0) {
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
      hints.push("Think about what type of measurement this might be.");
    }
  } else if (hintLevel === 1) {
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
    } else {
      hints.push("Think about the typical range for this type of measurement.");
    }
  } else if (hintLevel === 2) {
    if (correctValue.length > 3) {
      const firstPart = correctValue.substring(
        0,
        Math.ceil(correctValue.length * 0.4)
      );
      const lastPart = correctValue.substring(
        Math.floor(correctValue.length * 0.7)
      );
      hints.push(
        `The answer starts with "${firstPart}" and ends with "${lastPart}"`
      );
    } else {
      hints.push(`The answer is: ${correctValue}`);
    }
  }

  return hints;
}

// Skip question functionality
function skipQuestion(input, correctValue) {
  const cell = input.closest("td");

  cell.classList.add("skipped");

  const feedback = document.createElement("div");
  feedback.className = "answer-feedback skipped";
  feedback.innerHTML = `
    <div class="skipped-label">SKIPPED</div>
    <div class="correct-answer">Answer: ${correctValue}</div>
  `;

  input.style.display = "none";
  input.parentElement.appendChild(feedback);

  updateProgress();
}

// Add difficulty selector to the UI
function addDifficultySelector() {
  const existingSelector = document.getElementById("difficulty-selector");
  if (existingSelector) return;

  const controls = document.querySelector(".controls");
  const difficultyContainer = document.createElement("div");
  difficultyContainer.className = "difficulty-container";
  difficultyContainer.innerHTML = `
    <label for="difficulty-select" style="color: #00ff41; margin-right: 10px; font-family: 'JetBrains Mono', monospace;">Difficulty:</label>
    <select id="difficulty-select" onchange="changeDifficulty()">
      <option value="easy">Easy (30%)</option>
      <option value="medium" selected>Medium (50%)</option>
      <option value="hard">Hard (70%)</option>
      <option value="expert">Expert (90%)</option>
    </select>
  `;

  controls.appendChild(difficultyContainer);
}

// Add fill mode controls
function addFillModeControls() {
  const existingControls = document.getElementById("fill-mode-controls");
  if (existingControls) return;

  const container = document.querySelector(".container");
  const controlsPanel = document.createElement("div");
  controlsPanel.id = "fill-mode-controls";
  controlsPanel.className = "fill-mode-controls";
  controlsPanel.innerHTML = `
    <div class="fill-controls-row">
      <label>
        <input type="checkbox" id="random-selection" ${
          fillModeConfig.randomSelection ? "checked" : ""
        } onchange="toggleRandomSelection()">
        Random Selection
      </label>
      <label>
        <input type="checkbox" id="show-hints" ${
          fillModeConfig.showHints ? "checked" : ""
        } onchange="toggleHints()">
        Show Hints
      </label>
      <label>
        <input type="checkbox" id="instant-feedback" ${
          fillModeConfig.instantFeedback ? "checked" : ""
        } onchange="toggleInstantFeedback()">
        Instant Feedback
      </label>
      <button onclick="regenerateFillMode()" class="btn regenerate-btn">🎲 Regenerate</button>
    </div>
  `;

  const timerElement = document.getElementById("timer");
  container.insertBefore(controlsPanel, timerElement);
}

// Control functions
function changeDifficulty() {
  const select = document.getElementById("difficulty-select");
  fillModeConfig.difficulty = select.value;
  if (currentMode === "fill") {
    createEnhancedFillInMode();
  }
}

function toggleRandomSelection() {
  fillModeConfig.randomSelection =
    document.getElementById("random-selection").checked;
  if (currentMode === "fill") {
    createEnhancedFillInMode();
  }
}

function toggleHints() {
  fillModeConfig.showHints = document.getElementById("show-hints").checked;
}

function toggleInstantFeedback() {
  fillModeConfig.instantFeedback =
    document.getElementById("instant-feedback").checked;
}

function regenerateFillMode() {
  if (currentMode === "fill") {
    resetProgress();
    createEnhancedFillInMode();
  }
}

// Clean up fill mode controls when switching modes
function cleanupFillModeControls() {
  const fillControls = document.getElementById("fill-mode-controls");
  const difficultyContainer = document.querySelector(".difficulty-container");

  if (fillControls) fillControls.remove();
  if (difficultyContainer) difficultyContainer.remove();
}

// Show helpful tooltips on first visit to fill mode
function showFillModeHelp() {
  if (hasShownFillModeHelp) return;
  hasShownFillModeHelp = true;

  const helpPopup = document.createElement("div");
  helpPopup.className = "help-popup";
  helpPopup.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.95);
      border: 2px solid #00ff41;
      padding: 20px;
      max-width: 400px;
      z-index: 2000;
      font-family: 'JetBrains Mono', monospace;
      color: #00ff41;
    ">
      <h3 style="margin-bottom: 15px; color: #ffffff;">🚀 Enhanced Fill-in Mode</h3>
      <div style="font-size: 0.85rem; line-height: 1.4; margin-bottom: 15px;">
        <p><strong>💡 Hints:</strong> Click the hint button or press Ctrl+H</p>
        <p><strong>⏭️ Skip:</strong> Click skip button or press Ctrl+S</p>
        <p><strong>⌨️ Navigation:</strong> Use Tab/Shift+Tab to move between fields</p>
        <p><strong>🎯 Difficulty:</strong> Adjust difficulty to change how many questions appear</p>
        <p><strong>🎲 Regenerate:</strong> Get a new random selection of questions</p>
      </div>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: rgba(0, 255, 65, 0.1);
        border: 1px solid #00ff41;
        color: #00ff41;
        padding: 8px 16px;
        cursor: pointer;
        font-family: 'JetBrains Mono', monospace;
        width: 100%;
      ">Got it!</button>
    </div>
  `;

  document.body.appendChild(helpPopup);

  setTimeout(() => {
    if (helpPopup.parentElement) {
      helpPopup.remove();
    }
  }, 10000);
}

// Enhanced fill-in mode with help
function createEnhancedFillInModeWithHelp() {
  createEnhancedFillInMode();
  setTimeout(showFillModeHelp, 1000);
}

// Handle real-time input changes (original function for compatibility)
function handleInputChange(input) {
  const userAnswer = input.value;
  const correctAnswer = input.getAttribute("data-correct");
  const indicator = input.parentElement.querySelector(".validation-indicator");

  if (!indicator) return;

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

  const existingFeedback = cell.querySelector(".answer-feedback");
  if (existingFeedback) {
    existingFeedback.remove();
  }

  if (result.isCorrect) {
    cell.classList.add("correct");
    cell.classList.remove("incorrect", "partial");

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

    if (result.score === 100) {
      showBonusAnimation(cell);
    }
  } else {
    cell.classList.add("incorrect");
    cell.classList.remove("correct", "partial");

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

  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  if (mode !== "fill") {
    cleanupFillModeControls();
  }

  document
    .querySelectorAll(".btn")
    .forEach((btn) => btn.classList.remove("active"));
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((btn) => {
    if (btn.onclick && btn.onclick.toString().includes(`'${mode}'`)) {
      btn.classList.add("active");
    }
  });

  if (mode === "timer") {
    startTimer();
    document.getElementById("timer").style.display = "block";
  } else {
    document.getElementById("timer").style.display = "none";
  }

  if (mode === "fill") {
    console.log("Setting enhanced fill mode...");
    createEnhancedFillInModeWithHelp();
  } else {
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
      ".limitation-cell.correct, .limitation-cell.incorrect, .fill-mode-cell.correct, .fill-mode-cell.incorrect, .fill-mode-cell.skipped"
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

function trackPerformance(wasCorrect, hintsUsed, timeSpent) {
  performanceTracker.totalAttempts++;
  if (wasCorrect) performanceTracker.correctAnswers++;

  performanceTracker.averageHintsUsed =
    (performanceTracker.averageHintsUsed *
      (performanceTracker.totalAttempts - 1) +
      hintsUsed) /
    performanceTracker.totalAttempts;

  performanceTracker.averageTimePerQuestion =
    (performanceTracker.averageTimePerQuestion *
      (performanceTracker.totalAttempts - 1) +
      timeSpent) /
    performanceTracker.totalAttempts;
}

function enhancedSaveProgress() {
  savedProgress = {
    correctCount,
    incorrectCount,
    streakCount,
    mode: currentMode,
    category: currentCategory,
    fillModeConfig: fillModeConfig,
    performanceTracker: performanceTracker,
    hasShownFillModeHelp: hasShownFillModeHelp,
  };

  try {
    localStorage.setItem(
      "aircraftLimitsProgress",
      JSON.stringify(savedProgress)
    );
  } catch (e) {
    console.log("localStorage not available, using memory storage");
  }
}

function enhancedLoadProgress() {
  try {
    const saved = localStorage.getItem("aircraftLimitsProgress");
    if (saved) {
      const parsedProgress = JSON.parse(saved);

      correctCount = parsedProgress.correctCount || 0;
      incorrectCount = parsedProgress.incorrectCount || 0;
      streakCount = parsedProgress.streakCount || 0;
      currentCategory = parsedProgress.category || "Structural Limitations";

      if (parsedProgress.fillModeConfig) {
        fillModeConfig = {
          ...fillModeConfig,
          ...parsedProgress.fillModeConfig,
        };
      }

      if (parsedProgress.performanceTracker) {
        performanceTracker = {
          ...performanceTracker,
          ...parsedProgress.performanceTracker,
        };
      }

      hasShownFillModeHelp = parsedProgress.hasShownFillModeHelp || false;

      document.getElementById("category-select").value = currentCategory;
      updateStats();
    }
  } catch (e) {
    console.log("Could not load progress from localStorage");
    if (savedProgress) {
      correctCount = savedProgress.correctCount || 0;
      incorrectCount = savedProgress.incorrectCount || 0;
      streakCount = savedProgress.streakCount || 0;
      currentCategory = savedProgress.category || "Structural Limitations";
      document.getElementById("category-select").value = currentCategory;
      updateStats();
    }
  }
}

function saveProgress() {
  enhancedSaveProgress();
}

function loadProgress() {
  enhancedLoadProgress();
}

// Add keyboard shortcuts for better UX
document.addEventListener("keydown", (e) => {
  if (currentMode !== "fill") return;

  const activeInput = document.activeElement;
  if (!activeInput || !activeInput.classList.contains("enhanced-input-cell"))
    return;

  if ((e.ctrlKey || e.metaKey) && e.key === "h") {
    e.preventDefault();
    const hintBtn = activeInput.parentElement.querySelector(".hint-btn");
    if (hintBtn && !hintBtn.disabled) {
      hintBtn.click();
    }
  }

  if ((e.ctrlKey || e.metaKey) && e.key === "s") {
    e.preventDefault();
    const skipBtn = activeInput.parentElement.querySelector(".skip-btn");
    if (skipBtn) {
      skipBtn.click();
    }
  }

  if (e.key === "Tab" && !e.shiftKey) {
    e.preventDefault();
    const allInputs = Array.from(
      document.querySelectorAll(".enhanced-input-cell")
    );
    const currentIndex = allInputs.indexOf(activeInput);
    const nextInput = allInputs[currentIndex + 1];
    if (nextInput) {
      nextInput.focus();
    }
  }

  if (e.key === "Tab" && e.shiftKey) {
    e.preventDefault();
    const allInputs = Array.from(
      document.querySelectorAll(".enhanced-input-cell")
    );
    const currentIndex = allInputs.indexOf(activeInput);
    const prevInput = allInputs[currentIndex - 1];
    if (prevInput) {
      prevInput.focus();
    }
  }
});

document.addEventListener("DOMContentLoaded", init);
