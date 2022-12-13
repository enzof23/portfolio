const projects = [
  {
    title: "Words2Go",
    description:
      "Web app that lets users organize and practice their vocabulary studies. Users can create an account to save lists and add, update or delete words to it. Lists are saved and fetched from Firebase using user key and client data is updated in real time.",
    image: "words2go",
    tech: ["React", "React-Router", "Typescript", "Firebase", "MaterialUI"],
    links: {
      github: "https://github.com/enzof23/lang_nb",
      live: "https://words2go.vercel.app/",
    },
  },
  {
    title: "Triv.io",
    description:
      "Trivia Game Application. Fetch questions from Open Trivia Database to create a fun trivia game. Category, number of questions and difficulty can be set manually. Based on settings, a different request will be sent to the API. Project inspired by Scrimba's React course project.",
    image: "quiz",
    tech: ["React", "Redux", "Scss", "axios"],
    links: {
      github: "https://github.com/enzof23/quiz_appv2/tree/master",
      live: "https://trivio-project.netlify.app/",
    },
  },
];

export default projects;
