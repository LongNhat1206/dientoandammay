	document.addEventListener('DOMContentLoaded',function () {
		document.querySelector('#submit').onclick = function() {
			//cuakhau
			if(document.querySelector('#cuakhau').value == 1)
				document.querySelector('#cuakhau').style.borderColor = 'red';
			else
				document.querySelector('#cuakhau').style.borderColor = 'black';
		
			//hoten
			if(document.querySelector('#name').value.length < 5 )
				document.querySelector('#name').style.borderColor = 'red';
			else
				document.querySelector('#name').style.borderColor = 'black';
	
			//gioitinh
			if(document.querySelector('#gioitinh').value==1)
				document.querySelector('#gioitinh').style.borderColor = 'red';
			else
				document.querySelector('#gioitinh').style.borderColor = 'black';

	 		//hochieu
			if(document.querySelector('#sohochieu').value.length < 1)
				document.querySelector('#sohochieu').style.borderColor ='red';
			else
				document.querySelector('#sohochieu').style.borderColor='black';
	
	 		//date move
			if(document.querySelector('#check1').checked == true){
				if((document.querySelector('#sohieu').value.length < 1  ) || (document.querySelector('#soghe').value.length < 0)){
					document.querySelector('#sohieu').style.borderColor='red';
					document.querySelector('#soghe').style.borderColor='red';
				}
				else{
					document.querySelector('#sohieu').style.borderColor='black';
					document.querySelector('#soghe').style.borderColor='black';
				}	
			}

			//ngaykhoihanh
			if(document.querySelector('#ngaykhoihanh').value.length < 1 )
				document.querySelector('#ngaykhoihanh').style.borderColor='red';
			else
				document.querySelector('#ngaykhoihanh').style.borderColor='black';
	
	 		//ngaynhapcanh
			if(document.querySelector('#ngaynhapcanh').value.length < 1)
				document.querySelector('#ngaynhapcanh').style.borderColor='red';
			else
				document.querySelector('#ngaynhapcanh').style.borderColor='black';
	
	 		//noidi
			if(document.querySelector('#noidi').value.length < 1)
				document.querySelector('#noidi').style.borderColor='red';
			else
				document.querySelector('#noidi').style.borderColor='black';	
	
	 		//noiden
			if(document.querySelector('#noiden').value.length < 1)
				document.querySelector('#noiden').style.borderColor='red';
			else
				document.querySelector('#noiden').style.borderColor='black';
		
			//thongtindichuyen
			if(document.querySelector('#thongtindichuyen').value.length < 1)
				document.querySelector('#thongtindichuyen').style.borderColor='red';
			else
				document.querySelector('#thongtindichuyen').style.borderColor='black';
	
	 		//quan
			if(document.querySelector('#quanhuyen').value.length < 1)
				document.querySelector('#quanhuyen').style.borderColor='red';
			else
				document.querySelector('#quanhuyen').style.borderColor='black';
 			
 			//phuongxa
 			if(document.querySelector('#phuongxa').value.length <1)
 				document.querySelector('#phuongxa').style.borderColor='red';
 			else
 				document.querySelector('#phuongxa').style.borderColor='black';

 			//diachinoio
 			if(document.querySelector('#diachinoio').value.length < 10)
 				document.querySelector('#diachinoio').style.borderColor='red';
 			else
 				document.querySelector('#diachinoio').style.borderColor='black';

 			//phone
 			if(document.querySelector('#phone').value < 9)
 				document.querySelector('#phone').style.borderColor='red';
 			else
 				document.querySelector('#phone').style.borderColor='black';

 			//email
 			if(document.querySelector('#Email').value.length < 1)
 				document.querySelector('#Email').style.borderColor='red';
 			else
 				document.querySelector('#Email').style.borderColor='black';
 			
 			//
 			if(document.querySelector('#yes').checked = true){
 				document.querySelector('#no').checked = false;
 			}else{
 				document.querySelector('#no').checked = true;
 			}
 			
 		}
	})