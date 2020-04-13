import React, { Component } from 'react';
import TodoEdit from './TodoEdit';
import axios from 'axios'


class TodoItem extends Component {
  constructor(props) {
    super(props);
      this.state = {
        mode: 0,
        id: this.props.id,
        description: this.props.description,
        started: this.props.started,
        completed: this.props.completed
      }

      this.updateTodo = this.updateTodo.bind(this)
      this.switchMode = this.switchMode.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.delete = this.delete.bind(this)
  }

  delete(){
    axios.delete('http://localhost:5000/todos/delete/' + this.state.id)
      .then(res => console.log(res))
  }

  updateTodo(e){
    e.preventDefault();
    const todo = {
      id: this.state.id,
      description: this.state.description,
    }

    axios.post('http://localhost:5000/todos/update', todo) 
      .then(res => console.log(res.data))
      .catch(err => console.log('Error posting to todos', err))
  }

  handleChange(e){
    console.log('e.target.value is', e.target.value)
    this.setState({[e.target.name]: e.target.value})
  }

  switchMode(){
    let newMode = !this.state.mode;
    this.setState({mode: newMode})
  }

  render() {
    const look = (
      <div style={{backgroundColor: "red", width:"150px", color:"white", border: "solid", borderColor:"pink", borderWidth:"3px", padding:'5px', display: "border-box" }}>
        <h3 style={{fontWeight: "normal"}}> {this.state.description} </h3>
        <button onClick={this.switchMode} style={{ }}>Edit</button> 
        <button onClick={this.delete} style={{ }}>Delete</button> 
      </div>
    )
    //div with this.props.description
    //button to change started and completed properties
    //button that changes this.state.mode to 1 touch
    const touch =  <TodoEdit update={this.updateTodo} 
                            description={this.state.description}
                            handleChange={this.handleChange} />



    const item = !this.state.mode ? look : touch;

    return (
      <div >
        {item}
      </div>
    );
  }
}



export default TodoItem;