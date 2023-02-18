import classNames from "classnames";
import { useLessonContext } from "../contexts/LessonContext";
import ReactPlayer from "react-player";
import { headingTextStyle } from "./styles";
import ScreenLayout from "../components/ScreenLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Publish() {
  const navigate = useNavigate();
  const [quizLoading, toggleQuizLoading] = useState(false);
  const [summaryLoading, toggleSummaryLoading] = useState(false);
  const { transcript, summary, quiz, setSummary, setQuiz } = useLessonContext();

  const regenSummary = () => {
    toggleSummaryLoading(true);
    const form = new FormData();
    form.append("transcript", transcript);

    axios
      .post("http://localhost:5000/regen_summary", form, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setSummary(res.data.summary);
        toggleSummaryLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const regenQuiz = () => {
    toggleQuizLoading(true);
    const form = new FormData();
    form.append("transcript", transcript);

    axios
      .post("http://localhost:5000/regen_quiz", form, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setQuiz(res.data.quiz);
        toggleQuizLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ScreenLayout>
      <h1 className={classNames(headingTextStyle)}>Publish Your Lesson</h1>
      <div className="h-10" />
      <div className="flex-col flex space-y-5">
        <span className="font-bold text-2xl">
          Part 3: How to Make a Thumbnail
        </span>
        <div className="flex flex-col space-y-5 w-3/4">
          <div className="flex w-full items-center justify-center">
            <ReactPlayer
              className="react-player"
              url="videos/test.mp4"
              width="75%"
              height="75%"
              controls={true}
            />
          </div>
          <span className="text-lg">{transcript}</span>
          <div className="inline-flex space-x-2 items-center">
            <span className="text-lg font-bold">Lesson Summary</span>
            <button
              className={classNames(
                "btn btn-sm gap-2",
                summaryLoading && "loading"
              )}
              onClick={() => regenSummary()}
            >
              Regenerate
              {!summaryLoading && (
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                >
                  <path d="M1 4v6h6M23 20v-6h-6" />
                  <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" />
                </svg>
              )}
            </button>
          </div>
          <span className="text-lg">{summary[0]}</span>
          <div className="inline-flex space-x-2 items-center">
            <span className="text-lg font-bold">Lesson Quiz</span>
            <button
              className={classNames(
                "btn btn-sm gap-2",
                quizLoading && "loading"
              )}
              onClick={() => regenQuiz()}
            >
              Regenerate
              {!quizLoading && (
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                >
                  <path d="M1 4v6h6M23 20v-6h-6" />
                  <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" />
                </svg>
              )}
            </button>
          </div>
          <span className="text-lg whitespace-pre-line">{quiz[1]}</span>
        </div>
      </div>
      <div className="w-full h-10" />
      <div className="w-full flex items-center justify-center">
        <button
          className="btn btn-lg border-none rounded-md bg-gradient-to-r from-[#00df16] to-[#08bad2]"
          onClick={() => navigate("/user")}
        >
          Publish Now
        </button>
      </div>
    </ScreenLayout>
  );
}
