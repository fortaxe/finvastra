"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const tailRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const tail = tailRef.current;
    
    if (!cursor || !tail) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let tailX = 0;
    let tailY = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      const targetElements = document.querySelectorAll("[data-cursor-target]");
      let mouseInTarget = false;

      targetElements.forEach((targetEle) => {
        const rect = targetEle.getBoundingClientRect();
        const triggerDistance = rect.width;

        const targetPosition = {
          left: rect.left + rect.width / 2,
          top: rect.top + rect.height / 2,
        };

        const distance = {
          adj: targetPosition.left - mouseX,
          opp: targetPosition.top - mouseY,
        };

        const hypotenuse = Math.sqrt(
          distance.adj * distance.adj + distance.opp * distance.opp
        );

        const angle = Math.atan2(distance.adj, distance.opp);

        if (hypotenuse < triggerDistance) {
          const targetWidth = rect.width;
          const targetHeight = rect.height;

          const newCursorX = targetPosition.left - (Math.sin(angle) * hypotenuse) / 6;
          const newCursorY = targetPosition.top - (Math.cos(angle) * hypotenuse) / 6;

          cursorX = newCursorX;
          cursorY = newCursorY;

          cursor.style.width = `${targetWidth}px`;
          cursor.style.height = `${targetHeight}px`;
          cursor.style.borderRadius = getComputedStyle(targetEle).borderRadius || "50%";
          cursor.style.transition = "width 0.3s, height 0.3s, border-radius 0.3s";

          tailX = newCursorX;
          tailY = newCursorY;
          tail.style.width = "5px";
          tail.style.height = "5px";
          tail.style.transition = "width 0.5s, height 0.5s";

          mouseInTarget = true;
        }
      });

      if (!mouseInTarget) {
        cursor.style.width = "28px";
        cursor.style.height = "28px";
        cursor.style.borderRadius = "50px";
        cursor.style.transition = "width 0.2s, height 0.2s, border-radius 0.2s";
        tail.style.width = "5px";
        tail.style.height = "5px";
        tail.style.transition = "width 0.5s, height 0.5s";
      }
    };

    const animate = () => {
      if (cursor && tail) {
        const cursorSpeed = 0.2;
        const tailSpeed = 0.15;

        cursorX += (mouseX - cursorX) * cursorSpeed;
        cursorY += (mouseY - cursorY) * cursorSpeed;

        tailX += (cursorX - tailX) * tailSpeed;
        tailY += (cursorY - tailY) * tailSpeed;

        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;

        tail.style.left = `${tailX}px`;
        tail.style.top = `${tailY}px`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      <div
        ref={tailRef}
        className="custom-cursor-tail"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
    </>
  );
}
