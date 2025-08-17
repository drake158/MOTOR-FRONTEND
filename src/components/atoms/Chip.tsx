"use client";
import { X } from "lucide-react";
import clsx from "clsx";

type ChipProps = {
  text: string;
  onRemove?: () => void;
  className?: string;
  // nuevo:
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
  onDragEnd?: (e: React.DragEvent) => void;
};

export default function Chip({
  text,
  onRemove,
  className,
  draggable,
  onDragStart,
  onDragEnd,
}: ChipProps) {
  return (
    <span
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      className={clsx(
        "inline-flex items-center gap-2 rounded-full bg-gray-200 text-gray-800 px-3 py-1 text-sm select-none",
        draggable && "cursor-grab active:cursor-grabbing",
        className
      )}
    >
      <span>{text}</span>
      {onRemove && (
        <button
          type="button"
          aria-label={`Eliminar ${text}`}
          className="rounded-full p-0.5 hover:bg-gray-300"
          onClick={onRemove}
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </span>
  );
}
