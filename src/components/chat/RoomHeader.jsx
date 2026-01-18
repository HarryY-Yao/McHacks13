import React from "react";

export default function RoomHeader() {
  return (
    <div className="border-b px-10 py-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            General Study Room
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Goals • timer • resources will go here later
          </p>
        </div>

        <button className="px-3 py-2 rounded-md hover:bg-gray-50 text-gray-500">
          •••
        </button>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <Pill label="Focus mode" value="Off" />
        <Pill label="Pomodoro" value="—" />
        <Pill label="Files" value="—" />
      </div>
    </div>
  );
}

function Pill({ label, value }) {
  return (
    <div className="rounded-lg border border-gray-200 px-4 py-3">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="font-semibold text-gray-900 mt-1">{value}</div>
    </div>
  );
}
