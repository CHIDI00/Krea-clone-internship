import Image from "next/image";
import Link from "next/link";
import React from "react";

import kreaBlack from "../../public/kreaBlack.png";
import kreaWhite from "../../public/kreaLogo.png";

const Logo = () => {
  return (
    <Link href="/">
      {" "}
      <Image
        src={kreaBlack}
        width="15"
        height="15"
        quality={100}
        alt="Krea Ai logo"
      />
    </Link>
  );
};

export default Logo;
