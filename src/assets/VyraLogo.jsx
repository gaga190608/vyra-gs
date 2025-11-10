import React from "react";

export default function VyraLogo({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo VYRA"
    >
      <defs>
        <linearGradient id="vyra-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8b5cf6" />
          <stop offset="0.5" stopColor="#f472b6" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#vyra-g)" />
      <path
        d="M16 40 L28 22 L36 34 L44 22 L52 40"
        stroke="#0b1020"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}