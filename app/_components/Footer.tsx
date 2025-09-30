import Image from "next/image";
import React from "react";

import mobbin from "@/public/mobbin.png";
import krea from "@/public/kreaLogo.png";

const Footer = () => {
  return (
    <div className="flex items-center justify-between w-full px-2 py-5 bg-black/95 md:px-6">
      <div className="flex justify-center items-center gap-3">
        <Image src={krea} quality={90} width="35" height="35" alt="krea logo" />
        <p className='text-white text-xl'>Krea AI</p>
      </div>
      <div className="flex justify-center items-center gap-3">
                <p className='text-white text-xl'>Created by</p>

        <Image
          src={mobbin}
          quality={90}
          width="200"
          height="200"
          alt="mobbin logo"
        />

      </div>
    </div>
  );
};

export default Footer;
