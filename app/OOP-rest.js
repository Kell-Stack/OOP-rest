// let myOOP = {
//   "restName": ["Call Thai-Ron", "Pho King", "Dim the Lights Sum", "Jamaican Me Crazy", "Burg-ehtabout-It"],
//   "cuisine": ["Thai", "Vietnamese", "Dim Sum", "Jamaican", "American", "Fusion", "Soul", "Italian"],
//   "user": ["Angela Andaconda", "Gina Lash", "Johnny Abatti", "Nannette Manoir"]
//   "score": [1,2,3,4,5]
// }


//my database.... constructor doesn't take any arguments

//--------------------------------------------START DATABASE-------------------------------------------------------
  class SiteDataBase {
    constructor() {
      // All main properties should go here.
      this.ratings = [];
      this.restaurants = [];
      this.users = [];
      this.categories = [];
    }
   get usersArray () {        //you need the "get" in front of this function inside Class
        return this.users;
   }          
   get restsArray () {
       return this.restaurants;
   }
  }

 //--------------------------------------------END DATABASE-------------------------------------------------------


 //--------------------------------------------START CLASSES-------------------------------------------------------

 class User {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
 }

 class Rests {
    constructor(restName, cuisine, rating) {
    this.restName = restName;
    this.cuisine = cuisine;
    this.rating = rating;
    }
 }


//create object to add people, restaurants, etc into db
let dataBase =  new SiteDataBase ();

 //--------------------------------------------END CLASSES-------------------------------------------------------


//--------------------------------------------START USERS-------------------------------------------------------

  
let angA = new User ("Angela", "Andaconda");
dataBase.users.push(angA);


let ginL = new User ("Gina", "Lash");
dataBase.users.push(ginL);

let johnA = new User ("Johnny", "Abatti");
dataBase.users.push(johnA);

let nanM = new User ("Nannette", "Manoir");
dataBase.users.push(nanM);

console.log(dataBase.users);
console.log(dataBase.usersArray)

//--------------------------------------------END USERS-------------------------------------------------------


//--------------------------------------------START RESTS-------------------------------------------------------
let thaiRon = new Rests("Call Thai-Ron", "Thai", 6 );
dataBase.restaurants.push(thaiRon);


let phoKing = new Rests("Pho King", "Vietnamese", 5);
dataBase.restaurants.push(phoKing);


let dimLightsSum = new Rests("Dim the Lights Sum", "Chinese", 4);
dataBase.restaurants.push(dimLightsSum);


let jamCrazy = new Rests("Jamaican Me Crazy", "Jamaican", 7);
dataBase.restaurants.push(jamCrazy);


let burgerIt = new Rests("Burg-ehtabout-It", "American", 3);
dataBase.restaurants.push(burgerIt);




//--------------------------------------------END RESTS-------------------------------------------------------


// //--------------------------------------------Start Cuisine-------------------------------------------------------

// let thai = new cuisine("Thai");
// dataBase.restaurants.push(thai);


//   "cuisine": ["Thai", "Vietnamese", "Dim Sum", "Jamaican", "American", "Fusion", "Soul", "Italian"],

  // const thaiRon = new Restaurant ("Call Thai-Ron", "Thai", 6);
  // const phoKing = new Restaurant ("Pho King", "Vietnamese", 5);
  // const dimLightsSum = new Restaurant ("Dim the Lights Sum", "Chinese", 4);

















// console.log(dataBase.restaurants);
// console.log(dataBase.restsArray);      //#remind yuri


//# we have two ways of grabbing our rests arrays --> dataBase.rests or dataBase.restsArray

//--------------------------------------------END RESTS-------------------------------------------------------




// class RestRec {
//     //use the psudo values in constructor to create properties that are equal to what you plus in to the arguments
//     constructor (user, allRests, searchFilter){
//       this.user = user;
//       this.allRests = allRests;
//       this.searchFilter = searchFilter;
//   }
//   // write a func to return the suggested rests
//   // change prune name to strainedRests
//     sugRests(){
//         // return this.allRests;
//         return searchFilter.prune;
          
//     }
//   }
  
  
  
//   class Filter {
//     constructor (minStarRate, desiredCuisine, unFilterRest){
//       this.minStarRate = minStarRate;
//       this.desiredCuisines = desiredCuisines;
//       this.unFilterRest = unFilterRest;
//     }
//   }
  


//*********************************************** INTERFACE **************************************************

// function showRests(){ 
//     let html = "";
//     html += "<br>";
//     html += dataBase.restaurants[0].restName + "<br>"; 
//     html += dataBase.restaurants[1].restName + "<br>";      // converting data into html w jquery
//     html += dataBase.restaurants[2].restName + "<br>";
//     html += dataBase.restaurants[3].restName + "<br>";
//     html += dataBase.restaurants[4].restName + "<br>";
// //     $("#rest1").click(function() {
// //         $ ( this ).slideDown();
// // });
// $("#rest1").append(html);
// }

// function showUsers () {
//     let html = "";
//     html += "<br>";
//     html += dataBase.users[0].firstName + " " + dataBase.users[0].lastName + "<br>";
//     html += dataBase.users[1].firstName + " " + dataBase.users[1].lastName + "<br>";
//     html += dataBase.users[2].firstName + " " + dataBase.users[2].lastName + "<br>";
//     html += dataBase.users[3].firstName + " " + dataBase.users[3].lastName + "<br>";
//     $("#user1").append(html);

// }

// function showCuisine () {
//     let html = "";
//     html += "<br>";
//     html += dataBase.restaurants[0].cuisine + "<br>";
//     html += dataBase.restaurants[1].cuisine + "<br>";
//     html += dataBase.restaurants[2].cuisine + "<br>";
//     html += dataBase.restaurants[3].cuisine + "<br>";
//     html += dataBase.restaurants[4].cuisine + "<br>";
//     $("#cuisine1").append(html);
// }


// // $("#").click(function(){

// // }
// //div id="rest1"








// //# all functions will be above




// $(document).ready(function(){        // main program/interface
//     showRests();
//     showUsers();
//     showCuisine();

// });
//********************************************* INTERFACE END *********************************************









  //this poorely named function will loop through unFilterRest and returns the ones that match minStarRate
  //call prune strainedRests after class
  //   prune(){
  
  //     return this.unFilterRest.filter((rests)) => rests.avgStarRate >= this.minStarRate) && rests.cuisine.includes(rests.cuisine))
  //   }
  // }
  
  // class Rest{
  // constructor (name, cuisine, avgStarRate){
  //   this.name = name;
  //   this.cuisine = cuisine;
  //   this.avgStarRate = avgStarRate;
  //   }
  
  // const thaiRon = new Restaurant ("Call Thai-Ron", "Thai", 6);
  // const phoKing = new Restaurant ("Pho King", "Vietnamese", 5);
  // const dimLightsSum = new Restaurant ("Dim the Lights Sum", "Chinese", 4);
  
  // const rests = [thaiRon, phoKing, dimLightsSum]
  
  // const filter = new Filter ()
  
  
  // const angA = new RestRecc ("Angela Andaconda");
  // const ginL = new RestRecc ("Gina Lash");
  // const johnA = new RestRecc ("Johnny Abatti");
  // const nanM = new RestRecc ("Nannette Manoir");
  
  
  // console.log(filter.prune());
  
  
    // const angA = new restRec("Angela Andaconda","Dim the Lights Sum", "Dim Sum")
    // angA
    //angA.sugRests() should returns 'Dim the Lights Sum'
    //const angAwants =  new gaFilterFish (3, "Thai", ["Burg-ehtabout-It", "Jamaican Me Crazy"])
  
  
  // let myOOP = {
  //   "restName": ["Call Thai-Ron", "Pho King", "Dim the Lights Sum", "Jamaican Me Crazy", "Burg-ehtabout-It"],
  //   "cuisine": ["Thai", "Vietnamese", "Dim Sum", "Jamaican", "American", "Fusion", "Soul", "Italian"],
  //   "user": ["Angela Andaconda", "Gina Lash", "Johnny Abatti", "Nannette Manoir"]
  //   "score": [1,2,3,4,5]
  // }
  
  
  
  
  //-----------------------------------------------------------------------------------------------------------------------------
  // class Rating {
  //   constructor(user, restaurant, howManyStars) {
  //     this.user = user;
  //     this.restaurant = restaurant;
  //     this.stars = howManyStars;
  //   }
  
  //   printRatingDetails() {
  //     if (this.user && this.restaurant && this.stars) {
  //       var starPlural = "stars";
  //       if(this.stars === 1) {
  //         starPlural = "star";
  //       }
  //       console.log("!".repeat(this.stars));
  //       console.log("The user", this.user.name, "gives", this.restaurant.name, this.stars, starPlural);
  //       console.log("!".repeat(this.stars));
  //       console.log();
  //     }
  //   }
  // }
  
//   class RestaurantRecommender {
//     constructor() {
//       // All main properties should go here.
//       this.ratings = [];
//       this.restaurants = [];
//       this.users = [];
//       this.categories = [];
//     }
  
  //   addRestaurant(newRestaurant) {
  //     // Adds a new Restaurant to the System
  //     this.restaurants.push(newRestaurant);
  //   }
  
  //   addUser(newUser) {
  //     // Adds a new User to the System
  //     this.users.push(newUser);
  //   }
  
  //   addCategory(newCat) {
  //     // Adds a new Category to the System
  //     this.categories.push(newCat);
  //   }
  
  //   addRating(user, restaurant, stars) {
  //     // Adds a user rating for a restaurant
  //     this.ratings.push(new Rating(user, restaurant, stars));
  //   }
  
  //   addRestauranttoCategory() {
  //     // Adds Restaurant to Category
  //     // Adds Category to Restaurant
  //   }
  
  
  //   deleteUser() {
  //     // Deletes a User from the system
  //     // Deletes User ratings for a restaurant.
  //   }
  
  //   deleteRestaurant() {
  //     // make sure to also delete a restaurant from the categories.
  //   }
  
  //   deleteCategory() {
  //     // make sure to delete categories from a restaurant that had them.
  //   }
  
  //   filter() {
  //   }
  // }
  

  
  //   printUserDetails() {
  //     console.log(this.name, this.faveColor);
  //   }
  // }
  
  // let j = new User("judy", "red");
  // let i = new User("isabelle", "ivory");
  // let w = new User("wombat", "grey");
  
  // let rr = new RestaurantRecommender;
  
  // rr.addUser(j);
  // rr.addUser(i);
  
  // // now my rr should have two users, only judy and isabelle, because i haven't added wombat yet
  // console.log("-----should have two users------\n", rr);
  
  // class Category {
  //   constructor(name) {
  //     this.name = name;
  //     this.restaurants = []; // for now this data will be redundant, but that's okay. it's redundant because it's in two places: the category has a list of restaurants, but a restaurant object itself also contains data about what category the restaurant is in. this is not great practice but we're doing it here for now. we will see how relational databases help us fix this in the future!
  //   }
  // }
  
  // let fastFood = new Category("Fast Food");
  // rr.addCategory(fastFood);
  
  // // now my rr should have two users and one category
  // console.log("-----should have 2 users and 1 category------\n", rr);
  
  // class Restaurant {
  //   constructor(name, category) {
  //     this.name = name;
  //     this.category = category;
  //   }
  
  //   printRestaurantDetails() {
  //     if (!this.category) {
  //       console.log(restaurant.name, "has no category yet")
  //     } else {
  //       console.log(this.name, this.category.name);
  //     }
  //   }
  // }
  
  // let mcd = new Restaurant("McDonald's", fastFood);
  // rr.addRestaurant(mcd);
  
  // console.log("------should have added 1 restaurant with a category--------\n", rr);
  
  
  // // let judyRatesMcDs = new Rating(j, mcd, 5); //i'm not going to have named Ratings in my system. 
  
  // rr.addRating(j, mcd, 5);
  
  // console.log("------should have added judy's five-star rating of macdonald's-------", rr);
  // console.log();
  
  // rr.ratings[0].printRatingDetails(); // i can call rr.ratings[0] because i know that i've added one rating so far. 
  
  // rr.addRating(w, mcd, 1);
  
  // rr.ratings[1].printRatingDetails();
  
  // class RestaurantRecommender() {
  //     constructor() {
  //     // All main properties should go here.
  //     this.ratings = [];
  //     this.restaurants = [];
  //     this.users = [];
  //     }
  
  //     addRestaurant() {
  //     // Adds a new Restaurant to the System
  //     }
  
  //     addUser() {
  //     // Adds a new User to the System
  //     }
  
  //     addCategory() {
  //     // Adds a new Category to the System
  //     }
  
  //     addRating(){
  //     // Adds a user rating for a restaurant
  //     }
  
  //     addRestauranttoCategory(){
  //     // Adds Restaurant to Category
  //     // Adds Category to Restaurant
  //     }
  
  
  //     deleteUser() {
  //     // Deletes a User from the system
  //     // Deletes User ratings for a restaurant.
  //     }
  
  //     deleteRestaurant() {
  //     // make sure to also delete a restaurant from the categories.
  //     }
  
  //     deleteCategory() {
  //     // make sure to delete categories from a restaurant that had them.
  //     }
  
  //     filter(){
  //     }
  // }
  
  
  // flaws/caveats in my demo: 
  // 1. i have my lines of code that are declaring and adding new Users and Rests and etc interspersed with my class declarations. this is confusing. i should define my classes at the top, and then have a separate section at the bottom where i mess around with initializing my rr object, and defining and adding Users and other objects. 
  //    - why did i do it that way? it's just how i ended up writing it in a few minutes =) 
  //    - okay, so why haven't i fixed it yet? well, 
  // 2. 
  
