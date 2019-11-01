import React from 'react';
import './person.css'
// function person(){
//     return <p>dkjf</p>
// }
const person = (params) => { 
    // s属性传值 
    // {/* 属性传值 传事件 */}      
    return (
        <div className="Person">
            <input onChange={params.myChange} defaultValue={params.name} type="text"></input>
            <h3 onClick={params.myClick}>{params.name}收藏了 {  Math.random() } {params.size}文件</h3>
        </div>
    )
}
export default person