"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CircularHUDProps {
  src?: string;
  alt?: string;
  size?: number; // Size of the avatar circle in px (defaults to 220)
}

export function CircularHUD({
  src = "/images/avatar.jpg",
  alt = "Abdelrahman Rizk",
  size = 220,
}: CircularHUDProps) {
  const [hovered, setHovered] = useState(false);

  // Neural colors: Electric Cyan with Emerald accents
  const cyan = "#06b6d4";
  const cyanGlow = hovered ? "rgba(6, 182, 212, 0.65)" : "rgba(6, 182, 212, 0.35)";

  // Outer HUD dimensions
  const hudPadding = 50;
  const totalSize = size + hudPadding * 2;
  const center = totalSize / 2;
  const avatarRadius = size / 2;

  // Ring radii
  const rOuter = avatarRadius + 38;
  const rMid = avatarRadius + 22;
  const rInner = avatarRadius + 8;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        width: totalSize,
        height: totalSize,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
      }}
    >
      <style jsx>{`
        @keyframes hudSpinClockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes hudSpinCounter {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes radarSweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulseTelemetry {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* ── Concentric Rotating Radar SVG Rings ── */}
      <svg
        width={totalSize}
        height={totalSize}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          overflow: "visible",
        }}
      >
        <title>Circular HUD Neural Rings</title>
        <defs>
          <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Crosshair marks */}
        <line
          x1={center}
          y1={center - rOuter - 8}
          x2={center}
          y2={center - rOuter + 6}
          stroke={cyan}
          strokeWidth="2"
          opacity={hovered ? 0.9 : 0.6}
        />
        <line
          x1={center}
          y1={center + rOuter - 6}
          x2={center}
          y2={center + rOuter + 8}
          stroke={cyan}
          strokeWidth="2"
          opacity={hovered ? 0.9 : 0.6}
        />
        <line
          x1={center - rOuter - 8}
          y1={center}
          x2={center - rOuter + 6}
          y2={center}
          stroke={cyan}
          strokeWidth="2"
          opacity={hovered ? 0.9 : 0.6}
        />
        <line
          x1={center + rOuter - 6}
          y1={center}
          x2={center + rOuter + 8}
          y2={center}
          stroke={cyan}
          strokeWidth="2"
          opacity={hovered ? 0.9 : 0.6}
        />

        {/* Outer Ring */}
        <g
          style={{
            transformOrigin: `${center}px ${center}px`,
            animation: "hudSpinClockwise 40s linear infinite",
          }}
        >
          <circle
            cx={center}
            cy={center}
            r={rOuter}
            fill="none"
            stroke={cyan}
            strokeWidth="1.5"
            strokeDasharray="14 10 3 10"
            opacity={hovered ? 0.75 : 0.45}
            filter="url(#neonGlow)"
          />
          <circle
            cx={center}
            cy={center}
            r={rOuter + 4}
            fill="none"
            stroke={cyan}
            strokeWidth="1"
            strokeDasharray="2 30"
            opacity={0.45}
          />
        </g>

        {/* Mid Ring */}
        <g
          style={{
            transformOrigin: `${center}px ${center}px`,
            animation: "hudSpinCounter 28s linear infinite",
          }}
        >
          <circle
            cx={center}
            cy={center}
            r={rMid}
            fill="none"
            stroke={cyan}
            strokeWidth="1.5"
            strokeDasharray="60 20 20 20"
            opacity={hovered ? 0.8 : 0.5}
            filter="url(#neonGlow)"
          />
          <rect
            x={center + rMid - 3}
            y={center - 3}
            width="6"
            height="6"
            fill="#10b981"
            transform={`rotate(45, ${center + rMid}, ${center})`}
            opacity={0.85}
          />
          <rect
            x={center - rMid - 3}
            y={center - 3}
            width="6"
            height="6"
            fill="#10b981"
            transform={`rotate(45, ${center - rMid}, ${center})`}
            opacity={0.85}
          />
        </g>

        {/* Inner Ring */}
        <circle
          cx={center}
          cy={center}
          r={rInner}
          fill="none"
          stroke={cyan}
          strokeWidth="1"
          strokeDasharray="8 6"
          opacity={hovered ? 0.7 : 0.35}
        />
      </svg>

      {/* Sweeping Radar Beam */}
      <div
        style={{
          position: "absolute",
          width: rOuter * 2,
          height: rOuter * 2,
          borderRadius: "50%",
          pointerEvents: "none",
          transformOrigin: "center center",
          animation: "radarSweep 5s linear infinite",
          background: `conic-gradient(from 0deg, transparent 0deg, transparent 310deg, rgba(6, 182, 212, ${
            hovered ? "0.2" : "0.1"
          }) 350deg, rgba(6, 182, 212, ${hovered ? "0.45" : "0.3"}) 360deg)`,
        }}
      />

      {/* Circular Profile Avatar Container with Next.js Image */}
      <div
        style={{
          position: "relative",
          width: size,
          height: size,
          borderRadius: "50%",
          overflow: "hidden",
          border: `2px solid ${cyan}`,
          boxShadow: `0 0 25px ${cyanGlow}, inset 0 0 20px rgba(6, 182, 212, 0.25)`,
          background: "#09090b",
          zIndex: 2,
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: hovered ? "scale(1.02)" : "scale(1)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          priority
          sizes={`${size}px`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.4s ease, filter 0.4s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            filter: hovered ? "contrast(1.05) brightness(1.05)" : "contrast(1) brightness(0.98)",
          }}
        />

        {/* Scanline overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.25) 2px, rgba(0, 0, 0, 0.25) 4px)",
            pointerEvents: "none",
            opacity: 0.5,
          }}
        />
      </div>

      {/* Telemetry labels */}
      <div
        style={{
          position: "absolute",
          bottom: 2,
          right: 14,
          fontFamily: "var(--font-code, monospace)",
          fontSize: "10px",
          color: "#06b6d4",
          letterSpacing: "0.12em",
          background: "rgba(9, 9, 11, 0.85)",
          padding: "2px 8px",
          border: "1px solid rgba(6, 182, 212, 0.4)",
          borderRadius: "4px",
          zIndex: 3,
          boxShadow: "0 0 8px rgba(6, 182, 212, 0.3)",
          animation: "pulseTelemetry 3s ease-in-out infinite",
        }}
      >
        {"NEURAL: ONLINE // 200 OK"}
      </div>

      <div
        style={{
          position: "absolute",
          top: 6,
          left: 12,
          fontFamily: "var(--font-code, monospace)",
          fontSize: "9px",
          color: "#10b981",
          letterSpacing: "0.1em",
          background: "rgba(9, 9, 11, 0.85)",
          padding: "2px 6px",
          border: "1px solid rgba(16, 185, 129, 0.35)",
          borderRadius: "4px",
          zIndex: 3,
        }}
      >
        CORE: ACTIVE
      </div>
    </div>
  );
}
