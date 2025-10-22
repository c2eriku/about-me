'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function VantaFog() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const tryInit = () => {
      if (!vantaEffect.current && window.VANTA && window.THREE && vantaRef.current) {
        vantaEffect.current = window.VANTA.FOG({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          blurFactor: 0.35,
          highlightColor: 0xffffff, // 霧氣的亮部（白霧感）
          midtoneColor: 0xbfc8d3, // 中間霧色（柔藍灰）
          lowlightColor: 0x9aa2ae, // 暗部霧色（深灰藍）
          baseColor: 0xffffff,
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
        src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.fog.min.js"
        strategy="afterInteractive"
      />

      {/* 背景容器 */}
      <div ref={vantaRef} className="absolute inset-0 -z-20 h-dvh w-dvw" />
    </>
  );
}
