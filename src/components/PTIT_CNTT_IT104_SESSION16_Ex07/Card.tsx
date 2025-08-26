import React, { Component } from "react";
import { Product } from "./Product";

interface CartItem {
  product: Product;
  quantity: number;
}

interface Props {
  items: CartItem[];
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
}

export default class Cart extends Component<Props> {
  render() {
    let { items, onIncrease, onDecrease, onRemove } = this.props;
    let total = items.reduce((sum, item) => sum + item.product.price * item.quantity,0);
    return (
      <div className="cart">
        <h2>🛒 Giỏ hàng</h2>
        {items.map((item) => (
          <div key={item.product.id} className="cart-item">
            <img src={item.product.image} alt={item.product.name} />
            <span>{item.product.name}</span>
            <div>
              <button onClick={() => onDecrease(item.product.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => onIncrease(item.product.id)}>+</button>
            </div>
            <button onClick={() => onRemove(item.product.id)}>🗑</button>
          </div>
        ))}
        <h3>Tổng tiền: {total.toLocaleString()} đ</h3>
      </div>
    );
  }
}
