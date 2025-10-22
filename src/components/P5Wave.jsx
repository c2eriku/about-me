'use client';

import { useEffect, useRef } from 'react';

export default function P5Waves() {
  const p5Ref = useRef(null);
  const p5Effect = useRef(null);
  let instance;

  useEffect(() => {
    function tryInit() {
      console.log('tryinit');
      if (window.p5) {
        const p5 = window.p5;

        const sketch = (p5) => {
          let points = []; // { x: number; y: number; z: number }[]
          const w = 2000;
          const h = 1200;
          // const scl = 30;

          p5.setup = function () {
            p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
            p5.noStroke();

            points = [];
            const total = 500; // 總點數
            for (let i = 0; i < total; i++) {
              const x = p5.randomGaussian(w / 2, w / 8);
              const y = p5.randomGaussian(h / 2, h / 8);
              points.push({ x, y, z: 0 });
            }
          };

          p5.draw = function () {
            p5.clear(); // transparent background
            p5.background(0, 0); // 保持透明

            // 視角設定
            p5.rotateX(p5.radians(260));
            p5.rotateY(p5.radians(200));
            p5.rotateZ(p5.radians(0));
            p5.translate(-w / 2, -h / 2);

            const t = p5.frameCount * 0.008;

            for (const pt of points) {
              const waveX = p5.sin(pt.x * 0.008 + t);
              const waveY = p5.sin(pt.y * 0.005 - t * 0.8);
              const sShape = waveX * waveY;
              const breath = p5.map(p5.sin(t * 0.4), -1, 1, 0.8, 1.2);
              const z = sShape * 100 * breath;

              const alpha = p5.map(z, -120, 120, 40, 255);

              p5.push();
              p5.translate(pt.x, pt.y, z);

              p5.rotateZ(p5.radians(0));
              p5.rotateY(p5.radians(-200)); // 負的
              p5.rotateX(p5.radians(-260)); // 負的

              p5.fill(0, alpha);
              p5.circle(0, 0, 2.5);
              p5.pop();
            }

            // p5.stroke(112, 112, 112);
            // // 原點在畫布中心
            // p5.orbitControl(); // ✅ 允許你用滑鼠拖轉觀察 3D

            // // 畫出 XYZ 軸
            // p5.strokeWeight(3);

            // // X 軸：紅色（右為正）
            // p5.stroke(255, 0, 0);
            // p5.line(0, 0, 0, 200, 0, 0);

            // // Y 軸：綠色（下為正）
            // p5.stroke(0, 255, 0);
            // p5.line(0, 0, 0, 0, 200, 0);

            // // Z 軸：藍色（出螢幕為正）
            // p5.stroke(0, 0, 255);
            // p5.line(0, 0, 0, 0, 0, 200);

            // p5.rotateX(p5.radians(260));
            // p5.rotateY(p5.radians(200));
            // p5.rotateZ(p5.radians(0));
            // p5.translate(-w / 2, -h / 2);
          };

          p5.windowResized = function () {
            p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
          };
        };
        instance = new p5(sketch, p5Ref.current);
      }
    }

    const interval = setInterval(() => {
      console.log('interval');
      tryInit();
      if (instance) {
        clearInterval(interval);
      }
    }, 200);

    return () => {
      clearInterval(interval);
      if (instance) {
        instance.remove();
      }
    };
  }, []);

  return <div ref={p5Ref} className="pointer-events-none fixed inset-0 -z-20"></div>;
}
