import React from 'react'

const Discover = () => {
  return (
   <section className='px-[4vw]  h-full w-screen'>
    <div className='flex items-center justify-between w-[95%] bg-primary rounded-[4vw] py-[8vw] px-[4vw]'>
        <div className='w-[60%]'>
            <h2 className='text-[5.7vw] font-display font-medium  w-[80%] capitalize leading-[1.15] text-white'>Discover More on Montra Marketplace</h2>
        </div>
        <div className='w-[40%]  flex flex-col items-center gap-[2vw]'>
            <div className='bg-black rounded-[6vw] h-fit w-fit p-[0.5vw] flex '>
                <div className='h-[5vw] w-[5vw] bg-white rounded-full'>

                </div>
                <div className='h-[5vw] w-[15vw] rounded-[6vw] bg-white'>

                </div>

            </div>

        </div>

    </div>

   </section>
  )
}

export default Discover