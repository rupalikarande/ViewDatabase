

$(document).ready(function () {
      $.getJSON("viewdatabase.php",
    function ($myJSON) {
        var tr;
        for (var i = 0; i <   $myJSON.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" +   $myJSON[i].Name + "</td>");
            tr.append("<td>" +   $myJSON[i].Phone_NO + "</td>");
             tr.append("<td>" +   $myJSON[i].Address + "</td>");
            tr.append("<td>" +   $myJSON[i].City + "</td>");
            tr.append("<td>" +   $myJSON[i].Email + "</td>");
            tr.append("<td>" +   $myJSON[i].DOB + "</td>");
            $('table').append(tr);
        }
    })
})

