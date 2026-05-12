"use client";

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export function Tooltip({
  content,
  children,
  position = 'top',
  className
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateCoords = () => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      setCoords({
        top: rect.top,
        left: rect.left,
      });
    }
  };

  useEffect(() => {
    if (isVisible) {
      updateCoords();
      window.addEventListener('scroll', updateCoords);
      window.addEventListener('resize', updateCoords);
    }
    return () => {
      window.removeEventListener('scroll', updateCoords);
      window.removeEventListener('resize', updateCoords);
    };
  }, [isVisible]);

  const getPositionStyles = () => {
    if (!targetRef.current) return {};
    const rect = targetRef.current.getBoundingClientRect();
    const space = 12; // Distance from target

    switch (position) {
      case 'right':
        return {
          top: coords.top + rect.height / 2,
          left: coords.left + rect.width + space,
          transform: 'translateY(-50%)',
        };
      case 'left':
        return {
          top: coords.top + rect.height / 2,
          left: coords.left - space,
          transform: 'translate(calc(-100% - 0px), -50%)',
        };
      case 'bottom':
        return {
          top: coords.top + rect.height + space,
          left: coords.left + rect.width / 2,
          transform: 'translateX(-50%)',
        };
      default: // top
        return {
          top: coords.top - space,
          left: coords.left + rect.width / 2,
          transform: 'translate(-50%, -100%)',
        };
    }
  };

  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 border-t-primary-500 border-l-transparent border-r-transparent border-b-transparent',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-primary-500 border-l-transparent border-r-transparent border-t-transparent',
    left: 'left-full top-1/2 -translate-y-1/2 border-l-primary-500 border-t-transparent border-b-transparent border-r-transparent',
    right: 'right-full top-1/2 -translate-y-1/2 border-r-primary-500 border-t-transparent border-b-transparent border-l-transparent',
  };

  return (
    <div
      ref={targetRef}
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}

      {isVisible && mounted && createPortal(
        <div
          style={getPositionStyles()}
          className="fixed z-[9999] px-4 py-2 text-[13px] font-semibold text-white bg-primary-500 rounded-[14px] shadow-[0px_10px_30px_rgba(0,0,0,0.25)] whitespace-nowrap animate-in fade-in zoom-in-95 duration-200 pointer-events-none"
          role="tooltip"
        >
          {content}
          
          {/* Arrow */}
          <div
            className={cn(
              "absolute border-[5px]",
              arrowClasses[position]
            )}
          />
        </div>,
        document.body
      )}
    </div>
  );
}
