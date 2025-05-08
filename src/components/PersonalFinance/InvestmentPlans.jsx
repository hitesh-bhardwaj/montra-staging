import Image from 'next/image'
import React from 'react'

const InvestmentPlans = () => {
  return (
 <section className='w-screen h-full bg-white p-[4vw]'>
        <div className='w-full h-full flex flex-col gap-[1.2vw] text-center'>
        <div className='w-full flex flex-col items-center'>
        <h2
  className={`text-[5.7vw] font-display font-medium w-[85%] capitalize`}>Compare Top <span className='text-primary'>Investment</span> Plans to Maximise Your Returns</h2>
        <p className='w-[50%]'>Explore the best investment options and find the plan that helps you grow your wealth faster.</p>
        </div>

         <div className="w-full flex items-center justify-center gap-[2vw] pt-[4vw] px-[4vw] text-white">
                  
           <div  className={`w-[13vw] h-[13vw]  rounded-[7vw] flex flex-col justify-center items-center  icon-1 scale-[0.3] icon bg-[#35C771]`}>
           <div className="opacity-0 icon-content flex flex-col justify-center  gap-[0.5vw] items-center w-full">
             <div className="w-[6vw] h-[6vw]">
               <Image
                 src="/assets/images/personal-finance/fixed-deposits.svg"
                 alt="investor-icon"
                 className="w-full h-full object-contain"
                 width={50}
                 height={50}
               />
             </div>
             <p className="w-[50%] text-center font-medium leading-[1.2]">Fix Deposits</p>
           </div>
         </div> 
         <div  className={`w-[13vw] h-[13vw]  rounded-[7vw] flex flex-col justify-center items-center  icon-1 scale-[0.3] icon bg-[#FB2F55]`}>
           <div className="opacity-0 icon-content flex flex-col justify-center  gap-[0.5vw] items-center w-full">
             <div className="w-[6vw] h-[6vw]">
               <Image
                 src="/assets/images/personal-finance/mutual-funds.svg"
                 alt="investor-icon"
                 className="w-full h-full object-contain"
                 width={50}
                 height={50}
               />
             </div>
             <p className="w-[50%] text-center font-medium leading-[1.2]">Mutual Funds</p>
           </div>
         </div>  
                </div>
        </div>
 </section>
  )
}

export default InvestmentPlans