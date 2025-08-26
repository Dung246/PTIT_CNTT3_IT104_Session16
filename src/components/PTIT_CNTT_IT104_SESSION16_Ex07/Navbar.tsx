import React, { Component } from "react";
interface Props {
  cartCount: number;
  onToggleCart: () => void;
}
export default class Navbar extends Component<Props> {
  render() {
    return (
      <div className="navbar">
        <a href="#">Trang chủ</a>
        <a href="#">Danh sách sản phẩm</a>
        <button onClick={this.props.onToggleCart}>
          🛒 ({this.props.cartCount})
        </button>
      </div>
    );
  }
}
