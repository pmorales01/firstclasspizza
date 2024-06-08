import Image from "next/image";
import pepperoniPic from './pepperoni.jpg'
import SupremePic from './supreme.jpg'
import WingsPic from './wings.jpg'
import PizzaFriesPic from './pizza_fries.jpg'
import FriesPic from './wings_fries_combo.jpg'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-red-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">First Class Pizza</h1>
          <nav>
            <a href="#menu" className="mx-2 hover:underline">Menu</a>
            <a href="#deals" className="mx-2 hover:underline">Deals</a>
          </nav>
        </div>
      </header>
      {/* banner */}
      <div id="banner-home" className="bg-gray-100 flex-1 flex items-center justify-center text-center">
        <div className="banner-content h-[400px] flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to First Class Pizza</h2>
          <p className="text-xl mb-6">Delicious, fresh, and hot pizzas delivered to your doorstep!</p>
          <button className="bg-red-600 text-white px-6 py-2 rounded">Order Now</button>
        </div>
      </div>
      <main className="mx-auto px-4">
        {/* set location */}
        <div className="flex flex-col items-center justify-center py-6 bg-white shadow-lg rounded-lg my-8 border-[1px] border-red-500">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 11 6 11s6-5.75 6-11c0-3.314-2.686-6-6-6z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
            <span className="ml-2 text-lg font-semibold max-md:text-base">Set location: Find your store to see local prices</span>
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 border-2 border-red-600 rounded-md hover:bg-red-100">
              <span className="font-semibold max-md:text-sm">CARRYOUT</span>
            </button>
            <button className="flex items-center px-4 py-2 border-2 border-red-600 rounded-md hover:bg-red-100">
              <span className="font-semibold max-md:text-sm">DELIVERY</span>
            </button>
          </div>
        </div>
        {/* Featured Deals Section */}
        <section className="flex flex-col container mx-auto my-6">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-fit mx-auto">
            <div className="w-full col-span-1 md:col-span-6 flex max-md:justify-between items-baseline">
              <h2 className="text-3xl lg:text-5xl font-bold">Featured</h2>
              <a href="#more" className="text-red-600 text-sm font-medium hover:underline ml-4">
                SEE MORE
              </a>
            </div>
            <div className="h-[132px] md:h-80 relative overflow-hidden rounded-lg shadow-lg col-span-1 md:col-span-2 md:max-w-80 flex max-md:flex-row md:flex-col">
              <div className="max-md:w-[162px] md:h-56">
                <Image className="max-md:rounded-l-lg md:rounded-t-lg h-full w-full object-cover" src={pepperoniPic} alt="Pepperoni Pizza"/>
              </div>
              <div className="bg-white text-black p-4 max-md:h-full w-full h-24 flex flex-row justify-between items-center">
                <div>
                  <h3 className="text-sm font-semibold">$8 Large Pepperoni</h3>
                  <p className="text-sm">Delivery or carryout</p>
                </div>
                <button href="#order" className="hover:bg-gray-200 rounded-full p-2 text-red-600 font-bold text-white">   
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="h-[132px] md:h-80 relative overflow-hidden rounded-lg shadow-lg col-span-1 md:col-span-2 md:max-w-80 flex max-md:flex-row md:flex-col">
              <div className="max-md:w-[162px] md:h-56">
                <Image className="max-md:rounded-l-lg md:rounded-t-lg h-full w-full object-cover" src={SupremePic} alt="Supreme Pizza"/>
              </div>
              <div className="bg-white text-black p-4 max-md:h-full w-full h-24 flex flex-row justify-between items-center">
                <div>
                  <h3 className="text-sm font-semibold">$10 Large Supreme</h3>
                  <p className="text-sm">Delivery or carryout</p>
                </div>
                <button href="#order" className="hover:bg-gray-200 rounded-full p-2 text-red-600 font-bold text-white">   
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="h-[132px] md:h-80 relative overflow-hidden rounded-lg shadow-lg col-span-1 md:col-span-2 md:max-w-80 flex max-md:flex-row md:flex-col">
              <div className="max-md:w-[162px] md:h-56">
                <Image className="max-md:rounded-l-lg md:rounded-t-lg h-full w-full object-cover" src={WingsPic} alt="Wings"/>
              </div>
              <div className="bg-white text-black p-4 max-md:h-full w-full h-24 flex flex-row justify-between items-center">
                <div>
                  <h3 className="text-sm font-semibold">Sides Starting At $5</h3>
                  <p className="text-sm">Delivery or carryout</p>
                </div>
                <button href="#order" className="hover:bg-gray-200 rounded-full p-2 text-red-600 font-bold text-white">   
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="h-[132px] md:h-80 relative overflow-hidden rounded-lg shadow-lg col-span-1 md:col-span-3 flex max-md:flex-row md:flex-col w-full">
              <div className="max-md:w-[162px] md:h-56">
                <Image className="max-md:rounded-l-lg md:rounded-t-lg h-full w-full object-cover" src={PizzaFriesPic} alt="Pizza and Fries Combo"/>
              </div>
              <div className="bg-white text-black p-4 max-md:h-full w-full h-24 flex flex-row justify-between items-center">
                <div>
                  <h3 className="text-sm font-semibold">$12 Pizza and Fries</h3>
                  <p className="text-sm">Delivery or carryout</p>
                </div>
                <button href="#order" className="hover:bg-gray-200 rounded-full p-2 text-red-600 font-bold text-white">   
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="h-[132px] md:h-80 relative overflow-hidden rounded-lg shadow-lg col-span-1 md:col-span-3 flex max-md:flex-row md:flex-col place-self-end w-full">
              <div className="max-md:w-[162px] md:h-56">
                <Image className="max-md:rounded-l-lg md:rounded-t-lg h-full w-full object-cover" src={FriesPic} alt="Fries and Wings Combo"/>
              </div>
              <div className="bg-white text-black p-4 max-md:h-full w-full h-24 flex flex-row justify-between items-center">
                <div>
                  <h3 className="text-sm font-semibold">$10 Wings and Fries</h3>
                  <p className="text-sm">Delivery or carryout</p>
                </div>
                <button href="#order" className="hover:bg-gray-200 rounded-full p-2 text-red-600 font-bold text-white">   
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-red-600 text-white p-4">
        <div className="container mx-auto text-center">
          &copy; 2024 First Class Pizza. All rights reserved.
        </div>
      </footer>
    </div>
  )
}