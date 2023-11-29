"use client";
import React from "react";
import { ScissorsIcon } from "@heroicons/react/24/outline";

const Input = () => {
  return (
    <div className="flex justify-between items-center w-full bg-white rounded-lg">
      <input
        type="text"
        placeholder="Paste your URL"
        className="w-full p-4 text-[#6096B4] text-sm md:text-lg outline-none"
      />
      <ScissorsIcon className="w-16 md:w-20 p-3 text-[#6096B4] cursor-pointer" />
    </div>
  );
};

export default Input;
