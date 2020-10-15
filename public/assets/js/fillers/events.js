var query = 
fetch("../v1/events")
.then(function(response){
    if(!response.ok){
        throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
})
.then(function(unsorted_data){

    data = unsorted_data.sort(sort_by_date);
    let n_events = data.length;
    console.log(n_events);
  

    for(i =0;i<n_events;i++){
      console.log("entro nel for")
        insert_event(i,data)
    }



});


insert_event = function(idx,data){
    console.log("sono in insert_event")
    let {eventid, name, date, type, image,icon,description,timestamp} = data[idx];
    short_description = cut_description(description);
    strmonth = find_month(timestamp);

    $("#all-events").append(`
    <section class="event ${type} ${strmonth}">
    <div class="container">
      <div class="row justify-content-center">

        <div class="col-lg-4 ">
        <a href="./event_general.html?id=${eventid}" class="more"> 
          <img src="${image}" class="event-img" alt="${image}">
        </a>
        </div>

        <div class="col-lg-1">
          <img src="${icon}" class="event-type-icon" alt="${icon}"/>
        </div>

        <div class="col-lg-5 ">
          <div class="event-info">

            <h3 class="event-title">${name}</h3>
            <h4 class="event-time"> ${date}</h4>

            <p class="event-description"> "${short_description}
            </p>
            <a href="./event_general.html?id=${eventid}" class="more"> Continua</a>

          </div>

        </div>
      </div>
    </div>
  </section>

    `);
};

find_month = function(date){ 
    let mon = parseInt(date.toString().substring(4,6));
    let months = ['GEN', 'FEB', 'MAR', 'APR', 'MAG', 'GIU', 'LUG','AGO','SET','OTT','NOV','DIC'];
    return months[mon-1]
}


cut_description = function(descr){

    short_desc = descr.substring(0,165) +'...';
    
    return short_desc;
}


function sort_by_date(a,b) {
  return a.timestamp -b.timestamp  ;
}
