"use client";

import { useState } from "react";

export default function LikeButton({ initial = 0 }: { initial?: number }) {
  const [likes, setLikes] = useState(initial);
  const [boom, setBoom] = useState(false);

  return (
    <button
      onClick={() => {
        setLikes((n) => n + 1);
        setBoom(true);
        setTimeout(() => setBoom(false), 220);
      }}
      className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-card-ring/60 transition ${
        boom ? "scale-105" : ""
      }`}
      aria-label="Curtir este post"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={boom ? "#ef4444" : "none"}
        stroke="#ef4444"
        strokeWidth="2"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
      <span className="font-medium">Curtir</span>
      <span className="badge">{likes}</span>
    </button>
  );
}
