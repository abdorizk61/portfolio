"use client";

import React, { useEffect, useRef } from "react";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fontSize = 14;
    let columns = Math.floor(width / fontSize);

    // Array of y-coordinates for falling drops in each column
    let drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      // Random starting positions so rain is dispersed immediately
      drops[i] = Math.floor(Math.random() * -50);
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -50);
      }
    };

    window.addEventListener("resize", handleResize);

    // Frame rate limiting: 24 fps for subtle cinematic feel and minimal CPU usage
    const fps = 24;
    const interval = 1000 / fps;
    let lastTime = 0;

    let isDocumentVisible = !document.hidden;
    const handleVisibilityChange = () => {
      isDocumentVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const render = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(render);

      if (!isDocumentVisible) return;

      const delta = currentTime - lastTime;
      if (delta < interval) return;
      lastTime = currentTime - (delta % interval);

      // Faint fade trail: Dark pure black with slight opacity
      // This leaves a gentle, subtle trailing fade
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "Geist Mono", "Courier New", monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Exclusively falling 0s and 1s as requested
        const char = Math.random() > 0.5 ? "1" : "0";
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Draw only if on screen
        if (y > 0 && y < height + fontSize) {
          // Subtle, faint dark green for regular stream
          // Occasional faint brighter head for the leading stream
          const isLead = Math.random() < 0.05;

          if (isLead) {
            ctx.fillStyle = "rgba(0, 255, 65, 0.35)"; // subtle Matrix green highlight
          } else {
            // Very dark subtle green (faint background ambiance)
            ctx.fillStyle = "rgba(0, 70, 20, 0.28)";
          }

          ctx.fillText(char, x, y);
        }

        // Reset column when it goes past bottom or with random variance
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden={true}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.85,
      }}
    />
  );
}
