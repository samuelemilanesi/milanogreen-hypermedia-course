// guarda nell'url un'espressione del tipo ?name=results[1], 
// se c'é restituisce results[1] altrimenti -1
$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || -1;
}

const id = $.urlParam('id')

var query =
    fetch("../v1/person/" + id.toString())
        .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json();
        })
        .then(function (data) {

            let { name, role, motto, image, mail, phone } = data[0];
            $('#breadcrumbs').append( `Associazione / Staff / ${name}`);
            $('#profilo').append(`
    <div class="container">
        <div class="row">      
          <div class="col-lg-6 mx-auqto deck">
            <div class="card col-lg-10">
              <img class="card-img-top img-fluid" src="${image}" alt="${name}">
            </div>
          </div>
      <div class="card col-lg-6">
           <div class="row ">
             <div class="col">
              <h4 class="info-el-name">${name}</h4>
             </div>
           </div>
           <div class="row ">
            <div class="col-6">
              <h4 class="info-el-role">${role}</h4>
            </div>
           </div>
           <div class="row  ">
            <div class="col-12">
             <h4 class="info-el-motto">${motto}</h4>
            </div>
           </div>
          <div class="row align-items-center ">
           <div class="col-6">
             <h4 class="info-el-contatti">Contatti</h4>
           </div>
          </div>
        <div class="row align-items-center ">
          <div class="col-8">
           <img class="contact-img-mail img-fluid" src="../assets/img/association/staff_team/Vector.png"  alt="${mail}">   
              <h4 class="info-el-mail">
                <a href="mailto://${mail}" class="nav-link">
                ${mail}
               </a>
              </h4>
           </div>
        </div>
      <div class="row align-items-center ">
       <div class="col-7">
        <img class="contact-img-phone img-fluid" src="../assets/img/association/staff_team/Vector%20(1).png" alt="${phone}">
          <h4 class="info-el-mail">
            <a href="tel:${phone}" class="nav-link">${phone}  </a> </h4>
       </div> 
      </div>
    </div>
   </div>
      </div>
        `)

            return data;
        })
        .then(function (personData) {
            $('#eventi-gestiti').append(`
                <div class="container" id="thumb-container_events">      
                    <div class="card col lg-6">
                        <h2 class="description-title" id="nome" >
                            ${personData[0].name}
                        </h2>
                    </div>
                </div>
                `)

            fetch("../v1/person/" + id + "/related_events")
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

                }
                )
            return personData;
        })
        .then(function (personData) {
            $('#servizi-gestiti').append(`
                <div class="container" id="thumb-container_services">      
                    <div class="card col lg-6">
                        <h2 class="description-title" id="nome" >
                            ${personData[0].name}
                        </h2>
                    </div>
                </div>
                `)

            fetch("../v1/person/" + id + "/related_services")
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
                    create_row(n_rows, data, "services");

                })

        });

create_row = function (n_rows, data, section) {

    let n_el_per_row = 3;

    console.log("sono in create row");
    console.log(n_rows);


    for (i = 0; i < n_rows; i++) {
        console.log("sono nel for");

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

        if (section == 'events') {
            let {eventid, image, date, name } = data[offset + j];
            console.log(image, date, name)
            $(`#row_${row_i}_${section}`).append(`
            <div class="col-lg-4 ">
            <a href="./event_general.html?id=${eventid}">
                <img src="${image}" class="event-img" alt="${image}">
                
                <h1 class="event-title">${name}</h1>
                <h2 class="event-time"> ${date} </h2>
            </a>
        </div>
                    `)
        }
        if (section == 'services') {
            let {serviceid, image, date, name } = data[offset + j];
            console.log(image, date, name)
            $(`#row_${row_i}_${section}`).append(`
            <div class="col-lg-4 ">

            <a href="./service_general.html?id=${serviceid}">
                <img src="${image}" class="event-img" alt="${image}">
                <h1 class="event-title">${name}</h1>
            </a>
        </div>
                    `)
        }

    }

}