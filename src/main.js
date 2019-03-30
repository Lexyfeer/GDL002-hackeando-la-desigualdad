function loadJASON () {
    fetch('datosmujeres.json')
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
    });
};
loadJASON();