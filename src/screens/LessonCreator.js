import classNames from "classnames";
import { headingTextStyle } from "./styles";
import ScreenLayout from "../components/ScreenLayout";
import { useState } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LessonCreator() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleFileSubmit = (files) => {
    axios
      .post("http://localhost:5000", files[0], {
        headers: {
          "Content-Type": "video/mp4",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ScreenLayout>
      <h1 className={classNames(headingTextStyle)}>Lesson Creator</h1>
      <div className="h-10" />
      <div className="flex-col flex space-y-5">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-bold text-xl">Lesson Title</span>
          </label>
          <input
            type="text"
            placeholder="Title your lesson"
            className="input input-bordered w-3/5"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-bold text-xl">
              Lesson Description
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered w-3/5 min-h-[20vh]"
            placeholder="Describe your lesson"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="w-full h-10" />
        <div className="flex flex-col justify-center items-center w-full space-y-5">
          <div className="flex items-center justify-center w-1/2">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleFileSubmit(e.dataTransfer.files);
              }}
            >
              <div className="flex flex-col items-center justify-center p-6">
                <svg
                  aria-hidden="true"
                  className="w-20 h-20 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-2xl text-gray-500">
                  Drag and drop video files to upload
                </p>
                <p className="text-lg text-gray-500">
                  Your videos will be private until you publish them
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(e) => handleFileSubmit(e.target.files)}
              />
            </label>
          </div>
          <span className="text-xl">or</span>
          <span className="text-xl text-center">
            <span>Record your lesson now.</span> <br />
            Your videos will be private until you publish them
          </span>
          <div className="w-full h-full relative flex justify-center items-center">
            <Webcam imageSmoothing={true} audio={true} />
            <span className="absolute left-[calc(50%_-_1.5em)] bottom-10">
              <button
                className="btn btn-circle btn-error"
                onClick={() => navigate("/publish")}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="3em"
                  width="3em"
                >
                  <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zM6.5 5A1.5 1.5 0 005 6.5v3A1.5 1.5 0 006.5 11h3A1.5 1.5 0 0011 9.5v-3A1.5 1.5 0 009.5 5h-3z" />
                </svg>
              </button>
            </span>
          </div>
          <div className="w-full h-10" />
        </div>
      </div>
    </ScreenLayout>
  );
}
