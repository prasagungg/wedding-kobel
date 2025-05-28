import { Calendar, Clock, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import config from "@/config/config";
import { formatEventDate } from "@/lib/formatEventDate";
import middleFlower from "@/assets/hero.png";

export default function Hero() {
  // eslint-disable-next-line react/prop-types
  const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function calculateTimeLeft() {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
          jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
          menit: Math.floor((difference / 1000 / 60) % 60),
          detik: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    }

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearInterval(timer);
    }, [calculateTimeLeft, targetDate]);

    return (
      <div className="grid grid-cols-4 gap-4 mt-8">
        {Object.keys(timeLeft).map((interval) => (
          <motion.div
            key={interval}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center p-2 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-100"
          >
            <span className="text-xl sm:text-2xl font-bold text-slate-600">
              {timeLeft[interval]}
            </span>
            <span className="text-xs text-gray-500 capitalize">{interval}</span>
          </motion.div>
        ))}
      </div>
    );
  };

  const FloatingHearts = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * window.innerWidth,
              y: window.innerHeight,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0.5],
              x: Math.random() * window.innerWidth,
              y: -100,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut",
            }}
            className="absolute"
          >
            <Heart
              className={`w-${Math.floor(Math.random() * 2) + 8} h-${Math.floor(Math.random() * 2) + 8} ${
                i % 3 === 0
                  ? "text-slate-400"
                  : i % 3 === 1
                    ? "text-slate-400"
                    : "text-slate-400"
              }`}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20 text-center relative overflow-hidden"
      >
        <div
          className="w-[800px] h-[400px] bg-cover bg-center absolute bottom-0 left-1/2 -translate-x-1/2  "
          style={{ backgroundImage: `url(${middleFlower})` }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 relative z-10"
        >
          <div className="relative">
            <FloatingHearts />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart
                className="w-10 sm:w-12 h-10 sm:h-12 text-slate-500 mx-auto"
                fill="currentColor"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mx-auto"
          >
            <span className="px-4 py-1 text-sm bg-slate-100 text-slate-600 rounded-full border border-slate-200">
              Catat Tanggal Penting Ini
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-500 font-light italic text-base sm:text-lg"
            >
              InsyaAllah Kami Akan Menikah
            </motion.p>
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-3xl sm:text-5xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-slate-600"
            >
              {config.data.groomName} & {config.data.brideName}
            </motion.h2>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="relative max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-100/30 to-white/50 backdrop-blur-md rounded-2xl" />

            <div className="relative px-4 sm:px-8 py-8 sm:py-10 rounded-2xl border border-slate-100/50">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px">
                <div className="w-20 sm:w-32 h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              </div>

              <div className="space-y-6 text-center">
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-gray-700 font-medium text-sm sm:text-base">
                      {formatEventDate(config.data.date, "full")}
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex items-center justify-center space-x-2"
                  >
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="text-gray-700 font-medium text-sm sm:text-base">
                      {config.data.time}
                    </span>
                  </motion.div>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-px">
                <div className="w-20 sm:w-32 h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              </div>
            </div>

            <div className="absolute -top-2 -right-2 w-16 sm:w-24 h-16 sm:h-24 bg-slate-100/20 rounded-full blur-xl" />
            <div className="absolute -bottom-2 -left-2 w-16 sm:w-24 h-16 sm:h-24 bg-slate-100/20 rounded-full blur-xl" />
          </motion.div>

          <CountdownTimer targetDate={config.data.date} />
        </motion.div>
      </section>
    </>
  );
}
