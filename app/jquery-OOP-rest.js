
function showRests(){ 
    let html = "";
    html += "<br>";
    html += dataBase.restaurants[0].restName + "<br>"; 
    html += dataBase.restaurants[1].restName + "<br>";      // converting data into html w jquery
    html += dataBase.restaurants[2].restName + "<br>";
    html += dataBase.restaurants[3].restName + "<br>";
    html += dataBase.restaurants[4].restName + "<br>";
//     $("#rest1").click(function() {
//         $ ( this ).slideDown();
// });
$("#rest1").append(html);
}

function showUsers () {
    let html = "";
    html += "<br>";
    html += dataBase.users[0].firstName + " " + dataBase.users[0].lastName + "<br>";
    html += dataBase.users[1].firstName + " " + dataBase.users[1].lastName + "<br>";
    html += dataBase.users[2].firstName + " " + dataBase.users[2].lastName + "<br>";
    html += dataBase.users[3].firstName + " " + dataBase.users[3].lastName + "<br>";
    $("#user1").append(html);

}

function showCuisine () {
    let html = "";
    html += "<br>";
    html += dataBase.restaurants[0].cuisine + "<br>";
    html += dataBase.restaurants[1].cuisine + "<br>";
    html += dataBase.restaurants[2].cuisine + "<br>";
    html += dataBase.restaurants[3].cuisine + "<br>";
    html += dataBase.restaurants[4].cuisine + "<br>";
    $("#cuisine1").append(html);
}


// $("#").click(function(){

// }
//div id="rest1"




//# all functions will be above




$(document).ready(function(){        // main program/interface
    showRests();
    showUsers();
    showCuisine();

});