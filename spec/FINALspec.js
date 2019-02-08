describe("Restaurant Recommender", function() {
    var SiteDataBase = require("../app/OOP-rest.js");        //pull it from "index"
    var testSiteDataBase;
  
    beforeEach(function() {
      testSiteDataBase = new SiteDataBase();          // grabbing a new instance and putting it in this doc
    });
  
    describe("addRestaurant", function() {
      it("adds a restaurant", function() {
        expect(testSiteDataBase.restaurants.length).toEqual(0);
        testSiteDataBase.addRestaurant("a", "b", "", "");
        expect(testSiteDataBase.restaurants.length).toEqual(1);
      });
      it("sets the name of the restaurant", function() {
        testSiteDataBase.addRestaurant("a", "b", "", "");
        expect(testSiteDataBase.restaurants[0].restaurantName).toEqual(
          "a"
        );
      });
    });
  });