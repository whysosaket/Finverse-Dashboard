import { CgArrowBottomLeft, CgArrowTopRight } from "react-icons/cg";

const Balance = () => {
  return (
    <div>
        <h1 className="text-xl">Total Balance</h1>
        <h1 className="text-3xl font-semibold my-3">$27,000.000</h1>
        <div className="flex mt-5 mb-4">
            <div className="w-1/2 flex">
                <div className="bg-gray-200 h-10 w-10 rounded-full flex justify-center">
                    <CgArrowTopRight size={20} className="my-auto" />
                </div>
                <div className="ml-3">
                    <div className="text-p2 text-[12px]">Income</div>
                    <div className="text-black">$25,445.00</div>
                </div>
            </div>
            
            <div className="w-1/2 flex">
                <div className="bg-gray-200 h-10 w-10 rounded-full flex justify-center">
                    <CgArrowBottomLeft size={20} className="my-auto" />
                </div>
                <div className="ml-3">
                    <div className="text-p2 text-[12px]">Expenses</div>
                    <div className="text-black">$11,320.00</div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Balance