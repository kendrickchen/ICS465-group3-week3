import React from "react";
import './form.css';

export default class Form extends React.Component {
  state = {
    pName: "",
    pDescription: "",
    imgURL: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      pName: "",
      pDescription: "",
      imgURL: "",
    });
  };

  render() {
    return (
      <form>
        <input
          name="pName"
          placeholder="Enter your project Name"
          value={this.state.pName}
          onChange={e => this.setState({pName : e.target.value})}
        />
        <br />
        <br />
        <input
          name="imgURL"
          placeholder="Paste project image address here "
          value={this.state.imgURL}
          onChange={e => this.setState({imgURL : e.target.value})}
        />
        <br />
        <br />
        <input type="text" className="description"
          name="pDescription"
          placeholder="Enter your project description"
          value={this.state.pDescription}
          onChange={e => this.setState({pDescription : e.target.value})}
        />
        <br />
        <br />

        <button className="btn-primary" onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
