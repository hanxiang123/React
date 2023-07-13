/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

import {observable,configure, action,runInAction} from 'mobx'

import axios from 'axios'
configure({
    enforceActions:'always' //  开启严格模式，不允许在外面修改store的值
})

// const store = observable( {
//     isTabbarShow:true,
//     list:[],
//     cityName:"北京",
//     changeShow(){
//         this.isTabbarShow = true
//     },
//     changeHide(){
//         this.isTabbarShow = false
//     }
// },{
//     changeHide:action,
//     changeShow:action //标记两个方法是action，专门修改可观测的value
// })
// export default store


/**
 * 装饰器语法，需要vscode支持
 * 代码里需要支持装饰器
 * 1、安装：
 *  "@babel/core": "^7.16.7",
    "@babel/plugin-proposal-decorators": "^7.16.7",
    "@babel/preset-env": "^7.16.7",
    配置 .babelrc 文件
    创建 .config-overrides.js 文件

    2、安装：
    npm i customize-cra react-app-rewired
    修改 package.json
        "start": "react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-app-rewired eject"
 */
class Store {
    @observable  isTabbarShow = true
    @observable  list = []

    @action changeShow(){
        this.isTabbarShow = true
    }

    @action changeHide(){
        this.isTabbarShow = false
    }

    @action async getList(){
        var list = await axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
            method:"get",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
                
                'X-Host': 'mall.film-ticket.cinema.list'
    
            }
        }).then(res=>{
            // console.log(res.data.data.cinemas)
           return res.data.data.cinemas
        })

        // 异步处理
        // 开启严格模式下，不允许在回调函数中修改
        // 使用runInAction 可以在回调函数中修改store
        runInAction(()=>{
            this.list = list
        })
    }
}
const store = new Store()

export default store