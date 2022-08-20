function updateMap()
{
    console.log("Updating map with realtime data")
     fetch("/data.json")
    //  fetch api is used to bought data from the data feed.
    .then(response => response.json())
    .then(rsp => {
        // console.log(rsp), by this you get array with data
        console.log(rsp.data) // by using this you will only get data not array name with data.

        //now we will use foreach to do something will all the sections:
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;

            cases = element.infected;
            if(cases>255){
                color = "rgb(255,0,0)";
            }
            else{
                color = `rgb(${cases}, 0,0)`;
            }

            // Mark on the map:
            new mapboxgl.Marker({
                draggable: false,
                color:color
                 
            })
               .setLngLat([longitude, latitude])
               .addTo(map); 
        });
    })
}
   
let interval = 2000;
setInterval(updateMap, interval);