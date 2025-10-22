'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import { useTheme } from 'next-themes';

export default function VantaTrunk() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const tryInit = () => {
      if (!vantaEffect.current && window.VANTA && window.THREE && vantaRef.current) {
        vantaEffect.current = window.VANTA.TRUNK({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: theme === 'light' ? 0x95495e : 0xffffff,
          backgroundColor: 0xf5f5f5,
          spacing: 1,
          chaos: 1,
        });
      }
    };

    // 嘗試延遲初始化直到 THREE 載入
    const interval = setInterval(() => {
      if (window.THREE && window.VANTA) {
        tryInit();
        clearInterval(interval);
      }
    }, 200);

    return () => {
      clearInterval(interval);
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [theme]);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.trunk.min.js"
        strategy="afterInteractive"
      />

      {/* 背景容器 */}
      <div ref={vantaRef} className="absolute -z-10 h-dvh w-dvw" />
    </>
  );
}
