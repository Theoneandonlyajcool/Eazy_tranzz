import React from "react";

interface ImageItem {
  src: string;
  alt?: string;
}

/**
 * AutoScrollCarousel
 * - A simple, dependency-free auto-scrolling horizontal carousel for React + Tailwind projects.
 * - Usage: import images (static imports) and pass an array: [{ src: img1, alt: '...'}, ...]
 * - Props:
 *    images: Array<{src: string, alt?: string}>  (required)
 *    duration: number (seconds for one full loop). Default: 20
 *    heightClass: Tailwind height class for the carousel container. Default: 'h-24'
 *
 * Example:
 * import img1 from '@/assets/Images/img1.png'
 * import img2 from '@/assets/Images/img2.png'
 * const images = [{ src: img1, alt: 'one' }, { src: img2, alt: 'two' }]
 * <AutoScrollCarousel images={images} duration={18} heightClass="h-32" />
 */

interface AutoScrollCarouselProps {
  images: ImageItem[];
  duration?: number;
  heightClass?: string;
}

const AutoScrollCarousel: React.FC<AutoScrollCarouselProps> = ({
  images = [],
  duration = 20,
  heightClass = "h-24",
}) => {
  if (!images || images.length === 0) return null;

  // Duplicate the images to create a seamless infinite loop.
  const duplicated = [...images, ...images, ...images, ...images];

  return (
    <div
      className={`w-full overflow-hidden relative ${heightClass} select-none`}
    >
      {/* Inline styles/keyframes so this component is copy-paste friendly */}
      <style>{`
        @keyframes asc-roll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .asc-scroller { display: flex; align-items: center; gap: 1rem; }
        .asc-scroller img { height: 100%; width: auto; object-fit: contain; pointer-events: none; user-select: none; }
        /* pause animation while hovering */
        .asc-wrapper:hover .asc-scroller { animation-play-state: paused; }
      `}</style>

      <div className="asc-wrapper w-full h-full">
        <div
          className="asc-scroller"
          style={{
            // width: max-content keeps the natural size so the translateX -50% works with duplicated content
            width: "max-content",
            animation: `asc-roll ${duration}s linear infinite`,
          }}
        >
          {duplicated.map((img, idx) => (
            <img
              key={`asc-${idx}`}
              src={img.src}
              alt={img.alt || `carousel-${idx}`}
              draggable={false}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoScrollCarousel;
