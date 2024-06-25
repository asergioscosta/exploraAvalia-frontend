$(document).ready(onInit);

function onInit() {
    
    $.ajax({
        url: "http://localhost:8080/api/viajante/total",
        type: "get",
        dataType: "json",
        success: function (res) {
            $("#div-total-viajantes").html(res);
        }
    });
}