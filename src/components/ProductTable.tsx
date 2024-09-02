"use client";
import React, { useEffect, useState } from "react";

const ProductTable = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setProducts(cartItems);
  }, []);

  const handleQuantityChange = (id: number, change: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + change) }
          : product
      )
    );
  };

  const calculateTotal = (price: number, quantity: number) => price * quantity;

  const removeFromCart = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("cartItems", JSON.stringify(updatedProducts));
  };

  const getTotalPrice = () => {
    return products.reduce(
      (total, product) =>
        total + calculateTotal(product.price, product.quantity),
      0
    );
  };

  return (
    <div className="w-full max-w-[1170px] mx-auto mb-[200px]">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-b-gray-300 text-[#828bb2]">
            <th className="p-2 text-left font-[400]" style={{ width: "65%" }}>
              Product
            </th>
            <th className="p-2 text-left font-[400]" style={{ width: "10%" }}>
              Price
            </th>
            <th className="p-2 text-center font-[400]" style={{ width: "15%" }}>
              Quantity
            </th>
            <th className="p-2 text-left font-[400]" style={{ width: "10%" }}>
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b border-b-gray-300">
              <td
                className="py-[30px] flex items-center"
                style={{ width: "65%" }}
              >
                <img
                  src={product.img}
                  alt=""
                  className="w-[150px] h-[150px] mr-[20px]"
                />
                {product.name}
              </td>
              <td
                className="p-2 text-[#415094] text-[14px]"
                style={{ width: "10%" }}
              >
                ${product.price.toFixed(2)}
              </td>
              <td className="p-2 text-center" style={{ width: "15%" }}>
                <button
                  className="px-2 py-1 bg-gray-300 rounded-l"
                  onClick={() => handleQuantityChange(product.id, -1)}
                >
                  -
                </button>
                <span className="px-4">{product.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-300 rounded-r"
                  onClick={() => handleQuantityChange(product.id, 1)}
                >
                  +
                </button>
              </td>
              <td className="p-2" style={{ width: "10%" }}>
                ${calculateTotal(product.price, product.quantity).toFixed(2)}
              </td>
              <td className="p-2">
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="my-[20px]">
          <tr className="border-t border-t-gray-300 ">
            <td
              colSpan={5}
              className="p-2 text-right my-[20px] text-[20px] font-[300]"
            >
              Subtotal:
            </td>
            <td className="p-2 text-[#415094] text-[16px] font-[500] my-[20px]">
              ${getTotalPrice().toFixed(2)}
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ProductTable;
