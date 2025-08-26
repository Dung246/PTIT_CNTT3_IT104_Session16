import React from "react";

interface CartProps {
  cart: any[];
  onClose: () => void;
}

let Cart = ({ cart, onClose }: CartProps) => {
  return (
    <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-xl p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Giỏ hàng</h2>
      <button onClick={onClose} className="text-red-500 mb-4">Đóng</button>
      {cart.length === 0 ? (
        <p>Chưa có sản phẩm nào</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between border-b py-2">
              <span>{item.name}</span>
              <span>{item.quantity} x {item.price.toLocaleString()} đ</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
