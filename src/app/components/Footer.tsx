import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import instaLogo from '../../../public/insta_logo.svg'
import facebookLogo from '../../../public/facebook_logo.svg'
import twitterLogo from '../../../public/twitter_logo.svg'
import linkendinLogo from '../../../public/linkinden_logo.svg'
import youtubeLogo from '../../../public/youube_logo.svg'
import copyrightImg from '../../../public/tabler_copyright.svg'
import mobileTweeter from '../../../public/mobileTweeter.svg'
import mobileYoutube from '../../../public/mobileYoutube.svg'
import mobileInsta from '../../../public/mobileInsta.svg'
import mobileLinkedin from '../../../public/mobileLinkedin.svg'
import mobileFacebook from '../../../public/mobileFacebook.svg'
const Footer: React.FC = () => {
    return (
        <footer className='bg-[#0A0A0A] mt-[120px] lg:pt-[76px] lg:w-full lg:mt-[133px]'>
            <div className='flex flex-col px-[24px] mb-[133px]   lg:flex lg:flex-row  lg:px-[120px] lg:mb-[46px] lg:w-full lg:justify-between'>
                <div className='flex flex-col mt-[28px] max-w-full items-center  lg:flex lg:flex-col lg:w-full lg:max-w-[282px] lg:mt-0'>
                    <h1 className='font-bold text-[20px] text-[#FAFAFA] lg:self-start'>BoilerPlate</h1>
                    <p className='self-center text-[#FAFAFA] mt-[8px] lg:font-normal lg:text-[18px] lg:text-[#FAFAFA] lg:mt-[36px] '>Logo subject details and address</p>
                </div>
                <div className="mt-[47px]  flex items-center lg:hidden w-full flex-col w-[21%]">
                    <h1 className='font-semibold text-[20px] text-[#FAFAFA]'>Sign Up For Newsletter</h1>
                    <div className='mt-[14px] w-[90%] relative lg:w-[283px] lg:max-w-[100%] lg:relative'>
                        <input
                            className='rounded-[5px] bg-[#E2E8F0]  py-[10px] px-[4px] w-full mt-[4px] text-[14px] font-normal text-[#20382B]'
                            placeholder='Enter Email'

                        />
                        <button className='rounded-[6px] py-[6px] px-[16px] bg-[#F97316] absolute right-[3px] top-[7px] text-[#0A0A0A]'>Subscribe</button>
                    </div>
                </div>
                <div className='flex mt-[99px] lg:flex lg:flex-row lg:gap-[62px] lg:mt-0'>
                    <div className='w-full flex flex-col lg:flex lg:flex-col '>
                        <h1 className='font-semibold text-[20px] text-[#FAFAFA] mb-[37px]'>Navigation</h1>

                        <Link href="" className='font-normal text-[18px] text-[#FAFAFA] hover:font-medium'>Home</Link>
                        <Link href="" className='font-normal text-[18px] text-[#FAFAFA] mt-[17px] hover:font-medium'>About us</Link>
                        <Link href="" className='font-normal text-[18px] text-[#FAFAFA] mt-[17px] hover:font-medium'>Career</Link>
                        <Link href="" className='font-normal text-[18px] text-[#FAFAFA] mt-[17px] hover:font-medium'>Feature updates</Link>
                        <Link href="" className='font-normal text-[18px] text-[#FAFAFA] mt-[17px] hover:font-medium'>Blog</Link>

                    </div>
                    <div className=' w-full flex flex-col w-[15%]'>
                        <h1 className='font-semibold text-[20px] text-[#FAFAFA] mb-[37px]'>Support</h1>

                        <Link href="" className='font-normal text-[18px] text-[#FAFAFA] mt-[17px] hover:font-medium'>Help Center</Link>
                        <Link href="" className='font-normal text-[18px] text-[#FAFAFA] mt-[17px] hover:font-medium'>FAQ</Link>
                        <Link href="" className='font-normal text-[18px] text-[#FAFAFA] mt-[17px] hover:font-medium'>Waiting list</Link>
                        <Link href="" className='font-normal text-[18px] text-[#FAFAFA] mt-[17px] hover:font-medium'>Pricing Experience</Link>
                        <Link href="" className='font-normal text-[18px] text-[#FAFAFA] mt-[17px] hover:font-medium'>Contact Us</Link>

                    </div>
                </div>
                <div className='mt-[62px] flex flx-row lg:mt-0'>
                    <div className='flex flex-col  lg:flex flex-col lg:w-[15%]'>
                        <h1 className='mb-[16px] font-semibold text-[20px] text-[#FAFAFA] lg:mb-[37px] hover:font-medium'>Legal</h1>
                        <Link href="" className='font-normal text-[18px] text-[#FAFAFA] hover:font-medium'>Privacy Policy</Link>
                        <Link href="" className='font-regular text-[18px] text-[#FAFAFA] mt-[17px] hover:font-medium'>Terms And Condition</Link>
                    </div>
                    <div className='flex flex-col mr-[48px] lg:hidden'>
                        <h1 className='text-[#FAFAFA] text-[20px] font-semibold mb-[10px] '>Follow Us</h1>

                        <div className='flex flex-row gap-[8px] lg:hidden'>
                            <Link href="https://x.com/tweeter?lang=en"> <Image
                                src={mobileTweeter}
                                width={21}
                                height={21}
                                className='bg-black'
                                alt='footer twitter icon'
                            /></Link>
                            <Link href="https://www.youtube.com/"><Image
                                src={mobileYoutube}
                                width={21}
                                height={21}
                                alt='footer youtube icon'
                            /></Link>
                            <Link href="https://www.instagram.com/"><Image
                                src={mobileInsta}
                                width={21}
                                height={21}
                                alt='footer instagram icon'
                            /></Link>
                            <Link href="https://www.linkedin.com/"><Image
                                src={mobileLinkedin}
                                width={21}
                                height={21}
                                alt='footer linkedin icon'
                            /></Link>
                            <Link href="https://web.facebook.com/?_rdc=1&_rdr"><Image
                                src={mobileFacebook}
                                width={21}
                                height={21}
                                alt='footer facebook icon'
                            /></Link>
                        </div> 
                    </div>
                </div>
                <div className="hidden  lg:flex flex-col lg:w-[21%]">
                    <h1 className='font-semibold text-[20px] text-[#FAFAFA] lg:mb-[4px]'>Sign Up For Newsletter</h1>
                    <div className='relative'>
                        <input
                            className=' w-full rounded-[5px] bg-[#E2E8F0]  py-[10px] px-[4px] w-full mt-[4px] text-[14px] font-normal text-[#20382B]'
                            placeholder='Enter Email'

                        />
                        <button className='rounded-[6px] py-[6px] px-[16px] bg-[#F97316] absolute right-[3px] top-[7px] text-[#FAFAFA]'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className=' lg:flex border-[1px] border-solid border-[#FAFAFA] w-full'></div>
            <section className='px-[24px] lg:flex flex-row w-full px-[120px] pt-[20px] p -[62px] justify-between'>
                <div className='hidden lg:flex flex-row gap-[3px]'>

                    <Link href="https://x.com/tweeter?lang=en"> <Image
                        src={twitterLogo}
                        width={40}
                        height={40}
                        alt='footer twitter icon'
                    /></Link>
                    <Link href="https://www.youtube.com/"><Image
                        src={youtubeLogo}
                        width={40}
                        height={40}
                        alt='footer youtube icon'
                    /></Link>
                    <Link href="https://www.instagram.com/"><Image
                        src={instaLogo}
                        width={40}
                        height={40}
                        alt='footer instagram icon'
                    /></Link>
                    <Link href="https://www.linkedin.com/"><Image
                        src={linkendinLogo}
                        width={40}
                        height={40}
                        alt='footer linkedin icon'
                    /></Link>
                    <Link href="https://web.facebook.com/?_rdc=1&_rdr"><Image
                        src={facebookLogo}
                        width={40}
                        height={40}
                        alt='footer facebook icon'
                    /></Link>
                </div>
                <div className='flex flex-row items-center justify-center lg:flex flex-row items-center'>
                    <Image
                        src={copyrightImg}
                        width={40}
                        height={40}
                        alt=''
                    />
                    <p className='font-semibold text-[16px] text-[#CBD5E1]'>2024 All Rights Reserved</p>
                </div>
                <div className='hidden lg:flex flex-row gap-[13px]'>
                    <Link href="" className='font-medium text-[14px] text-[#FAFAFA]'>Privacy Policy</Link>
                    <Link href="" className='font-medium text-[14px] text-[#FAFAFA]'>Terms of Use</Link>
                </div>
            </section>
        </footer>
    )
}

export default Footer
