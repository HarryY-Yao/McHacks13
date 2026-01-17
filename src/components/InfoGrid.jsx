import React from "react";
import InfoCard from "./InfoCard";
import chatIcon from "../assets/chat.svg";
import deskIcon from "../assets/desk.svg";
import starIcon from "../assets/star.svg";

export default function InfoGrid() {
  return (
    <div className="flex gap-4 items-center justify-center bg-gray-100 h-55">
      <InfoCard
        img={deskIcon}
        header="Join Study Rooms"
        body="Drop into live study rooms with other McGill students. Set goals, stay focused, and study alongside peers in real time."
      ></InfoCard>
      <InfoCard
        img={chatIcon}
        header="Chat with Classmates"
        body="Ask questions, share resources, and stay connected with classmates through built-in chat for each study session."
      ></InfoCard>
      <InfoCard
        img={starIcon}
        header="Stay Motivated"
        body="Build consistent study habits with shared accountability, progress tracking, and structured study sessions."
      ></InfoCard>
    </div>
  );
}
