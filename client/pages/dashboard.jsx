import { Component } from "react";
import "./dashboard.css";
import logo from "../assets/images/Omega_Logo.svg";

export default class Dashboard extends Component {
  render() {
    return (
      <h1>
        This is new dashboard!<img src={logo}></img>
      </h1>
    );
  }
}
