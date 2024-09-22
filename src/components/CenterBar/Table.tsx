import TableItem from "./TableItem";
import Dropbox from "../../assets/dropbox.png";
import Apple from "../../assets/apple.png";
import Netflix from "../../assets/netfix.webp";
import Gmail from "../../assets/gmail.jpg";


const Table = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Transaction Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <TableItem date="12 Feb, 2023" time="16:04" icon={Dropbox} iconName="Dropbox" cat="Subscription" amount="-$1,975"  />
                  <TableItem date="11 Feb, 2023" time="09:05" icon={Gmail} iconName="From Anna Smith" cat="Receiving" amount="+$250"  />
                  <TableItem date="09 Feb, 2023" time="18:00" icon={Netflix} iconName="Netflix" cat="Entertainment" amount="-$560"  />
                  <TableItem date="28 Jan, 2023" time="13:32" icon={Apple} iconName="Apple" cat="Subscription" amount="-$2,300"  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
