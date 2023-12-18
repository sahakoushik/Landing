import logo from '../assets/images/house.png'
const Navbar = () => {
  return (
    <div className='flex flex-row h-6 pt-8 px-4 2xl:px-48 xl:24 lg:px-16 md:px-12 sm:px-8 '>
        <div className="flex-1">
            <img className='w-20' alt="majliss.." src={logo} />
        </div>
        <div>
            <a href="https://www.order.majliss.co.uk" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 cursor-pointer">
                Order Online
            </a>
        </div>

        {/* <div className="basis-1/2">03</div> */}
    </div>
  )
}

export default Navbar