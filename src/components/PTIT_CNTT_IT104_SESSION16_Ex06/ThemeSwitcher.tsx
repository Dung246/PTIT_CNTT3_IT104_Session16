import React, { Component } from 'react';

type State = {
  isDark: boolean;
};

export default class ThemeSwitcher extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isDark: false,
    };
  }

  handleToggle = () => {
    this.setState({ isDark: !this.state.isDark });
  };

  render() {
    const { isDark } = this.state;
    const themeClass = isDark ? 'dark-theme' : 'light-theme';

    return (
      <div className={themeClass} style={{
        backgroundColor: isDark ? '#222' : '#fff',
        color: isDark ? '#fff' : '#222',
        padding: 30,
        borderRadius: 10,
        textAlign: 'center'
      }}>
        <button onClick={this.handleToggle} style={{ marginBottom: 20 }}>
          Chuyển theme
        </button>
        <div>
          {isDark ? '🌙 Chế độ Tối đang bật' : '☀️ Chế độ Sáng đang bật'}
        </div>
      </div>
    );
  }
}