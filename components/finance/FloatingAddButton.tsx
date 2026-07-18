"use client";

import { Plus } from "lucide-react";

interface FloatingAddButtonProps {
  onClick: () => void;
}

export default function FloatingAddButton({
  onClick,
}: FloatingAddButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        fixed
        bottom-24
        right-6
        z-40
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-gradient-to-r
        from-emerald-600
        to-green-500
        text-white
        shadow-2xl
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-emerald-300/40
        active:scale-95
        lg:bottom-8
      "
    >
      <Plus size={30} strokeWidth={2.5} />
    </button>
  );
}