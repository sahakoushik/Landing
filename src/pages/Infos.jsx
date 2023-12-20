import React from 'react'
import halal from '../assets/images/halal.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faTruckFast, faClock } from "@fortawesome/free-solid-svg-icons";

const Infos = () => {
  return (
    <>
        <div className="bg-white pt-8 2xl:px-48 xl:24 lg:px-16 md:px-12 sm:px-8">
            <div className="text-center text-3xl md:text-5xl font-bold mb-8"> We care for our Customers</div>
            <div className="flex flex-col lg:flex-row text-left drop-shadow-2xl gap-4 bg-white border border-white-600 m-8 px-8 lg:px-24 py-10 lg:py-32transition ease-in-out delay-50'">
                <div className="flex flex-col flex-1 mb-8 lg:mb-0">
                    <div className="text-xl md:text-3xl font-bold">Halal</div>
                    <div className="px-4 md:px-8 pb-6 bg-white mb-8">
                        <img className="w-96 m-auto h-auto" src={halal} alt="..." />
                    </div>
                    <div className="text-lg md:text-xl mb-8 text-left">
                        We want to make sure we cater for everyone. To achieve this, our meat is Halal. Everyone can enjoy our food, safely knowing how their food is sourced.
                    </div>
                </div>
                <div className="flex flex-col flex-1 mb-8 lg:mb-0">
                    <div className="text-xl md:text-3xl font-bold">Discounts</div>
                    <div className="text-3xl md:text-8xl py-4 font-bold text-pink-500">20% off</div>
                    <div className="text-lg md:text-xl my-2 text-left">Your first order from our website.</div>
                    <div className="text-lg md:text-xl my-2 text-left text-gray-500">NB: The discount will be auto applied to qualifying orders on checkout</div>
                    <div className="my-4">
                        <a href="https://order.majliss.co.uk" className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 cursor-pointer">
                            Order Online
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center pt-12 md:pt-24 pt-8 md:pb-16 text-3xl md:text-5xl font-bold mb-8 px-4"> Delivery Info</div>
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1 text-left border border-white-600 m-8 px-8 py-8 transition ease-in-out delay-50 bg-gradient-to-r from-white to-white hover:cursor-pointer hover:border-pink-500 hover:drop-shadow-2xl hover:-translate-y-1 hover:scale-120'">
                    <div className="flex flex-row lg:flex-col items-start">
                        <FontAwesomeIcon className="block mb-4 md:mb-8 mr-4" icon={faTruckFast} color="#ec4899" size="2x" />
                        <a className=" decoration-green-500 font-medium text-xl md:text-2xl">Delivery Schedule</a>
                    </div>
                    <div className="text-lg md:text-xl my-4 md:my-8 text-left">
                        We offer home delivery 7 days a week from 5:30PM each day.
                    </div>
                    <div className="my-4">
                        <a className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 cursor-pointer">Order Online</a>
                    </div>
                </div>
                <div className="flex-1 text-left border border-white-600 m-8 px-8 py-8 transition ease-in-out delay-50 bg-gradient-to-r from-white to-white hover:cursor-pointer hover:border-pink-500 hover:drop-shadow-2xl hover:-translate-y-1  hover:scale-120'">
                    <div className="flex flex-row lg:flex-col items-start">
                        <FontAwesomeIcon className="block mb-4 md:mb-8 mr-4" icon={faMap} color="#ec4899" size="2x" />
                        <a className="decoration-green-500 font-medium text-xl md:text-2xl">Delivery Areas</a>
                    </div>
                    <div className="text-lg md:text-xl my-4 md:my-8 text-left">Free home delivery within a 3 mile radius.</div>
                    <div className="my-4">
                        <a href="https://order.majliss.co.uk" className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 cursor-pointer">
                            Order Online
                        </a>
                    </div>
                </div>
                <div className="flex-1 text-left border border-white-600 m-8 px-8 py-8 transition ease-in-out delay-50 bg-gradient-to-r from-white to-white hover:cursor-pointer hover:border-pink-500 hover:drop-shadow-2xl hover:-translate-y-1  hover:scale-120'">
                    <div className="flex flex-row lg:flex-col items-start">
                        <FontAwesomeIcon className="block mb-4 md:mb-8 mr-4" icon={faClock} color="#ec4899" size="2x" />
                        <a className=" decoration-green-500 font-medium text-xl md:text-2xl">Delivery Timings</a>
                    </div>
                    <div className="text-lg md:text-xl my-4 md:my-8 text-left">
                        Average delivery time is 25-45 mins. We will confirm expected delivery time upon receiving your order.
                    </div>
                    <div className="my-4">
                        <a href="https://order.majliss.co.uk" className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 cursor-pointer">
                            Order Online
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Infos