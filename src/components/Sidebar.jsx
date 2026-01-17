import React from "react";
import logo from "../assets/logo.png";
import StudyRoomCol from "./StudyRoomCol";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-4">
      <img src={logo} alt="" />
      <StudyRoomCol></StudyRoomCol>
    </div>
  );
}
