function generateBirthDate(){
	var birthDate = new Date;
	var newBirthDate = new Date(birthDate -  Math.floor((Math.random() * 1893456000000) + 441504000000));
	var birthDay = newBirthDate.getDate().toString().length > 1 ? newBirthDate.getDate() : '0'+newBirthDate.getDate();
	var birthMonth= (newBirthDate.getMonth()+1).toString().length > 1 ? newBirthDate.getMonth()+1 : '0'+(newBirthDate.getMonth()+1);
	var birthYear = newBirthDate.getYear()+1900;
	var newBirthFormat = birthDay+"/"+birthMonth+"/"+birthYear;
	return newBirthFormat;
}

$('.btn-primary').on("click", function(){
	
	$.ajax({
		url: 'https://randomuser.me/api/',
		dataType: 'json',
	})
	.done( function(data){
		console.log("Datos obtenido");
		console.log(data);
		
		// get reg date and format it
		var regDate = new Date (data.results[0].registered * 1000);
		var newRegDate = new Date(regDate -  (Math.floor((Math.random() * 63115200000) + 1)));
		console.log(newRegDate);
		var regDay = newRegDate.getDate().toString().length > 1 ? newRegDate.getDate() : '0'+newRegDate.getDate();
		var regMonth= (newRegDate.getMonth()+1).toString().length > 1 ? newRegDate.getMonth()+1 : '0'+(newRegDate.getMonth()+1);
		var regYear = newRegDate.getYear()+1900;
		console.log(regYear);
		var newRegFormat = regDay+"/"+regMonth+"/"+regYear;// var bornDate = data.results[0].

		var nat= data.results[0].nat;
		var gender= data.results[0].gender;
		var address= data.results[0].location.street + " " + data.results[0].location.postcode + " " + data.results[0].location.city + " " + data.results[0].location.state;
		var email= data.results[0].email;
		var phone= data.results[0].cell;
		$('.registration-date').html(newRegFormat);
		$('.born-date').html(generateBirthDate());
		
		$('.gender').html(gender);
		$('.address').html(address);
		$('.email').html(email);
		$('.phone').html(phone);

		// Country and flag
		$.each( countries, function (key, country){
			if (key===nat){ result = country;}
		})
		var countryFlag = '<img width="15px" src="https://lipis.github.io/flag-icon-css/flags/4x3/'+ nat.toLowerCase() + '.svg"/> ' + result;
		$('.nationality').html(countryFlag);

		// Profile Image
		var imageT = data.results[0].picture.thumbnail;
		var imageM = data.results[0].picture.medium;
		$('.profile-image').prop("src",imageM);

		//https://lipis.github.io/flag-icon-css/flags/4x3/vi.svg
	});
});




		// 	// Date of birth
		// 	var birthDate = new Date;
		// 	var newBirthDate = new Date(birthDate -  Math.floor((Math.random() * 1893456000000) + 441504000000));
		// 	var birthDay = newBirthDate.getDate().toString().length > 1 ? newBirthDate.getDate() : '0'+newBirthDate.getDate();
		// 	var birthMonth= (newBirthDate.getMonth()+1).toString().length > 1 ? newBirthDate.getMonth()+1 : '0'+(newBirthDate.getMonth()+1);
		// 	var birthYear = newBirthDate.getYear()+1900;
		// 	var newBirthFormat = birthDay+"/"+birthMonth+"/"+birthYear;
		// 	$('.born-date').html(newBirthFormat);
		// });
