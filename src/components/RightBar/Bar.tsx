import Balance from "./Balance"
import Card from "./Cards/Card"
import SendMoney from "./SendMoney/SendMoney"
import TopBar from "./TopBar"
import {motion} from "framer-motion";

const Bar = () => {
  return (
    <div className="px-4">
        <motion.div
        initial={{ x: 200, opacity: 0, scale: 1 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0, delay: 0.1 }}
        className="a"
        >
            <TopBar />
        </motion.div>
        <motion.div
        initial={{ x: 200, opacity: 0, scale: 1 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0, delay: 0.2 }}
        className="a"
        >
            <Balance />
        </motion.div>
        <hr />
        <motion.div
        initial={{ x: 200, opacity: 0, scale: 1 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0, delay: 0.25 }}
        className="a"
        >
            <Card />
        </motion.div>
        
        <motion.div
        initial={{ x: 200, opacity: 0, scale: 1 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0, delay: 0.3 }}
        className="a"
        >
            <SendMoney />
        </motion.div>
    </div>
  )
}

export default Bar