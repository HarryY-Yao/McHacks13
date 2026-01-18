import React from "react";
import logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <div className="border-b pb-3 border-gray-200">
      <div className="flex justify-between items-center py-2.5 px-20 mt-1">
        <img src={logo} className="h-20 w-60" />
        <a 
	  href="http://127.0.0.1:3000/login" 
	  id="qsLoginBtn" 
	  className="bg-red-600 duration-200 ease-in-out hover:bg-red-800 text-white px-8.5 py-2 font-bold rounded-md">
          Sign in
	 </a>
      </div>
    </div>
  );
}
