import React, { Component } from "react";
import { Product } from "./Product";

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}
export default class ProductCard extends Component<Props> {
  render() {
    let { product, onAddToCart } = this.props;
    return (
      <div className="card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price.toLocaleString()} đ</p>
        <button onClick={() => onAddToCart(product)}>
          🛒 Thêm vào giỏ hàng
        </button>
      </div>
    );
  }
}
