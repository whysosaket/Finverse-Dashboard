import { useEffect, useState } from "react";
import CenterBar from "./components/CenterBar/CenterBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Bar from "./components/RightBar/Bar";
import Loading from "./components/Loading";
import Hireme from "./components/Hireme";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 1000);
  }, []);

  return loading ? (
    <>
      <Loading />
      <div className="opacity-0 w-1 h-1 overflow-hidden">
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
      </div>
    </>
  ) : (
    <div className="flex font-inter">
      <Hireme />
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
  );
}

export default App;
