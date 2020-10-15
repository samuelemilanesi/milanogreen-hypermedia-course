var query =
    fetch("../v1/people")
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
            create_row(n_rows, data);

        }
        )

create_row = function (n_rows, data) {

    let n_el_per_row = 3;

    console.log("sono in create row");
    console.log(n_rows);
    $("#thumbnail-links").append(`
    <div class="container" id="thumb-container"> 
    </div>`)

    for (i = 0; i < n_rows; i++) {
        console.log("sono nel for");

        $("#thumb-container").append(`
            <div class="row">
                <div class="col-lg-12 mx-auto deck" id="row${i}">
                </div>
            </div>
        `)

        create_thumbs(i, n_el_per_row, data);
    }
}

create_thumbs = function (row_i, n_el_per_row, data) {
    offset = row_i * n_el_per_row;

    for (j = 0; j < n_el_per_row; j++) {
        let { personid, name, role, motto, image, mail, phone } = data[offset + j];

        $(`#row${row_i}`).append(`
        
        <div class="card col-lg-3">
        <a href="./person.html?id=${personid}">
            <img class="card-img-top img-fluid" src="${image}" alt="${name}" >
                <div class="card-body">
                <p class="card-text">
                <b> ${name} </b><br/>
                    ${role}
                </p>
                </div>
            </a>
        </div>
        `)
    }

}
