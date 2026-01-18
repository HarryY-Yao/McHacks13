import React from "react";
import RoomHeader from "./RoomHeader";
import ChatEmptyState from "./ChatEmptyState";
import MessageComposer from "./MessageComposer";

export default function ChatPanel() {
  return (
    <div className="h-full flex flex-col">
      <RoomHeader />

      <div className="flex-1 overflow-y-auto px-10 py-8">
        <ChatEmptyState />
      </div>

      <MessageComposer />
    </div>
  );
}
