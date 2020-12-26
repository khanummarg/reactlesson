import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

    state = {
        inputValue: '',
        tasks: []

    };


    handleChange = (event) => {

        this.setState({
            inputValue: event.target.value

        })
    }

    handleClick = () => {

        const inputValue = this.state.inputValue.trim();

        if (!inputValue) {
            return;
        }
        const tasks = [...this.state.tasks, inputValue];
        this.setState({
            tasks: tasks,
            inputValue: ''
        });
    };

    deleteTasks = (index) => {
        const { tasks } = this.state;
        tasks.splice(index, 1);
        this.setState({
            tasks: tasks
        })
    }
    render() {
        const { tasks } = this.state;
        const li = tasks.map((task, index) => {
            return <li key={index}>{task}
                <button type="button" className="del" onClick={() => {
                    this.deleteTasks(index);
                }}>x</button></li>
        })
        return (
            <div>
                <input type="text" className="inputbtn" value={this.state.inputValue} onChange={this.handleChange}></input>
                <button type="button" className="inputbtn btn" onClick={this.handleClick}>Add task</button>
                <ol>
                    {li}
                </ol>
            </div>
        )
    }
}


export default Todo;