import { IoCalendarOutline, IoSearch } from "react-icons/io5";
import Table from "./Table";
import {motion} from "framer-motion";


const Transaction = () => {
  return (
    <motion.div
    initial={{ y: 200, opacity: 0, scale: 0.7 }}
    animate={{ y: 0, opacity: 1, scale: 1 }}
    transition={{ duration: 0, delay: 0.1 }}
    className="a"
    >
        <div className="flex justify-between mt-6 px-5">
            <h1 className="text-xl">Transactions</h1>
            <div className="flex gap-3 text-gray-500">
                <IoSearch size={25} />
                <IoCalendarOutline size={25} />
            </div>
        </div>
        <Table />
    </motion.div>
  )
}

export default Transaction