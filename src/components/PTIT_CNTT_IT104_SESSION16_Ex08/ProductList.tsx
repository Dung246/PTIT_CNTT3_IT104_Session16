import React, { useEffect, useState } from "react";
import { products, Product } from "./product.data";
import Cart from "./Cart";

interface CartItem extends Product {
  quantity: number;
}

let ProductList = () => {
  let [cart, setCart] = useState<CartItem[]>([]);
  let [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    let saved = localStorage.getItem("cart");
    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  let addToCart = (product: Product) => {
    setCart((prev) => {
      let exist = prev.find((item) => item.id === product.id);
      if (!exist) {
        return [...prev, { ...product, quantity: 1 }];
      } else {
        if (exist.quantity < product.stock) {
          return prev.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          alert("Số lượng sản phẩm trong kho không đủ!");
          return prev;
        }
      }
    });
  };

  return (
    <div className="p-6">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
        Giỏ hàng ({cart.reduce((sum, i) => sum + i.quantity, 0)})
        </button>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-700">{product.price.toLocaleString()} đ</p>
            <p className="text-sm text-gray-500">Kho: {product.stock}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
            >
              Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>
      {isOpen && <Cart cart={cart} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default ProductList;
