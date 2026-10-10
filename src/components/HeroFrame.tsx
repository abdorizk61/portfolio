"use client";

import React from "react";
import { CircularHUD } from "./CircularHUD";

interface HeroFrameProps {
  src?: string;
  alt?: string;
  size?: number;
}

export function HeroFrame({
  src = "/images/avatar.jpg",
  alt = "Abdelrahman Rizk",
  size = 220,
}: HeroFrameProps) {
  return <CircularHUD src={src} alt={alt} size={size} />;
}
