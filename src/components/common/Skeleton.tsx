"use client";

import React from "react";

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = "" }) => {
  return (
    <div
      className={`bg-gray-100 animate-pulse rounded-sm ${className}`}
      style={{
        background:
          "linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)",
        backgroundSize: "200% 100%",
        animation: "skeleton-loading 1.5s infinite ease-in-out",
      }}
    />
  );
};

export default Skeleton;
