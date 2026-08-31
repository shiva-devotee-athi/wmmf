"use client";

import { Menu } from "lucide-react";

type Props = {
  title: string;
  onMenuClick: () => void;
};

export default function Topbar({ title, onMenuClick }: Props) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-black/[0.06] bg-white px-5 lg:px-8">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open menu"
        className="flex h-9 w-9 items-center justify-center rounded-md text-secondary-700 lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>
      <h1 className="font-heading text-[17px] font-bold text-secondary-900">
        {title}
      </h1>
    </header>
  );
}
