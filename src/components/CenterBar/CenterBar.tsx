import ApexChart from "./ApexChart"
import Transaction from "./Transaction"


const CenterBar = () => {
  return (
    <div className="px-8 pt-4">
        <h1 className="text-3xl">Dashboard</h1>
        <ApexChart />
        <Transaction />
    </div>
  )
}

export default CenterBar