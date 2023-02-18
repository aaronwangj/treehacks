import classNames from "classnames";
import ReactPlayer from "react-player";
import { headingTextStyle } from "./styles";
import ScreenLayout from "../components/ScreenLayout";
import { useState } from "react";

export default function Lessons() {
  const [expanded, toggleExpanded] = useState(false);
  return (
    <ScreenLayout>
      <h1 className={classNames(headingTextStyle)}>Welcome, Aaron</h1>
      <div className="h-20" />
      <div className="w-full inline-flex justify-between items-center">
        <h2 className="font-bold text-4xl">How to Start a YouTube Channel</h2>
        <button class="btn btn-ghost gap-2">
          <h2 className="font-bold text-xl">Add a lesson</h2>
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
      <div className="flex-col flex space-y-5">
        <div className="w-full h-[2px] bg-gray-500" />
        <div className="inline-flex h-[15vh] w-full bg-white border rounded-xl shadow p-10 items-center">
          <div className="flex flex-col flex-1">
            <span className="font-bold text-2xl">
              Part 1: Finding Your Audience
            </span>
            <span className="text-lg">
              In this lesson, you will learn what videos you should make
            </span>
          </div>
          <button class="btn btn-circle btn-ghost">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="2em"
              width="2em"
            >
              <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-5 bg-white border rounded-xl shadow p-10 min-h-[15vh]">
          <div className="inline-flex w-full items-center">
            <div className="flex flex-col flex-1">
              <span className="font-bold text-2xl">
                Part 3: How to Make a Thumbnail
              </span>
              {!expanded && (
                <span className="text-lg">
                  In this lesson, you will learn what videos you should make
                </span>
              )}
            </div>
            <button
              class="btn btn-circle btn-ghost"
              onClick={() => toggleExpanded((prev) => !prev)}
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="2em"
                width="2em"
                className={("transform", expanded ? "rotate-90" : "rotate-0")}
              >
                <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" />
              </svg>
            </button>
          </div>
          {expanded && (
            <div className="flex flex-col space-y-5">
              <div className="flex w-full items-center justify-center">
                <ReactPlayer
                  className="react-player"
                  url="videos/test.mp4"
                  width="75%"
                  height="75%"
                  controls={true}
                />
              </div>
              <span className="text-lg">
                In this lesson, you will learn how to edit clickable thumbnails.
                Thumbnails are a crucial part of an creator’s toolbox. They
                allow the audience to get a peak at what type of content you can
                provide. More importantly, they are what users see before
                deciding on whether or not to click on your content.
              </span>
              <div className="inline-flex space-x-2 items-center">
                <span className="text-lg font-bold">Lesson Summary</span>
                <button className="btn btn-sm gap-2">
                  Regenerate
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
                </button>
              </div>
              <span className="text-lg">
                The lesson discusses how to create and customize YouTube
                thumbnails, which play a significant role in enticing viewers to
                click on a video. Thumbnails are still images that represent the
                video content, and there are two types: auto-generated by
                YouTube and created by the video owner. While auto-generated
                thumbnails save time, personalized thumbnails let you add your
                own branding and style. Six recommendations for creating
                professional thumbnails are given, including dimensions, font
                guidelines, branding, readability, high-quality images, and
                thumbnail style experimentation. Busy thumbnails should be
                avoided, and the article concludes with tips for uploading
                customized thumbnails to YouTube. The article also includes
                frequently asked questions about using templates, the number of
                custom thumbnails a channel can upload per day, editing
                published video thumbnails, and the use of clickbait thumbnails.
              </span>
              <div className="inline-flex space-x-2 items-center">
                <span className="text-lg font-bold">Lesson Quiz</span>
                <button className="btn btn-sm gap-2">
                  Regenerate
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
                </button>
              </div>
              <span className="text-lg">
                1. What are the two types of YouTube thumbnail styles creators
                can choose from? <br />
                a) Pictures and videos <br />
                b) Auto-generated from YouTube and created by you <br />
                c) Thumbnail and full-screen mode <br />
                d) High-quality and low-quality <br />
                2. What is the recommended dimension for YouTube thumbnails?
                <br />
                a) 720 x 480 pixels <br />
                b) 640 x 480 pixels <br />
                c) 1280 x 720 pixels <br />
                d) 1920 x 1080 pixels <br />
                3. What should be included in a YouTube thumbnail to make it
                more clickable? <br />
                a) Hard to read text <br />
                b) Low-quality and irrelevant images <br />
                c) Consistent branded theme, font, color scheme, and graphics
                <br />
                d) Small and unreadable images <br />
                4. What is the recommended YouTube thumbnail font guideline?
                <br />
                a) Any font and text color <br />
                b) Bold, block fonts <br />
                c) Only bright colors <br />
                d) Italics and cursive <br />
                5. Can you change a YouTube video's thumbnail after publishing a
                video? <br />
                a) Yes <br />
                b) No <br />
                c) Only in the first hour after publishing <br />
                d) Only with a verified account
              </span>
            </div>
          )}
        </div>
      </div>
    </ScreenLayout>
  );
}
