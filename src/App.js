import React, { Component } from "react";
import "materialize-loader";
import Login from "./pages/Login";
import Chat from "./components/Chat";
import { observer } from "mobx-react";
import Header from './components/Header'

@observer
class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <div>
          <Header store={store} myText={store.currentPage}/>
          <Login store={store} />
      
      </div>
    );
  }
}

export default App;
