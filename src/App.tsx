import React from 'react';

interface State {
  message: string;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    message: 'Nothing was pressed yet',
  };

  keyPressHandler = (event: KeyboardEvent) => {
    this.setState({
      message: `The last pressed key is [${event.key}]`,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyPressHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyPressHandler);
  }

  render() {
    return (
      <div className="App" data-theme="dark">
        <p className="App__message">{this.state.message}</p>
      </div>
    );
  }
}
