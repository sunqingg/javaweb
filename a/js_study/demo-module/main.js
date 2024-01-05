/*
    *代表module.js中的所有成员
    m1代表所有成员所属的对象
*/
import {PI,Person,sum,qq} from './1.js'
// 使用暴露的属性
console.log(PI)
// 调用暴露的方法
let result =sum(10,20)
console.log(result)
// 使用暴露的Person类
let person =new Person('张三',10)
person.sayHello()

qq()

