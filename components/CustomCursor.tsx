"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnterLink = () => {
      if (dotRef.current) {
        dotRef.current.style.transform =
          "translate(-50%, -50%) scale(2)";
        dotRef.current.style.background = "var(--accent)";
        dotRef.current.style.opacity = "0.6";
      }
      if (ringRef.current) {
        ringRef.current.style.width = "48px";
        ringRef.current.style.height = "48px";
        ringRef.current.style.borderColor = "rgba(74,222,128,0.6)";
      }
    };

    const onLeaveLink = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = "translate(-50%, -50%) scale(1)";
        dotRef.current.style.background = "var(--accent)";
        dotRef.current.style.opacity = "1";
      }
      if (ringRef.current) {
        ringRef.current.style.width = "30px";
        ringRef.current.style.height = "30px";
        ringRef.current.style.borderColor = "rgba(74,222,128,0.35)";
      }
    };

    const addHoverListeners = () => {
      document
        .querySelectorAll("a, button, [role='button']")
        .forEach((el) => {
          el.addEventListener("mouseenter", onEnterLink);
          el.addEventListener("mouseleave", onLeaveLink);
        });
    };

    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.left = `${pos.current.x}px`;
        dotRef.current.style.top = `${pos.current.y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    addHoverListeners();
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ transition: "transform 0.15s ease, opacity 0.15s ease" }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ transition: "width 0.25s ease, height 0.25s ease, border-color 0.25s ease" }}
        aria-hidden="true"
      />
    </>
  );
}
