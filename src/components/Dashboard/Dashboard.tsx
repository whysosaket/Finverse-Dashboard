import { RxDashboard } from "react-icons/rx";
import { LiaCreditCardSolid } from "react-icons/lia";
import { LuFileSpreadsheet } from "react-icons/lu";
import { TbChartPie } from "react-icons/tb";
import { AiOutlineBarChart } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import { HiOutlineSupport } from "react-icons/hi";
import { LuGlobe } from "react-icons/lu";
import Icon from "../../assets/icon.jpg";

import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <>
      <motion.div
        initial={{ y: -200, opacity: 0, scale: 1 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0, delay: 0 }}
        className="a flex justify-between align-middle px-4 md:hidden"
      >
        <div className="h-12 w-12">
          <img src={Icon} className="w-full rotate-45" />
        </div>
        <h1 className="my-auto font-gowun text-xl">FINVERSE</h1>
        <GiSettingsKnobs size={25} className="my-auto" />
      </motion.div>
      <motion.div
        initial={{ x: -200, opacity: 0, scale: 1 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0, delay: 0.1 }}
        className="a px-4 h-screen py-8 md:flex flex-col justify-between align-middle hidden"
      >
        <div className="flex flex-col gap-4">
          <div className="h-12 w-12">
            <img src={Icon} className="w-full rotate-45" />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="flex gap-1 justify-start align-middle text-gray-800">
              <RxDashboard size={20} className="my-auto" />
              Dashboard
            </h4>
            <h4 className="flex gap-1 justify-start align-middle text-gray-800">
              <LiaCreditCardSolid size={20} className="my-auto" />
              Cards
            </h4>
            <h4 className="flex gap-1 justify-start align-middle text-gray-800">
              <LuFileSpreadsheet size={20} className="my-auto" />
              Payments
            </h4>
            <h4 className="flex gap-1 justify-start align-middle text-gray-800">
              <TbChartPie size={20} className="my-auto" />
              Statistics
            </h4>
            <h4 className="flex gap-1 justify-start align-middle text-gray-800">
              <AiOutlineBarChart size={20} className="my-auto" />
              Investments
            </h4>
            <h4 className="flex gap-1 justify-start align-middle text-gray-800">
              <GiSettingsKnobs size={20} className="my-auto" />
              Settings
            </h4>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="flex gap-1 justify-start align-middle text-gray-800">
            <HiOutlineSupport size={20} className="my-auto" />
            Support
          </h4>
          <h4 className="flex gap-1 justify-start align-middle text-gray-800">
            <LuGlobe size={20} className="my-auto" />
            Community
          </h4>
        </div>
      </motion.div>
    </>
  );
};

export default Dashboard;
