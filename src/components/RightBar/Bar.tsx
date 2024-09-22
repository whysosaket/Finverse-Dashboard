import Balance from "./Balance"
import Card from "./Cards/Card"
import TopBar from "./TopBar"


const Bar = () => {
  return (
    <div className="px-4">
        <TopBar />
        <Balance />
        <hr />
        <Card />
    </div>
  )
}

export default Bar