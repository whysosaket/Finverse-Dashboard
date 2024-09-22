import CenterBar from "./components/CenterBar/CenterBar";
import Bar from "./components/RightBar/Bar";

function App() {


  return (
    <div className="flex font-inter">
      <div className="w-2/12 min-h-screen bg-red-300">
asd
      </div>
      <div className="w-7/12 min-h-screen">
        <CenterBar />
      </div>
      <div className="w-3/12 min-h-screen bg-gray-100/50">
        <Bar />
      </div>
    </div>
  )
}

export default App
