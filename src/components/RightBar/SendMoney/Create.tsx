import { FaPlus } from "react-icons/fa6"


const Create = () => {
  return (
    <div className="w-20 h-24 border border-dotted rounded-lg p-3 flex flex-col align-middle justify-center">
        <div className="w-12 h-12 flex align-middle overflow-hidden rounded-lg bg-gray-200/80">
            <FaPlus className="m-auto" />
        </div>
        <h1 className="text-center text-xs mt-2 text-gray-500">Create</h1>
    </div>
  )
}

export default Create