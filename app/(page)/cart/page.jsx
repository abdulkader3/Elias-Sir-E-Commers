// Client-Side Rendering (CSR)
// This page displays the user's shopping cart items
// It allows users to view, modify quantities, remove items, and see the total price
// It uses the CartContext to manage cart state

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../context/CartContext.jsx';
import { FaTrash, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
            <p className="text-gray-600">Your cart is empty</p>
          </div>

          {/* Empty Cart State */}
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <FaCheckCircle className="text-6xl text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Your Cart is Empty
            </h2>
            <p className="text-gray-600 mb-6">
              Add some products to your cart to get started!
            </p>
            <Link
              href="/shop"
              className="flex gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold items-center w-fit"
            >
              <FaArrowLeft />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const totalPrice = getTotalPrice();
  const subtotal = totalPrice;
  const shippingCost = subtotal > 50 ? 0 : 10;
  const tax = subtotal * 0.1;
  const finalTotal = subtotal + shippingCost + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">
            You have {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''} in
            your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-4 bg-gray-50 border-b border-gray-200 p-4 font-semibold text-gray-900 text-sm">
                <div className="col-span-2">Product</div>
                <div className="text-center">Price</div>
                <div className="text-center">Quantity</div>
                <div className="text-center">Action</div>
              </div>

              {/* Cart Items */}
              <div className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-5 gap-4 p-4 items-center"
                  >
                    {/* Product Info */}
                    <div className="col-span-2 flex gap-4">
                      <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 line-clamp-2">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-center">
                      <p className="font-semibold text-gray-900">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="flex justify-center">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                          −
                        </button>
                        <span className="px-3 py-1 font-semibold text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <div className="flex justify-center">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                        title="Remove from cart"
                      >
                        <FaTrash className="text-lg" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Continue Shopping Link */}
            <Link
              href="/shop"
              className="flex gap-2 mt-6 text-blue-600 hover:text-blue-700 transition-colors font-semibold items-center w-fit"
            >
              <FaArrowLeft />
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h3>

              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                {/* Subtotal */}
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal ({getTotalItems()} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                {/* Shipping */}
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  {shippingCost === 0 ? (
                    <span className="text-green-600 font-semibold">FREE</span>
                  ) : (
                    <span>${shippingCost.toFixed(2)}</span>
                  )}
                </div>

                {/* Tax */}
                <div className="flex justify-between text-gray-700">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-blue-600">
                  ${finalTotal.toFixed(2)}
                </span>
              </div>

              {/* Shipping Info */}
              {shippingCost === 0 && (
                <p className="text-xs text-green-600 font-semibold mb-4 text-center">
                  ✓ Free shipping eligible
                </p>
              )}

              {/* Checkout Button */}
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold mb-3">
                Proceed to Checkout
              </button>

              {/* Trust Badges */}
              <div className="space-y-2 text-xs text-gray-600 border-t border-gray-200 pt-4">
                <p>✓ Secure checkout with encryption</p>
                <p>✓ 30-day money-back guarantee</p>
                <p>✓ Free returns on eligible items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
