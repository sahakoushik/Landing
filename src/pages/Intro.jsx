import React from 'react'
import landingImg from '../assets/images/m1.png'
const Intro = () => {
  return (
    <>
        <div className='flex flex-col lg:flex-row px-4 items-center pt-24 md:pt-32 2xl:px-48 xl:24 lg:px-16 md:px-12 sm:px-8'>
                <div className='basis-1/3 mb-16 lg:mb-0'>
                    <div className="text-left font-sm text-3xl md:text-5xl">
                        <div className='text-pink-500 font-bold'>Majliss</div> <br />
                        <div className="font-medium">Indian restaurant and takeaway</div>
                    </div>
                    <div className="text-left text-md py-8" >
                        Majliss Indian Restaurant & Takeaway. Located in the heart of Oxford. Majliss is one of the oldest Indian restaurants in Oxfordshire; it has been proudly serving the people of Oxford with delicious indian, asian, bangladeshi cuisines.
                    </div>
                    <div>
                        <div className="text-left font-sm text-3xl md:text-5xl">
                            <div className='text-pink-500 font-bold'>20% Off</div>
                        </div>
                        <div className="text-left text-md py-2" >
                            Your first order from our website.
                        </div>
                        <div className='absolute py-4'>
                            <a href="https://www.order.majliss.co.uk" className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 cursor-pointer">
                                Order Online
                            </a>
                        </div>
                    </div>

                </div>

                <div className="basis-1/2 grow" >
                    <img className="max-w-full h-auto ml-auto rotationClass" src={landingImg} alt="..." />
                </div>
        </div>

        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240"><path fill="#F3F4F6" fill-opacity="1" d="M0,160L30,149.3C60,139,120,117,180,101.3C240,85,300,75,360,85.3C420,96,480,128,540,149.3C600,171,660,181,720,160C780,139,840,85,900,85.3C960,85,1020,139,1080,181.3C1140,224,1200,256,1260,224C1320,192,1380,96,1410,48L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240"><path fill="#e0dcca" fill-opacity="1" d="M0,160L30,149.3C60,139,120,117,180,101.3C240,85,300,75,360,85.3C420,96,480,128,540,149.3C600,171,660,181,720,160C780,139,840,85,900,85.3C960,85,1020,139,1080,181.3C1140,224,1200,256,1260,224C1320,192,1380,96,1410,48L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>

     </>
    
    )
}

export default Intro