

const Profile = (props: {name: string, Image: string}) => {
  return (
    <div className="shadow-black/10 shadow-lg w-20 h-24 border border-dotted rounded-lg p-3 flex flex-col align-middle justify-center">
        <div className="w-12 h-12 overflow-hidden rounded-lg">
            <img src={props.Image} alt="" />
        </div>
        <h1 className="text-center text-xs mt-2 text-gray-500">{props.name}</h1>
    </div>
  )
}

export default Profile