import { Component } from "react";
import ReactDom from "react-dom";
import Dashboard from "./pages/dashboard.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app-root"));
