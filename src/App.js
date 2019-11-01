import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './person/person'
import Mvvm from './person/mvvm'

class App extends Component {
  
  constructor(props){
    super(props)
    // 设置状态
    this.state = {
      // 用于改变组件内容状态的值
      persons:[
        {name:'xiaoyu',size:"xiaoyusize"},
        {name:'dayu',size:"dayusize"},
      ]
    }
    console.log('设置状态',props)
  }
  componentWillMount(){
    console.log('修改状态')
  }
  updateName = (  ) => {
    console.log('触发更改姓名的事件')
    // 更改状态使用setState
    this.setState({
      persons:[
        {name:'xiaoyuo',size:"个"},
        {name:'dayuo',size:"堆"},
      ]
    })
  }
  updateName1 = ( newNmae ) => {
    console.log('触发更改姓名的事件')
    // 更改状态使用setState
    this.setState({
      persons:[
        {name:newNmae,size:"个"},
        {name:'dayuo',size:"堆"},
      ]
    })
  }

  myChange = (event)=>{
    this.setState({
      persons:[
        {name:'dfd',size:"个"},
        {name:event.target.value,size:"堆"},
      ]
    })
  }

  render(){
    console.log('组件渲染')
    const style = {
      backgroundColor:'red'
    }
    return (
      <div className="App">
        {/* 绑定事件时，不用加小括号，加后会立即执行 */}
        <button onClick={this.updateName}>更改姓名</button>
        {/* 事件传值 第一种方式 */}
        <button onClick={() => this.updateName1('mixiu')}>更改姓名1</button>
        {/* 事件传值 第2种方式 */}
        <button onClick={this.updateName1.bind(this,'mixiu2')}>更改姓名2</button>
        <Person style={style} name={this.state.persons[0].name} size={this.state.persons[0].size}/>
        {/* 属性传值 传事件 */}        
        <Person myClick={this.updateName1.bind(this,'mixiu2')} name={this.state.persons[1].name} size={this.state.persons[1].size}/>
        {/**数据双向绑定 */}
        <Mvvm myChange={this.myChange.bind(this)} name={this.state.persons[1].name} ></Mvvm>  
        <Mvvm  name={this.state.persons[1].name} size={this.state.persons[1].size}/>
        </div>
    );
  }
  componentDidMount(){
    console.log('组件渲染完毕')
  }
}

export default App;
