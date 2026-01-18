import React from "react";

export default function ChatEmptyState() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center gap-3">
      <div className="h-14 w-14 rounded-full bg-red-50 flex items-center justify-center text-2xl">
        💬
      </div>
      <h2 className="text-lg font-semibold text-gray-900">No messages yet</h2>
      <p className="text-gray-500 max-w-md">
        This is the chatroom layout. Later you’ll render messages here and
        connect the composer to your backend / WebSocket.
      </p>
    </div>
  );
}
