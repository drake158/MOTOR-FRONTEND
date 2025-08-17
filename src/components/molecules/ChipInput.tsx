"use client";
import { useCallback, useState } from "react";
import Chip from "@/components/atoms/Chip";
import clsx from "clsx";

type ChipInputProps = {
  tokens: string[];
  onTokensChange: (tokens: string[]) => void;
  placeholder?: string;
  className?: string;
};

export default function ChipInput({
  tokens,
  onTokensChange,
  placeholder,
  className,
}: ChipInputProps) {
  const [isOver, setIsOver] = useState(false);

  const addToken = useCallback(
    (t: string) => {
      const token = t.trim();
      if (!token) return;
      if (tokens.some((x) => x.toLowerCase() === token.toLowerCase())) return;
      onTokensChange([...tokens, token]);
    },
    [tokens, onTokensChange]
  );

  const removeToken = useCallback(
    (idx: number) => {
      const next = [...tokens];
      next.splice(idx, 1);
      onTokensChange(next);
    },
    [tokens, onTokensChange]
  );

  // --- Drag & Drop handlers ---
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();           // permite el drop
    e.dataTransfer.dropEffect = "copy";
    setIsOver(true);
  };
  const onDragLeave = () => setIsOver(false);
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const text = e.dataTransfer.getData("text/plain");
    setIsOver(false);
    if (text) addToken(text);
  };

  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={clsx(
        "w-full rounded-md border px-2 py-2",
        "flex flex-wrap items-center gap-2 min-h-[46px]",
        "bg-white border-gray-300",
        isOver && "ring-2 ring-blue-500 ring-offset-2",
        className
      )}
      aria-label="Barra de búsqueda por fichas (drop zone)"
    >
      {tokens.length === 0 && (
        <span className="text-gray-400 px-1">{placeholder}</span>
      )}

      {tokens.map((t, i) => (
        <Chip key={`${t}-${i}`} text={t} onRemove={() => removeToken(i)} />
      ))}

      {/* input dummy readOnly para mantener flex y altura; no editable */}
      <input
        readOnly
        aria-hidden
        className="flex-1 min-w-[1px] outline-none text-base bg-transparent caret-transparent pointer-events-none select-none"
        value=""
      />
    </div>
  );
}
