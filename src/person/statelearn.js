import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './person/person'

class App extends Component {
  state = {
    // 用于改变组件内容状态的值
    persons:[
      {name:'xiaoyu',size:"xiaoyusize"},
      {name:'dayu',size:"dayusize"},
    ]
  }
  updateName = () => {
    console.log('触发更改姓名的事件')
    // 更改状态使用setState
    this.setState({
      persons:[
        {name:'xiaoyuo',size:"个"},
        {name:'dayuo',size:"堆"},
      ]
    })
  }
  render(){
    return (
      <div className="App">
        {/* 绑定事件时，不用加小括号，加后会立即执行 */}
        <button onClick={this.updateName}>更改姓名</button>
        <Person name={this.state.persons[0].name} size={this.state.persons[0].size}/>
        <Person name={this.state.persons[1].name} size={this.state.persons[1].size}/>
      </div>
    );
  }
}

export default App;
