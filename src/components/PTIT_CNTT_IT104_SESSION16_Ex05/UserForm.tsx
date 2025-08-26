import React, { Component } from 'react'

type State = {
  name: string;
  email: string;
  age: number | '';
  error: string;
  submitted: boolean;
};

export default class UserForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      email: '',
      age: '',
      error: '',
      submitted: false,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      [name]: name === 'age' ? Number(value) : value,
      error: '',
      submitted: false
    } as any);
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, age } = this.state;
    if (!email.includes('@')) {
      this.setState({ error: 'Email không hợp lệ', submitted: false });
      return;
    }
    if (typeof age === 'number' && age < 0) {
      this.setState({ error: 'Tuổi không được âm', submitted: false });
      return;
    }
    this.setState({ error: '', submitted: true });
  };

  handleReset = () => {
    this.setState({
      name: '',
      email: '',
      age: '',
      error: '',
      submitted: false
    });
  };

  render() {
    const { name, email, age, error, submitted } = this.state;
    return (
      <div>
        Nhập thông tin người dùng  <br />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Họ tên"
            value={name}
            onChange={this.handleChange}
          />
          <br /><br />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange}
          />
          <br /><br />
          <input
            type="number"
            name="age"
            placeholder="Tuổi"
            value={age}
            onChange={this.handleChange}
          />
          <br /><br />
          <div>
            <button type="submit" style={{ backgroundColor: "blue", color: "white" }}>Gửi</button>
            <button type="button" style={{ backgroundColor: "blue", color: "white" }} onClick={this.handleReset}>Xoá tất cả</button>
          </div>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {submitted && (
          <div>
            <h3>Thông tin người dùng:</h3>
            <p>Họ tên: {name}</p>
            <p>Email: {email}</p>
            <p>Tuổi: {age}</p>
          </div>
        )}
      </div>
    )
  }
}