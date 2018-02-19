     	$("#secondModal").modal('show');

        function generationNum(array) {
     		var num = Math.floor(Math.random() * 95);
     		for (var i = 0; i < 20; i++) {
     	 		if(num==array[i])
     	 		{
     	 			return generationNum(array);
     	 		}						
     		}
     		return num;
		}

		



     	var str='';
     	var arr = ["red", "blue", "green", "yellow"];
     	
     	for (var i = 0; i < 8; i++) {
     		str+='<div class = "row">';
     		for (var j = 0; j < 12; j++) {
     					
     					str+='<div class = "coll-lg-1"><div class = "block" id="block'+(i*12+j)+'"></div></div>';
     		}
     		str+='</div>';
     	}

     	document.getElementById('main__playZon').innerHTML+= str;

   var activBlocks = [];
   function createZon(){
             for (var i = 0; i < 96; i++){
                $('#block'+i).removeClass("activ");
                $('#block'+i).css({'background': 'white'});
            }

   		for (var i = 0; i < 20; i++)
  			activBlocks[i]=generationNum(activBlocks);
     	for (var i = 0; i < 96; i++)
     		for(var j=0; j<20; j++)
                
     			if(activBlocks[j]==i)
     			{
     				var rand = Math.floor(Math.random() * arr.length);
  					$('#block'+i).addClass("activ");
  					$('#block'+i).css({'background': arr[rand]});
     			}
   }
   createZon();

var countdown = $('#countdown span'),
	countdownAll = $('#countdown'),
	points = $('#points'),
    but = $('.menu__buttons__start'), newGame =  $('.menu__buttons__newGame'), rules =  $('.menu__buttons__rules'),
    timer,count=0, playZon = $('#main__playZon');
var pause=0, contin = false, bonus=false;
    countdownAll.hide();
function startCountdown(){
    pause++;
    if(pause==1){
    document.getElementsByClassName('menu__buttons__start')[0].innerHTML="Пауза";
	count=0;
	points.text(count);
    var startFrom = 60;
    countdownAll.show();
	points.show();
    countdown.text(startFrom).parent('p').show();
    timer = setInterval(function(){
        if(pause%2==1){
        countdown.text(--startFrom);
        if(bonus==true){
            startFrom++;
            bonus=false;
        }
        if(startFrom <= 0 ) {
            pause=0;
            clearInterval(timer);
            countdownAll.hide();
            points.hide();
	        $("#firstModal").modal('show');
            document.getElementsByClassName('rez')[0].innerHTML=count;
            createZon();
            timer=null; 
            document.getElementsByClassName('menu__buttons__start')[0].innerHTML="Старт";
    }
}
    
}
    ,1000);
}else document.getElementsByClassName('menu__buttons__start')[0].innerHTML="Старт";
}


function newActiv(){
     			var newActivBlock = generationNum(activBlocks);
                activBlocks.push(newActivBlock);
    for (var i = 0; i < 96; i++)
    {
     	if(newActivBlock==i)
     		{
     			var rand = Math.floor(Math.random() * arr.length);
  				$('#block'+i).addClass("activ");
 				$('#block'+i).css({'background': arr[rand]});
 				break;}
   			}
	}

function getIndex(str){
if(str[6]==undefined)
	return(Number(str[5]));
else
	return(Number(str[5]+str[6]));
}

function showRules(){
    $("#secondModal").modal('show');
}

but.click(startCountdown);
newGame.click(createZon);
rules.click(showRules);

$( document ).on("click",".activ",function(){
	var id  = getIndex(this.id);
	if(timer && pause%2==1){
    if($(this).css("background")=='rgb(255, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box')
    count++;

    if($(this).css("background")=='rgb(0, 0, 255) none repeat scroll 0% 0% / auto padding-box border-box')
    bonus=true;

	count++;
	points.text(count);
    $(this).removeClass('activ');
    $(this).css("background", "white");
    var num = Math.floor(Math.random() * 3);
			activBlocks.splice(activBlocks.indexOf(id),1);
            for (var i =0; i <num; i++) {
               newActiv();
            }
}
})

var str_table="";var newStr="";
if(localStorage.getItem('rez')!==null)
{
    newStr = localStorage.getItem('rez');
    tbl.innerHTML += newStr;

}
$('#firstModal').on('hidden.bs.modal', function (event) { 
var name= document.getElementById("txt").value;

  var tr="";
  tr += "<tr><td>"+name+"</td><td>"+count+"</td></tr>";
 var tbl=document.getElementById('tbl');
 newStr+=tr;
  tbl.innerHTML += tr;
  localStorage.setItem('rez', newStr);
});