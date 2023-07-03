
import React, { Component,useLayoutEffect } from 'react'

export default class App extends Component {
    state = {
        isCreated:true
    }
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        isCreated:!this.state.isCreated
                    })
                }}>click</button>
                {/* {this.state.isCreated?<Child/>:""} */}
                {this.state.isCreated && <Child/>}
            </div>
        )
    }
}


function Child (){
    useLayoutEffect(() => {
        window.onresize = ()=>{
            console.log("resize")
        }

        var timer = setInterval(()=>{
            console.log("111")
        },1000)


        return ()=>{
            console.log('组件销毁')

            window.onresize = null
            clearInterval(timer)
        }
    }, [])

    return <div>
        child
    </div>
}

/**
 * useLayoutEffect 和 useEffect 有什么区别？
 * 调用时机不同：
 *    useLayoutEffect 和原来 componentDidMount & componentDidUpdate 一致，在react完成DOM更新后马上同步调用的代码，会阻塞页面渲染。
 *    useEffect 是会在整个页面渲染完才会调用的代码。
 *    官方建议优先使用 useEffect
 * 
 * 在实际使用时如果想避免页面抖动（在 useEffect 里修改DOM很有可能出现）的话，
 * 可以把需要操作DOM的代码放在 useLayoutEffect 里。
 * 这里做点dom操作，这些dom修改会和 react 做出的更改一起被一次性渲染到屏幕上，只有一次回流、重绘的代价。
 */
