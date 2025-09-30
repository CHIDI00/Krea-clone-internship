import Image from "next/image";
import Link from "next/link";
import React from "react";

import kreaBlack from "../../public/kreaBlack.png";
import kreaWhite from "../../public/kreaLogo.png";
import { useDarkMode } from "@/app/_context/useDarkMode";

const Logo = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <Link href="/">
      <Image
        src={isDarkMode ? kreaWhite : kreaBlack}
        width="15"
        height="15"
        quality={90}
        alt="Krea Ai logo"
      />
    </Link>
  );
};

export default Logo;
