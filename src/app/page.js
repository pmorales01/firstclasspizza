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
        <div className="banner-content">
          <h2 className="text-4xl font-bold mb-4">Welcome to First Class Pizza</h2>
          <p className="text-xl mb-6">Delicious, fresh, and hot pizzas delivered to your doorstep!</p>
          <button className="bg-red-600 text-white px-6 py-2 rounded">Order Now</button>
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