/* eslint-disable react/prop-types */
import Marquee from "@/components/ui/marquee";
import { motion } from "framer-motion";
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
              src={`${galery.src}?auto=format&fit=max&w=400`}
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
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379125651960893540/1_19.jpg?ex=683f1a5a&is=683dc8da&hm=c3b26fa1d6cb74a0cf7fe008ec65a79af0b97a61fa4f9f0385086386b827b5af&",
      },
      {
        name: "gambar-2",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379125653579894824/1_1.jpg?ex=683f1a5a&is=683dc8da&hm=fbdee58633b712f76b95b87eaea5979840691cc6243bff91d8439a517966fc59&",
      },
      {
        name: "gambar-3",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379125655312011474/1_2.jpg?ex=683f1a5b&is=683dc8db&hm=9f40103e997fabc8494ef075546272088abb5f8298c439475cab4e1820f9fbb2&",
      },
      {
        name: "gambar-4",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379125656977150145/1_3.jpg?ex=683f1a5b&is=683dc8db&hm=f153355237962e1e274fc168f994d451de1599c53f3029b8085f3f11d67840aa&",
      },
      {
        name: "gambar-5",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379125658751340667/1_4.jpg?ex=683f1a5b&is=683dc8db&hm=958e0e017774cf8ae0456a41c08774808d5661ad9a38971ee7588ccec8316406&",
      },
      {
        name: "gambar-6",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379125666850541710/1_18.jpg?ex=683f1a5d&is=683dc8dd&hm=1f043bc5bc3a24706f5ce047de036259620f3b4fe2a041ba0b0737bb8416f6a7&",
      },
      {
        name: "gambar-7",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379125660412547143/1_5.jpg?ex=683f1a5c&is=683dc8dc&hm=7f5e6fb827735c301464e06d5559558723041c3d673179af41ef9e3542f27ef9&",
      },
      {
        name: "gambar-8",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379125661918167120/1_6.jpg?ex=683f1a5c&is=683dc8dc&hm=71250fb985d4fb3f5761e04858c6154341048d5d2de92fff7fc1f9266c9f399b&",
      },
      {
        name: "gambar-9",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379125663365202000/1_16.jpg?ex=683f1a5d&is=683dc8dd&hm=17b811eb0d1b0c419350555fd11f4c142af3e8e00b3e0c8b4939d215f710e254&",
      },
      {
        name: "gambar-10",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379125665059569806/1_17.jpg?ex=683f1a5d&is=683dc8dd&hm=d55b04c691a8fcfbdca12e0453eb13e5c554e0181db76deea22fbb3540eb206a&",
      },
      {
        name: "gambar-11",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379127401497231452/1_9.jpg?ex=683f1bfb&is=683dca7b&hm=384cc4a79c4e0b02547552d6bfee064e114b97f70e4a9f4bbe38bb0684328a57&",
      },
      {
        name: "gambar-12",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379127402764042300/1_10.jpg?ex=683f1bfb&is=683dca7b&hm=5abb218bf6752ed583767911b25a1dc6b0b3e7322d74c7a618ef29a80df908ea&",
      },
      {
        name: "gambar-13",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379127403959287908/1_11.jpg?ex=683f1bfc&is=683dca7c&hm=a701b88fc76bb5bad97a2651346ad6b505b234a2e78c436513ff4277786b3384&",
      },
      {
        name: "gambar-14",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379127404911657090/1_20.jpg?ex=683f1bfc&is=683dca7c&hm=c3c20eb642a2226db52cdfd9d7d59b659a9eff7cfa2cb6be1992f773ef3e4a6d&",
      },
      {
        name: "gambar-15",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379127406329069709/1_21.jpg?ex=683f1bfc&is=683dca7c&hm=e129edad2855e3738f1e3a3385d32159cbabf3865bd24b528c9e42472ba0d0cd&",
      },
      {
        name: "gambar-16",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379127407667056650/1_22.jpg?ex=683f1bfc&is=683dca7c&hm=d1644d14422d3de5c625664b876f9caa23172c412b2e013edd833b58df4e89f3&",
      },
      {
        name: "gambar-17",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379127409118544023/1_23.jpg?ex=683f1bfd&is=683dca7d&hm=ed65ea96873d0882853a23de900bf06ef2b6b038dbba4770287961575a565180&",
      },
      {
        name: "gambar-18",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379127410309468384/1_24.jpg?ex=683f1bfd&is=683dca7d&hm=edc101ad70b1cd9dccb8e04ebadac0bfbc7e4033ad80244f2dd09499fdb19dac&",
      },
      {
        name: "gambar-19",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379127411433668680/1_7.jpg?ex=683f1bfd&is=683dca7d&hm=8d632410ce5e932cbd297e626b6b2f75427a5cd80f5fdfd9971b7d4ba4b95aeb&",
      },
      {
        name: "gambar-20",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379127412750553180/1_8.jpg?ex=683f1bfe&is=683dca7e&hm=55854f77cdc1d27fa2ae07033ca87e38a24172f9a1688d830402937dc4959f38&",
      },
      {
        name: "gambar-21",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379127918457782413/1_13.jpg?ex=683f1c76&is=683dcaf6&hm=961904bd18e274043e8634e1b90bd8128fe519b352362f3961b4ec78ffe30eed&",
      },
      {
        name: "gambar-22",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379127919997227082/1_14.jpg?ex=683f1c77&is=683dcaf7&hm=2f321687f8bd2deec5bbd9b546ce357eb21dd23280bc9ea9d1a19f45ebf8433b&",
      },
      {
        name: "gambar-23",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379127921456975882/1_15.jpg?ex=683f1c77&is=683dcaf7&hm=227431ff643bf3926a40234bda0a9136616ac6716f1ff61fc180c729220f59d3&",
      },
      {
        name: "gambar-24",
        src: "https://cdn.discordapp.com/attachments/1178183487241601136/1379127923491209276/1_12.jpg?ex=683f1c77&is=683dcaf7&hm=73ae904143ed169c54febc481be3044591933b6795d9d904cdee2e88db0e4515&",
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

            <MarqueeRow items={galeries1} />
            <MarqueeRow items={galeries2} reverse />
            <MarqueeRow items={galeries3} />
          </motion.div>
        </div>
      </section>
    </>
  );
}
