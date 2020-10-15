// guarda nell'url un'espressione del tipo ?name=results[1], 
// se c'é restituisce results[1] altrimenti -1
$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || -1;
}

const id = $.urlParam('id')

var query =
    fetch("../v1/service/" + id.toString())
        .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json();
        })
        .then(function (data) {

            let {name,description,image} = data[0];
           
            $('#breadcrumbs').append( `Servizi / ${name}`);
            $("#description-title").append(`${name}`);
            $("#description-text").append(`${description}`);
            $("#service-image").append(`
                <img src="${image}" alt="${name} class="card-img-top img-fluid"  />
            `)
            return data;
        })
        .then(function (serviceData) {
            $('#related-people').append(`
                <div class="container" id="thumb-container_people">      
                   
                </div>
                `)

            fetch("../v1/service/" + id + "/related_people")
                .then(function (response) {
                    if (!response.ok) {
                        throw new Error("HTTP error, status = " + response.status);
                    }
                    return response.json();
                })
                .then(function (data) {

                    let n_el = data.length;
                    let n_rows = (n_el - n_el % 3) / 3;

                    console.log("entro in create row people")
                    create_row(n_rows, data, "people");

                }
                )
            return serviceData;
        })
        .then(function(serviceData) {
            $('#related-events').append(`
                <div class="container" id="thumb-container_events">      
                   
                </div>
                `)

            fetch("../v1/service/" + id + "/related_events")
                .then(function (response) {
                    if (!response.ok) {
                        throw new Error("HTTP error, status = " + response.status);
                    }
                    return response.json();
                })
                .then(function (data) {

                    let n_el = data.length;
                    let n_rows = (n_el - n_el % 3) / 3;

                    console.log("entro in create row")
                    create_row(n_rows, data, "events");

                })

        });

create_row = function (n_rows, data, section) {

    let n_el_per_row = 3;

    for (i = 0; i < n_rows; i++) {
    

        $(`#thumb-container_${section}`).append(`
                        <div class="row justify-content-center" id="row_${i}_${section}">
    
                        </div>
                    `)

        create_thumbs(i, n_el_per_row, data, section);
    }
}

create_thumbs = function (row_i, n_el_per_row, data, section) {
    offset = row_i * n_el_per_row;

    for (j = 0; j < n_el_per_row; j++) {

        if (section == 'people') {
            let {name,personid,image} = data[offset + j];
            console.log('people infoz:')
            console.log(name,personid,image)
            $(`#row_${row_i}_${section}`).append(`
            <div class="card col-lg-3">
            <a href="./person.html?id=${personid}">
              <img class="card-img-top img-fluid" src="${image}" alt="${name}">
              <div class="card-body">
                <p class="card-text">
                  <b> ${name}</b>
                </p>

              </div>
              </a>
            </div>
                    `)
        }
        if (section == 'events') {
            let {eventid, image, date, name } = data[offset + j];
            console.log('events infoZ:');
            console.log(eventid, image, date, name)
            $(`#row_${row_i}_${section}`).append(`
            <div class="col-lg-4 ">
            <a href="./event_general.html?id=${eventid}">
                <img src="${image}" class="event-img" alt="${image}">

                <h1 class="event-title">${name}</h1>
                <h2 class="event-time"> ${date}</h2>

            </a>
            </div>
                    `)
        }

    }

}
      