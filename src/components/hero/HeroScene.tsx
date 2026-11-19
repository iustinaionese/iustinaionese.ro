"use client";

 

/* eslint-disable react-hooks/immutability -- WebGL animation component: it
   mutates typed-array geometry buffers imperatively every frame inside
   useFrame (the canonical react-three-fiber pattern). The React-Compiler
   rule can't model per-frame canvas buffer mutation. */

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Buffers {
  positions: Float32Array;
  colors: Float32Array;
  angle: Float32Array;
  speed: Float32Array;
  prog: Float32Array;
  rnd: Float32Array;
}

const Y_TOP = 2.3;
const Y_NECK = -1.5;
const Y_BOTTOM = -2.8;
const R_TOP = 2.7;
const R_NECK = 0.05;
const SWIRL = 7.0;
const P_MAX = 1.34;

/**
 * "From click to paying client" — a 3D funnel particle system.
 * Many particles enter wide at the top (visitors), spiral inward and converge
 * into a single focused output stream at the bottom (the paying client).
 */
function Funnel({ isMobile }: { isMobile: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);
  const seeded = useRef(false);

  const COUNT = isMobile ? 800 : 2600;

  // Stable buffers (pure allocation). Contents are mutated per frame in
  // useFrame — see the file-level eslint note above.
  const buf = useMemo<Buffers>(
    () => ({
      positions: new Float32Array(COUNT * 3),
      colors: new Float32Array(COUNT * 3),
      angle: new Float32Array(COUNT),
      speed: new Float32Array(COUNT),
      prog: new Float32Array(COUNT),
      rnd: new Float32Array(COUNT),
    }),
    [COUNT],
  );

  useFrame((state, delta) => {
    const pts = pointsRef.current;
    const grp = groupRef.current;
    if (!pts || !grp) return;

    // seed once, off-render (Math.random isn't render-pure)
    if (!seeded.current) {
      for (let i = 0; i < COUNT; i++) {
        buf.angle[i] = Math.random() * Math.PI * 2;
        buf.speed[i] = 0.1 + Math.random() * 0.12;
        buf.prog[i] = Math.random() * P_MAX; // spread along the funnel
        buf.rnd[i] = Math.random();
      }
      seeded.current = true;
    }

    const d = Math.min(delta, 0.05); // clamp to avoid jumps after a pause

    for (let i = 0; i < COUNT; i++) {
      buf.prog[i] += buf.speed[i] * d;
      if (buf.prog[i] > P_MAX) {
        buf.prog[i] -= P_MAX;
        buf.angle[i] = Math.random() * Math.PI * 2;
        buf.rnd[i] = Math.random();
      }
      const p = buf.prog[i];
      const ang = buf.angle[i] + p * SWIRL;
      let rad: number;
      let yy: number;
      if (p <= 1) {
        rad = R_NECK + (R_TOP - R_NECK) * Math.pow(1 - p, 1.8);
        yy = Y_TOP + (Y_NECK - Y_TOP) * p;
      } else {
        const k = (p - 1) / (P_MAX - 1);
        // continuous with the neck radius (no random jump) so the output
        // stream flows out of the funnel without a visible seam
        rad = R_NECK;
        yy = Y_NECK + (Y_BOTTOM - Y_NECK) * k;
      }
      const j = (buf.rnd[i] - 0.5) * 0.05;
      buf.positions[i * 3] = Math.cos(ang) * rad + j;
      buf.positions[i * 3 + 1] = yy;
      buf.positions[i * 3 + 2] = Math.sin(ang) * rad;

      // gold (faint, top) -> accent coral (neck). Dim the dense output beam so
      // it reads as distinct points instead of a blown-out additive smear.
      const t = p < 1 ? p : 1;
      const fade = p > 1 ? 1 - ((p - 1) / (P_MAX - 1)) * 0.7 : 1;
      const b = (0.3 + 0.45 * t) * fade;
      buf.colors[i * 3] = (0.894 + 0.106 * t) * b;
      buf.colors[i * 3 + 1] = (0.725 - 0.305 * t) * b;
      buf.colors[i * 3 + 2] = (0.455 - 0.215 * t) * b;
    }

    pts.geometry.attributes.position.needsUpdate = true;
    pts.geometry.attributes.color.needsUpdate = true;

    grp.rotation.y += d * 0.05;
    grp.rotation.x += (-0.32 + state.pointer.y * 0.12 - grp.rotation.x) * 0.05;
    grp.rotation.z += (state.pointer.x * 0.1 - grp.rotation.z) * 0.05;
  });

  return (
    <group
      ref={groupRef}
      scale={isMobile ? 0.7 : 0.9}
      position={[isMobile ? 0 : 1.5, 0.2, 0]}
    >
      <points ref={pointsRef} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[buf.positions, 3]}
          />
          <bufferAttribute attach="attributes-color" args={[buf.colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={isMobile ? 0.05 : 0.036}
          vertexColors
          transparent
          opacity={0.85}
          depthWrite={false}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export function HeroScene({
  isMobile = false,
  active = true,
}: {
  isMobile?: boolean;
  active?: boolean;
}) {
  return (
    <Canvas
      // Pause the render loop while the hero is scrolled out of view.
      frameloop={active ? "always" : "never"}
      dpr={[1, isMobile ? 1.5 : 2]}
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <Funnel key={isMobile ? "m" : "d"} isMobile={isMobile} />
    </Canvas>
  );
}
