import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Raden from "@/assets/raden.webp";
import Maul from "@/assets/maul.jpeg";

export default function Bride() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  // eslint-disable-next-line react/prop-types
  const GroomCard = ({ photo, simpleName, fullName, desc }) => {
    return (
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="relative max-w-md mx-auto"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/50 to-white/50 backdrop-blur-md rounded-2xl" />

        <div className="relative px-4 sm:px-8 py-8 sm:py-10 rounded-2xl border border-slate-100/50">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px">
            <div className="w-20 sm:w-32 h-[2px] bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
          </div>

          <div className="space-y-6 text-center">
            <div className="space-y-3">
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-rose-200">
                <img
                  src={photo}
                  alt="photo-mempelai"
                  className="w-full object-cover h-[250px]"
                />
                {/* Overlay Name */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/70 px-4 py-1 rounded-full">
                  <p className="text-rose-800 font-serif italic text-lg">
                    {simpleName}
                  </p>
                </div>
              </div>

              {/* Full Name */}
              <h2 className="mt-6 text-xl text-rose-500 font-semibold  font-serif">
                {fullName}
              </h2>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {desc}
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-px">
            <div className="w-20 sm:w-32 h-[2px] bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
          </div>
        </div>

        <div className="absolute -top-2 -right-2 w-16 sm:w-24 h-16 sm:h-24 bg-rose-100/20 rounded-full blur-xl" />
        <div className="absolute -bottom-2 -left-2 w-16 sm:w-24 h-16 sm:h-24 bg-rose-100/20 rounded-full blur-xl" />
      </motion.div>
    );
  };

  return (
    <>
      <section id="bride" className="relative overflow-hidden bg-slate-100">
        <div className="container mx-auto px-4 py-10 relative z-10">
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
              Raden & Maulidia
            </motion.span>

            <motion.div
              initial={{ opacity: 0 }}
              animate={hasAnimated ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-4 max-w-md mx-auto"
            >
              <p className="text-gray-600 leading-relaxed">
                Dua hati yang dipertemukan takdir, kini siap melangkah bersama
                dalam satu ikatan suci.
              </p>
            </motion.div>

            <GroomCard
              key={1}
              photo={Raden}
              simpleName="Raden"
              fullName="Raden Muhamad Rujilka Muhararan"
              desc="Putra Pertama Bapak Sri Haryadi dan Ibu Fenny Purbasari"
            />
            <GroomCard
              key={2}
              photo={Maul}
              simpleName="Maulidia"
              fullName="Maulidia Arachman"
              desc="Putri Pertama Bapak Abdurahman dan Ibu Siti Masitoh"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
