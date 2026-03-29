const transformationPresets = {
  fat_loss: {
    title: "Drop body fat",
    shortLabel: "Fat loss",
    calorieAdjustment: -450,
    proteinMultiplier: 2.2,
    fatMultiplier: 0.75,
    bodyFocus: "Trim body fat and keep muscle",
    nutritionFocus: "High protein and a controlled deficit",
    coachNote:
      "A moderate deficit will lean you out without crushing your energy. Lift hard, walk often, and keep most meals built around protein plus fiber.",
    swaps: [
      "Swap milk tea for an iced americano or zero-sugar tea.",
      "Swap deep-fried sides for potatoes, fruit, or air-fried vegetables.",
      "Swap late dessert runs for Greek yogurt with berries."
    ],
    watchList: ["milk_tea", "fried_chicken", "fries", "donut"]
  },
  recomp: {
    title: "Body recomposition",
    shortLabel: "Recomp",
    calorieAdjustment: -100,
    proteinMultiplier: 2.1,
    fatMultiplier: 0.8,
    bodyFocus: "Build shape while tightening your waistline",
    nutritionFocus: "Stable calories with strong protein coverage",
    coachNote:
      "Recomp works best when training quality stays high. Keep calories near maintenance, push progressive overload, and use food quality to do the heavy lifting.",
    swaps: [
      "Swap chips for a fruit and yogurt combo.",
      "Swap sugary cereal for oats plus whey or eggs.",
      "Swap random snacks for pre-planned protein meals."
    ],
    watchList: ["soda", "pizza", "ice_cream", "instant_noodles"]
  },
  lean_gain: {
    title: "Lean muscle gain",
    shortLabel: "Lean muscle",
    calorieAdjustment: 220,
    proteinMultiplier: 2,
    fatMultiplier: 0.9,
    bodyFocus: "Add muscle without a messy bulk",
    nutritionFocus: "Small surplus and consistent training fuel",
    coachNote:
      "The goal here is a clean surplus. Add calories slowly, keep protein high, and place more carbs around your workouts so the extra food drives performance.",
    swaps: [
      "Swap low-calorie salads for rice bowls with lean protein.",
      "Swap skipping breakfast for oats, eggs, or yogurt.",
      "Swap empty snack calories for protein shakes, nuts, and fruit."
    ],
    watchList: ["beer", "donut", "milk_tea", "burger"]
  },
  strength_gain: {
    title: "Power build",
    shortLabel: "Power gain",
    calorieAdjustment: 360,
    proteinMultiplier: 1.95,
    fatMultiplier: 0.95,
    bodyFocus: "Support strength, recovery, and heavy lifts",
    nutritionFocus: "Bigger surplus with solid carb timing",
    coachNote:
      "Heavy training needs fuel. Use the surplus to recover better, but keep a close eye on food quality so the scale climbs for the right reasons.",
    swaps: [
      "Swap fast-food binges for large homemade bowls with rice and lean meat.",
      "Swap random sweets for a post-workout shake plus fruit.",
      "Swap greasy late-night meals for balanced dinners with carbs and protein."
    ],
    watchList: ["pizza", "fries", "beer", "ice_cream"]
  }
};

const foodLibrary = [
  {
    id: "milk_tea",
    name: "Large milk tea",
    serving: "1 cup",
    calories: 320,
    note: "Tasty, but liquid sugar can wipe out a fat-loss deficit fast."
  },
  {
    id: "fried_chicken",
    name: "Fried chicken",
    serving: "2 pieces",
    calories: 420,
    note: "High calories from breading and frying oil."
  },
  {
    id: "fries",
    name: "French fries",
    serving: "1 medium pack",
    calories: 365,
    note: "Easy to overeat and low in protein."
  },
  {
    id: "donut",
    name: "Donut",
    serving: "1 piece",
    calories: 260,
    note: "High sugar plus fat with very little satiety."
  },
  {
    id: "soda",
    name: "Regular soda",
    serving: "1 can",
    calories: 150,
    note: "Pure extra calories with no real fullness."
  },
  {
    id: "pizza",
    name: "Pepperoni pizza",
    serving: "2 slices",
    calories: 570,
    note: "Works best as an occasional meal, not a default."
  },
  {
    id: "ice_cream",
    name: "Ice cream",
    serving: "1 cup",
    calories: 270,
    note: "Easy dessert calories that stack quietly."
  },
  {
    id: "instant_noodles",
    name: "Instant noodles",
    serving: "1 pack",
    calories: 380,
    note: "Quick and satisfying, but light on protein and heavy on sodium."
  },
  {
    id: "burger",
    name: "Cheeseburger",
    serving: "1 burger",
    calories: 520,
    note: "Fits better as a planned indulgence than a daily habit."
  },
  {
    id: "beer",
    name: "Beer",
    serving: "1 bottle",
    calories: 155,
    note: "Alcohol slows recovery and adds sneaky calories."
  },
  {
    id: "chicken_rice",
    name: "Chicken and rice bowl",
    serving: "1 bowl",
    calories: 490,
    note: "Solid option when you need balanced calories and protein."
  },
  {
    id: "greek_yogurt",
    name: "Greek yogurt",
    serving: "1 cup",
    calories: 140,
    note: "High protein and much easier to fit into most goals."
  },
  {
    id: "protein_shake",
    name: "Protein shake",
    serving: "1 bottle",
    calories: 180,
    note: "Useful when you need quick protein without a huge calorie load."
  },
  {
    id: "salmon_rice",
    name: "Salmon rice plate",
    serving: "1 plate",
    calories: 560,
    note: "A nutrient-dense meal that works well for lean gain or power days."
  },
  {
    id: "oats_bowl",
    name: "Oats with banana",
    serving: "1 bowl",
    calories: 310,
    note: "Great pre-workout fuel and easy to digest."
  }
];

const activityFactors = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  very: 1.725
};

const roadmapTemplates = {
  fat_loss: {
    low: [
      "Day 1: Full-body strength with focus on squat, push, and row patterns.",
      "Day 2: Low-intensity cardio plus 8,000 to 12,000 steps.",
      "Day 3: Full-body strength and a short finisher."
    ],
    mid: [
      "Day 1: Lower body strength plus core.",
      "Day 2: Upper body push and pull.",
      "Day 3: Zone 2 cardio or athletic conditioning.",
      "Day 4: Full-body strength with loaded carries."
    ],
    high: [
      "Day 1: Lower strength.",
      "Day 2: Upper strength.",
      "Day 3: Conditioning and mobility.",
      "Day 4: Lower hypertrophy.",
      "Day 5: Upper hypertrophy plus steps target."
    ]
  },
  recomp: {
    low: [
      "Day 1: Full-body progressive overload session.",
      "Day 2: Upper body strength and posture work.",
      "Day 3: Lower body strength plus core stability."
    ],
    mid: [
      "Day 1: Lower strength.",
      "Day 2: Upper strength.",
      "Day 3: Recovery walk or light cardio.",
      "Day 4: Full-body hypertrophy session."
    ],
    high: [
      "Day 1: Push day.",
      "Day 2: Pull day.",
      "Day 3: Legs.",
      "Day 4: Upper accessory work.",
      "Day 5: Lower accessory work plus cardio."
    ]
  },
  lean_gain: {
    low: [
      "Day 1: Full-body hypertrophy.",
      "Day 2: Upper body volume focus.",
      "Day 3: Lower body volume focus."
    ],
    mid: [
      "Day 1: Push.",
      "Day 2: Pull.",
      "Day 3: Legs.",
      "Day 4: Full-body pump and recovery work."
    ],
    high: [
      "Day 1: Chest and shoulders.",
      "Day 2: Back and biceps.",
      "Day 3: Legs.",
      "Day 4: Upper strength.",
      "Day 5: Lower strength and glutes."
    ]
  },
  strength_gain: {
    low: [
      "Day 1: Heavy squat and bench session.",
      "Day 2: Heavy deadlift and row session.",
      "Day 3: Overhead press plus accessories."
    ],
    mid: [
      "Day 1: Squat focus.",
      "Day 2: Bench focus.",
      "Day 3: Recovery work and technique practice.",
      "Day 4: Deadlift plus posterior chain."
    ],
    high: [
      "Day 1: Heavy squat day.",
      "Day 2: Bench volume day.",
      "Day 3: Deadlift day.",
      "Day 4: Overhead press and upper back.",
      "Day 5: Secondary lower day and trunk work."
    ]
  }
};

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const smartWorkoutBlueprints = {
  fat_loss: [
    {
      day: "Monday",
      exercises: [
        { name: "Back squat", sets: 4, reps: "5-6", focus: "Lower strength" },
        { name: "Walking lunges", sets: 3, reps: "10 each side", focus: "Leg drive" },
        { name: "Plank", sets: 3, reps: "45 sec", focus: "Core brace" }
      ]
    },
    {
      day: "Tuesday",
      exercises: [
        { name: "Incline dumbbell press", sets: 4, reps: "8-10", focus: "Upper push" },
        { name: "Chest-supported row", sets: 4, reps: "10-12", focus: "Upper pull" },
        { name: "Bike intervals", sets: 6, reps: "30 sec hard", focus: "Conditioning" }
      ]
    },
    {
      day: "Thursday",
      exercises: [
        { name: "Romanian deadlift", sets: 4, reps: "8", focus: "Posterior chain" },
        { name: "Goblet squat", sets: 3, reps: "12", focus: "Volume work" },
        { name: "Hanging knee raise", sets: 3, reps: "12-15", focus: "Core" }
      ]
    },
    {
      day: "Friday",
      exercises: [
        { name: "Lat pulldown", sets: 4, reps: "10-12", focus: "Back width" },
        { name: "Push-ups", sets: 3, reps: "AMRAP", focus: "Chest endurance" },
        { name: "Farmer carry", sets: 4, reps: "40 meters", focus: "Grip and trunk" }
      ]
    },
    {
      day: "Saturday",
      exercises: [
        { name: "Zone 2 cardio", sets: 1, reps: "35 min", focus: "Fat-loss engine" },
        { name: "Mobility flow", sets: 1, reps: "15 min", focus: "Recovery" },
        { name: "Step goal", sets: 1, reps: "10k+", focus: "Daily movement" }
      ]
    }
  ],
  recomp: [
    {
      day: "Monday",
      exercises: [
        { name: "Barbell squat", sets: 4, reps: "6-8", focus: "Leg strength" },
        { name: "Romanian deadlift", sets: 3, reps: "8-10", focus: "Hamstrings" },
        { name: "Calf raise", sets: 3, reps: "15", focus: "Lower leg work" }
      ]
    },
    {
      day: "Tuesday",
      exercises: [
        { name: "Bench press", sets: 4, reps: "6-8", focus: "Chest strength" },
        { name: "Seated row", sets: 4, reps: "10", focus: "Upper back" },
        { name: "Lateral raise", sets: 3, reps: "15", focus: "Shoulders" }
      ]
    },
    {
      day: "Thursday",
      exercises: [
        { name: "Deadlift", sets: 4, reps: "4-5", focus: "Posterior chain" },
        { name: "Bulgarian split squat", sets: 3, reps: "10 each side", focus: "Single-leg balance" },
        { name: "Cable crunch", sets: 3, reps: "15", focus: "Core" }
      ]
    },
    {
      day: "Friday",
      exercises: [
        { name: "Overhead press", sets: 4, reps: "6-8", focus: "Shoulder press" },
        { name: "Pull-up or assisted pull-up", sets: 4, reps: "6-10", focus: "Back and arms" },
        { name: "Dumbbell curl", sets: 3, reps: "12", focus: "Biceps" }
      ]
    },
    {
      day: "Saturday",
      exercises: [
        { name: "Incline dumbbell press", sets: 3, reps: "10-12", focus: "Upper chest" },
        { name: "Leg press", sets: 3, reps: "12", focus: "Lower body volume" },
        { name: "Bike or rower", sets: 1, reps: "20 min", focus: "Recovery cardio" }
      ]
    }
  ],
  lean_gain: [
    {
      day: "Monday",
      exercises: [
        { name: "Barbell bench press", sets: 4, reps: "6-8", focus: "Chest strength" },
        { name: "Incline dumbbell press", sets: 3, reps: "8-10", focus: "Upper chest" },
        { name: "Cable fly", sets: 3, reps: "12-15", focus: "Chest volume" }
      ]
    },
    {
      day: "Tuesday",
      exercises: [
        { name: "Weighted pull-down", sets: 4, reps: "8-10", focus: "Back width" },
        { name: "Barbell row", sets: 4, reps: "8", focus: "Back thickness" },
        { name: "Hammer curl", sets: 3, reps: "12", focus: "Arms" }
      ]
    },
    {
      day: "Wednesday",
      exercises: [
        { name: "Back squat", sets: 4, reps: "6-8", focus: "Quad strength" },
        { name: "Leg press", sets: 3, reps: "12", focus: "Volume work" },
        { name: "Leg curl", sets: 3, reps: "12-15", focus: "Hamstrings" }
      ]
    },
    {
      day: "Friday",
      exercises: [
        { name: "Overhead press", sets: 4, reps: "6-8", focus: "Shoulders" },
        { name: "Lateral raise", sets: 4, reps: "12-15", focus: "Medial delts" },
        { name: "Triceps rope press-down", sets: 3, reps: "12", focus: "Arms" }
      ]
    },
    {
      day: "Saturday",
      exercises: [
        { name: "Romanian deadlift", sets: 4, reps: "8", focus: "Posterior chain" },
        { name: "Hip thrust", sets: 4, reps: "10", focus: "Glutes" },
        { name: "Hanging leg raise", sets: 3, reps: "12", focus: "Core" }
      ]
    }
  ],
  strength_gain: [
    {
      day: "Monday",
      exercises: [
        { name: "Competition squat", sets: 5, reps: "3-5", focus: "Primary lift" },
        { name: "Paused squat", sets: 3, reps: "3", focus: "Technique" },
        { name: "Split squat", sets: 3, reps: "8 each side", focus: "Accessory" }
      ]
    },
    {
      day: "Tuesday",
      exercises: [
        { name: "Competition bench", sets: 5, reps: "3-5", focus: "Primary lift" },
        { name: "Close-grip bench", sets: 3, reps: "5-6", focus: "Lockout strength" },
        { name: "Chest-supported row", sets: 4, reps: "8", focus: "Upper back" }
      ]
    },
    {
      day: "Thursday",
      exercises: [
        { name: "Deadlift", sets: 5, reps: "2-4", focus: "Primary pull" },
        { name: "Deficit deadlift", sets: 3, reps: "4", focus: "Speed off floor" },
        { name: "Back extension", sets: 3, reps: "12", focus: "Lower back" }
      ]
    },
    {
      day: "Friday",
      exercises: [
        { name: "Overhead press", sets: 4, reps: "5-6", focus: "Press power" },
        { name: "Weighted pull-up", sets: 4, reps: "5-6", focus: "Upper back strength" },
        { name: "Face pull", sets: 3, reps: "15", focus: "Shoulder health" }
      ]
    },
    {
      day: "Saturday",
      exercises: [
        { name: "Tempo squat", sets: 4, reps: "4", focus: "Control under load" },
        { name: "Bench volume work", sets: 4, reps: "6", focus: "Extra bench practice" },
        { name: "Weighted plank", sets: 3, reps: "45 sec", focus: "Bracing" }
      ]
    }
  ]
};

const STORAGE_KEYS = {
  food: "pulseforge-food-log",
  progress: "pulseforge-progress",
  workout: "pulseforge-workout"
};

const coachForm = document.getElementById("coach-form");
const goalInput = document.getElementById("goal");
const goalCards = Array.from(document.querySelectorAll(".goal-card"));
const foodForm = document.getElementById("food-form");
const foodSelect = document.getElementById("food-select");
const servingsInput = document.getElementById("servings");
const foodLogList = document.getElementById("food-log");
const clearLogButton = document.getElementById("clear-log");

const progressForm = document.getElementById("progress-form");
const checkinDateInput = document.getElementById("checkin-date");
const progressWeightInput = document.getElementById("progress-weight");
const progressWaistInput = document.getElementById("progress-waist");
const progressPhotoInput = document.getElementById("progress-photo");
const progressPhotoPreview = document.getElementById("progress-photo-preview");
const progressPhotoTitle = document.getElementById("progress-photo-title");
const progressPhotoNote = document.getElementById("progress-photo-note");
const progressGallery = document.getElementById("progress-gallery");
const progressLogList = document.getElementById("progress-log");
const clearProgressButton = document.getElementById("clear-progress");
const progressStatus = document.getElementById("progress-status");

const workoutForm = document.getElementById("workout-form");
const workoutDaySelect = document.getElementById("workout-day");
const exerciseNameInput = document.getElementById("exercise-name");
const exerciseSetsInput = document.getElementById("exercise-sets");
const exerciseRepsInput = document.getElementById("exercise-reps");
const exerciseFocusInput = document.getElementById("exercise-focus");
const loadSmartSplitButton = document.getElementById("load-smart-split");
const clearWorkoutPlanButton = document.getElementById("clear-workout-plan");
const workoutDaysContainer = document.getElementById("workout-days");
const workoutStatus = document.getElementById("workout-status");

let currentPlan = null;
let foodLog = [];
let progressEntries = [];
let workoutPlan = {};
let pendingProgressPhoto = "";

function loadState(key, fallback) {
  try {
    const rawValue = window.localStorage.getItem(key);

    if (!rawValue) {
      return fallback;
    }

    return JSON.parse(rawValue);
  } catch (error) {
    return fallback;
  }
}

function saveState(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
}

function getEmptyWorkoutPlan() {
  return weekDays.reduce((plan, day) => {
    plan[day] = [];
    return plan;
  }, {});
}

function normalizeWorkoutPlan(value) {
  const normalized = getEmptyWorkoutPlan();

  if (!value || typeof value !== "object") {
    return normalized;
  }

  weekDays.forEach((day) => {
    normalized[day] = Array.isArray(value[day])
      ? value[day]
          .map((item) => ({
            id: item.id || `exercise-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            name: String(item.name || "").trim(),
            sets: Number(item.sets) || 0,
            reps: String(item.reps || "").trim(),
            focus: String(item.focus || "").trim()
          }))
          .filter((item) => item.name && item.sets > 0 && item.reps)
      : [];
  });

  return normalized;
}

function formatCalories(value) {
  return `${Math.round(value).toLocaleString()} kcal`;
}

function formatMacros(protein, carbs, fat) {
  return `${protein}g P / ${carbs}g C / ${fat}g F`;
}

function formatMeasurement(value, unit) {
  return `${Number(value).toFixed(1)} ${unit}`;
}

function formatChange(value, unit) {
  const prefix = value > 0 ? "+" : "";
  return `${prefix}${Number(value).toFixed(1)} ${unit}`;
}

function formatDateLabel(dateString) {
  if (!dateString) {
    return "No date";
  }

  const date = new Date(`${dateString}T00:00:00`);
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

function getTodayIsoString() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  return new Date(now.getTime() - (offset * 60000)).toISOString().slice(0, 10);
}

function setStatus(element, message, tone = "neutral") {
  element.textContent = message;

  if (tone === "neutral") {
    delete element.dataset.tone;
    return;
  }

  element.dataset.tone = tone;
}

function getFoodById(foodId) {
  return foodLibrary.find((food) => food.id === foodId);
}

function setActiveGoal(goalId) {
  goalInput.value = goalId;

  goalCards.forEach((card) => {
    card.classList.toggle("active", card.dataset.goal === goalId);
  });
}

function getSexOffset(sex) {
  if (sex === "male") {
    return 5;
  }

  if (sex === "female") {
    return -161;
  }

  return -78;
}

function getCalorieFloor(sex) {
  if (sex === "male") {
    return 1500;
  }

  if (sex === "female") {
    return 1200;
  }

  return 1350;
}

function chooseRoadmap(goalId, trainingDays) {
  const preset = roadmapTemplates[goalId];

  if (trainingDays <= 3) {
    return preset.low;
  }

  if (trainingDays === 4) {
    return preset.mid;
  }

  return preset.high;
}

function calculatePlan() {
  const age = Number(document.getElementById("age").value);
  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);
  const sex = document.getElementById("sex").value;
  const activity = document.getElementById("activity").value;
  const trainingDays = Number(document.getElementById("training-days").value);
  const goalId = goalInput.value;

  const preset = transformationPresets[goalId];
  const bmr = (10 * weight) + (6.25 * height) - (5 * age) + getSexOffset(sex);
  const maintenance = Math.round(bmr * activityFactors[activity]);
  const rawTarget = maintenance + preset.calorieAdjustment;
  const targetCalories = Math.max(Math.round(rawTarget), getCalorieFloor(sex));

  const protein = Math.round(weight * preset.proteinMultiplier);
  const fat = Math.round(weight * preset.fatMultiplier);
  const carbs = Math.max(80, Math.round((targetCalories - ((protein * 4) + (fat * 9))) / 4));
  const weeklyDelta = Number((((targetCalories - maintenance) * 7) / 7700).toFixed(2));

  return {
    age,
    height,
    weight,
    sex,
    activity,
    trainingDays,
    goalId,
    preset,
    maintenance,
    targetCalories,
    protein,
    fat,
    carbs,
    weeklyDelta,
    roadmap: chooseRoadmap(goalId, trainingDays)
  };
}

function buildCoachMessage(plan) {
  const changeDirection = plan.weeklyDelta < 0 ? "drop" : "gain";
  const weeklyAmount = Math.abs(plan.weeklyDelta);
  const trainingLine =
    plan.trainingDays >= 5
      ? "You already train often, so recovery quality matters almost as much as intensity."
      : "You can make strong progress here by attacking each session with intent and keeping your rest days active.";

  return `${plan.preset.coachNote} At ${formatCalories(plan.targetCalories)} per day, your current setup trends toward about ${weeklyAmount.toFixed(2)} kg per week of ${changeDirection}. ${trainingLine}`;
}

function createWorkoutItem(data) {
  return {
    id: data.id || `exercise-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: String(data.name || "").trim(),
    sets: Number(data.sets),
    reps: String(data.reps || "").trim(),
    focus: String(data.focus || "").trim()
  };
}

function renderPlan(plan) {
  currentPlan = plan;

  document.getElementById("maintenance-calories").textContent = formatCalories(plan.maintenance);
  document.getElementById("target-calories").textContent = formatCalories(plan.targetCalories);
  document.getElementById("macro-targets").textContent = formatMacros(plan.protein, plan.carbs, plan.fat);

  const weeklyLabel =
    plan.weeklyDelta === 0
      ? "0.00 kg/week"
      : `${plan.weeklyDelta > 0 ? "+" : ""}${plan.weeklyDelta.toFixed(2)} kg/week`;

  document.getElementById("weekly-pace").textContent = weeklyLabel;
  document.getElementById("result-title").textContent = plan.preset.title;
  document.getElementById("coach-message").textContent = buildCoachMessage(plan);
  document.getElementById("body-focus").textContent = plan.preset.bodyFocus;
  document.getElementById("nutrition-focus").textContent = plan.preset.nutritionFocus;

  const roadmapList = document.getElementById("roadmap-list");
  roadmapList.innerHTML = "";

  plan.roadmap.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    roadmapList.appendChild(listItem);
  });

  const watchList = document.getElementById("watch-list");
  watchList.innerHTML = "";

  plan.preset.watchList.forEach((foodId) => {
    const food = getFoodById(foodId);
    const entry = document.createElement("article");
    entry.className = "watch-item";
    entry.innerHTML = `
      <strong>${food.name}</strong>
      <span>${food.serving} | ${formatCalories(food.calories)} | ${food.note}</span>
    `;
    watchList.appendChild(entry);
  });

  const swapList = document.getElementById("swap-list");
  swapList.innerHTML = "";

  plan.preset.swaps.forEach((swap) => {
    const listItem = document.createElement("li");
    listItem.textContent = swap;
    swapList.appendChild(listItem);
  });

  updateFoodPreview();
  renderFoodLog();
}

function populateFoodSelect() {
  foodSelect.innerHTML = "";

  foodLibrary.forEach((food) => {
    const option = document.createElement("option");
    option.value = food.id;
    option.textContent = `${food.name} (${formatCalories(food.calories)} / ${food.serving})`;
    foodSelect.appendChild(option);
  });
}

function updateFoodPreview() {
  const food = getFoodById(foodSelect.value);
  const servings = Number(servingsInput.value) || 0;

  if (!food || !currentPlan) {
    return;
  }

  const previewCalories = Math.round(food.calories * servings);
  const targetGap = currentPlan.maintenance - currentPlan.targetCalories;

  let note = `${food.serving}. ${food.note}`;

  if (targetGap > 0) {
    const deficitShare = Math.max(1, Math.round((previewCalories / targetGap) * 100));
    note = `${formatCalories(previewCalories)} uses about ${deficitShare}% of your planned daily deficit. ${food.note}`;
  } else if (targetGap < 0) {
    const surplusShare = Math.max(1, Math.round((previewCalories / Math.abs(targetGap)) * 100));
    note = `${formatCalories(previewCalories)} covers about ${surplusShare}% of your planned surplus. ${food.note}`;
  } else {
    note = `${formatCalories(previewCalories)} sits inside a near-maintenance plan. ${food.note}`;
  }

  document.getElementById("food-preview-name").textContent = `${food.name} x ${servings}`;
  document.getElementById("food-preview-calories").textContent = formatCalories(previewCalories);
  document.getElementById("food-preview-note").textContent = note;
}

function getLoggedCalories() {
  return foodLog.reduce((sum, item) => sum + item.totalCalories, 0);
}

function saveFoodLog() {
  saveState(STORAGE_KEYS.food, foodLog);
}

function renderFoodLog() {
  const total = getLoggedCalories();
  const balance = currentPlan ? currentPlan.targetCalories - total : 0;

  document.getElementById("food-total").textContent = formatCalories(total);

  if (foodLog.length === 0) {
    foodLogList.innerHTML = `
      <li>
        <div>
          <strong>No food logged yet</strong>
          <span>Start with one meal to see how it affects your calorie target.</span>
        </div>
      </li>
    `;
  } else {
    foodLogList.innerHTML = "";

    foodLog.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <div>
          <strong>${item.name}</strong>
          <span>${item.servings} serving(s) | ${formatCalories(item.totalCalories)}</span>
        </div>
        <button type="button" data-id="${item.id}">Remove</button>
      `;
      foodLogList.appendChild(listItem);
    });
  }

  if (!currentPlan) {
    document.getElementById("food-balance").textContent = "Build a plan first.";
    return;
  }

  if (balance > 0) {
    document.getElementById("food-balance").textContent =
      `${formatCalories(balance)} left inside your target.`;
  } else if (balance < 0) {
    const paceShift = Math.abs(((balance * 7) / 7700).toFixed(2));
    document.getElementById("food-balance").textContent =
      `${formatCalories(Math.abs(balance))} above target. Repeat that daily and your pace shifts by about ${paceShift} kg/week.`;
  } else {
    document.getElementById("food-balance").textContent = "Exactly on your target today.";
  }
}

function getSortedProgressEntries() {
  return [...progressEntries].sort((left, right) => {
    if (left.date === right.date) {
      return (right.createdAt || 0) - (left.createdAt || 0);
    }

    return right.date.localeCompare(left.date);
  });
}

function clearProgressPhotoSelection() {
  pendingProgressPhoto = "";
  progressPhotoInput.value = "";
  progressPhotoPreview.src = "";
  progressPhotoPreview.classList.add("is-hidden");
  progressPhotoTitle.textContent = "No photo selected";
  progressPhotoNote.textContent = "Photos are compressed and stored in this browser only.";
}

function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const image = new Image();

      image.onload = () => {
        const maxDimension = 960;
        const scale = Math.min(1, maxDimension / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));

        const context = canvas.getContext("2d");

        if (!context) {
          reject(new Error("Could not create image preview."));
          return;
        }

        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.78));
      };

      image.onerror = () => reject(new Error("Could not load image."));
      image.src = reader.result;
    };

    reader.onerror = () => reject(new Error("Could not read image."));
    reader.readAsDataURL(file);
  });
}

async function handleProgressPhotoSelection() {
  const [file] = progressPhotoInput.files || [];

  if (!file) {
    clearProgressPhotoSelection();
    setStatus(progressStatus, "Your check-ins stay on this device unless you clear them.");
    return;
  }

  setStatus(progressStatus, "Compressing photo for browser storage...");

  try {
    pendingProgressPhoto = await compressImage(file);
    progressPhotoPreview.src = pendingProgressPhoto;
    progressPhotoPreview.classList.remove("is-hidden");
    progressPhotoTitle.textContent = file.name;
    progressPhotoNote.textContent = "Photo ready to save with this check-in.";
    setStatus(progressStatus, "Photo ready to save with your next check-in.", "success");
  } catch (error) {
    clearProgressPhotoSelection();
    setStatus(progressStatus, "Photo could not be prepared. Try a different image.", "error");
  }
}

function syncCoachWeightWithLatestProgress() {
  const sortedEntries = getSortedProgressEntries();

  if (!sortedEntries.length) {
    return;
  }

  document.getElementById("weight").value = sortedEntries[0].weight.toFixed(1);
  renderPlan(calculatePlan());
}

function renderProgressGallery(sortedEntries) {
  progressGallery.innerHTML = "";

  const photoEntries = sortedEntries.filter((entry) => entry.photoData).slice(0, 3);

  if (!photoEntries.length) {
    const emptyCard = document.createElement("div");
    emptyCard.className = "empty-state";
    emptyCard.textContent = "No progress photos yet. Add one to your next check-in.";
    progressGallery.appendChild(emptyCard);
    return;
  }

  photoEntries.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "gallery-card";

    const image = document.createElement("img");
    image.src = entry.photoData;
    image.alt = `Progress photo from ${formatDateLabel(entry.date)}`;

    const label = document.createElement("span");
    label.textContent = `${formatDateLabel(entry.date)} | ${formatMeasurement(entry.weight, "kg")}`;

    card.appendChild(image);
    card.appendChild(label);
    progressGallery.appendChild(card);
  });
}

function renderProgressLog(sortedEntries) {
  progressLogList.innerHTML = "";

  if (!sortedEntries.length) {
    progressLogList.innerHTML = `
      <li>
        <div>
          <strong>No check-ins yet</strong>
          <span>Start logging weight, waist, and photos to build your timeline.</span>
        </div>
      </li>
    `;
    return;
  }

  sortedEntries.forEach((entry) => {
    const listItem = document.createElement("li");
    const content = document.createElement("div");
    const title = document.createElement("strong");
    const meta = document.createElement("span");
    const removeButton = document.createElement("button");

    title.textContent = formatDateLabel(entry.date);
    meta.textContent =
      `${formatMeasurement(entry.weight, "kg")} | ${formatMeasurement(entry.waist, "cm")}${entry.photoData ? " | Photo saved" : ""}`;

    removeButton.type = "button";
    removeButton.dataset.id = entry.id;
    removeButton.textContent = "Remove";

    content.appendChild(title);
    content.appendChild(meta);
    listItem.appendChild(content);
    listItem.appendChild(removeButton);
    progressLogList.appendChild(listItem);
  });
}

function renderProgressTracker() {
  const sortedEntries = getSortedProgressEntries();

  if (!sortedEntries.length) {
    document.getElementById("starting-weight").textContent = "--";
    document.getElementById("current-weight-stat").textContent = "--";
    document.getElementById("weight-change").textContent = "--";
    document.getElementById("waist-change").textContent = "--";
    renderProgressGallery(sortedEntries);
    renderProgressLog(sortedEntries);
    return;
  }

  const latestEntry = sortedEntries[0];
  const earliestEntry = sortedEntries[sortedEntries.length - 1];
  const weightChange = latestEntry.weight - earliestEntry.weight;
  const waistChange = latestEntry.waist - earliestEntry.waist;

  document.getElementById("starting-weight").textContent = formatMeasurement(earliestEntry.weight, "kg");
  document.getElementById("current-weight-stat").textContent = formatMeasurement(latestEntry.weight, "kg");
  document.getElementById("weight-change").textContent = formatChange(weightChange, "kg");
  document.getElementById("waist-change").textContent = formatChange(waistChange, "cm");

  renderProgressGallery(sortedEntries);
  renderProgressLog(sortedEntries);
}

function saveWorkoutPlan() {
  saveState(STORAGE_KEYS.workout, workoutPlan);
}

function countPlannedDays() {
  return weekDays.filter((day) => workoutPlan[day].length > 0).length;
}

function countPlannedExercises() {
  return weekDays.reduce((total, day) => total + workoutPlan[day].length, 0);
}

function countPlannedSets() {
  return weekDays.reduce((total, day) => {
    return total + workoutPlan[day].reduce((dayTotal, exercise) => dayTotal + exercise.sets, 0);
  }, 0);
}

function buildSmartWorkoutPlan(goalId, trainingDays) {
  const plan = getEmptyWorkoutPlan();
  const blueprint = smartWorkoutBlueprints[goalId] || smartWorkoutBlueprints.fat_loss;
  const dayCount = Math.max(2, Math.min(trainingDays, blueprint.length));

  blueprint.slice(0, dayCount).forEach((dayPlan, index) => {
    plan[dayPlan.day] = dayPlan.exercises.map((exercise, exerciseIndex) => {
      return createWorkoutItem({
        ...exercise,
        id: `smart-${goalId}-${index}-${exerciseIndex}`
      });
    });
  });

  return plan;
}

function renderWorkoutPlan() {
  document.getElementById("planned-days").textContent = countPlannedDays();
  document.getElementById("planned-exercises").textContent = countPlannedExercises();
  document.getElementById("planned-sets").textContent = countPlannedSets();

  workoutDaysContainer.innerHTML = "";

  weekDays.forEach((day) => {
    const dayCard = document.createElement("article");
    dayCard.className = "day-card";

    const header = document.createElement("div");
    header.className = "day-card-header";

    const headingBlock = document.createElement("div");
    const title = document.createElement("h3");
    const subtitle = document.createElement("p");
    const exercises = workoutPlan[day];

    title.textContent = day;
    subtitle.textContent =
      exercises.length > 0
        ? `${exercises.length} exercise(s) | ${exercises.reduce((sum, item) => sum + item.sets, 0)} total sets`
        : "Recovery or open day";

    headingBlock.appendChild(title);
    headingBlock.appendChild(subtitle);
    header.appendChild(headingBlock);

    if (exercises.length > 0) {
      const clearButton = document.createElement("button");
      clearButton.type = "button";
      clearButton.className = "tiny-button";
      clearButton.dataset.clearDay = day;
      clearButton.textContent = "Clear day";
      header.appendChild(clearButton);
    }

    dayCard.appendChild(header);

    if (!exercises.length) {
      const emptyState = document.createElement("div");
      emptyState.className = "empty-state";
      emptyState.textContent = "No exercises planned yet.";
      dayCard.appendChild(emptyState);
    } else {
      const list = document.createElement("ul");
      list.className = "exercise-list";

      exercises.forEach((exercise) => {
        const item = document.createElement("li");
        item.className = "exercise-item";

        const content = document.createElement("div");
        const name = document.createElement("strong");
        const meta = document.createElement("p");
        const removeButton = document.createElement("button");

        name.textContent = exercise.name;
        meta.className = "exercise-meta";
        meta.textContent = `${exercise.sets} sets x ${exercise.reps}${exercise.focus ? ` | ${exercise.focus}` : ""}`;

        removeButton.type = "button";
        removeButton.className = "tiny-button";
        removeButton.dataset.day = day;
        removeButton.dataset.id = exercise.id;
        removeButton.textContent = "Remove";

        content.appendChild(name);
        content.appendChild(meta);
        item.appendChild(content);
        item.appendChild(removeButton);
        list.appendChild(item);
      });

      dayCard.appendChild(list);
    }

    workoutDaysContainer.appendChild(dayCard);
  });
}

function initializeProgressForm() {
  const sortedEntries = getSortedProgressEntries();
  checkinDateInput.value = getTodayIsoString();

  if (sortedEntries.length) {
    progressWeightInput.value = sortedEntries[0].weight.toFixed(1);
    progressWaistInput.value = sortedEntries[0].waist.toFixed(1);
    return;
  }

  progressWeightInput.value = Number(document.getElementById("weight").value).toFixed(1);
}

goalCards.forEach((card) => {
  card.addEventListener("click", () => {
    setActiveGoal(card.dataset.goal);
    renderPlan(calculatePlan());
  });
});

coachForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderPlan(calculatePlan());
});

foodForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const food = getFoodById(foodSelect.value);
  const servings = Number(servingsInput.value) || 0;

  if (!food || servings <= 0) {
    return;
  }

  foodLog.unshift({
    id: `${food.id}-${Date.now()}`,
    name: food.name,
    servings,
    totalCalories: Math.round(food.calories * servings)
  });

  saveFoodLog();
  renderFoodLog();
  updateFoodPreview();
});

foodSelect.addEventListener("change", updateFoodPreview);
servingsInput.addEventListener("input", updateFoodPreview);

foodLogList.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLButtonElement)) {
    return;
  }

  foodLog = foodLog.filter((item) => item.id !== target.dataset.id);
  saveFoodLog();
  renderFoodLog();
});

clearLogButton.addEventListener("click", () => {
  foodLog = [];
  saveFoodLog();
  renderFoodLog();
});

progressPhotoInput.addEventListener("change", async () => {
  await handleProgressPhotoSelection();
});

progressForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const entry = {
    id: `progress-${Date.now()}`,
    date: checkinDateInput.value,
    weight: Number(progressWeightInput.value),
    waist: Number(progressWaistInput.value),
    photoData: pendingProgressPhoto,
    createdAt: Date.now()
  };

  let nextEntries = [...progressEntries, entry];
  let saved = saveState(STORAGE_KEYS.progress, nextEntries);

  if (!saved && entry.photoData) {
    nextEntries = [...progressEntries, { ...entry, photoData: "" }];
    saved = saveState(STORAGE_KEYS.progress, nextEntries);

    if (saved) {
      progressEntries = nextEntries;
      renderProgressTracker();
      clearProgressPhotoSelection();
      checkinDateInput.value = getTodayIsoString();
      document.getElementById("weight").value = entry.weight.toFixed(1);
      renderPlan(calculatePlan());
      setStatus(
        progressStatus,
        "Check-in saved, but the photo was skipped because browser storage is full.",
        "error"
      );
      return;
    }
  }

  if (!saved) {
    setStatus(progressStatus, "Check-in could not be saved in this browser.", "error");
    return;
  }

  progressEntries = nextEntries;
  renderProgressTracker();
  clearProgressPhotoSelection();
  checkinDateInput.value = getTodayIsoString();
  progressWeightInput.value = entry.weight.toFixed(1);
  progressWaistInput.value = entry.waist.toFixed(1);
  document.getElementById("weight").value = entry.weight.toFixed(1);
  renderPlan(calculatePlan());
  setStatus(progressStatus, "Progress check-in saved.", "success");
});

progressLogList.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLButtonElement) || !target.dataset.id) {
    return;
  }

  progressEntries = progressEntries.filter((entry) => entry.id !== target.dataset.id);
  saveState(STORAGE_KEYS.progress, progressEntries);
  renderProgressTracker();
  initializeProgressForm();

  if (progressEntries.length) {
    syncCoachWeightWithLatestProgress();
  }

  setStatus(progressStatus, "Progress entry removed.", "success");
});

clearProgressButton.addEventListener("click", () => {
  progressEntries = [];
  saveState(STORAGE_KEYS.progress, progressEntries);
  renderProgressTracker();
  clearProgressPhotoSelection();
  initializeProgressForm();
  setStatus(progressStatus, "Progress tracker cleared.", "success");
});

workoutForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const exerciseName = exerciseNameInput.value.trim();
  const sets = Number(exerciseSetsInput.value);
  const reps = exerciseRepsInput.value.trim();

  if (!exerciseName || sets <= 0 || !reps) {
    setStatus(workoutStatus, "Add a valid exercise, set count, and rep target.", "error");
    return;
  }

  const selectedDay = workoutDaySelect.value;
  const workoutItem = createWorkoutItem({
    name: exerciseName,
    sets,
    reps,
    focus: exerciseFocusInput.value
  });

  workoutPlan[selectedDay].push(workoutItem);
  saveWorkoutPlan();
  renderWorkoutPlan();
  workoutForm.reset();
  workoutDaySelect.value = selectedDay;
  exerciseSetsInput.value = 4;
  exerciseRepsInput.value = "8-10";
  setStatus(workoutStatus, `Added ${exerciseName} to ${selectedDay}.`, "success");
});

loadSmartSplitButton.addEventListener("click", () => {
  const goalId = goalInput.value;
  const trainingDays = Number(document.getElementById("training-days").value);
  workoutPlan = buildSmartWorkoutPlan(goalId, trainingDays);
  saveWorkoutPlan();
  renderWorkoutPlan();
  setStatus(
    workoutStatus,
    `Loaded a ${transformationPresets[goalId].shortLabel.toLowerCase()} split for ${trainingDays} training day(s).`,
    "success"
  );
});

clearWorkoutPlanButton.addEventListener("click", () => {
  workoutPlan = getEmptyWorkoutPlan();
  saveWorkoutPlan();
  renderWorkoutPlan();
  setStatus(workoutStatus, "Workout plan cleared.", "success");
});

workoutDaysContainer.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLButtonElement)) {
    return;
  }

  if (target.dataset.clearDay) {
    workoutPlan[target.dataset.clearDay] = [];
    saveWorkoutPlan();
    renderWorkoutPlan();
    setStatus(workoutStatus, `${target.dataset.clearDay} cleared.`, "success");
    return;
  }

  if (!target.dataset.day || !target.dataset.id) {
    return;
  }

  workoutPlan[target.dataset.day] = workoutPlan[target.dataset.day].filter((exercise) => {
    return exercise.id !== target.dataset.id;
  });
  saveWorkoutPlan();
  renderWorkoutPlan();
  setStatus(workoutStatus, "Exercise removed from the planner.", "success");
});

document.getElementById("weight").addEventListener("input", () => {
  if (!progressEntries.length) {
    progressWeightInput.value = document.getElementById("weight").value;
  }
});

foodLog = Array.isArray(loadState(STORAGE_KEYS.food, [])) ? loadState(STORAGE_KEYS.food, []) : [];
progressEntries = Array.isArray(loadState(STORAGE_KEYS.progress, []))
  ? loadState(STORAGE_KEYS.progress, [])
  : [];
workoutPlan = normalizeWorkoutPlan(loadState(STORAGE_KEYS.workout, getEmptyWorkoutPlan()));

populateFoodSelect();
setActiveGoal(goalInput.value);
renderPlan(calculatePlan());
renderProgressTracker();
renderWorkoutPlan();
initializeProgressForm();

if (progressEntries.length) {
  syncCoachWeightWithLatestProgress();
}
