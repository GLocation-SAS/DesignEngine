"use client";

import React from "react";
import Image from "next/image";

interface AvatarProps {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg";
}

const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return parts[0][0]?.toUpperCase() || "";
};

const Avatar: React.FC<AvatarProps> = ({ name, src, size = "md" }) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-[11px]",
    md: "w-10 h-10 text-[12px]",
    lg: "w-12 h-12 text-[14px]",
  };

  const initials = getInitials(name);

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center rounded-full overflow-hidden select-none transition-all duration-200 
        ${sizeClasses[size]} 
        ${src ? "bg-semantic-background-neutral-muted" : "bg-semantic-background-primary-surface text-semantic-text-neutral-brand font-semibold"}
        hover:opacity-90 active:scale-95`}
      title={name}
    >
      {src ? (
        <Image
          src={src}
          alt={name}
          fill
          className="aspect-square h-full w-full object-cover"
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};

export default Avatar;
