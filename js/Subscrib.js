
var dk = false;
function kiemtra(){

	var loi=0;
	/*hàm kiểm tra họ tên*/
		let number = ['1','2','3','4','5','6','7','8','9','0'];
		let phantu =[];
		/*tách phần tử của chuỗi*/
		for(var i = 0;i<document.querySelector('#hoten').value.length;i++){
			phantu.push(document.querySelector('#hoten').value.slice(i,i+1));
		}
		var check = false;
		/*so sánh chuỗi với chuỗi number*/
		for(var i =0;i<phantu.length;i++){
			for(var j = 0;j<number.length;j++){
				if(phantu[i]==number[j]){
					check=true;
					break;
				}
			}
		}
		if(document.querySelector('#hoten').value==""){
			document.querySelector('#thongbao1').innerHTML = " Bạn hãy nhập họ tên!";
			var dk=true;
			loi++;

		}
		else if(document.querySelector('#hoten').value.length <8){
			document.querySelector('#thongbao1').innerHTML = " Bạn nhập ít nhất 8 kí tự!";
			 var dk=true;
		}else if(check==true){
			document.querySelector('#thongbao1').innerHTML = "Tên không được chứa số";
		
		}else{
			document.querySelector('#thongbao1').innerHTML="";
			
		}
	/*hàm kiểm tra tên đăng nhập*/
		if(document.querySelector('#tendangnhap').value==""){
			document.querySelector('#thongbao2').innerHTML = " Bạn hãy nhập tên đăng nhập!";
			dk=true;
		}
		else if(document.querySelector('#tendangnhap').value.length <8){
			document.querySelector('#thongbao2').innerHTML = " Bạn nhập ít nhất 8 kí tự!";
			dk=true;
		}else{
			document.querySelector('#thongbao2').innerHTML="";
		
		}
		
		/*hàm kiểm tra password*/
		if(document.querySelector('#password').value==""){
			document.querySelector('#thongbao3').innerHTML = " Bạn hãy nhập mật khẩu!";
			 dk=true;
		}
		else{
			document.querySelector('#thongbao3').innerHTML = "";
			
		}
	/*hàm kiểm tra nhập lại password*/
		if(document.querySelector('#password').value != document.querySelector('#passwords').value) {
			document.querySelector('#thongbao4').innerHTML=" Mật khẩu không khớp!";
			dk=true;
		}
		else{
			document.querySelector('#thongbao4').innerHTML="";
			
		}
	/*hàm kiểm tra email*/
		var res = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/i;

		 if(!res.test(document.querySelector('#email').value))
		{
			document.querySelector('#thongbao5').innerHTML=" Bạn nhập sai cú pháp!";
			dk=true;
		}
		else{
			document.querySelector('#thongbao5').innerHTML="";
			 
		}
	/*hàm kiểm tra số điện thoại*/
		if(document.querySelector('#sdt').value.length != 10){

			document.querySelector('#thongbao6').innerHTML=" Bạn chưa nhập số điện thoại!";
			 dk=true;
		}
		else{
			document.querySelector('#thongbao6').innerHTML="";
			
		}
	/*hàm kiểm tra câu trả lời*/
		if(document.querySelector('#cautraloi').value=="")
		{
			document.querySelector('#thongbao7').innerHTML=" Bạn chưa nhập câu trả lời!";
			dk=true;
		}
		else{
			document.querySelector('#thongbao7').innerHTML="";
			
		}
			/*ẩn,hiện nút đăng ký*/
			if(dk==true){
				document.querySelector('#dangky').disabled= true;
			}else{
				document.querySelector('#dangky').disabled= false;
				
			}
}

function dangky(){
	
		alert("Bạn đã đăng ký thành công!");
		alert("Quay về trang chủ");
}

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('#kiemtra').onclick =kiemtra;
	document.querySelector('#dangky').onclick = dangky;
	document.querySelector('#dangky').disabled= true;
});