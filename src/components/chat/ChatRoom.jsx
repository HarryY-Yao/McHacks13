import React from "react";
import ChatTopBar from "./ChatTopBar";
import LeftPanel from "./LeftPanel";
import ChatPanel from "./ChatPanel";
import RightPanel from "./RightPanel";

export default function ChatRoom() {
  return (
    <div className="h-screen w-screen bg-gray-100">
      <ChatTopBar />

      <div className="h-[calc(100vh-72px)] grid grid-cols-[320px_1fr_320px]">
        <div className="border-r bg-gray-50">
          <LeftPanel />
        </div>

        <div className="bg-white">
          <ChatPanel />
        </div>

        <div className="border-l bg-white">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}
