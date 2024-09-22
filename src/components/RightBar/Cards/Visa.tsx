const Visa = () => {
  return (
    <>
        <div className="-ml-6">
  <div className="w-96 h-56 m-auto bg-black rounded-xl relative text-white shadow-2xl transition-transform transform scale-[0.85]">
    <img
      className="relative object-cover w-full h-full rounded-xl opacity-70"
      src="https://i.imgur.com/kGkSg1v.png"
    />
    <div className="w-full px-8 absolute top-8">
      <div className="flex justify-between">
        <div className="">
          <p className="font-light">Name</p>
          <p className="font-medium tracking-widest">Saket A</p>
        </div>
        <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
      </div>
      <div className="pt-1">
        <p className="font-light">Card Number</p>
        <p className="font-medium tracking-more-wider">4642 **** **** 7632</p>
      </div>
      <div className="pt-6 pr-6">
        <div className="flex justify-between">
          <div className="">
            <p className="font-light text-xs">Valid</p>
            <p className="font-medium tracking-wider text-sm">11/15</p>
          </div>
          <div className="">
            <p className="font-light text-xs">Expiry</p>
            <p className="font-medium tracking-wider text-sm">03/25</p>
          </div>
          <div className="">
            <p className="font-light text-xs">CVV</p>
            <p className="font-bold tracking-more-wider text-sm">···</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Visa