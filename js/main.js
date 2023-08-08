var allData;
var allData2;
var allData3;
var allData4;

let searchBar= document.getElementById('search')
let  currentCity = "cairo"
 
var Raw = document.getElementById('Raw');
var Raw2 = document.getElementById('Raw2');
var Raw3 = document.getElementById('Raw3');


// =======================================================================================



// Showing the left div

async function getData2(){

    
    var res= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${currentCity}&days=3`)
    var urData= await res.json()

    allData2=urData.forecast.forecastday

    
     
    console.log(allData2)

    showData()


}


function showData(){
    
    var data2 ="";
    
    for( i = 0 ; i < allData2.length ; i++){
    
    data2 =
    
    ` 
    <i class="fa-solid fa-snowflake"></i>

    <div class="text-dark text-right">
    <div class="d-flex justify-content-between">
      <img src="https://${allData2[0].day.condition.icon}" alt="" style="width:110px ;">
      <h2 class="fs-1 fw-bolder p-3" style="text-transform: capitalize;">${currentCity}</h2>
      </div>
      
        <h2 class="fs-3 fw-bold">${allData2[0].day.condition.text}</h2>
        </br>
        <div class="d-flex justify-content-between">
        <h5>Today <i class="fa-solid fa-calendar-days"></i></h5>
        <h3><i class="fa-regular fa-snowflake"></i> ${allData2[0].day.daily_chance_of_snow}%</h3>
        </div>
        <div class="d-flex justify-content-between">

        <h3>${allData2[0].date}</h3>
        <h3><i class="fa-solid fa-umbrella"></i> ${allData2[0].day.daily_chance_of_rain}%</h3>

        </div>
        </br>
        <div class="d-flex justify-content-between">
        <h5>Temperature </h5>
        <h3><i class="fa-solid fa-wind"></i> ${allData2[0].day.maxwind_kph} kph</h3>
        </div>
        <div class="d-flex justify-content-between fs-2 fw-bolder">
        <h6 class="fw-bold">Celsius</h6>
        <h6 class="fw-bold" >Fahrenheit</h6>

        </div>
        
        <div class="d-flex justify-content-between">
        <h4>AvgTemp ( ${allData2[0].day.avgtemp_c} &degC) <i class="fa-solid fa-temperature-three-quarters"></i></h4>
        <h4>AvgTemp ( ${allData2[0].day.avgtemp_f} &degF) <i class="fa-solid fa-temperature-three-quarters"></i></h4>
        </div>
        <div class="d-flex justify-content-between">
        <p>MaxTemp ( ${allData2[0].day.maxtemp_c} &degC) <i class="fa-solid fa-temperature-arrow-up"></i></p>
        <p>MaxTemp ( ${allData2[0].day.maxtemp_f} &degF) <i class="fa-solid fa-temperature-arrow-up"></i></p>
        </div>
        <div class="d-flex justify-content-between">
        <p>MinTemp ( ${allData2[0].day.mintemp_c} &degC) <i class="fa-solid fa-temperature-arrow-down"></i></p>
        <p>MinTemp ( ${allData2[0].day.mintemp_f} &degF) <i class="fa-solid fa-temperature-arrow-down"></i></p>
        </div>
    </div>
    
    `
    
    }
    
     Raw.innerHTML=data2
    
    }


 getData2()

// =======================================================================================


// showing the right div



async function getData3(){

    
    var ress= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${currentCity}&days=3`)
    var ourData= await ress.json()

    allData3=ourData.forecast.forecastday
     
    console.log(allData3)

    disData2()
    


}



function disData2(){
    var data ="";
    
    for( i = 0 ; i < allData3.length ; i++){
    
    data =
    
    ` 
    
    <div>
    
    
    
        <img src="https://${allData3[2].day.condition.icon}" alt="" class="img-fluid">
        </br>
        <h4>${allData3[2].day.condition.text}</h4>
        </br>
        <h5>After Tomorrow <i class="fa-solid fa-calendar-days"></i></h5>
        <h4>${allData3[2].date}</h4>
        </br>
        <h5>Temperature</h5>
        <h4>AvgTemp ( ${allData3[2].day.avgtemp_c} &degC) <i class="fa-solid fa-temperature-three-quarters"></i></h4>
        <p>MaxTemp ( ${allData3[2].day.maxtemp_c} &degC) <i class="fa-solid fa-temperature-arrow-up"></i></p>
        <p>MinTemp ( ${allData3[2].day.mintemp_c} &degC) <i class="fa-solid fa-temperature-arrow-down"></i></p>
    </div>
    <div>
        <h5></h5>
    </div>
    
    `
    
    }
    
     Raw3.innerHTML=data
     
    
    }


getData3()


// =====================================================================================




// showing the mid div



async function getData(){
    
    var myResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${currentCity}&days=3`)
    var myData = await myResponse.json()




    
    allData=myData.forecast.forecastday
    
    

  console.log(allData)

    // data(allData)
    disData()
    

}


function disData(){
var data ="";

for( i = 0 ; i < allData.length ; i++){

data =

` 

<div>



    <img src="https://${allData[1].day.condition.icon}" alt="" class="img-fluid">
    </br>
    <h4>${allData[1].day.condition.text}</h4>
    </br>
    <h5>Tomorrow <i class="fa-solid fa-calendar-days"></i></h5>
    <h4>${allData[1].date}</h4>
    </br>
    <h5>Temperature </i></h5>
    <h4>AvgTemp ( ${allData[1].day.avgtemp_c} &degC) <i class="fa-solid fa-temperature-three-quarters"></i></h4>
    <p>MaxTemp ( ${allData[1].day.maxtemp_c} &degC) <i class="fa-solid fa-temperature-arrow-up"></i></p>
    <p>MinTemp ( ${allData[1].day.mintemp_c} &degC) <i class="fa-solid fa-temperature-arrow-down"></i></p>
</div>
<div>
    <h5></h5>
</div>

`

}

 Raw2.innerHTML=data
 

}


getData()


// ============================================================================


    searchBar.addEventListener("keyup", function() {
    currentCity = searchBar.value;
    getData2()
    getData()
    getData3()
    
});




   




























































