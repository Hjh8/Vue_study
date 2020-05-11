/*  
    补充:
        箭头函数(一般在需要传递函数作为参数时使用)
        当箭头函数不需要或者需要多个参数时，就使用()代表参数部分
            () => console.log(5) 或 (n) => console.log(n)
        当箭头函数里不需要参数并且需要写多行代码时，函数体像正常函数一样
            () => {
                console.log('1');
                console.log(2);
            }
        注意点:
            正常函数体内的this对象就是定义时所在的对象。
            箭头函数体内的this对象则是使用时的对象
*/

const nums = [10,20,30,40]
let new_nums = [];
new_nums = nums.filter(function(n){
    return n > 20  // 必须是返回boolean
})
console.log(new_nums) // Array [ 30, 40 ]
//箭头函数表示法
num = nums.filter(n => n>20)
console.log(num)  // Array [ 30, 40 ]


new_nums = nums.map(function(n){
    return n*2
})
console.log(new_nums) // Array(4) [ 20, 40, 60, 80 ]
//箭头函数表示法
num = nums.map(n => n*2)
console.log(num)  // Array(4) [ 20, 40, 60, 80 ]


//previous:上一次返回的值  n:数组的每一个元素  0表示给previous赋初始值
new_nums = nums.reduce(function(previous,n){
    return previous + n
},0)
console.log(new_nums) // 100
//箭头函数表示法
num = nums.reduce((previous,n) => previous + n,1)
console.log(num)  // 101

