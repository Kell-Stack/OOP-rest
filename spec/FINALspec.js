describe("Restaurant Recommender", function() {
    var SiteDataBase = require("../app/OOP-rest.js");        //pull it from "index"
    var testSiteDataBase;
  
    beforeEach(function() {
      testSiteDataBase = new SiteDataBase();          // grabbing a new instance and putting it in this doc
    });
  
    describe("addRestaurant", function() {
        it("adds a restaurant to database", function() {
            expect(testSiteDataBase.restaurants.length).toEqual(0);
            testSiteDataBase.addRestaurant("a", "b", "", "");
            expect(testSiteDataBase.restaurants.length).toEqual(1);
        });
        it("sets the name of the restaurant", function() {
            testSiteDataBase.addRestaurant("a", "b", "c", "d");
            expect(testSiteDataBase.restaurants[0].restName).toEqual("a");
        });
    });

    describe("addUser", function() {
        it("adds a user to database", function() {
            expect(testSiteDataBase.users.length).toEqual(0);
            testSiteDataBase.addUser("x", "y", "z", "aa");
            expect(testSiteDataBase.users.length).toEqual(1);
        });
        it("sets the name of a user", function() {
            testSiteDataBase.addUser("x", "y", "z", "aa");
            expect(testSiteDataBase.users[0].firstName + " " + testSiteDataBase.users[0].lastName).toEqual("x" + " " + "y");
        });
    });

});