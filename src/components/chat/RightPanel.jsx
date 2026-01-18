import React from "react";

export default function RightPanel() {
  return (
    <div className="h-full p-6">
      <div className="border-b pb-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-gray-900">Participants</h2>
          <span className="text-sm text-gray-500">0 online</span>
        </div>
      </div>

      <div className="pt-6 text-sm text-gray-500">
        Participant list will render here later.
      </div>

      <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
        <div className="font-semibold text-gray-900">Room tools</div>
        <ul className="mt-2 space-y-2 text-gray-600">
          <li>• Study goals (placeholder)</li>
          <li>• Pomodoro timer (placeholder)</li>
          <li>• Shared files (placeholder)</li>
        </ul>
      </div>
    </div>
  );
}
