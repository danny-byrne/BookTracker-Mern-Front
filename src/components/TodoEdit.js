import React, { Component } from 'react';
import axios from 'axios';


export default class TodoEdit extends Component {
  constructor(props){
    super(props);
      this.state = {
        description: this.props.description,
      }

      this.handleChange = this.handleChange.bind(this);
      this.updateTodo = this.updateTodo.bind(this);
  }
  
  handleChange(e){
    this.props.handleChange(e)
  }

  updateTodo(){
    this.props.update(this.state.description)
  }

  render() {
    return (
      <div>
        <input name="description" onChange={this.handleChange} value={this.state.description}  />
        <button onClick={this.updateTodo}>Update</button>
      </div>
    )
  }
}



