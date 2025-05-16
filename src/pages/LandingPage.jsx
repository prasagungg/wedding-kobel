import config from "@/config/config";
import { formatEventDate } from "@/lib/formatEventDate";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

import backgroundImage from "@/assets/background.webp";

// eslint-disable-next-line react/prop-types
const LandingPage = ({ onOpenInvitation, guestName }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-right-bottom bg-no-repeat z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Card Container */}
          <div className="backdrop-blur-sm bg-white/50 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-rose-300 shadow-xl">
            {/* Date and Time */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4 mb-6 sm:mb-8 items-center"
            >
              <div className="inline-flex flex-col items-center space-y-1  px-4 sm:px-6 py-2 sm:py-3 rounded-xl">
                <Calendar className="w-5 h-5 text-rose-400" />
                <p className="text-gray-700 font-medium">
                  {formatEventDate(config.data.date)}
                </p>
                <p className="text-gray-700 font-medium">{config.data.time}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col gap-4 mb-6 sm:mb-8 items-center"
            >
              <p className="text-gray-700 font-serif italic text-sm">
                Kepada Yth.
              </p>
              <p className="text-gray-600 font-medium text-sm">
                Bapak/Ibu/Saudara/i
              </p>
              <p className="text-rose-400 font-bold text-lg">
                {guestName === "" ? "Tamu" : guestName}
              </p>
            </motion.div>

            {/* Couple Names */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center space-y-4"
            >
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
                  {config.data.groomName}
                  <span className="text-rose-400 mx-2 sm:mx-3">&</span>
                  {config.data.brideName}
                </h1>
                <div className="h-px w-16 sm:w-24 mx-auto bg-rose-500" />
              </div>
            </motion.div>

            {/* Open Invitation Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 sm:mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenInvitation}
                className="group relative w-full bg-rose-400 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-xl font-medium shadow-lg hover:bg-rose-600 transition-all duration-200"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Buka Undangan</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
