const mongoose = require("mongoose");
const Workout = require("./models/Workout");

const workouts = [
  {
    id: 1,
    name: "Overhead Press",
    keyword: [
      "handstand pushups",
      "elevated pikepushups",
      "pikepushups",
      "overhead press",
    ],
    image: "/images/hspu.jpeg",
    category: ["push"],
    muscle: ["tricep", "sidedelts", "frontdelts"],
    description:
      "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
    level: "advanced",
    video: "/videos/reardeltrows.mp4",
    begginer: 4,
    intermediate: 7,
    advanced: 1,
    variation_byLevel: [
      {
        level: "advanced",
        name: "handstand pushups",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/reardeltrows.mp4",
        sets: 4,
        reps: 4,
        repsDone: 0,
        restTime: 60,
        image: "/images/hspu.jpeg",
      },
      {
        level: "intermediate",
        name: "Elevatet Pike Pushups",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/swordraise.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
        image: "/images/pike2.png",
      },
      {
        level: "begginer",
        name: "Pike Pushups",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/chinup.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
        image: "/images/pike2.png",
      },
    ],
  },
  {
    id: 2,
    name: "Dips",
    image: "/images/ringdips.jpg",
    description:
      "For Strength-wised-Hypertrophy so aim for 6 to 8 reps at 10 rpe. If you are begginer there are alternatives that are shown in the video",
    level: "advanced",
    video: "/videos/chinup.mp4",
    variation_byLevel: [
      {
        level: "advanced",
        name: "Ripg dips",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/chinup.mp4",
        sets: 3,
        reps: 8,
        repsDone: 0,
        restTime: 60,
        image: "/images/ringdips.jpg",
      },
      {
        level: "intermediate",
        name: "Dips",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/swordraise.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
        image: "/images/dips.png",
      },
      {
        level: "begginer",
        name: "Bench dips",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/chinup.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
        image: "/images/benchdip.jpeg",
      },
    ],
  },
  {
    id: 3,
    name: "Pushups",
    image: "/images/ring_pushups.jpeg",
    description:
      "For Hypertrophy so aim for 8 to 15+ reps at 10 rpe. If you are begginer there are alternatives that are shown in the video",
    level: "advanced",
    video: "/videos/ringdip1.mp4",
    variation_byLevel: [
      {
        level: "advanced",
        name: "Ring pushups",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/ringdip1.mp4",
        sets: 3,
        reps: 10,
        repsDone: 0,
        restTime: 60,
        image: "/images/ring_pushups.jpeg",
      },
      {
        level: "intermediate",
        name: "Pushups",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/swordraise.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
        image: "/images/pushups.jpeg",
      },
      {
        level: "begginer",
        name: "Elevated Pushups",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/chinup.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
        image: "/images/incline-push-up.jpeg",
      },
    ],
  },
  {
    id: 4,
    name: "Front lever raise",
    keyword: [
      "handstand pushups",
      "elevated pikepushups",
      "pikepushups",
      "overhead press",
    ],
    image: "/images/hspu.jpeg",
    category: ["pull"],
    muscle: ["lats", " back"],
    description: "Hit lats!!",
    variation_byLevel: [
      {
        level: "advanced",
        name: "frontlever raise",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/reardeltrows.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
        image: "/images/frontlever.jpeg",
      },
      {
        level: "intermediate",
        name: "tuck-frontlever raise",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/swordraise.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
        image: "/images/tuck-front-lever-smalljpeg",
      },
      {
        level: "begginer",
        name: "Straight arm pull",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/chinup.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
        image: "/images/stpull.jpeg",
      },
    ],
  },
  {
    id: 5,
    name: "Pull up",
    image: "/images/ringdips.jpg",
    description:
      "For Strength-wised-Hypertrophy so aim for 6 to 8 reps at 10 rpe. If you are begginer there are alternatives that are shown in the video",
    video: "/videos/chinup.mp4",
    variation_byLevel: [
      {
        level: "advanced",
        name: "pull ups",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/reardeltrows.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
        image: "/images/pullup2.jpeg",
      },
      {
        level: "intermediate",
        name: "body rows",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/swordraise.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
        image: "/images/rows.jpeg",
      },
      {
        level: "begginer",
        name: "body rows",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/chinup.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
        image: "/images/rows.jpeg",
      },
    ],
  },
  {
    id: 6,
    name: "Ring Pushups",
    image: "/images/ring_pushups.jpeg",
    description:
      "For Hypertrophy so aim for 8 to 15+ reps at 10 rpe. If you are begginer there are alternatives that are shown in the video",
    level: "advanced",
    video: "/videos/ringdip1.mp4",
    variation_byLevel: [
      {
        level: "advanced",
        name: "Ring pushups",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/reardeltrows.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
        image: "/images/ring_pushups.jpeg",
      },
      {
        level: "intermediate",
        name: "Pushups",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/swordraise.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
      },
      {
        level: "begginer",
        name: "Elevated Pushups",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/chinup.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
      },
    ],
  },
  {
    id: 7,
    name: "Overhead Press",
    keyword: [
      "handstand pushups",
      "elevated pikepushups",
      "pikepushups",
      "overhead press",
    ],
    image: "/images/hspu.jpeg",
    category: ["push"],
    muscle: ["tricep", "sidedelts", "frontdelts"],
    description:
      "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
    level: "advanced",
    video: "/videos/reardeltrows.mp4",
    begginer: 4,
    intermediate: 7,
    advanced: 1,
    variation_byLevel: [
      {
        level: "advanced",
        name: "handstand pushups",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/reardeltrows.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
      },
      {
        level: "intermediate",
        name: "Elevatet Pike Pushups",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/swordraise.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
      },
      {
        level: "begginer",
        name: "Pike Pushups",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/chinup.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
      },
    ],
  },
  {
    id: 8,
    name: "Dips",
    image: "/images/ringdips.jpg",
    description:
      "For Strength-wised-Hypertrophy so aim for 6 to 8 reps at 10 rpe. If you are begginer there are alternatives that are shown in the video",
    level: "advanced",
    video: "/videos/chinup.mp4",
    variation_byLevel: [
      {
        level: "advanced",
        name: "Ripg dips",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/reardeltrows.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
      },
      {
        level: "intermediate",
        name: "Dips",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/swordraise.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
      },
      {
        level: "begginer",
        name: "Bench dips",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/chinup.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
      },
    ],
  },
  {
    id: 9,
    name: "Ring Pushups",
    image: "/images/ring_pushups.jpeg",
    description:
      "For Hypertrophy so aim for 8 to 15+ reps at 10 rpe. If you are begginer there are alternatives that are shown in the video",
    level: "advanced",
    video: "/videos/ringdip1.mp4",
    variation_byLevel: [
      {
        level: "advanced",
        name: "Ring pushups",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/reardeltrows.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
      },
      {
        level: "intermediate",
        name: "Pushups",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/swordraise.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
      },
      {
        level: "begginer",
        name: "Elevated Pushups",
        description:
          "Great option for shoulder growth and triceps depending on how you place your arms. narrower => tricep. wider => sidedelt. Don't forget to do rotator cuff correctives to avoid unnecesary injuries",
        video: "/videos/chinup.mp4",
        sets: 4,
        reps: 8,
        repsDone: 0,
        restTime: 60,
      },
    ],
  },
];

const seedWorkouts = () => {
  workouts.forEach(async (workout) => {
    const newWorkout = await new Workout(workout);
    await newWorkout.save((e) => console.log(e));
  });
};

module.exports = seedWorkouts;
