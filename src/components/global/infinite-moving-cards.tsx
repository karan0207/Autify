/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    href: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [duplicatedItems, setDuplicatedItems] = useState(items);
  const [start, setStart] = useState(false);

  useEffect(() => {
    // Duplicate the items for animation
    const duplicatedItemsList = [...items, ...items];
    setDuplicatedItems(duplicatedItemsList);
    setStart(true);
  }, [items]);

  const getAnimationDirection = () => {
    return direction === "left" ? "forwards" : "reverse";
  };

  const getAnimationDuration = () => {
    switch (speed) {
      case "fast":
        return "20s";
      case "normal":
        return "40s";
      case "slow":
        return "80s";
      default:
        return "40s";
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] duration-50 transition-all",
        className
      )}
      style={{
        "--animation-direction": getAnimationDirection(),
        "--animation-duration": getAnimationDuration(),
      } as React.CSSProperties} // Type assertion to allow custom CSS properties
    >
      <ul
        className={cn(
          "flex min-w-full shrink-0 gap-10 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {duplicatedItems.map((item, idx) => (
          <Image
            width={170}
            height={1}
            src={item.href}
            alt={item.href}
            className="relative rounded-2xl object-contain opacity-50 w-auto h-auto"
            key={`${item.href}-${idx}`} // Ensure unique key for each item
          />
        ))}
      </ul>
    </div>
  );
};
