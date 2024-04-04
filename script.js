var res = fetch("https://restcountries.com/v3.1/all")
res.then((data)=>data.json()).then((data1)=>result(data1))


var container = document.createElement("div")
container.className="contatiner"

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
        var population = data1[i].population
        var flag = data1[i].flag
        col.innerHTML=`<div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${countryname}</h5>
            <p class="card-text">Capital: ${capital}<br>
            Region: ${region}<br>
            Population: ${population}<br>
            Flag: ${flag}
            </p>
        </div>
        </div>`
        row.append(col)
        container.append(row)
        document.body.append(container)
    }
}

//countryname, capital, region,flag, population
