import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { headingTextStyle } from "./styles";
import ScreenLayout from "../components/ScreenLayout";
import LessonsContent from "../components/LessonsContent";
import BackButton from "../components/BackButton";

export default function Lessons() {
  const navigate = useNavigate();

  return (
    <ScreenLayout>
      <BackButton />
      <h1 className={classNames(headingTextStyle)}>Welcome, Aaron</h1>
      <div className="h-20" />
      <div className="w-full inline-flex justify-between items-center">
        <h2 className="font-bold text-4xl">How to Start a Youtube Channel</h2>
        <button class="btn btn-ghost gap-2">
          <h2
            className="font-bold text-xl"
            onClick={() => navigate("/creator")}
          >
            Add a lesson
          </h2>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1.5em"
            width="1.5em"
          >
            <defs>
              <style />
            </defs>
            <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
            <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
          </svg>
        </button>
      </div>
      <div className="h-5" />
      <LessonsContent />
    </ScreenLayout>
  );
}
