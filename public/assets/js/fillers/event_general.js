// guarda nell'url un'espressione del tipo ?name=results[1], 
// se c'é restituisce results[1] altrimenti -1
$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || -1;
}

const id = $.urlParam('id')

var query =
    fetch("../v1/event/" + id.toString())
        .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json();
        })
        .then(function (data) {

            let { name, date, address, image, contact_id, icon, description } = data[0];


            $('#breadcrumbs').append(`Eventi / ${name}`);


            $("#single-event").append(`
                <div class="container">
                    <div class="row justify-content-center align-items-center description-title">

                        <h2 id="title"> ${name} </h2>

                        <img src="${icon}" class="type-icon" id="type-icon" alt="${icon}" />

                    </div>

                    <div class="row">
                        <div class="col-lg-6 mx-auto">
                            <img src="${image}" class="desc-img" id="image" alt="${name}"/>

                        </div>

                        <div class="col-lg-6 mx-auto">

                            <div class="row row-col-2 align-items-center">
                                <div class="col">
                                    <h4 class="info-el">Dove</h4>
                                </div>
                                <div class="col">
                                    <p class="info-el">
                                    ${address}
                                    </p>
                                </div>
                            </div>

                            <div class="row align-items-center ">
                                <div class="col">
                                    <h4 class="info-el">Quando</h4>
                                </div>
                                <div class="col">
                                    <p class="info-el">
                                    ${date}
                                    </p>
                                </div>
                            </div>

                            <div class="row align-items-top mt-1">
                                <div class="col">
                                    <h4 class="info-el">Contatto</h2>
                                </div>
                                <div class="col">
                                    <ul>
                                        <li>
                                            <a href="./person.html?id=${contact_id}">
                                                <p class="info-el" id="contatto">

                                                </p>
                                            </a>
                                        </li>
                                        <li class="info-el" id="contact-email">
                                            
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="lead description-text text-justify">
                                <h4>Descrizione</h4>

                                <p>
                                    ${description}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            `)
            return data;
        })
        .then(function (data) {

            contact_id = data[0].contact_id;
            fetch("../v1/person/" + contact_id.toString())
                .then(function (response) {
                    if (!response.ok) {
                        throw new Error("HTTP error, status = " + response.status);
                    }
                    return response.json();
                })
                .then(function (data) {

                    $('#contatto').append(`
                        ${data[0].name}
                    `)

                    $('#contact-email').append(`

                    <a href="mailto:${data[0].mail}">
                        ${data[0].mail}
                    </a>
                    `)
                })

            return data;
        })
        .then(function (data) {

            fetch("../v1/event/" + id.toString() + "/related_services")
                .then(function (response) {
                    if (!response.ok) {
                        throw new Error("HTTP error, status = " + response.status);
                    }
                    return response.json();
                })
                .then(function (data) {

                    $("#related-services").append(`
                    
                    <div class="container" id="thumb-container">
                        <div class="row justify-content-center">
                            <h2> Servizi correlati</h2>
                        </div>
                    </div>
                    `)

                    let n_el = data.length;
                    let n_rows = (n_el - n_el % 3) / 3;

                    console.log("entro in create row")
                    create_row(n_rows, data);
                })
        })

create_row = function (n_rows, data) {

    let n_el_per_row = 3;

    console.log("sono in create row");
    console.log(n_rows);

    for (i = 0; i < n_rows; i++) {
        console.log("sono nel for");

        $("#thumb-container").append(`
                    <div class="row justify-content-around" id="row${i}">
                      
                    </div>
                `)

        create_thumbs(i, n_el_per_row, data);
    }
}

create_thumbs = function (row_i, n_el_per_row, data) {
    offset = row_i * n_el_per_row;

    for (j = 0; j < n_el_per_row; j++) {
        let { name, image, serviceid } = data[offset + j];
        console.log(name, image, serviceid)
        $(`#row${row_i}`).append(`
                <div class="card col-lg-3">
                <a href="./service_general.html?id=${serviceid}" class="more">
                 <img class="card-img-top img-fluid" src="${image}" alt="${name}/>
                    <div class="card-body">
                        <p class="card-text">
                            ${name}
                        </p>
                    </div>
                </a>

                </div>
                `)
    }

}


