import Profile from "./Profile"
import Man1 from "../../../assets/man1.jpg";
import Man2 from "../../../assets/man2.avif";
import Man3 from "../../../assets/man3.jpeg";
import Create from "./Create";

const SendMoney = () => {
  return (
    <div className="mt-12">
        <h1 className="text-xl">Send Money To</h1>
        <div className="flex gap-2">
            <Create />
            <Profile name="Anna A." Image={Man1} />
            <Profile name="Anna A." Image={Man2} />
            <Profile name="Anna A." Image={Man3} />
        </div>
    </div>
  )
}

export default SendMoney