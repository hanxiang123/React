
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        mytext:"111111"
    }
    render() {
        console.log("render")
        return (
            <div>
                app
                <button onClick={()=>{
                    this.setState({
                        mytext:"222222"
                    })
                }}>click</button>
                {this.state.mytext}
            </div>
        )
    }

    // componentWillUpdate(){
    //     console.log("componentWillUpdate")
    // }

    componentDidUpdate(prevProps,prevState,value){
        console.log("componentDidUpdate",value)
    }

    /**
     * 替换 componentWillUpdate
     * componentWillUpdate 发生在 render 之前，和 componentDidUpdate 相隔较远，导致记录的状态不可信
     * getSnapshotBeforeUpdate 发生在 render 之后，componentDidUpdate 之前
     */
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate")
        return 100; // return 的值会在 componentDidUpdate 的第三个参数中
    }
}
