$(document).ready(function (){
    $.get("viewdatabase.php", function (data){
        var myJSON = JSON.parse(data);
        var table = document.getElementById("info_table");
        for (var i = 0; i < myJSON.length; i++) {
            var tr = document.createElement('tr');
            var tdName = document.createElement('td');
            var tdAddr = document.createElement('td');
            var tdCity = document.createElement('td');
            var tdPhone = document.createElement('td');
            var tdDob = document.createElement('td');
            var tdEmail = document.createElement('td');
            tdName.innerHTML = myJSON[i].Name;
            tdAddr.innerHTML = myJSON[i].Address;
            tdCity.innerHTML = myJSON[i].city;
            tdPhone.innerHTML = myJSON[i].Phone_no;
            tdDob.innerHTML = myJSON[i].dob;
            tdEmail.innerHTML = myJSON[i].Email;
            tr.appendChild(tdName);
            tr.appendChild(tdPhone);
            tr.appendChild(tdCity);
            tr.appendChild(tdEmail);
            tr.appendChild(tdDob);
            tr.appendChild(tdAddr);
            table.appendChild(tr);
        }
    });
});

function myFunction() {
    // Implement sorting here..

    console.log("In my function");
}

