import Balance from "./Balance"
import Card from "./Cards/Card"
import SendMoney from "./SendMoney/SendMoney"
import TopBar from "./TopBar"


const Bar = () => {
  return (
    <div className="px-4">
        <TopBar />
        <Balance />
        <hr />
        <Card />
        <SendMoney />
    </div>
  )
}

export default Bar