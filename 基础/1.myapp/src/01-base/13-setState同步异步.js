
import React, { Component } from 'react'

export default class App extends Component {
    state  ={
        count:1
    }
    render() {
        return (
            <div>
               {this.state.count}
               <button onClick={this.handleAdd1}>add1</button> 
               <button onClick={this.handleAdd2}>add2</button> 
            </div>
        )
    }

    handleAdd1 = ()=>{
        this.setState({
            count:this.state.count+1
        },()=>{
            console.log(this.state.count)
        })

        

        this.setState({
            count:this.state.count+1
        },()=>{
            console.log(this.state.count)
        })

        

        this.setState({
            count:this.state.count+1
        },()=>{
            console.log(this.state.count)
            // 状态 和真实dom已经更新完了，
        })


    }

    handleAdd2 = ()=>{
        setTimeout(()=>{
            this.setState({
                count:this.state.count+1
            })
    
            console.log(this.state.count)
    
            this.setState({
                count:this.state.count+1
            })
    
            console.log(this.state.count)
    
            this.setState({
                count:this.state.count+1
            })
    
            console.log(this.state.count)
        },0)

    }
}
/*
    setState处在同步的逻辑中，  异步更新状态，异步更新真实dom
        支持合并的标志位标为true，不阻塞后面代码执行，最后合并处理setState
    setState处在异步的逻辑中，  同步更新状态，同步更新真实dom,
        支持合并的标志位为false，本身是异步代码，不会阻塞后序代码执行，所以调一次setState就会立即执行，不会等待合并

    setState 接受第二个参数， 第二个参数式回调函数， 状态和dom更新完后就会被触发。

    
*/