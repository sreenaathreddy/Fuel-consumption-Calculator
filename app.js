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

// Step-by-Step Math Elements
const step1CalcDiv = document.getElementById("step1Calc");
const step2CalcDiv = document.getElementById("step2Calc");
const step3CalcDiv = document.getElementById("step3Calc");
const step4CalcDiv = document.getElementById("step4Calc");
const step5CalcDiv = document.getElementById("step5Calc");
const step6CalcDiv = document.getElementById("step6Calc");

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

  // 3. Mathematical breakdown drawers
  step1CalcDiv.innerHTML = `${data.presHMR.toFixed(1)} - ${data.prevHMR.toFixed(1)} = <span class="highlight-val">${data.deltaHMR.toFixed(1)} hrs</span>`;
  step2CalcDiv.innerHTML = `${data.presKWH.toLocaleString()} - ${data.prevKWH.toLocaleString()} = <span class="highlight-val">${data.deltaKWH.toLocaleString()} kWh</span>`;
  step3CalcDiv.innerHTML = `${data.deltaKWH.toLocaleString()} kWh / ${data.deltaHMR.toFixed(1)} hrs = <span class="highlight-val">${data.averageLoadKW.toFixed(2)} kW</span>`;
  step4CalcDiv.innerHTML = `(${data.averageLoadKW.toFixed(2)} kW / ${data.capacityKW} kW) * 100 = <span class="highlight-val">${data.loadPercentage.toFixed(1)}% (${data.rangeLabel})</span>`;
  step5CalcDiv.innerHTML = `${data.fuelRate.toFixed(2)} L/h * ${data.deltaHMR.toFixed(1)} hrs = <span class="highlight-val">${data.totalFuelConsumed.toFixed(2)} Litres</span>`;
  step6CalcDiv.innerHTML = `${data.deltaKWH.toLocaleString()} kWh / ${data.totalFuelConsumed.toFixed(2)} L = <span class="highlight-val-emerald" style="font-weight: 800; font-size: 0.95rem;">${data.kwhPerLitre.toFixed(2)} kWh/Litre</span>`;

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

  localStorage.setItem("powerflow_calc_history_v3", JSON.stringify(calculationHistory));
  renderHistoryTable();
}

function deleteHistoryRecord(idx) {
  calculationHistory.splice(idx, 1);
  localStorage.setItem("powerflow_calc_history_v3", JSON.stringify(calculationHistory));
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

    step1CalcDiv.textContent = "...";
    step2CalcDiv.textContent = "...";
    step3CalcDiv.textContent = "...";
    step4CalcDiv.textContent = "...";
    step5CalcDiv.textContent = "...";
    step6CalcDiv.textContent = "...";

    // Hide warning banner
    updateOperationalAlertBanner(null);

    // Reset simulator values
    loadSimulatorSlider.value = 50;
    updateSimulatorOutputs(50);

    renderCompetitorComparison(0);
    renderChart();
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
    if (confirm("Are you sure you want to delete all saved calculation logs?")) {
      calculationHistory = [];
      localStorage.removeItem("powerflow_calc_history_v3");
      renderHistoryTable();
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

    console.log("--------------------------------------------------");
    console.log(`📊 CORE LOGIC STATUS: ${successCount} / ${testCount} unit validations passed.`);
    console.log("==================================================");
  } catch (e) {
    console.error("💥 FAILED INTEGRITY CHECKS:", e.message);
  }
}

window.addEventListener("DOMContentLoaded", init);
