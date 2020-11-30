/*đoạn code chạy silde ảnh banner*/
var i = 1;
function trans() {
	var imgs = ["./img/anh1.png","./img/anh3.jpg","./img/anh4.jpg","./img/anh5.jpg"];
	document.querySelector('.banner_slide').src = imgs[i];
	i++;
	if(i==4)
	{
		i=0;
	}
}

document.addEventListener('DOMContentLoaded', function() {
	
			  document.querySelector('.banner_slide').onclick = setInterval(trans,2000);
			  document.querySelector('#btn_show').onclick = setInterval(showTime,1000);
          });
/*end*/
// hàm hiển thị giờ
function showTime(){
	let date = new Date();
	let hour = date.getHours(); // 0 - 23
	let minute = date.getMinutes(); // 0 - 59
	let second = date.getSeconds(); // 0 - 59
	let session = "AM";

	if(hour == 0){
		hour = 12;
	}

	if(hour > 12){
		hour = hour - 12;
		session = "PM";
	}

	let time = hour + ":" + minute + ":" + second + " " + session;
	document.querySelector('#MyClockDiisplay').innerHTML = time;

}
