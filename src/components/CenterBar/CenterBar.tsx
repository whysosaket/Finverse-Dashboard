import Transaction from "./Transaction"


const CenterBar = () => {
  return (
    <div className="px-8 py-12">
        <h1 className="text-3xl">Dashboard</h1>
        <Transaction />
        <Transaction />
    </div>
  )
}

export default CenterBar