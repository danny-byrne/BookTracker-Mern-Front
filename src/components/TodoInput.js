import React, { Component } from 'react';
import axios from 'axios';

const style = {
  width: "300px",
  height: "75px",
  backgroundColor: "grey"
}

const inputStyle = {}

export default class TodoInput extends Component {
  constructor(props){
    super(props);
      this.state = {
        description: '',
        started: false,
        completed: false
      }

      this.handleChange = this.handleChange.bind(this);
      this.createTodo = this.createTodo.bind(this);
  }
  
  handleChange(e){
    this.setState({[e.target.name] : e.target.value })
  }

  createTodo(e){
    e.preventDefault();
    
    const todo = {
      description: this.state.description
    }

    axios.post('http://localhost:5000/todos/add', todo) 
      .then(res => console.log(res.data))
      .catch(err => console.log('Error posting to todos', err))
    
    this.setState({
      description: ''
    })
  }

  render() {
    return (
      <div style={style}>
        <input name="description" onChange={this.handleChange} value={this.state.description} 
          style={{height:"50px", width:"200px", }} />
        <button style={{ height:"25px", width:"200px", alignItems:"center", float:"left"}}onClick={this.createTodo}>Create</button>
      </div>
    )
  }
}



