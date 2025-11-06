// assets/exercises.ts
export type Exercise = {
  id: string;                // "push-ups"
  name: string;              // "Push-Ups"
  aliases: string[];         // ["push ups", "push-ups", "pushup", "pushups"]
  category: "upper" | "lower" | "core" | "full";
  difficulty: "beginner" | "intermediate" | "advanced";
  equipment: ("bodyweight" | "dumbbell" | "barbell" | "machine" | "band")[];
  description: string;       // kısa açıklama
  cues: string[];            // form ipuçları
  defaults?: {               // AI çıktılarını normalize ederken kullanılabilir
    sets?: number;
    reps?: number;
    timeSec?: number;        // plank etc.
    restSec?: number;
    tempo?: string;          // "2-0-2" etc.
  };
  media?: {
    gif?: string;            // "pushups.gif" (i'll add later)
    image?: string;          // "pushups.png"
  };
  muscles?: string[];        // "chest", "triceps", "glutes"...
  contraindications?: string[]; // sakatlıklara dikkat noktaları
  regressions?: string[];    // kolay varyasyonlar
  progressions?: string[];   // zorlaştırmalar
};

export const allExercises: Exercise[] = [
  {
    id: "push-ups",
    name: "Push-Ups",
    aliases: ["push ups", "push-ups", "pushup", "pushups"],
    category: "upper",
    difficulty: "beginner",
    equipment: ["bodyweight"],
    description: "Chest, shoulders and triceps-focused bodyweight press.",
    cues: ["Keep core tight", "Wrists under shoulders", "Full range of motion"],
    defaults: { sets: 3, reps: 8, restSec: 60, tempo: "2-0-2" },
    media: { gif: "pushups.gif", image: "pushups.png" },
    muscles: ["chest", "triceps", "front-delts"],
    regressions: ["Knee Push-Ups", "Incline Push-Ups"],
    progressions: ["Decline Push-Ups", "Ring Push-Ups"]
  },
  {
    id: "pull-ups",
    name: "Pull-Ups",
    aliases: ["pull ups", "pull-ups", "pullup", "pullups"],
    category: "upper",
    difficulty: "intermediate",
    equipment: ["bodyweight"],
    description: "Vertical pulling for lats and biceps.",
    cues: ["Scapular depression first", "Elbows to ribs", "No swinging"],
    defaults: { sets: 3, reps: 5, restSec: 90 },
    media: { gif: "pullups.gif", image: "pullups.png" },
    muscles: ["lats", "biceps", "mid-back"],
    regressions: ["Assisted Pull-Ups", "Lat Pulldown"],
    progressions: ["Weighted Pull-Ups", "L-Sit Pull-Ups"]
  },
  {
    id: "bodyweight-squat",
    name: "Bodyweight Squats",
    aliases: ["squats", "air squats", "bodyweight squats"],
    category: "lower",
    difficulty: "beginner",
    equipment: ["bodyweight"],
    description: "Lower-body squat pattern emphasizing quads and glutes.",
    cues: ["Knees track toes", "Neutral spine", "Full depth if possible"],
    defaults: { sets: 3, reps: 12, restSec: 60 },
    media: { gif: "squat.gif", image: "squat.png" },
    muscles: ["quads", "glutes", "hamstrings"]
  },
  {
    id: "plank",
    name: "Plank",
    aliases: ["front plank", "elbow plank"],
    category: "core",
    difficulty: "beginner",
    equipment: ["bodyweight"],
    description: "Isometric core anti-extension hold.",
    cues: ["Ribs down", "Glutes on", "Neck neutral"],
    defaults: { sets: 3, timeSec: 30, restSec: 45 },
    media: { gif: "plank.gif", image: "plank.png" },
    muscles: ["rectus abdominis", "obliques", "transverse abdominis"]
  },
  {
    id: "lunges",
    name: "Lunges",
    aliases: ["lunge", "forward lunges"],
    category: "lower",
    difficulty: "beginner",
    equipment: ["bodyweight"],
    description: "Unilateral squat pattern; knee and hip control.",
    cues: ["Tall torso", "90° knee angles", "Drive through mid-foot"],
    defaults: { sets: 3, reps: 10, restSec: 60 },
    media: { gif: "lunges.gif" },
    muscles: ["quads", "glutes", "hamstrings"]
  },
  {
    id: "crunches",
    name: "Crunches",
    aliases: ["crunch", "ab crunch"],
    category: "core",
    difficulty: "beginner",
    equipment: ["bodyweight"],
    description: "Abdominal flexion with controlled spine movement.",
    cues: ["Exhale up", "Ribs to pelvis", "No neck pull"],
    defaults: { sets: 3, reps: 15, restSec: 45 },
    media: { gif: "crunch.gif" },
    muscles: ["rectus abdominis"]
  },
  {
    id: "dips",
    name: "Dips",
    aliases: ["bench dips", "parallel bar dips"],
    category: "upper",
    difficulty: "intermediate",
    equipment: ["bodyweight"],
    description: "Triceps and chest pressing on parallel bars or bench.",
    cues: ["Scapular depression", "Elbows back", "Controlled depth"],
    defaults: { sets: 3, reps: 8, restSec: 90 },
    media: { gif: "dips.gif" },
    muscles: ["triceps", "chest", "front-delts"]
  },
  {
    id: "glute-bridge",
    name: "Glute Bridges",
    aliases: ["glute bridge", "hip bridge"],
    category: "lower",
    difficulty: "beginner",
    equipment: ["bodyweight"],
    description: "Hip extension pattern to target glutes.",
    cues: ["Posterior pelvic tilt", "Squeeze glutes top", "No lumbar arch"],
    defaults: { sets: 3, reps: 12, restSec: 60 },
    media: { gif: "glute_bridge.gif" },
    muscles: ["glutes", "hamstrings"]
  },
  {
    id: "mountain-climbers",
    name: "Mountain Climbers",
    aliases: ["mountain climber", "mc"],
    category: "full",
    difficulty: "beginner",
    equipment: ["bodyweight"],
    description: "Dynamic core + conditioning drill.",
    cues: ["Neutral hips", "Active shoulders", "Rhythmic pace"],
    defaults: { sets: 3, timeSec: 30, restSec: 45 },
    media: { gif: "mountain_climbers.gif" }
  },
  {
    id: "jumping-jacks",
    name: "Jumping Jacks",
    aliases: ["jumping jack", "jj"],
    category: "full",
    difficulty: "beginner",
    equipment: ["bodyweight"],
    description: "Simple conditioning and warm-up drill.",
    cues: ["Soft knees", "Full arm swing", "Steady breathing"],
    defaults: { sets: 3, timeSec: 30, restSec: 30 },
    media: { gif: "jumping_jacks.gif" }
  },
  {
    id: "sit-ups",
    name: "Sit-Ups",
    aliases: ["sit ups", "sit-ups"],
    category: "core",
    difficulty: "beginner",
    equipment: ["bodyweight"],
    description: "Full spinal flexion abdominal exercise.",
    cues: ["Feet anchored if needed", "No neck strain", "Controlled tempo"],
    defaults: { sets: 3, reps: 12, restSec: 60 },
    media: { gif: "situps.gif" }
  },
  {
    id: "romanian-deadlift-db",
    name: "Romanian Deadlift (DB)",
    aliases: ["db rdl", "romanian deadlift", "rdl dumbbell"],
    category: "lower",
    difficulty: "beginner",
    equipment: ["dumbbell"],
    description: "Hip hinge emphasizing hamstrings and glutes.",
    cues: ["Hinge hips back", "Neutral spine", "Shins vertical"],
    defaults: { sets: 3, reps: 10, restSec: 90 },
    media: { gif: "rdl_db.gif" },
    muscles: ["hamstrings", "glutes", "erectors"]
  }
];
