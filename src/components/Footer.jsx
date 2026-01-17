import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bottom-0 left-0 w-full flex justify-center">
      <p className="py-12">
        © {currentYear} <span className="font-bold">McGill StudyWithMe</span>,
        All rights reserved.
      </p>
    </footer>
  );
}
