let recents = []

function search() {
    let myCity = document.getElementById("textInput").value
    let myKey = "df5251abf077df08946823104ffde4f5"
    let myAPI = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&units=metric&lang=no&appid=${myKey}`
    fetch(myAPI)
        .then (response => response.json())
        .then (data => {
                let name = data.name + ", " + data.sys.country
                document.getElementById("navn").innerHTML = name
    
                document.getElementById("temperatur").innerHTML = data.main.temp + "° C"
    
                document.getElementById("status").innerHTML = data.weather[0].description
    
                let minmax = data.main.temp_max + "° C" + " / " + data.main.temp_min + "° C"
                document.getElementById("minmax").innerHTML = minmax

                recents.push(data.name)
                if (recents.length > 8) {
                    recents.shift()
                }
                document.getElementById("recents").innerHTML = recents

        })
}

// Call function og clear input-felt når bruker søker
document.getElementById("buttonInput").addEventListener("click", function() {
    search()
    document.getElementById("textInput").value = ""
})

// Call function og clear når bruker trykker på Enter
document.getElementById("textInput").addEventListener("keydown", function () {
    if (event.key === "Enter") {
        search()
        document.getElementById("textInput").value = ""
    }
})