import { useEffect, useState } from "react";

const AutoScrollCarouse = () => {
  const [offset, setOffset] = useState(0);

  // Your images - replace with your actual image URLs
  const images = [
    { id: 1, url: "https://picsum.photos/600/400?random=1", title: "Image 1" },
    { id: 2, url: "https://picsum.photos/600/400?random=2", title: "Image 2" },
    { id: 3, url: "https://picsum.photos/600/400?random=3", title: "Image 3" },
    { id: 4, url: "https://picsum.photos/600/400?random=4", title: "Image 4" },
    { id: 5, url: "https://picsum.photos/600/400?random=5", title: "Image 5" },
    { id: 6, url: "https://picsum.photos/600/400?random=6", title: "Image 6" },
  ];

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images, ...images];

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev + 1;
        // Reset when we've scrolled through one full set
        if (newOffset >= images.length * 320) {
          return 0;
        }
        return newOffset;
      });
    }, 20); // Adjust speed by changing interval time

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center overflow-hidden">
      <div className="w-full">
        <h1 className="text-5xl font-bold text-white text-center mb-12">
          Auto-Scrolling Carousel
        </h1>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-indigo-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-pink-900 to-transparent z-10"></div>

          {/* Scrolling container */}
          <div
            className="flex gap-6 py-8"
            style={{
              transform: `translateX(-${offset}px)`,
              transition: "transform 0.05s linear",
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden shadow-2xl"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-white/70 text-center mt-8 text-sm">
          Scrolling automatically • Seamless infinite loop
        </p>
      </div>
    </div>
  );
};

export default AutoScrollCarouse;
