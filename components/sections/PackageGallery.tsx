"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type PackageGalleryProps = {
  images: string[];
  title: string;
};

export default function PackageGallery({
  images,
  title,
}: PackageGalleryProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((previous) => (previous + 1) % images.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-[55vh] min-h-[450px] w-full overflow-hidden rounded-3xl md:h-[70vh]">

      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`${title} - ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

      {/* Counter */}
      <div className="absolute bottom-6 right-6 rounded-full bg-black/40 px-4 py-2 text-sm text-white backdrop-blur-md">
        {current + 1} / {images.length}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-7 left-6 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === current
                ? "w-8 bg-white"
                : "w-3 bg-white/50"
            }`}
            aria-label={`Show image ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}