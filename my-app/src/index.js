import React from "react";
import { render } from "react-dom";
import UserInfo from "./component/user-info";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "this is a header of my app",
      body: "this is a body of my app",
      link: "https://google.com",
      user: {
        name: "John",
        family: "Doe",
        age: 22,
      },
    };
  }
  changeBody = () => {
    this.setState({ body: "I changed BODY" });
  };
  render() {
    return (
      <div>
        <Header titlePrefix="My site" title={this.state.header} />
        <Body text={this.state.body} kilo="12" />
        <Body text={this.state.body} />
        <UserInfo data={this.state.user} />
        <a onClick={this.changeBody}>click here</a>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <h1>
        {this.props.titlePrefix} - {this.props.title}
      </h1>
    );
  }
}
class Body extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    console.log("body-constractor");
  }
  render() {
    return (
      <p>
        {this.props.text}
        <a href=""></a>
      </p>
    );
  }
}
render(<App />, document.getElementById("root"));
