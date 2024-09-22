import CenterBar from "./components/CenterBar/CenterBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Bar from "./components/RightBar/Bar";

function App() {


  return (
    <div className="flex font-inter">
      <div className="w-2/12 min-h-screen bg-white">
        <Dashboard />
      </div>
      <div className="w-7/12 min-h-screen bg-gray-50">
        <CenterBar />
      </div>
      <div className="w-3/12 min-h-screen bg-gray-100/80">
        <Bar />
      </div>
    </div>
  )
}

export default App
