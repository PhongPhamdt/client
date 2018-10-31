$(document).ready(function() {
	$('#search').on('submit', function(e) {
		e.preventDefault();
		const city_name = $('#keyword').val();
		 // $('#root').empty();
		$.ajax({
			url:`https://api.apixu.com/v1/forecast.json?key=e51fc4c9af264ce69be71045182010&q=${city_name}&days=7`,
			method: 'GET',
			success: function(data) {
				// var img = 'http' + data.current.condition.icon; 
				$('#day0').html(`${data.forecast.forecastday[0].date}`)
                $('.location').html(`${data.location.name}`)
                $('#temp0').html(`${data.forecast.forecastday[0].day.avgtemp_c.toFixed(0)}<sup>o</sup>C`)
                $('#icon0').html(`<img src=${data.forecast.forecastday[0].day.condition.icon} alt="" width=90>`)
                $('#humidity0').html(`<img src="images/icon-umberella.png" alt="">${data.forecast.forecastday[0].day.avghumidity.toFixed(0)}`)
                $('#wind0').html(`<img src="images/icon-wind.png" alt="">${data.forecast.forecastday[0].day.maxwind_kph.toFixed(0)}`)

                $('#day1').html(`${data.forecast.forecastday[1].date}`)
                $('#icon1').html(`<img src=${data.forecast.forecastday[1].day.condition.icon} alt="" width=48>`)
                $('#temp1').html(`${data.forecast.forecastday[1].day.avgtemp_c.toFixed(0)}<sup>o</sup>C`)
                $('#mintemp1').html(`${data.forecast.forecastday[1].day.mintemp_c.toFixed(0)}<sup>o</sup>`)

                $('#day2').html(`${data.forecast.forecastday[2].date}`)
                $('#icon2').html(`<img src=${data.forecast.forecastday[2].day.condition.icon} alt="" width=48>`)
                $('#temp2').html(`${data.forecast.forecastday[2].day.avgtemp_c.toFixed(0)}<sup>o</sup>C`)
                $('#mintemp2').html(`${data.forecast.forecastday[2].day.mintemp_c.toFixed(0)}<sup>o</sup>`)

                $('#day3').html(`${data.forecast.forecastday[3].date}`)
                $('#icon3').html(`<img src=${data.forecast.forecastday[3].day.condition.icon} alt="" width=48>`)
                $('#temp3').html(`${data.forecast.forecastday[3].day.avgtemp_c.toFixed(0)}<sup>o</sup>C`)
                $('#mintemp3').html(`${data.forecast.forecastday[3].day.mintemp_c.toFixed(0)}<sup>o</sup>`)

                $('#day4').html(`${data.forecast.forecastday[4].date}`)
                $('#icon4').html(`<img src=${data.forecast.forecastday[4].day.condition.icon} alt="" width=48>`)
                $('#temp4').html(`${data.forecast.forecastday[4].day.avgtemp_c.toFixed(0)}<sup>o</sup>C`)
                $('#mintemp4').html(`${data.forecast.forecastday[4].day.mintemp_c.toFixed(0)}<sup>o</sup>`)

                $('#day5').html(`${data.forecast.forecastday[5].date}`)
                $('#icon5').html(`<img src=${data.forecast.forecastday[5].day.condition.icon} alt="" width=48>`)
                $('#temp5').html(`${data.forecast.forecastday[5].day.avgtemp_c.toFixed(0)}<sup>o</sup>C`)
                $('#mintemp5').html(`${data.forecast.forecastday[5].day.mintemp_c.toFixed(0)}<sup>o</sup>`)

                $('#day6').html(`${data.forecast.forecastday[6].date}`)
                $('#icon6').html(`<img src=${data.forecast.forecastday[6].day.condition.icon} alt="" width=48>`)
                $('#temp6').html(`${data.forecast.forecastday[6].day.avgtemp_c.toFixed(0)}<sup>o</sup>C`)
                $('#mintemp6').html(`${data.forecast.forecastday[6].day.mintemp_c.toFixed(0)}<sup>o</sup>`)
			},
			error: function() {
                console.log("error");
            }
		});
	});
});