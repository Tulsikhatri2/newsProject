var baseUrl = "https://newsapi.org/v2/everything";
var apiKey = "c3feacbcbfb947cba7bf2200cd57ad22";

$("#searchBtn").click(function () {
   var search = $("#s1").val();
   var date = $("#date").val();

   console.log("search:", search);
   console.log("date:", date)
   $.get(`${baseUrl}?q=${search}&${date}&india&sortBy=publishedAt&apiKey=${apiKey}`, function (data, status) {
      renderCard(data.articles);
   })
})

$("#home").click(function () {
   $.get(`${baseUrl}?q=popularity&2024-01-01&sortBy=publishedAt&apiKey=${apiKey}`, function (data, status) {
      renderCard(data.articles);
   })
})

$("#world").click(function () {
   $.get(`${baseUrl}?q=world&news&2024-01-01&sortBy=publishedAt&apiKey=${apiKey}`, function (data, status) {
      renderCard(data.articles);
   })
})

$("#india").click(function () {
   $.get(`${baseUrl}?q=india&2024-01-01&sortBy=publishedAt&apiKey=${apiKey}`, function (data, status) {

      renderCard(data.articles);
   })
})

$("#forYou").click(function () {
   $.get(`${baseUrl}?q=latest&2024-01-01&sortBy=publishedAt&apiKey=${apiKey}`, function (data, status) {
      renderCard(data.articles);
   })
})

$("#business").click(function () {
   $.get(`${baseUrl}?q=business&2024-01-01&sortBy=publishedAt&apiKey=${apiKey}`, function (data, status) {
      renderCard(data.articles);
   })
})

$("#technology").click(function () {
   $.get(`${baseUrl}?q=technology&news&2024-01-01&sortBy=publishedAt&apiKey=${apiKey}`, function (data, status) {
      renderCard(data.articles);
   })
})

$("#political").click(function () {
   $.get(`${baseUrl}?q=politics&news&2024-01-01&sortBy=publishedAt&apiKey=${apiKey}`, function (data, status) {
      renderCard(data.articles);
   })
})

$("#sports").click(function () {
   $.get(`${baseUrl}?q=sports&india&news&2024-01-01&sortBy=publishedAt&apiKey=${apiKey}`, function (data, status) {
      renderCard(data.articles);
   })
})

$("#fashion").click(function () {
   $.get(`${baseUrl}?q=fashion&news&2024-01-01&sortBy=publishedAt&apiKey=${apiKey}`, function (data, status) {
      renderCard(data.articles);
   })
})

$("#entertainment").click(function () {
   $.get(`${baseUrl}?q=entertainment&india&news&2024-01-01&sortBy=publishedAt&apiKey=${apiKey}`, function (data, status) {
      renderCard(data.articles);
   })
})

$("#health").click(function () {
   $.get(`${baseUrl}?q=health&news&2024-01-01&sortBy=publishedAt&apiKey=${apiKey}`, function (data, status) {
      
   })
})

$("#science").click(function () {
   $.get(`${baseUrl}?q=science&india&news&2024-01-01&sortBy=publishedAt&apiKey=${apiKey}`, function (data, status) {
      renderCard(data.articles);
   })
})

function renderCard(data) {
   var newsString = ``;
   data.forEach((a) => {
      newsString += `<div class="col-lg-3 col-md-3  col-sm-12 mt-3" style="overflow:hidden;height:400px">
      <div class="card">
      <h4 class="card-header" style="font-size:15px; color:white"><b>${a.title}</b></h4>
      <img src="${a.urlToImage}" class="card-img-top">
      <div class="card-body">
      <p class="card-text"style="font-size:15px; color:white">${a.description}</p>
      <p style="color:white"><b>Author Name:${a.author}</b></p>
      </div>
      </div>
      </div>`
   })
   $("#news").html(newsString);
}

$(document).ready(function () {
   $.get(`${baseUrl}?q=indore&2024-01-01&sortBy=publishedAt&apiKey=${apiKey}`, function (data, status) {
      console.log(data)
      console.log(status)
      var newsString = "";
      data.articles.forEach((a) => {
         newsString += `<div>
        <div class="card mt-3" style="overflow:hidden;height:400px">
        <h4 class="card-header" style="font-size:15px; color:white"><b>${a.title}</b></h4>
        <img src="${a.urlToImage}" class="card-img-top">
        <div class="card-body">
        <p class="card-text"style="font-size:15px; color:white" >${a.description}</p>
        <p style="color:white"><b>Author Name:${a.author}</b></p>
        </div>
        </div>
        </div>`
      })
      $("#local").html(newsString);
   })

   $.get(`https://api.openweathermap.org/data/2.5/weather?q=indore&metric&appid=06f9dfc835752a34754b7aeaece84cfc`, function (data, status) {
      var kelvin = (data.main.temp);
      var celsius = parseInt(kelvin - 273);
      console.log(celsius);
      $("#temp").html(celsius + "°C");
   });

   $.get(`${baseUrl}?q=popularity&2024-01-01&sortBy=publishedAt&apiKey=${apiKey}`, function (data, status) {
      renderCard(data.articles);
   })
})