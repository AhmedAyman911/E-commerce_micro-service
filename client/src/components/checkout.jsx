export default function Checkout() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex-col px-12 md:px-32 py-2">
        <p className="font-bold text-black text-3xl">Checkout</p>
        <hr className="border-t-2 border-black-300 mt-2" />
        <div className="flex justify-between  py-4">
          <div className="flex">
            <img
              className="w-24 h-24 object-cover rounded-md border border-gray-300 p-1"
              src="https://media.almostmakesperfect.com/wp-content/uploads/2021/02/16135359/lesgamines-e1613749471710.jpg"
              alt="item image"
            />
            <div className="flex-col">
              <p className="text-md text-black px-2 mt-10"> Product name</p>
              <p className="text-sm text-gray-500 px-2"> Color</p>
            </div>
          </div>
          <p className="text-md text-black mt-10 ml-64"> 123.99 <span className="text-green-300">$</span></p>
        </div>
        <hr className="border-t-2 border-black-300 mt-2" />
        <div className="flex justify-between">
          <p className="text-md font-bold text-black mt-4"> Total</p>
          <p className="text-md text-black font-bold mt-4"> 123.99 <span className="text-green-300">$</span></p>
        </div>
        <button
          onClick={() => window.open("https://drive.google.com/file/d/12p7BvtC3QGQUe6UQ5O1BpehJjccMkCF_/view?usp=sharing", "_blank")}
          className="bg-black w-1/3 md:w-1/4 my-4 text-white font-bold py-4 rounded-lg shadow-md">
          Checkout
        </button>
      </div>
    </div>
  )
}