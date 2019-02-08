//--------------------------------------------START DATABASE-------------------------------------------------------
//#my database.... constructor doesn't take any arguments

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
   addRestaurant(name){
       this.restaurants.push(new Rests(name));


    
    
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




module.exports= SiteDataBase;