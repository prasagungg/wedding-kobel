/* eslint-disable react/prop-types */
import Marquee from "@/components/ui/marquee";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

// --- Import semua gambar lokal Anda ---
import img1 from "@/assets/images/1.jpg";
import img2 from "@/assets/images/2.jpg";
import img3 from "@/assets/images/3.jpg";
import img4 from "@/assets/images/4.jpg";
import img5 from "@/assets/images/5.jpg";
import img6 from "@/assets/images/6.jpg";
import img7 from "@/assets/images/7.jpg";
import img8 from "@/assets/images/8.jpg";
import img9 from "@/assets/images/9.jpg";
import img10 from "@/assets/images/10.jpg";
import img11 from "@/assets/images/11.jpg";
import img12 from "@/assets/images/12.jpg";
import img13 from "@/assets/images/13.jpg";
import img14 from "@/assets/images/14.jpg";
import img15 from "@/assets/images/15.jpg";
import img16 from "@/assets/images/16.jpg";
import img17 from "@/assets/images/17.jpg";
import img18 from "@/assets/images/18.jpg";
import img19 from "@/assets/images/19.jpg";
import img20 from "@/assets/images/20.jpg";
import img21 from "@/assets/images/21.jpg";
import img22 from "@/assets/images/22.jpg";
import img23 from "@/assets/images/23.jpg";
import img24 from "@/assets/images/24.jpg";
import GalleryImage from "@/components/ui/GelleryImage";
// --- Akhir import gambar ---

function MarqueeRow({ items, reverse = false }) {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Marquee
        speed={120}
        gradient={false}
        className="[--duration:120s] py-2"
        reverse={reverse}
      >
        {items.map((galery) => (
          <GalleryImage
            key={galery.name}
            src={galery.src}
            alt={galery.name.replace(/-/g, " ")}
            name={galery.name}
          />
        ))}
      </Marquee>
    </div>
  );
}

export default function Gallery() {
  const [hasAnimated, setHasAnimated] = useState(false);

  const galeries = useMemo(
    () => [
      { name: "gambar-1", src: img1 },
      { name: "gambar-2", src: img2 },
      { name: "gambar-3", src: img3 },
      { name: "gambar-4", src: img4 },
      { name: "gambar-5", src: img5 },
      { name: "gambar-6", src: img6 },
      { name: "gambar-7", src: img7 },
      { name: "gambar-8", src: img8 },
      { name: "gambar-9", src: img9 },
      { name: "gambar-10", src: img10 },
      { name: "gambar-11", src: img11 },
      { name: "gambar-12", src: img12 },
      { name: "gambar-13", src: img13 },
      { name: "gambar-14", src: img14 },
      { name: "gambar-15", src: img15 },
      { name: "gambar-16", src: img16 },
      { name: "gambar-17", src: img17 },
      { name: "gambar-18", src: img18 },
      { name: "gambar-19", src: img19 },
      { name: "gambar-20", src: img20 },
      { name: "gambar-21", src: img21 },
      { name: "gambar-22", src: img22 },
      { name: "gambar-23", src: img23 },
      { name: "gambar-24", src: img24 },
    ],
    []
  );

  useEffect(() => {
    setHasAnimated(true);
  }, [galeries]);

  const [galeries1, galeries2, galeries3] = useMemo(() => {
    return [
      galeries.slice(0, 8),
      galeries.slice(8, 16),
      galeries.slice(16, 24),
    ];
  }, [galeries]);

  return (
    <>
      <section id="gallery" className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-10 relative z-10">
          {/* Bagian Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block text-rose-500 font-medium"
            >
              Kenangan Sebelum Janji Suci
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-gray-600"
            >
              Beberapa momen indah yang kami abadikan sebelum melangkah ke hari
              istimewa.
            </motion.p>
          </motion.div>
          {/* Baris Marquee */}
          <MarqueeRow items={galeries1} />
          <MarqueeRow items={galeries2} reverse />
          <MarqueeRow items={galeries3} />
        </div>
      </section>
    </>
  );
}
