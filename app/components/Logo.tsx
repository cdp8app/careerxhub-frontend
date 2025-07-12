import React from "react";
import "../../app/globals.css";
import Image from "next/image";
import Logo1 from "../../public/images/Logo1.png";

const Logo = () => {
  return (
    <div className="w-[100%] mb-6 flex justify-center">
      <Image
        src={Logo1}
        alt="Logo1"
        className="h-[75px] w-[75px]"
      />
    </div>
  );
};

export default Logo;
