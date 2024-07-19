import React from 'react'
import Image from 'next/image'
import checkCircle from '../../../public/check_circle_24dp_5FC96A_FILL0_wght400_GRAD0_opsz24.svg'
import closeImg from '../../../public/close_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'

const IntroSection: React.FC = () => {
  return (
    <main className='mt-[76px] xl:flex flex-col justify-center w-full mt-[85px] '>
      <section className='ml-[24px] mr-[24px]  xl:w-[39%] xl:max-w-[551px] xl:mx-auto xl:text-center'>
        <div className='flex flex-row justify-between items-center bg-[#E7F7E9] rounded-[4px] border-[1px] border-[#5FC96A] px-[24px] py-[24px]'>
           <div className='flex flex-row items-center'>
           <Image
            src={checkCircle}
            width={24}
            height={24}
            alt="checked verified"
             />
            <h1 className='text-[16px] font-normal text-[#222224] ml-[8px]'>Email Verified Successfully</h1>
           </div>
           <> <Image
            src={closeImg}
            width={24}
            height={24}
            alt="close alert"
             /></>
        </div>
       <div className='flex flex-col mt-[32px]'>
       <div className='flex flex-col'>
       <h1 className='text-[28px] font-semibold text-[#0A0A0A]'>Verification Successful</h1>
       <p className='mt-[16px] text-[18px] font-normal text-[#525252]'>Your verification was successful, you can now proceed to reset your password</p>
       </div>
       <button className='px-[0] bg-[#F97316] text-center text-[#FAF8F8] rounded-[8px] border-[0] px-[214px] py-[22px] font-medium text-[16px] mt-[24px] hover:bg-[#FAFAFA] hover:text-[#434343] transition duration-250 ease-in-out'>Reset Password</button>
       </div>
      </section>
    </main>
  )
}

export default IntroSection
