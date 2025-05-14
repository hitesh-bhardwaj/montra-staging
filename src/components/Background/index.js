"use client"
import React, { useRef, useEffect } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef(null);

  // 2D canvas + trail
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // raw & smoothed mouse
    let mouse = { x: undefined, y: undefined };
    let smoothedMouse = { x: undefined, y: undefined };
    let mouseHistory = [];
    let isMouseActive = false;
    let inactivityTimer = null;
    const inactivityTimeout = 4000; // ms

    // idle wander
    let idle = false;
    let idlePhase = 'waiting'; // 'waiting' or 'moving'
    let idleWaitTime = 0;
    const idleMinDelay = 2000;   // ms
    const idleMaxDelay = 4000;   // ms
    const idleLerpFactor = 0.02; // faster than before
    let idleTarget = { x: 0, y: 0 };

    // trail params
    const maxTrailLength = 30;
    const trailBaseWidth = 140;
    const trailBlur = 70;
    const mouseLerpFactor = 0.05;

    // dot grid
    const dotConfig = {
      spacing: 40,
      radius: 1,
      maxRadius: 2,
      interactionRadius: 200,
      baseColor: 'rgba(100, 100, 110, 0.2)',
      activeColor: 'rgba(255, 255, 255, 1)',
    };
    const canvasClearStyle = 'rgba(255, 255, 255, 1)';
    let dots = [];

    function lerp(a, b, t) {
      return a + (b - a) * Math.max(0, Math.min(1, t));
    }
    function parseRgba(str) {
      const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      return m
        ? { r: +m[1], g: +m[2], b: +m[3], a: m[4] ? +m[4] : 1 }
        : { r: 0, g: 0, b: 0, a: 1 };
    }

    class Dot {
      constructor(x, y) {
        this.x = x; this.y = y;
        this.radius = dotConfig.radius;
        this.baseColor = parseRgba(dotConfig.baseColor);
        this.activeColor = parseRgba(dotConfig.activeColor);
        this.currentColor = { ...this.baseColor };
        this.targetColor = { ...this.baseColor };
        this.holdTime = 0;         // ms
        this.holdDuration = 1000;  // 1s
        this.radiusLerp = 0.5;
        this.colorLerp = 0.8;
      }
      update(delta, inZone) {
        if (inZone) this.holdTime = this.holdDuration;
        if (this.holdTime > 0) this.holdTime = Math.max(0, this.holdTime - delta);
        const active = this.holdTime > 0;
        this.radius = lerp(
          this.radius,
          active ? dotConfig.maxRadius : dotConfig.radius,
          this.radiusLerp
        );
        this.targetColor = active ? this.activeColor : this.baseColor;
        ['r', 'g', 'b', 'a'].forEach(ch => {
          this.currentColor[ch] = lerp(
            this.currentColor[ch],
            this.targetColor[ch],
            this.colorLerp
          );
        });
        ctx.beginPath();
        ctx.fillStyle = `rgba(${Math.round(this.currentColor.r)},${Math.round(this.currentColor.g)},${Math.round(this.currentColor.b)},${this.currentColor.a.toFixed(2)})`;
        ctx.arc(this.x, this.y, Math.max(this.radius, 0.5), 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      dots = [];
      const cols = Math.floor(canvas.width / dotConfig.spacing) + 2;
      const rows = Math.floor(canvas.height / dotConfig.spacing) + 2;
      const offX = (canvas.width - (cols - 2) * dotConfig.spacing) / 2;
      const offY = (canvas.height - (rows - 2) * dotConfig.spacing) / 2;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push(new Dot(
            offX + i * dotConfig.spacing,
            offY + j * dotConfig.spacing
          ));
        }
      }
    }

    function randDelay() {
      return idleMinDelay + Math.random() * (idleMaxDelay - idleMinDelay);
    }

    let lastTime = performance.now();
    function canvasLoop(now = performance.now()) {
      const delta = now - lastTime;
      lastTime = now;

      // real mouse
      if (!idle && mouse.x != null) {
        smoothedMouse.x = smoothedMouse.x == null
          ? mouse.x
          : lerp(smoothedMouse.x, mouse.x, mouseLerpFactor);
        smoothedMouse.y = smoothedMouse.y == null
          ? mouse.y
          : lerp(smoothedMouse.y, mouse.y, mouseLerpFactor);
        mouseHistory.push({ x: smoothedMouse.x, y: smoothedMouse.y });
        if (mouseHistory.length > maxTrailLength) mouseHistory.shift();
      }

      // idle
      if (idle) {
        if (idlePhase === 'waiting') {
          idleWaitTime -= delta;
          if (idleWaitTime <= 0) {
            idlePhase = 'moving';
            idleTarget = {
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height
            };
          }
        }
        if (idlePhase === 'moving') {
          if (smoothedMouse.x == null) {
            smoothedMouse.x = canvas.width / 2;
            smoothedMouse.y = canvas.height / 2;
          }
          smoothedMouse.x = lerp(smoothedMouse.x, idleTarget.x, idleLerpFactor);
          smoothedMouse.y = lerp(smoothedMouse.y, idleTarget.y, idleLerpFactor);
          mouseHistory.push({ x: smoothedMouse.x, y: smoothedMouse.y });
          if (mouseHistory.length > maxTrailLength) mouseHistory.shift();
          if (Math.hypot(smoothedMouse.x - idleTarget.x, smoothedMouse.y - idleTarget.y) < 5) {
            idlePhase = 'waiting';
            idleWaitTime = randDelay();
          }
        }
      }

      // clear
      ctx.fillStyle = canvasClearStyle;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // draw blur trail
      if (mouseHistory.length > 1) {
        ctx.filter = `blur(${trailBlur}px)`;
        ctx.beginPath();
        ctx.moveTo(mouseHistory[0].x, mouseHistory[0].y);
        for (let i = 1; i < mouseHistory.length; i++) {
          const age = i / (mouseHistory.length - 1);
          const alpha = idle
            ? (0.4 * age)         // stronger when idle
            : (0.4 * age);
          ctx.lineWidth = Math.max(1, trailBaseWidth * age);
          ctx.strokeStyle = `rgba(67,202,255,${alpha.toFixed(2)})`;
          ctx.lineTo(mouseHistory[i].x, mouseHistory[i].y);
        }
        ctx.stroke();
        ctx.filter = 'none';
      }

      // fade only when truly off
      if (!isMouseActive && !idle && mouseHistory.length > 0) {
        mouseHistory.shift();
      }

      // dots
      dots.forEach(dot => {
        const dx = (smoothedMouse.x || -9999) - dot.x;
        const dy = (smoothedMouse.y || -9999) - dot.y;
        const inZone = Math.hypot(dx, dy) < dotConfig.interactionRadius;
        dot.update(delta, inZone);
      });

      requestAnimationFrame(canvasLoop);
    }

    function handleMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isMouseActive = true;
      idle = false;
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        isMouseActive = false;
        idle = true;
        idlePhase = 'waiting';
        idleWaitTime = randDelay();
      }, inactivityTimeout);
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', initCanvas);

    initCanvas();
    canvasLoop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', initCanvas);
      clearTimeout(inactivityTimer);
    };
  }, []);

  return (
    <>
      <div id='canvas-18971' className='max-sm:hidden max-md:hidden' style={{ position: 'sticky', top: 0, left: 0, zIndex: 0, overflow: 'hidden', marginLeft: 'auto', marginRight: 'auto', height: '100vh'}}>
        <canvas
          ref={canvasRef}
        />
      </div>
    </>
  );
}
