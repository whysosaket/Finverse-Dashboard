import ApexChart from "./ApexChart"
import Transaction from "./Transaction"


const CenterBar = () => {
  return (
    <div className="px-2 md:px-8 pt-4">
        <h1 className="text-3xl ml-2 md:ml-0">Dashboard</h1>
        <ApexChart />
        <Transaction />
    </div>
  )
}

export default CenterBar