'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function VantaNet() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const tryInit = () => {
      if (!vantaEffect.current && window.VANTA && window.THREE && vantaRef.current) {
        vantaEffect.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          points: 13.0,
          maxDistance: 15.0,
          spacing: 13.0,
          color: 0xb8c4d4, // 主線色（柔藍灰線）
          backgroundColor: 0xf5f5f5, // 對應你的主背景
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
        src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.net.min.js"
        strategy="afterInteractive"
      />

      {/* 背景容器 */}
      <div ref={vantaRef} className="absolute inset-0 -z-20 h-dvh w-dvw" />
    </>
  );
}
