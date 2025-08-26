export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Laptop Dell",
    image: "https://via.placeholder.com/150",
    price: 15000000,
    stock: 5
  },
  {
    id: 2,
    name: "Điện thoại iPhone",
    image: "https://via.placeholder.com/150",
    price: 20000000,
    stock: 3
  },
  {
    id: 3,
    name: "Tai nghe Bluetooth",
    image: "https://via.placeholder.com/150",
    price: 1200000,
    stock: 10
  },
  {
    id: 4,
    name: "Chuột Logitech",
    image: "https://via.placeholder.com/150",
    price: 500000,
    stock: 8
  },
  {
    id: 5,
    name: "Bàn phím cơ",
    image: "https://via.placeholder.com/150",
    price: 1200000,
    stock: 6
  }
];
