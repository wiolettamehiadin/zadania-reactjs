import React, { Component } from 'react';


class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTitle: ''
    };
  }
  myChangeHandler = (event) => {
    this.setState({ inputTitle: event.target.value });
  }

  render() {

    return (

      <form>
      <h1>{this.state.inputTitle}</h1>
        <p>Insert new title here:</p>
        <input
          type='text' 
          onChange={this.myChangeHandler}/>
      </form>
    );
  }
}

export default Inputs;

