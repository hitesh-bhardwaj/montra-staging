import Image from 'next/image'
import React from 'react'

const Track = () => {
  return (
    <section className="h-full w-screen  bg-white relative">
     
        <div className="w-full text-center flex flex-col gap-[2vw] pb-[5%] items-center justify-center">
          <h2 className="text-[5.7vw] font-display font-medium w-[70%] capitalize leading-[1.15]">
          Track Your & Rewards—All in One Place
          </h2>
         <div className='px-[4vw] py-[4vw] flex items-center justify-between'>
            <div className='flex flex-col w-[20%] items-start gap-[1.5vw]'>
                <Image src={"/assets/images/personal-payments/montra-account-statement.svg"} height={50} width={50} alt='montra-account-statement'/>
                <p className='font-medium text-start'>Montra Account Statement</p>
                <p className='text-start'>View all your payments in real-time with your Montra  Account Statement—clarity made simple.</p>
            </div>
            <div className='flex flex-col w-[20%] items-start gap-[1.5vw]'>
                <Image src={"/assets/images/personal-payments/montra-account-statement.svg"} height={50} width={50} alt='montra-account-statement'/>
                <p className='font-medium text-start'>Instant Alerts</p>
                <p className='text-start'>Get voice and text notifications on your Montra App every time you receive a payment—so you’re always in the loop.</p>
            </div>
            <div className='flex flex-col w-[20%] items-start gap-[1.5vw]'>
                <Image src={"/assets/images/personal-payments/montra-account-statement.svg"} height={50} width={50} alt='montra-account-statement'/>
                <p className='font-medium text-start'>Reward Points Tracker</p>
                <p className='text-start'>Keep tabs on every reward point earned with a dedicated Reward Point Account Statement—no surprises, just benefits.</p>
            </div>
            <div className='flex flex-col w-[20%] items-start gap-[1.5vw]'>
                <Image src={"/assets/images/personal-payments/montra-account-statement.svg"} height={50} width={50} alt='montra-account-statement'/>
                <p className='font-medium text-start'>Easy Reward Redemption</p>
                <p className='text-start'>Redeem your points anytime and monitor it all through your Reward Point Redemption Account—track your perks with ease.</p>
            </div>

         </div>
        </div>
</section>
  )
}

export default Track