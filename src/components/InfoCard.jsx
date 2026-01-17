import React from "react";

export default function InfoCard({ img, header, body }) {
  return (
    <div className="h-43 w-95 grid grid-rows-2 bg-white px-10 py-4 rounded-s shadow-md">
      <div className="flex gap-2.5 border-b items-center border-gray-200 justify-center">
        <img className="h-15" src={`${img}`} />
        <p className="text-red-600 font-bold text-xl">{header}</p>
      </div>
      <div>{body}</div>
    </div>
  );
}
