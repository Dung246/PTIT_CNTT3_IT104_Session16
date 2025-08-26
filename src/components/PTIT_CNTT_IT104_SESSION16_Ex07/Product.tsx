import React, { Component } from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}
type Props = { product: Product };
export class ProductItem extends Component<Props> {
  render() {
    let { product } = this.props;
    return (
      <div>
        <h3>{product.name}</h3>
        <p>{product.price.toLocaleString()} đ</p>
      </div>
    );
  }
}
