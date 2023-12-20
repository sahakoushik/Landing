import React from 'react'
import Carousel from '../components/Carousel'

const Sliders = () => {
  return (
    <>
        <div className="text-center pt-12 md:pt-24 pt-8 md:pb-16 text-3xl md:text-5xl font-bold mb-8 px-4"> Gallery </div>
        <div className="lg:pb-24 pt-8 2xl:px-48 xl:24 lg:px-16 md:px-12 md:pb-36 sm:px-8 sm:pb-32">
            <Carousel/>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240">
					<path
						fill="#e0dcca"
						fill-opacity="1"
						d="M0,160L30,149.3C60,139,120,117,180,101.3C240,85,300,75,360,85.3C420,96,480,128,540,149.3C600,171,660,181,720,160C780,139,840,85,900,85.3C960,85,1020,139,1080,181.3C1140,224,1200,256,1260,224C1320,192,1380,96,1410,48L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
				</svg>
    </>
  )
}

export default Sliders