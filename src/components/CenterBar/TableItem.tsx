const TableItem = (props: {date: string, time: string, icon: string, iconName: string, cat: string, amount: string}) => {
  return (
    <>
      <tr className="hover:bg-gray-100 text-gray-500 text-xs">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
          {props.date}
          <h1>at {props.time}</h1>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm flex align-middle gap-2">
        <div className="w-8 h-8 bg-gray-200 flex justify-center align-middle overflow-hidden rounded-lg p-2">
            <img src={props.icon} alt="" className="m-auto" />
        </div>
        <span className="text-gray-800 font-semibold my-auto">{props.iconName}</span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm">
          {props.cat}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
          <div
            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
          >
            <span className="text-gray-800">{props.amount}.<span className="text-gray-500">00</span> </span>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableItem;
