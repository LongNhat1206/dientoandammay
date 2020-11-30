document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#khaibao').onclick = function(){
		/*Lỗi tên*/
		if (document.querySelector('#name').value == "") {
			alert("Mời bạn nhập tên");}
		/*Lỗi CMND*/
		if (document.querySelector('#CMND').value == "") {
			alert("Mời bạn nhập Số hộ chiếu / CMND / CCCD");
		}else if (document.querySelector('#CMND').value.length < 8) {
			alert("Số hộ chiếu / CMND / CCCD có 12 chữ số ");}
		/*Lỗi chưa chọn năm sinh*/
		if (document.querySelector('#selectyear').value == "") {
			alert("Mời bạn chọn năm sinh");
		}
		/*Lỗi chưa chọn giới tính*/
		if (document.querySelector('#selectsex').value == "") {
			alert("Mời bạn chọn giới tính");
		}
		/*Lỗi chưa chọn quốc tịch*/
		if (document.querySelector('#selectscountry').value == "") {
			alert("Mời bạn chọn quốc tịch");
		}
		/*Lỗi chưa chọn tỉnh thành*/
		if (document.querySelector('#selectprovince').value == "") {
			alert("Mời bạn chọn tỉnh thành");
		}
		/*Lỗi chưa chọn quận huyện*/
		if (document.querySelector('#selectdistrict').value == "") {
			alert("Mời bạn chọn quận huyện");
		}
		/*Lỗi chưa chọn phường xã*/
		if (document.querySelector('#selectvillage').value == "") {
			alert("Mời bạn chọn phường xã");
		}
		/*Lỗi chưa nhập điện thoại*/
		if (document.querySelector('#sodienthoai').value == "") {
					alert("Mời bạn nhập số điện thoại");
		}else if (document.querySelector('#sodienthoai').value.length < 10) {
					alert("Mời bạn nhập lại số điện thoại, Số điện thoại có 10 số");
				}
		/*Lỗi chưa nhập email*/
		if (document.querySelector('#email').value == "") {
					alert("Mời bạn nhập Email");
		}else if (document.querySelector('#email').value.length < 0) {
					alert("Mời bạn nhập lại Email");}
		}
		document.querySelector("#selectvillage").onchange = changevillage;
		document.querySelector("#selectdistrict").onchange = changedistrict;
		document.querySelector("#selectprovince").onchange = changeprovince;
			})
function changevillage() {
				let phuongxa = document.querySelector("#selectvillage").value;
				if(phuongxa == '1'){
					document.querySelector('#phuongxa').innerHTML = 'Xã An Khánh'
				}else if (phuongxa == '2') {
					document.querySelector('#phuongxa').innerHTML = 'Xã Cát Quế'
				}else if (phuongxa == '3') {
					document.querySelector('#phuongxa').innerHTML = 'Xã Yên Sở'
				}else{
	            	document.querySelector('#phuongxa').innerHTML = ''
	            }
			}
function changedistrict() {
				let quanhuyen = document.querySelector("#selectdistrict").value;
				if(quanhuyen == '1'){
					document.querySelector('#quanhuyen').innerHTML = ', Quận Bắc Từ Liêm'
				}else if(quanhuyen == '2'){
					document.querySelector('#quanhuyen').innerHTML = ', Quận Hoàn Kiếm'
				}else if(quanhuyen == '3'){
					document.querySelector('#quanhuyen').innerHTML = ', Huyện Hoài Đức'
				}else{
	            	document.querySelector('#quanhuyen').innerHTML = ''
	            }
			}
function changeprovince() {
				let tinhthanh = document.querySelector("#selectprovince").value;
				if(tinhthanh == '1'){
					document.querySelector('#tinhthanh').innerHTML = ', Tỉnh An Giang'
				}else if (tinhthanh == '2'){
					document.querySelector('#tinhthanh').innerHTML = ', Thành phố Hà Nội'
				}else if(tinhthanh == '3'){
					document.querySelector('#tinhthanh').innerHTML = ', Thành phố Hồ Chí Minh'
				}else{
	            	document.querySelector('#tinhthanh').innerHTML = ''
	            }
			}		
