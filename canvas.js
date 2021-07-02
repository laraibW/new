window.onload = function() {
	var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle='#5f8896';
  ctx.fillRect(0,5,500,698);
  var img=new Image();
  img.src='night.jpg'; 
 ctx.drawImage(img, 0, 55, 500, 500);
 ctx.beginPath();
 ctx.fillStyle="White";
 ctx.font = ' 24px serif';
 ctx.fillText("It is a beautiful and delightful sight to behold ",30,315);
 ctx.fillText("the body of the Moon.",100,340);
 


};

 download_img=function(element)
{
	console.log(element);
	var c = document.getElementById("myCanvas");
	var image=c.toDataURL("image/png");
	element.href=image;
	element.click();
	
};

function headerfooterfunc()
{
	 

   var c = document.getElementById("myCanvas");

   var ctx = c.getContext("2d");
   ctx.clearRect(0,0,500,50);
   ctx.clearRect(0,560,500,50);
   ctx.fillStyle='#5f8896';
  ctx.fillRect(0,5,500,50);
  ctx.fillRect(0,560,500,50);
   ctx.font = '24px serif';
   ctx.fillStyle="white";
   headertext=document.getElementById("header").value;

  footerText=document.getElementById("footer").value;

  ctx.fillText(headertext,200,33);
  
  ctx.fillText(footerText,200,581);
  

};

