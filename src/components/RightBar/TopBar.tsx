import { IoSearch } from "react-icons/io5";
import { GoBellFill } from "react-icons/go";
import Man from "../../assets/man.avif";


const TopBar = () => {
  return (
    <div className="flex justify-end align-middle gap-4 py-2">
        <IoSearch size={25} className="text-gray-400 my-auto" />
        <GoBellFill size={25} className="text-gray-400 my-auto" />
        <div className="w-10 h-10 rounded-full my-auto overflow-hidden">
            <img src={Man} className=" my-auto" />
        </div>
    </div>
  )
}

export default TopBar