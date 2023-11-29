import React from "react";
import { ClipboardIcon, XCircleIcon } from "@heroicons/react/24/outline";

const ShortedLink = () => {
  return (
    <div className="w-full p-3 flex justify-between items-center bg-white rounded-md gap-1">
      <div className="flex flex-col lg:flex-row overflow-hidden lg:items-center gap-2">
        <p className="text-sm md:text-lg truncate w-full lg:w-4/6">
          https://chat.openai.com/c/1ba3c448-97d7-4f1b-8f7c-f0623e74055d{" "}
        </p>
        <p className="text-sm md:text-lg text-[#6096B4] font-semibold">
          This is ShortedLink
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-2 items-center">
        <ClipboardIcon className="w-6 md:w-8 md:p-1 cursor-pointer" />
        <XCircleIcon className="w-6 md:w-8 md:p-1 cursor-pointer" />
      </div>
    </div>
  );
};

export default ShortedLink;
