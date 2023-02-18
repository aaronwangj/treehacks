import classNames from "classnames";
import { headingTextStyle } from "./styles";
import ScreenLayout from "../components/ScreenLayout";
import LessonsContent from "../components/LessonsContent";
import { useState } from "react";

export default function User() {
  const [paid, togglePaid] = useState(false);
  return (
    <ScreenLayout>
      <h1 className={classNames(headingTextStyle)}>
        How to Start a YouTube Channel
      </h1>
      <div className="h-10" />
      <div className="flex-col flex space-y-5">
        <span className="text-4xl">Your Instructor</span>
        <div className="inline-flex space-x-5">
          <div className="flex flex-col space-y-3 items-center">
            <div className="avatar">
              <div className="w-32 rounded-full">
                <img src="profile.png" alt="profile" />
              </div>
            </div>
            <span className="font-bold text-xl">Aaron Wang</span>
          </div>
        </div>
        <span className="text-4xl">Course Curriculum</span>
        <LessonsContent expandable={paid} />
      </div>
      <div className="w-full h-10" />
      <div className="w-full flex items-center justify-center">
        {!paid && (
          <button
            className="btn btn-lg border-none rounded-md bg-gradient-to-r from-[#00df16] to-[#08bad2]"
            onClick={() => togglePaid(true)}
          >
            Buy for $249
          </button>
        )}
      </div>
    </ScreenLayout>
  );
}
