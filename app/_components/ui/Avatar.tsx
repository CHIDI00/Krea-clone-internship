import Image from "next/image";
import React from "react";
import kreaBlack from "@/public/kreaBlack.png";

const Avatar = () => {
  return (
    <div className="cursor-pointer">
      <Image
        src={kreaBlack}
        alt="User Avatar"
        width="0"
        height="0"
        className="w-6 h-6 border-2 rounded-full border-slate-600"
      />
    </div>
  );
};

export default Avatar;
