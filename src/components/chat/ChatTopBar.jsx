import React from "react";
import logo from "../../assets/logo.png";

export default function ChatTopBar() {
  return (
    <header className="h-[72px] bg-white border-b">
      <div className="h-full px-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logo} alt="McGill StudyWithMe" className="h-12 w-auto" />
          <div className="hidden md:block">
            <div className="font-semibold text-gray-900">Study Room</div>
            <div className="text-sm text-gray-500">
              Chatroom UI shell (no messages yet)
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-md border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50">
            Settings
          </button>
          <button className="bg-red-600 hover:bg-red-800 duration-200 ease-in-out text-white px-6 py-2 rounded-md font-bold">
            Leave
          </button>
        </div>
      </div>
    </header>
  );
}
