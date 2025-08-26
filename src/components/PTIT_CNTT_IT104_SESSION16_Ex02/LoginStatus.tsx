
import React from 'react';

type State = {
  isLoggedIn: boolean;
};

class LoginStatus extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  toggleLogin = () => {this.setState((prevState) => ({isLoggedIn: !prevState.isLoggedIn,}));};
  render() {
    let { isLoggedIn } = this.state;

    return (
      <div>
        <div>
          {isLoggedIn ? (
            <>
              <p>✅ Xin chào,User!</p>
              <button onClick={this.toggleLogin}>Đăng xuất</button>
            </>
          ) : (
            <>
              <p>🔒Vui lòng đăng nhập để tiếp tục.</p>
              <button onClick={this.toggleLogin}>Đăng nhập</button>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default LoginStatus;
