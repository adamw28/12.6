var url = 'https://restcountries.eu/rest/v2/name/';
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
	resp.forEach(function(item) {
		if(item.capital==""){
			item.capital='null';
		}
		if(item.area==''){
			item.area='null';
		}
		var country = $('<ul>').addClass('country');
		var image = $('<img>').attr('src' , item.flag);
		country.appendTo(countriesList);
		$('<li>').addClass('flag').prepend(image).appendTo(country);
		$('<li>').text('Name : ' + item.name).appendTo(country);
		$('<li>').text('Native name : ' + item.nativeName).appendTo(country);
		$('<li>').text('Alternative : ' + item.altSpellings).appendTo(country);
		$('<li>').text('Capital : ' + item.capital).appendTo(country);
		$('<li>').text('Area : ' + item.area).appendTo(country);
		$('<li>').text('Population : ' + item.population).appendTo(country);
		if(item.borders.length>0){
			$('<li>').text('Borders: ' + item.borders).appendTo(country);
		}
		else{
			$('<li>').text('Borders: None').appendTo(country);
		}
		var languages = $('<li>');
		$('<p>').text('Languages : ').appendTo(languages);
		languages.appendTo(country);
		item.languages.forEach(function(language){
			$('<p>').text(language.name).appendTo(languages);
			if(language.name!==language.nativeName){
				$('<p>').addClass('native').text('(' + language.nativeName + ')').appendTo(languages);
			}
		});
	});
}