import Marquee from "@/components/ui/marquee";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "lucide-react";
import { useState, useEffect } from "react";

import gambar1 from "@/assets/galery/1.jpg";
import gambar2 from "@/assets/galery/2.jpg";
import gambar3 from "@/assets/galery/3.jpg";
import gambar4 from "@/assets/galery/4.jpg";
import gambar5 from "@/assets/galery/5.jpg";
import gambar6 from "@/assets/galery/6.jpg";
import gambar7 from "@/assets/galery/7.jpg";
import gambar8 from "@/assets/galery/8.jpg";
import gambar9 from "@/assets/galery/9.jpg";
import gambar10 from "@/assets/galery/10.jpg";
import gambar11 from "@/assets/galery/11.jpg";
import gambar12 from "@/assets/galery/12.jpg";
import gambar13 from "@/assets/galery/13.jpg";
import gambar14 from "@/assets/galery/14.jpg";
import gambar15 from "@/assets/galery/15.jpg";
import gambar16 from "@/assets/galery/16.jpg";
import gambar17 from "@/assets/galery/17.jpg";
import gambar18 from "@/assets/galery/18.jpg";
import gambar19 from "@/assets/galery/19.jpg";
import gambar20 from "@/assets/galery/20.jpg";
import gambar21 from "@/assets/galery/21.jpg";
import gambar22 from "@/assets/galery/22.jpg";
import gambar23 from "@/assets/galery/23.jpg";
import gambar24 from "@/assets/galery/24.jpg";

export default function Gallery() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const galeries = [
    { name: "gambar-1", src: gambar1 },
    { name: "gambar-2", src: gambar2 },
    { name: "gambar-3", src: gambar3 },
    { name: "gambar-4", src: gambar4 },
    { name: "gambar-5", src: gambar5 },
    { name: "gambar-6", src: gambar6 },
    { name: "gambar-7", src: gambar7 },
    { name: "gambar-8", src: gambar8 },
    { name: "gambar-9", src: gambar9 },
    { name: "gambar-10", src: gambar10 },
    { name: "gambar-11", src: gambar11 },
    { name: "gambar-12", src: gambar12 },
    { name: "gambar-13", src: gambar13 },
    { name: "gambar-14", src: gambar14 },
    { name: "gambar-15", src: gambar15 },
    { name: "gambar-16", src: gambar16 },
    { name: "gambar-17", src: gambar17 },
    { name: "gambar-18", src: gambar18 },
    { name: "gambar-19", src: gambar19 },
    { name: "gambar-20", src: gambar20 },
    { name: "gambar-21", src: gambar21 },
    { name: "gambar-22", src: gambar22 },
    { name: "gambar-23", src: gambar23 },
    { name: "gambar-24", src: gambar24 },
  ];

  return (
    <>
      <section id="gallery" className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-10 relative z-10">
          {/* Section Header */}
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

            {/* Decorative Divider */}
            <motion.div
              initial={{ scale: 0 }}
              animate={hasAnimated ? { scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <div className="h-[1px] w-12 bg-rose-200" />
              <Image className="w-5 h-5 text-rose-400" />
              <div className="h-[1px] w-12 bg-rose-200" />
            </motion.div>

            <div className="max-w-2xl mx-auto space-y-6">
              <AnimatePresence>
                <Marquee
                  speed={120}
                  gradient={false}
                  className="[--duration:120s] py-2"
                >
                  {galeries.map((galery, index) => (
                    <motion.div
                      key={galery.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative w-[280px] rounded-xl overflow-hidden border border-rose-200 shadow-md"
                    >
                      {/* Image */}
                      <img
                        src={galery.src}
                        alt={`Gallery item ${index + 1}`}
                        className="w-full h-40 object-cover"
                      />

                      {/* Optional overlay on hover */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 rounded-xl" />
                    </motion.div>
                  ))}
                </Marquee>
              </AnimatePresence>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              <AnimatePresence>
                <Marquee
                  speed={120}
                  gradient={false}
                  className="[--duration:120s] py-2"
                  reverse={true}
                >
                  {galeries.map((galery, index) => (
                    <motion.div
                      key={galery.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative w-[280px] rounded-xl overflow-hidden border border-rose-200 shadow-md"
                    >
                      {/* Image */}
                      <img
                        src={galery.src}
                        alt={`Gallery item ${index + 1}`}
                        className="w-full h-40 object-cover"
                      />

                      {/* Optional overlay on hover */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 rounded-xl" />
                    </motion.div>
                  ))}
                </Marquee>
              </AnimatePresence>
            </div>

            <div className="max-w-2xl mx-auto">
              <AnimatePresence>
                <Marquee
                  speed={120}
                  gradient={false}
                  className="[--duration:120s] py-2"
                >
                  {galeries.map((galery, index) => (
                    <motion.div
                      key={galery.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative w-[280px] rounded-xl overflow-hidden border border-rose-200 shadow-md"
                    >
                      {/* Image */}
                      <img
                        src={galery.src}
                        alt={`Gallery item ${index + 1}`}
                        className="w-full h-40 object-cover"
                      />

                      {/* Optional overlay on hover */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 rounded-xl" />
                    </motion.div>
                  ))}
                </Marquee>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
