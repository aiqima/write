
//构建字符串的最快方式
var arr = ['whatever','you','go','and','whatever','you','do'];
var list = '<ul><li>' + arr.join("</li><li>") + '</li></ul>';
var dom = document.createElement('div');
dom.innerHTML = list;
//document.body.appendChild(dom);
