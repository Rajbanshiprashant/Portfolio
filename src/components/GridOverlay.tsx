'use client';

export default function GridOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-10"
      aria-hidden="true"
    >
      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(26,26,26,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,26,26,0.3) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />

      {/* Scanlines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.04) 2px, rgba(255,255,255,0.04) 4px)',
        }}
      />

      {/* Film grain / noise texture via SVG filter */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        <filter id="kairos-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#kairos-noise)" />
      </svg>
    </div>
  );
}
