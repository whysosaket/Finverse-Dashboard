import MiniCard from "./MiniCard";
import Visa from "./Visa"
import { FaPlus } from "react-icons/fa6";

const Card = () => {
  return (
    <div className="mt-16">
        <div className="flex justify-between align-middle">
            <h1 className="text-xl">Your Cards</h1>
            <div className="my-auto flex gap-3 align-middle">
                <h1 className="text-[12px] text-p2 my-auto">Add New</h1>
                <div className="my-auto border border-gray-300 p-1 rounded-md">
                    <FaPlus size={14} />
                </div>
            </div>
        </div>
        <Visa />
        <MiniCard />
    </div>
  )
}

export default Card