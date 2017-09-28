import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">User Management Example</h1>
        </header>
		<div className="app-body">
			{this.props.children}
		</div>
      </div>
    );
  }
}

export default App;
