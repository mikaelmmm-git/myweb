/** 实现图片栏自动更换图片**/
	var curIndex=0;
	//时间间隔 单位毫秒
	var timeInterval=1000;
	var arr=new Array();
	arr[0]="img/1.jpg";
	arr[1]="img/2.jpg";
	arr[2]="img/3.jpg";
	arr[3]="img/4.jpg";
	setInterval(changeImg,timeInterval);
	function changeImg()
{
		var obj= document.getElementById("img-ban");
if (curIndex==arr.length-1)
{
curIndex=0;
}
else
{
curIndex+=1;
}
obj.src=arr[curIndex];
}

