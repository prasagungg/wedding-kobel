/* eslint-disable react/prop-types */
import Marquee from "@/components/ui/marquee";
import { motion } from "framer-motion";
import { Image } from "lucide-react";
import { useState, useEffect, useMemo } from "react";

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
          <div
            key={galery.name}
            className="group relative w-[280px] sm:w-[280px] rounded-xl overflow-hidden border border-rose-200 shadow-md"
          >
            <img
              src={galery.src}
              alt={galery.name.replace(/-/g, " ")}
              className="w-full h-40 object-cover"
              loading="lazy"
              srcSet={`${galery.src}?w=280 280w, ${galery.src}?w=560 560w`}
              sizes="(max-width: 600px) 280px, 560px"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 rounded-xl" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default function Gallery() {
  const [hasAnimated, setHasAnimated] = useState(false);

  const galeries = useMemo(
    () => [
      {
        name: "gambar-1",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%281%29-NNWnSeSF4ZZ939tpU5mOoiB35MwQ7i.jpg",
      },
      {
        name: "gambar-2",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%2810%29-cDGbufld9b5GRfe85bKbygDYediMR8.jpg",
      },
      {
        name: "gambar-3",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%2811%29-Ktt5AdyjXSwnDr75E0C1MN9vkNI2oV.jpg",
      },
      {
        name: "gambar-4",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%2812%29-4boz3fsuwBaDPp7rKFZThUWZr1mc0D.jpg",
      },
      {
        name: "gambar-5",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%2813%29-rW104GlOpeUMS0mPjIdvsqxDfRo5sT.jpg",
      },
      {
        name: "gambar-6",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%2814%29-DT9H7z1QL6jjI7NT0UQAt2yglplrmw.jpg",
      },
      {
        name: "gambar-7",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%2815%29-dQYhbBcxEprTnQ9WRPgQa98hSFgQj6.jpg",
      },
      {
        name: "gambar-8",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%2816%29-rmW1lmLlKCs67pAspmbpsmnmKPLamV.jpg",
      },
      {
        name: "gambar-9",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%2817%29-q5zrj9iBRlLm8kMf0nDPEbwcMUAlgo.jpg",
      },
      {
        name: "gambar-10",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%2818%29-gM8AQONszylXyIKQPXiloPWl4pkQDY.jpg",
      },
      {
        name: "gambar-11",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%2819%29-1CkvF9poAdYI2Erbc40U7nAdDgxv2j.jpg",
      },
      {
        name: "gambar-12",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%282%29-tESfxJfps9laXks7CiKQoRewKmPJny.jpg",
      },
      {
        name: "gambar-13",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%2820%29-hoIoNljt8lyhODL9lKNNZEgnEeL96D.jpg",
      },
      {
        name: "gambar-14",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%2821%29-HzPBvJ0BqyYzYCpwd0gHXGXHiBtr1R.jpg",
      },
      {
        name: "gambar-15",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%2822%29-KXZxBVg4Sf6WpbSlDgQIEkOi3S8nGB.jpg",
      },
      {
        name: "gambar-16",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%2823%29-6SSETBIEmQjKFoskXGzPQScnUjsUJl.jpg",
      },
      {
        name: "gambar-17",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%2824%29-gKVJdQHLnVSyerorklZZ5Bics3nxGd.jpg",
      },
      {
        name: "gambar-18",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%283%29-rBG4ye0TgxqYM9iH58ajOO2CWbSbvq.jpg",
      },
      {
        name: "gambar-19",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%284%29-CSSiIz0fWF2yBlpdXI778tJIuScQMj.jpg",
      },
      {
        name: "gambar-20",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%285%29-f0SnWki4f2Oh1rHyCk3o4pcYdfS0ly.jpg",
      },
      {
        name: "gambar-21",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%286%29-GdIyvUuKLdiWohEYecIutIJ9MsJXOd.jpg",
      },
      {
        name: "gambar-22",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%287%29-ssuYQNq0qWYbaMdX9fAzCbS0DWv67I.jpg",
      },
      {
        name: "gambar-23",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%288%29-pz0yQaeA2l3CARdpetgOt0KudTeNzX.jpg",
      },
      {
        name: "gambar-24",
        src: "https://6fapqydo5lifckcl.public.blob.vercel-storage.com/1%20%289%29-5UxERrakpXHmDuzH0WvEzctUWCaD2E.jpg",
      },
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

            <MarqueeRow items={galeries1} />
            <MarqueeRow items={galeries2} reverse />
            <MarqueeRow items={galeries3} />
          </motion.div>
        </div>
      </section>
    </>
  );
}
