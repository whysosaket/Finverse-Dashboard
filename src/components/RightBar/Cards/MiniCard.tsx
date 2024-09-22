const MiniCard = () => {
  return (
    <div className="my-8 md:my-auto flex justify-between px-6 bg-gray-200/60 rounded-2xl shadow-black/10 shadow-lg">
        <h1 className="my-auto">$21,000.00</h1>
        <div className="flex justify-center align-middle">
            <h1 className="my-auto mr-4 text-black/60">**** 4423</h1>
            <img className="w-14 h-14 my-auto" src="https://i.imgur.com/bbPHJVe.png" />
        </div>
    </div>
  )
}

export default MiniCard