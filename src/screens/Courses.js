import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { headingTextStyle } from "./styles";
import ScreenLayout from "../components/ScreenLayout";
import { useQuery } from "../convex/_generated/react";

export default function Courses() {
  const navigate = useNavigate();
  const data = useQuery("ListCourses");
  if (data === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <ScreenLayout>
      <h1 className={classNames(headingTextStyle)}>Welcome, Aaron</h1>
      <div className="h-20" />
      <div className="w-full inline-flex justify-between items-center">
        <h2 className="font-bold text-4xl">Your Courses</h2>
        <button class="btn btn-ghost gap-2">
          <h2 className="font-bold text-xl">Add a course</h2>
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
      {data.map((entry) => {
        return (
          <div className="flex-col flex space-y-5">
            <div className="w-full h-[2px] bg-gray-500" />
            <div
              className="inline-flex h-[15vh] w-full bg-white border rounded-xl shadow p-10 items-center hover:opacity-60"
              onClick={() => navigate("/lessons")}
            >
              <div className="flex flex-col flex-1">
                <span className="font-bold text-2xl">
                  {entry.name}
                </span>
                <span className="text-lg">
                  {entry.description}
                </span>
              </div>
              <span className="text-xl w-10">$249</span>
              <div className="w-5" />
              <button class="btn btn-circle btn-ghost">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z" />
                </svg>
              </button>
            </div>
          </div>
        );
      })};
    </ScreenLayout>
  );
}
