/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

 class Bus{
     public name  ="kerwin" //共有属性
     private _list:any = [] //私有变量，只能在自己内部访问

     protected age = 100 // 受保护的，不能在外面访问
     public subscribe(cb:any){
        this._list.push(cb)
     }

     public dispatch(){
         this._list.forEach((cb:any)=>{
             cb&&cb()
         })
     }
 }


 class Child extends Bus{

    aaa(){
        console.log(this.name,this.age)
    }
 }

 var obj = new Bus()
 obj.subscribe(()=>{

 })

 console.log(obj.name)
//  obj._list = []
//  console.log(obj._list)
 

export default {}