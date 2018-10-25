var fs = require('fs')
//console.log(fs.readFileSync('dictionary.md','utf-8'))
var dict=fs.readFileSync('dictionary.md','utf-8')
var dics=dict.split('\n')
for (var d=0;d<dics.length;d++) {
  console.log(dics[d])
};


var text=fs.readFileSync('test.md','utf-8')
var mas = text.split('\n')
for (var i=0;i<10;i++) {
  console.log('****************')
   var st = mas[i].search( /'/i)
  var en = mas[i].indexOf("'",st+1)
h1=mas[i].substring(st+1,en)
//console.log(h1)
var co= mas[i].indexOf(",",en)
var h2st = mas[i].indexOf("//",co)
h2=mas[i].substring(h2st+3,mas[i].length)
console.log(mas[i])
}
console.log('--------------')
console.log("'".charCodeAt(0))
//String.fromCharCode(39)
