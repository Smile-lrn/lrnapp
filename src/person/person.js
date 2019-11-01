import React ,{ Component }from 'react';
// function person(){
//     return <p>dkjf</p>
// }
class person extends Component {
    constructor(props){
        super(props)
        this.state = {
            params:props
        }
    }
    render(){
        // s属性传值 
        // {/* 属性传值 传事件 */}      
        return <h3 onClick={this.state.params.myClick}>{this.state.params.name}收藏了 {  Math.random() } {this.state.params.size}文件</h3>
    }

} 
export default person