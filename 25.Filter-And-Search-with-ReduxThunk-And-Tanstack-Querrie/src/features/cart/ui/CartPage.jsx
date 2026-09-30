import React from "react";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  Tag,
} from "lucide-react";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      price: 120,
      quantity: 1,
      image:
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    },
    {
      id: 2,
      title: "Smart Watch Series 8",
      price: 180,
      quantity: 2,
      image:
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fa] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-[#2874f0] p-3 text-white">
            <ShoppingCart size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Cart</h1>

            <p className="text-sm text-gray-500">2 items in your cart</p>
          </div>
        </div>

        {/* Main */}
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Cart Items */}
          <div className="flex-1 rounded-2xl bg-white shadow-sm">
            <div className="border-b border-gray-100 p-5">
              <h2 className="font-bold text-gray-900">Cart Items</h2>
            </div>

            <div className="divide-y divide-gray-100">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 p-5 sm:flex-row"
                >
                  {/* Image */}
                  <div className="flex h-32 w-full items-center justify-center rounded-xl bg-gray-50 sm:w-32">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain p-3"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex justify-between gap-4">
                      <div>
                        <p className="text-xs text-gray-400">Electronics</p>

                        <h3 className="mt-1 font-bold text-gray-900">
                          {item.title}
                        </h3>
                      </div>

                      <button className="text-gray-400 transition hover:text-red-500">
                        <Trash2 size={19} />
                      </button>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                      {/* Price */}
                      <p className="text-xl font-bold text-[#2874f0]">
                        ${item.price}
                      </p>

                      {/* Quantity */}
                      <div className="flex items-center overflow-hidden rounded-lg border border-gray-200">
                        <button className="flex h-9 w-9 items-center justify-center hover:bg-gray-100">
                          <Minus size={16} />
                        </button>

                        <span className="flex h-9 w-10 items-center justify-center border-x border-gray-200 text-sm font-bold">
                          {item.quantity}
                        </span>

                        <button className="flex h-9 w-9 items-center justify-center hover:bg-gray-100">
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Price Details */}
          <div className="w-full lg:max-w-md">
            <div className="rounded-2xl bg-white shadow-sm">
              <div className="border-b border-gray-100 p-5">
                <h2 className="font-bold">Price Details</h2>
              </div>

              <div className="space-y-5 p-5">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Price</span>

                  <span className="font-medium">$480</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Delivery</span>

                  <span className="font-medium text-green-600">FREE</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2 text-gray-500">
                    <Tag size={15} />
                    Discount
                  </span>

                  <span className="font-medium text-green-600">-$50</span>
                </div>

                <div className="border-t border-dashed border-gray-200 pt-5">
                  <div className="flex justify-between">
                    <span className="font-bold">Total Amount</span>

                    <span className="text-xl font-bold text-[#2874f0]">
                      $430
                    </span>
                  </div>
                </div>

                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2874f0] py-3.5 font-bold text-white transition hover:bg-blue-600">
                  Place Order
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Security */}
            <div className="mt-4 rounded-xl bg-white p-4 text-center text-sm text-gray-500 shadow-sm">
              🔒 Safe and secure shopping experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
