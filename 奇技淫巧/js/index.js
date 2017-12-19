
//构建字符串的最快方式
var arr = ['whatever','you','go','and','whatever','you','do'];
var list = '<ul><li>' + arr.join("</li><li>") + '</li></ul>';
var dom = document.createElement('div');
dom.innerHTML = list;
//document.body.appendChild(dom);

// 句中单词首字母大写,其他小写
function titleCase(str) { 
 var string = str.split(' ');
  for(var i=0;i<string.length;i++){
    string[i] = string[i][0].toUpperCase() + string[i].substring(1,string[i].length).toLowerCase();
  }
  var result =  string.join(" ");
  return result;
}

titleCase("I'm a little tea pot");


//数组中选取最大值
function largestOfFour(arr) {
  var newArr = [],n;
  for(var i=0;i<arr.length;i++){
    n = Math.max.apply(null, arr[i]);
    newArr.push(n);
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//检查字符串结尾
function confirmEnding(str, target) { 
  var re =new RegExp( target + "$","gim");					//正则构造函数，可以传递变量
  if(re.test(str)){
    return true;											//如果已指定字符结尾，则返回true
  }
  return false;												//否则返回false
}

confirmEnding("Bastian", "n");


//金克斯的迫击炮
function destroyer(arr) {
  var args = arguments;										//获取所有参数
  var arr1 = arr;											//传入参数合并为一个数组，如（1, 2, 3, 1, 2, 3], 2, 3） 变为 （[1, 2, 3, 1, 2, 3, 2, 3]）
  for (var i = 0; i < args.length; i++) {					//循环参数
    arr1 = arr1.filter(function (item,index,array){
      return item !== args[i];								//返回数组中不存在的参数
    });
  }
  return arr1;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);