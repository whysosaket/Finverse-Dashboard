import { RxDashboard } from "react-icons/rx";
import { LiaCreditCardSolid } from "react-icons/lia";
import { LuFileSpreadsheet } from "react-icons/lu";
import { TbChartPie } from "react-icons/tb";
import { AiOutlineBarChart } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import { HiOutlineSupport } from "react-icons/hi";
import { LuGlobe } from "react-icons/lu";
import Icon from "../../assets/icon.jpg";

const Dashboard = () => {
  return (
    <div className="px-4 h-screen py-8 flex flex-col justify-between align-middle">
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
    </div>
  );
};

export default Dashboard;
