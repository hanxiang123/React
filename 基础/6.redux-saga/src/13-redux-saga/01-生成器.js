/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
// function *test(){
//     console.log("111111")
//     console.log("22222")
//     console.log("333333")
//     console.log("444444")
// }
// test() 
// test().next()

// generator 函数不会执行，必须调用 next() 函数才会执行
// 遇到 yield 会停下来



// function *test(){
//     console.log("111111")
//     var input1 = yield "111-输出";
//     console.log("22222",input1)
//     var input2 =yield "222-输出";
//     console.log("333333",input2)
//     var input3 =yield "333-输出";
//     console.log("444444",input3)
// }

// var kerwintest = test()

// var res1 = kerwintest.next()
// console.log(res1)
// var res2 = kerwintest.next('aaaa')
// console.log(res2)
// var res3 = kerwintest.next('bbbb')
// console.log(res3)
// var res4 = kerwintest.next('ccccc')

// console.log(res4)


// async function  A(){
//     var res1 =await fetch()
//     var res2 =await fetch()
//     var res3 =await fetch()

//   console.log(res3)
// }


function *test1(){

    setTimeout(()=>{
        console.log("11111-success")
        kerwintest1.next() // 第二种方案，在回调中调用 next() 
    },1000)

    yield;
    setTimeout(()=>{
        console.log("222222-success")

        kerwintest1.next()
    },1000)
    yield;
    setTimeout(()=>{
        console.log("3333-success")
    },1000)
    yield;
}

var kerwintest1 = test1()

kerwintest1.next()
// kerwintest1.next()
// kerwintest1.next()
// 因为 next() 函数是立即执行，所以以上会一起打印出来
