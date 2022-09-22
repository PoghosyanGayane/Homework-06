const express = require('express');
const url = require('url');
const app = express();
function randomNumber(min, max) { 
  return Math.floor(Math.random() * (max - min) + min);
}
 app.get('/', function (req, res){
  var html, i=1, j=1, k=0, l=0, p=0;
  var html= '<html><head><style> tr,td {border: 1px solid black; width: 40px; height: 40px} .b {background-color: blue;}   .g {background-color: grey;} .br {background-color: brown;}</style></head><body><table>'
  html+='<body><table width="640px" height="640px">';
   for(i;i<17;i++){
    html+='<tr>';
    for(j;j<17;j++){
  var n= randomNumber(-1, 4);
  // html+='<td class="g"></td>';
      if (n==1 || n==2  || n==3 ){
        html+='<td class="b"></td>';
        k+=1;
        
      }
      if (n==0){
        html+='<td class="br"></td>';
        l+=1;

      }
      if (n==-1){
        html+='<td class="g"></td>';
        p+=1;
      }

     };
     j=1;
    html+='</tr>';
   };
   html+='</table>'+k+' '+l+' '+p+'</body></html>';
   res.send(html);
    });
 
 app.listen(9000, function (req, res ){
   console.log('Running ccc...')
 });