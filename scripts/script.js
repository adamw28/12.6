var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
$('#search').click(searchCountries);
function searchCountries() {
 	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}
function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {if(item.capital==""){item.capital='null';}if(item.area==''){item.area='null';}
		var country = $('<ul>').addClass('country');
		country.appendTo(countriesList);
		$('<li>').text('Name : ' + item.name).appendTo(country);
		$('<li>').text('Native name : ' + item.nativeName).appendTo(country);
		$('<li>').text('Capital : ' + item.capital).appendTo(country);
		$('<li>').text('Area : ' + item.area).appendTo(country);
		$('<li>').text('Population : ' + item.population).appendTo(country);
	});
}