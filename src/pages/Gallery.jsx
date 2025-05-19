import { motion } from "framer-motion";
import { Image } from "lucide-react";
import { useState, useEffect } from "react";

import gallery from "@/assets/gallery.webp";

export default function Gallery() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <>
      <section id="gallery" className="min-h-screen relative overflow-hidden">
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

            <motion.div
              initial={{ scale: 0 }}
              animate={hasAnimated ? { scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <img src={gallery} />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
