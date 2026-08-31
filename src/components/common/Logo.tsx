"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  href?: string;
}

const Logo: React.FC<LogoProps> = ({
  className = "w-12 h-12",
  width = 500,
  height = 500,
  href = "/",
}) => {
  const content = (
    <div className="flex items-center gap-3">
      <Image
        src="/images/logo.png"
        alt="wmmc-logo"
        width={width}
        height={height}
        className={`${className} object-cover`}
        priority
      />
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
};

export default Logo;
