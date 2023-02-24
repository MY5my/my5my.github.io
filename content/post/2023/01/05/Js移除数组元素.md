---
title: "Js移除数组元素"
date: 2023-02-24T15:17:04+08:00
draft: false
tags: ["数组"]
isCJKLanguage: true
categories: ["Js"]
---

## forEach()方法
```shell 
let arr = [1,2,3,4,5,6,7,8,9];
arr.forEach((item,index,arr) => {
	if(item === 3){
   		arr.splice(index,1);
	}
});
console.log('length',arr.length); // 8
console.log('arr',arr); // [1, 2, 4, 5, 6, 7, 8, 9]

```

## filter()
```shell script
let arr1 = [1,2,3,4,5,6,7,8,9];
arr1 = arr1.filter((item)=>{
    return item !== 3;
});
console.log('length',arr1.length); // 8
console.log('arr',arr1); // [1, 2, 4, 5, 6, 7, 8, 9] 

// 在原数组上删除name是bbb的这条数据
const arr = [{name:"aaa"}, {name:"bbb"}]
arr.filter((item,index) => {
  return item.name !== "bbb"
})
//返回结果arr =[{name:"aaa"}]

```
## Array原型操作 使用reomve方法
```shell script
let arr = [1,2,3,4,5,6,7,8,9];
Array.prototype.remove = function(v) {
	for(let i = 0, j = 0; i < this.length; i++) {
		if(this[i] != v) {
			this[j++] = this[i];
		}
	}
	this.length -= 1;
}
arr.remove(2); //参数为要移除的元素
console.log('length',arr.length); // 8
console.log('arr',arr); // [1, 3, 4, 5, 6, 7, 8, 9]
```

## slice()方法  返回一个新的数组对象 
```shell script
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// 第一个参数：截取开始的位置的索引，包含开始索引；如果为负数，则表示从原数组中的倒数第几个元素开始提取，
            slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
// 如果省略 begin，则 slice 从索引 0 开始。
// 如果 begin 超出原数组的索引范围，则会返回空数组。
// 第二个参数：截取结束的位置的索引，不包含结束索引；如果为负数，则表示在原数组中的倒数第几个元素结束抽取。 
            slice(-2,-1) 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。
// 如果 end 被省略，则 slice 会一直提取到原数组末尾。
// 如果 end 大于数组的长度，slice 也会一直提取到原数组末尾。
console.log(animals.slice(2)); // ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // ["camel", "duck"]
console.log(animals.slice(1, 5)); // ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2)); // ["duck", "elephant"]
console.log(animals.slice(2, -1)); // ["camel", "duck"] 
```

## splice()方法 增删改操作
1.删除
第一位参数 0: 代表的是起始下标
第二位参数 2: 代表的是删除的个数
```shell script
let arr = [1,2,3,4,5,6,7,8,9];
arr.splice(0,2);//删除了[1,2]，两个元素剩余余下几个
console.log('length',arr.length); // 7
console.log('arr',arr); // [3, 4, 5, 6, 7, 8, 9] 
```
2.增加
第1位参数：2代表从何处添加数据，为必需参数。
第2位参数：0代表要删除的个数，可选。
 第3...位参数：可选，要添加的元素。
```shell script
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,0,"Lemon","Kiwi"); // Banana,Orange,Lemon,Kiwi,Apple,Mango

// 移除数组的第三个元素，并在数组第三个位置添加新元素
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,1,"Lemon","Kiwi"); // Banana,Orange,Lemon,Kiwi,Mango 
```


## shift()方法 删除第一个元素返回新数组
```shell script
let arr = [1,2,3,4,5,6,7,8,9];
arr.shift();//删除第一个元素
console.log('length',arr.length); // 8
console.log('arr',arr); // [2, 3, 4, 5, 6, 7, 8, 9] 
```

## pop()方法 删除数组最后一个元素返回新数组
```shell script
   let arr = [1,2,3,4,5,6,7,8,9];
   arr.pop();//删除最后一个元素
   console.log('length',arr.length); // 8
   console.log('arr',arr); // [1, 2, 3, 4, 5, 6, 7, 8] 
```
## delete方法 删除数组内容，但长度不变
```shell script
let arr = [1,2,3,4,5,6,7,8,9];
delete arr[2];
console.log('length',arr.length); // 9
console.log('arr',arr); // arr [1, 2, empty, 4, 5, 6, 7, 8, 9]
```
## 修改arr的length方法 截取了长度，删除长度之后的
```shell script
let arr = [1,2,3,4,5,6,7,8,9];
arr.length = 3;
console.log('length',arr.length); // 3
console.log('arr',arr); // [1, 2, 3] 
```
