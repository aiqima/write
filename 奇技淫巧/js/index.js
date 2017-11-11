
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