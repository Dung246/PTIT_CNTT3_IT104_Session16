import React, { Component } from "react";
import { Product } from "./Product";
import ProductCard from "./ProducrCard";

interface Props {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default class ProductList extends Component<Props> {
  render() {
    return (
      <div className="grid">
        {this.props.products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAddToCart={this.props.onAddToCart}
          />
        ))}
      </div>
    );
  }
}
