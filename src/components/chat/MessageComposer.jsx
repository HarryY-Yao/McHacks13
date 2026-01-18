import React, { useState } from "react";

export default function MessageComposer() {
  const [text, setText] = useState("");

  return (
    <div className="border-t px-10 py-5">
      <div className="flex items-center gap-3">
        <button
          className="h-11 w-11 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
          type="button"
          title="Attach (later)"
        >
          📎
        </button>

        <input
          className="flex-1 h-11 rounded-md border border-gray-200 px-4 outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400"
          placeholder="Type a message… (not wired yet)"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          className="h-11 px-5 rounded-md bg-red-600 hover:bg-red-800 duration-200 ease-in-out text-white font-bold"
          type="button"
          onClick={() => setText("")}
          title="Send (placeholder)"
        >
          Send
        </button>
      </div>
    </div>
  );
}
