import { IoCalendarOutline, IoSearch } from "react-icons/io5";
import Table from "./Table";


const Transaction = () => {
  return (
    <div>
        <div className="flex justify-between mt-6 px-5">
            <h1 className="text-xl">Transactions</h1>
            <div className="flex gap-3 text-gray-500">
                <IoSearch size={25} />
                <IoCalendarOutline size={25} />
            </div>
        </div>
        <Table />
    </div>
  )
}

export default Transaction