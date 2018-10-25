var fs = require('fs')
//console.log(fs.readFileSync('dictionary.md','utf-8'))
var dict=fs.readFileSync('dictionary.md','utf-8')
var dics=dict.split('\n');

var text=fs.readFileSync('test.md','utf-8')
var mas = text.split('\n')
for (var i=0;i<mas.length;i++)
  {
  var st = mas[i].search( /'/i)
  var en = mas[i].indexOf("'",st+1)
  tage=mas[i].substring(st+1,en)
  //console.log(h1)
  var co= mas[i].indexOf(",",en)
  var Vals = mas[i].indexOf("//",co)
  descr=mas[i].substring(Vals+3,mas[i].length)
  for (var d=0;d<dics.length-1;d++)
    {
    var dic= dics[d].split('|');
    if (tage==dic[1].trim())
      {
      if (descr==dic[2].trim())
        {
        console.log('On string '+(i+1)+' OK: '+tage+' '+dic[1]+'  '+descr+'='+dic[2] );
        }
      else {
        console.log('On string '+(i+1)+' BAD, need Change: '+tage+' '+dic[1]+'  '+descr+'<>'+dic[2] );

      }
      }
    }
  }
console.log('--------------')
//console.log("'".charCodeAt(0))
//String.fromCharCode(39)
