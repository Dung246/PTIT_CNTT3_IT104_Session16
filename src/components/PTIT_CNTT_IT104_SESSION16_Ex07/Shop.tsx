import React, { Component } from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Cart from "./Card";
import { Product } from "./Product";

interface CartItem {
  product: Product;
  quantity: number;
}

interface State {
  products: Product[];
  cart: CartItem[];
  showCart: boolean;
}

export default class Shop extends Component<{}, State> {
  state: State = {
    products: [
      { id: 1, name: "Điện thoại Samsung Galaxy", price: 20000000, image: "https://shorturl.at/LHEuj" },
      { id: 2, name: "Điện thoại Iphone14 Promax", price: 20500000, image: "https://shorturl.at/IJjxR" },
      { id: 3, name: "Điện thoại Oppo A9", price: 21000000, image: "https://shorturl.at/QONAl" },
      { id: 4, name: "Điện thoại Samsung Galaxy", price: 21500000, image: "https://shorturl.at/BfmkM" },
      { id: 5, name: "Điện thoại Oppo A9", price: 22000000, image: "/oppo.jpg" },
      { id: 6, name: "Điện thoại Samsung Galaxy", price: 22500000, image: "/SamsungGalaxy" },
      { id: 7, name: "Điện thoại Oppo A9", price: 23000000, image: "/oppo.jpg" },
      { id: 8, name: "Điện thoại Oppo Vs", price: 23500000, image: "/oppo.jpg" },
    ],
    cart: [],
    showCart: false,
  };

  handleAddToCart = (product: Product) => {
    let { cart } = this.state;
    let existing = cart.find((c) => c.product.id === product.id);
    if (existing) {
      this.setState({cart: cart.map((c) =>c.product.id === product.id? { ...c, quantity: c.quantity + 1 }: c
        ),
      });
    } else {
      this.setState({ cart: [...cart, { product, quantity: 1 }] });
    }
  };

  handleIncrease = (id: number) => {
    this.setState({
        cart: this.state.cart.map((c) =>c.product.id === id ? { ...c, quantity: c.quantity + 1 } : c),
    });
  };
  handleDecrease = (id: number) => {
    this.setState({
      cart: this.state.cart.map((c) =>c.product.id === id ? { ...c, quantity: c.quantity - 1 } : c).filter((c) => c.quantity > 0),});
  };

  handleRemove = (id: number) => {
    this.setState({
      cart: this.state.cart.filter((c) => c.product.id !== id),
    });
  };

  toggleCart = () => {
    this.setState({ showCart: !this.state.showCart });
  };

  render() {
    return (
      <div>
        <Navbar
          cartCount={this.state.cart.length}
          onToggleCart={this.toggleCart}
        />
        <ProductList
          products={this.state.products}
          onAddToCart={this.handleAddToCart}
        />
        {this.state.showCart && (
          <Cart
            items={this.state.cart}
            onIncrease={this.handleIncrease}
            onDecrease={this.handleDecrease}
            onRemove={this.handleRemove}
          />
        )}
      </div>
    );
  }
}
