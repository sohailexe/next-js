import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link href="/">APP</Link>
      </li>
      <li>
        <Link href="/cabins">cabins</Link>
      </li>
      <li>
        <Link href="/about">about</Link>
      </li>
      <li>
        <Link href="/accounts">accounts</Link>
      </li>
    </ul>
  );
};

export default Navigation;
