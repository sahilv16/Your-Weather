// const api = 'http://api.openweathermap.org/data/2.5/weather?q='
// const apiKey = ',IN&units=imperial&appid=91b6cdee2e31130d3616bf0d42c10241'
// const units = '&units=metrics'
// var url = api + document.getElementById('keyword').value + apiKey + units
function inputChange() {
    // document.body.innerHTML= ''
    console.log('sahils');
    
}

// var city  = document.getElementById('keyword').value ;
function weatherAsk() {
    // document.body.innerHTML =''
    var city  = document.getElementById('keyword').value ;
   $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=91b6cdee2e31130d3616bf0d42c10241&units=metric", function(data){
    console.log(data);
    // var icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";    
    // $('.icon').attr('src', icon)
    // $('input').value = ''
    var name = data.name
    var country = data.sys.country
    $('.name').html(name+","+country)

    // var country = data.sys.country
    // $('.country').html(country)

    var temp = data.main.temp
    $('.temp').html(temp+ "°C")

    var weather = data.weather[0].main
    $('.weather').html(weather)
  

    var humidity = data.main.humidity
    $('.humidity').html("Humidity: "+humidity+ "%")

    var sunrise = data.name
    $('.sunrise').html(sunrise)

    var speed = data.wind.speed
    $('.speed').html("Wind Speed: " +speed+"Km/h")

    var pressure = data.main.pressure
    $('.pressure').html("Pressure: "+pressure)

    var path = data.weather[0].main
    var img = "/all-images/"+path+".gif"
    $('.climate').attr('src', img)
})
}
