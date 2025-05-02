"use client"
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass';

export default function InteractiveBackground() {
  const canvasRef = useRef(null);
  const threeContainerRef = useRef(null);

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
    const maxTrailLength = 60;
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
        ? { r:+m[1], g:+m[2], b:+m[3], a: m[4]?+m[4]:1 }
        : { r:0, g:0, b:0, a:1 };
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
        ['r','g','b','a'].forEach(ch => {
          this.currentColor[ch] = lerp(
            this.currentColor[ch],
            this.targetColor[ch],
            this.colorLerp
          );
        });
        ctx.beginPath();
        ctx.fillStyle = `rgba(${Math.round(this.currentColor.r)},${Math.round(this.currentColor.g)},${Math.round(this.currentColor.b)},${this.currentColor.a.toFixed(2)})`;
        ctx.arc(this.x, this.y, Math.max(this.radius, 0.5), 0, Math.PI*2);
        ctx.fill();
      }
    }

    function initCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      dots = [];
      const cols = Math.floor(canvas.width/dotConfig.spacing)+2;
      const rows = Math.floor(canvas.height/dotConfig.spacing)+2;
      const offX = (canvas.width - (cols-2)*dotConfig.spacing)/2;
      const offY = (canvas.height - (rows-2)*dotConfig.spacing)/2;
      for (let i=0; i<cols; i++) {
        for (let j=0; j<rows; j++) {
          dots.push(new Dot(
            offX + i*dotConfig.spacing,
            offY + j*dotConfig.spacing
          ));
        }
      }
    }

    function randDelay() {
      return idleMinDelay + Math.random()*(idleMaxDelay-idleMinDelay);
    }

    let lastTime = performance.now();
    function canvasLoop(now = performance.now()) {
      const delta = now - lastTime;
      lastTime = now;

      // real mouse
      if (!idle && mouse.x != null) {
        smoothedMouse.x = smoothedMouse.x==null
          ? mouse.x
          : lerp(smoothedMouse.x, mouse.x, mouseLerpFactor);
        smoothedMouse.y = smoothedMouse.y==null
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
              x: Math.random()*canvas.width,
              y: Math.random()*canvas.height
            };
          }
        }
        if (idlePhase === 'moving') {
          if (smoothedMouse.x == null) {
            smoothedMouse.x = canvas.width/2;
            smoothedMouse.y = canvas.height/2;
          }
          smoothedMouse.x = lerp(smoothedMouse.x, idleTarget.x, idleLerpFactor);
          smoothedMouse.y = lerp(smoothedMouse.y, idleTarget.y, idleLerpFactor);
          mouseHistory.push({ x: smoothedMouse.x, y: smoothedMouse.y });
          if (mouseHistory.length > maxTrailLength) mouseHistory.shift();
          if (Math.hypot(smoothedMouse.x-idleTarget.x, smoothedMouse.y-idleTarget.y) < 5) {
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
        for (let i=1; i<mouseHistory.length; i++) {
          const age = i/(mouseHistory.length-1);
          const alpha = idle
            ? (0.6 * age)         // stronger when idle
            : (0.6 * age);
          ctx.lineWidth = Math.max(1, trailBaseWidth * age);
          ctx.strokeStyle = `rgba(67,202,255,${alpha.toFixed(2)})`;
          ctx.lineTo(mouseHistory[i].x, mouseHistory[i].y);
        }
        ctx.stroke();
        ctx.filter = 'none';
      }

      // fade only when truly off
      if (!isMouseActive && !idle && mouseHistory.length>0) {
        mouseHistory.shift();
      }

      // dots
      dots.forEach(dot => {
        const dx = (smoothedMouse.x||-9999) - dot.x;
        const dy = (smoothedMouse.y||-9999) - dot.y;
        const inZone = Math.hypot(dx,dy) < dotConfig.interactionRadius;
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

  // Three.js animated points + afterimage (unchanged)
  useEffect(() => {
    const container = threeContainerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(0,0,8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const afterimage = new AfterimagePass();
    afterimage.uniforms['damp'].value = 0.94;
    composer.addPass(afterimage);

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(10,10) },
      uSize: { value: 1.0 }
    };

    const N = 200, sep = 0.05;
    const pos = new Float32Array(N*N*3);
    let idx = 0;
    for (let x=0; x<N; x++) {
      for (let y=0; y<N; y++) {
        pos[idx++] = (x - N/2)*sep;
        pos[idx++] = (y - N/2)*sep;
        pos[idx++] = 0;
      }
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(pos,3));

    const mat = new THREE.ShaderMaterial({
      uniforms, transparent:true,
      vertexShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uSize;
        varying float vDist;
        float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
        float noise(in vec2 p){
          vec2 i=floor(p), f=fract(p);
          float a=hash(i), b=hash(i+vec2(1,0));
          float c=hash(i+vec2(0,1)), d=hash(i+vec2(1,1));
          vec2 u=f*f*(3.0-2.0*f);
          return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y;
        }
        void main(){
          vec3 p=position;
          float n=noise(p.xy*2.0+uTime*0.1);
          p.z+=(n-0.5)*0.5;
          vec4 mv=modelViewMatrix*vec4(p,1.0);
          gl_Position=projectionMatrix*mv;
          gl_PointSize=uSize*(200.0/-mv.z);
          vec2 ndc=gl_Position.xy/gl_Position.w;
          vDist=distance(ndc,uMouse);
        }
      `,
      fragmentShader: `
        varying float vDist;
        void main(){
          if(length(gl_PointCoord-0.5)>0.5) discard;
          float h=smoothstep(0.35,0.0,vDist);
          vec3 gray=vec3(0.6), col=mix(gray,vec3(1.0),h);
          float a=mix(0.3,1.0,h);
          gl_FragColor=vec4(col,a);
        }
      `
    });

    const points = new THREE.Points(geom, mat);
    scene.add(points);

    function animate(time){
      uniforms.uTime.value = time*0.001;
      composer.render();
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    const onPointerMove = e => {
      uniforms.uMouse.value.x = (e.clientX/window.innerWidth)*2 - 1;
      uniforms.uMouse.value.y = -(e.clientY/window.innerHeight)*2 + 1;
    };
    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth/window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ position:'fixed', top:0, left:0, zIndex:-5 }}
      />
      <div
        ref={threeContainerRef}
        style={{ position:'fixed', top:0, left:0, width:'100%', height:'100%', zIndex:-6 }}
      />
    </>
  );
}
