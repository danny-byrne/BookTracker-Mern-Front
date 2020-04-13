import React, { Component } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';




class TodoList extends Component {
  constructor(props) {
    super(props);
      this.state = {
        items:  []
      }

     this.fetchData = this.fetchData.bind(this) 
  }

  
  componentDidMount() {
    this.fetchData()
  }

  fetchData(){
    axios.get('http://localhost:5000/todos')
      .then(res => {
        this.setState({
          items: res.data
        })
      })
  }
  

  render() {
    console.log("inside render", this.state.items)
    
    const list = this.state.items.map(item => {
      console.log('displaying', item)
      return (
        <TodoItem key={item._id} 
                  description={item.description} 
                  id={item._id} 
                  started={item.started} 
                  completed={item.completed}
                  fetchData={this.fetchData}
        />
      )
    })
    

    return (
      <div style={{float:"bottom", display:"border-box"}}>
        {list}
      </div>
    );
  }
}



export default TodoList;