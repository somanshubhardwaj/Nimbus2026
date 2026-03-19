"use client";

import Spline from "@splinetool/react-spline";
import { useRef, useEffect, useState } from "react";

export default function Model({ onLoaded }: { onLoaded?: () => void }) {
  const objRef = useRef<any>(null);
  const initialRotation = useRef<{ x: number; y: number } | null>(null);

  function onLoad(splineApp: any) {
    if (onLoaded) {
      onLoaded();
    }
    const target = splineApp.findObjectByName('Head') ||
      splineApp.findObjectByName('head') ||
      splineApp.findObjectByName('Eye') ||
      splineApp.findObjectByName('eye');

    if (target) {
      objRef.current = target;
      initialRotation.current = { x: target.rotation.x, y: target.rotation.y };
    }
  }

  useEffect(() => {
    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let pointerMoved = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!initialRotation.current) return;
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth) * 2 - 1;
      targetY = -(e.clientY / innerHeight) * 2 + 1;
      pointerMoved = true;
    };

    const animate = () => {
      if (pointerMoved && objRef.current && initialRotation.current) {
        const sensitivity = 0.5;
        objRef.current.rotation.y += (initialRotation.current.y + targetX * sensitivity - objRef.current.rotation.y) * 0.1;
        objRef.current.rotation.x += (initialRotation.current.x + targetY * sensitivity - objRef.current.rotation.x) * 0.1;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="w-[130%] md:w-full h-full absolute -left-[15%] md:left-0 top-0 z-30 pointer-events-none translate-y-[150px] md:translate-y-[180px] scale-[0.9] xl:scale-90">
      <div className="w-full h-full opacity-100">
        <Spline
          onLoad={onLoad}
          scene="https://prod.spline.design/VTslyCeVrhY5VGYO/scene.splinecode"
        />
      </div>
    </div>
  );
}
