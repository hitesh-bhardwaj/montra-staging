import { AnimatePresence, motion, scale } from "framer-motion";
import AnimatedOpeners from "./AnimatedOpener";
import Image from "next/image";

export default function TimelineSlide({  year, direction, data }) {
  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? "50%" : "-50%", opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.7 } },
    exit: (dir) => ({
      x: dir > 0 ? "-50%" : "50%",
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  const cardVariants = {
    enter: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.2, type: "spring", stiffness: 50 },
    }),
    exit: { scale: 0, opacity: 0 },
  };
  // console.log(data)

  return (
    <motion.div
      className="absolute w-full h-full flex flex-col items-center justify-center px-4 max-sm:flex max-sm:flex-col max-sm:static max-sm:px-0 max-md:static"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
    >
      {data.openCard && (
        <div className="w-[20vw] h-[15vw] rounded-[2vw] border-[2px] border-black bg-[#EAF1FF] text-black-1 absolute top-[22%] right-[10%] p-[2vw] pl-[3vw] text-[1.1vw] font-display max-md:hidden">
          <ul className="list-disc space-y-[1.5vw]">
            {data.openCard.map((data, id) => (
              <li key={id}>{data}</li>
            ))}
          </ul>
        </div>
      )}
      {/* Content Cards */}
      <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 relative w-full h-full max-sm:flex max-sm:flex-col  max-sm:mt-[10vw] max-md:flex max-md:flex-col fadeupanim">
        <AnimatePresence mode="popLayout">
          {data.cards.map((card, i) => (
            <motion.div
              key={`${year}-${i}`}
              custom={i}
              variants={cardVariants}
              initial="enter"
              animate="visible"
              exit="exit"
              className={`absolute ${card.left} ${card.top} ${card.z} max-sm:static max-sm:h-fit max-sm:w-[85vw] max-md:static max-md:h-fit max-md:w-[75vw] max-md:pl-[5vw] max-sm:pl-0`}
            >
              <AnimatedOpeners
                letter={card.letter}
                classPrefix={card.classPrefix}
                color={card.color}
                title={card.title}
                h={card.h}
                mobileh={card.mobileh}
                para={card.para}
                content={card.content}
              />
            </motion.div>
          ))}
          {data.images&&data.images.map((img, i) => (
            <motion.div
              key={`${year}0-${i}`}
              style={{ top: img.top, left: img.left }}
              custom={i}
              variants={cardVariants}
              initial="enter"
              animate="visible"
              exit="exit"
              className="absolute h-[15vw] w-[15vw] overflow-clip border-2 border-black-1 rounded-3xl max-sm:hidden max-md:hidden"
            >
              <Image
                className="w-full h-full object-cover"
                src={img.src}
                alt="image"
                width={400}
                height={500}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
