import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <header className="mx-[-15px]">
      <div className="p-5">
        <Image
          alt="csp-logo"
          src={"/images/logo.png"}
          width={360}
          height={70}
        />
      </div>
      <NavLink />
    </header>
  );
};

export default Header;
