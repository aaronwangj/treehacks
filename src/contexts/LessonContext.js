import { createContext, useContext } from "react";

const LessonContext = createContext({
  transcript: "",
  summary: [],
  quiz: [],
  setTranscript: () => {},
  setSummary: () => {},
  setQuiz: () => {},
});

function useLessonContext() {
  return useContext(LessonContext);
}

export { LessonContext, useLessonContext };
