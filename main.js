$(document).ready(function(){
	var cityButton= $('button.city');

	cityButton.click(function(){
		cityButton.removeClass("buttonClicked");
		$(this).addClass("buttonClicked");
	});


$.ajax({
	url:"https://api.openweathermap.org/data/2.5/group?id=5128638,3882428,4164138,4699066,5879400,4887398&units=imperial&appid=cb24e906fba6c93fd50902bbeb7808a2",
		type:"GET",
		dataType:"JSON",
		// breaks up query parameters

		success:function(data){
			console.log(data.list[0].name);
			console.log(data.list[0].weather[0].description);
			console.log(data.list[0].main.temp);
			console.log(data.list[1].name);
			console.log(data.list[1].weather[0].description);
			console.log(data.list[1].main.temp);
			console.log(data.list[2].name);
			console.log(data.list[2].weather[0].description);
			console.log(data.list[2].main.temp);
			console.log(data.list[3].name);
			console.log(data.list[3].weather[0].description);
			console.log(data.list[3].main.temp);
			console.log(data.list[4].name);
			console.log(data.list[4].weather[0].description);
			console.log(data.list[4].main.temp);
			console.log(data.list[5].name);
			console.log(data.list[5].weather[0].description);
			console.log(data.list[5].main.temp);	


			$("#newYork").html("The temperature is "+ data.list[0].main.temp+"&#176; F and "+ data.list[0].name+ 
				"<br/> is currently experiencing "+ data.list[0].weather[0].description);
			$("#LA").html("The temperature is "+ data.list[1].main.temp+"&#176; F and "+ data.list[1].name+ 
				"<br/> is currently experiencing "+ data.list[1].weather[0].description);
			$("#miami").html("The temperature is "+ data.list[2].main.temp+"&#176; F and "+ data.list[2].name+ 
				"<br/> is currently experiencing "+ data.list[2].weather[0].description);
			$("#houston").html("The temperature is "+ data.list[3].main.temp+"&#176; F and "+ data.list[3].name+ 
				"<br/> is currently experiencing "+ data.list[3].weather[0].description);
			$("#anchorage").html("The temperature is "+ data.list[4].main.temp+"&#176; F and "+ data.list[4].name+ 
				"<br/> is currently experiencing "+ data.list[4].weather[0].description);
			$("#chicago").html("The temperature is "+ data.list[5].main.temp+"&#176; F and "+ data.list[5].name+ 
				"<br/> is currently experiencing "+ data.list[5].weather[0].description);


			$(".newYork").click(function(){
				$("#newYork").toggle();
			});

			$(".LA").click(function(){
				$("#LA").toggle();
			});


			$(".miami").click(function(){
				$("#miami").toggle();
			});


			$(".houston").click(function(){
				$("#houston").toggle();
			});


			$(".anchorage").click(function(){
				$("#anchorage").toggle();
			});

			$(".chicago").click(function(){
				$("#chicago").toggle();
			});

		},


		error:function(data, textStatus, errorThrown){
			console.log("error");
			console.log(errorThrown);
		},

	});

});

	



	




