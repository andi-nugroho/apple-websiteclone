import { navLists } from "../constants"
import { appleImg, bagImg } from "../utils"
import { searchImg } from "./../utils/index"

const Navbar = () => {
  return (
    <header className=" w-full py-4 sm:px-10 px-5 flex justify-between items-center">
      <nav className=" flex max-sm:w-full  max-sm:screen-max-width md:mx-auto md:gap-14 items-center">
        <img
          className=" cursor-pointer md:w-[13px] md:h-[17px] w-[18px] h-[22px]"
          src={appleImg}
          alt="Apple"
        />
        <div className=" flex flex-1 gap-10 justify-center max-sm:hidden ">
          {navLists.map((item) => (
            <div
              key={item}
              className="  text-[0.78rem] cursor-pointer text-gray hover:text-white transition-all"
            >
              {item}
            </div>
          ))}
        </div>
        <div className=" flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img
            className=" cursor-pointer md:size-[14px] size-[18px]"
            src={searchImg}
            alt="search"
          />
          <img
            className=" cursor-pointer md:size-[14px] size-[18px]"
            src={bagImg}
            alt="bag"
          />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
