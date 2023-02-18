import classNames from "classnames";
import { headingTextStyle } from "./styles";

export default function Landing() {
  return (
    <div className="w-screen h-screen bg-[url('landing.png')] bg-no-repeat bg-cover flex flex-col items-center justify-center space-y-10">
      <h1 className={classNames(headingTextStyle, "text-center")}>
        Teach what you know. <br />
        Effortlessly.
      </h1>
      <p className="text-center text-xl w-1/2">
        Transfer your knowledge to your audience with the best online course
        platform for creators everywhere.
      </p>
      <div className="w-1/2 h-14 flex space-x-16 justify-center items-center">
        <button className="bg-[#7DC1FF] w-1/4 h-full rounded-full font-semibold text-xl">
          Get Started
        </button>
        <button className="bg-[#9EFF9C] w-1/4 h-full rounded-full font-semibold text-xl">
          Log In
        </button>
      </div>
    </div>
  );
}
