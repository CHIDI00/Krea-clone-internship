import Image from "next/image";
import React from "react";

import mobbin from "@/public/mobbin.png";
import krea from "@/public/kreaLogo.png";

const Footer = () => {
  return (
    <div className="flex items-center justify-between w-full px-2 py-5 bg-black/95 md:px-6">
      <div className="">
        <Image src={krea} quality={90} width="40" height="40" alt="krea logo" />
      </div>
      <div className="">
        <Image
          src={mobbin}
          quality={90}
          width="160"
          height="160"
          alt="mobbin logo"
        />
      </div>
    </div>
  );
};

export default Footer;
