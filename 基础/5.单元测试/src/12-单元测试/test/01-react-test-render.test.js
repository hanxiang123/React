/*
 * react 官方提供的模块 react-teset-render
    ShallowRender 可以实现对jsx模板进行浅层的渲染（不会渲染子组件）
 * 安装：npm i react-test-render
 * 扩展名必须以 .test.js 结尾
 */
import ShallowRender from 'react-test-renderer/shallow'
import App from '../App'
import ReactTestUtil from 'react-dom/test-utils'
describe("react-test-render",function(){
    it("app 的名字事kerwin-todo",function(){
        const render = new ShallowRender()
        render.render(<App/>)
        // console.log(render.getRenderOutput().props.children[0].type)
        
        expect(render.getRenderOutput().props.children[0].type).toBe("h1")
        expect(render.getRenderOutput().props.children[0].props.children).toBe("kerwin-todo")
    })

    it("删除功能",function(){
        const app = ReactTestUtil.renderIntoDocument(<App/>)
        let todoitems = ReactTestUtil.scryRenderedDOMComponentsWithTag(app,"li")
        console.log(todoitems.length)

        let detelteButton = todoitems[0].querySelector("button")

        ReactTestUtil.Simulate.click(detelteButton)

        let todoitemsAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithTag(app,"li")

        expect(todoitems.length-1).toBe(todoitemsAfterClick.length)
    })

    it("添加功能",function(){
        // 模拟按钮点击 之前 需要 实例化成真实dom
        const app = ReactTestUtil.renderIntoDocument(<App/>)

        // 找到所有的 li
        let todoitems = ReactTestUtil.scryRenderedDOMComponentsWithTag(app,"li")
        console.log(todoitems.length)

        // 找到 input 输入框
        let addInput = ReactTestUtil.scryRenderedDOMComponentsWithTag(app,"input")
        addInput.value = "kerwinaaaaaa"
        // 找到点击的 button 按钮
        let addButton = ReactTestUtil.findRenderedDOMComponentWithClass(app,"add")

        // 模拟按钮点击
        ReactTestUtil.Simulate.click(addButton)

        let todoitemsAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithTag(app,"li")

        // 期望指是否等于
        expect(todoitemsAfterClick.length).toBe(todoitems.length+1)

    })
})