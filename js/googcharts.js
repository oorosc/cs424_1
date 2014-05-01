

function drawChart()
{

var data = [];
var row;
data[0] = ['Day', 'Deaths', 'Male', 'Female'];



for(var a=0; a < parsedData.length; a++)
{

row = [];
var total = 0;
var fem = 0;
var male = 0;
for(var b=0; b < parsedData[a][2].length; b++)
{
if(!globalAges[parsedData[a][2][b][2]]) continue; //skip if age group doesn't match...

if(Number(parsedData[a][2][b][3]) == 0) //male
male++;
else //female
fem++;
total++;
}
row = [deathDays[a][0] ,total, male, fem];
data.push(row);
}


 var data2 = google.visualization.arrayToDataTable(data);

var options = {
			 explorer: {},
			 selectionMode : 'multiple',
          title: 'Cholera Deaths',
          hAxis: {title: 'Date', titleTextStyle: {color: 'black'}}
        };

        var chart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div'));
        chart.draw(data2, options);
		
		
$('#chart_div').on('click', function(){ setTimeout(function(){  changeMap(chart.getSelection()); }, 50);});
}

function changeMap(arr)
{
days = [];
for(var a=0; a < arr.length; a++)
days.push(arr[a]['row']);
console.log(days);
drawSecond();
}

/*
function countDeaths()
{
var r = [];
var temp;
var iterate =0;
for(var a =0; a < deathDays.length; a++)
{
var row =[];
row[0] =0;
row[1] = 0;
row[2] =[];
temp = iterate;
console.log(deathDays[a][0]);
for(iterate = iterate; iterate < temp + Number(deathDays[a][1]); iterate++)
{

row[0] += (deathAges[iterate][3] == 0) ? 1 : 0;
row[1] += (deathAges[iterate][3] == 0) ? 0 : 1;
row[2].push( deathAges[iterate]);
}
r.push(row);
}
console.log(JSON.stringify(r));

}*/