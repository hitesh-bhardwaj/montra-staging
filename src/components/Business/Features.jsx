'use client';
import { useRef} from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { LinkButton } from '../Buttons';
import Image from 'next/image';

export default function Payments() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });
    

    const yStart = 5.5;
    const yEnd = 315.5;
    const length = yEnd - yStart;

    const thresholds = {
        banking: (6 - yStart) / length,
        payment: (69 - yStart) / length,
        finance: (132 - yStart) / length,
        chat: (195 - yStart) / length,
        shop: (258 - yStart) / length,
        lend: (315.5 - yStart) / length,
    };

    const RAMP = 0.01;
    const inactiveColor = '#D2D2D2';
    const activeColor = '#FF8100';

    const makeColor = (t) =>
        useTransform(
            scrollYProgress,
            [t - RAMP, t],
            [inactiveColor, activeColor]
        );

    const colorBanking = makeColor(thresholds.banking);
    const colorPayment = makeColor(thresholds.payment);
    const colorFinance = makeColor(thresholds.finance);
    const colorChat = makeColor(thresholds.chat);
    const colorShop = makeColor(thresholds.shop);
    const colorLend = makeColor(thresholds.lend);

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const translateY = useTransform(scrollYProgress, [0, 1], ['0', '-80%']);

    return (
        <section ref={sectionRef} className="h-[700vh] ">
            <div className="sticky top-0 px-[4vw] h-screen flex items-center justify-between overflow-hidden">
                <div className="flex gap-3 w-[20vw]">
                    <motion.svg
                        className="h-[18vw]"
                        width="14" height="328"
                        viewBox="0 0 14 328"
                        fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <line
                            x1="6.95801" y1="5.5" x2="6.95799" y2="315.5"
                            stroke={inactiveColor} strokeWidth="3"
                        />
                        <motion.line
                            x1="6.95801" y1="5.5" x2="6.95799" y2="315.5"
                            stroke={activeColor} strokeWidth="3"
                            style={{ scaleY }} className="!origin-top"
                        />

                        <motion.circle
                            cx="6.95801" cy="6" r="5.5"
                            fill={colorBanking} stroke={colorBanking} strokeWidth="2"
                        />
                        <motion.circle
                            cx="6.95801" cy="69" r="5.5"
                            fill={colorPayment} stroke={colorPayment} strokeWidth="2"
                        />
                        <motion.circle
                            cx="6.95801" cy="132" r="5.5"
                            fill={colorFinance} stroke={colorFinance} strokeWidth="2"
                        />
                        <motion.circle
                            cx="6.95801" cy="195" r="5.5"
                            fill={colorChat} stroke={colorChat} strokeWidth="2"
                        />
                        <motion.circle
                            cx="6.95801" cy="258" r="5.5"
                            fill={colorShop} stroke={colorShop} strokeWidth="2"
                        />
                        <motion.circle
                            cx="6.95801" cy="321" r="5.5"
                            fill={colorLend} stroke={colorLend} strokeWidth="2"
                        />
                         <motion.circle
                            cx="6.95801" cy="384" r="5.5"
                            fill={colorLend} stroke={colorLend} strokeWidth="2"
                        />
                    </motion.svg>

                    <div className="flex flex-col justify-between font-display text-[1vw] leading-[0.5] pt-1">
                        <motion.span style={{ color: colorBanking }}>
                            Banking
                        </motion.span>
                        <motion.span style={{ color: colorPayment }}>
                        Payments
                        </motion.span>
                        <motion.span style={{ color: colorFinance }}>
                        Agency Banking
                        </motion.span>
                        <motion.span style={{ color: colorChat }}>
                        Inventory Management
                        </motion.span>
                        <motion.span style={{ color: colorShop }}>
                        Montra Store
                        </motion.span>
                        <motion.span style={{ color: colorLend }}>
                        Payment Gateway
                        </motion.span>
                        <motion.span style={{ color: colorLend }}>
                        Tap & Pay
                        </motion.span>
                    </div>
                </div>
                <div className="h-[100vh] overflow-clip w-full relative">
  <span className="absolute top-0 inset-x-0 h-[20vw] bg-gradient-to-b from-white via-[#fff] to-transparent z-10" />
  <span className="absolute bottom-0 inset-x-0 h-[14vw] bg-gradient-to-t from-white via-[#fff] to-transparent z-10" />
<div className='flex'>
  <motion.div
    style={{ translateY }}
    className="flex flex-col relative space-y-[10vw] pt-[30vh] w-full"
  >
    {data.map((item, index) => (
      <div key={index} className="step-block flex gap-[2vw] items-center w-full">
        <div className="flex-1 !w-[15vw]">
          <p className="text-[3.4vw] font-display font-medium leading-[1.2]">
            {item.title}
          </p>
          <p className="w-[80%] py-8">{item.para}</p>
          <LinkButton text="Learn More" href={item.link} />
        </div>
        </div>
    ))}
        </motion.div>
        <motion.div
        className="sticky right-[-10%] h-[100vh] pt-[20vh] flex items-center justify-center w-full"
      >
        {data.map((item, index) => {
          const radius = 40; 
          const totalCards = data.length;
          const degreeOffset = 360 / totalCards;
          const startDegree = -90; 
          const rotation = useTransform(
            scrollYProgress,
            [0, 1],
            [0, 360]
          );
          const baseAngle = startDegree + (index * degreeOffset);
          const x = useTransform(rotation, angle => 
            `${radius * Math.cos(((angle + baseAngle) % 360) * Math.PI / 180)}vw`
          );
          const y = useTransform(rotation, angle => 
            `${radius * Math.sin(((angle + baseAngle) % 360) * Math.PI / 180)}vw`
          );
          const cardRotation = useTransform(rotation, angle => {
            const currentAngle = (angle + baseAngle) % 360;
            const radians = (currentAngle * Math.PI) / 180;
            return 5 * -Math.sin(radians);
          });

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{ x, y , rotate: cardRotation }}
              
            >
              <div
                className="h-[25vw] w-[35vw] py-[4vw] rounded-[2vw] flex items-center justify-center gap-4 ml-[70vw]"
                style={{ backgroundColor: item.color }}
              >
                <Image
                  src={item.icon}
                  height={100}
                  width={100}
                  alt={item.field}
                />
                <p className="text-[3.2vw] font-display font-medium text-white">
                  {item.field}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      </div>
      </div>
</div>
  </section>
    );
}


const data = [
    {
        title: 'Banking That Works for Your Business',
        para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
        link: '#',
        color:"#FF8100",
        icon:"/assets/images/business/banking-icon.svg",
        field:"Banking",
    },
    {
        title: 'Banking That Works for Your Business',
        para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
        link: '#',
        color:"#215CFF",
        icon:"/assets/images/business/banking-icon.svg",
        field:"Payments",
    },
    {
        title: 'Banking That Works for Your Business',
        para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
        link: '#',
        color:"#35C771",
        icon:"/assets/images/business/banking-icon.svg",
        field:"Agency Banking",
    },
    {
        title: 'Banking That Works for Your Business',
        para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
        link: '#',
        color:"#111111",
        icon:"/assets/images/business/banking-icon.svg",
        field:"Inventory Management",
    },
    {
        title: 'Banking That Works for Your Business',
        para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
        link: '#',
        color:"#FB2F55",
        icon:"/assets/images/business/banking-icon.svg",
       field:"Montra Store",
    },
    {
        title: 'Banking That Works for Your Business',
        para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
        link: '#',
        color:"#7A78FF",
        icon:"/assets/images/business/banking-icon.svg",
        field:"Payment Gateway",
    },
    {
        title: 'Banking That Works for Your Business',
        para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
        link: '#',
        color:"#FFB909",
        icon:"/assets/images/business/banking-icon.svg",
        field:"Tap & Pay",
    },
]