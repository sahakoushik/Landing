import React from 'react'

const OpeningTime = () => {
  return (
    <>
        <div style={{ background: "#e0dcca" }} className="pb-80 pt-20 2xl:px-48 xl:24 lg:px-16 md:px-12 sm:px-8">
            <div className="text-center font-sm text-3xl md:text-5xl">
                <div className="text-xl md:text-3xl font-bold">Opening Hours</div>
            </div>
            <div className="text-center font-sm text-md">
                <div className="font-xl py-3">Sunday 17:30 to 21:30</div>
                <div className="font-xl py-3">Monday 17:30 to 21:30</div>
                <div className="font-xl py-3">Tuesday 17:30 to 21:30</div>
                <div className="font-xl py-3">Wednesday 17:30 to 21:30</div>
                <div className="font-xl py-3">Thursday 17:30 to 21:30</div>
                <div className="font-xl py-3">Friday 17:30 to 22:00</div>
                <div className="font-large py-3">Saturday 17:30 to 22:00</div>
            </div>
            <div className="text-center font-sm text-3xl md:text-5xl pt-8">
                <div className="text-xl md:text-3xl font-bold">Address</div>
            </div>
            <div className="text-center font-sm text-md">
                <div className="font-xl py-3">110 Cowley Rd, Oxford OX4 1JE, United Kingdom</div>
            </div>
            {/* <div className="text-center font-sm text-3xl md:text-5xl pt-8">
                <div className="text-xl md:text-3xl font-bold">Phone</div>
            </div>
            <div className="text-center font-sm text-md">
                <div class="font-xl py-3">01865726728</div>
            </div> */}
        </div>
        <div style={{ marginTop: "-320px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240">
                <path
                    fill="#fff"
                    fill-opacity="1"
                    d="M0,160L30,149.3C60,139,120,117,180,101.3C240,85,300,75,360,85.3C420,96,480,128,540,149.3C600,171,660,181,720,160C780,139,840,85,900,85.3C960,85,1020,139,1080,181.3C1140,224,1200,256,1260,224C1320,192,1380,96,1410,48L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>

            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240"><path fill="#fff" fill-opacity="1" d="M0,160L30,149.3C60,139,120,117,180,101.3C240,85,300,75,360,85.3C420,96,480,128,540,149.3C600,171,660,181,720,160C780,139,840,85,900,85.3C960,85,1020,139,1080,181.3C1140,224,1200,256,1260,224C1320,192,1380,96,1410,48L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg> */}
        </div>
    </>
  )
}

export default OpeningTime