var res = fetch("https://restcountries.com/v3.1/all")
res.then((data)=>data.json()).then((data1)=>result(data1))


var container = document.createElement("div")
container.className="container"

var row = document.createElement("div")
row.className="row"

function result(data1){
    console.log(data1)
    for(var i=0;i<data1.length;i++){
        var col = document.createElement("div")
        col.className="col-md-4"
        var countryname = data1[i].name.common
        var capital = data1[i].capital[0]
        var region = data1[i].region
        var cntcode = data1[i].cca2
        var latlng = data1[i].latlng
        var flagList = data1[i].flags
        var flag = flagList.png
        
        col.innerHTML=`
            <div class="card border-primary mb-3" style="width: 18rem; height:380px; text-align:center;background-color:#D6C5A0">
            <h5 class="card-title bg-dark" style="color:white">${countryname}</h5>
            <img src=${flag} class="card-img-top" alt="..." style="width:200px; height:100px;margin-left:50px;margin-top:5px">
            <div class="card-body">
            <p class="card-text"  style="color:black"><b>Capital:</b> ${capital}<br>
            <b>Region:</b> ${region}<br>
            <b>Country Code:</b> ${cntcode}<br>
            <b>Latitude:</b> ${latlng[0]}<br>
            <b>Longitude:</b> ${latlng[1]}<br>
            <button class="btn btn-primary" onclick="weatherdata(${latlng[0]},${latlng[1]})" style="margin-top:5px">Click for Weather</button>
            </p>
        </div>
        </div>`
        row.append(col)
        container.append(row)
        document.body.append(container)
    }
}

async function weatherdata(lat,long) {
    let wdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=dcfc512ae960fa52bdc4db8a6c6dff1f`)
    let weather = await wdata.json()
    console.log(weather.main.temp)
    // alert(`The Weather of ${key} is ${weather.main.temp}`)
    alert(`The Weather is : ${weather.main.temp}`)
  }
//countryname, capital, region,flag, population
