document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#Gui_to_khai').onclick = function(){
		/*Lỗi tên*/
		if (document.querySelector('#name').value == "") {
			alert("Mời bạn nhập tên");}
		/*Lỗi CMND*/
		if (document.querySelector('#CMND').value == "") {
			alert("Mời bạn nhập Số hộ chiếu / CMND / CCCD");
		}else if (document.querySelector('#CMND').value.length < 8) {
			alert("Số hộ chiếu / CMND / CCCD có 12 chữ số ");}
		/*Lỗi chưa chọn năm sinh*/
		if (document.querySelector('#Selectyear').value == "") {
			alert("Mời bạn chọn năm sinh");
		}
		/*Lỗi chưa chọn giới tính*/
		if (document.querySelector('#Selectsex').value == "") {
			alert("Mời bạn chọn giới tính");
		}
		/*Lỗi chưa chọn quốc tịch*/
		if (document.querySelector('#Selectscountry').value == "") {
			alert("Mời bạn chọn quốc tịch");
		}
		/*Lỗi chưa chọn tỉnh thành*/
		if (document.querySelector('#Selectprovince').value == "") {
			alert("Mời bạn chọn tỉnh thành");
		}
		/*Lỗi chưa chọn quận huyện*/
		if (document.querySelector('#Selectdistrict').value == "") {
			alert("Mời bạn chọn quận huyện");
		}
		/*Lỗi chưa chọn phường xã*/
		if (document.querySelector('#Selectvillage').value == "") {
			alert("Mời bạn chọn phường xã");
		}
		/*lỗi chưa kê khai địa chỉ */
		if(document.querySelector('#Selectaddress').value==""){
			alert("mời nhập thông tin địa chỉ củ thể");
		}
		/*Lỗi chưa nhập điện thoại*/
		if (document.querySelector('#SDT').value == "") {
					alert("Mời bạn nhập số điện thoại");
		}else if (document.querySelector('#SDT').value.length < 10) {
					alert("Mời bạn nhập lại số điện thoại, Số điện thoại có 10 số");
				}
		/*Lỗi chưa nhập email*/
		if (document.querySelector('#email').value == "") {
					alert("Mời bạn nhập Email");
		}else if (document.querySelector('#email').value.length < 0) {
					alert("Mời bạn nhập lại Email");}
		/*lỗi chưa điền thông tin thời gian di chuyển trong 21 ngày qua*/
		if (document.querySelector('#tt21n').value ==""){
			alert("mời bạn nhập thông tin thời gian di chuyển trong 21 ngày qua");
		}
		/*lỗi phương tiên di chuyển*/
		if (document.querySelector('#Selecttransport').value == ""){
			alert("Mời bạn nhập thông tin phương tiện di chuyển");
		}
		/*lỗi thông tin nơi đi*/
		if (document.querySelector('#departure').value == ""){
			alert("Mời bạn nhập thông tin địa chỉ nơi đi");
		}
		/*Lỗi thông tin nơi đến */
		if (document.querySelector('#destination').value == ""){
			alert("Mời bạn nhập thông tin nơi đến");
		}
		/*lỗi thông tin số hiệu phương tiện */
		if (document.querySelector('#vehicle_number').value == ""){
			alert("Mời bạn nhập thông tin số phương tiện");
		}
		/*lỗi thông tin chỗ ngồi */
		if (document.querySelector('#seats').value == ""){
			alert("Mời bạn nhập thông tin số ghế");
		}
		/*lỗi thông tin ngày khởi hành */
		if (document.querySelector('#departure_day').value == ""){
			alert("Mời bạn nhập thông tin thời gian bắt đầu di chuyển");
		}
		/*lỗi thông tin ngày tới*/
		if (document.querySelector('#next_day').value == ""){
			alert("Mời bạn nhập thông tin thông tin thời gian kết thúc di chuyển");
		}
		

		}
		document.querySelector("#selectvillage").onchange = changevillage;
		document.querySelector("#selectdistrict").onchange = changedistrict;
		document.querySelector("#selectprovince").onchange = changeprovince;
			})
function changevillage() {
				let phuongxa = document.querySelector("#selectvillage").value;
				if(phuongxa == '1'){
					document.querySelector('#phuongxa').innerHTML = 'Cổ Nhuế 1'
				}else if (phuongxa == '2') {
					document.querySelector('#phuongxa').innerHTML = 'Bến Nghé'
				}else if (phuongxa == '3') {
					document.querySelector('#phuongxa').innerHTML = 'Hòa An'
				}else{
	            	document.querySelector('#phuongxa').innerHTML = ''
	            }
			}
function changedistrict() {
				let quanhuyen = document.querySelector("#selectdistrict").value;
				if(quanhuyen == '1'){
					document.querySelector('#quanhuyen').innerHTML = ',Quận Bắc Từ Liêm'
				}else if(quanhuyen == '2'){
					document.querySelector('#quanhuyen').innerHTML = ',Quận 1'
				}else if(quanhuyen == '3'){
					document.querySelector('#quanhuyen').innerHTML = ',Quận Cẩm Lệ'
				}else{
	            	document.querySelector('#quanhuyen').innerHTML = ''
	            }
			}
function changeprovince() {
				let tinhthanh = document.querySelector("#selectprovince").value;
				if(tinhthanh == '1'){
					document.querySelector('#tinhthanh').innerHTML = ', Thành phố Hà Nội'
				}else if (tinhthanh == '2'){
					document.querySelector('#tinhthanh').innerHTML = ', Thành phố Hồ Chí Minh'
				}else if(tinhthanh == '3'){
					document.querySelector('#tinhthanh').innerHTML = ', Thành phố Đà Nẵng'
				}else{
	            	document.querySelector('#tinhthanh').innerHTML = ''
	            }
			}		
