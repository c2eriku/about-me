'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function VantaBird() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const tryInit = () => {
      if (!vantaEffect.current && window.VANTA && window.THREE && vantaRef.current) {
        vantaEffect.current = window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          speedLimit: 3.0,
          quantity: 3.0,
          colorMode: 'varianceGradient',
          separation: 90.0,
          alignment: 10.0,
          scale: 1.5,
          scaleMobile: 1.0,
          backgroundAlpha: 0.0,
          // color1: 0x111111,
          // color2: 0xe0f0ff,
          color1: 0xfbbf24,
          color2: 0x60a5fa,
          // color1: 0xff8c8c,
          // color2: 0xffffff,
          birdSize: 1,
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
  }, []);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.birds.min.js"
        strategy="afterInteractive"
      />

      {/* 背景容器 */}
      <div ref={vantaRef} className="absolute inset-0 -z-20 h-dvh w-dvw" />
    </>
  );
}
