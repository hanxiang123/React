
import React, { Component } from 'react'

export default class App extends Component {
    state  = {
        myname:"kerwin",
        myage:100
    }
    // componentWillMount/componentWillReceiveProps
    // 初始化组件以及后续的更新过程中
    // return 的值 会覆盖 state
    static getDerivedStateFromProps(nextProps,nextState){
        // console.log(this)
        console.log("getDrivedStateFromProps",nextState)

        // return 会立即返回，所以在这里不能写异步执行函数
        return {
            myname:nextState.myname.substring(0,1).toUpperCase()+nextState.myname.substring(1)
        }
    }

    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        myname:"xiaoming"
                    })
                }}>click</button>
                app - {this.state.myname}-{this.state.myage}
            </div>
        )
    }
}
