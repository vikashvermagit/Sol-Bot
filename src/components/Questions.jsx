import React from 'react'

const Questions = () => {
    return (
        <div className='w-[735px] '>
            <div className='bg-black p-5 rounded-lg'>
                <span className='text-[32px] font-bold text-white'>What is a Pending Pool?</span>
                <p className='text-[#858686] text-xl font-medium'>The Pending Pool serves as the initial filter for all tokens emerging from the Solana blockchain. Upon a token's launch on the blockchain, the bot conducts a scan based on the predefined criteria within the Pending Pool settings. Tokens that satisfy these criteria are listed in the Pending Pool, awaiting the conditions necessary for an automatic purchase.</p>
            </div>

            <div className='flex gap-5 mt-14'>
                <button className='bg-[#202020] hover:border hover:border-[#17C654] hover:bg-[#17C654]  border rounded-[7px] px-6 py-3 text-white text-base font-bold'>Reset</button>
                <button className='bg-[#202020] hover:border hover:border-[#17C654] hover:bg-[#17C654] border rounded-[7px] px-6 py-3 text-white text-base font-bold'>Botly</button>
            </div>
        </div>
    )
}

export default Questions