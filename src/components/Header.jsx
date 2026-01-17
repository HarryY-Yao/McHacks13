import React from "react";

export default function Header() {
  return (
    <div className="flex flex-col text-center items-center gap-5 py-30 pb-20">
      <h1 className="text-red-600 font-bold text-5xl">
        Study Smarter. Together.
      </h1>
      <p className="w-150">
        A focused, distraction-free space for McGill students to study
        together—anytime, anywhere. This app connects you with peers, shared
        accountability, and structured study sessions to turn intention into
        consistency and effort into results.
      </p>
      <button className="bg-red-600 hover:bg-red-800 duration-200 ease-in-out text-white px-11 py-2.5 font-bold rounded-md text-xl">
        Get Started
      </button>
    </div>
  );
}
