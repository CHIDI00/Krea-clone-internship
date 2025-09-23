import Image from "next/image";
import React from "react";
import avatar from "@/public/avatar.jpeg";

const Avatar = () => {
  return (
    <div className=" hover:bg-gray-200 transition-all duration-300 cursor-pointer p-[1.5px] rounded-lg">
      <Image
        src={avatar}
        alt="User Avatar"
        width="0"
        height="0"
        className="border-2 rounded-full w-7 h-7 border-slate-600"
      />
    </div>
  );
};

export default Avatar;
