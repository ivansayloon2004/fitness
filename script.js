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

const coachForm = document.getElementById("coach-form");
const goalInput = document.getElementById("goal");
const goalCards = Array.from(document.querySelectorAll(".goal-card"));
const foodForm = document.getElementById("food-form");
const foodSelect = document.getElementById("food-select");
const servingsInput = document.getElementById("servings");
const foodLogList = document.getElementById("food-log");
const clearLogButton = document.getElementById("clear-log");

let currentPlan = null;
let foodLog = [];

function formatCalories(value) {
  return `${Math.round(value).toLocaleString()} kcal`;
}

function formatMacros(protein, carbs, fat) {
  return `${protein}g P / ${carbs}g C / ${fat}g F`;
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

  const itemId = target.dataset.id;
  foodLog = foodLog.filter((item) => item.id !== itemId);
  renderFoodLog();
});

clearLogButton.addEventListener("click", () => {
  foodLog = [];
  renderFoodLog();
});

populateFoodSelect();
setActiveGoal(goalInput.value);
renderPlan(calculatePlan());
