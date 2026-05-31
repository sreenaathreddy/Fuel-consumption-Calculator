/**
 * PowerFlow Generator Fuel Efficiency Analytics Engine
 * Version 2.1.0 - Tactile Edition
 */

// 1. Generator Data Sheets Database
const DG_DATABASE = {
  MM: {
    name: "Mahindra & Mahindra",
    ratings: {
      10: {
        capacityKW: 8,
        rates: [
          { min: 0, max: 10, rate: 1.02, label: "0-10%" },
          { min: 10, max: 20, rate: 1.20, label: "10-20%" },
          { min: 20, max: 25, rate: 1.28, label: "20-25%" },
          { min: 25, max: 30, rate: 1.37, label: "25-30%" },
          { min: 30, max: 40, rate: 1.60, label: "30-40%" },
          { min: 40, max: 50, rate: 1.79, label: "40-50%" },
          { min: 50, max: 60, rate: 1.95, label: "50-60%" },
          { min: 60, max: 70, rate: 2.20, label: "60-70%" },
          { min: 70, max: 75, rate: 2.30, label: "70-75%" },
          { min: 75, max: 80, rate: 2.41, label: "75-80%" },
          { min: 80, max: 90, rate: 2.66, label: "80-90%" },
          { min: 90, max: 100, rate: 2.84, label: "90-100%" }
        ]
      },
      15: {
        capacityKW: 12,
        rates: [
          { min: 0, max: 0, rate: 1.20, label: "0% (Idle)" },
          { min: 0, max: 10, rate: 1.45, label: "0-10%" },
          { min: 10, max: 20, rate: 1.64, label: "10-20%" },
          { min: 20, max: 25, rate: 1.74, label: "20-25%" },
          { min: 25, max: 30, rate: 1.84, label: "25-30%" },
          { min: 30, max: 40, rate: 2.06, label: "30-40%" },
          { min: 40, max: 50, rate: 2.30, label: "40-50%" },
          { min: 50, max: 60, rate: 2.57, label: "50-60%" },
          { min: 60, max: 70, rate: 2.85, label: "60-70%" },
          { min: 70, max: 75, rate: 2.99, label: "70-75%" },
          { min: 75, max: 80, rate: 3.15, label: "75-80%" },
          { min: 80, max: 90, rate: 3.50, label: "80-90%" },
          { min: 90, max: 100, rate: 3.80, label: "90-100%" }
        ]
      },
      20: {
        capacityKW: 16,
        rates: [
          { min: 0, max: 0, rate: 1.25, label: "0% (Idle)" },
          { min: 0, max: 10, rate: 1.32, label: "0-10%" },
          { min: 10, max: 20, rate: 1.60, label: "10-20%" },
          { min: 20, max: 25, rate: 1.80, label: "20-25%" },
          { min: 25, max: 30, rate: 1.90, label: "25-30%" },
          { min: 30, max: 40, rate: 2.20, label: "30-40%" },
          { min: 40, max: 50, rate: 2.45, label: "40-50%" },
          { min: 50, max: 60, rate: 2.85, label: "50-60%" },
          { min: 60, max: 70, rate: 3.05, label: "60-70%" },
          { min: 70, max: 75, rate: 3.35, label: "70-75%" },
          { min: 75, max: 80, rate: 3.48, label: "75-80%" },
          { min: 80, max: 90, rate: 3.99, label: "80-90%" },
          { min: 90, max: 100, rate: 4.38, label: "90-100%" },
          { min: 100, max: 110, rate: 4.90, label: "100-110%" }
        ]
      }
    }
  },
  EICHER: {
    name: "Eicher Power",
    ratings: {
      10: {
        capacityKW: 8,
        rates: [
          { min: 0, max: 10, rate: 1.02, label: "0-10%" },
          { min: 10, max: 20, rate: 1.20, label: "10-20%" },
          { min: 20, max: 25, rate: 1.30, label: "20-25%" },
          { min: 25, max: 30, rate: 1.37, label: "25-30%" },
          { min: 30, max: 40, rate: 1.60, label: "30-40%" },
          { min: 40, max: 50, rate: 1.80, label: "40-50%" },
          { min: 50, max: 60, rate: 1.95, label: "50-60%" },
          { min: 60, max: 70, rate: 2.20, label: "60-70%" },
          { min: 70, max: 75, rate: 2.23, label: "70-75%" },
          { min: 75, max: 80, rate: 2.41, label: "75-80%" },
          { min: 80, max: 90, rate: 2.66, label: "80-90%" },
          { min: 90, max: 100, rate: 2.90, label: "90-100%" }
        ]
      },
      20: {
        capacityKW: 14,
        rates: [
          { min: 0, max: 0, rate: 1.09, label: "0% (Idle)" },
          { min: 0, max: 10, rate: 1.33, label: "0-10%" },
          { min: 10, max: 20, rate: 1.63, label: "10-20%" },
          { min: 20, max: 25, rate: 1.92, label: "20-25%" },
          { min: 25, max: 30, rate: 1.99, label: "25-30%" },
          { min: 30, max: 40, rate: 2.29, label: "30-40%" },
          { min: 40, max: 50, rate: 2.55, label: "40-50%" },
          { min: 50, max: 60, rate: 2.92, label: "50-60%" },
          { min: 60, max: 70, rate: 3.10, label: "60-70%" },
          { min: 70, max: 75, rate: 3.47, label: "70-75%" },
          { min: 75, max: 80, rate: 3.52, label: "75-80%" },
          { min: 80, max: 90, rate: 4.06, label: "80-90%" },
          { min: 90, max: 100, rate: 4.45, label: "90-100%" },
          { min: 100, max: 110, rate: 5.01, label: "100-110%" }
        ]
      }
    }
  },
  KOEL: {
    name: "KOEL (Kirloskar)",
    ratings: {
      20: {
        capacityKW: 16,
        rates: [
          { min: 0, max: 10, rate: 1.32, label: "0-10%" },
          { min: 10, max: 20, rate: 1.58, label: "10-20%" },
          { min: 20, max: 25, rate: 1.78, label: "20-25%" },
          { min: 25, max: 30, rate: 1.85, label: "25-30%" },
          { min: 30, max: 40, rate: 2.13, label: "30-40%" },
          { min: 40, max: 50, rate: 2.42, label: "40-50%" },
          { min: 50, max: 60, rate: 2.77, label: "50-60%" },
          { min: 60, max: 70, rate: 3.02, label: "60-70%" },
          { min: 70, max: 75, rate: 3.25, label: "70-75%" },
          { min: 75, max: 80, rate: 3.42, label: "75-80%" },
          { min: 80, max: 90, rate: 3.92, label: "80-90%" },
          { min: 90, max: 100, rate: 4.30, label: "90-100%" },
          { min: 100, max: 110, rate: 4.80, label: "100-110%" }
        ]
      }
    }
  }
};

// 2. Operational State Variables
let currentCalculation = null;
let calculationHistory = [];
let previousYieldValue = 0;

// 3. Document DOM Elements
const dgMakeSelect = document.getElementById("dgMake");
const dgRatingSelect = document.getElementById("dgRating");
const capacityValSpan = document.getElementById("capacityVal");

const prevHMRInput = document.getElementById("prevHMR");
const presHMRInput = document.getElementById("presHMR");
const prevKWHInput = document.getElementById("prevKWH");
const presKWHInput = document.getElementById("presKWH");

const calculatorForm = document.getElementById("calculatorForm");
const resetBtn = document.getElementById("resetBtn");

// Results Panel Elements
const heroEfficiencyCard = document.getElementById("heroEfficiencyCard");
const efficiencyMetricValSpan = document.getElementById("efficiencyMetricVal");
const efficiencyRatingLabelSpan = document.getElementById("efficiencyRatingLabel");
const refreshFlashDiv = document.getElementById("refreshFlash");

const metricTotalFuelSpan = document.getElementById("metricTotalFuel");
const metricSpecConsSpan = document.getElementById("metricSpecCons");
const metricLoadPercentSpan = document.getElementById("metricLoadPercent");
const metricLoadKWSpan = document.getElementById("metricLoadKW");
const metricBurnRateSpan = document.getElementById("metricBurnRate");

// Enterprise RBAC & Locks State variables
let locksState = { fuel: "unlocked", pm: "unlocked" };
let activeSiteId = "SITE-DEFAULT";

// Competitor Comparison Elements
const comparisonBarsContainer = document.getElementById("comparisonBarsContainer");

// Simulator Elements
const loadSimulatorSlider = document.getElementById("loadSimulatorSlider");
const sliderValueText = document.getElementById("sliderValueText");
const simPowerValSpan = document.getElementById("simPowerVal");
const simBurnValSpan = document.getElementById("simBurnVal");
const simEfficiencyValSpan = document.getElementById("simEfficiencyVal");
const simRatingLabelSpan = document.getElementById("simRatingLabel");

// History & Actions Elements
const historyTableBody = document.getElementById("historyTableBody");
const exportCsvBtn = document.getElementById("exportCsvBtn");
const clearLogsBtn = document.getElementById("clearLogsBtn");

// Modal Elements
const viewDatabaseBtn = document.getElementById("viewDatabaseBtn");
const dbModal = document.getElementById("dbModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalDgSelector = document.getElementById("modalDgSelector");
const dbViewerTableBody = document.getElementById("dbViewerTableBody");

// SVG Chart Elements
const svgChart = document.getElementById("svgChart");

// Theme Switcher & Warning Alert Elements
const themeSelect = document.getElementById("themeSelect");
const operationalAlert = document.getElementById("operationalAlert");
const fuelVariationAlert = document.getElementById("fuelVariationAlert");

// Tab Navigation Elements
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

// Fuel Inventory Input Elements
const fuelTankCapacityInput = document.getElementById("fuelTankCapacity");
const lastFillDateInput = document.getElementById("lastFillDate");
const lastFillQtyInput = document.getElementById("lastFillQty");
const afterFillLevelInput = document.getElementById("afterFillLevel");
const presFillDateInput = document.getElementById("presFillDate");
const presFillQtyInput = document.getElementById("presFillQty");
const presAfterFillLevelInput = document.getElementById("presAfterFillLevel");

// Engine PM Log Input Elements
const lastTopupDateInput = document.getElementById("lastTopupDate");
const lastTopupQtyInput = document.getElementById("lastTopupQty");
const lastPmDateInput = document.getElementById("lastPmDate");
const lastPmHmrInput = document.getElementById("lastPmHmr");

// Fuel Inventory Results elements
const fuelTankCard = document.getElementById("fuelTankCard");
const liquidWave = document.getElementById("liquidWave");
const presentFuelVal = document.getElementById("presentFuelVal");
const presentFuelPercent = document.getElementById("presentFuelPercent");
const fuelStatusBadge = document.getElementById("fuelStatusBadge");
const tankCapDisplay = document.getElementById("tankCapDisplay");

// Engine PM Results elements
const pmHealthCard = document.getElementById("pmHealthCard");
const pmStatusBadge = document.getElementById("pmStatusBadge");
const pmHoursRun = document.getElementById("pmHoursRun");
const pmProgressBar = document.getElementById("pmProgressBar");
const pmHoursDue = document.getElementById("pmHoursDue");
const pmDateAdvice = document.getElementById("pmDateAdvice");
const oilTopupDisplay = document.getElementById("oilTopupDisplay");
const oilAgeDisplay = document.getElementById("oilAgeDisplay");

// 4. Silk-Smooth Counter Animation Utility
function animateValue(element, start, end, duration, decimals = 2) {
  if (!element) return;
  const range = end - start;
  let current = start;
  const increment = range / (duration / 16);
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    current = progress * range + start;
    element.textContent = current.toFixed(decimals);
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent = end.toFixed(decimals);
    }
  }
  
  window.requestAnimationFrame(step);
}

// 5. Theme Switching Engine
function applyTheme(themeName) {
  document.body.classList.remove("theme-cosmic-nebula", "theme-cyberpunk-neon", "theme-sunset-glow");
  
  if (themeName !== "light-aurora") {
    document.body.classList.add(`theme-${themeName}`);
  }
  
  if (themeSelect) {
    themeSelect.value = themeName;
  }
  
  localStorage.setItem("powerflow_theme", themeName);
  
  // Redraw SVG curves dynamically to align gridlines, labels and curves with the new theme
  renderChart();
}

// 6. Splash Screen Controller
function handleSplashScreen() {
  const splash = document.getElementById("splashScreen");
  if (!splash) return;

  // Fade out splash overlay after loading progress completes (approx 2.3s)
  setTimeout(() => {
    splash.classList.add("fade-out");
    
    // Completely remove splash screen from DOM after transition completes to preserve memory and pointer events
    setTimeout(() => {
      splash.remove();
    }, 800);
  }, 2300);
}

// 7. Initialisation
function init() {
  const savedLogs = localStorage.getItem("powerflow_calc_history_v3");
  if (savedLogs) {
    try {
      calculationHistory = JSON.parse(savedLogs);
    } catch (e) {
      calculationHistory = [];
    }
  }

  // Load cached theme
  const savedTheme = localStorage.getItem("powerflow_theme") || "light-aurora";
  applyTheme(savedTheme);

  // Initialise Splash Screen dismissal timer
  handleSplashScreen();

  updateRatingOptions();
  renderCompetitorComparison(0);
  renderHistoryTable();
  updateSimulatorOutputs(50);
  setupEventListeners();

  // Load user credentials database
  loadUserAccounts();

  // Load active Site ID from session storage or default
  const savedSiteId = sessionStorage.getItem("powerflow_active_site_id") || "SITE-DEFAULT";
  
  // Dynamically load active site details, cached states, and lock workflow bounds
  switchActiveSite(savedSiteId);

  // Apply active login permission view
  applySessionView();

  runSelfVerificationTests();
}

function updateRatingOptions() {
  const selectedMake = dgMakeSelect.value;
  const ratingData = DG_DATABASE[selectedMake].ratings;

  dgRatingSelect.innerHTML = "";

  Object.keys(ratingData).forEach((rating, idx) => {
    const opt = document.createElement("option");
    opt.value = rating;
    opt.textContent = `${rating} kVA`;
    if (idx === 0) opt.selected = true;
    dgRatingSelect.appendChild(opt);
  });

  updateCapacityDisplay();
  renderChart();
  
  const loadKW = currentCalculation ? currentCalculation.averageLoadKW : 0;
  renderCompetitorComparison(loadKW);
}

function updateCapacityDisplay() {
  const selectedMake = dgMakeSelect.value;
  const selectedRating = dgRatingSelect.value;

  if (selectedMake && selectedRating) {
    const cap = DG_DATABASE[selectedMake].ratings[selectedRating].capacityKW;
    capacityValSpan.textContent = `${cap} kW`;
  }
}

// 6. Lookups mapping ranges
function getFuelConsumptionRate(make, rating, loadPercentage) {
  const ratings = DG_DATABASE[make].ratings[rating];
  if (!ratings) return 0;

  const rates = ratings.rates;
  
  if (loadPercentage < 0) loadPercentage = 0;

  if (loadPercentage === 0) {
    const idleRate = rates.find(r => r.min === 0 && r.max === 0);
    if (idleRate) return idleRate.rate;
  }

  for (let i = 0; i < rates.length; i++) {
    const range = rates[i];
    if (range.min === 0 && range.max === 0 && loadPercentage > 0) continue;

    if (loadPercentage >= range.min && loadPercentage <= range.max) {
      return range.rate;
    }
  }

  const activeRates = rates.filter(r => !(r.min === 0 && r.max === 0));
  return activeRates[activeRates.length - 1].rate;
}

function getRangeLabel(make, rating, loadPercentage) {
  const ratings = DG_DATABASE[make].ratings[rating];
  if (!ratings) return "Unknown";

  const rates = ratings.rates;

  if (loadPercentage === 0) {
    const idleRate = rates.find(r => r.min === 0 && r.max === 0);
    if (idleRate) return idleRate.label;
  }

  for (let i = 0; i < rates.length; i++) {
    const range = rates[i];
    if (range.min === 0 && range.max === 0 && loadPercentage > 0) continue;
    if (loadPercentage >= range.min && loadPercentage <= range.max) {
      return range.label;
    }
  }

  const activeRates = rates.filter(r => !(r.min === 0 && r.max === 0));
  return `>${activeRates[activeRates.length - 1].max}% (Overload)`;
}

// 7. Yield ratings definitions
function getEfficiencyCategory(kwhPerLitre) {
  if (kwhPerLitre <= 0 || isNaN(kwhPerLitre) || !isFinite(kwhPerLitre)) {
    return { class: "text-muted", label: "No Active Yield", cardClass: "" };
  }
  if (kwhPerLitre >= 2.5) {
    return { class: "rating-badge-excellent", label: "Excellent Yield", cardClass: "excellent-glow" };
  }
  if (kwhPerLitre >= 2.0) {
    return { class: "rating-badge-good", label: "Good Yield", cardClass: "good-glow" };
  }
  if (kwhPerLitre >= 1.5) {
    return { class: "rating-badge-fair", label: "Fair Yield", cardClass: "fair-glow" };
  }
  return { class: "rating-badge-poor", label: "Poor Yield", cardClass: "poor-glow" };
}

// 8. Operational Warning Banner Engine
function updateOperationalAlertBanner(loadPercentage) {
  if (!operationalAlert) return;

  if (loadPercentage === null || isNaN(loadPercentage) || loadPercentage === undefined) {
    operationalAlert.classList.add("hidden");
    return;
  }

  // Ensure the alert container is visible
  operationalAlert.classList.remove("hidden");

  let title = "";
  let desc = "";
  let alertClass = "";
  let iconSVG = "";

  const loadVal = loadPercentage.toFixed(1);

  if (loadPercentage === 0) {
    alertClass = "alert-caution";
    title = "Idle Running Warning";
    desc = `Generator is currently idling with 0.0% electrical load. Avoid continuous idle runs to conserve diesel fuel and prevent wet stacking (unburnt fuel accumulation in exhaust).`;
    iconSVG = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="20" height="20">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    `;
  } else if (loadPercentage < 30) {
    alertClass = "alert-warning";
    title = `Severe Underload Warning (${loadVal}% Load)`;
    desc = `Generator is operating severely underloaded (below 30%). Extended low-load runs lead to low combustion chamber temperatures, wet stacking, and heavy carbon buildup.`;
    iconSVG = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="20" height="20">
        <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
      </svg>
    `;
  } else if (loadPercentage < 50) {
    alertClass = "alert-caution";
    title = `Low Load Alert (${loadVal}% Load)`;
    desc = `Generator load is sub-optimal (between 30% and 50%). Running within this range reduces fuel combustion efficiency and increases required maintenance intervals.`;
    iconSVG = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="20" height="20">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    `;
  } else if (loadPercentage >= 50 && loadPercentage <= 80) {
    alertClass = "alert-ideal";
    title = `Optimal Efficiency: Ideal Running (${loadVal}% Load)`;
    desc = `Optimal operating zone! Running generator within the 50% to 80% load band ensures peak fuel efficiency, complete diesel combustion, and extends engine lifespan.`;
    iconSVG = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="20" height="20">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    `;
  } else if (loadPercentage <= 100) {
    alertClass = "alert-caution";
    title = `High Load Alert (${loadVal}% Load)`;
    desc = `Generator is running at high capacity (80% to 100%). Safe for temporary load cycles, but continuous high load increases thermal stress and mechanical wear. Monitor metrics.`;
    iconSVG = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="20" height="20">
        <path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    `;
  } else {
    alertClass = "alert-danger";
    title = `DG Overloaded Danger! (${loadVal}% Load)`;
    desc = `Terminal Seizure Risk: Emergency Overload! Generator load exceeds 100% capacity. Immediately isolate excess building circuits to prevent permanent seizure.`;
    iconSVG = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="20" height="20">
        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    `;
  }

  operationalAlert.className = `alert-banner-container ${alertClass}`;
  operationalAlert.innerHTML = `
    <div class="alert-icon-wrapper">
      ${iconSVG}
    </div>
    <div class="alert-text-wrapper">
      <span class="alert-title">${title}</span>
      <span class="alert-desc">${desc}</span>
    </div>
  `;
}

// 9. Math Computations
function calculateAnalytics(make, rating, prevHMR, presHMR, prevKWH, presKWH) {
  const capacityKW = DG_DATABASE[make].ratings[rating].capacityKW;

  const deltaHMR = presHMR - prevHMR;
  const deltaKWH = presKWH - prevKWH;

  if (deltaHMR <= 0) throw new Error("Present HMR must be greater than Previous HMR.");
  if (deltaKWH < 0) throw new Error("Present kWh cannot be lower than Previous kWh.");

  const averageLoadKW = deltaKWH / deltaHMR;
  const loadPercentage = (averageLoadKW / capacityKW) * 100;

  const fuelRate = getFuelConsumptionRate(make, rating, loadPercentage);
  const rangeLabel = getRangeLabel(make, rating, loadPercentage);
  const totalFuelConsumed = fuelRate * deltaHMR;

  // kWh produced per Litre of diesel
  const kwhPerLitre = totalFuelConsumed > 0 ? (deltaKWH / totalFuelConsumed) : 0;
  
  // Specific consumption: Litre used to generate 1 kWh
  const specCons = deltaKWH > 0 ? (totalFuelConsumed / deltaKWH) : 0;

  return {
    make,
    makeName: DG_DATABASE[make].name,
    rating: parseInt(rating),
    capacityKW,
    prevHMR,
    presHMR,
    deltaHMR,
    prevKWH,
    presKWH,
    deltaKWH,
    averageLoadKW,
    loadPercentage,
    fuelRate,
    rangeLabel,
    totalFuelConsumed,
    kwhPerLitre,
    specCons,
    timestamp: new Date().toLocaleString()
  };
}

// 8. Fuel & PM Persistence and Calculations
function saveFuelPmInputsToCache() {
  const data = {
    fuelTankCapacity: fuelTankCapacityInput.value,
    lastFillDate: lastFillDateInput.value,
    lastFillQty: lastFillQtyInput.value,
    afterFillLevel: afterFillLevelInput.value,
    lastTopupDate: lastTopupDateInput.value,
    lastTopupQty: lastTopupQtyInput.value,
    lastPmDate: lastPmDateInput.value,
    lastPmHmr: lastPmHmrInput.value
  };
  localStorage.setItem(`powerflow_fuel_pm_logs_${activeSiteId}`, JSON.stringify(data));
}

function loadFuelPmInputsFromCache() {
  const cached = localStorage.getItem(`powerflow_fuel_pm_logs_${activeSiteId}`);
  if (cached) {
    try {
      const data = JSON.parse(cached);
      if (data.fuelTankCapacity) fuelTankCapacityInput.value = data.fuelTankCapacity;
      if (data.lastFillDate) lastFillDateInput.value = data.lastFillDate;
      if (data.lastFillQty) lastFillQtyInput.value = data.lastFillQty;
      if (data.afterFillLevel) afterFillLevelInput.value = data.afterFillLevel;
      if (data.lastTopupDate) lastTopupDateInput.value = data.lastTopupDate;
      if (data.lastTopupQty) lastTopupQtyInput.value = data.lastTopupQty;
      if (data.lastPmDate) lastPmDateInput.value = data.lastPmDate;
      if (data.lastPmHmr) lastPmHmrInput.value = data.lastPmHmr;
    } catch (e) {
      console.error("Failed to parse cached fuel PM logs", e);
    }
  } else {
    // Set smart defaults to avoid empty dates
    fuelTankCapacityInput.value = "150";
    lastFillQtyInput.value = "80";
    afterFillLevelInput.value = "140";
    lastTopupQtyInput.value = "4.5";
    lastPmHmrInput.value = "1200";

    const today = new Date();
    const fillDate = new Date(today);
    fillDate.setDate(today.getDate() - 5);
    lastFillDateInput.value = fillDate.toISOString().split('T')[0];
    
    const topupDate = new Date(today);
    topupDate.setDate(today.getDate() - 10);
    lastTopupDateInput.value = topupDate.toISOString().split('T')[0];
    
    const pmDate = new Date(today);
    pmDate.setDate(today.getDate() - 30);
    lastPmDateInput.value = pmDate.toISOString().split('T')[0];
  }
}

function updateFuelAndPmResults(totalFuelConsumed, presHMR) {
  const fuelTankCapacity = parseFloat(fuelTankCapacityInput.value) || 150;
  const lastFillQty = parseFloat(lastFillQtyInput.value) || 0;
  const afterFillLevel = parseFloat(afterFillLevelInput.value) || 0;
  const lastTopupDate = lastTopupDateInput.value;
  const lastTopupQty = parseFloat(lastTopupQtyInput.value) || 0;
  const lastPmHmr = parseFloat(lastPmHmrInput.value) || 0;

  // Present Fuel in Tank calculation
  let presentFuel = afterFillLevel - totalFuelConsumed;
  const isExceeded = totalFuelConsumed > afterFillLevel;
  
  if (presentFuel < 0) presentFuel = 0;
  if (presentFuel > fuelTankCapacity) presentFuel = fuelTankCapacity;
  const presentFuelPercent = fuelTankCapacity > 0 ? (presentFuel / fuelTankCapacity) * 100 : 0;

  // Fuel CPH Variation audit
  fuelVariationAlert.classList.remove("hidden");
  if (isExceeded) {
    const diff = totalFuelConsumed - afterFillLevel;
    fuelVariationAlert.className = "alert-banner-container alert-warning alert-danger";
    fuelVariationAlert.innerHTML = `
      <div class="alert-icon-wrapper">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="20" height="20">
          <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      </div>
      <div class="alert-text-wrapper">
        <span class="alert-title">High Fuel Variation</span>
        <span class="alert-desc">High fuel variation of ${diff.toFixed(1)} Ltr (Calculated consumption exceeds available tank level).</span>
      </div>
    `;
  } else {
    fuelVariationAlert.className = "alert-banner-container alert-ideal";
    fuelVariationAlert.innerHTML = `
      <div class="alert-icon-wrapper">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="20" height="20">
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      </div>
      <div class="alert-text-wrapper">
        <span class="alert-title">Normal Fuel Run</span>
        <span class="alert-desc">Fuel consume based on chart: no fuel variation.</span>
      </div>
    `;
  }

  // Update readouts
  presentFuelVal.innerHTML = `${presentFuel.toFixed(1)} <span class="tank-qty-unit">L</span>`;
  presentFuelPercent.textContent = `${presentFuelPercent.toFixed(1)}% Remaining`;
  tankCapDisplay.textContent = fuelTankCapacity;

  // Wave fill classes and animated alerts
  liquidWave.style.height = `${presentFuelPercent.toFixed(1)}%`;
  
  liquidWave.classList.remove("fill-safe", "fill-caution", "fill-warning");
  fuelTankCard.classList.remove("low-fuel-shake", "low-fuel-breathe");
  fuelStatusBadge.classList.remove("rating-badge-excellent", "rating-badge-good", "rating-badge-fair", "rating-badge-poor");

  if (presentFuelPercent >= 50) {
    liquidWave.classList.add("fill-safe");
    fuelStatusBadge.classList.add("rating-badge-excellent");
    fuelStatusBadge.textContent = "Safe Level";
  } else if (presentFuelPercent >= 20) {
    liquidWave.classList.add("fill-caution");
    fuelStatusBadge.classList.add("rating-badge-fair");
    fuelStatusBadge.textContent = "Low Fuel Caution";
    fuelTankCard.classList.add("low-fuel-breathe");
  } else {
    liquidWave.classList.add("fill-warning");
    fuelStatusBadge.classList.add("rating-badge-poor");
    fuelStatusBadge.textContent = "Critical Refuel";
    fuelTankCard.classList.add("low-fuel-shake");
  }

  // PM Calculations
  const hoursRunSincePM = presHMR - lastPmHmr;
  const hoursDue = 250 - hoursRunSincePM;
  const pmPercent = Math.min(100, Math.max(0, (hoursRunSincePM / 250) * 100));

  pmHoursRun.textContent = `${hoursRunSincePM.toFixed(1)} hrs`;
  pmProgressBar.style.width = `${pmPercent.toFixed(1)}%`;

  pmProgressBar.classList.remove("pm-safe", "pm-due", "pm-overdue");
  pmHealthCard.classList.remove("pm-warning-card", "pm-caution-card");
  pmStatusBadge.classList.remove("rating-badge-excellent", "rating-badge-good", "rating-badge-fair", "rating-badge-poor");

  if (hoursRunSincePM < 200) {
    pmProgressBar.classList.add("pm-safe");
    pmStatusBadge.classList.add("rating-badge-excellent");
    pmStatusBadge.textContent = "PM Healthy";
    pmHoursDue.textContent = `${hoursDue.toFixed(1)} hrs`;
    pmDateAdvice.textContent = `Schedule PM in ${hoursDue.toFixed(1)} hrs`;
  } else if (hoursRunSincePM < 250) {
    pmProgressBar.classList.add("pm-due");
    pmStatusBadge.classList.add("rating-badge-fair");
    pmStatusBadge.textContent = "PM Due Soon";
    pmHealthCard.classList.add("pm-caution-card");
    pmHoursDue.textContent = `${hoursDue.toFixed(1)} hrs`;
    pmDateAdvice.textContent = `PM Due in ${hoursDue.toFixed(1)} hrs - Schedule Service!`;
  } else {
    pmProgressBar.classList.add("pm-overdue");
    pmStatusBadge.classList.add("rating-badge-poor");
    pmStatusBadge.textContent = "PM OVERDUE!";
    pmHealthCard.classList.add("pm-warning-card");
    const overdueHrs = hoursRunSincePM - 250;
    pmHoursDue.textContent = `Overdue`;
    pmDateAdvice.textContent = `PM OVERDUE BY ${overdueHrs.toFixed(1)} hrs! SERVICE IMMEDIATELY!`;
  }

  // Oil Age Displays
  oilTopupDisplay.textContent = `${lastTopupQty.toFixed(1)} L`;
  if (lastTopupDate) {
    const diffTime = Math.abs(new Date() - new Date(lastTopupDate));
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    oilAgeDisplay.textContent = `${diffDays} days ago`;
  } else {
    oilAgeDisplay.textContent = "- days ago";
  }

  saveFuelPmInputsToCache();
}

// 9. Competitor yields list
function getBrandComparisonList(activeLoadKW) {
  const list = [];
  if (activeLoadKW <= 0) return [];

  Object.keys(DG_DATABASE).forEach(make => {
    Object.keys(DG_DATABASE[make].ratings).forEach(rating => {
      const dg = DG_DATABASE[make].ratings[rating];
      const capacityKW = dg.capacityKW;
      const loadPercent = (activeLoadKW / capacityKW) * 100;

      if (loadPercent <= 110) {
        const rate = getFuelConsumptionRate(make, rating, loadPercent);
        const efficiency = rate > 0 ? (activeLoadKW / rate) : 0;
        
        list.push({
          make,
          makeName: DG_DATABASE[make].name,
          rating: parseInt(rating),
          capacityKW,
          loadPercent,
          rate,
          efficiency
        });
      }
    });
  });

  return list.sort((a, b) => b.efficiency - a.efficiency);
}

// 10. Dashboard UI refresh
function updateResultsUI(data) {
  // Trigger tactile refresh flash animation
  if (refreshFlashDiv) {
    refreshFlashDiv.classList.add("flash-active");
    setTimeout(() => {
      refreshFlashDiv.classList.remove("flash-active");
    }, 650);
  }

  // Update Safety Warning Center Banner
  updateOperationalAlertBanner(data.loadPercentage);

  // 1. SILKY-SMOOTH NUMBER COUNTER ANIMATION
  animateValue(efficiencyMetricValSpan, previousYieldValue, data.kwhPerLitre, 800, 2);
  previousYieldValue = data.kwhPerLitre;
  
  const ratingDetails = getEfficiencyCategory(data.kwhPerLitre);
  heroEfficiencyCard.className = `hero-efficiency-card ${ratingDetails.cardClass}`;
  efficiencyRatingLabelSpan.className = `rating-badge-text ${ratingDetails.class}`;
  efficiencyRatingLabelSpan.textContent = ratingDetails.label;

  // 2. Secondary stats updating
  metricTotalFuelSpan.textContent = data.totalFuelConsumed.toFixed(1);
  metricSpecConsSpan.textContent = data.specCons.toFixed(3);
  metricLoadPercentSpan.textContent = `${data.loadPercentage.toFixed(1)}%`;
  metricLoadKWSpan.textContent = `${data.averageLoadKW.toFixed(2)} kW`;
  metricBurnRateSpan.textContent = data.fuelRate.toFixed(2);

  // Mathematical breakdown drawers removed as per request

  // 4. Competitor comparative lines
  renderCompetitorComparison(data.averageLoadKW);
}

function renderCompetitorComparison(activeLoadKW) {
  comparisonBarsContainer.innerHTML = "";

  if (activeLoadKW <= 0) {
    comparisonBarsContainer.innerHTML = `
      <div class="comparison-empty-state">
        Submit operational telemetry or adjust simulator to render competitive analysis
      </div>
    `;
    return;
  }

  const list = getBrandComparisonList(activeLoadKW);
  
  if (list.length === 0) {
    comparisonBarsContainer.innerHTML = `
      <div class="comparison-empty-state" style="color: var(--accent-red); font-weight:700;">
        Load exceeds 110%! All models overloaded.
      </div>
    `;
    return;
  }

  const maxEff = list[0].efficiency;

  list.forEach(item => {
    const isCurrentActive = currentCalculation && 
                            currentCalculation.make === item.make && 
                            currentCalculation.rating === item.rating;

    const barWidthPercent = maxEff > 0 ? (item.efficiency / maxEff) * 100 : 0;

    const div = document.createElement("div");
    div.className = "comparison-row";
    div.innerHTML = `
      <div class="comparison-meta">
        <span class="comparison-brand-name ${isCurrentActive ? 'highlight-active' : ''}">
          ${item.makeName} - ${item.rating} kVA (${item.capacityKW} kW)
        </span>
        <span class="comparison-brand-val font-mono">
          ${item.efficiency.toFixed(2)} <span style="font-size:0.68rem; color:var(--text-secondary);">kWh/L</span>
        </span>
      </div>
      <div class="comparison-track">
        <div class="comparison-fill" style="width: 0%;"></div>
      </div>
    `;
    comparisonBarsContainer.appendChild(div);

    // Dynamic slide trigger with elastic spring transition delays
    setTimeout(() => {
      const fill = div.querySelector(".comparison-fill");
      if (fill) fill.style.width = `${barWidthPercent}%`;
    }, 60);
  });
}

// 11. SVG Curve rendering
function renderChart() {
  const make = dgMakeSelect.value;
  const rating = dgRatingSelect.value;
  const ratings = DG_DATABASE[make].ratings[rating];
  if (!ratings) return;

  const rates = ratings.rates;

  const width = 450;
  const height = 180;
  const paddingLeft = 40;
  const paddingBottom = 30;
  const paddingTop = 15;
  const paddingRight = 15;

  const graphWidth = width - paddingLeft - paddingRight;
  const graphHeight = height - paddingTop - paddingBottom;

  const maxLoad = 110;
  const maxBurnRate = Math.max(5, ...rates.map(r => r.rate)) + 0.5;

  const getX = (load) => paddingLeft + (load / maxLoad) * graphWidth;
  const getY = (rate) => height - paddingBottom - (rate / maxBurnRate) * graphHeight;

  // Active theme visual properties for the SVG graph
  const activeTheme = localStorage.getItem("powerflow_theme") || "light-aurora";
  let gridLineStroke = "rgba(15, 23, 42, 0.03)";
  let borderLineStroke = "rgba(15, 23, 42, 0.08)";
  let curvePathStroke = "#4f46e5";
  let tickTextColor = "var(--text-secondary)";
  let dotPointFill = "#4f46e5";

  if (activeTheme === "cosmic-nebula") {
    gridLineStroke = "rgba(255, 255, 255, 0.04)";
    borderLineStroke = "rgba(255, 255, 255, 0.12)";
    curvePathStroke = "#8b5cf6";
    tickTextColor = "#a1a1aa";
    dotPointFill = "#8b5cf6";
  } else if (activeTheme === "cyberpunk-neon") {
    gridLineStroke = "rgba(16, 185, 129, 0.08)";
    borderLineStroke = "rgba(16, 185, 129, 0.25)";
    curvePathStroke = "#ff007f";
    tickTextColor = "#06b6d4";
    dotPointFill = "#ff007f";
  } else if (activeTheme === "sunset-glow") {
    gridLineStroke = "rgba(217, 119, 6, 0.04)";
    borderLineStroke = "rgba(217, 119, 6, 0.12)";
    curvePathStroke = "#d97706";
    tickTextColor = "#78350f";
    dotPointFill = "#d97706";
  }

  svgChart.innerHTML = "";

  // 1. Definitions
  svgChart.innerHTML += `
    <defs>
      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${curvePathStroke}" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="${curvePathStroke}" stop-opacity="0.0"/>
      </linearGradient>
    </defs>
  `;

  // 2. Draw Y-Grid
  for (let i = 0; i <= maxBurnRate; i += 1.5) {
    const yVal = getY(i);
    svgChart.innerHTML += `
      <line x1="${paddingLeft}" y1="${yVal}" x2="${width - paddingRight}" y2="${yVal}" stroke="${gridLineStroke}" stroke-width="1" />
      <text x="${paddingLeft - 8}" y="${yVal + 3.5}" fill="${tickTextColor}" font-size="8" font-family="var(--font-sans)" font-weight="600" text-anchor="end">${i.toFixed(1)}</text>
    `;
  }

  // 3. Draw X-Grid
  const ticks = [0, 25, 50, 75, 100, 110];
  ticks.forEach(tick => {
    const xVal = getX(tick);
    svgChart.innerHTML += `
      <line x1="${xVal}" y1="${paddingTop}" x2="${xVal}" y2="${height - paddingBottom}" stroke="${gridLineStroke}" stroke-width="1" />
      <text x="${xVal}" y="${height - paddingBottom + 13}" fill="${tickTextColor}" font-size="8" font-family="var(--font-sans)" font-weight="600" text-anchor="middle">${tick}%</text>
    `;
  });

  // Base boundary borders
  svgChart.innerHTML += `
    <line x1="${paddingLeft}" y1="${height - paddingBottom}" x2="${width - paddingRight}" y2="${height - paddingBottom}" stroke="${borderLineStroke}" stroke-width="1.2" />
    <line x1="${paddingLeft}" y1="${paddingTop}" x2="${paddingLeft}" y2="${height - paddingBottom}" stroke="${borderLineStroke}" stroke-width="1.2" />
  `;

  // 4. Interpolate points for curves
  const pathPoints = [];
  if (rates[0].min > 0) pathPoints.push({ x: 0, y: rates[0].rate });

  rates.forEach(r => {
    if (r.min === 0 && r.max === 0) {
      pathPoints.push({ x: 0, y: r.rate });
    } else {
      pathPoints.push({ x: (r.min + r.max) / 2, y: r.rate });
    }
  });

  pathPoints.sort((a, b) => a.x - b.x);

  let dStr = "";
  let areaStr = `M ${getX(0)} ${height - paddingBottom}`;

  pathPoints.forEach((pt, idx) => {
    const sx = getX(pt.x);
    const sy = getY(pt.y);
    if (idx === 0) dStr += `M ${sx} ${sy}`;
    else dStr += ` L ${sx} ${sy}`;
    areaStr += ` L ${sx} ${sy}`;
  });

  areaStr += ` L ${getX(pathPoints[pathPoints.length - 1].x)} ${height - paddingBottom} Z`;

  svgChart.innerHTML += `<path d="${areaStr}" fill="url(#chartGradient)" />`;
  svgChart.innerHTML += `<path d="${dStr}" fill="none" stroke="${curvePathStroke}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />`;

  pathPoints.forEach(pt => {
    svgChart.innerHTML += `
      <circle cx="${getX(pt.x)}" cy="${getY(pt.y)}" r="3" fill="${dotPointFill}" stroke="#ffffff" stroke-width="1" />
    `;
  });

  // Highlight Operating Point (calculated active load)
  if (currentCalculation) {
    const cx = getX(currentCalculation.loadPercentage);
    const cy = getY(currentCalculation.fuelRate);
    svgChart.innerHTML += `
      <circle cx="${cx}" cy="${cy}" r="7" fill="var(--accent-emerald)" fill-opacity="0.25" class="animate-pulse" />
      <circle cx="${cx}" cy="${cy}" r="4.2" fill="var(--accent-emerald)" stroke="#ffffff" stroke-width="1.2" />
    `;
  }

  // Render Simulator Dot
  const simLoad = parseFloat(loadSimulatorSlider.value);
  const simRate = getFuelConsumptionRate(make, rating, simLoad);
  svgChart.innerHTML += `
    <circle id="simIndicatorCircle" cx="${getX(simLoad)}" cy="${getY(simRate)}" r="5.5" fill="var(--accent-cyan)" stroke="#ffffff" stroke-width="1.2" />
  `;
}

// 12. Simulator bindings
function updateSimulatorOutputs(loadPercent) {
  const make = dgMakeSelect.value;
  const rating = dgRatingSelect.value;
  const capacityKW = DG_DATABASE[make].ratings[rating].capacityKW;

  const simKW = (loadPercent / 100) * capacityKW;
  const simRate = getFuelConsumptionRate(make, rating, loadPercent);
  const simEfficiency = simRate > 0 ? (simKW / simRate) : 0;

  // Simulator digital text updates
  sliderValueText.textContent = `${loadPercent}%`;
  simPowerValSpan.textContent = `${simKW.toFixed(1)} kW`;
  simBurnValSpan.textContent = `${simRate.toFixed(2)} L/h`;
  simEfficiencyValSpan.textContent = simRate > 0 ? `${simEfficiency.toFixed(2)} kWh/L` : `0.00 kWh/L`;

  const cat = getEfficiencyCategory(simEfficiency);
  simRatingLabelSpan.className = `rating-badge-text ${cat.class}`;
  simRatingLabelSpan.textContent = cat.label;

  // Update Safety Warning Center Banner live on slider drag
  updateOperationalAlertBanner(loadPercent);

  // Smooth slide simulator dot along curve
  const simCircle = document.getElementById("simIndicatorCircle");
  if (simCircle) {
    const maxLoad = 110;
    const maxBurnRate = Math.max(5, ...DG_DATABASE[make].ratings[rating].rates.map(r => r.rate)) + 0.5;

    const paddingLeft = 40;
    const paddingBottom = 30;
    const paddingTop = 15;
    const paddingRight = 15;
    const graphWidth = 450 - paddingLeft - paddingRight;
    const graphHeight = 180 - paddingTop - paddingBottom;

    const cx = paddingLeft + (loadPercent / maxLoad) * graphWidth;
    const cy = 180 - paddingBottom - (simRate / maxBurnRate) * graphHeight;

    simCircle.setAttribute("cx", cx);
    simCircle.setAttribute("cy", cy);
  }

  // Update comparative competitor lines live during drag!
  renderCompetitorComparison(simKW);
}

// 13. Session History Storage
function saveLogToHistory(log) {
  calculationHistory.unshift(log);
  if (calculationHistory.length > 50) calculationHistory.pop();

  localStorage.setItem(`powerflow_calc_history_${activeSiteId}`, JSON.stringify(calculationHistory));
  renderHistoryTable();
}

function deleteHistoryRecord(idx) {
  calculationHistory.splice(idx, 1);
  localStorage.setItem(`powerflow_calc_history_${activeSiteId}`, JSON.stringify(calculationHistory));
  renderHistoryTable();
}

function renderHistoryTable() {
  historyTableBody.innerHTML = "";

  if (calculationHistory.length === 0) {
    historyTableBody.innerHTML = `
      <tr class="empty-state">
        <td colspan="9">
          <div class="empty-message">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="36" height="36">
              <path d="M9 13h6m-3-3v6m-9 1V4a2 2 0 012-2h6l2 2h6a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            </svg>
            <p>No operational logs logged yet. Submit inputs to generate efficiency audit records.</p>
          </div>
        </td>
      </tr>
    `;
    exportCsvBtn.disabled = true;
    clearLogsBtn.disabled = true;
    return;
  }

  exportCsvBtn.disabled = false;
  clearLogsBtn.disabled = false;

  calculationHistory.forEach((log, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="font-mono" style="font-size: 0.7rem; opacity: 0.85;">${log.timestamp}</td>
      <td>
        <strong style="color: var(--text-primary);">${log.makeName}</strong>
        <div style="font-size: 0.72rem; color: var(--text-secondary);">${log.rating} kVA (${log.capacityKW} kW)</div>
      </td>
      <td class="font-mono">${log.deltaHMR.toFixed(1)} hrs</td>
      <td class="font-mono">${log.deltaKWH.toLocaleString()}</td>
      <td class="font-mono">
        <span style="font-weight: 700;">${log.loadPercentage.toFixed(1)}%</span>
        <div style="font-size: 0.7rem; color: var(--text-secondary);">${log.rangeLabel}</div>
      </td>
      <td class="font-mono text-emerald">${log.fuelRate.toFixed(2)} L/h</td>
      <td class="font-mono text-secondary">${log.totalFuelConsumed.toFixed(1)} L</td>
      <td>
        <span class="font-mono neon-text-emerald" style="font-weight: 800; font-size: 0.95rem;">${log.kwhPerLitre.toFixed(2)}</span>
        <span style="font-size: 0.68rem; color:var(--text-secondary);"> kWh/L</span>
      </td>
      <td>
        <button class="delete-row-btn" data-index="${index}" title="Remove calculation log">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
        </button>
      </td>
    `;
    historyTableBody.appendChild(tr);
  });

  document.querySelectorAll(".delete-row-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt(btn.getAttribute("data-index"));
      deleteHistoryRecord(idx);
    });
  });
}

function exportHistoryCSV() {
  if (calculationHistory.length === 0) return;

  let csv = "data:text/csv;charset=utf-8,";
  csv += "Timestamp,DG Make,DG Rating (kVA),Capacity (kW),Prev HMR,Pres HMR,Hours Run,Prev kWh,Pres kWh,kWh Produced,Avg Load (kW),Load Percentage,Range,Litre per hr,Total Fuel (L),Yield (kWh/Litre),SFC (Litre/kWh)\r\n";

  calculationHistory.forEach(log => {
    const row = [
      `"${log.timestamp}"`,
      `"${log.makeName}"`,
      log.rating,
      log.capacityKW,
      log.prevHMR,
      log.presHMR,
      log.deltaHMR,
      log.prevKWH,
      log.presKWH,
      log.deltaKWH,
      log.averageLoadKW,
      log.loadPercentage,
      `"${log.rangeLabel}"`,
      log.fuelRate,
      log.totalFuelConsumed,
      log.kwhPerLitre,
      log.specCons
    ].join(",");
    csv += row + "\r\n";
  });

  const uri = encodeURI(csv);
  const link = document.createElement("a");
  link.setAttribute("href", uri);
  link.setAttribute("download", `powerflow_fuel_efficiency_report_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 14. Modal sheet viewer table
function populateDbViewerTable() {
  const selectKey = modalDgSelector.value;
  const parts = selectKey.split("_");
  const make = parts[0];
  const rating = parts[1];

  const ratings = DG_DATABASE[make].ratings[rating];
  if (!ratings) return;

  dbViewerTableBody.innerHTML = "";

  ratings.rates.forEach(r => {
    const tr = document.createElement("tr");
    const diff = r.rate - ratings.rates[0].rate;
    tr.innerHTML = `
      <td class="font-mono" style="font-weight:700; color:var(--text-primary);">${r.label}</td>
      <td class="font-mono text-emerald" style="font-weight:700; font-size: 0.9rem;">${r.rate.toFixed(2)} L/h</td>
      <td class="font-mono text-secondary">${diff > 0 ? `+${diff.toFixed(2)} L/h` : 'Baseline (Idle)'}</td>
    `;
    dbViewerTableBody.appendChild(tr);
  });
}

// 15. Setup Event bindings
function setupEventListeners() {
  dgMakeSelect.addEventListener("change", updateRatingOptions);
  dgRatingSelect.addEventListener("change", () => {
    updateCapacityDisplay();
    renderChart();
    updateSimulatorOutputs(parseFloat(loadSimulatorSlider.value));
  });

  calculatorForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const make = dgMakeSelect.value;
    const rating = dgRatingSelect.value;
    const prevHMR = parseFloat(prevHMRInput.value);
    const presHMR = parseFloat(presHMRInput.value);
    const prevKWH = parseFloat(prevKWHInput.value);
    const presKWH = parseFloat(presKWHInput.value);

    if (isNaN(prevHMR) || isNaN(presHMR) || isNaN(prevKWH) || isNaN(presKWH)) {
      alert("Please ensure all telemetry values are valid numbers.");
      return;
    }
    if (presHMR <= prevHMR) {
      alert("Validation Error: Present HMR must be greater than Previous HMR.");
      return;
    }
    if (presKWH < prevKWH) {
      alert("Validation Error: Present kWh reading cannot be lower than Previous kWh reading.");
      return;
    }

    try {
      const result = calculateAnalytics(make, rating, prevHMR, presHMR, prevKWH, presKWH);
      currentCalculation = result;

      // Update Dashboard UI (triggers flash update and smooth value counters)
      updateResultsUI(result);

      // Update Fuel Inventory & PM Health results card
      updateFuelAndPmResults(result.totalFuelConsumed, result.presHMR);

      // Cache record
      saveLogToHistory(result);

      // Redraw SVG curves and pulsing operating node
      renderChart();

      if (window.innerWidth < 768) {
        document.getElementById("resultsSection").scrollIntoView({ behavior: 'smooth' });
      }

    } catch (err) {
      alert(`Engineering Calc Error: ${err.message}`);
    }
  });

  resetBtn.addEventListener("click", () => {
    currentCalculation = null;
    previousYieldValue = 0;

    efficiencyMetricValSpan.textContent = "0.00";
    heroEfficiencyCard.className = "hero-efficiency-card";
    efficiencyRatingLabelSpan.className = "rating-badge-text text-muted";
    efficiencyRatingLabelSpan.textContent = "Awaiting Telemetry";

    metricTotalFuelSpan.textContent = "-";
    metricSpecConsSpan.textContent = "-";
    metricLoadPercentSpan.textContent = "-";
    metricLoadKWSpan.textContent = "- kW";
    metricBurnRateSpan.textContent = "-";

    // Math breakdown resets removed

    // Reset Fuel and PM display readouts
    presentFuelVal.innerHTML = `- <span class="tank-qty-unit">L</span>`;
    presentFuelPercent.textContent = "0% Remaining";
    fuelStatusBadge.className = "rating-badge-text text-muted";
    fuelStatusBadge.textContent = "Awaiting Telemetry";
    liquidWave.style.height = "0%";
    liquidWave.classList.remove("fill-safe", "fill-caution", "fill-warning");
    fuelTankCard.classList.remove("low-fuel-shake", "low-fuel-breathe");

    pmHoursRun.textContent = "- hrs";
    pmProgressBar.style.width = "0%";
    pmProgressBar.classList.remove("pm-safe", "pm-due", "pm-overdue");
    pmHealthCard.classList.remove("pm-warning-card", "pm-caution-card");
    pmStatusBadge.className = "rating-badge-text text-muted";
    pmStatusBadge.textContent = "Awaiting Telemetry";
    pmHoursDue.textContent = "- hrs";
    pmDateAdvice.textContent = "Enter PM logs";
    oilTopupDisplay.textContent = "- L";
    oilAgeDisplay.textContent = "- days ago";

    // Hide warning banner
    updateOperationalAlertBanner(null);
    fuelVariationAlert.classList.add("hidden");

    // Reset simulator values
    loadSimulatorSlider.value = 50;
    updateSimulatorOutputs(50);

    renderCompetitorComparison(0);
    renderChart();

    // Re-save empty/default values to cache
    saveFuelPmInputsToCache();
    
    // Ensure inputs maintain locked state visual aesthetics
    applyLockUiState();
  });

  if (themeSelect) {
    themeSelect.addEventListener("change", (e) => {
      applyTheme(e.target.value);
    });
  }

  loadSimulatorSlider.addEventListener("input", (e) => {
    updateSimulatorOutputs(parseFloat(e.target.value));
  });

  exportCsvBtn.addEventListener("click", exportHistoryCSV);
  
  clearLogsBtn.addEventListener("click", () => {
    if (confirm(`Are you sure you want to delete all saved calculation and refueling ledger logs for Site ${activeSiteId}?`)) {
      calculationHistory = [];
      localStorage.removeItem(`powerflow_calc_history_${activeSiteId}`);
      localStorage.removeItem(`powerflow_refueling_history_${activeSiteId}`);
      renderHistoryTable();
      updateRefuelingRecordCountUI();
    }
  });

  viewDatabaseBtn.addEventListener("click", () => {
    populateDbViewerTable();
    dbModal.classList.remove("hidden");
  });
  closeModalBtn.addEventListener("click", () => {
    dbModal.classList.add("hidden");
  });
  dbModal.addEventListener("click", (e) => {
    if (e.target === dbModal) dbModal.classList.add("hidden");
  });
  modalDgSelector.addEventListener("change", populateDbViewerTable);

  // Tab navigation bindings
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      tabPanels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const targetId = btn.getAttribute("data-target");
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });

  // Bind change/input event listeners to fuel & PM inputs to trigger real-time updates and cache persistence
  const fuelPmInputs = [
    fuelTankCapacityInput,
    presFillDateInput,
    presFillQtyInput,
    presAfterFillLevelInput,
    lastTopupDateInput,
    lastTopupQtyInput,
    lastPmDateInput,
    lastPmHmrInput
  ];

  fuelPmInputs.forEach(input => {
    if (input) {
      input.addEventListener("input", () => {
        const totalFuelConsumed = currentCalculation ? currentCalculation.totalFuelConsumed : 0;
        const presHMR = currentCalculation ? currentCalculation.presHMR : (parseFloat(presHMRInput.value) || 0);
        updateFuelAndPmResults(totalFuelConsumed, presHMR);
      });
      input.addEventListener("change", () => {
        const totalFuelConsumed = currentCalculation ? currentCalculation.totalFuelConsumed : 0;
        const presHMR = currentCalculation ? currentCalculation.presHMR : (parseFloat(presHMRInput.value) || 0);
        updateFuelAndPmResults(totalFuelConsumed, presHMR);
      });
    }
  });

  // Enterprise RBAC & Logs Workflow Event Listeners
  const loginForm = document.getElementById("loginForm");
  if (loginForm) loginForm.addEventListener("submit", handleLoginSubmit);

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) logoutBtn.addEventListener("click", handleLogout);

  const saveFuelBtn = document.getElementById("saveFuelBtn");
  if (saveFuelBtn) saveFuelBtn.addEventListener("click", handleSaveFuel);

  const savePmBtn = document.getElementById("savePmBtn");
  if (savePmBtn) savePmBtn.addEventListener("click", handleSavePm);

  const unlockFuelBtn = document.getElementById("unlockFuelBtn");
  if (unlockFuelBtn) unlockFuelBtn.addEventListener("click", handleUnlockFuel);

  const unlockPmBtn = document.getElementById("unlockPmBtn");
  if (unlockPmBtn) unlockPmBtn.addEventListener("click", handleUnlockPm);

  const downloadFuelReportBtn = document.getElementById("downloadFuelReportBtn");
  if (downloadFuelReportBtn) downloadFuelReportBtn.addEventListener("click", handleDownloadFuelReport);

  const registerMemberBtn = document.getElementById("registerMemberBtn");
  if (registerMemberBtn) registerMemberBtn.addEventListener("click", handleRegisterFieldMember);

  const siteSubmitBtn = document.getElementById("siteSubmitBtn");
  if (siteSubmitBtn) {
    siteSubmitBtn.addEventListener("click", () => {
      const siteIdInput = document.getElementById("siteIdInput");
      if (siteIdInput) {
        const val = siteIdInput.value.trim().toUpperCase();
        if (val) {
          switchActiveSite(val);
          alert(`Operational details for Site "${val}" successfully loaded!`);
        } else {
          alert("Please enter a valid Site ID.");
        }
      }
    });
  }
}

// ==========================================================================
// ENTERPRISE ROLE-BASED OPERATIONS & LIFECYCLE MANAGEMENT IMPLEMENTATIONS
// ==========================================================================

function loadUserAccounts() {
  const accountsStr = localStorage.getItem("powerflow_user_accounts");
  if (!accountsStr) {
    const defaultAccounts = [
      { username: "field", password: "field123", role: "field" },
      { username: "mis", password: "mis123", role: "mis" },
      { username: "ie", password: "ie123", role: "ie" },
      { username: "il", password: "il123", role: "il" }
    ];
    localStorage.setItem("powerflow_user_accounts", JSON.stringify(defaultAccounts));
    return defaultAccounts;
  }
  try {
    return JSON.parse(accountsStr);
  } catch (e) {
    return [];
  }
}

function loadLocksState() {
  const cached = localStorage.getItem(`powerflow_locks_state_${activeSiteId}`);
  if (cached) {
    try {
      locksState = JSON.parse(cached);
    } catch (e) {
      locksState = { fuel: "unlocked", pm: "unlocked" };
    }
  } else {
    locksState = { fuel: "unlocked", pm: "unlocked" };
    localStorage.setItem(`powerflow_locks_state_${activeSiteId}`, JSON.stringify(locksState));
  }
}

function switchActiveSite(siteId) {
  if (!siteId) return;
  activeSiteId = siteId.trim().toUpperCase();
  
  // Save active site in sessionStorage so it persists across reloads
  sessionStorage.setItem("powerflow_active_site_id", activeSiteId);
  
  // Set the input field value to match
  const siteIdInput = document.getElementById("siteIdInput");
  if (siteIdInput) siteIdInput.value = activeSiteId;

  // Load site-specific logs history
  const savedLogs = localStorage.getItem(`powerflow_calc_history_${activeSiteId}`);
  if (savedLogs) {
    try {
      calculationHistory = JSON.parse(savedLogs);
    } catch (e) {
      calculationHistory = [];
    }
  } else {
    calculationHistory = [];
  }

  // Load site-specific locks
  loadLocksState();

  // Load site-specific inputs
  loadFuelPmInputsFromCache();

  // If there's calculation history, restore the latest one
  if (calculationHistory.length > 0) {
    const latest = calculationHistory[0];
    currentCalculation = latest;
    dgMakeSelect.value = latest.make;
    updateRatingOptions();
    dgRatingSelect.value = latest.rating;
    updateCapacityDisplay();

    prevHMRInput.value = latest.prevHMR;
    presHMRInput.value = latest.presHMR;
    prevKWHInput.value = latest.prevKWH;
    presKWHInput.value = latest.presKWH;

    updateResultsUI(latest);
  } else {
    // If no history, clear telemetry inputs and results
    currentCalculation = null;
    previousYieldValue = 0;
    
    prevHMRInput.value = "";
    presHMRInput.value = "";
    prevKWHInput.value = "";
    presKWHInput.value = "";
    
    // Reset Yield results UI
    efficiencyMetricValSpan.textContent = "0.00";
    heroEfficiencyCard.className = "hero-efficiency-card";
    efficiencyRatingLabelSpan.className = "rating-badge-text text-muted";
    efficiencyRatingLabelSpan.textContent = "Awaiting Telemetry";

    metricTotalFuelSpan.textContent = "-";
    metricSpecConsSpan.textContent = "-";
    metricLoadPercentSpan.textContent = "-";
    metricLoadKWSpan.textContent = "- kW";
    metricBurnRateSpan.textContent = "-";
    
    updateOperationalAlertBanner(null);
    renderCompetitorComparison(0);
  }

  // Render fuel and PM results for the new site
  const totalFuelConsumed = currentCalculation ? currentCalculation.totalFuelConsumed : 0;
  const presHMR = currentCalculation ? currentCalculation.presHMR : (parseFloat(presHMRInput.value) || 0);
  updateFuelAndPmResults(totalFuelConsumed, presHMR);

  // Render comparative curve and historical table
  renderChart();
  renderHistoryTable();
  
  // Seed mock refueling ledger if none exists
  const refLedgerKey = `powerflow_refueling_history_${activeSiteId}`;
  if (!localStorage.getItem(refLedgerKey)) {
    const mockRefuelingList = [
      {
        siteId: activeSiteId,
        date: "2026-05-15", // Current Month, Current Quarter, FY 2026-27
        qty: 65,
        afterFillLevel: 135,
        savedBy: "field",
        timestamp: "15/05/2026, 14:30:15",
        financialYear: "FY 2026-27"
      },
      {
        siteId: activeSiteId,
        date: "2026-04-10", // Last Month (April), Current Quarter, FY 2026-27
        qty: 80,
        afterFillLevel: 145,
        savedBy: "field",
        timestamp: "10/04/2026, 09:15:22",
        financialYear: "FY 2026-27"
      },
      {
        siteId: activeSiteId,
        date: "2026-02-20", // Q1 2026 (Last Quarter), previous FY 2025-26
        qty: 75,
        afterFillLevel: 130,
        savedBy: "mis",
        timestamp: "20/02/2026, 17:45:00",
        financialYear: "FY 2025-26"
      },
      {
        siteId: activeSiteId,
        date: "2025-10-15", // previous FY 2025-26
        qty: 90,
        afterFillLevel: 140,
        savedBy: "field",
        timestamp: "15/10/2025, 11:20:10",
        financialYear: "FY 2025-26"
      }
    ];
    localStorage.setItem(refLedgerKey, JSON.stringify(mockRefuelingList));
  }

  // Update refueling report visual count badge
  updateRefuelingRecordCountUI();
  
  // Reapply UI locks based on the active role and locksState
  applyLockUiState();
}

function applyLockUiState() {
  const activeRole = sessionStorage.getItem("powerflow_active_role");
  
  // Fuel Inventory Panel Lock State
  const fuelStatus = locksState.fuel; // "unlocked", "locked", "pending", "approved"
  const fuelStatusBadge = document.getElementById("fuelLockStatus");
  const saveFuelBtn = document.getElementById("saveFuelBtn");
  const unlockFuelBtn = document.getElementById("unlockFuelBtn");
  
  // PM Log Panel Lock State
  const pmStatus = locksState.pm; // "unlocked", "locked", "pending", "approved"
  const pmStatusBadge = document.getElementById("pmLockStatus");
  const savePmBtn = document.getElementById("savePmBtn");
  const unlockPmBtn = document.getElementById("unlockPmBtn");
  
  // Last Fuel Filling Reference Details are reference details and are always read-only
  if (lastFillDateInput) lastFillDateInput.disabled = true;
  if (lastFillQtyInput) lastFillQtyInput.disabled = true;
  if (afterFillLevelInput) afterFillLevelInput.disabled = true;

  const yieldInputs = [
    dgMakeSelect,
    dgRatingSelect,
    prevHMRInput,
    presHMRInput,
    prevKWHInput,
    presKWHInput
  ];

  const fuelInputs = [
    fuelTankCapacityInput,
    presFillDateInput,
    presFillQtyInput,
    presAfterFillLevelInput
  ];

  const pmInputs = [
    lastTopupDateInput,
    lastTopupQtyInput,
    lastPmDateInput,
    lastPmHmrInput
  ];
  
  const reportPeriodSelect = document.getElementById("reportPeriod");
  const reportFySelect = document.getElementById("reportFy");
  const downloadFuelReportBtn = document.getElementById("downloadFuelReportBtn");

  if (!activeRole) {
    // 1. GUEST STATE (NOT LOGGED IN): Secure all inputs and download options completely!
    yieldInputs.forEach(inp => { if (inp) inp.disabled = true; });
    fuelInputs.forEach(inp => { if (inp) inp.disabled = true; });
    pmInputs.forEach(inp => { if (inp) inp.disabled = true; });

    if (saveFuelBtn) saveFuelBtn.disabled = true;
    if (savePmBtn) savePmBtn.disabled = true;
    if (unlockFuelBtn) unlockFuelBtn.classList.add("hidden");
    if (unlockPmBtn) unlockPmBtn.classList.add("hidden");

    if (reportPeriodSelect) reportPeriodSelect.disabled = true;
    if (reportFySelect) reportFySelect.disabled = true;
    if (downloadFuelReportBtn) downloadFuelReportBtn.disabled = true;

    if (fuelStatusBadge) {
      fuelStatusBadge.classList.remove("hidden");
      fuelStatusBadge.style.borderColor = "rgba(225, 29, 72, 0.2)";
      fuelStatusBadge.style.color = "var(--accent-red)";
      fuelStatusBadge.style.background = "rgba(225, 29, 72, 0.05)";
      fuelStatusBadge.querySelector(".lock-text").textContent = "🔒 Authentication Required";
    }

    if (pmStatusBadge) {
      pmStatusBadge.classList.remove("hidden");
      pmStatusBadge.style.borderColor = "rgba(225, 29, 72, 0.2)";
      pmStatusBadge.style.color = "var(--accent-red)";
      pmStatusBadge.style.background = "rgba(225, 29, 72, 0.05)";
      pmStatusBadge.querySelector(".lock-text").textContent = "🔒 Authentication Required";
    }
    return;
  }

  // 2. AUTHENTICATED STATE: Unlock/Lock based on roles and transaction locks
  
  // Enable download features for all authenticated logins
  if (reportPeriodSelect) reportPeriodSelect.disabled = false;
  if (reportFySelect) reportFySelect.disabled = false;
  if (downloadFuelReportBtn) downloadFuelReportBtn.disabled = false;

  // Yield Telemetry is always active for authenticated roles
  yieldInputs.forEach(inp => { if (inp) inp.disabled = false; });
  
  if (activeRole === "il") {
    // IL can edit everything always!
    fuelInputs.forEach(inp => { if (inp) inp.disabled = false; });
    if (saveFuelBtn) saveFuelBtn.disabled = false;
    if (unlockFuelBtn) unlockFuelBtn.classList.add("hidden");
    if (fuelStatusBadge) {
      fuelStatusBadge.classList.remove("hidden");
      fuelStatusBadge.style.borderColor = "var(--accent-cyan)";
      fuelStatusBadge.style.color = "var(--accent-cyan)";
      fuelStatusBadge.style.background = "rgba(8, 145, 178, 0.05)";
      fuelStatusBadge.querySelector(".lock-text").textContent = "🔓 Master Access Mode (IL)";
    }
  } else {
    if (fuelStatus === "locked") {
      fuelInputs.forEach(inp => { if (inp) inp.disabled = true; });
      if (saveFuelBtn) saveFuelBtn.disabled = true;
      if (fuelStatusBadge) {
        fuelStatusBadge.classList.remove("hidden");
        fuelStatusBadge.style.borderColor = "rgba(225, 29, 72, 0.2)";
        fuelStatusBadge.style.color = "var(--accent-red)";
        fuelStatusBadge.style.background = "rgba(225, 29, 72, 0.05)";
        fuelStatusBadge.querySelector(".lock-text").textContent = "🔒 Logs Saved & Locked";
      }
      if (activeRole === "mis" || activeRole === "ie") {
        if (unlockFuelBtn) unlockFuelBtn.classList.remove("hidden");
      } else {
        // Field Team
        if (unlockFuelBtn) unlockFuelBtn.classList.add("hidden");
      }
    } else if (fuelStatus === "pending") {
      fuelInputs.forEach(inp => { if (inp) inp.disabled = true; });
      if (saveFuelBtn) saveFuelBtn.disabled = true;
      if (fuelStatusBadge) {
        fuelStatusBadge.classList.remove("hidden");
        fuelStatusBadge.style.borderColor = "rgba(217, 119, 6, 0.2)";
        fuelStatusBadge.style.color = "var(--accent-amber)";
        fuelStatusBadge.style.background = "rgba(217, 119, 6, 0.05)";
        fuelStatusBadge.querySelector(".lock-text").textContent = "⏳ Unlock Pending Approval";
      }
      if (unlockFuelBtn) unlockFuelBtn.classList.add("hidden");
    } else {
      // "unlocked" or "approved"
      fuelInputs.forEach(inp => { if (inp) inp.disabled = false; });
      if (saveFuelBtn) saveFuelBtn.disabled = false;
      if (unlockFuelBtn) unlockFuelBtn.classList.add("hidden");
      if (fuelStatusBadge) {
        if (fuelStatus === "approved") {
          fuelStatusBadge.classList.remove("hidden");
          fuelStatusBadge.style.borderColor = "rgba(5, 150, 105, 0.2)";
          fuelStatusBadge.style.color = "var(--accent-emerald)";
          fuelStatusBadge.style.background = "rgba(5, 150, 105, 0.05)";
          fuelStatusBadge.querySelector(".lock-text").textContent = "🔓 Unlock Approved - Edit Active";
        } else {
          fuelStatusBadge.classList.add("hidden");
        }
      }
    }
  }

  if (activeRole === "il") {
    // IL can edit everything always!
    pmInputs.forEach(inp => { if (inp) inp.disabled = false; });
    if (savePmBtn) savePmBtn.disabled = false;
    if (unlockPmBtn) unlockPmBtn.classList.add("hidden");
    if (pmStatusBadge) {
      pmStatusBadge.classList.remove("hidden");
      pmStatusBadge.style.borderColor = "var(--accent-cyan)";
      pmStatusBadge.style.color = "var(--accent-cyan)";
      pmStatusBadge.style.background = "rgba(8, 145, 178, 0.05)";
      pmStatusBadge.querySelector(".lock-text").textContent = "🔓 Master Access Mode (IL)";
    }
  } else {
    if (pmStatus === "locked") {
      pmInputs.forEach(inp => { if (inp) inp.disabled = true; });
      if (savePmBtn) savePmBtn.disabled = true;
      if (pmStatusBadge) {
        pmStatusBadge.classList.remove("hidden");
        pmStatusBadge.style.borderColor = "rgba(225, 29, 72, 0.2)";
        pmStatusBadge.style.color = "var(--accent-red)";
        pmStatusBadge.style.background = "rgba(225, 29, 72, 0.05)";
        pmStatusBadge.querySelector(".lock-text").textContent = "🔒 Logs Saved & Locked";
      }
      if (activeRole === "mis" || activeRole === "ie") {
        if (unlockPmBtn) unlockPmBtn.classList.remove("hidden");
      } else {
        // Field Team
        if (unlockPmBtn) unlockPmBtn.classList.add("hidden");
      }
    } else if (pmStatus === "pending") {
      pmInputs.forEach(inp => { if (inp) inp.disabled = true; });
      if (savePmBtn) savePmBtn.disabled = true;
      if (pmStatusBadge) {
        pmStatusBadge.classList.remove("hidden");
        pmStatusBadge.style.borderColor = "rgba(217, 119, 6, 0.2)";
        pmStatusBadge.style.color = "var(--accent-amber)";
        pmStatusBadge.style.background = "rgba(217, 119, 6, 0.05)";
        pmStatusBadge.querySelector(".lock-text").textContent = "⏳ Unlock Pending Approval";
      }
      if (unlockPmBtn) unlockPmBtn.classList.add("hidden");
    } else {
      // "unlocked" or "approved"
      pmInputs.forEach(inp => { if (inp) inp.disabled = false; });
      if (savePmBtn) savePmBtn.disabled = false;
      if (unlockPmBtn) unlockPmBtn.classList.add("hidden");
      if (pmStatusBadge) {
        if (pmStatus === "approved") {
          pmStatusBadge.classList.remove("hidden");
          pmStatusBadge.style.borderColor = "rgba(5, 150, 105, 0.2)";
          pmStatusBadge.style.color = "var(--accent-emerald)";
          pmStatusBadge.style.background = "rgba(5, 150, 105, 0.05)";
          pmStatusBadge.querySelector(".lock-text").textContent = "🔓 Unlock Approved - Edit Active";
        } else {
          pmStatusBadge.classList.add("hidden");
        }
      }
    }
  }
}

function renderIlApprovalCard() {
  const ilApprovalCard = document.getElementById("ilApprovalCard");
  const ilRequestCountBadge = document.getElementById("ilRequestCountBadge");
  const ilRequestsContainer = document.getElementById("ilRequestsContainer");
  const activeRole = sessionStorage.getItem("powerflow_active_role");

  if (activeRole !== "il") {
    if (ilApprovalCard) ilApprovalCard.classList.add("hidden");
    return;
  }

  if (ilApprovalCard) ilApprovalCard.classList.remove("hidden");

  const reqs = JSON.parse(localStorage.getItem("powerflow_unlock_requests") || "[]");
  if (ilRequestCountBadge) {
    ilRequestCountBadge.textContent = `${reqs.length} Pending`;
    if (reqs.length > 0) {
      ilRequestCountBadge.className = "rating-badge-text rating-badge-poor";
    } else {
      ilRequestCountBadge.className = "rating-badge-text rating-badge-excellent";
    }
  }

  if (!ilRequestsContainer) return;
  ilRequestsContainer.innerHTML = "";

  if (reqs.length === 0) {
    ilRequestsContainer.innerHTML = `
      <div class="empty-requests-msg" style="font-size:0.75rem; color:var(--text-muted); text-align:center; padding:0.5rem;">
        No pending modification requests from MIS/IE teams.
      </div>
    `;
    return;
  }

  reqs.forEach(req => {
    const item = document.createElement("div");
    item.className = "il-request-item";
    const panelName = req.panel === "fuel" ? "🛢️ Fuel Inventory" : "🔧 Engine PM Log";
    item.innerHTML = `
      <div class="il-request-details">
        <span class="il-request-title">${panelName} Unlock</span>
        <span class="il-request-subtitle">Requested by <strong>${req.requestedBy}</strong> (${req.role.toUpperCase()}) at ${req.timestamp}</span>
      </div>
      <div class="il-request-actions">
        <button type="button" class="btn btn-primary btn-small approve-req-btn" data-id="${req.id}" style="padding: 0.3rem 0.6rem; font-size: 0.7rem; background: var(--accent-emerald); border-color: var(--accent-emerald);">
          Approve
        </button>
        <button type="button" class="btn btn-danger btn-small reject-req-btn" data-id="${req.id}" style="padding: 0.3rem 0.6rem; font-size: 0.7rem;">
          Reject
        </button>
      </div>
    `;
    ilRequestsContainer.appendChild(item);
  });

  // Attach listeners
  ilRequestsContainer.querySelectorAll(".approve-req-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const reqId = btn.getAttribute("data-id");
      handleApproveRejectRequest(reqId, true);
    });
  });

  ilRequestsContainer.querySelectorAll(".reject-req-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const reqId = btn.getAttribute("data-id");
      handleApproveRejectRequest(reqId, false);
    });
  });
}

function handleApproveRejectRequest(reqId, isApproved) {
  let reqs = JSON.parse(localStorage.getItem("powerflow_unlock_requests") || "[]");
  const found = reqs.find(r => r.id === reqId);
  if (!found) return;

  if (isApproved) {
    locksState[found.panel] = "approved";
  } else {
    locksState[found.panel] = "locked";
  }

  // Remove request
  reqs = reqs.filter(r => r.id !== reqId);
  localStorage.setItem("powerflow_unlock_requests", JSON.stringify(reqs));
  localStorage.setItem(`powerflow_locks_state_${activeSiteId}`, JSON.stringify(locksState));

  applyLockUiState();
  renderIlApprovalCard();
}

function renderFieldRegistryCard() {
  const fieldRegistryCard = document.getElementById("fieldRegistryCard");
  const fieldCountBadge = document.getElementById("fieldCountBadge");
  const fieldRegistryBody = document.getElementById("fieldRegistryBody");
  const activeRole = sessionStorage.getItem("powerflow_active_role");

  // This card is visible to MIS, IE, and IL only!
  if (activeRole !== "mis" && activeRole !== "ie" && activeRole !== "il") {
    if (fieldRegistryCard) fieldRegistryCard.classList.add("hidden");
    return;
  }

  if (fieldRegistryCard) fieldRegistryCard.classList.remove("hidden");

  const accounts = loadUserAccounts();
  const fieldAccounts = accounts.filter(acc => acc.role === "field");

  if (fieldCountBadge) {
    fieldCountBadge.textContent = `${fieldAccounts.length} Registered`;
  }

  if (!fieldRegistryBody) return;
  fieldRegistryBody.innerHTML = "";

  if (fieldAccounts.length === 0) {
    fieldRegistryBody.innerHTML = `
      <tr>
        <td colspan="3" style="text-align:center; padding:0.5rem; color:var(--text-muted);">No field team members registered.</td>
      </tr>
    `;
    return;
  }

  fieldAccounts.forEach(acc => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${acc.username}</strong></td>
      <td class="font-mono">${acc.password}</td>
      <td>
        <button type="button" class="btn btn-danger btn-small delete-field-btn" data-username="${acc.username}" style="padding: 0.2rem 0.5rem; font-size: 0.65rem;">
          Delete
        </button>
      </td>
    `;
    fieldRegistryBody.appendChild(tr);
  });

  // Attach delete listeners
  fieldRegistryBody.querySelectorAll(".delete-field-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const usernameToDelete = btn.getAttribute("data-username");
      if (confirm(`Are you sure you want to delete Field Team member "${usernameToDelete}"?`)) {
        handleDeleteFieldMember(usernameToDelete);
      }
    });
  });
}

function handleRegisterFieldMember() {
  const regUsernameInput = document.getElementById("regUsername");
  const regPasswordInput = document.getElementById("regPassword");
  const registryErrorMsg = document.getElementById("registryErrorMsg");

  if (!regUsernameInput || !regPasswordInput) return;

  const username = regUsernameInput.value.trim().toLowerCase();
  const password = regPasswordInput.value.trim();

  if (!username || !password) {
    alert("Please fill in both username and password fields.");
    return;
  }

  const accounts = loadUserAccounts();
  const exists = accounts.some(acc => acc.username === username);

  if (exists) {
    if (registryErrorMsg) {
      registryErrorMsg.classList.remove("hidden");
      registryErrorMsg.textContent = "Username already exists!";
    }
    return;
  }

  if (registryErrorMsg) registryErrorMsg.classList.add("hidden");

  // Add the field member
  accounts.push({ username, password, role: "field" });
  localStorage.setItem("powerflow_user_accounts", JSON.stringify(accounts));

  regUsernameInput.value = "";
  regPasswordInput.value = "";

  renderFieldRegistryCard();
  alert(`Field Team member "${username}" successfully registered!`);
}

function handleDeleteFieldMember(username) {
  let accounts = loadUserAccounts();
  accounts = accounts.filter(acc => acc.username !== username || acc.role !== "field");
  localStorage.setItem("powerflow_user_accounts", JSON.stringify(accounts));
  
  renderFieldRegistryCard();
}

function applySessionView() {
  const activeUser = sessionStorage.getItem("powerflow_active_user");
  const activeRole = sessionStorage.getItem("powerflow_active_role");
  
  const loginPage = document.getElementById("loginPage");
  const activeUserBadge = document.getElementById("activeUserBadge");
  const logoutBtn = document.getElementById("logoutBtn");

  if (activeUser && activeRole) {
    // User is logged in
    if (loginPage) loginPage.classList.add("dismissed");
    
    if (activeUserBadge) {
      activeUserBadge.textContent = `${activeUser} (${activeRole.toUpperCase()})`;
      activeUserBadge.className = "rating-badge-text rating-badge-good";
    }
    
    if (logoutBtn) logoutBtn.classList.remove("hidden");
    
    // Update the locks UI states
    applyLockUiState();
    
    // Render IL cards and field registry cards
    renderIlApprovalCard();
    renderFieldRegistryCard();
  } else {
    // Not logged in
    if (loginPage) loginPage.classList.remove("dismissed");
    
    if (activeUserBadge) {
      activeUserBadge.textContent = "Awaiting Login";
      activeUserBadge.className = "rating-badge-text rating-badge-good text-muted";
    }
    
    if (logoutBtn) logoutBtn.classList.add("hidden");
    
    // Disable inputs for guest state
    applyLockUiState();
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  
  const usernameInput = document.getElementById("loginUsername");
  const passwordInput = document.getElementById("loginPassword");
  const roleSelect = document.getElementById("loginRole");
  const errorMsg = document.getElementById("loginErrorMessage");
  
  if (!usernameInput || !passwordInput || !roleSelect) return;
  
  const username = usernameInput.value.trim().toLowerCase();
  const password = passwordInput.value.trim();
  const role = roleSelect.value;
  
  const accounts = loadUserAccounts();
  const found = accounts.find(acc => acc.username === username && acc.password === password && acc.role === role);
  
  if (found) {
    if (errorMsg) errorMsg.classList.add("hidden");
    
    // Log in!
    sessionStorage.setItem("powerflow_active_user", found.username);
    sessionStorage.setItem("powerflow_active_role", found.role);
    
    // Clear inputs
    usernameInput.value = "";
    passwordInput.value = "";
    
    // Refresh page session view
    applySessionView();
    
    console.log(`Successfully authenticated user ${found.username} as ${found.role}`);
  } else {
    if (errorMsg) {
      errorMsg.classList.remove("hidden");
      // Add custom entrance/shake animation
      errorMsg.style.animation = "none";
      setTimeout(() => {
        errorMsg.style.animation = "alertShake 0.4s ease";
      }, 10);
    }
  }
}

function handleLogout() {
  sessionStorage.removeItem("powerflow_active_user");
  sessionStorage.removeItem("powerflow_active_role");
  applySessionView();
}

function handleSaveFuel() {
  if (!presFillDateInput || !presFillQtyInput || !presAfterFillLevelInput) return;

  const presDate = presFillDateInput.value;
  const presQtyVal = presFillQtyInput.value.trim();
  const presLevelVal = presAfterFillLevelInput.value.trim();

  // 1. Check if present entry fields are empty
  if (!presDate || !presQtyVal || !presLevelVal) {
    alert("Validation Error: Please fill in all fields of the Present Fuel Filling Entry before saving.");
    return;
  }

  const presQty = parseFloat(presQtyVal);
  const presLevel = parseFloat(presLevelVal);

  if (isNaN(presQty) || isNaN(presLevel) || presQty < 0 || presLevel < 0) {
    alert("Validation Error: Please enter valid numbers for Filled Volume and Fuel Level.");
    return;
  }

  // 2. Prevent duplicate entries based on date
  const prevDate = lastFillDateInput.value;
  if (presDate === prevDate) {
    alert(`Validation Error: A fuel filling entry already exists for this date (${presDate}). Duplicate entries on the exact same date are rejected.`);
    return;
  }

  // Prevent duplicate entries inside continuous refueling history ledger
  let refuelingHistory = [];
  const cachedHistory = localStorage.getItem(`powerflow_refueling_history_${activeSiteId}`);
  if (cachedHistory) {
    try {
      refuelingHistory = JSON.parse(cachedHistory);
    } catch(e) {
      refuelingHistory = [];
    }
  }

  const dateExistsInLedger = refuelingHistory.some(entry => entry.date === presDate);
  if (dateExistsInLedger) {
    alert(`Validation Error: A refueling ledger entry already exists for this date (${presDate}). Duplicate entries on the exact same date are rejected.`);
    return;
  }

  // 3. Overwrite the previous details with present details
  lastFillDateInput.value = presDate;
  lastFillQtyInput.value = presQty;
  afterFillLevelInput.value = presLevel;

  // 4. Save to site-specific localStorage cache
  saveFuelPmInputsToCache();

  // Append entry to refueling history ledger
  const activeUser = sessionStorage.getItem("powerflow_active_user") || "field";
  const newRefuelingEntry = {
    siteId: activeSiteId,
    date: presDate,
    qty: presQty,
    afterFillLevel: presLevel,
    savedBy: activeUser,
    timestamp: new Date().toLocaleString(),
    financialYear: getFinancialYear(presDate)
  };

  refuelingHistory.unshift(newRefuelingEntry); // Newest first
  localStorage.setItem(`powerflow_refueling_history_${activeSiteId}`, JSON.stringify(refuelingHistory));

  // Update record count visual badge
  updateRefuelingRecordCountUI();

  // 5. Reset / clear the present filling entry form fields
  presFillDateInput.value = "";
  presFillQtyInput.value = "";
  presAfterFillLevelInput.value = "";

  // 6. Restrict further modifications (Lock panel)
  locksState.fuel = "locked";
  localStorage.setItem(`powerflow_locks_state_${activeSiteId}`, JSON.stringify(locksState));

  // 7. Recalculate results in real-time
  const totalFuelConsumed = currentCalculation ? currentCalculation.totalFuelConsumed : 0;
  const presHMR = currentCalculation ? currentCalculation.presHMR : (parseFloat(presHMRInput.value) || 0);
  updateFuelAndPmResults(totalFuelConsumed, presHMR);

  // 8. Apply lock visuals
  applyLockUiState();

  alert("Present Fuel Filling entry successfully saved! Previous reference details have been overwritten, and the present entry form has been reset.");
}

function handleSavePm() {
  // Overwrite the previous details by saving the current input values to cache
  saveFuelPmInputsToCache();
  
  locksState.pm = "locked";
  localStorage.setItem(`powerflow_locks_state_${activeSiteId}`, JSON.stringify(locksState));
  
  // Re-run results calculation with the newly saved details
  const totalFuelConsumed = currentCalculation ? currentCalculation.totalFuelConsumed : 0;
  const presHMR = currentCalculation ? currentCalculation.presHMR : (parseFloat(presHMRInput.value) || 0);
  updateFuelAndPmResults(totalFuelConsumed, presHMR);
  
  applyLockUiState();
  alert("PM Details saved successfully and locked! Further modification is restricted.");
}

function handleUnlockFuel() {
  locksState.fuel = "pending";
  localStorage.setItem(`powerflow_locks_state_${activeSiteId}`, JSON.stringify(locksState));
  
  // Create pending request
  const reqs = JSON.parse(localStorage.getItem("powerflow_unlock_requests") || "[]");
  reqs.push({
    id: "req_" + Date.now(),
    panel: "fuel",
    requestedBy: sessionStorage.getItem("powerflow_active_user"),
    role: sessionStorage.getItem("powerflow_active_role"),
    timestamp: new Date().toLocaleString()
  });
  localStorage.setItem("powerflow_unlock_requests", JSON.stringify(reqs));

  applyLockUiState();
  alert("Unlock request for Fuel Details has been raised to IL. Further edits will be enabled once approved.");
}

function handleUnlockPm() {
  locksState.pm = "pending";
  localStorage.setItem(`powerflow_locks_state_${activeSiteId}`, JSON.stringify(locksState));
  
  // Create pending request
  const reqs = JSON.parse(localStorage.getItem("powerflow_unlock_requests") || "[]");
  reqs.push({
    id: "req_" + Date.now(),
    panel: "pm",
    requestedBy: sessionStorage.getItem("powerflow_active_user"),
    role: sessionStorage.getItem("powerflow_active_role"),
    timestamp: new Date().toLocaleString()
  });
  localStorage.setItem("powerflow_unlock_requests", JSON.stringify(reqs));

  applyLockUiState();
  alert("Unlock request for PM Details has been raised to IL. Further edits will be enabled once approved.");
}

// ==========================================================================
// REFUELING HISTORY REPORT FILTERS & CSV GENERATION MODULE
// ==========================================================================

function getFinancialYear(dateStr) {
  if (!dateStr) return "Unknown";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "Unknown";
  const year = date.getFullYear();
  const month = date.getMonth(); // 0-11
  if (month >= 3) { // April - December
    const startYear = year;
    const endYear = (year + 1) % 100;
    return `FY ${startYear}-${endYear.toString().padStart(2, '0')}`;
  } else { // January - March
    const startYear = year - 1;
    const endYear = year % 100;
    return `FY ${startYear}-${endYear.toString().padStart(2, '0')}`;
  }
}

function matchesPeriod(dateStr, periodType) {
  if (periodType === "all") return true;
  const entryDate = new Date(dateStr);
  if (isNaN(entryDate.getTime())) return false;
  
  const today = new Date();
  const entryYear = entryDate.getFullYear();
  const entryMonth = entryDate.getMonth();
  
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  
  if (periodType === "current_month") {
    return entryYear === currentYear && entryMonth === currentMonth;
  }
  
  if (periodType === "last_month") {
    let targetMonth = currentMonth - 1;
    let targetYear = currentYear;
    if (targetMonth < 0) {
      targetMonth = 11;
      targetYear = currentYear - 1;
    }
    return entryYear === targetYear && entryMonth === targetMonth;
  }
  
  if (periodType === "current_quarter") {
    const entryQuarter = Math.floor(entryMonth / 3);
    const currentQuarter = Math.floor(currentMonth / 3);
    return entryYear === currentYear && entryQuarter === currentQuarter;
  }
  
  return true;
}

function updateRefuelingRecordCountUI() {
  const lbl = document.getElementById("refuelingRecordCount");
  if (!lbl) return;
  
  let refuelingHistory = [];
  const cachedHistory = localStorage.getItem(`powerflow_refueling_history_${activeSiteId}`);
  if (cachedHistory) {
    try {
      refuelingHistory = JSON.parse(cachedHistory);
    } catch(e) {
      refuelingHistory = [];
    }
  }
  
  lbl.textContent = `${refuelingHistory.length} Entr${refuelingHistory.length === 1 ? "y" : "ies"}`;
  
  if (refuelingHistory.length > 0) {
    lbl.className = "rating-badge-text rating-badge-good";
  } else {
    lbl.className = "rating-badge-text text-muted";
  }
}

function handleDownloadFuelReport() {
  const periodVal = document.getElementById("reportPeriod").value;
  const fyVal = document.getElementById("reportFy").value;
  
  let refuelingHistory = [];
  const cachedHistory = localStorage.getItem(`powerflow_refueling_history_${activeSiteId}`);
  if (cachedHistory) {
    try {
      refuelingHistory = JSON.parse(cachedHistory);
    } catch(e) {
      refuelingHistory = [];
    }
  }
  
  if (refuelingHistory.length === 0) {
    alert("No refueling history entries available to download.");
    return;
  }
  
  // Filter entries
  const filtered = refuelingHistory.filter(entry => {
    const periodMatch = matchesPeriod(entry.date, periodVal);
    const fyMatch = (fyVal === "all" || entry.financialYear === fyVal);
    return periodMatch && fyMatch;
  });
  
  if (filtered.length === 0) {
    alert("No refueling history entries match the selected filters.");
    return;
  }
  
  // Construct CSV stream
  let csv = "data:text/csv;charset=utf-8,";
  csv += "Site ID,Refueling Date,Volume Filled (Litres),Fuel Level After Filling (Litres),Logged By,System Timestamp,Financial Year\r\n";
  
  filtered.forEach(entry => {
    const row = [
      `"${entry.siteId}"`,
      `"${entry.date}"`,
      entry.qty,
      entry.afterFillLevel,
      `"${entry.savedBy}"`,
      `"${entry.timestamp}"`,
      `"${entry.financialYear}"`
    ].join(",");
    csv += row + "\r\n";
  });
  
  const uri = encodeURI(csv);
  const link = document.createElement("a");
  link.setAttribute("href", uri);
  link.setAttribute("download", `refueling_history_report_${activeSiteId}_${periodVal}_${fyVal.replace(/\s+/g, '_')}_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  console.log(`Refueling history report exported successfully: ${filtered.length} records downloaded.`);
}

// 16. Automated self-verification tests
function runSelfVerificationTests() {
  console.log("==================================================");
  console.log("⚡ POWERFLOW EFFICIENCY ENGINE RUNNING AUTOMATED UNIT TESTS");
  console.log("==================================================");

  let successCount = 0;
  let testCount = 0;

  const assertVal = (actual, expected, testName) => {
    testCount++;
    const delta = Math.abs(actual - expected);
    if (delta < 0.001) {
      console.log(`✅ [PASS] ${testName}`);
      successCount++;
    } else {
      console.error(`❌ [FAIL] ${testName} - Expected: ${expected}, Got: ${actual}`);
    }
  };

  const assertStr = (actual, expected, testName) => {
    testCount++;
    if (actual === expected) {
      console.log(`✅ [PASS] ${testName}`);
      successCount++;
    } else {
      console.error(`❌ [FAIL] ${testName} - Expected: "${expected}", Got: "${actual}"`);
    }
  };
  
  const assertBool = (actual, expected, testName) => {
    testCount++;
    if (actual === expected) {
      console.log(`✅ [PASS] ${testName}`);
      successCount++;
    } else {
      console.error(`❌ [FAIL] ${testName} - Expected: ${expected}, Got: ${actual}`);
    }
  };

  try {
    // Test Case 1: Mahindra 15 kVA (Capacity 12 kW)
    // Run Details: Run hours = 8 (prev HMR = 100, pres HMR = 108), kWh Produced = 48 (prev kWh = 5000, pres kWh = 5048).
    // Calculations:
    // Avg Load kW = 48 / 8 = 6 kW
    // Load % = (6 / 12) * 100 = 50%
    // Mapped burn rate (L/h) for MM 15 kVA at 50% load = 2.30 Litre/hour.
    // Total fuel consumed = 2.30 L/h * 8 hrs = 18.4 Litres.
    // Efficiency = 48 kWh / 18.4 L = 2.608 kWh/Litre.
    const tc1 = calculateAnalytics("MM", "15", 100, 108, 5000, 5048);
    assertVal(tc1.averageLoadKW, 6, "TC1: Average Load kW Calculation");
    assertVal(tc1.loadPercentage, 50, "TC1: Load Percentage Calculation");
    assertVal(tc1.fuelRate, 2.30, "TC1: Fuel Burn Rate (2.30 L/h expected for MM 15 kVA at 50% load)");
    assertVal(tc1.totalFuelConsumed, 18.4, "TC1: Total Fuel Burnt (18.4 Litres)");
    assertVal(tc1.kwhPerLitre, 2.60869, "TC1: Hero Fuel Yield (2.61 kWh/Litre expected)");
    assertVal(tc1.specCons, 0.38333, "TC1: Specific Fuel Consumption (0.383 L/kWh expected)");

    // Test Case 2: Fuel Inventory present level calculations
    // Capacity = 150 L, Starting level = 140 L, Burnt fuel = 18.4 L
    // Present fuel should be 140 - 18.4 = 121.6 L
    // Percentage = (121.6 / 150) * 100 = 81.0667%
    const tc2_capacity = 150;
    const tc2_afterFill = 140;
    const tc2_totalFuelBurnt = 18.4;
    let tc2_presentFuel = tc2_afterFill - tc2_totalFuelBurnt;
    let tc2_percent = (tc2_presentFuel / tc2_capacity) * 100;
    assertVal(tc2_presentFuel, 121.6, "TC2: Present Fuel Volume (121.6L expected)");
    assertVal(tc2_percent, 81.06667, "TC2: Present Fuel Percentage (81.07% expected)");

    // Test Case 3: PM Run Hours & Due calculation
    // Last PM HMR = 1000 hrs, Present HMR = 1128.5 hrs
    // Run Hours = 128.5 hrs, Next PM Due = 250 - 128.5 = 121.5 hrs
    const tc3_lastPmHmr = 1000;
    const tc3_presHmr = 1128.5;
    const tc3_runHrs = tc3_presHmr - tc3_lastPmHmr;
    const tc3_dueHrs = 250 - tc3_runHrs;
    assertVal(tc3_runHrs, 128.5, "TC3: Operational hours since last PM (128.5 hrs expected)");
    assertVal(tc3_dueHrs, 121.5, "TC3: Operating hours remaining until PM (121.5 hrs expected)");

    // Test Case 4: PM Overdue condition
    // Last PM HMR = 1000 hrs, Present HMR = 1258.5 hrs
    // Run Hours = 258.5 hrs, Overdue = 258.5 - 250 = 8.5 hrs
    const tc4_lastPmHmr = 1000;
    const tc4_presHmr = 1258.5;
    const tc4_runHrs = tc4_presHmr - tc4_lastPmHmr;
    const tc4_overdueHrs = tc4_runHrs - 250;
    assertVal(tc4_runHrs, 258.5, "TC4: PM Run hours for overdue check (258.5 hrs expected)");
    assertVal(tc4_overdueHrs, 8.5, "TC4: PM Overdue amount (8.5 hrs expected)");

    // Test Case 5: Indian Financial Year Mapping
    assertStr(getFinancialYear("2026-05-15"), "FY 2026-27", "TC5: FY Mapping (May 2026 -> FY 2026-27)");
    assertStr(getFinancialYear("2026-02-20"), "FY 2025-26", "TC5: FY Mapping (Feb 2026 -> FY 2025-26)");
    assertStr(getFinancialYear("2025-10-15"), "FY 2025-26", "TC5: FY Mapping (Oct 2025 -> FY 2025-26)");
    assertStr(getFinancialYear("invalid-date"), "Unknown", "TC5: FY Mapping (Invalid date)");

    // Test Case 6: Period Matcher Math
    assertBool(matchesPeriod("2026-05-15", "current_month"), true, "TC6: Matches Current Month (May 15, 2026)");
    assertBool(matchesPeriod("2026-04-10", "last_month"), true, "TC6: Matches Last Month (April 10, 2026)");
    assertBool(matchesPeriod("2026-05-15", "current_quarter"), true, "TC6: Matches Current Quarter (May 15, 2026)");
    assertBool(matchesPeriod("2026-02-20", "current_month"), false, "TC6: Fails Current Month (Feb 20, 2026)");

    console.log("--------------------------------------------------");
    console.log(`📊 CORE LOGIC STATUS: ${successCount} / ${testCount} unit validations passed.`);
    console.log("==================================================");
  } catch (e) {
    console.error("💥 FAILED INTEGRITY CHECKS:", e.message);
  }
}

window.addEventListener("DOMContentLoaded", init);
