
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

$("#newuserform").


//when the form is submitted:
//get the value of first name
//get the value of last name
//Sitedatabase.addUser(firstName, lastName)



// function addUser(){
//     // let html = "";
//     // html += "<br>";


    
//     //     $( "#fnameinput" ).submit(function( event ) {
//     //         // console.log("kelly sabrina sousa is the best")
//     //         if ( $( "#fnameinput" ).val() === "" ) {
//     //          ;
//     //     });
//     //     $( "#lnameinput" ).submit(function( event ) {
//     //         if ( $( "input:first" ).val() === "" ) {
//     //         $( "span" ).text( "Validated..." ).show();
//     //         return;
//     // }



   
//     $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
//     event.preventDefault();
//   });

//   $( "#lnameinput" ).submit(function( event ) {
//     if ( $( "input:first" ).val() === "" ) {
//       $( "span" ).text( "Validated..." ).show();
//       return;
//     }
   
//     $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
//     event.preventDefault();
//   });
}


//try adding bootstap directly to metas (?)

// function addUser () {        
//     prompt("Please enter your first name");
//         if (html || " ") {
//             return "try again, please enter your first name";
//         } else { 
//             return firstName;
//         }
//     prompt ("Please enter last name");    
// }
// }

// function addUser(){
//     let html = "";
    
// }


// $("#").click(function(){

// }
//div id="rest1"




//# all functions will be above

//*******************************************************************************************


$(document).ready(function(){        // main program/interface
    showRests();
    showUsers();
    showCuisine();
    //alert ("Welcome to Not-Yelp");
    // addUser();

});