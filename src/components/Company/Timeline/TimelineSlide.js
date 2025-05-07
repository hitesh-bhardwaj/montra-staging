import { AnimatePresence, motion, scale } from 'framer-motion';
import AnimatedOpeners from './AnimatedOpener';
import Image from 'next/image';

export default function TimelineSlide({ year, direction, data }) {
    const slideVariants = {
        enter: (dir) => ({ x: dir > 0 ? '50%' : '-50%', opacity: 0 }),
        center: { x: 0, opacity: 1, transition: { duration: 0.7 } },
        exit: (dir) => ({ x: dir > 0 ? '-50%' : '50%', opacity: 0, transition: { duration: 0.5 } }),
    };

    const cardVariants = {
        enter: { scale: 0, opacity: 0 },
        visible: (i) => ({
            scale: 1, opacity: 1,
            transition: { delay: i * 0.2, type: 'spring', stiffness: 50 }
        }),
        exit: { scale: 0, opacity: 0 }
    };

    return (
        <motion.div
            className="absolute w-full h-full flex flex-col items-center justify-center px-4"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
        >
            {/* Content Cards */}
            <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 relative w-full h-full">
                <AnimatePresence mode="popLayout">
                    {data.cards.map((card, i) => (
                        <motion.div
                            key={`${year}-${i}`}
                            custom={i}
                            variants={cardVariants}
                            initial="enter"
                            animate="visible"
                            exit="exit"
                            className={`absolute ${card.left} ${card.top} ${card.z}`}
                        >
                            <AnimatedOpeners
                                letter={card.letter}
                                classPrefix={card.classPrefix}
                                color={card.color}
                                title={card.title}
                                content={card.content}
                            />
                        </motion.div>
                    ))}
                    {data.images.map((img, i) => (
                        <motion.div 
                            key={`${year}0-${i}`}
                            style={{top: img.top, left: img.left}}
                            custom={i}
                            variants={cardVariants}
                            initial="enter"
                            animate="visible"
                            exit="exit"
                            className='absolute h-[15vw] w-[15vw] overflow-clip border-2 border-black-1 rounded-3xl'
                        >
                            <Image className='w-full h-full object-cover' src={img.src} alt='image' width={400} height={500} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

