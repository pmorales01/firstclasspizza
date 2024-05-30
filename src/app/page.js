import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-red-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">First Class Pizza</h1>
          <nav>
            <a href="#menu" className="mx-2 hover:underline">Menu</a>
            <a href="#about" className="mx-2 hover:underline">About</a>
            <a href="#contact" className="mx-2 hover:underline">Contact</a>
          </nav>
        </div>
      </header>
      {/* banner */}
      <section id="banner-home" className="bg-gray-100 flex-1 flex items-center justify-center text-center p-6">
        <div className="banner-content h-[400px] flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to First Class Pizza</h2>
          <p className="text-xl mb-6">Delicious, fresh, and hot pizzas delivered to your doorstep!</p>
          <button className="bg-red-600 text-white px-6 py-2 rounded">Order Now</button>
        </div>
      </section>
      {/* set location */}
      <section className="flex flex-col items-center justify-center py-6 bg-white shadow-lg rounded-lg mt-6 mx-4">
        <div className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 11 6 11s6-5.75 6-11c0-3.314-2.686-6-6-6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
          <span className="ml-2 text-lg font-semibold">Set location: Find your store to see local prices</span>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 border-2 border-red-600 rounded-md">
            <span className="font-semibold">CARRYOUT</span>
          </button>
          <button className="flex items-center px-4 py-2 border-2 border-red-600 rounded-md">
            <span className="font-semibold">DELIVERY</span>
          </button>
        </div>
      </section>
      {/* Featured Deals Section */}
      <section className="container mx-auto my-12 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Featured</h2>
          <a href="#more" className="text-red-600 font-semibold hover:underline">SEE MORE</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="bg-[url('pepperoni.jpeg')] h-24 md:h-80 bg-center bg-no-repeat bg-cover relative overflow-hidden rounded-lg shadow-lg col-span-1 md:col-span-2">
            <div className="absolute bottom-0 left-0 bg-white text-black p-4 w-full flex flex-row justify-between">
              <div>
                <h3 className="text-lg font-semibold">$8 Large Pepperoni</h3>
                <p className="text-sm">Delivery or carryout</p>
              </div>
              <button href="#order" className="hover:bg-gray-200 rounded-full p-2 text-red-600 font-bold text-white self-end">   
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="bg-[url('supreme.jpeg')] h-24 md:h-80 bg-center bg-no-repeat bg-cover relative overflow-hidden rounded-lg shadow-lg col-span-1 md:col-span-2">
            <div className="absolute bottom-0 left-0 bg-white text-black p-4 w-full flex flex-row justify-between">
              <div>
                <h3 className="text-lg font-semibold">$10 Large Supreme</h3>
                <p className="text-sm">Delivery or carryout</p>
              </div>
              <button href="#order" className="hover:bg-gray-200 rounded-full p-2 text-red-600 font-bold text-white self-end">   
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="bg-[url('wings.jpg')] h-24 md:h-80 bg-center bg-no-repeat bg-cover relative overflow-hidden rounded-lg shadow-lg col-span-1 md:col-span-2">
            <div className="absolute bottom-0 left-0 bg-white text-black p-4 w-full flex flex-row justify-between">
              <div>
                <h3 className="text-lg font-semibold">Sides Starting At $5</h3>
                <p className="text-sm">Delivery or carryout</p>
              </div>
              <button href="#order" className="hover:bg-gray-200 rounded-full p-2 text-red-600 font-bold text-white self-end">   
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="bg-[url('breadstick_wings_combo.jpeg')] h-24 md:h-80 bg-center bg-no-repeat bg-cover relative overflow-hidden relative overflow-hidden rounded-lg shadow-lg col-span-1 md:col-span-3">
            <div className="absolute bottom-0 left-0 bg-white text-black p-4 w-full flex flex-row justify-between">
              <div>
                <h3 className="text-lg font-semibold">$12 Breadsticks and Wings</h3>
                <p className="text-sm">Delivery or carryout</p>
              </div>
              <button href="#order" className="hover:bg-gray-200 rounded-full p-2 text-red-600 font-bold text-white self-end">   
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="bg-[url('wings_fries_combo.jpeg')] h-24 md:h-80 bg-left-bottom bg-no-repeat bg-cover relative overflow-hidden rounded-lg shadow-lg col-span-1 md:col-span-3">
            <div className="absolute bottom-0 left-0 bg-white text-black p-4 w-full flex flex-row justify-between">
              <div>
                <h3 className="text-lg font-semibold">$10 Wings and Fries</h3>
                <p className="text-sm">Delivery or carryout</p>
              </div>
              <button href="#order" className="hover:bg-gray-200 rounded-full p-2 text-red-600 font-bold text-white self-end">   
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Menu Section */}
      <section id="menu" className="container mx-auto my-12 p-6">
        <h3 className="text-3xl font-bold text-center mb-8">Our Menu</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-4">Classic Margherita</h4>
            <p>A timeless classic with fresh tomatoes, mozzarella, and basil.</p>
            <p className="mt-2 font-bold">$12.99</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-4">Pepperoni Feast</h4>
            <p>Loaded with pepperoni slices and extra cheese for the meat lover.</p>
            <p className="mt-2 font-bold">$14.99</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-4">Veggie Delight</h4>
            <p>A colorful mix of bell peppers, onions, mushrooms, and olives.</p>
            <p className="mt-2 font-bold">$13.99</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-12">
        <div className="container mx-auto p-6 text-center">
          <h3 className="text-3xl font-bold mb-6">About Us</h3>
          <p>At First Class Pizza, we pride ourselves on serving the freshest and most delicious pizzas. Our ingredients are locally sourced, and our dough is made fresh daily.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto my-12 p-6">
        <h3 className="text-3xl font-bold text-center mb-6">Contact Us</h3>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea className="w-full p-2 border rounded resize-none" rows="4"></textarea>
          </div>
          <button className="bg-red-600 text-white px-6 py-2 rounded">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white p-4">
        <div className="container mx-auto text-center">
          &copy; 2024 First Class Pizza. All rights reserved.
        </div>
      </footer>
    </div>
  )
}