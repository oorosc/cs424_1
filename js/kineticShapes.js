

function drawPumps(layer)
{
	for(var a =0; a < pumps.length; a++)
	{
	var circle = new Kinetic.Circle({
        x: pumps[a][0] *scaleX,
        y: pumps[a][1] * scaleY,
        radius: 10,
        fill: 'blue',
        stroke: 'black',
        strokeWidth: 2
      });
	  
	  circle.on('mousemove', function(){
	  if('Water Pump' == $('#tester').text()) clearTimeout(timeoutVar);
	  moveTester('Water Pump', this.getAbsolutePosition().y + ($(".kineticjs-content").offset().top - startY));
	  });//end of circle
	  
	  circle.on('mouseout', function(){
	  timeoutVar = setTimeout(clearTester, 200);
	  });//end of circle
	layer.add(circle);
	}
}




function moveTester(str, y)
{

var m = ($(".kineticjs-content").offset().left > 300) ? '0px' : '1000px';
	  $('#tester').css({top : y +'px', 
	  left : m}, 100);
	  
	  if($('#tester').text() == '')
	  $('#tester').append('<p style = "color : white; padding : 5px;">'+ str +'</p>');
	  
	  
	  $('#tester').fadeIn(300);

}


var days = [];

function clearTester(){ $('#tester').fadeOut(300).empty();};
var lookup =[];
var flag = false;
function drawDeaths(layer)
{

for(var a= 0; a < parsedData.length; a++)
{
	if(days.length != 0 && days.indexOf(a) == -1) continue;
	for(var b =0; b < parsedData[a][2].length; b++)
	{
	
	if(!globalAges[parsedData[a][2][b][2]] || !globalAges[Number(parsedData[a][2][b][3])+6])continue; //continue if certain age/gender disabled...
	

	var rect = new Kinetic.Rect({
			x: parsedData[a][2][b][0]*scaleX,
			y: parsedData[a][2][b][1]*scaleY,
			width: 10,
			height: 10,
			fill: (parsedData[a][2][b][3] == 0) ? '#573600' : 'teal',
			stroke: 'black',
			strokeWidth: 2
		  });

	lookup[rect.getAbsolutePosition().x * rect.getAbsolutePosition().y + ""] = parsedData[a][2][b]; //hash to look up the individual's stats
	rect.on('mousemove', function()
	{
	var str = '';

	var x  =lookup[this.getAbsolutePosition().x * this.getAbsolutePosition().y + ""][2];
	str += (lookup[this.getAbsolutePosition().x * this.getAbsolutePosition().y + ""][3] == 0) ? 'Male ' : 'Female ';
			if (x == 0)
			str +='0-10';
			else
			if(x ==    1)
			str += '11-20'
			else
			if(x ==   2)
			str += '21-40'
			else
			if(x ==  3)
			str += '41-60'
			else
			if(x == 4)
			str += '61-80'
			else
			if(x ==  5)
			str += '> 80'
	if(str == $('#tester').text()) clearTimeout(timeoutVar);
	moveTester(str, this.getAbsolutePosition().y + ($(".kineticjs-content").offset().top - startY))
	});//end of on

	rect.on('mouseout', function()
	{
	timeoutVar = setTimeout(clearTester, 200);
	});//end of on
	  
	layer.add(rect);
	}
}
}




var simpleText;

var custom;

var textinside = false;

var timeoutVar;

function newShape(size)
{

var r_val = new Kinetic.Shape({
        sceneFunc: function(context) {
          context.beginPath();
          context.moveTo(100, 100);
		 for(var a = 0; a < streets.length; a++)
		{ 
		  for(var b = 0; b < streets[a].length; b+= 2)
			{
			streets[a][b] = streets[a][b]*(scaleX+ size);
			streets[a][b +1] = streets[a][b +1] *(scaleY +size);
			if(b == 0)
			context.moveTo(streets[a][b], streets[a][b+1])
			else
			context.lineTo(streets[a][b], streets[a][b+1])
			}
		}
		 
          context.closePath();
          // KineticJS specific context method
          context.fillStrokeShape(this);
        },
		
		fill: '#FFFFFF',
        stroke: 'black',
        strokeWidth: 4
      });
custom = r_val;
return r_val;
}


function drawLocations(layer)
{
  var work = new Kinetic.Rect({
          x: (11- 2.8)*scaleX,
          y: (12.5-2.3)*scaleY,
		  height: 0.85*scaleY,
          width: 1.4*scaleX,
		  stroke: 'black',
		  opacity : 0.8,
          strokeWidth: 0.01*scaleX, 
          fill: "#BD3A00" ,
          rotation: 22
        });
		
		
var quad = new Kinetic.Rect({
          x: (12.2-2.8)*scaleX,
          y: (4.5-2.3)*scaleY,
		  height: 0.85*scaleY,
          width: .8*scaleX,
		  stroke: 'black',
		  opacity : 0.8,
          strokeWidth: 0.01*scaleX, 
          fill: "#360036" ,
          rotation: 22
        });
		
var hSquare = new Kinetic.Rect({
          x: (3.4-2.8)*scaleX,
          y: (13-2.3)*scaleY,
		  height: 0.6*scaleY,
          width: .8*scaleX,
		  stroke: 'black',
		  opacity : 0.8,
          strokeWidth: 0.01*scaleX, 
          fill: "#004207" ,
          rotation: -65
        });		
		

  var brewery = new Kinetic.Rect({
          x: (13.5-2.8)*scaleX,
          y: (12.3-2.3)*scaleY,
		  height: 0.5*scaleY,
          width: 0.8*scaleX,
		   stroke: 'black',
          strokeWidth: 0.01*scaleX, 
          fill: "#9700B2" ,
		  opacity : 0.8,
          rotation: -57
        });
		
		
var soho = new Kinetic.Rect({
          x: (17.3-2.8)*scaleX,
          y: (16.1-2.3)*scaleY,
		  height: 1.7*scaleY,
          width: 1*scaleX,
		   stroke: 'black',
		   opacity : 0.8,
          strokeWidth: 0.01*scaleX, 
          fill: "#7D6F06" ,
          rotation: -66
        });		
		
quad.on('mouseover', function()
{
if("Recent's Quadrant" == $('#tester').text()) clearTimeout(timeoutVar);
moveTester("Recent's Quadrant", this.getAbsolutePosition().y + ($(".kineticjs-content").offset().top - startY));

});	
quad.on("mouseout", function(){timeoutVar = setTimeout(clearTester, 200);});	
	
hSquare.on('mouseover', function()
{
if("Hanover Square" == $('#tester').text()) clearTimeout(timeoutVar);
moveTester('Hanover Square', this.getAbsolutePosition().y + ($(".kineticjs-content").offset().top - startY));

});
hSquare.on("mouseout", function(){timeoutVar = setTimeout(clearTester, 200);});

soho.on('mouseover', function()
{
if("Soho Square" == $('#tester').text()) clearTimeout(timeoutVar);
moveTester('Soho Square', this.getAbsolutePosition().y + ($(".kineticjs-content").offset().top - startY));

});	
soho.on("mouseout", function(){timeoutVar = setTimeout(clearTester, 200);});

work.on('mouseover', function()
{
if("Workhouse" == $('#tester').text()) clearTimeout(timeoutVar);
moveTester('Workhouse', this.getAbsolutePosition().y + ($(".kineticjs-content").offset().top - startY));

});	
work.on("mouseout", function(){timeoutVar = setTimeout(clearTester, 200);});

brewery.on('mouseover', function()
{
if("Brewery" == $('#tester').text()) clearTimeout(timeoutVar);
//localPopup((13.5-2.8)*scaleX, (12.3-2.3)*scaleY, layer);

moveTester('Brewery', this.getAbsolutePosition().y + ($(".kineticjs-content").offset().top - startY));
});		
brewery.on("mouseout", function(){timeoutVar = setTimeout(clearTester, 200);});

layer.add(hSquare);
layer.add(quad);
layer.add(soho);
layer.add(work);
layer.add(brewery);



}



function localPopup(x, y, layer)
{
var bText = new Kinetic.Text({
        x: (x-2.8)*scaleX,
        y: (y+0.4-2.3)*scaleY,
        text: 'Brewery',
        fontSize: 70,
		
        fontFamily: 'Calibri',
        fill: 'black'
      });
	  
var filler = new Kinetic.Rect({
          x: (x-2.9)*scaleX,
          y: (y+.3-2.3)*scaleY,
		  height: 1.7*scaleY,
          width: 1*scaleX,
		   stroke: 'black',
          strokeWidth: 0.01*scaleX, 
          fill: "black"
        });		  
	  
bText.on('mouseout', function()
{
this.remove();
layer.draw();
});	  
filler.on('mouseout', function()
{
this.remove();
layer.draw();
});	  
layer.add(bText);


}


var startY;
var zoomPercent = 100;
function initZoom()
{
$('.zoom').each(function(){$(this).on('click', function(){
	
	zoomPercent+= (zoomPercent < 150) ? 25 : 0;
	$('#kineticJS').css({zoom: zoomPercent+'%'});
	$('#mapping').css({zoom: zoomPercent+'%'});
	});});	
	
	$('.unzoom').each(function(){$(this).on('click', function(){
	zoomPercent-=(zoomPercent > 50) ? 25 : 0;
	$('#kineticJS').css({zoom: zoomPercent+'%'});
	$('#mapping').css({zoom: zoomPercent+'%'});
	});});

}
var layer2;
var stage;
var Layer;

function drawSecond()
{
if(layer2 != null) layer2.remove();
layer2 = new Kinetic.Layer();
drawDeaths(layer2);
if(globalAges[8])
{
drawPumps(layer2);
drawLocations(layer2);
}
stage.add(layer2);
}

function initDraw()
{

	$('#lower').css({top: '0px'});
	$('#tester').hide();
   
   
    stage = new Kinetic.Stage({
        container: 'kineticJS',
        width: 1100,
        height: 1100
      });

		 Layer = new Kinetic.Layer();
		 
	
	
	 
	 
	
	 var r_val = newShape(0);
	
	
	
		 $('#tester').fadeOut(300).empty();
	
	
	
	
      /*
       * since each line has the same point array, we can
       * adjust the position of each one using the
       * move() method
       */
	Layer.add(r_val);
	
		
      stage.add(Layer);
	   drawSecond();
	initZoom(Layer);  
	
	


}



function cssMath(obj)
{
var top = obj["top"];
var left = obj["left"];

console.log(top + "    " + left);
top = Number(top.substring(0, top.indexOf("px")));
left = Number(left.substring(0, left.indexOf("px")));
left +=33; left += "px";
top += 55; top+= "px";
return {"top" : top, "left" : left};
}






var scaleX = 40;
var scaleY = 30;

var wasHidden = false;

function initToggles()
{

$("#hideOverlay").toggle(
function()
{
$("#mapping").hide();
$(this).text("Show Overlay");
},
function()
{
$("#mapping").show();
$(this).text("Hide Overlay");
});



$(".kineticjs-content").draggable({delay : 100, distance : 5, zIndex : -1,
	stop : function(event, ui)
	{
	$("#mapping").css(cssMath({top : $(this).css("top"), left : $(this).css("left")}));
	if($("#hideOverlay").text() == "Hide Overlay")
	$("#mapping").show();
	},
	 drag: function( event, ui ) {
	 
			$("#mapping").hide();
	 
        //$('#upper' ).fadeOut();
			if($(this).offset().top <=60)
			{$('#lower').stop().animate({top: '1020px'}, 'fast');
			 if($('#chart_div').css('display') != 'none')
				{ $('#chart_div').hide(); wasHidden = true; $("#pointing").hide();}
			}
			else
			if($(this).offset().top >60)
			{$('#lower').stop().animate({top: '0px'}, 'fast');
			if(wasHidden)
			{
			wasHidden = false;
			$('#chart_div').show();
			$("#pointing").show();
			}
			}
			else
			{
			
			}
			
			
	      }});
		 
	$('#hideChart').toggle(
	function(){
	 $(this).text("Show Chart");
     $('#chart_div').fadeOut('slow');
	 $("#pointing").fadeOut("slow");
	 },
	 function()
	 {
	 $(this).text("Hide Chart");
	  $('#chart_div').fadeIn('slow');
	  $("#pointing").fadeIn("slow");
	});  
	
	$('#hideVisual').toggle(
	function(){
	 $(this).text("Show Visualisation");
     $(".kineticjs-content").fadeOut('slow');
	 },
	 function()
	 {
	 $(this).text("Hide Visualisation");
	   $(".kineticjs-content").fadeIn('slow');
	});  
	
	$("#legendBox").hide();
	$('#legend').toggle(
	function(){
	 $(this).text("Hide Legend");
     $("#legendBox").slideDown('slow');
	 },
	 function()
	 {
	 $(this).text("Reveal Legend");
	   $("#legendBox").slideUp('slow');
	});  
	
	
	
	$('.to').each(
	function()
	{
	$(this).toggle(
	function()
	{
	$(this).removeClass('btn-success');
	$(this).addClass('btn-inverse');
	$(this).attr('turned', 'false');
	globalAges[Number($(this).attr('val'))] = false;
	drawSecond();
	drawChart();
	},
	function()
	{
	$(this).removeClass('btn-inverse');
	$(this).addClass('btn-success');
	$(this).attr('turned', 'true');
	globalAges[Number($(this).attr('val'))] = true;
	drawSecond();
	drawChart();
	});
	
	});
	
	
	

}
var globalAges =[true, true, true, true, true, true, true, true, true];
