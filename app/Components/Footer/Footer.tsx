import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-[#336699] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold mb-2">Subscribe To Our Newsletter</h4>
              <p className="text-gray-100">Get all the latest information on Events, Sales and Offers.</p>
            </div>
            <form className="flex gap-2">
              <input type="email" placeholder="Your E-mail Address" className="flex-1 px-4 py-2 bg-white rounded text-black" />
              <button className="bg-black px-6 py-2 rounded font-semibold hover:bg-gray-800 transition">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="about-us.html" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Team Member</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Career</a></li>
              <li><a href="contact-us.html" className="hover:text-blue-400 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Affiliate</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Order History</a></li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="font-bold text-lg mb-4">My Account</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition">Track My Order</a></li>
              <li><a href="cart.html" className="hover:text-blue-400 transition">View Cart</a></li>
              <li><a href="login.html" className="hover:text-blue-400 transition">Sign In</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Help</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">My Wishlist</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition">Payment Methods</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Money-back guarantee!</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Product Returns</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Support Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Shipping</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Terms and Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Got Question?</h3>
            <p className="text-gray-400 mb-2">Call us 24/7</p>
            <a href="tel:18005707777" className="text-blue-400 text-lg font-bold hover:text-blue-300 transition">1-800-570-7777</a>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-blue-400 transition">f</a>
              <a href="#" className="hover:text-blue-400 transition">𝕏</a>
              <a href="#" className="hover:text-blue-400 transition">📷</a>
              <a href="#" className="hover:text-blue-400 transition">▶</a>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 py-8 border-t border-gray-700">
          <div>
            <h6 className="font-semibold mb-2 text-sm">Consumer Electric</h6>
            <ul className="text-sm text-gray-400 space-y-1">
              <li><a href="#" className="hover:text-blue-400">TV Television</a></li>
              <li><a href="#" className="hover:text-blue-400">Air Condition</a></li>
              <li><a href="#" className="hover:text-blue-400">Refrigerator</a></li>
              <li><a href="#" className="hover:text-blue-400">Washing Machine</a></li>
              <li><a href="#" className="hover:text-blue-400">Audio Speaker</a></li>
              <li><a href="#" className="hover:text-blue-400">Security Camera</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-2 text-sm">Clothing &amp; Apparel</h6>
            <ul className="text-sm text-gray-400 space-y-1">
              <li><a href="#" className="hover:text-blue-400">Men's T-shirt</a></li>
              <li><a href="#" className="hover:text-blue-400">Dresses</a></li>
              <li><a href="#" className="hover:text-blue-400">Sneakers</a></li>
              <li><a href="#" className="hover:text-blue-400">Leather Backpack</a></li>
              <li><a href="#" className="hover:text-blue-400">Watches</a></li>
              <li><a href="#" className="hover:text-blue-400">Jeans</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-2 text-sm">Home, Garden &amp; Kitchen</h6>
            <ul className="text-sm text-gray-400 space-y-1">
              <li><a href="#" className="hover:text-blue-400">Sofa</a></li>
              <li><a href="#" className="hover:text-blue-400">Chair</a></li>
              <li><a href="#" className="hover:text-blue-400">Bed Room</a></li>
              <li><a href="#" className="hover:text-blue-400">Living Room</a></li>
              <li><a href="#" className="hover:text-blue-400">Cookware</a></li>
              <li><a href="#" className="hover:text-blue-400">Blender</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-2 text-sm">Health &amp; Beauty</h6>
            <ul className="text-sm text-gray-400 space-y-1">
              <li><a href="#" className="hover:text-blue-400">Skin Care</a></li>
              <li><a href="#" className="hover:text-blue-400">Body Shower</a></li>
              <li><a href="#" className="hover:text-blue-400">Makeup</a></li>
              <li><a href="#" className="hover:text-blue-400">Hair Care</a></li>
              <li><a href="#" className="hover:text-blue-400">Lipstick</a></li>
              <li><a href="#" className="hover:text-blue-400">Perfume</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-2 text-sm">Jewelry &amp; Watches</h6>
            <ul className="text-sm text-gray-400 space-y-1">
              <li><a href="#" className="hover:text-blue-400">Necklace</a></li>
              <li><a href="#" className="hover:text-blue-400">Pendant</a></li>
              <li><a href="#" className="hover:text-blue-400">Diamond Ring</a></li>
              <li><a href="#" className="hover:text-blue-400">Silver Earing</a></li>
              <li><a href="#" className="hover:text-blue-400">Rolex</a></li>
              <li><a href="#" className="hover:text-blue-400">Gucci</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-2 text-sm">Computer &amp; Tech</h6>
            <ul className="text-sm text-gray-400 space-y-1">
              <li><a href="#" className="hover:text-blue-400">Laptop</a></li>
              <li><a href="#" className="hover:text-blue-400">iMac</a></li>
              <li><a href="#" className="hover:text-blue-400">Smartphone</a></li>
              <li><a href="#" className="hover:text-blue-400">Tablet</a></li>
              <li><a href="#" className="hover:text-blue-400">Drone</a></li>
              <li><a href="#" className="hover:text-blue-400">Game Controller</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">Copyright © 2025 E-Commerce Store. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">We accept safe payments:</span>
            <img src="assets/images/payment.png" alt="payment methods" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
      
    </>
  )
}

export default Footer
