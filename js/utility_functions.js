
function parseData(arr, count, delim)
{
var temp = arr.split(delim);
var r_val = [];
var row = [];
var secondCount =0;


count = 6;
for(var a = 0; a < temp.length; a++)
{

if(a % count == 0)
{
 count = (temp[a+1] * 2) +2;	
 r_val.push([]);
 secondCount = 0;
}

r_val[r_val.length-1].push(temp[a]); //push onto new arr
secondCount++;


}
console.log(JSON.stringify(temp));

}